import AVFoundation
import Capacitor
import Foundation
import UIKit

/// JS 側からは `registerPlugin('D919Native')` で呼び出す (lib/native/d919-native.ts)。
@objc(D919NativePlugin)
public class D919NativePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "D919NativePlugin"
    public let jsName = "D919Native"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "requestMicrophone", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "startSpectrum", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "stopSpectrum", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "musicAuthorize", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "musicPick", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "musicPlay", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "musicPause", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "musicNext", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "musicPrevious", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "musicSeek", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "musicNowPlaying", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "webAuth", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "setKeepAwake", returnType: CAPPluginReturnPromise),
    ]

    private let spectrum = SpectrumEngine()
    private let music = AppleMusicController()
    private lazy var authenticator = WebAuthenticator { [weak self] in
        self?.bridge?.webView?.window
    }

    override public func load() {
        // WKWebView の <audio> 再生が消音スイッチで止まらないようにする
        try? AVAudioSession.sharedInstance().setCategory(.playback, mode: .default, options: [])

        spectrum.onFrame = { [weak self] bytes, sampleRate in
            self?.notifyListeners("spectrum", data: [
                "data": Data(bytes).base64EncodedString(),
                "sampleRate": sampleRate,
            ])
        }
        spectrum.onError = { [weak self] message in
            self?.notifyListeners("spectrumError", data: ["message": message])
        }
        music.onStateChange = { [weak self] state in
            self?.notifyListeners("musicState", data: state)
        }
    }

    // MARK: - Microphone spectrum

    @objc func requestMicrophone(_ call: CAPPluginCall) {
        AVAudioSession.sharedInstance().requestRecordPermission { granted in
            call.resolve(["granted": granted])
        }
    }

    @objc func startSpectrum(_ call: CAPPluginCall) {
        var options = SpectrumEngine.Options()
        options.fftSize = call.getInt("fftSize", options.fftSize)
        options.smoothing = Float(call.getDouble("smoothing", Double(options.smoothing)))
        options.minDecibels = Float(call.getDouble("minDecibels", Double(options.minDecibels)))
        options.maxDecibels = Float(call.getDouble("maxDecibels", Double(options.maxDecibels)))
        options.binCount = call.getInt("binCount", options.binCount)
        options.updateRate = call.getDouble("updateRate", options.updateRate)

        AVAudioSession.sharedInstance().requestRecordPermission { [weak self] granted in
            DispatchQueue.main.async {
                guard let self = self else { return }
                guard granted else {
                    call.reject("マイクへのアクセスが許可されていません", "MIC_DENIED")
                    return
                }
                do {
                    try self.spectrum.start(options: options)
                    call.resolve(["sampleRate": self.spectrum.sampleRate])
                } catch {
                    call.reject("マイクを開始できませんでした: \(error.localizedDescription)", "MIC_FAILED", error)
                }
            }
        }
    }

    @objc func stopSpectrum(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.spectrum.stop()
            call.resolve()
        }
    }

    // MARK: - Apple Music

    @objc func musicAuthorize(_ call: CAPPluginCall) {
        music.requestAuthorization { [weak self] status in
            if status == "authorized" {
                self?.music.startObserving()
            }
            call.resolve(["status": status])
        }
    }

    @objc func musicPick(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            guard let viewController = self.bridge?.viewController else {
                call.reject("画面を表示できません")
                return
            }
            self.music.startObserving()
            self.music.presentPicker(from: viewController) { count in
                call.resolve(["count": count])
            }
        }
    }

    @objc func musicPlay(_ call: CAPPluginCall) {
        runOnMain(call) { $0.play() }
    }

    @objc func musicPause(_ call: CAPPluginCall) {
        runOnMain(call) { $0.pause() }
    }

    @objc func musicNext(_ call: CAPPluginCall) {
        runOnMain(call) { $0.next() }
    }

    @objc func musicPrevious(_ call: CAPPluginCall) {
        runOnMain(call) { $0.previous() }
    }

    @objc func musicSeek(_ call: CAPPluginCall) {
        let time = call.getDouble("time", 0)
        runOnMain(call) { $0.seek(to: time) }
    }

    @objc func musicNowPlaying(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            call.resolve(self.music.state())
        }
    }

    private func runOnMain(_ call: CAPPluginCall, _ action: @escaping (AppleMusicController) -> Void) {
        DispatchQueue.main.async {
            action(self.music)
            call.resolve(self.music.state())
        }
    }

    // MARK: - OAuth

    @objc func webAuth(_ call: CAPPluginCall) {
        guard let urlString = call.getString("url"), let url = URL(string: urlString),
              let scheme = call.getString("callbackScheme") else {
            call.reject("url と callbackScheme が必要です")
            return
        }
        DispatchQueue.main.async {
            self.authenticator.start(url: url, callbackScheme: scheme) { result in
                switch result {
                case .success(let callbackURL):
                    call.resolve(["url": callbackURL.absoluteString])
                case .failure(let error):
                    call.reject(error.localizedDescription, "AUTH_CANCELLED", error)
                }
            }
        }
    }

    // MARK: - Misc

    @objc func setKeepAwake(_ call: CAPPluginCall) {
        let enabled = call.getBool("enabled", true)
        DispatchQueue.main.async {
            UIApplication.shared.isIdleTimerDisabled = enabled
            call.resolve()
        }
    }
}
