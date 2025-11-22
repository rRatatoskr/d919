'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, Upload, Monitor, Eye, EyeOff, Power } from 'lucide-react'
import { DotMatrixDisplay } from '@/components/dot-matrix' 
import { DisplayMode, PeakHold } from './types'
import { SPECTRUM_CONFIG, SIDE_BAND_CONFIG, COLORS } from './config'
import { 
  drawDoubleSlantedPolygon, 
  drawSideBand, 
  formatTime, 
  getAudioLevels, 
  getSegmentColor, 
  updatePeakHold,
} from './utils'
import { IconsLayer } from './icons-layer'
import { LevelizerLayer } from './LevelizerLayer'
import { VFD_COLORS } from '@/lib/constants' // 忘れずインポート

export function SpectrumAnalyzer() {
  // --- State & Refs ---
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const [bootStep, setBootStep] = useState(0) // 起動アニメーションのステップ(0:完了/通常, 1~16:アニメ中)

  const [isPlaying, setIsPlaying] = useState(false)
  const [audioFile, setAudioFile] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>('')
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showGuide, setShowGuide] = useState(SPECTRUM_CONFIG.showGuide)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [displayMode, setDisplayMode] = useState<DisplayMode>('UPLOAD_PROMPT')
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyzerRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const animationRef = useRef<number | null>(null)
  
  // アニメーション用のインターバルRef
  const bootTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const previousLevelsRef = useRef<number[]>(new Array(SPECTRUM_CONFIG.numBands).fill(0))
  const peakHoldsRef = useRef<PeakHold[]>(new Array(SPECTRUM_CONFIG.numBands).fill(null).map(() => ({ level: 0, timestamp: 0 })))
  const sidePeakHoldsRef = useRef<PeakHold[]>(new Array(SPECTRUM_CONFIG.numBands).fill(null).map(() => ({ level: 0, timestamp: 0 })))
  const guideImageRef = useRef<HTMLImageElement | null>(null)
  const audioInitializedRef = useRef<boolean>(false)

  // --- Effects ---

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
      if (bootTimerRef.current) clearInterval(bootTimerRef.current)
    }
  }, [])

  // --- Functions ---

  const initializeAudio = () => { /* ... (変更なし) ... */ 
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

  // ★電源操作ハンドラ
  const handlePowerToggle = () => {
    if (isPoweredOn) {
      // OFFにする
      if (isPlaying) handlePause()
      setIsPoweredOn(false)
      setBootStep(0)
      if (bootTimerRef.current) clearInterval(bootTimerRef.current)
    } else {
      // ONにする (起動アニメーション開始)
      setIsPoweredOn(true)
      setBootStep(1)
      
      // アニメーションタイマー (1フレーム 80ms くらいで回す)
      bootTimerRef.current = setInterval(() => {
        setBootStep((prev) => {
          if (prev >= 31) { // 16フレームで終了
            if (bootTimerRef.current) clearInterval(bootTimerRef.current)
            return 0 // 0に戻して通常モードへ
          }
          return prev + 1
        })
      }, 20) // 速度調整: ここの数値を小さくすると速く、大きくすると遅くなる
    }
  }

  // ★起動シーケンスの判定ロジック
  // 現在の bootStep に応じて、各パーツの状態を決定する
  
  // 1. SL (リング) の点灯状態 [index 0は未使用, 1~7]
  // 累積的に点灯していく (例: step4なら SL1, SL2 がON)
  const getBootActiveLevels = () => {
    if (bootStep === 0) return [false, true, true, true, true, true, true, true]; // 通常時: 全点灯
    
    const flags = [false, false, false, false, false, false, false, false];
    // シーケンス定義に従って点灯
    if (bootStep >= 3) flags[1] = true; // SL1
    if (bootStep >= 4) flags[2] = true; // SL2
    if (bootStep >= 5) { flags[3] = true; flags[4] = true; } // SL3, SL4
    if (bootStep >= 6) flags[5] = true; // SL5
    if (bootStep >= 7) flags[6] = true; // SL6
    if (bootStep >= 8) flags[7] = true; // SL7
    return flags;
  }

  // 2. SA (スペアナバンド) の点灯状態 (0~16)
  const getBootActiveBands = () => {
    if (bootStep === 0) return null; // 通常モード
    const bands = new Array(17).fill(false);
    
    // 累積点灯
    if (bootStep >= 3) { bands[0] = true; bands[1] = true; }
    if (bootStep >= 4) bands[2] = true;
    if (bootStep >= 5) bands[3] = true;
    if (bootStep >= 6) { bands[4] = true; bands[5] = true; }
    if (bootStep >= 7) bands[6] = true;
    if (bootStep >= 8) { bands[7] = true; bands[8] = true; }
    if (bootStep >= 9) bands[9] = true;
    if (bootStep >= 10) bands[10] = true;
    if (bootStep >= 11) bands[11] = true;
    if (bootStep >= 12) bands[12] = true;
    if (bootStep >= 13) bands[13] = true;
    if (bootStep >= 14) bands[14] = true;
    if (bootStep >= 15) bands[15] = true;
    if (bootStep >= 16) bands[16] = true;
    if (bootStep >= 19) bands[16] = false;
    if (bootStep >= 20) { bands[15] = false; bands[14] = false; }
    if (bootStep >= 21) bands[13] = false;
    if (bootStep >= 22) { bands[12] = false; bands[11] = false; }
    if (bootStep >= 23) bands[10] = false;
    if (bootStep >= 24) { bands[9] = false; bands[8] = false; }
    if (bootStep >= 25) bands[7] = false;
    if (bootStep >= 26) bands[6] = false;
    if (bootStep >= 27) { bands[5] = false; bands[4] = false; }
    if (bootStep >= 28) bands[3] = false;
    if (bootStep >= 29) bands[2] = false;
    if (bootStep >= 30) { bands[1] = false; bands[0] = false; }
    return bands;
  }

  // 3. D (ドットブロック) の点灯状態 (D1=0 ~ D12=11)
  const getBootBlockFlags = () => {
    if (bootStep === 0) return []; // 通常モード
    const blocks = new Array(12).fill(false);
    
    if (bootStep >= 6) { blocks[0] = true; blocks[1] = true; }
    if (bootStep >= 7) blocks[2] = true;
    if (bootStep >= 8) { blocks[3] = true; blocks[4] = true; }
    if (bootStep >= 9) blocks[5] = true;
    if (bootStep >= 10) blocks[6] = true;
    if (bootStep >= 11) blocks[7] = true;
    if (bootStep >= 12) blocks[8] = true;
    if (bootStep >= 13) blocks[9] = true;
    if (bootStep >= 14) blocks[10] = true;
    if (bootStep >= 15) blocks[11] = true;
    if (bootStep >= 20) { blocks[11] = false; blocks[10] = false; }
    if (bootStep >= 21) blocks[9] = false;
    if (bootStep >= 22) { blocks[8] = false; blocks[7] = false; }
    if (bootStep >= 23) blocks[6] = false;
    if (bootStep >= 24) { blocks[5] = false; blocks[4] = false; }
    if (bootStep >= 25) blocks[3] = false;
    if (bootStep >= 26) blocks[2] = false;
    if (bootStep >= 27) {blocks[1] = false; blocks[0] = false; }
    return blocks;
  }

  // 4. アイコンの除外リスト
  const getHiddenIconIds = () => {
    if (bootStep === 0) return [];
    // step 1～7 まではこれらを隠す
    if (bootStep < 8) {
      return ['cd-circle', 'cd', 'rom', 'cd-in']; 
    }
    return []; // step 8以降は全表示
  }

  // メインループ (描画)
  const drawSpectrum = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    if (showGuide && guideImageRef.current) {
      // ガイド描画 (省略なし)
      const img = guideImageRef.current
      ctx.globalAlpha = SPECTRUM_CONFIG.guideAlpha
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height)
      const w = img.width * scale
      const h = img.height * scale
      const x = (canvas.width - w) / 2
      const y = (canvas.height - h) / 2
      ctx.drawImage(img, x, y, w, h)
      ctx.globalAlpha = 1.0
    }

    // --- スペアナ描画データの準備 ---
    let displayLevels: number[] = []
    const now = performance.now()
    
    // ★起動アニメーション中のオーバーライド
    const bootBands = getBootActiveBands();

    if (bootStep > 0 && bootBands) {
      // アニメーション中: bootBands が true のところを MAXレベル(1.0) にする
      displayLevels = bootBands.map(isOn => isOn ? 1.0 : 0);
    } else if (isPoweredOn && analyzerRef.current && isPlaying) {
      // 通常再生中
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
      // 停止中 or 電源OFF
      if (!isPoweredOn) {
        displayLevels = new Array(SPECTRUM_CONFIG.numBands).fill(0)
      } else {
        displayLevels = [...previousLevelsRef.current]
      }
    }

    const startX = SPECTRUM_CONFIG.offsetX
    const startYBottom = canvas.height - SPECTRUM_CONFIG.offsetY
    const sideLeftYBottom = canvas.height - SPECTRUM_CONFIG.offsetY - SIDE_BAND_CONFIG.leftOffsetY
    const sideRightYBottom = canvas.height - SPECTRUM_CONFIG.offsetY - SIDE_BAND_CONFIG.rightOffsetY

    for (let bandIdx = 0; bandIdx < SPECTRUM_CONFIG.numBands; bandIdx++) {
      const mainLevel = displayLevels[bandIdx] || 0
      const sideLevel = mainLevel * SIDE_BAND_CONFIG.levelMultiplier

      if (isPoweredOn) {
        updatePeakHold(mainLevel, peakHoldsRef.current[bandIdx], now)
        updatePeakHold(sideLevel, sidePeakHoldsRef.current[bandIdx], now)
      }

      const bandXBase = startX + bandIdx * (SPECTRUM_CONFIG.blockWidth + SPECTRUM_CONFIG.gapX)
      
      drawSideBand(
        ctx, sideLevel, sidePeakHoldsRef.current[bandIdx],
        bandXBase + SIDE_BAND_CONFIG.leftOffsetX, sideLeftYBottom, now
      )
      
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

    animationRef.current = requestAnimationFrame(drawSpectrum)
  }
  
  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
    drawSpectrum()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, displayMode, audioFile, imageLoaded, showGuide, isPoweredOn, bootStep]) // bootStepを追加

  // ... (Audio, Play, Pause, Seek, FileUpload, DispClick は変更なし) ...
  // handlePlay, handlePause, handleFileUpload, handleSeek, handleDispClick をここに記述

  // 既存の関数群 (省略なしで記述してください)
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
      if (audioContextRef.current) {
        audioContextRef.current.close()
        audioContextRef.current = null
      }
      audioInitializedRef.current = false 
      if (audioFile) URL.revokeObjectURL(audioFile)
      setAudioFile(URL.createObjectURL(file))
      previousLevelsRef.current = new Array(SPECTRUM_CONFIG.numBands).fill(0)
      peakHoldsRef.current = new Array(SPECTRUM_CONFIG.numBands).fill(null).map(() => ({ level: 0, timestamp: 0 }))
      sidePeakHoldsRef.current = new Array(SPECTRUM_CONFIG.numBands).fill(null).map(() => ({ level: 0, timestamp: 0 }))
      setCurrentTime(0)
      setDuration(0)
      e.target.value = ''
      setDisplayMode('PEAK_HOLD')
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const handleDispClick = () => {
    if (!audioFile) {
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


  // --- Render ---

  let matrixText = ""
  let matrixMode: 'TEXT' | 'ANIMATION' = 'TEXT'

  if (isPoweredOn && bootStep === 0) {
    switch (displayMode) {
      case 'ANIMATION': matrixMode = 'ANIMATION'; break
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
  }
  // アニメーション中は文字を表示しない（全点灯演出のため）
  if (bootStep > 0) {
    matrixText = "";
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
          bootBlockFlags={getBootBlockFlags()} // ★追加: 起動演出フラグ
        />

        <IconsLayer 
          displayMode={displayMode} 
          isPlaying={isPlaying} 
          audioFile={audioFile} 
          width={1400} 
          height={400} 
          active={isPoweredOn}
          hiddenIconIds={getHiddenIconIds()}
          isBooting={bootStep > 0}
        />

        <LevelizerLayer 
          width={1400} 
          height={400} 
          active={isPoweredOn}
          activeLevels={getBootActiveLevels()} // ★追加: リングごとの制御
          isBooting={bootStep > 0}
        />
      </div>

      {/* UI Controls */}
      <div className="w-full space-y-2">
        <div className="relative w-full">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            disabled={!isPoweredOn || !audioFile || bootStep > 0}
            className="w-full h-0.5 bg-white/10 rounded-full appearance-none cursor-pointer disabled:opacity-20 seek-slider"
          />
          {/* style jsx 省略...元のまま */}
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
          <div className={`text-xs font-mono tracking-wider ${isPoweredOn ? 'text-white/50' : 'text-white/10'}`}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-6 text-sm font-light tracking-widest text-white/70 font-mono">
        {(isPoweredOn && bootStep === 0) ? fileName : ''}
      </div>

      <div className="flex items-center gap-3">
        
        {/* ON/OFF Button */}
        <Button 
          onClick={handlePowerToggle} 
          size="sm" 
          className={`bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer ${isPoweredOn ? 'text-cyan-400 border-cyan-500' : 'text-red-500 border-red-500'}`}
        >
          <Power className="h-4 w-4 mr-2" /> {isPoweredOn ? 'OFF' : 'ON'}
        </Button>

        <input type="file" accept="audio/*" onChange={handleFileUpload} className="hidden" id="audio-upload" disabled={!isPoweredOn || bootStep > 0} />
        <label htmlFor="audio-upload">
          <Button 
            size="sm" 
            asChild 
            disabled={!isPoweredOn || bootStep > 0}
            className="bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer disabled:opacity-50"
          >
            <span className="flex items-center gap-2"><Upload className="h-4 w-4" /> UPLOAD AUDIO</span>
          </Button>
        </label>

        <Button 
          onClick={isPlaying ? handlePause : handlePlay} 
          size="sm" 
          disabled={!isPoweredOn || !audioFile || bootStep > 0}
          className="bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer disabled:opacity-50"
        >
          {isPlaying ? <><Pause className="h-4 w-4 mr-2" /> PAUSE</> : <><Play className="h-4 w-4 mr-2" /> PLAY</>}
        </Button>

        <Button 
          onClick={handleDispClick} 
          size="sm" 
          disabled={!isPoweredOn || bootStep > 0}
          className="bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer disabled:opacity-50"
        >
          <Monitor className="h-4 w-4 mr-2" /> DISP
        </Button>

        <Button 
          onClick={() => setShowGuide(!showGuide)} 
          size="sm" 
          disabled={!isPoweredOn || bootStep > 0}
          className="bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer disabled:opacity-50"
        >
          {showGuide ? <><EyeOff className="h-4 w-4 mr-2" /> GUIDE OFF</> : <><Eye className="h-4 w-4 mr-2" /> GUIDE ON</>}
        </Button>

      </div>
      {audioFile && <audio key={audioFile} ref={audioRef} src={audioFile} className="hidden" loop />}
      <div style={{ color: 'white', fontSize: '10px' }}>DEPLOYED VERSION 0.2.6</div>
    </div>
  )
}