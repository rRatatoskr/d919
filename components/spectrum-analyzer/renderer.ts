import { COLORS, SIDE_BAND_CONFIG, SPECTRUM_CONFIG } from './config'
import type { FrameBuffer } from './patterns'
import { getSegmentColor } from './utils'

/** セグメント 1 個分の四角形 [x1, y1, x2, y2, x3, y3, x4, y4] */
type Quad = number[]

export interface SegmentGeometry {
  main: Quad[][]
  left: Quad[][]
  right: Quad[][]
}

const quad = (x: number, y: number, w: number, h: number, slantLR: number, slopeTB: number): Quad => [
  x + slantLR, y - h,
  x + w + slantLR, y - h - slopeTB,
  x + w, y - slopeTB,
  x, y,
]

const column = (
  baseX: number,
  baseY: number,
  cfg: { segmentsPerBand: number; stackSlant: number; blockWidth: number; blockHeight: number; slantLR: number; slopeTB: number; gapY1: number; gapY2: number },
): Quad[] => {
  const quads: Quad[] = []
  let y = baseY
  for (let seg = 0; seg < cfg.segmentsPerBand; seg++) {
    quads.push(quad(baseX + seg * cfg.stackSlant, y, cfg.blockWidth, cfg.blockHeight, cfg.slantLR, cfg.slopeTB))
    y -= cfg.blockHeight + (seg % 2 === 0 ? cfg.gapY1 : cfg.gapY2)
  }
  return quads
}

/** スペアナ全セグメントの座標 (1400x400 の座標系) */
export const buildSegmentGeometry = (height = 400): SegmentGeometry => {
  const geometry: SegmentGeometry = { main: [], left: [], right: [] }
  const mainBottom = height - SPECTRUM_CONFIG.offsetY
  for (let b = 0; b < SPECTRUM_CONFIG.numBands; b++) {
    const bandX = SPECTRUM_CONFIG.offsetX + b * (SPECTRUM_CONFIG.blockWidth + SPECTRUM_CONFIG.gapX)
    geometry.main.push(column(bandX, mainBottom, SPECTRUM_CONFIG))
    if (SIDE_BAND_CONFIG.enabled) {
      geometry.left.push(column(bandX + SIDE_BAND_CONFIG.leftOffsetX, mainBottom - SIDE_BAND_CONFIG.leftOffsetY, SIDE_BAND_CONFIG))
      geometry.right.push(column(bandX + SIDE_BAND_CONFIG.rightOffsetX, mainBottom - SIDE_BAND_CONFIG.rightOffsetY, SIDE_BAND_CONFIG))
    } else {
      geometry.left.push([])
      geometry.right.push([])
    }
  }
  return geometry
}

/** 消灯セグメントを描く SVG パス (背景) */
export const geometryToSvgPath = (geometry: SegmentGeometry): string => {
  const parts: string[] = []
  const add = (q: Quad) => parts.push(`M${q[0]},${q[1]} L${q[2]},${q[3]} L${q[4]},${q[5]} L${q[6]},${q[7]} Z`)
  for (let b = 0; b < geometry.main.length; b++) {
    geometry.main[b].forEach(add)
    geometry.left[b].forEach(add)
    geometry.right[b].forEach(add)
  }
  return parts.join(' ')
}

const traceQuad = (ctx: CanvasRenderingContext2D, q: Quad) => {
  ctx.moveTo(q[0], q[1])
  ctx.lineTo(q[2], q[3])
  ctx.lineTo(q[4], q[5])
  ctx.lineTo(q[6], q[7])
  ctx.closePath()
}

/** 点灯セグメントを色ごとにまとめて塗る (fill の回数を減らして iPhone でも軽くする) */
export const drawFrame = (ctx: CanvasRenderingContext2D, geometry: SegmentGeometry, fb: FrameBuffer) => {
  const byColor = new Map<string, Quad[]>()
  const push = (color: string, q: Quad) => {
    const list = byColor.get(color)
    if (list) list.push(q)
    else byColor.set(color, [q])
  }

  for (let b = 0; b < geometry.main.length; b++) {
    const main = fb.main[b]
    for (let seg = 0; seg < main.length; seg++) {
      if (main[seg]) push(getSegmentColor(Math.floor(seg / 2)), geometry.main[b][seg])
    }
    const left = fb.left[b]
    const right = fb.right[b]
    for (let seg = 0; seg < left.length; seg++) {
      if (left[seg] && geometry.left[b][seg]) push(COLORS.sideActive, geometry.left[b][seg])
      if (right[seg] && geometry.right[b][seg]) push(COLORS.sideActive, geometry.right[b][seg])
    }
  }

  byColor.forEach((quads, color) => {
    ctx.fillStyle = color
    ctx.beginPath()
    quads.forEach((q) => traceQuad(ctx, q))
    ctx.fill()
  })
}
