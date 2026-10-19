import { ComponentType } from 'react'

export type DisplayMode = 'UPLOAD_PROMPT' | 'PEAK_HOLD' | 'ANIMATION' | 'MUSIC'

// リスニングポジション (POSI)。点灯する席が変わる
export const LISTENING_POSITIONS = ['ALL', 'FRONT_L', 'FRONT_R', 'FRONT'] as const
export type ListeningPosition = (typeof LISTENING_POSITIONS)[number]

export const LISTENING_POSITION_LABELS: Record<ListeningPosition, string> = {
  ALL: 'POSI ALL',
  FRONT_L: 'POSI FRONT L',
  FRONT_R: 'POSI FRONT R',
  FRONT: 'POSI FRONT',
}

export interface PeakHold {
  level: number
  timestamp: number
}

// 'COMPONENT' タイプを追加
export type IconType = 'DOT_MATRIX' | 'IMAGE' | 'COMPONENT'; 

// SVGコンポーネントが受け取るpropsの型
export interface SvgIconProps {
  color: string
  active: boolean
  width: number
  height: number
}

export interface IconDefinition {
  id: string
  name: string
  type: IconType;
  
  // 画像パス (DOT_MATRIX, IMAGE用)
  maskSrc?: string; 
  
  // ★追加: SVGコンポーネント (COMPONENT用)
  component?: ComponentType<SvgIconProps>;

  activeModes: DisplayMode[]
  
  x: number
  y: number
  width: number
  height: number
  color?: string

  condition?: (isPlaying: boolean, hasFile: boolean) => boolean
}