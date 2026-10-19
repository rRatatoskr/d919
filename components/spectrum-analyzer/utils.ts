import { COLORS, SIDE_BAND_CONFIG, SPECTRUM_CONFIG } from './config'
import { PeakHold } from './types'

export const formatTime = (seconds: number) => {
  if (!isFinite(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export const getSegmentColor = (levelIndex: number): string => {
  const middleLevel = 6
  if (levelIndex < middleLevel) {
    return COLORS.activeBottom
  } else if (levelIndex === middleLevel) {
    return COLORS.activeMiddle
  } else {
    return COLORS.activeTop
  }
}

export const drawDoubleSlantedPolygon = (
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  w: number,
  h: number,
  slantLR: number,
  slopeTB: number
) => {
  const p4 = { x, y }
  const p3 = { x: x + w, y: y - slopeTB }
  const p1 = { x: x + slantLR, y: y - h }
  const p2 = { x: x + w + slantLR, y: y - h - slopeTB }

  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(p1.x, p1.y)
  ctx.lineTo(p2.x, p2.y)
  ctx.lineTo(p3.x, p3.y)
  ctx.lineTo(p4.x, p4.y)
  ctx.closePath()
  ctx.fill()
}

// SVGパス生成用のヘルパー関数 (index.tsxで使用)
export const createPolyPath = (x: number, y: number, w: number, h: number, slantLR: number, slopeTB: number) => {
  const p1x = x + slantLR;
  const p1y = y - h;
  const p2x = x + w + slantLR;
  const p2y = y - h - slopeTB;
  const p3x = x + w;
  const p3y = y - slopeTB;
  const p4x = x;
  const p4y = y;
  return `M${p1x},${p1y} L${p2x},${p2y} L${p3x},${p3y} L${p4x},${p4y} Z`
}

/**
 * 周波数データ (0-255) を対数間隔の各バンドの平均値 (0-1) にする。
 * `maxBin` までのビンを使う。AnalyserNode のデータでは半分 (〜11kHz) まで。
 */
export const getBandAverages = (dataArray: Uint8Array, maxBin: number = dataArray.length / 2): number[] => {
  const averages: number[] = []
  const totalBins = maxBin
  const logMin = Math.log(10)
  const logMax = Math.log(totalBins)
  const logStep = (logMax - logMin) / SPECTRUM_CONFIG.numBands

  for (let i = 0; i < SPECTRUM_CONFIG.numBands; i++) {
    const start = Math.floor(Math.exp(logMin + i * logStep))
    const end = Math.floor(Math.exp(logMin + (i + 1) * logStep))
    let sum = 0, count = 0
    for (let j = start; j < end && j < dataArray.length; j++) {
      sum += dataArray[j]
      count++
    }
    averages.push(count > 0 ? (sum / count) / 255.0 : 0)
  }
  return averages
}

/** バンド平均値を表示レベル (0-1) にする */
export const toDisplayLevels = (averages: number[], gain: number = 1): number[] =>
  averages.map((avg) => Math.max(0.0, Math.min(avg * SPECTRUM_CONFIG.divisor * gain, 1.0)))

export const getAudioLevels = (dataArray: Uint8Array, maxBin?: number): number[] =>
  toDisplayLevels(getBandAverages(dataArray, maxBin))

export const updatePeakHold = (level: number, peakHold: PeakHold, now: number) => {
  if (level > peakHold.level) {
    peakHold.level = level
    peakHold.timestamp = now
  } else if (now - peakHold.timestamp >= SPECTRUM_CONFIG.peakHoldTime) {
    peakHold.level = level
  }
}

export const drawSideBand = (
  ctx: CanvasRenderingContext2D,
  currentLevelRatio: number,
  peakHold: PeakHold,
  baseX: number,
  baseY: number,
  now: number,
  onlyLit: boolean = false // ★追加: 点灯部分のみ描画するフラグ
) => {
  if (!SIDE_BAND_CONFIG.enabled) return
  
  const activeLevel = Math.floor(currentLevelRatio * SIDE_BAND_CONFIG.levelsPerBand)
  const activeSegments = activeLevel * 2
  
  let peakLevel = 0
  let showPeak = false
  if (now - peakHold.timestamp < SPECTRUM_CONFIG.peakHoldTime) {
    peakLevel = Math.floor(peakHold.level * SIDE_BAND_CONFIG.levelsPerBand)
    showPeak = peakLevel > activeLevel
  }
  
  let currentYBottom = baseY

  for (let segIdx = 0; segIdx < SIDE_BAND_CONFIG.segmentsPerBand; segIdx++) {
    const xOffset = segIdx * SIDE_BAND_CONFIG.stackSlant
    const xDraw = baseX + xOffset
    const yDraw = currentYBottom
    const currentSegLevel = Math.floor(segIdx / 2)
    const isPeakSegment = showPeak && currentSegLevel === peakLevel
    
    // 点灯判定
    const isLit = segIdx < activeSegments || isPeakSegment

    // onlyLitモードで消灯ならスキップ (背景SVGが見える)
    if (onlyLit && !isLit) {
      const currentGapY = segIdx % 2 === 0 ? SIDE_BAND_CONFIG.gapY1 : SIDE_BAND_CONFIG.gapY2
      currentYBottom -= (SIDE_BAND_CONFIG.blockHeight + currentGapY)
      continue
    }

    let color: string
    if (isLit) {
      color = COLORS.sideActive
    } else {
      color = COLORS.inactive
    }

    drawDoubleSlantedPolygon(
      ctx, color, xDraw, yDraw,
      SIDE_BAND_CONFIG.blockWidth, SIDE_BAND_CONFIG.blockHeight,
      SIDE_BAND_CONFIG.slantLR, SIDE_BAND_CONFIG.slopeTB
    )

    const currentGapY = segIdx % 2 === 0 ? SIDE_BAND_CONFIG.gapY1 : SIDE_BAND_CONFIG.gapY2
    currentYBottom -= (SIDE_BAND_CONFIG.blockHeight + currentGapY)
  }
}
