'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { DotMatrixDisplay } from '@/components/dot-matrix'
import { CHAR_PATTERNS } from '@/components/dot-matrix/patterns'
import { BASE_PATH } from '@/lib/base-path'
import { DisplayMode, LISTENING_POSITIONS, LISTENING_POSITION_LABELS, ListeningPosition } from './types'
import { COLORS, PATTERN_CONFIG, SPECTRUM_CONFIG } from './config'
import { formatTime } from './utils'
import { IconsLayer } from './icons-layer'
import { LevelizerLayer } from './LevelizerLayer'
import {
  BOOT_LAST_STEP,
  BOOT_STEP_MS,
  getBootActiveBands,
  getBootActiveLevels,
  getBootBlockFlags,
  getHiddenIconIds,
} from './boot'
import { PATTERN_IDS, PATTERN_LABELS, PatternEngine, PatternId, demoLevels, nextPatternId } from './patterns'
import { buildSegmentGeometry, drawFrame, geometryToSvgPath } from './renderer'
import { SOURCE_LABELS, getAvailableSources, useAudioSource } from './audio/use-audio-source'
import { Controls } from './controls'

const WIDTH = 1400
const HEIGHT = 400
const RING_COUNT = 7

const SETTINGS_KEY = 'd919.settings'

interface Settings {
  pattern: PatternId
  posi: ListeningPosition
}

const loadSettings = (): Partial<Settings> => {
  try {
    return JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}')
  } catch {
    return {}
  }
}

/** ドットマトリクスで出せない文字 (日本語など) を除く。何も残らなければ fallback */
const toMatrixText = (text: string, fallback: string) => {
  const converted = Array.from(text.toUpperCase())
    .map((c) => (CHAR_PATTERNS[c] ? c : ' '))
    .join('')
    .replace(/\s+/g, ' ')
    .trim()
  return converted || fallback
}

/** 文字数からスクロールが一周する時間を見積もる (dot-matrix の SCROLL_CONFIG と合わせる) */
const flashDurationFor = (text: string) => (text.length > 12 ? 2000 + ((text.length + 12) * 6 * 1000) / 20 : 2000)

