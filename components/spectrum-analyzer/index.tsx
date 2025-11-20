'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, Upload, Monitor } from 'lucide-react' // Eye, EyeOff を削除
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

export function SpectrumAnalyzer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioFile, setAudioFile] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>('')
  
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

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
  
  const audioInitializedRef = useRef<boolean>(false)


  // コンポーネントのクリーンアップ
  useEffect(() => {
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


  const drawSpectrum = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

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
  }, [isPlaying, displayMode, audioFile])

  
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

        <IconsLayer 
          displayMode={displayMode} 
          isPlaying={isPlaying} 
          audioFile={audioFile} 
          width={1400} 
          height={400} 
        />

        <LevelizerLayer width={1400} height={400} />
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
      </div>
      {audioFile && <audio key={audioFile} ref={audioRef} src={audioFile} className="hidden" loop />}
      <div style={{ color: 'white', fontSize: '10px' }}>DEPLOYED VERSION 0.2.2</div>
    </div>
  )
}