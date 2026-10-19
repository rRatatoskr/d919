import { PATTERN_CONFIG, SIDE_BAND_CONFIG, SPECTRUM_CONFIG } from '../config'
import { PeakHold } from '../types'
import { updatePeakHold } from '../utils'

// D919 の S.A ボタンで切り替わる表示パターン (取扱説明書の順番)
// PEAK HOLD 以外の動きはパターン名から解釈して作ったもの。
export const PATTERN_IDS = ['PROMINENCE', 'CANYON', 'BLIZZARD', 'MUSIC_SCOPE', 'EXPLOSION', 'PEAK_HOLD'] as const
export type PatternId = (typeof PATTERN_IDS)[number]

export const PATTERN_LABELS: Record<PatternId, string> = {
  PROMINENCE: 'PROMINENCE',
  CANYON: 'CANYON',
  BLIZZARD: 'BLIZZARD',
  MUSIC_SCOPE: 'MUSIC SCOPE',
  EXPLOSION: 'EXPLOSION',
  PEAK_HOLD: 'PEAK HOLD',
}

export const nextPatternId = (id: PatternId): PatternId =>
  PATTERN_IDS[(PATTERN_IDS.indexOf(id) + 1) % PATTERN_IDS.length]

const BANDS = SPECTRUM_CONFIG.numBands
const SEGS = SPECTRUM_CONFIG.segmentsPerBand
const LEVELS = SPECTRUM_CONFIG.levelsPerBand
const SIDE_SEGS = SIDE_BAND_CONFIG.segmentsPerBand
const SIDE_LEVELS = SIDE_BAND_CONFIG.levelsPerBand

/** 各バンドのメイン / 左サイド / 右サイドのセグメント点灯状態 (下から 0..25) */
export interface FrameBuffer {
  main: Uint8Array[]
  left: Uint8Array[]
  right: Uint8Array[]
}

export const createFrameBuffer = (): FrameBuffer => ({
  main: Array.from({ length: BANDS }, () => new Uint8Array(SEGS)),
  left: Array.from({ length: BANDS }, () => new Uint8Array(SIDE_SEGS)),
  right: Array.from({ length: BANDS }, () => new Uint8Array(SIDE_SEGS)),
})

const clearFrameBuffer = (fb: FrameBuffer) => {
  for (let b = 0; b < BANDS; b++) {
    fb.main[b].fill(0)
    fb.left[b].fill(0)
    fb.right[b].fill(0)
  }
}

export interface PatternInput {
  /** 落下処理済みの表示レベル (0-1) */
  levels: number[]
  now: number
  /** 前フレームからの経過秒 */
  dt: number
}

interface Pattern {
  reset(): void
  render(input: PatternInput, fb: FrameBuffer): void
}

const fillRange = (arr: Uint8Array, from: number, to: number) => {
  const start = Math.max(0, Math.floor(from))
  const end = Math.min(arr.length, Math.floor(to))
  for (let i = start; i < end; i++) arr[i] = 1
}

const newPeakHolds = (): PeakHold[] => Array.from({ length: BANDS }, () => ({ level: 0, timestamp: 0 }))

// ---------------------------------------------------------------------------
// PEAK HOLD: バー + 一瞬止まるピーク (元の実装と同じ)
// ---------------------------------------------------------------------------
class PeakHoldPattern implements Pattern {
  private main = newPeakHolds()
  private side = newPeakHolds()

  reset() {
    this.main = newPeakHolds()
    this.side = newPeakHolds()
  }

  render({ levels, now }: PatternInput, fb: FrameBuffer) {
    for (let b = 0; b < BANDS; b++) {
      const mainLevel = levels[b] || 0
      const sideLevel = mainLevel * SIDE_BAND_CONFIG.levelMultiplier
      updatePeakHold(mainLevel, this.main[b], now)
      updatePeakHold(sideLevel, this.side[b], now)

      this.drawBar(fb.main[b], mainLevel, this.main[b], now, LEVELS)
      this.drawBar(fb.left[b], sideLevel, this.side[b], now, SIDE_LEVELS)
      this.drawBar(fb.right[b], sideLevel, this.side[b], now, SIDE_LEVELS)
    }
  }

