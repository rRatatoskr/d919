'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, Upload } from 'lucide-react'

// ============================================================================
// 🎨 スペクトラムアナライザーの調整用パラメータ
// ============================================================================

const SPECTRUM_CONFIG = {
  // バンド設定
  numBands: 17,              // バンドの数（周波数帯域の数）
  segmentsPerBand: 26,       // 各バンドのセグメント数（縦方向のブロック数）
  levelsPerBand: 13,         // 音量レベルの段階数（2セグメントで1レベル）
  
  // ブロックの寸法
  blockWidth: 24.5,          // 各ブロックの幅（ピクセル）
  blockHeight: 6.0,          // 各ブロックの高さ（ピクセル）
  
  // 間隔調整
  gapX: 43.61,               // バンド間の水平方向の間隔
  gapY1: 3.1,                // 奇数セグメント間の垂直方向の間隔
  gapY2: 6,                  // 偶数セグメント間の垂直方向の間隔
  
  // スラント・傾斜調整
  slantLR: 2.0,              // 各ブロックの左右方向の傾き
  slopeTB: 5.0,              // 各ブロックの上下方向の傾き
  stackSlant: 3.35,          // セグメントの積み重ね時の水平方向のオフセット
  
  // 位置調整
  offsetX: 186.6,            // キャンバス左端からのオフセット
  offsetY: 8.2,              // キャンバス下端からのオフセット
  
  // 音声解析パラメータ
  divisor: 2,                // 音声レベルの感度（大きいほど敏感）
  fallSpeed: 0.01,           // バーが下がる速度（0.0〜1.0）
  fadeAlpha: 0,              // フェードエフェクトの透明度（0〜255、0で無効）
    
  fftSize: 8192,             // FFTサイズ（大きいほど周波数分解能が高い: 2048, 4096, 8192, 16384）
  smoothing: 0.1,            // スムージング（0.0〜1.0、小さいほど反応が速い）
  minDecibels: -90,          // 最小デシベル
  maxDecibels: -10,           // 最大デシベル
  
  peakHoldTime: 200,        // ピークが残る時間（ミリ秒）
  
  // ガイド画像設定
  showGuide: true,           // ガイド画像を表示するか（true/false）
  guideAlpha: 0.2,           // ガイド画像の透明度（0.0〜1.0）
}

const SIDE_BAND_CONFIG = {
  // サイドバンド設定
  enabled: true,             // サイドバンドを表示するか（true/false）
  segmentsPerBand: 26,       // 各サイドバンドのセグメント数
  levelsPerBand: 13,         // 音量レベルの段階数（2セグメントで1レベル）
  
  // ブロックの寸法
  blockWidth: 7.5,            // 各ブロックの幅（メインより小さい）
  blockHeight: 6.0,          // 各ブロックの高さ（メインより小さい）
  
  // 間隔調整
  gapY1: 3.1,                // 奇数セグメント間の垂直方向の間隔
  gapY2: 6.0,                // 偶数セグメント間の垂直方向の間隔
  
  // スラント・傾斜調整
  slantLR: 2.0,              // 各ブロックの左右方向の傾き
  slopeTB: 2.0,              // 各ブロックの上下方向の傾き
  stackSlant: 3.35,           // セグメントの積み重ね時の水平方向のオフセット
  
  // 位置調整（メインバンドからの相対位置）
  leftOffsetX: -11,          // 左サイドバンドのX方向オフセット（負の値で左に配置）
  rightOffsetX: 28,          // 右サイドバンドのX方向オフセット（正の値で右に配置）
  leftOffsetY: -2.5,         // 左サイドバンドのY方向オフセット（メインバンドのoffsetYからの追加オフセット）
  rightOffsetY: 5,        // 右サイドバンドのY方向オフセット（メインバンドのoffsetYからの追加オフセット）
  
  // 連動設定
  linkToBand: 'same',        // メインバンドとの連動方法: 'same'=同じバンドと連動, 'adjacent'=隣接バンドと連動
  levelMultiplier: 1,      // メインバンドのレベルに対する倍率（0.0〜1.0）
}

