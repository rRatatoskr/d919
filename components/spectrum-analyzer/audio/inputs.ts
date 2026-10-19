import type { PluginListenerHandle } from '@capacitor/core'
import { D919Native, decodeBase64Bytes } from '@/lib/native/d919-native'
import { MIC_CONFIG, SPECTRUM_CONFIG } from '../config'
import { getBandAverages, toDisplayLevels } from '../utils'

/** スペアナに流し込む入力。毎フレーム readLevels() が呼ばれる */
export interface SpectrumInput {
  /** 17 バンドの表示レベル (0-1)。データがまだ無ければ null */
  readLevels(): number[] | null
  stop(): Promise<void> | void
}

export const createAnalyser = (ctx: BaseAudioContext): AnalyserNode => {
  const analyser = ctx.createAnalyser()
  analyser.fftSize = SPECTRUM_CONFIG.fftSize
  analyser.smoothingTimeConstant = SPECTRUM_CONFIG.smoothing
  analyser.minDecibels = SPECTRUM_CONFIG.minDecibels
  analyser.maxDecibels = SPECTRUM_CONFIG.maxDecibels
  return analyser
}

/** マイクで拾った音は小さいので、一番大きいバンドが目標レベルに来るようにゲインを調整する */
export class AutoGain {
  private peak = 0
  private gain = 1

  update(averages: number[]): number {
    if (!MIC_CONFIG.autoGain) return 1
    let max = 0
    for (const v of averages) if (v > max) max = v
    this.peak = max > this.peak ? max : Math.max(max, this.peak * MIC_CONFIG.peakDecay)
    if (this.peak > MIC_CONFIG.noiseFloor) {
      const target = MIC_CONFIG.targetLevel / SPECTRUM_CONFIG.divisor
      this.gain = Math.max(MIC_CONFIG.minGain, Math.min(MIC_CONFIG.maxGain, target / this.peak))
    }
    return this.gain
  }
}

/** Web Audio の AnalyserNode から読む (ファイル再生 / ブラウザのマイク) */
export class AnalyserInput implements SpectrumInput {
  private data: Uint8Array<ArrayBuffer>

  constructor(
    private analyser: AnalyserNode,
    private autoGain: AutoGain | null = null,
    private onStop?: () => void,
  ) {
    this.data = new Uint8Array(analyser.frequencyBinCount)
  }

  readLevels() {
    this.analyser.getByteFrequencyData(this.data)
    const averages = getBandAverages(this.data)
    return toDisplayLevels(averages, this.autoGain ? this.autoGain.update(averages) : 1)
  }

  stop() {
    this.onStop?.()
  }
}

/** ブラウザ (PWA / PC) で getUserMedia を使ってマイクを解析する */
export const startWebMicInput = async (): Promise<SpectrumInput> => {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error('このブラウザではマイクを使えません (https で開いてください)')
  }
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
  })
  const ctx = new AudioContext()
  if (ctx.state === 'suspended') await ctx.resume()
  const source = ctx.createMediaStreamSource(stream)
  const analyser = createAnalyser(ctx)
  source.connect(analyser)
  return new AnalyserInput(analyser, new AutoGain(), () => {
    stream.getTracks().forEach((t) => t.stop())
    source.disconnect()
    ctx.close().catch(() => {})
  })
}

/** iOS アプリ: ネイティブ側 (AVAudioEngine + vDSP) で FFT したスペクトルを受け取る */
class NativeMicInput implements SpectrumInput {
  private latest: Uint8Array | null = null
  private handles: PluginListenerHandle[] = []
  private autoGain = new AutoGain()

  async start(onError: (message: string) => void) {
    this.handles.push(
      await D919Native.addListener('spectrum', (event) => {
        this.latest = decodeBase64Bytes(event.data, this.latest ?? undefined)
      }),
      await D919Native.addListener('spectrumError', (event) => onError(event.message)),
    )
    try {
      await D919Native.startSpectrum({
        fftSize: SPECTRUM_CONFIG.fftSize,
        smoothing: SPECTRUM_CONFIG.smoothing,
        minDecibels: SPECTRUM_CONFIG.minDecibels,
        maxDecibels: SPECTRUM_CONFIG.maxDecibels,
        // AnalyserNode のときと同じく、全ビンの半分 (〜11kHz) までを使う
        binCount: SPECTRUM_CONFIG.fftSize / 4,
        updateRate: MIC_CONFIG.updateRate,
      })
    } catch (error) {
      await this.removeListeners()
      throw error
    }
  }

  readLevels() {
    if (!this.latest) return null
    const averages = getBandAverages(this.latest, this.latest.length)
    return toDisplayLevels(averages, this.autoGain.update(averages))
  }

  private async removeListeners() {
    const handles = this.handles
    this.handles = []
    await Promise.all(handles.map((h) => h.remove()))
  }

  async stop() {
    await this.removeListeners()
    await D919Native.stopSpectrum().catch(() => {})
  }
}

export const startNativeMicInput = async (onError: (message: string) => void): Promise<SpectrumInput> => {
  const input = new NativeMicInput()
  await input.start(onError)
  return input
}