  private drawBar(arr: Uint8Array, level: number, peak: PeakHold, now: number, levels: number) {
    const activeLevel = Math.floor(level * levels)
    fillRange(arr, 0, activeLevel * 2)
    if (now - peak.timestamp < SPECTRUM_CONFIG.peakHoldTime) {
      const peakLevel = Math.floor(peak.level * levels)
      if (peakLevel > activeLevel) fillRange(arr, peakLevel * 2, peakLevel * 2 + 2)
    }
  }
}

// ---------------------------------------------------------------------------
// PROMINENCE (紅炎): 立ち上がりでピークが打ち上がり、重力で落ちてくる。
// 左サイドはバーから炎の先端までをつなぐ
// ---------------------------------------------------------------------------
class ProminencePattern implements Pattern {
  private pos = new Float32Array(BANDS)
  private vel = new Float32Array(BANDS)
  private prev = new Float32Array(BANDS)

  reset() {
    this.pos.fill(0)
    this.vel.fill(0)
    this.prev.fill(0)
  }

  render({ levels, dt }: PatternInput, fb: FrameBuffer) {
    const { gravity, launchScale, maxVelocity } = PATTERN_CONFIG.prominence
    const step = Math.min(dt, 0.05)
    for (let b = 0; b < BANDS; b++) {
      const bar = (levels[b] || 0) * LEVELS
      const rise = bar - this.prev[b]
      this.prev[b] = bar

      if (bar >= this.pos[b]) {
        this.pos[b] = bar
        if (rise > 0 && step > 0) {
          this.vel[b] = Math.min(maxVelocity, Math.max(this.vel[b], (rise / step) * launchScale))
        }
      }
      this.pos[b] += this.vel[b] * step
      this.vel[b] -= gravity * step
      if (this.pos[b] > LEVELS - 0.01) {
        this.pos[b] = LEVELS - 0.01
        this.vel[b] = Math.min(this.vel[b], 0)
      }
      if (this.pos[b] <= bar) {
        this.pos[b] = bar
        this.vel[b] = 0
      }

      const barLevel = Math.floor(bar)
      fillRange(fb.main[b], 0, barLevel * 2)
      const tip = Math.floor(this.pos[b])
      if (tip > barLevel) fillRange(fb.main[b], tip * 2, tip * 2 + 2)

      // 炎の舌: 左はバーから先端まで、右はバー + 半分
      fillRange(fb.left[b], 0, Math.floor(this.pos[b] * 2) + (tip > barLevel ? 1 : 0))
      fillRange(fb.right[b], 0, Math.floor((bar + (this.pos[b] - bar) * 0.5) * 2))
    }
  }
}

// ---------------------------------------------------------------------------
// CANYON (峡谷): 上から垂れ下がるバー。ピークは下側に残る
// ---------------------------------------------------------------------------
class CanyonPattern implements Pattern {
  private main = newPeakHolds()

  reset() {
    this.main = newPeakHolds()
  }

  render({ levels, now }: PatternInput, fb: FrameBuffer) {
    for (let b = 0; b < BANDS; b++) {
      const level = levels[b] || 0
      updatePeakHold(level, this.main[b], now)
      const active = Math.floor(level * LEVELS) * 2
      fillRange(fb.main[b], SEGS - active, SEGS)
      if (now - this.main[b].timestamp < SPECTRUM_CONFIG.peakHoldTime) {
        const peak = Math.floor(this.main[b].level * LEVELS) * 2
        if (peak > active) fillRange(fb.main[b], SEGS - peak - 2, SEGS - peak)
      }
      // サイドは谷の縁: 下から伸びて、上から垂れたバーと向き合う
      const sideActive = Math.floor(level * SIDE_LEVELS * 0.5) * 2
      fillRange(fb.left[b], 0, sideActive)
      fillRange(fb.right[b], 0, sideActive)
    }
  }
}

// ---------------------------------------------------------------------------
// BLIZZARD (吹雪): バーの上から雪 (サイドの細いセグメント) が舞い、風で右へ流れながら落ちる
// ---------------------------------------------------------------------------
interface Flake {
  x: number // バンド位置 (0..17, 小数部 <0.5 で左サイド)
  y: number // セグメント位置
  vx: number
  vy: number
}

