"use client"

import { useEffect, useRef, useMemo } from "react"
import { DOT_MATRIX_CONFIG } from "./config"
import { DOLPHIN_CUSTOM_FRAMES } from "./frames"
import { CHAR_PATTERNS } from "./patterns"
import { VFD_COLORS } from "@/lib/constants"

interface DotMatrixDisplayProps {
  width?: number
  height?: number
  className?: string
  text?: string
  mode?: 'TEXT' | 'ANIMATION'
  color?: string
  bootBlockFlags?: boolean[] 
}

export function DotMatrixDisplay({
     width = 600, height = 100, className, text = "PEAK HOLD", mode = 'TEXT',
     color = VFD_COLORS.CYAN,
     bootBlockFlags = [] 
    }: DotMatrixDisplayProps) {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // スクロール設定 (元のまま)
  const SCROLL_CONFIG = {
    startPause: 2000,
    speed: 20,
    charGap: 1,
  }

  // 状態管理 (Refsで管理して再レンダリングを防ぐ)
  const stateRef = useRef<'STATIC' | 'SCROLLING'>('STATIC')
  const stateStartTimeRef = useRef(0)
  const scrollOffsetRef = useRef(0) 
  
  const lastTimeRef = useRef(0)
  const frameIndexRef = useRef(0)
  const lastFrameTimeRef = useRef(0)

  const ANIMATION_SPEED = 30 
  const bootFlagsStr = JSON.stringify(bootBlockFlags)

  // リセット処理
  useEffect(() => {
    stateRef.current = 'STATIC'
    stateStartTimeRef.current = 0
    scrollOffsetRef.current = 0
    frameIndexRef.current = 0
    lastTimeRef.current = 0
  }, [mode, text])

  // =================================================================
  // 1. 背景（OFFドット）のSVGパス生成 [SSRで即座に表示される]
  // =================================================================
  const bgPath = useMemo(() => {
    const {
      position, rows, cols, numCells, pixel,
      dotGapX, dotGapY, cellGap,
    } = DOT_MATRIX_CONFIG

    const dotPitch = pixel.width + dotGapX
    const cellWidth = cols * dotPitch - dotGapX
    const cellPitch = cellWidth + cellGap 
    const totalHeight = rows * (pixel.height + dotGapY) - dotGapY

    let d = "";

    for (let cellIndex = 0; cellIndex < numCells; cellIndex++) {
      const cellStartX = position.x + cellIndex * cellPitch
      const cellStartY = position.y - totalHeight

      for (let r = 0; r < rows; r++) {
        const rowIndexFromBottom = rows - 1 - r
        const stackShift = rowIndexFromBottom * pixel.stackSlant

        for (let c = 0; c < cols; c++) {
          const x = cellStartX + c * dotPitch + stackShift
          const y = cellStartY + r * (pixel.height + dotGapY)
          
          // Canvasと同じ座標計算でパスを作成
          const drawX = x
          const drawY = y + pixel.height
          const p1x = drawX + pixel.slantLR;
          const p1y = drawY - pixel.height;
          const p2x = drawX + pixel.width + pixel.slantLR;
          const p2y = drawY - pixel.height - pixel.slopeTB;
          const p3x = drawX + pixel.width;
          const p3y = drawY - pixel.slopeTB;
          const p4x = drawX;
          const p4y = drawY;

          d += `M${p1x},${p1y} L${p2x},${p2y} L${p3x},${p3y} L${p4x},${p4y} Z `
        }
      }
    }
    return d;
  }, []); // 一度だけ計算

  // =================================================================
  // 2. 前景（ONドット）のアニメーション描画 [Canvasで高速動作]
  // =================================================================
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const render = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      if (!stateStartTimeRef.current) stateStartTimeRef.current = timestamp

      const dt = (timestamp - lastTimeRef.current) / 1000
      lastTimeRef.current = timestamp

      // 前回の描画をクリア（背景のSVGが見えるようになる）
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const {
        position, rows, cols, numCells, pixel,
        dotGapX, dotGapY, cellGap,
        glowBlur, debugAllOn,
      } = DOT_MATRIX_CONFIG

      const dotPitch = pixel.width + dotGapX
      const cellWidth = cols * dotPitch - dotGapX
      const cellPitch = cellWidth + cellGap 

      const CHAR_COLS = cols + SCROLL_CONFIG.charGap
      
      const screenCols = numCells * CHAR_COLS 
      const textCols = (text ? text.length : 0) * CHAR_COLS 

      // -------------------------------------------------------
      // 状態更新 (起動アニメーション中はスキップ)
      // -------------------------------------------------------
      const isBooting = bootBlockFlags && bootBlockFlags.length > 0;

      if (!isBooting) {
        if (mode === 'ANIMATION') {
          if (timestamp - lastFrameTimeRef.current > ANIMATION_SPEED) {
            frameIndexRef.current = (frameIndexRef.current + 1) % DOLPHIN_CUSTOM_FRAMES.length
            lastFrameTimeRef.current = timestamp
          }
        } 
        else if (mode === 'TEXT' && text) {
          const isOverflow = text.length > numCells

          if (!isOverflow) {
            stateRef.current = 'STATIC'
            scrollOffsetRef.current = 0
          } else {
            if (stateRef.current === 'STATIC') {
              if (timestamp - stateStartTimeRef.current > SCROLL_CONFIG.startPause) {
                stateRef.current = 'SCROLLING'
              }
            } 
            else if (stateRef.current === 'SCROLLING') {
              const moveAmount = SCROLL_CONFIG.speed * dt
              const prevOffset = scrollOffsetRef.current
              scrollOffsetRef.current += moveAmount

              if (scrollOffsetRef.current > textCols) {
                 scrollOffsetRef.current = -screenCols
              }
              if (prevOffset < 0 && scrollOffsetRef.current >= 0) {
                scrollOffsetRef.current = 0
                stateRef.current = 'STATIC'
                stateStartTimeRef.current = timestamp
              }
            }
          }
        }
      }

      // -------------------------------------------------------
      // 描画 (ONのドットだけを描く)
      // -------------------------------------------------------
      ctx.fillStyle = color
      ctx.shadowBlur = glowBlur
      ctx.shadowColor = color
      const totalHeight = rows * (pixel.height + dotGapY) - dotGapY

      for (let cellIndex = 0; cellIndex < numCells; cellIndex++) {
        const cellStartX = position.x + cellIndex * cellPitch
        const cellStartY = position.y - totalHeight

        // 起動アニメーション判定: このブロックがONなら全点灯
        const isBootLit = bootBlockFlags && bootBlockFlags[cellIndex];

        for (let r = 0; r < rows; r++) {
          const rowIndexFromBottom = rows - 1 - r
          const stackShift = rowIndexFromBottom * pixel.stackSlant

          for (let c = 0; c < cols; c++) {
            const x = cellStartX + c * dotPitch + stackShift
            const y = cellStartY + r * (pixel.height + dotGapY)

            let isOn = debugAllOn
            
            if (isBootLit) {
                isOn = true;
            } else if (!isOn) {
              if (mode === 'ANIMATION') {
                const currentFrame = DOLPHIN_CUSTOM_FRAMES[frameIndexRef.current]
                if (currentFrame) {
                  const cellString = currentFrame[r][cellIndex]
                  if (cellString && cellString[c] === '1') isOn = true
                }
              } 
              else if (mode === 'TEXT' && text) {
                const logicalCol = cellIndex * CHAR_COLS + c
                const targetDataCol = Math.floor(logicalCol + scrollOffsetRef.current)
                
                if (targetDataCol >= 0 && targetDataCol < textCols) {
                  const charIndex = Math.floor(targetDataCol / CHAR_COLS)
                  const colIndex = targetDataCol % CHAR_COLS

                  if (colIndex < cols) {
                    const char = text[charIndex]
                    const pattern = CHAR_PATTERNS[char.toUpperCase()] || CHAR_PATTERNS[' ']
                    if (pattern && pattern[r] && pattern[r][colIndex]) {
                      isOn = true
                    }
                  }
                }
              }
            }

            // ★ONのときだけ描画（OFFはSVG背景任せ）
            if (isOn) {
                const drawX = x
                const drawY = y + pixel.height
                const p1 = { x: drawX + pixel.slantLR, y: drawY - pixel.height }
                const p2 = { x: drawX + pixel.width + pixel.slantLR, y: drawY - pixel.height - pixel.slopeTB }
                const p3 = { x: drawX + pixel.width, y: drawY - pixel.slopeTB }
                const p4 = { x: drawX, y: drawY }

                ctx.beginPath()
                ctx.moveTo(p1.x, p1.y)
                ctx.lineTo(p2.x, p2.y)
                ctx.lineTo(p3.x, p3.y)
                ctx.lineTo(p4.x, p4.y)
                ctx.closePath()
                ctx.fill()
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(render)
    }

    render(0)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [mode, text, bootFlagsStr, color])

  return (
    <div className={className}>
      {/* 背景: SVG (OFF状態) */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${width} ${height}`} 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <path d={bgPath} fill={DOT_MATRIX_CONFIG.offColor} />
      </svg>

      {/* 前景: Canvas (ON状態) */}
      <canvas 
        ref={canvasRef} 
        width={width} 
        height={height} 
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  )
}