"use client"

import { useEffect, useRef } from "react"
import { DOT_MATRIX_CONFIG } from "./config"
import { DOLPHIN_CUSTOM_FRAMES } from "./frames"
import { CHAR_PATTERNS } from "./patterns"

interface DotMatrixDisplayProps {
  width?: number
  height?: number
  className?: string
  text?: string
  mode?: 'TEXT' | 'ANIMATION'
}

export function DotMatrixDisplay({
     width = 600, height = 100, className, text = "PEAK HOLD", mode = 'TEXT' 
    }: DotMatrixDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // ==========================================
  // ⚙️ スクロール動作の設定
  // ==========================================
  const SCROLL_CONFIG = {
    startPause: 2000, // 停止時間 (ms)
    speed: 20,        // スクロール速度 (列/秒) 
    charGap: 1,       // 文字と文字の間の空白列数（これを増やすと文字間が広がります）
  }

  // 状態管理
  const stateRef = useRef<'STATIC' | 'SCROLLING'>('STATIC')
  const stateStartTimeRef = useRef(0)
  const scrollOffsetRef = useRef(0) 
  
  const lastTimeRef = useRef(0)
  const frameIndexRef = useRef(0)
  const lastFrameTimeRef = useRef(0)

  const ANIMATION_SPEED = 30 

  useEffect(() => {
    stateRef.current = 'STATIC'
    stateStartTimeRef.current = 0
    scrollOffsetRef.current = 0
    frameIndexRef.current = 0
    lastTimeRef.current = 0
  }, [mode, text])

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

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // --- 設定値 ---
      const {
        position, rows, cols, numCells, pixel,
        dotGapX, dotGapY, cellGap,
        color, offColor, glowBlur, debugAllOn,
      } = DOT_MATRIX_CONFIG

      const dotPitch = pixel.width + dotGapX
      const cellWidth = cols * dotPitch - dotGapX
      const cellPitch = cellWidth + cellGap 

      // ★ここが修正点: 論理的な1文字の幅（ドット列数）
      // 文字データ(cols) + 設定した空白(charGap)
      const CHAR_COLS = cols + SCROLL_CONFIG.charGap
      
      // 画面全体の論理列数も空白分を含めて広げる
      const screenCols = numCells * CHAR_COLS 
      const textCols = (text ? text.length : 0) * CHAR_COLS 

      // -------------------------------------------------------
      // 状態更新
      // -------------------------------------------------------
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
            // 待機中
            scrollOffsetRef.current = 0
            if (timestamp - stateStartTimeRef.current > SCROLL_CONFIG.startPause) {
              stateRef.current = 'SCROLLING'
            }
          } 
          else if (stateRef.current === 'SCROLLING') {
            const moveAmount = SCROLL_CONFIG.speed * dt
            const prevOffset = scrollOffsetRef.current
            scrollOffsetRef.current += moveAmount

            // ループ判定
            if (scrollOffsetRef.current > textCols) {
               scrollOffsetRef.current = -screenCols
            }

            // 停止判定
            if (prevOffset < 0 && scrollOffsetRef.current >= 0) {
              scrollOffsetRef.current = 0
              stateRef.current = 'STATIC'
              stateStartTimeRef.current = timestamp
            }
          }
        }
      }

      // -------------------------------------------------------
      // 描画
      // -------------------------------------------------------
      ctx.shadowBlur = glowBlur
      ctx.shadowColor = color
      const totalHeight = rows * (pixel.height + dotGapY) - dotGapY

      for (let cellIndex = 0; cellIndex < numCells; cellIndex++) {
        const cellStartX = position.x + cellIndex * cellPitch
        const cellStartY = position.y - totalHeight

        for (let r = 0; r < rows; r++) {
          const rowIndexFromBottom = rows - 1 - r
          const stackShift = rowIndexFromBottom * pixel.stackSlant

          for (let c = 0; c < cols; c++) {
            const x = cellStartX + c * dotPitch + stackShift
            const y = cellStartY + r * (pixel.height + dotGapY)

            let isOn = debugAllOn
            
            if (!isOn) {
              if (mode === 'ANIMATION') {
                const currentFrame = DOLPHIN_CUSTOM_FRAMES[frameIndexRef.current]
                if (currentFrame) {
                  const cellString = currentFrame[r][cellIndex]
                  if (cellString && cellString[c] === '1') isOn = true
                }
              } 
              else if (mode === 'TEXT' && text) {
                // 論理座標マッピング
                // 各セルも、空白分(charGap)を含んだ幅を持っているとみなして計算
                const logicalCol = cellIndex * CHAR_COLS + c
                
                const targetDataCol = Math.floor(logicalCol + scrollOffsetRef.current)
                
                if (targetDataCol >= 0 && targetDataCol < textCols) {
                  const charIndex = Math.floor(targetDataCol / CHAR_COLS)
                  const colIndex = targetDataCol % CHAR_COLS

                  // 文字データの範囲内（空白部分でない）場合のみ描画
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

            ctx.fillStyle = isOn ? color : offColor
            ctx.shadowBlur = isOn ? glowBlur : 0

            const drawX = x
            const drawY = y + pixel.height
            const p4 = { x: drawX, y: drawY }
            const p3 = { x: drawX + pixel.width, y: drawY - pixel.slopeTB }
            const p1 = { x: drawX + pixel.slantLR, y: drawY - pixel.height }
            const p2 = { x: drawX + pixel.width + pixel.slantLR, y: drawY - pixel.height - pixel.slopeTB }

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
      animationFrameId = requestAnimationFrame(render)
    }

    render(0)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [mode, text])

  return <canvas ref={canvasRef} width={width} height={height} className={className} />
}