class BlizzardPattern implements Pattern {
  private flakes: Flake[] = []
  private prev = new Float32Array(BANDS)
  private spawnDebt = 0

  reset() {
    this.flakes = []
    this.prev.fill(0)
    this.spawnDebt = 0
  }

  private spawn(x: number, y: number) {
    const { fallSpeed, drift, maxFlakes } = PATTERN_CONFIG.blizzard
    if (this.flakes.length >= maxFlakes) this.flakes.shift()
    this.flakes.push({
      x,
      y,
      vx: drift * (0.6 + Math.random() * 0.8),
      vy: -fallSpeed * (0.7 + Math.random() * 0.6),
    })
  }

  render({ levels, dt }: PatternInput, fb: FrameBuffer) {
    const { ambientRate, kickThreshold } = PATTERN_CONFIG.blizzard
    const step = Math.min(dt, 0.05)
    let sum = 0
    for (let b = 0; b < BANDS; b++) {
      const level = levels[b] || 0
      sum += level
      const barTop = Math.floor(level * LEVELS) * 2
      fillRange(fb.main[b], 0, barTop)
      // 急に上がったバンドからは雪が跳ね上がる
      if (level - this.prev[b] > kickThreshold) {
        this.spawn(b + Math.random(), Math.min(SIDE_SEGS - 1, barTop + 2 + Math.random() * 4))
      }
      this.prev[b] = level
    }

    // 平均レベルに応じて上空から降らせる
    this.spawnDebt += (sum / BANDS) * ambientRate * step
    while (this.spawnDebt >= 1) {
      this.spawnDebt -= 1
      this.spawn(Math.random() * BANDS - 1, SIDE_SEGS - 1)
    }

    const alive: Flake[] = []
    for (const f of this.flakes) {
      f.x += f.vx * step
      f.y += f.vy * step
      const band = Math.floor(f.x)
      if (f.y < 0 || band >= BANDS) continue
      if (band >= 0) {
        // バーの上に積もったら消える
        const barTop = Math.floor((levels[band] || 0) * SIDE_LEVELS) * 2
        if (f.y < barTop) continue
        const side = f.x - band < 0.5 ? fb.left[band] : fb.right[band]
        side[Math.floor(f.y)] = 1
      }
      alive.push(f)
    }
    this.flakes = alive
  }
}

// ---------------------------------------------------------------------------
// MUSIC SCOPE: オシロスコープ風に、各バンドのレベルを 1 セグメントの点で結ぶ
// サイドは隣のバンドとの中間値を打って線をつなげる
// ---------------------------------------------------------------------------
class MusicScopePattern implements Pattern {
  reset() {}

  render({ levels }: PatternInput, fb: FrameBuffer) {
    const seg = (v: number) => Math.max(0, Math.min(SEGS - 1, Math.round(v * (SEGS - 1))))
    for (let b = 0; b < BANDS; b++) {
      const here = levels[b] || 0
      const before = b > 0 ? levels[b - 1] || 0 : here
      const after = b < BANDS - 1 ? levels[b + 1] || 0 : here
      fb.main[b][seg(here)] = 1
      fb.left[b][seg((before + here * 2) / 3)] = 1
      fb.right[b][seg((after + here * 2) / 3)] = 1
    }
  }
}

// ---------------------------------------------------------------------------
// EXPLOSION: 低音を中央に置いて左右対称に広げ、バーは上下中央から膨らむ。
// 低音のアタックで火花 (サイドセグメント) が左右に飛び散る
// ---------------------------------------------------------------------------
interface Spark {
  x: number
  y: number
  vx: number
  vy: number
  life: number
}

class ExplosionPattern implements Pattern {
  private sparks: Spark[] = []
  private prevBass = 0

  reset() {
    this.sparks = []
    this.prevBass = 0
  }

