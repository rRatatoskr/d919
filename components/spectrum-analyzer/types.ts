export type DisplayMode = 'UPLOAD_PROMPT' | 'PEAK_HOLD' | 'ANIMATION' | 'MUSIC'

export interface PeakHold {
  level: number
  timestamp: number
}

export interface IconConfigItem {
  name: string
  offsetX: number
  offsetY: number
  width: number
  height: number
  activeModes: DisplayMode[]
  condition?: (isPlaying: boolean, audioFile: string | null) => boolean
}