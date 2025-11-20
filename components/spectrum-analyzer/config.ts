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