  render({ levels, dt }: PatternInput, fb: FrameBuffer) {
    const { kickThreshold, sparkSpeed, sparkLife, maxSparks } = PATTERN_CONFIG.explosion
    const step = Math.min(dt, 0.05)
    const center = (BANDS - 1) / 2
    const mid = SEGS / 2

    for (let b = 0; b < BANDS; b++) {
      // 中央 = 低音, 両端 = 高音
      const src = Math.round((Math.abs(b - center) / center) * (BANDS - 1))
      const level = levels[src] || 0
      const half = Math.floor(level * LEVELS)
      fillRange(fb.main[b], mid - half, mid + half)
      const sideHalf = Math.floor(level * SIDE_LEVELS * 0.6)
      fillRange(fb.left[b], mid - sideHalf, mid + sideHalf)
      fillRange(fb.right[b], mid - sideHalf, mid + sideHalf)
    }

    const bass = ((levels[0] || 0) + (levels[1] || 0) + (levels[2] || 0)) / 3
    if (bass - this.prevBass > kickThreshold) {
      const count = 6 + Math.floor(bass * 10)
      for (let i = 0; i < count && this.sparks.length < maxSparks; i++) {
        const dir = i % 2 === 0 ? 1 : -1
        this.sparks.push({
          x: center + 0.5,
          y: mid + (Math.random() - 0.5) * 6,
          vx: dir * sparkSpeed * (0.5 + Math.random()),
          vy: (Math.random() - 0.5) * 30,
          life: sparkLife * (0.6 + Math.random() * 0.4),
        })
      }
    }
    this.prevBass = bass

    const alive: Spark[] = []
    for (const s of this.sparks) {
      s.life -= step
      s.x += s.vx * step
      s.y += s.vy * step
      const band = Math.floor(s.x)
      if (s.life <= 0 || band < 0 || band >= BANDS || s.y < 0 || s.y >= SIDE_SEGS) continue
      const side = s.x - band < 0.5 ? fb.left[band] : fb.right[band]
      side[Math.floor(s.y)] = 1
      alive.push(s)
    }
    this.sparks = alive
  }
}

// ---------------------------------------------------------------------------

export class PatternEngine {
  readonly frame = createFrameBuffer()
  private patterns: Record<PatternId, Pattern> = {
    PROMINENCE: new ProminencePattern(),
    CANYON: new CanyonPattern(),
    BLIZZARD: new BlizzardPattern(),
    MUSIC_SCOPE: new MusicScopePattern(),
    EXPLOSION: new ExplosionPattern(),
    PEAK_HOLD: new PeakHoldPattern(),
  }
  private lastNow = 0

  reset() {
    Object.values(this.patterns).forEach((p) => p.reset())
  }

  render(id: PatternId, levels: number[], now: number): FrameBuffer {
    const dt = this.lastNow ? (now - this.lastNow) / 1000 : 0
    this.lastNow = now
    clearFrameBuffer(this.frame)
    this.patterns[id].render({ levels, now, dt }, this.frame)
    return this.frame
  }

  /** 起動アニメーションなど、パターンを通さずにバーを出すとき用 */
  renderBars(levels: number[]): FrameBuffer {
    clearFrameBuffer(this.frame)
    for (let b = 0; b < BANDS; b++) {
      const level = levels[b] || 0
      fillRange(this.frame.main[b], 0, Math.floor(level * LEVELS) * 2)
      const side = Math.floor(level * SIDE_BAND_CONFIG.levelMultiplier * SIDE_LEVELS) * 2
      fillRange(this.frame.left[b], 0, side)
      fillRange(this.frame.right[b], 0, side)
    }
    return this.frame
  }
}

// ---------------------------------------------------------------------------
// DEMO 用: 音が無いときに使う疑似スペクトル (120BPM のキック + ハイハット + うねり)
// ---------------------------------------------------------------------------
export const demoLevels = (now: number): number[] => {
  const t = now / 1000
  const beat = 0.5
  const kick = Math.exp(-(t % beat) / 0.11)
  const hat = Math.exp(-((t + beat / 2) % (beat / 2)) / 0.04)
  const bar = Math.floor(t / (beat * 4))
  const levels: number[] = []
  for (let b = 0; b < BANDS; b++) {
    const x = b / (BANDS - 1)
    const bass = (1 - x) ** 2 * (0.35 + 0.6 * kick)
    const swell = 0.25 + 0.2 * Math.sin(t * 1.7 + b * 0.55 + bar) * Math.sin(t * 0.37 + b * 0.21)
    const highs = x ** 1.5 * 0.55 * hat
    const noise = Math.random() * 0.08
    levels.push(Math.max(0, Math.min(1, bass + swell * (0.6 + 0.4 * x) + highs + noise)))
  }
  return levels
}
