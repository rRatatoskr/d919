import { Capacitor, registerPlugin, type PluginListenerHandle } from '@capacitor/core'

// plugins/d919-native (Swift) の JS 側インターフェース

export interface MusicState {
  hasItem: boolean
  title: string
  artist: string
  album: string
  duration: number
  currentTime: number
  playing: boolean
}

export interface StartSpectrumOptions {
  fftSize?: number
  smoothing?: number
  minDecibels?: number
  maxDecibels?: number
  /** 送ってもらう周波数ビンの数 (低い方から) */
  binCount?: number
  /** 1 秒あたりの送信回数 */
  updateRate?: number
}

export interface SpectrumEvent {
  /** 0-255 の値 (AnalyserNode.getByteFrequencyData 相当) を base64 にしたもの */
  data: string
  sampleRate: number
}

export type MusicAuthorizationStatus = 'authorized' | 'denied' | 'restricted' | 'notDetermined'

export interface D919NativePlugin {
  requestMicrophone(): Promise<{ granted: boolean }>
  startSpectrum(options: StartSpectrumOptions): Promise<{ sampleRate: number }>
  stopSpectrum(): Promise<void>

  musicAuthorize(): Promise<{ status: MusicAuthorizationStatus }>
  musicPick(): Promise<{ count: number }>
  musicPlay(): Promise<MusicState>
  musicPause(): Promise<MusicState>
  musicNext(): Promise<MusicState>
  musicPrevious(): Promise<MusicState>
  musicSeek(options: { time: number }): Promise<MusicState>
  musicNowPlaying(): Promise<MusicState>

  webAuth(options: { url: string; callbackScheme: string }): Promise<{ url: string }>
  setKeepAwake(options: { enabled: boolean }): Promise<void>

  addListener(eventName: 'spectrum', listener: (event: SpectrumEvent) => void): Promise<PluginListenerHandle>
  addListener(eventName: 'spectrumError', listener: (event: { message: string }) => void): Promise<PluginListenerHandle>
  addListener(eventName: 'musicState', listener: (event: MusicState) => void): Promise<PluginListenerHandle>
}

export const D919Native = registerPlugin<D919NativePlugin>('D919Native')

export const isNativeApp = () => Capacitor.isNativePlatform()

export const decodeBase64Bytes = (base64: string, target?: Uint8Array): Uint8Array => {
  const binary = atob(base64)
  const out = target && target.length === binary.length ? target : new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i)
  return out
}
