"use client"

import { useEffect, useRef } from "react"

// ==========================================
// 🎨 ドットマトリクス表示領域の設定 (DOT_MATRIX_CONFIG)
// ==========================================
// ここで位置、サイズ、色、ドットの形状などを自由に調整できます。
export const DOT_MATRIX_CONFIG = {
  position: { x: 542.7, y: 96.8 }, // (x, y) = ドットマトリクス全体の左下の座標

  // セル（1文字分）の設定
  rows: 7, // 縦のドット数
  cols: 5, // 横のドット数
  numCells: 12, // セル（文字）の数

  pixel: {
    width: 5.7, // ピクセルの横幅
    height: 9, // ピクセルの縦幅
    slantLR: 3, // 左右の傾斜（平行四辺形の変形：上にいくほど右にずれる量）
    slopeTB: 0.0, // 上下の傾斜（平行四辺形の変形：右にいくほど上に上がる量）
    stackSlant: 4.3, // 積み上げ時の傾斜（上の行ほど右にずらす量）
  },

  // ピクセル間の隙間
  dotGapX: 3.65, // ドット間の横の隙間
  dotGapY: 4.45, // ドット間の縦の隙間
  cellGap: 25, // セル（文字）間の隙間

  // 見た目の設定
  color: "#00ffffff", // ドットの色 (シアン)
  offColor: "#231e2dff", // 消灯時のドットの色 (薄く表示する場合)
  glowBlur: 4, // 発光エフェクトの強さ

  // デバッグ用: 全点灯させるかどうか
  debugAllOn: false,
}

interface DotMatrixDisplayProps {
  width?: number
  height?: number
  className?: string
}

export function DotMatrixDisplay({ width = 600, height = 100, className }: DotMatrixDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 描画ループ
    let animationFrameId: number

    const render = () => {
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
          // r=0が一番上、r=rows-1が一番下なので反転させる
          const rowIndexFromBottom = rows - 1 - r
          
          // stackSlantによるX座標のズレを計算（上にいくほど右にずれる）
          const stackShift = rowIndexFromBottom * pixel.stackSlant

          for (let c = 0; c < cols; c++) {
            const x = cellStartX + c * (pixel.width + dotGapX) + stackShift
            const y = cellStartY + r * (pixel.height + dotGapY)

            // 点灯状態の判定 (現在はデバッグ用またはプレーンなグリッドを表示)
            // 将来的にはここでイルカのパターンデータなどを参照する
            const isOn = debugAllOn || Math.random() > 0.9 // テスト用にランダム点灯

            ctx.fillStyle = isOn ? color : offColor
            // 消灯ドットは発光させない
            ctx.shadowBlur = isOn ? glowBlur : 0

            // ダブルスラントの描画ロジック
            const drawX = x
            const drawY = y + pixel.height // 左下座標

            const p4 = { x: drawX, y: drawY } // 左下
            const p3 = { x: drawX + pixel.width, y: drawY - pixel.slopeTB } // 右下
            const p1 = { x: drawX + pixel.slantLR, y: drawY - pixel.height } // 左上
            const p2 = { x: drawX + pixel.width + pixel.slantLR, y: drawY - pixel.height - pixel.slopeTB } // 右上

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

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} width={width} height={height} className={className} />
}
