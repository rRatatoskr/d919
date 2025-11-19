// components/dot-matrix/masked-display.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

interface MaskedDotMatrixProps {
  width: number
  height: number
  maskSrc: string
  active: boolean
  
  // 追加プロパティ
  iconX?: number
  iconY?: number
  iconWidth?: number
  iconHeight?: number
  
  color?: string
  inactiveColor?: string
  dotSize?: number
  gap?: number
  className?: string
}

interface Point {
  x: number
  y: number
}

export function MaskedDotMatrix({
  width,
  height,
  maskSrc,
  active,
  iconX = 0,
  iconY = 0,
  iconWidth,
  iconHeight,
  color = '#1fd7f0',
  inactiveColor = 'rgba(35, 30, 45, 0.0)',
  dotSize = 3,
  gap = 2,
  className
}: MaskedDotMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [points, setPoints] = useState<Point[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = maskSrc
    img.crossOrigin = 'anonymous'
    
    img.onload = () => {
      const offCanvas = document.createElement('canvas')
      offCanvas.width = width
      offCanvas.height = height
      const ctx = offCanvas.getContext('2d')
      if (!ctx) return

      // 描画エリアをクリア
      ctx.clearRect(0, 0, width, height)

      // ★指定された位置とサイズでマスク画像を描画
      const drawW = iconWidth || width
      const drawH = iconHeight || height
      ctx.drawImage(img, iconX, iconY, drawW, drawH)

      const imageData = ctx.getImageData(0, 0, width, height).data
      
      const validPoints: Point[] = []
      const step = dotSize + gap

      // 画像が描画された範囲だけを重点的にスキャン（パフォーマンス最適化）
      // ※念のため全体スキャンでも良いが、範囲指定した方が軽い
      const startX = Math.max(0, Math.floor(iconX / step) * step)
      const endX = Math.min(width, startX + drawW + step)
      const startY = Math.max(0, Math.floor(iconY / step) * step)
      const endY = Math.min(height, startY + drawH + step)

      for (let y = startY; y < endY; y += step) {
        for (let x = startX; x < endX; x += step) {
          const index = (y * width + x) * 4 + 3 // アルファチャンネル
          // 不透明度が一定以上なら「光るドット」とみなす
          if (imageData[index] > 100) {
            validPoints.push({ x, y })
          }
        }
      }
      setPoints(validPoints)
      setIsLoaded(true)
    }
  }, [maskSrc, width, height, dotSize, gap, iconX, iconY, iconWidth, iconHeight])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !isLoaded) return

    ctx.clearRect(0, 0, width, height)
    
    // 点灯時は指定色、消灯時は透明(または指定色)
    ctx.fillStyle = active ? color : inactiveColor
    
    if (active) {
      ctx.shadowBlur = 5
      ctx.shadowColor = color
    } else {
      ctx.shadowBlur = 0
    }

    points.forEach(p => {
      ctx.fillRect(p.x, p.y, dotSize, dotSize)
    })

  }, [active, points, isLoaded, color, inactiveColor, width, height, dotSize])

  return <canvas ref={canvasRef} width={width} height={height} className={className} />
}