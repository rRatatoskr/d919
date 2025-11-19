import { ComponentType } from 'react'

export type DisplayMode = 'UPLOAD_PROMPT' | 'PEAK_HOLD' | 'ANIMATION' | 'MUSIC'

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