'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, Upload, Eye, EyeOff, Monitor } from 'lucide-react' 
import { DotMatrixDisplay } from './dot-matrix' 

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
// ★追加: アイコン表示設定
// ============================================================================
type DisplayMode = 'UPLOAD_PROMPT' | 'PEAK_HOLD' | 'ANIMATION' | 'MUSIC'

interface IconConfigItem {
  name: string;
  offsetX: number; // ガイド画像左上からのXオフセット
  offsetY: number; // ガイド画像左上からのYオフセット
  width: number;   // 点灯領域の幅
  height: number;  // 点灯領域の高さ
  // このアイコンが点灯するdisplayModeの配列
  activeModes: DisplayMode[]; 
  // その他の条件 (例: 音楽再生中か)
  condition?: (isPlaying: boolean, audioFile: string | null) => boolean;
}

const ICON_CONFIG: IconConfigItem[] = [
  { 
    name: 'S.A', 
    offsetX: 285, 
    offsetY: 82, 
    width: 25, 
    height: 10, 
    activeModes: ['PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    condition: (isPlaying) => isPlaying, // 再生中のみ点灯
  },
  { 
    name: 'MP3', 
    offsetX: 320, 
    offsetY: 82, 
    width: 30, 
    height: 10, 
    activeModes: ['PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    condition: (_, audioFile) => !!audioFile, // ファイルがロードされている場合点灯
  },
  { 
    name: 'Note1', 
    offsetX: 370, 
    offsetY: 82, 
    width: 15, 
    height: 10, 
    activeModes: ['PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    condition: (isPlaying) => isPlaying, // 再生中のみ点灯
  },
  { 
    name: 'Note2', 
    offsetX: 395, 
    offsetY: 82, 
    width: 15, 
    height: 10, 
    activeModes: ['ANIMATION'], // アニメーションモードのみ点灯
  },
  // 必要に応じて他のアイコンも追加
];


// ============================================================================
// 🎨 色設定（単色・ソリッドカラー）
// ============================================================================
const COLORS = {
  inactive: '#231e2dff',
  activeBottom: '#1fd7f0ff', 
  activeMiddle: '#baff75',
  activeTop: '#1876eaff',
  sideActive: '#b0f5ffff',
  iconActive: '#1fd7f0ff', // ★追加: アイコン点灯時の色
  iconInactive: '#231e2d00', // ★追加: アイコン消灯時の色（透明）
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

  const [displayMode, setDisplayMode] = useState<DisplayMode>('UPLOAD_PROMPT')
  
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

  const getSegmentColor = (levelIndex: number): string => {
    const middleLevel = 6;
    if (levelIndex < middleLevel) {
      return COLORS.activeBottom;
    } else if (levelIndex === middleLevel) {
      return COLORS.activeMiddle;
    } else {
      return COLORS.activeTop;
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

  // ★追加: アイコン描画関数
  const drawIcon = (
    ctx: CanvasRenderingContext2D, 
    icon: IconConfigItem, 
    currentDisplayMode: DisplayMode, 
    isPlaying: boolean,
    audioFile: string | null
  ) => {
    const isActiveMode = icon.activeModes.includes(currentDisplayMode);
    const meetsCondition = icon.condition ? icon.condition(isPlaying, audioFile) : true;
    
    const isLit = isActiveMode && meetsCondition;

    // ガイド画像全体の高さと幅を考慮して、アイコンのY座標を調整
    // ガイド画像がcanvasにフィットするように描画されていると仮定
    const scaleX = ctx.canvas.width / 1400; // 元の画像幅1400px
    const scaleY = ctx.canvas.height / 400; // 元の画像高さ400px

    const x = icon.offsetX * scaleX;
    const y = icon.offsetY * scaleY;
    const w = icon.width * scaleX;
    const h = icon.height * scaleY;

    ctx.fillStyle = isLit ? COLORS.iconActive : COLORS.iconInactive;
    ctx.shadowBlur = isLit ? 10 : 0; // 点灯時は光をぼかす
    ctx.shadowColor = COLORS.iconActive;
    ctx.fillRect(x, y, w, h);
    ctx.shadowBlur = 0; // 他の描画に影響しないようリセット
  };


  const drawSpectrum = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // ガイド画像を先に描画
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

    // ★追加: アイコン描画
    ICON_CONFIG.forEach(icon => {
      drawIcon(ctx, icon, displayMode, isPlaying, audioFile);
    });

    animationRef.current = requestAnimationFrame(drawSpectrum)
  }

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
    drawSpectrum()
  }, [isPlaying, imageLoaded, showGuide, displayMode, audioFile]) // displayModeとaudioFileも依存配列に追加

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
      
      setDisplayMode('PEAK_HOLD') // 音楽選択時はPEAK_HOLDへ
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

  const handleDispClick = () => {
    if (!audioFile) {
      switch (displayMode) {
        case 'UPLOAD_PROMPT': setDisplayMode('ANIMATION'); break;
        case 'ANIMATION': setDisplayMode('MUSIC'); break;
        case 'MUSIC': setDisplayMode('PEAK_HOLD'); break;
        case 'PEAK_HOLD': setDisplayMode('UPLOAD_PROMPT'); break;
        default: setDisplayMode('UPLOAD_PROMPT'); break;
      }
    } else {
      switch (displayMode) {
        case 'PEAK_HOLD': setDisplayMode('ANIMATION'); break;
        case 'ANIMATION': setDisplayMode('MUSIC'); break;
        case 'MUSIC': setDisplayMode('PEAK_HOLD'); break;
        // 音楽ファイルがある場合は、UPLOAD_PROMPTには戻らない
        case 'UPLOAD_PROMPT': setDisplayMode('PEAK_HOLD'); break; // もしUPLOAD_PROMPTになってたらPEAK_HOLDに戻す
        default: setDisplayMode('PEAK_HOLD'); break;
      }
    }
  }

  let matrixText = "UPLOAD AUDIO"
  let matrixMode: 'TEXT' | 'ANIMATION' = 'TEXT'

  switch (displayMode) {
    case 'ANIMATION':
      matrixMode = 'ANIMATION'
      break
    case 'MUSIC':
      matrixMode = 'TEXT'
      matrixText = fileName ? fileName.replace(/\.[^/.]+$/, "") : "NO FILE"
      break
    case 'PEAK_HOLD':
      matrixMode = 'TEXT'
      matrixText = "PEAK HOLD"
      break
    case 'UPLOAD_PROMPT':
    default:
      matrixMode = 'TEXT'
      matrixText = "UPLOAD AUDIO"
      break
  }

  return (
     <div className="w-full max-w-[1400px] mx-auto space-y-4">
      <div className="bg-black rounded-none overflow-hidden relative">
        <canvas ref={canvasRef} width={1400} height={400} className="w-full h-auto block" />
        
        <DotMatrixDisplay 
          width={1400} 
          height={400} 
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" 
          text={matrixText}
          mode={matrixMode}
        />
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
        <Button onClick={isPlaying ? handlePause : handlePlay} size="sm" disabled={!audioFile} className="bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer">
          {isPlaying ? <><Pause className="h-4 w-4 mr-2" /> PAUSE</> : <><Play className="h-4 w-4 mr-2" /> PLAY</>}
        </Button>
        <Button onClick={handleDispClick} size="sm" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer">
          <Monitor className="h-4 w-4 mr-2" /> DISP
        </Button>
        <Button onClick={() => setShowGuide(!showGuide)} size="sm" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer">
          {showGuide ? <><EyeOff className="h-4 w-4 mr-2" /> GUIDE OFF</> : <><Eye className="h-4 w-4 mr-2" /> GUIDE ON</>}
        </Button>
      </div>
      {audioFile && <audio key={audioFile} ref={audioRef} src={audioFile} className="hidden" loop />}
      <div style={{ color: 'white', fontSize: '10px' }}>DEPLOYED VERSION 0.2.0</div>
    </div>
  )
}