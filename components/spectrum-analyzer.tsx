'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, Upload } from 'lucide-react'

// ============================================================================
// 🎨 スペクトラムアナライザーの調整用パラメータ
// ============================================================================
// このセクションのパラメータを変更して、KENWOOD D919のUIを再現してください

const SPECTRUM_CONFIG = {
  // バンド設定
  numBands: 17,              // バンドの数（周波数帯域の数）
  segmentsPerBand: 26,       // 各バンドのセグメント数（縦方向のブロック数）
  levelsPerBand: 13,         // 音量レベルの段階数（2セグメントで1レベル）
  
  // ブロックの寸法
  blockWidth: 24.5,          // 各ブロックの幅（ピクセル）
  blockHeight: 6.0,          // 各ブロックの高さ（ピクセル）
  
  // 間隔調整
  gapX: 43.61,                  // バンド間の水平方向の間隔
  gapY1: 3.1,                // 奇数セグメント間の垂直方向の間隔
  gapY2: 6,                // 偶数セグメント間の垂直方向の間隔
  
  // スラント・傾斜調整
  slantLR: 2.0,              // 各ブロックの左右方向の傾き
  slopeTB: 5.0,              // 各ブロックの上下方向の傾き
  stackSlant: 3.35,           // セグメントの積み重ね時の水平方向のオフセット
  
  // 位置調整
  offsetX: 186.6,              // キャンバス左端からのオフセット
  offsetY: 8.2,                // キャンバス下端からのオフセット
  
  // 音声解析パラメータ
  divisor: 2,              // 音声レベルの感度（大きいほど敏感）
  fallSpeed: 0.15,           // バーが下がる速度（0.0〜1.0）
  fadeAlpha: 0,              // フェードエフェクトの透明度（0〜255、0で無効）
    
  fftSize: 8192,             // FFTサイズ（大きいほど周波数分解能が高い: 2048, 4096, 8192, 16384）
  smoothing: 0,            // スムージング（0.0〜1.0、小さいほど反応が速い）
  minDecibels: -90,          // 最小デシベル
  maxDecibels: -7,          // 最大デシベル
  
  // ガイド画像設定
  showGuide: true,          // ガイド画像を表示するか（true/false）
  guideAlpha: 0.1,           // ガイド画像の透明度（0.0〜1.0）
}

// 色設定（RGB値）
const COLORS = {
  // アクティブなセグメントの色（グラデーション）
  activeBottom: [0, 255, 200] as [number, number, number],  // 下部の色（シアン系）
  activeTop: [50, 50, 255] as [number, number, number],     // 上部の色（青系）
  
  // 非アクティブなセグメントの色（グラデーション）
  inactiveBottom: [0, 40, 30] as [number, number, number],  // 下部の色（暗いシアン系）
  inactiveTop: [10, 10, 50] as [number, number, number],    // 上部の色（暗い青系）
}

// ============================================================================

export function SpectrumAnalyzer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioFile, setAudioFile] = useState<string | null>(null)
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyzerRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const animationRef = useRef<number | null>(null)
  const previousLevelsRef = useRef<number[]>(new Array(SPECTRUM_CONFIG.numBands).fill(0))
  const guideImageRef = useRef<HTMLImageElement | null>(null)
  const audioInitializedRef = useRef<boolean>(false)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src="/images/design-mode/guide.png"
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

      console.log('[v0] Audio initialized with FFT size:', analyzer.fftSize)
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
    
    // 人間の聴覚特性に合わせた周波数分布を実現
    const minFreq = 10 // 最小周波数ビン（0を避ける）
    const maxFreq = totalBins
    
    // 対数スケールでバンドの境界を計算
    const logMin = Math.log(minFreq)
    const logMax = Math.log(maxFreq)
    const logStep = (logMax - logMin) / SPECTRUM_CONFIG.numBands

    for (let i = 0; i < SPECTRUM_CONFIG.numBands; i++) {
      // 等比数列で各バンドの開始・終了位置を決定
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
    
    console.log('[v0] Audio levels sample:', levels.slice(0, 3).map(v => v.toFixed(3)))
    return levels
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

    for (let bandIdx = 0; bandIdx < SPECTRUM_CONFIG.numBands; bandIdx++) {
      const level = displayLevels[bandIdx] || 0
      const activeLevel = Math.floor(level * SPECTRUM_CONFIG.levelsPerBand)
      const activeSegments = activeLevel * 2
      
      const bandXBase = startX + bandIdx * (SPECTRUM_CONFIG.blockWidth + SPECTRUM_CONFIG.gapX)
      let currentYBottom = startYBottom

      for (let segIdx = 0; segIdx < SPECTRUM_CONFIG.segmentsPerBand; segIdx++) {
        const xOffset = segIdx * SPECTRUM_CONFIG.stackSlant
        const xDraw = bandXBase + xOffset
        const yDraw = currentYBottom

        const ratio = segIdx / SPECTRUM_CONFIG.segmentsPerBand

        let color: string
        if (segIdx < activeSegments) {
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
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {})
      }
      audioContextRef.current = null
      analyzerRef.current = null
      sourceRef.current = null
      audioInitializedRef.current = false
      
      const url = URL.createObjectURL(file)
      setAudioFile(url)
      setIsPlaying(false)
      previousLevelsRef.current = new Array(SPECTRUM_CONFIG.numBands).fill(0)
    }
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

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
        <div className="flex gap-3">
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            className="hidden"
            id="audio-upload"
          />
          <label htmlFor="audio-upload">
            <Button variant="outline" size="sm" asChild>
              <span className="cursor-pointer flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload Audio
              </span>
            </Button>
          </label>
          {audioFile && (
            <>
              {!isPlaying ? (
                <Button onClick={handlePlay} size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  Play
                </Button>
              ) : (
                <Button onClick={handlePause} size="sm" variant="secondary">
                  <Pause className="h-4 w-4 mr-2" />
                  Pause
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      {audioFile && (
        <audio ref={audioRef} src={audioFile} className="hidden" loop />
      )}
    </div>
  )
}
