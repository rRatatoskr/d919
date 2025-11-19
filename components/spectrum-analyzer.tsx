'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, Upload, Eye, EyeOff } from 'lucide-react'

// ============================================================================
// 🎨 スペクトラムアナライザー設定
// ============================================================================

const SPECTRUM_CONFIG = {
  numBands: 17,
  segmentsPerBand: 26,
  levelsPerBand: 13, // 0〜12の13段階（真ん中はレベル6）
  
  // ブロック寸法
  blockWidth: 24.5,
  blockHeight: 6.0,
  
  // 間隔
  gapX: 43.61,
  gapY1: 3.1,
  gapY2: 6,
  
  // 傾斜
  slantLR: 2.0,
  slopeTB: 5.0,
  stackSlant: 3.35,
  
  // 位置
  offsetX: 186.6,
  offsetY: 8.2,
  
  // 解析
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

const SIDE_BAND_CONFIG = {
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

// ============================================================================
// 🎨 色設定（単色・ソリッドカラーに変更）
// ============================================================================
const COLORS = {
  // ① 光っていない時の色（VFDの消灯色：暗い紫/グレー）
  inactive: '#231e2dff',

  // ③ 真ん中より下の色（水色）
  activeBottom: '#1fd7f0ff', 
  
  // ② 真ん中の色（黄緑）
  activeMiddle: '#baff75',
  
  // ④ 真ん中より上の色（青）
  activeTop: '#1876eaff',
  
  // ⑤ サイドの色（③と同じ水色）
  sideActive: '#b0f5ffff',
}

// ============================================================================

interface PeakHold {
  level: number
  timestamp: number
}

export function SpectrumAnalyzer() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioFile, setAudioFile] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>('')
  
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showGuide, setShowGuide] = useState(SPECTRUM_CONFIG.showGuide)
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyzerRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const animationRef = useRef<number | null>(null)
  const previousLevelsRef = useRef<number[]>(new Array(SPECTRUM_CONFIG.numBands).fill(0))
  
  const peakHoldsRef = useRef<PeakHold[]>(new Array(SPECTRUM_CONFIG.numBands).fill(null).map(() => ({ level: 0, timestamp: 0 })))
  const sidePeakHoldsRef = useRef<PeakHold[]>(new Array(SPECTRUM_CONFIG.numBands).fill(null).map(() => ({ level: 0, timestamp: 0 })))
  
  const guideImageRef = useRef<HTMLImageElement | null>(null)
  const audioInitializedRef = useRef<boolean>(false)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    const basePath = process.env.NODE_ENV === 'production' ? '/d919' : ''
    img.src=`${basePath}/images/guide.png`
    img.onload = () => {
      guideImageRef.current = img
      setImageLoaded(true)
    }
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      if (audioContextRef.current?.state !== 'closed') audioContextRef.current?.close()
    }
  }, [])

  const initializeAudio = () => {
    if (!audioRef.current || audioInitializedRef.current) return
    try {
      const audioContext = new AudioContext()
      const analyzer = audioContext.createAnalyser()
      analyzer.fftSize = SPECTRUM_CONFIG.fftSize
      analyzer.smoothingTimeConstant = SPECTRUM_CONFIG.smoothing
      analyzer.minDecibels = SPECTRUM_CONFIG.minDecibels
      analyzer.maxDecibels = SPECTRUM_CONFIG.maxDecibels
      const source = audioContext.createMediaElementSource(audioRef.current)
      source.connect(analyzer)
      analyzer.connect(audioContext.destination)
      audioContextRef.current = audioContext
      analyzerRef.current = analyzer
      sourceRef.current = source
      audioInitializedRef.current = true
    } catch (error) {
      console.error('Failed to initialize audio:', error)
    }
  }

  // 【変更点】グラデーション関数を廃止し、位置に応じた単色を返す関数を作成
  const getSegmentColor = (levelIndex: number): string => {
    const middleLevel = 6; // 0始まりの13レベル中、7番目(index 6)を真ん中とする

    if (levelIndex < middleLevel) {
      return COLORS.activeBottom; // 水色
    } else if (levelIndex === middleLevel) {
      return COLORS.activeMiddle; // 黄緑
    } else {
      return COLORS.activeTop;    // 青
    }
  }

  const drawDoubleSlantedPolygon = (
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

  const getAudioLevels = (dataArray: Uint8Array): number[] => {
    const levels: number[] = []
    const totalBins = dataArray.length / 2
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
      const val = count > 0 ? (sum / count) / 255.0 * SPECTRUM_CONFIG.divisor : 0
      levels.push(Math.max(0.0, Math.min(val, 1.0)))
    }
    return levels
  }

  const drawSideBand = (
    ctx: CanvasRenderingContext2D,
    currentLevelRatio: number,
    peakHold: PeakHold,
    baseX: number,
    baseY: number,
    now: number
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
      
      let color: string
      if (segIdx < activeSegments || isPeakSegment) {
        // サイドは③と同じ（水色）単色
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

  const updatePeakHold = (level: number, peakHold: PeakHold, now: number) => {
    if (level > peakHold.level) {
      peakHold.level = level
      peakHold.timestamp = now
    } else if (now - peakHold.timestamp >= SPECTRUM_CONFIG.peakHoldTime) {
      peakHold.level = level
    }
  }

  const drawSpectrum = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    if (showGuide && guideImageRef.current) {
      ctx.globalAlpha = SPECTRUM_CONFIG.guideAlpha
      ctx.drawImage(guideImageRef.current, 0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1.0
    }

    let displayLevels: number[] = []
    const now = performance.now()

    if (analyzerRef.current && isPlaying) {
      const bufferLength = analyzerRef.current.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)
      analyzerRef.current.getByteFrequencyData(dataArray)
      if (audioRef.current) setCurrentTime(audioRef.current.currentTime)

      const rawLevels = getAudioLevels(dataArray)
      for (let i = 0; i < SPECTRUM_CONFIG.numBands; i++) {
        const newVal = rawLevels[i]
        const prevVal = previousLevelsRef.current[i] || 0
        displayLevels[i] = newVal > prevVal ? newVal : Math.max(0.0, prevVal - SPECTRUM_CONFIG.fallSpeed)
      }
      previousLevelsRef.current = displayLevels
    } else {
      displayLevels = [...previousLevelsRef.current]
    }

    const startX = SPECTRUM_CONFIG.offsetX
    const startYBottom = canvas.height - SPECTRUM_CONFIG.offsetY
    const sideLeftYBottom = canvas.height - SPECTRUM_CONFIG.offsetY - SIDE_BAND_CONFIG.leftOffsetY
    const sideRightYBottom = canvas.height - SPECTRUM_CONFIG.offsetY - SIDE_BAND_CONFIG.rightOffsetY

    for (let bandIdx = 0; bandIdx < SPECTRUM_CONFIG.numBands; bandIdx++) {
      const mainLevel = displayLevels[bandIdx] || 0
      const sideLevel = mainLevel * SIDE_BAND_CONFIG.levelMultiplier

      updatePeakHold(mainLevel, peakHoldsRef.current[bandIdx], now)
      updatePeakHold(sideLevel, sidePeakHoldsRef.current[bandIdx], now)

      const bandXBase = startX + bandIdx * (SPECTRUM_CONFIG.blockWidth + SPECTRUM_CONFIG.gapX)
      
      drawSideBand(
        ctx, sideLevel, sidePeakHoldsRef.current[bandIdx],
        bandXBase + SIDE_BAND_CONFIG.leftOffsetX, sideLeftYBottom, now
      )
      
      // メインバンド描画
      const activeLevel = Math.floor(mainLevel * SPECTRUM_CONFIG.levelsPerBand)
      const activeSegments = activeLevel * 2
      const mainPeakHold = peakHoldsRef.current[bandIdx]
      let peakLevel = 0
      let showPeak = false
      
      if (now - mainPeakHold.timestamp < SPECTRUM_CONFIG.peakHoldTime) {
        peakLevel = Math.floor(mainPeakHold.level * SPECTRUM_CONFIG.levelsPerBand)
        showPeak = peakLevel > activeLevel
      }

      let currentYBottom = startYBottom

      for (let segIdx = 0; segIdx < SPECTRUM_CONFIG.segmentsPerBand; segIdx++) {
        const xOffset = segIdx * SPECTRUM_CONFIG.stackSlant
        const xDraw = bandXBase + xOffset
        const yDraw = currentYBottom
        const currentSegLevel = Math.floor(segIdx / 2)
        const isPeakSegment = showPeak && currentSegLevel === peakLevel
        
        let color: string
        if (segIdx < activeSegments || isPeakSegment) {
          // 【修正】セグメントの高さ（レベル）に応じて、単色を取得
          color = getSegmentColor(currentSegLevel)
        } else {
          color = COLORS.inactive
        }

        drawDoubleSlantedPolygon(
          ctx, color, xDraw, yDraw,
          SPECTRUM_CONFIG.blockWidth, SPECTRUM_CONFIG.blockHeight,
          SPECTRUM_CONFIG.slantLR, SPECTRUM_CONFIG.slopeTB
        )

        const currentGapY = segIdx % 2 === 0 ? SPECTRUM_CONFIG.gapY1 : SPECTRUM_CONFIG.gapY2
        currentYBottom -= (SPECTRUM_CONFIG.blockHeight + currentGapY)
      }
      
      drawSideBand(
        ctx, sideLevel, sidePeakHoldsRef.current[bandIdx],
        bandXBase + SIDE_BAND_CONFIG.rightOffsetX, sideRightYBottom, now
      )
    }
    animationRef.current = requestAnimationFrame(drawSpectrum)
  }

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
    drawSpectrum()
  }, [isPlaying, imageLoaded, showGuide])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('durationchange', updateDuration)
    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('durationchange', updateDuration)
    }
  }, [audioFile])

  const handlePlay = async () => {
    if (!audioRef.current) return
    if (!audioInitializedRef.current) initializeAudio()
    try {
      if (audioContextRef.current?.state === 'suspended') await audioContextRef.current.resume()
      await audioRef.current.play()
      setIsPlaying(true)
    } catch (error) {
      console.error('Failed to play:', error)
    }
  }

  const handlePause = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setIsPlaying(false)
      if (audioFile) URL.revokeObjectURL(audioFile)
      setAudioFile(URL.createObjectURL(file))
      previousLevelsRef.current = new Array(SPECTRUM_CONFIG.numBands).fill(0)
      setCurrentTime(0)
      setDuration(0)
      e.target.value = ''
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const formatTime = (seconds: number) => {
    if (!isFinite(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
     <div className="w-full max-w-[1400px] mx-auto space-y-4">
      <div className="bg-black rounded-none overflow-hidden">
        <canvas ref={canvasRef} width={1400} height={400} className="w-full h-auto block" />
      </div>

      <div className="w-full space-y-2">
        <div className="relative w-full">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            disabled={!audioFile}
            className="w-full h-0.5 bg-white/10 rounded-full appearance-none cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed seek-slider"
          />
          <style jsx>{`
            .seek-slider::-webkit-slider-thumb {
              appearance: none;
              width: 0; height: 0;
            }
            .seek-slider::-moz-range-thumb {
              width: 0; height: 0; border: none;
            }
            .seek-slider::-webkit-slider-runnable-track {
              height: 2px;
              background: linear-gradient(to right, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) ${(currentTime / (duration || 1)) * 100}%, rgba(255, 255, 255, 0.1) ${(currentTime / (duration || 1)) * 100}%, rgba(255, 255, 255, 0.1) 100%);
            }
          `}</style>
        </div>
        <div className="flex justify-end">
          <div className="text-xs text-white/50 font-mono tracking-wider">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-6 text-sm font-light tracking-widest text-white/70 font-mono">
        {fileName}
      </div>

      <div className="flex items-center gap-3">
        <input type="file" accept="audio/*" onChange={handleFileUpload} className="hidden" id="audio-upload" />
        <label htmlFor="audio-upload">
          <Button size="sm" asChild className="bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer">
            <span className="flex items-center gap-2"><Upload className="h-4 w-4" /> UPLOAD AUDIO</span>
          </Button>
        </label>
        <Button onClick={isPlaying ? handlePause : handlePlay} size="sm" disabled={!audioFile} className="bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2">
          {isPlaying ? <><Pause className="h-4 w-4 mr-2" /> PAUSE</> : <><Play className="h-4 w-4 mr-2" /> PLAY</>}
        </Button>
        <Button onClick={() => setShowGuide(!showGuide)} size="sm" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2">
          {showGuide ? <><EyeOff className="h-4 w-4 mr-2" /> GUIDE OFF</> : <><Eye className="h-4 w-4 mr-2" /> GUIDE ON</>}
        </Button>
      </div>
      {audioFile && <audio key={audioFile} ref={audioRef} src={audioFile} className="hidden" loop />}
      <div style={{ color: 'white', fontSize: '10px' }}>DEPLOYED VERSION 0.2.0</div>
    </div>
  )
}