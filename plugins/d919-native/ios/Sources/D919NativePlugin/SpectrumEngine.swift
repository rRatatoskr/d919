import AVFoundation
import Accelerate
import UIKit
import os

/// Ring buffer written from the realtime audio thread and read from the analysis queue.
final class SampleRing {
    private let capacity: Int
    private let buffer: UnsafeMutablePointer<Float>
    private let lock: UnsafeMutablePointer<os_unfair_lock>
    private var writeIndex = 0
    private var totalWritten = 0

    init(capacity: Int) {
        self.capacity = capacity
        buffer = UnsafeMutablePointer<Float>.allocate(capacity: capacity)
        buffer.initialize(repeating: 0, count: capacity)
        lock = UnsafeMutablePointer<os_unfair_lock>.allocate(capacity: 1)
        lock.initialize(to: os_unfair_lock())
    }

    deinit {
        buffer.deallocate()
        lock.deallocate()
    }

    /// `stride` > 1 は interleaved バッファの先頭チャンネルだけを拾うため
    func write(_ samples: UnsafePointer<Float>, count: Int, stride: Int) {
        os_unfair_lock_lock(lock)
        for i in 0..<count {
            buffer[writeIndex] = samples[i * stride]
            writeIndex += 1
            if writeIndex == capacity { writeIndex = 0 }
        }
        totalWritten &+= count
        os_unfair_lock_unlock(lock)
    }

    /// 直近 `count` サンプルを古い順に `dest` へコピーする
    func readLatest(into dest: UnsafeMutablePointer<Float>, count: Int) -> Int {
        os_unfair_lock_lock(lock)
        let n = min(count, capacity)
        var start = writeIndex - n
        if start < 0 { start += capacity }
        let firstPart = min(n, capacity - start)
        dest.update(from: buffer + start, count: firstPart)
        if firstPart < n {
            (dest + firstPart).update(from: buffer, count: n - firstPart)
        }
        let written = totalWritten
        os_unfair_lock_unlock(lock)
        return written
    }

    var written: Int {
        os_unfair_lock_lock(lock)
        defer { os_unfair_lock_unlock(lock) }
        return totalWritten
    }

    func reset() {
        os_unfair_lock_lock(lock)
        buffer.update(repeating: 0, count: capacity)
        writeIndex = 0
        totalWritten = 0
        os_unfair_lock_unlock(lock)
    }
}

/// マイク入力を Web Audio の AnalyserNode と同じ手順
/// (Blackman 窓 → FFT → 時間方向スムージング → dB → 0-255) で解析する。
/// Apple Music / Spotify の音源は DRM のため直接解析できないので、
/// スピーカーから流れている音をマイクで拾ってスペアナを動かす。
final class SpectrumEngine {
    struct Options {
        var fftSize = 8192
        var smoothing: Float = 0.3
        var minDecibels: Float = -75
        var maxDecibels: Float = -20
        var binCount = 2048
        var updateRate: Double = 30
    }

    /// (byte spectrum, sampleRate)
    var onFrame: (([UInt8], Double) -> Void)?
    var onError: ((String) -> Void)?

    private let engine = AVAudioEngine()
    private let queue = DispatchQueue(label: "d919.spectrum", qos: .userInteractive)
    private var options = Options()
    private var ring = SampleRing(capacity: 8192)
    private var sinkNode: AVAudioSinkNode?
    private var tapInstalled = false
    private var timer: DispatchSourceTimer?
    private var watchdog: DispatchWorkItem?

    private var fftSetup: FFTSetup?
    private var log2n: vDSP_Length = 13
    private var window: [Float] = []
    private var timeData: [Float] = []
    private var windowed: [Float] = []
    private var real: [Float] = []
    private var imag: [Float] = []
    private var magnitudes: [Float] = []
    private var smoothed: [Float] = []
    private var lastWritten = -1

    private(set) var sampleRate: Double = 48000
    private(set) var isRunning = false
    /// バックグラウンド移行などで一時停止中か
    private var suspended = false
    private var observers: [NSObjectProtocol] = []

    init() {
        let center = NotificationCenter.default
        observers.append(center.addObserver(forName: AVAudioSession.interruptionNotification, object: nil, queue: .main) { [weak self] note in
            self?.handleInterruption(note)
        })
        observers.append(center.addObserver(forName: .AVAudioEngineConfigurationChange, object: engine, queue: .main) { [weak self] _ in
            self?.restartIfNeeded()
        })
        observers.append(center.addObserver(forName: UIApplication.didEnterBackgroundNotification, object: nil, queue: .main) { [weak self] _ in
            self?.suspend()
        })
        observers.append(center.addObserver(forName: UIApplication.willEnterForegroundNotification, object: nil, queue: .main) { [weak self] _ in
            self?.resume()
        })
    }

