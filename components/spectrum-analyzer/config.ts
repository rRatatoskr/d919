import { VFD_COLORS } from '@/lib/constants'

export const SPECTRUM_CONFIG = {
  numBands: 17,
  segmentsPerBand: 26,
  levelsPerBand: 13,
  
  blockWidth: 24.5,
  blockHeight: 4.8,
  
  gapX: 43.60,
  gapY1: 2.2,
  gapY2: 3.35,
  
  slantLR: 2.0,
  slopeTB: 3.5,
  stackSlant: 3.35,
  
  offsetX: 186.5,
  offsetY: 62.2,
  
  divisor: 1.8,
  fallSpeed: 0.03,
  fadeAlpha: 0,
    
  fftSize: 8192,
  smoothing: 0.3,
  minDecibels: -75,
  maxDecibels: -20,
  
  peakHoldTime: 200,
  
  showGuide: false,
  guideAlpha: 0.2,
}

// マイク入力 (Apple Music / Spotify / MIC) 用の設定
// スピーカーの音をマイクで拾うと直接解析より小さくなるので、自動ゲインで持ち上げる
export const MIC_CONFIG = {
  autoGain: true,
  // 一番大きいバンドがこのレベルに来るようにゲインを決める
  targetLevel: 0.95,
  // これ以下の入力ではゲインを上げない (無音時にノイズを持ち上げない)
  noiseFloor: 0.08,
  // ピークの減衰 (1 フレームあたり)
  peakDecay: 0.997,
  minGain: 0.8,
  maxGain: 2.2,
  // ネイティブからスペクトルを受け取る回数 (回/秒)
  updateRate: 30,
}

// S.A (スペアナ表示パターン) の設定
export const PATTERN_CONFIG = {
  // S.A ボタンを押したときにドットマトリクスへパターン名を出す時間 (ms)
  nameDisplayTime: 2000,
  // DEMO モードでパターンを切り替える間隔 (ms)
  demoInterval: 6000,

  prominence: {
    gravity: 38, // レベル/秒^2
    launchScale: 0.55, // 立ち上がりの速さ → 打ち上げ速度
    maxVelocity: 40,
  },
  blizzard: {
    fallSpeed: 9, // セグメント/秒
    drift: 0.9, // バンド/秒 (右向きの風)
    ambientRate: 10, // 平均レベル 1.0 のときの 1 秒あたりの発生数
    kickThreshold: 0.08,
    maxFlakes: 90,
  },
  explosion: {
    kickThreshold: 0.12,
    sparkSpeed: 11, // バンド/秒
    sparkLife: 0.9, // 秒
    maxSparks: 60,
  },
}

export const SIDE_BAND_CONFIG = {
  enabled: true,
  segmentsPerBand: 26,
  levelsPerBand: 13,
  
  blockWidth: 7.5,
  blockHeight: 4.8,
  
  gapY1: 2.2,
  gapY2: 3.35,
  
  slantLR: 2.0,
  slopeTB: 2.0,
  stackSlant: 3.35,
  
  leftOffsetX: -11,
  rightOffsetX: 29,
  leftOffsetY: -2.3,
  rightOffsetY: 4,
  
  linkToBand: 'same',
  levelMultiplier: 1,
}

export const COLORS = {
  inactive: VFD_COLORS.OFF,       
  activeBottom: VFD_COLORS.CYAN,  
  activeMiddle: VFD_COLORS.GREEN, 
  activeTop: VFD_COLORS.BLUE,     
  sideActive: VFD_COLORS.CYAN_LIGHT, 
  iconActive: VFD_COLORS.CYAN,    
  iconInactive: VFD_COLORS.OFF,   
}