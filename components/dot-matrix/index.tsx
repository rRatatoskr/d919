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
  const frameIndexRef = useRef(0)
  const lastFrameTimeRef = useRef(0)
  const ANIMATION_SPEED = 30 // ms per frame

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 描画ループ
    let animationFrameId: number

    const render = (timestamp: number) => {
      // キャンバスをクリア
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 設定の読み込み
      const {
        position,
        rows,
        cols,
        numCells,
        pixel,
        dotGapX,
        dotGapY,
        cellGap,
        color,
        offColor,
        glowBlur,
        debugAllOn,
      } = DOT_MATRIX_CONFIG

      if (mode === 'ANIMATION') {
        if (timestamp - lastFrameTimeRef.current > ANIMATION_SPEED) {
          frameIndexRef.current = (frameIndexRef.current + 1) % DOLPHIN_CUSTOM_FRAMES.length
          lastFrameTimeRef.current = timestamp
        }
      } else {
        frameIndexRef.current = 0 // Reset animation when in text mode
      }

      ctx.shadowBlur = glowBlur
      ctx.shadowColor = color

      const cellWidth = cols * (pixel.width + dotGapX) - dotGapX
      const totalHeight = rows * (pixel.height + dotGapY) - dotGapY
      
      // 全セルを描画
      for (let cellIndex = 0; cellIndex < numCells; cellIndex++) {
        const cellStartX = position.x + cellIndex * (cellWidth + cellGap)
        const cellStartY = position.y - totalHeight

        // セル内のドットを描画 (5x7)
        for (let r = 0; r < rows; r++) {
          // 下からの行インデックス（0始まり）を計算
          const rowIndexFromBottom = rows - 1 - r
          
          // stackSlantによるX座標のズレを計算
          const stackShift = rowIndexFromBottom * pixel.stackSlant

          for (let c = 0; c < cols; c++) {
            const x = cellStartX + c * (pixel.width + dotGapX) + stackShift
            const y = cellStartY + r * (pixel.height + dotGapY)

            // 点灯状態の判定
            let isOn = debugAllOn
            
            if (!isOn) {
              if (mode === 'TEXT' && text) {
                const char = text[cellIndex] || ' '
                const pattern = CHAR_PATTERNS[char.toUpperCase()] || CHAR_PATTERNS[' ']
                if (pattern && pattern[r] && pattern[r][c]) {
                  isOn = true
                }
              } else if (mode === 'ANIMATION') {
                const currentFrame = DOLPHIN_CUSTOM_FRAMES[frameIndexRef.current]
                if (currentFrame) {
                  const cellString = currentFrame[r][cellIndex]
                  if (cellString && cellString[c] === '1') {
                    isOn = true
                  }
                }
              }
            }

            ctx.fillStyle = isOn ? color : offColor
            ctx.shadowBlur = isOn ? glowBlur : 0

            // ダブルスラントの描画ロジック
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