    deinit {
        observers.forEach { NotificationCenter.default.removeObserver($0) }
        if let setup = fftSetup { vDSP_destroy_fftsetup(setup) }
    }

    // MARK: - Public

    func start(options: Options) throws {
        stop()
        self.options = options
        prepareBuffers()
        try configureSession()
        try startEngine()
        isRunning = true
    }

    func stop() {
        isRunning = false
        suspended = false
        stopEngine()
        try? AVAudioSession.sharedInstance().setActive(false, options: .notifyOthersOnDeactivation)
        // ファイル再生 (WKWebView) 側が消音スイッチの影響を受けないよう戻しておく
        try? AVAudioSession.sharedInstance().setCategory(.playback, mode: .default, options: [])
    }

    // MARK: - Session / Engine

    private func configureSession() throws {
        let session = AVAudioSession.sharedInstance()
        // mixWithOthers: ミュージックアプリ / Spotify の再生を止めずに録音する
        // measurement: AGC・エコーキャンセル等の音声処理を切って素の音を拾う
        try session.setCategory(.playAndRecord,
                                mode: .measurement,
                                options: [.mixWithOthers, .defaultToSpeaker, .allowBluetoothA2DP])
        try? session.setPreferredIOBufferDuration(0.01)
        try session.setActive(true)
    }

    private func prepareBuffers() {
        var size = 1
        while size < options.fftSize { size <<= 1 }
        size = max(512, min(size, 32768))
        options.fftSize = size
        options.binCount = max(1, min(options.binCount, size / 2))

        log2n = vDSP_Length(log2(Double(size)))
        if let setup = fftSetup { vDSP_destroy_fftsetup(setup) }
        fftSetup = vDSP_create_fftsetup(log2n, FFTRadix(kFFTRadix2))

        // Web Audio と同じ Blackman 窓 (alpha = 0.16)
        window = (0..<size).map { i in
            let x = 2.0 * Float.pi * Float(i) / Float(size)
            return 0.42 - 0.5 * cos(x) + 0.08 * cos(2 * x)
        }
        timeData = [Float](repeating: 0, count: size)
        windowed = [Float](repeating: 0, count: size)
        real = [Float](repeating: 0, count: size / 2)
        imag = [Float](repeating: 0, count: size / 2)
        magnitudes = [Float](repeating: 0, count: size / 2)
        smoothed = [Float](repeating: 0, count: size / 2)
        ring = SampleRing(capacity: size)
        lastWritten = -1
    }

    private func startEngine() throws {
        let input = engine.inputNode
        let format = input.outputFormat(forBus: 0)
        guard format.sampleRate > 0, format.channelCount > 0 else {
            throw NSError(domain: "D919Native", code: 1, userInfo: [NSLocalizedDescriptionKey: "マイク入力が利用できません"])
        }
        sampleRate = format.sampleRate

        // AVAudioSinkNode は IO サイクル毎 (~10ms) に呼ばれる。
        // installTap は iOS だと 100ms 以上のバッファになり動きがカクつくので、こちらを優先する。
        let ring = self.ring
        let sink = AVAudioSinkNode { _, frameCount, audioBufferList -> OSStatus in
            let buffers = UnsafeMutableAudioBufferListPointer(UnsafeMutablePointer(mutating: audioBufferList))
            guard let first = buffers.first, let data = first.mData else { return noErr }
            let stride = max(1, Int(first.mNumberChannels))
            ring.write(data.assumingMemoryBound(to: Float.self), count: Int(frameCount), stride: stride)
            return noErr
        }
        engine.attach(sink)
        engine.connect(input, to: sink, format: format)
        sinkNode = sink

        engine.prepare()
        try engine.start()
        startTimer()
        armWatchdog()
    }

    private func stopEngine() {
        timer?.cancel()
        timer = nil
        // 解析中のフレームがあれば終わるまで待ってからバッファを触る
        queue.sync {}
        watchdog?.cancel()
        watchdog = nil
        if engine.isRunning { engine.stop() }
        if tapInstalled {
            engine.inputNode.removeTap(onBus: 0)
            tapInstalled = false
        }
        if let sink = sinkNode {
            engine.detach(sink)
            sinkNode = nil
        }
        engine.reset()
    }

