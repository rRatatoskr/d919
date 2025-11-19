'use client'

import { useEffect, useRef, useState } from 'react'

interface MaskedDotMatrixProps {
  width: number
  height: number
  maskSrc: string
  active: boolean
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
  color = '#1fd7f0',
  inactiveColor = 'rgba(35, 30, 45, 0.0)', // デフォルトは消灯時透明
  dotSize = 3, // ドットサイズ調整
  gap = 2,
  className
}: MaskedDotMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [points, setPoints] = useState<Point[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // マスク画像の解析（初回のみ）
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

      // 画像を描画してピクセルデータを取得
      ctx.drawImage(img, 0, 0, width, height)
      const imageData = ctx.getImageData(0, 0, width, height).data
      
      const validPoints: Point[] = []
      const step = dotSize + gap

      // グリッドスキャン
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4 + 3 // アルファ値
          if (imageData[index] > 128) { // 不透明度50%以上を有効ドットとする
            validPoints.push({ x, y })
          }
        }
      }
      setPoints(validPoints)
      setIsLoaded(true)
    }
  }, [maskSrc, width, height, dotSize, gap])

  // 描画処理
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !isLoaded) return

    ctx.clearRect(0, 0, width, height)
    
    // 点灯状態に応じた色設定
    ctx.fillStyle = active ? color : inactiveColor
    
    // 影（光る演出）
    if (active) {
      ctx.shadowBlur = 5
      ctx.shadowColor = color
    } else {
      ctx.shadowBlur = 0
    }

    // ドット描画
    points.forEach(p => {
      ctx.fillRect(p.x, p.y, dotSize, dotSize)
    })

  }, [active, points, isLoaded, color, inactiveColor, width, height, dotSize])

  return <canvas ref={canvasRef} width={width} height={height} className={className} />
}