export function SpectrumAnalyzer() {
  // --- State & Refs ---
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const [bootStep, setBootStep] = useState(0)
  const [showGuide, setShowGuide] = useState(SPECTRUM_CONFIG.showGuide)
  const [displayMode, setDisplayMode] = useState<DisplayMode>('UPLOAD_PROMPT')
  const [patternId, setPatternId] = useState<PatternId>('PEAK_HOLD')
  const [posi, setPosi] = useState<ListeningPosition>('ALL')
  const [demo, setDemo] = useState(false)
  // S.A / SRC / POSI などを押したとき一時的にドットマトリクスへ出す文字
  const [flash, setFlash] = useState<string | null>(null)
  // サウンドレベライザー (左のリング) の点灯数。-1 は無音時の通常回転
  const [ringLevel, setRingLevel] = useState(-1)

  const audio = useAudioSource()
  const { state: player } = audio

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bootTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const flashTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const guideImageRef = useRef<HTMLImageElement | null>(null)
  const engineRef = useRef<PatternEngine | null>(null)
  const levelsRef = useRef<number[]>(new Array(SPECTRUM_CONFIG.numBands).fill(0))

  const geometry = useMemo(() => buildSegmentGeometry(HEIGHT), [])
  const backgroundPath = useMemo(() => geometryToSvgPath(geometry), [geometry])

  // 描画ループが毎フレーム読む値 (再レンダリングで描画ループを作り直さないため ref に置く)
  const loopRef = useRef({ isPoweredOn, bootStep, patternId, demo, showGuide, readLevels: audio.readLevels })
  loopRef.current = { isPoweredOn, bootStep, patternId, demo, showGuide, readLevels: audio.readLevels }

  // --- Settings ---

  useEffect(() => {
    const saved = loadSettings()
    if (saved.pattern && PATTERN_IDS.includes(saved.pattern)) setPatternId(saved.pattern)
    if (saved.posi && LISTENING_POSITIONS.includes(saved.posi)) setPosi(saved.posi)
  }, [])

  const saveSettings = (partial: Partial<Settings>) => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...loadSettings(), ...partial }))
    } catch {
      // ignore
    }
  }

  const showFlash = useCallback((text: string, ms: number = PATTERN_CONFIG.nameDisplayTime) => {
    if (flashTimerRef.current) clearTimeout(flashTimerRef.current)
    setFlash(text)
    flashTimerRef.current = setTimeout(() => setFlash(null), ms)
  }, [])

  // --- Effects ---

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = `${BASE_PATH}/images/guide.png`
    img.onload = () => {
      guideImageRef.current = img
    }
    return () => {
      if (bootTimerRef.current) clearInterval(bootTimerRef.current)
      if (flashTimerRef.current) clearTimeout(flashTimerRef.current)
    }
  }, [])

  // 描画ループ (1 本だけ回し続ける)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d', { alpha: true })
    if (!canvas || !ctx) return
    const engine = (engineRef.current ??= new PatternEngine())

    let raf = 0
    let lastNow = 0
    let ringValue = 0
    let ringShown = -1
    let lastInputAt = 0
    let cleared = false

    const frame = (now: number) => {
      const s = loopRef.current
      const frameScale = lastNow ? Math.min((now - lastNow) / (1000 / 60), 4) : 1
      lastNow = now

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (s.showGuide && guideImageRef.current) {
        const img = guideImageRef.current
        ctx.globalAlpha = SPECTRUM_CONFIG.guideAlpha
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height)
        const w = img.width * scale
        const h = img.height * scale
        ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h)
        ctx.globalAlpha = 1.0
      }

      let nextRing = -1
      if (s.isPoweredOn) cleared = false
      if (s.bootStep > 0) {
        const bands = getBootActiveBands(s.bootStep) ?? []
        drawFrame(ctx, geometry, engine.renderBars(bands.map((on) => (on ? 1 : 0))))
      } else if (s.isPoweredOn) {
        let target = s.readLevels()
        if (target) lastInputAt = now
        if (!target && s.demo) target = demoLevels(now)

        // 上がるときは即座に、下がるときは fallSpeed ずつ落とす
        const fall = SPECTRUM_CONFIG.fallSpeed * frameScale
        const levels = levelsRef.current.map((prev, i) => {
          const v = target ? target[i] || 0 : 0
          return v > prev ? v : Math.max(0, prev - fall)
        })
        levelsRef.current = levels
        drawFrame(ctx, geometry, engine.render(s.patternId, levels, now))

        // サウンドレベライザー: 全体の音量に合わせてリングの数を増減する
        if (target || now - lastInputAt < 1000) {
          let sum = 0
          for (const v of levels) sum += v
          const loudness = Math.min(1, (sum / levels.length) * 1.8)
          ringValue = loudness > ringValue ? loudness : Math.max(loudness, ringValue - 0.012 * frameScale)
          nextRing = Math.round(ringValue * RING_COUNT)
        } else {
          ringValue = 0
        }
      } else if (!cleared) {
        // 電源 OFF: 何も点灯させず、次の ON に備えて状態を捨てる
        cleared = true
        levelsRef.current = levelsRef.current.map(() => 0)
        engine.reset()
      }

      if (nextRing !== ringShown) {
        ringShown = nextRing
        setRingLevel(nextRing)
      }

      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [geometry])

  // 曲が変わったらパターンの状態を消し、曲名を流す
  const trackText = player.track
    ? toMatrixText(`${player.track.title}${player.track.artist ? ` / ${player.track.artist}` : ''}`, 'TRACK')
    : ''
  useEffect(() => {
    if (player.trackId === 0) return
    engineRef.current?.reset()
    levelsRef.current = levelsRef.current.map(() => 0)
    if (isPoweredOn && trackText && displayMode !== 'MUSIC') showFlash(trackText, flashDurationFor(trackText))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player.trackId])

  // 曲が読み込まれたら S.A 表示へ
  useEffect(() => {
    if (player.hasMedia && displayMode === 'UPLOAD_PROMPT') setDisplayMode('PEAK_HOLD')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player.hasMedia])

  // DEMO: パターンを次々に切り替える
  useEffect(() => {
    if (!demo || !isPoweredOn) return
    const id = setInterval(() => {
      const next = nextPatternId(loopRef.current.patternId)
      setPatternId(next)
      showFlash(PATTERN_LABELS[next])
    }, PATTERN_CONFIG.demoInterval)
    return () => clearInterval(id)
  }, [demo, isPoweredOn, showFlash])

  // メッセージは少ししたら消す
  useEffect(() => {
    if (!player.message) return
    const id = setTimeout(audio.clearMessage, 6000)
    return () => clearTimeout(id)
  }, [player.message, audio.clearMessage])

  // --- Handlers ---

  const isBooting = bootStep > 0
  const controlsEnabled = isPoweredOn && !isBooting

  const handlePowerToggle = () => {
    if (isPoweredOn) {
      audio.setPowered(false)
      setIsPoweredOn(false)
      setBootStep(0)
      setDemo(false)
      setFlash(null)
      if (bootTimerRef.current) clearInterval(bootTimerRef.current)
    } else {
      audio.setPowered(true)
      setIsPoweredOn(true)
      setBootStep(1)

      bootTimerRef.current = setInterval(() => {
        setBootStep((prev) => {
          if (prev >= BOOT_LAST_STEP) {
            if (bootTimerRef.current) clearInterval(bootTimerRef.current)
            return 0
          }
          return prev + 1
        })
      }, BOOT_STEP_MS)
    }
  }

  const handleSaClick = () => {
    // DEMO 中に S.A を押すと DEMO 解除 (取扱説明書の動作)
    if (demo) {
      setDemo(false)
      showFlash(PATTERN_LABELS[patternId])
      return
    }
    const next = nextPatternId(patternId)
    setPatternId(next)
    saveSettings({ pattern: next })
    showFlash(PATTERN_LABELS[next])
    if (displayMode === 'UPLOAD_PROMPT' || displayMode === 'MUSIC') setDisplayMode('PEAK_HOLD')
  }

  const handleDemoClick = () => {
    const next = !demo
    setDemo(next)
    showFlash(next ? 'DEMO ON' : 'DEMO OFF')
  }

  const handlePosiClick = () => {
    const next = LISTENING_POSITIONS[(LISTENING_POSITIONS.indexOf(posi) + 1) % LISTENING_POSITIONS.length]
    setPosi(next)
    saveSettings({ posi: next })
    showFlash(LISTENING_POSITION_LABELS[next])
  }

  const handleSourceClick = () => {
    const sources = getAvailableSources()
    const next = sources[(sources.indexOf(player.source) + 1) % sources.length]
    audio.selectSource(next)
    showFlash(SOURCE_LABELS[next])
    if (!player.hasMedia) setDisplayMode('UPLOAD_PROMPT')
  }

  const handleDispClick = () => {
    if (demo) setDemo(false)
    setFlash(null)
    if (!player.hasMedia) {
      switch (displayMode) {
        case 'UPLOAD_PROMPT': setDisplayMode('ANIMATION'); break
        case 'ANIMATION': setDisplayMode('MUSIC'); break
        case 'MUSIC': setDisplayMode('PEAK_HOLD'); break
        case 'PEAK_HOLD': setDisplayMode('UPLOAD_PROMPT'); break
        default: setDisplayMode('UPLOAD_PROMPT'); break
      }
    } else {
      switch (displayMode) {
        case 'PEAK_HOLD': setDisplayMode('ANIMATION'); break
        case 'ANIMATION': setDisplayMode('MUSIC'); break
        case 'MUSIC': setDisplayMode('PEAK_HOLD'); break
        case 'UPLOAD_PROMPT': setDisplayMode('PEAK_HOLD'); break
        default: setDisplayMode('PEAK_HOLD'); break
      }
    }
  }

  // --- Dot matrix ---

  const promptText = (() => {
    switch (player.source) {
      case 'FILE': return 'UPLOAD AUDIO'
      case 'APPLE_MUSIC': return 'SELECT SONG'
      case 'SPOTIFY': return player.spotifyConnected ? 'PLAY SPOTIFY' : 'LOGIN SPOTIFY'
      case 'MIC': return 'MIC INPUT'
    }
  })()

  let matrixText = ''
  let matrixMode: 'TEXT' | 'ANIMATION' = 'TEXT'

  if (isPoweredOn && !isBooting) {
    if (flash) {
      matrixText = flash
    } else {
      switch (displayMode) {
        case 'ANIMATION': matrixMode = 'ANIMATION'; break
        case 'MUSIC':
          matrixText = trackText || (player.source === 'FILE' ? 'NO FILE' : 'NO TRACK')
          break
        case 'PEAK_HOLD':
          matrixText = demo ? 'DEMO' : PATTERN_LABELS[patternId]
          break
        case 'UPLOAD_PROMPT':
        default:
          matrixText = promptText
          break
      }
    }
  }

  // --- Levelizer ---

  const ringFlags = (() => {
    if (isBooting) return getBootActiveLevels(bootStep)
    if (ringLevel < 0) return getBootActiveLevels(0)
    return Array.from({ length: RING_COUNT + 1 }, (_, i) => i > 0 && i <= Math.max(1, ringLevel))
  })()

  const trackLabel = player.track
    ? `${player.track.title}${player.track.artist ? ` — ${player.track.artist}` : ''}`
    : ''

  return (
    <div className="w-full max-w-[1400px] mx-auto space-y-3">
      <div className="bg-black rounded-none overflow-hidden relative">
        <svg
          width={WIDTH}
          height={HEIGHT}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full h-auto block absolute top-0 left-0 z-0 pointer-events-none"
        >
          <path d={backgroundPath} fill={COLORS.inactive} />
        </svg>

        {/* Canvas (点灯状態) は手前に配置 */}
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="w-full h-auto block relative z-10" />

        <DotMatrixDisplay
          width={WIDTH}
          height={HEIGHT}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
          text={matrixText}
          mode={matrixMode}
          bootBlockFlags={isBooting ? getBootBlockFlags(bootStep) : []}
        />

        <IconsLayer
          displayMode={displayMode}
          isPlaying={player.isPlaying}
          hasMedia={player.hasMedia}
          isFileSource={player.source === 'FILE'}
          width={WIDTH}
          height={HEIGHT}
          active={isPoweredOn}
          hiddenIconIds={getHiddenIconIds(bootStep)}
          isBooting={isBooting}
          posi={posi}
          trackId={player.trackId}
        />

        <LevelizerLayer
          width={WIDTH}
          height={HEIGHT}
          active={isPoweredOn}
          activeLevels={ringFlags}
          isBooting={isBooting}
        />
      </div>

      <Controls
        player={player}
        audio={audio}
        isPoweredOn={isPoweredOn}
        controlsEnabled={controlsEnabled}
        demo={demo}
        showGuide={showGuide}
        trackLabel={controlsEnabled ? trackLabel : ''}
        timeLabel={`${formatTime(player.currentTime)} / ${formatTime(player.duration)}`}
        onPower={handlePowerToggle}
        onSource={handleSourceClick}
        onSa={handleSaClick}
        onDisp={handleDispClick}
        onPosi={handlePosiClick}
        onDemo={handleDemoClick}
        onGuide={() => setShowGuide(!showGuide)}
      />
    </div>
  )
}