    /// 一部の環境で SinkNode にデータが来ない場合のフォールバック (installTap)
    private func armWatchdog() {
        let item = DispatchWorkItem { [weak self] in
            guard let self = self, self.isRunning, self.ring.written == 0 else { return }
            self.fallbackToTap()
        }
        watchdog = item
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0, execute: item)
    }

    private func fallbackToTap() {
        if engine.isRunning { engine.stop() }
        if let sink = sinkNode {
            engine.detach(sink)
            sinkNode = nil
        }
        let input = engine.inputNode
        let format = input.outputFormat(forBus: 0)
        let ring = self.ring
        input.installTap(onBus: 0, bufferSize: 1024, format: format) { buffer, _ in
            guard let channel = buffer.floatChannelData?[0] else { return }
            ring.write(channel, count: Int(buffer.frameLength), stride: buffer.stride)
        }
        tapInstalled = true
        do {
            engine.prepare()
            try engine.start()
        } catch {
            onError?("マイクの開始に失敗しました: \(error.localizedDescription)")
        }
    }

    private func suspend() {
        guard isRunning, !suspended else { return }
        suspended = true
        stopEngine()
    }

    private func resume() {
        guard isRunning, suspended else { return }
        suspended = false
        do {
            try configureSession()
            try startEngine()
        } catch {
            onError?("マイクの再開に失敗しました: \(error.localizedDescription)")
        }
    }

    private func restartIfNeeded() {
        guard isRunning, !suspended else { return }
        stopEngine()
        do {
            try startEngine()
        } catch {
            onError?("オーディオ構成の変更に追従できませんでした: \(error.localizedDescription)")
        }
    }

    private func handleInterruption(_ note: Notification) {
        guard let raw = note.userInfo?[AVAudioSessionInterruptionTypeKey] as? UInt,
              let type = AVAudioSession.InterruptionType(rawValue: raw) else { return }
        switch type {
        case .began:
            suspend()
        case .ended:
            resume()
        @unknown default:
            break
        }
    }

    // MARK: - Analysis

    private func startTimer() {
        let t = DispatchSource.makeTimerSource(queue: queue)
        let interval = 1.0 / max(1, min(options.updateRate, 120))
        t.schedule(deadline: .now() + interval, repeating: interval, leeway: .milliseconds(2))
        t.setEventHandler { [weak self] in self?.analyze() }
        t.resume()
        timer = t
    }

    private func analyze() {
        guard let setup = fftSetup else { return }
        let n = options.fftSize
        let half = n / 2

        let written = timeData.withUnsafeMutableBufferPointer { ptr in
            ring.readLatest(into: ptr.baseAddress!, count: n)
        }
        // 新しいサンプルが来ていなければ送らない
        if written == lastWritten { return }
        lastWritten = written

        vDSP_vmul(timeData, 1, window, 1, &windowed, 1, vDSP_Length(n))

        windowed.withUnsafeBufferPointer { winPtr in
            real.withUnsafeMutableBufferPointer { realPtr in
                imag.withUnsafeMutableBufferPointer { imagPtr in
                    var split = DSPSplitComplex(realp: realPtr.baseAddress!, imagp: imagPtr.baseAddress!)
                    winPtr.baseAddress!.withMemoryRebound(to: DSPComplex.self, capacity: half) { complexPtr in
                        vDSP_ctoz(complexPtr, 2, &split, 1, vDSP_Length(half))
                    }
                    vDSP_fft_zrip(setup, &split, 1, log2n, FFTDirection(FFT_FORWARD))
                    // zrip の imagp[0] にはナイキスト成分が入っているので DC と分離
                    split.imagp[0] = 0
                    magnitudes.withUnsafeMutableBufferPointer { magPtr in
                        vDSP_zvabs(&split, 1, magPtr.baseAddress!, 1, vDSP_Length(half))
                    }
                }
            }
        }

        // vDSP の実数 FFT は 2 倍でスケールされている。Web Audio は |X[k]| / N
        let scale = 0.5 / Float(n)
        let tau = min(max(options.smoothing, 0), 1)
        let minDb = options.minDecibels
        let rangeScale = 255 / max(options.maxDecibels - minDb, 1)
        let count = options.binCount
        var bytes = [UInt8](repeating: 0, count: count)

        for k in 0..<half {
            let m = magnitudes[k] * scale
            smoothed[k] = tau * smoothed[k] + (1 - tau) * m
        }
        for k in 0..<count {
            let v = smoothed[k]
            let db: Float = v > 0 ? 20 * log10f(v) : -1000
            let scaled = (db - minDb) * rangeScale
            bytes[k] = scaled.isFinite ? UInt8(max(0, min(255, scaled))) : 0
        }

        let rate = sampleRate
        DispatchQueue.main.async { [weak self] in
            self?.onFrame?(bytes, rate)
        }
    }
}
