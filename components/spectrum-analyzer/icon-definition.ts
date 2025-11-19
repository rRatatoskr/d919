import { DisplayMode } from './types'

export interface IconDefinition {
  id: string
  name: string
  maskSrc: string // マスク画像のパス
  activeModes: DisplayMode[] // 点灯するモード
  // 追加の条件判定 (再生中か？ファイルはあるか？)
  condition?: (isPlaying: boolean, hasFile: boolean) => boolean
}

// ここにアイコンを列挙するだけで増やせます
export const CUSTOM_ICONS: IconDefinition[] = [
  {
    id: 'mp3',
    name: 'MP3',
    maskSrc: '/images/masks/mp3.png', // MP3の文字の形をした画像
    activeModes: ['PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    condition: (_, hasFile) => hasFile // ファイルがあれば常時点灯
  },
  {
    id: 'note-1',
    name: '音符1',
    maskSrc: '/images/masks/icon-note1.png',
    activeModes: ['ANIMATION', 'MUSIC'],
    condition: (isPlaying) => isPlaying // 再生中のみ点灯
  },
  {
    id: 'note-2',
    name: '音符2',
    maskSrc: '/images/masks/icon-note2.png',
    activeModes: ['ANIMATION', 'MUSIC'],
    condition: (isPlaying) => isPlaying
  },
  {
    id: 'note-3',
    name: '音符3',
    maskSrc: '/images/masks/icon-note3.png',
    activeModes: ['ANIMATION', 'MUSIC'],
    condition: (isPlaying) => isPlaying
  },
  {
    id: 'cd-rom',
    name: 'CD-ROM',
    maskSrc: '/images/masks/icon-cd.png',
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD'], // 待機中などに点灯
  },
  {
    id: 'note-ring',
    name: '音符リング',
    maskSrc: '/images/masks/icon-note-ring.png',
    activeModes: ['ANIMATION'], // アニメーションモード専用
  },
  // 必要に応じて「MP3ガイド」などを追加
]