// 色設定（RGB値）
const COLORS = {
  // アクティブなセグメントの色（グラデーション）
  activeBottom: [0, 255, 200] as [number, number, number],  // 下部の色（シアン系）
  activeTop: [50, 50, 255] as [number, number, number],     // 上部の色（青系）
  
  // 非アクティブなセグメントの色（グラデーション）
  inactiveBottom: [0, 40, 30] as [number, number, number],  // 下部の色（暗いシアン系）
  inactiveTop: [10, 10, 50] as [number, number, number],    // 上部の色（暗い青系）
  
  // サイドバンド用の色設定を追加
  // サイドバンド用の色（メインと同じでも、別の色でも調整可能）
  sideActiveBottom: [0, 255, 200] as [number, number, number],
  sideActiveTop: [50, 50, 255] as [number, number, number],
  sideInactiveBottom: [0, 40, 30] as [number, number, number],
  sideInactiveTop: [10, 10, 50] as [number, number, number],
}

// ============================================================================

interface PeakHold {
  level: number
  timestamp: number
}

export function SpectrumAnalyzer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioFile, setAudioFile] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyzerRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const animationRef = useRef<number | null>(null)
  const previousLevelsRef = useRef<number[]>(new Array(SPECTRUM_CONFIG.numBands).fill(0))
  
  // ピークホールド用のRef
  const peakHoldsRef = useRef<PeakHold[]>(new Array(SPECTRUM_CONFIG.numBands).fill(null).map(() => ({ level: 0, timestamp: 0 })))
  const sidePeakHoldsRef = useRef<PeakHold[]>(new Array(SPECTRUM_CONFIG.numBands).fill(null).map(() => ({ level: 0, timestamp: 0 })))
  
  const guideImageRef = useRef<HTMLImageElement | null>(null)
  const audioInitializedRef = useRef<boolean>(false)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    const basePath = process.env.NODE_ENV === 'production' ? '/d919' : ''
    img.src=`${basePath}/images/design-mode/guide.png` // パスは環境に合わせて確認してください
    img.onload = () => {
      guideImageRef.current = img
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {})
      }
      audioInitializedRef.current = false
      audioContextRef.current = null
      sourceRef.current = null
      analyzerRef.current = null
    }
  }, [])

  const initializeAudio = () => {
    if (!audioRef.current || audioInitializedRef.current) {
      return
    }

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

  const getGradientColor = (
    colorStart: [number, number, number],
    colorEnd: [number, number, number],
    ratio: number
  ): string => {
    const r = Math.floor(colorStart[0] * (1 - ratio) + colorEnd[0] * ratio)
    const g = Math.floor(colorStart[1] * (1 - ratio) + colorEnd[1] * ratio)
    const b = Math.floor(colorStart[2] * (1 - ratio) + colorEnd[2] * ratio)
    return `rgb(${r}, ${g}, ${b})`
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
    
    const minFreq = 10
    const maxFreq = totalBins
    
    const logMin = Math.log(minFreq)
    const logMax = Math.log(maxFreq)
    const logStep = (logMax - logMin) / SPECTRUM_CONFIG.numBands

    for (let i = 0; i < SPECTRUM_CONFIG.numBands; i++) {
      const start = Math.floor(Math.exp(logMin + i * logStep))
      const end = Math.floor(Math.exp(logMin + (i + 1) * logStep))
      
      let sum = 0
      let count = 0
      for (let j = start; j < end && j < dataArray.length; j++) {
        sum += dataArray[j]
        count++
      }
      const magnitude = count > 0 ? sum / count : 0
      
      let val = magnitude / 255.0
      val = val * SPECTRUM_CONFIG.divisor
      val = Math.max(0.0, Math.min(val, 1.0))
      levels.push(val)
    }
    
    return levels
  }

  // サイドバンド描画関数（計算ロジックを除去し、描画のみに専念）
  const drawSideBand = (
    ctx: CanvasRenderingContext2D,
    bandIdx: number,
    currentLevelRatio: number, // 計算済みのレベル比率を受け取る
    peakHold: PeakHold,        // 計算済みのピーク情報を受け取る
    baseX: number,
    baseY: number,
    now: number
  ) => {
    if (!SIDE_BAND_CONFIG.enabled) return
    
    const activeLevel = Math.floor(currentLevelRatio * SIDE_BAND_CONFIG.levelsPerBand)
    const activeSegments = activeLevel * 2
    
    // ピーク表示判定
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

      const ratio = segIdx / SIDE_BAND_CONFIG.segmentsPerBand
      const currentSegLevel = Math.floor(segIdx / 2)

      let color: string
      const isPeakSegment = showPeak && currentSegLevel === peakLevel
      
      if (segIdx < activeSegments || isPeakSegment) {
        color = getGradientColor(COLORS.sideActiveBottom, COLORS.sideActiveTop, ratio)
      } else {
        color = getGradientColor(COLORS.sideInactiveBottom, COLORS.sideInactiveTop, ratio)
      }

      drawDoubleSlantedPolygon(
        ctx,
        color,
        xDraw,
        yDraw,
        SIDE_BAND_CONFIG.blockWidth,
        SIDE_BAND_CONFIG.blockHeight,
        SIDE_BAND_CONFIG.slantLR,
        SIDE_BAND_CONFIG.slopeTB
      )

      const currentGapY = segIdx % 2 === 0 ? SIDE_BAND_CONFIG.gapY1 : SIDE_BAND_CONFIG.gapY2
      currentYBottom -= (SIDE_BAND_CONFIG.blockHeight + currentGapY)
    }
  }

  const updatePeakHold = (
    currentLevel: number, 
    peakHold: PeakHold, 
    now: number, 
    configLevels: number
  ) => {
    // ピークホールドのロジック（要件に準拠）
    if (currentLevel > peakHold.level) {
      // 上昇時：ピーク更新 & タイマーリセット
      peakHold.level = currentLevel
      peakHold.timestamp = now
    } else if (now - peakHold.timestamp >= SPECTRUM_CONFIG.peakHoldTime) {
      // 時間切れ時：現在値に追従（ホールド解除）
      // ここを '0' にすると再上昇と判定されてしまうため 'currentLevel' にする
      peakHold.level = currentLevel
    }
    // 時間内（下降中）は peakHold.level を維持
  }

  const drawSpectrum = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    if (SPECTRUM_CONFIG.fadeAlpha > 0) {
      ctx.fillStyle = `rgba(0, 0, 0, ${SPECTRUM_CONFIG.fadeAlpha / 255})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    } else {
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    if (SPECTRUM_CONFIG.showGuide && guideImageRef.current) {
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

      const rawLevels = getAudioLevels(dataArray)
      
      for (let i = 0; i < SPECTRUM_CONFIG.numBands; i++) {
        const newVal = rawLevels[i]
        const prevVal = previousLevelsRef.current[i] || 0
        if (newVal > prevVal) {
          displayLevels[i] = newVal
        } else {
          displayLevels[i] = Math.max(0.0, prevVal - SPECTRUM_CONFIG.fallSpeed)
        }
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
      // 1. メインバンドのレベル計算
      const mainLevel = displayLevels[bandIdx] || 0
      
      // 2. サイドバンドのレベル計算
      const sideLevel = mainLevel * SIDE_BAND_CONFIG.levelMultiplier

      // 3. メインバンドのピーク更新
      updatePeakHold(mainLevel, peakHoldsRef.current[bandIdx], now, SPECTRUM_CONFIG.levelsPerBand)
      
      // 4. サイドバンドのピーク更新（ここで計算を一回だけ行う）
      updatePeakHold(sideLevel, sidePeakHoldsRef.current[bandIdx], now, SIDE_BAND_CONFIG.levelsPerBand)

      const bandXBase = startX + bandIdx * (SPECTRUM_CONFIG.blockWidth + SPECTRUM_CONFIG.gapX)
      
      // 5. サイドバンド（左）描画
      drawSideBand(
        ctx,
        bandIdx,
        sideLevel,
        sidePeakHoldsRef.current[bandIdx], // 計算済みの状態を渡す
        bandXBase + SIDE_BAND_CONFIG.leftOffsetX,
        sideLeftYBottom,
        now
      )
      
      // 6. メインバンド描画
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

        const ratio = segIdx / SPECTRUM_CONFIG.segmentsPerBand
        const currentSegLevel = Math.floor(segIdx / 2)

        let color: string
        const isPeakSegment = showPeak && currentSegLevel === peakLevel
        
        if (segIdx < activeSegments || isPeakSegment) {
          color = getGradientColor(COLORS.activeBottom, COLORS.activeTop, ratio)
        } else {
          color = getGradientColor(COLORS.inactiveBottom, COLORS.inactiveTop, ratio)
        }

        drawDoubleSlantedPolygon(
          ctx,
          color,
          xDraw,
          yDraw,
          SPECTRUM_CONFIG.blockWidth,
          SPECTRUM_CONFIG.blockHeight,
          SPECTRUM_CONFIG.slantLR,
          SPECTRUM_CONFIG.slopeTB
        )

        const currentGapY = segIdx % 2 === 0 ? SPECTRUM_CONFIG.gapY1 : SPECTRUM_CONFIG.gapY2
        currentYBottom -= (SPECTRUM_CONFIG.blockHeight + currentGapY)
      }
      
      // 7. サイドバンド（右）描画
      drawSideBand(
        ctx,
        bandIdx,
        sideLevel,
        sidePeakHoldsRef.current[bandIdx], // 計算済みの状態を渡す
        bandXBase + SIDE_BAND_CONFIG.rightOffsetX,
        sideRightYBottom,
        now
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
  }, [isPlaying])

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

    if (!audioInitializedRef.current) {
      initializeAudio()
    }

    try {
      if (audioContextRef.current?.state === 'suspended') {
        await audioContextRef.current.resume()
      }

      await audioRef.current.play()
      setIsPlaying(true)
    } catch (error) {
      console.error('Failed to play audio:', error)
    }
  }

  const handlePause = () => {
    if (!audioRef.current) return
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      setIsPlaying(false)
      
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {})
      }
      audioContextRef.current = null
      analyzerRef.current = null
      sourceRef.current = null
      audioInitializedRef.current = false
      
      if (audioFile) {
        URL.revokeObjectURL(audioFile)
      }
      
      const url = URL.createObjectURL(file)
      setAudioFile(url)
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
    <div className="w-full max-w-[1400px] space-y-4">
      <div className="bg-black border-2 border-white/20 rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          width={1400}
          height={400}
          className="w-full h-auto block"
        />
      </div>

      <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-lg p-6 backdrop-blur-sm">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileUpload}
              className="hidden"
              id="audio-upload"
            />
            <label htmlFor="audio-upload">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="bg-zinc-800 border-zinc-600 hover:bg-zinc-700 hover:border-zinc-500 text-zinc-100"
              >
                <span className="cursor-pointer flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Upload Audio
                </span>
              </Button>
            </label>
            
            <Button 
              onClick={handlePlay} 
              size="sm"
              disabled={!audioFile}
              className="bg-cyan-600 hover:bg-cyan-500 text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Play className="h-4 w-4 mr-2" />
              Play
            </Button>
            
            <Button 
              onClick={handlePause} 
              size="sm"
              className="bg-zinc-700 hover:bg-zinc-600 text-white"
            >
              <Pause className="h-4 w-4 mr-2" />
              Pause
            </Button>
            
            <div className="text-sm text-zinc-400 font-mono ml-auto">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              disabled={!audioFile}
              className="flex-1 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: `linear-gradient(to right, rgb(8 145 178) 0%, rgb(8 145 178) ${(currentTime / duration) * 100}%, rgb(63 63 70) ${(currentTime / duration) * 100}%, rgb(63 63 70) 100%)`
              }}
            />
          </div>
        </div>
      </div>

      {audioFile && (
        <audio 
          key={audioFile}
          ref={audioRef}
          src={audioFile}
          className="hidden"
          loop 
        />
      )}
    </div>
  )
}