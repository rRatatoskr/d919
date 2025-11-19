import { DisplayMode, IconConfigItem } from './types'

export const SPECTRUM_CONFIG = {
  numBands: 17,
  segmentsPerBand: 26,
  levelsPerBand: 13,
  
  blockWidth: 24.5,
  blockHeight: 6.0,
  
  gapX: 43.61,
  gapY1: 3.1,
  gapY2: 6,
  
  slantLR: 2.0,
  slopeTB: 5.0,
  stackSlant: 3.35,
  
  offsetX: 186.6,
  offsetY: 8.2,
  
  divisor: 1.8,
  fallSpeed: 0.03,
  fadeAlpha: 0,
    
  fftSize: 8192,
  smoothing: 0.3,
  minDecibels: -75,
  maxDecibels: -20,
  
  peakHoldTime: 200,
  
  showGuide: true,
  guideAlpha: 0.2,
}

export const SIDE_BAND_CONFIG = {
  enabled: true,
  segmentsPerBand: 26,
  levelsPerBand: 13,
  
  blockWidth: 7.5,
  blockHeight: 6.0,
  
  gapY1: 3.1,
  gapY2: 6.0,
  
  slantLR: 2.0,
  slopeTB: 2.0,
  stackSlant: 3.35,
  
  leftOffsetX: -11,
  rightOffsetX: 28,
  leftOffsetY: -2.5,
  rightOffsetY: 5,
  
  linkToBand: 'same',
  levelMultiplier: 1,
}

export const COLORS = {
  inactive: '#231e2dff',
  activeBottom: '#1fd7f0ff', 
  activeMiddle: '#baff75',
  activeTop: '#1876eaff',
  sideActive: '#b0f5ffff',
  iconActive: '#1fd7f0ff',
  iconInactive: '#231e2d00',
}

export const ICON_CONFIG: IconConfigItem[] = [
  { 
    name: 'S.A', 
    offsetX: 285, 
    offsetY: 82, 
    width: 25, 
    height: 10, 
    activeModes: ['PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    condition: (isPlaying) => isPlaying,
  },
  { 
    name: 'MP3', 
    offsetX: 320, 
    offsetY: 82, 
    width: 30, 
    height: 10, 
    activeModes: ['PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    condition: (_, audioFile) => !!audioFile,
  },
  { 
    name: 'Note1', 
    offsetX: 370, 
    offsetY: 82, 
    width: 15, 
    height: 10, 
    activeModes: ['PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    condition: (isPlaying) => isPlaying,
  },
  { 
    name: 'Note2', 
    offsetX: 395, 
    offsetY: 82, 
    width: 15, 
    height: 10, 
    activeModes: ['ANIMATION'],
  },
]