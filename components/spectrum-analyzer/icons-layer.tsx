'use client'

import { MaskedDotMatrix } from '@/components/dot-matrix/masked-display'
import { CUSTOM_ICONS } from './icon-definitions'
import { DisplayMode } from './types'
import { COLORS } from './config'

interface IconsLayerProps {
  displayMode: DisplayMode
  isPlaying: boolean
  audioFile: string | null
  width: number
  height: number
}

export function IconsLayer({
  displayMode,
  isPlaying,
  audioFile,
  width,
  height
}: IconsLayerProps) {
  const hasFile = !!audioFile

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
      {CUSTOM_ICONS.map((icon) => {
        const isModeActive = icon.activeModes.includes(displayMode)
        const isConditionMet = icon.condition ? icon.condition(isPlaying, hasFile) : true
        const isActive = isModeActive && isConditionMet

        // アイコンの基準位置（左下）を計算 (px単位)
        const topPositionPx = icon.y - icon.height

        // ★ここが修正ポイント：ピクセルをパーセントに変換する
        const leftPct = (icon.x / width) * 100
        const topPct = (topPositionPx / height) * 100
        const widthPct = (icon.width / width) * 100
        const heightPct = (icon.height / height) * 100

        const stylePos: React.CSSProperties = {
            position: 'absolute',
            left: `${leftPct}%`,   // %指定に変更
            top: `${topPct}%`,     // %指定に変更
            width: `${widthPct}%`, // %指定に変更
            height: `${heightPct}%`, // %指定に変更
            transition: 'opacity 0.2s ease-in-out',
            opacity: isActive ? 1 : 0.1, 
        }

        // 1. SVGコンポーネント
        if (icon.type === 'COMPONENT' && icon.component) {
            const SvgComponent = icon.component
            return (
                <div key={icon.id} style={stylePos}>
                    {/* コンポーネントには親divいっぱいに広がるよう指示 */}
                    <SvgComponent 
                        color={icon.color || COLORS.iconActive} 
                        active={isActive}
                        // width/height は stylePos で制御するので、
                        // SVG自体は viewBox に合わせて 100% 表示させるためのダミー値を渡すか、
                        // あるいはコンポーネント側で width="100%" height="100%" とする
                        width={100} // ※ここはパーセント計算には影響しません
                        height={100} 
                    />
                </div>
            )
        }

        // 2. ドットマトリクス
        if (icon.type === 'DOT_MATRIX' && icon.maskSrc) {
          return (
            <MaskedDotMatrix
              key={icon.id}
              // Canvas全体を描画領域とするため、width/heightは親のpropsをそのまま使う
              width={width}
              height={height}
              maskSrc={icon.maskSrc}
              active={isActive}
              // 描画位置はCanvas内部の座標系(px)で指定する必要があるため、元の値を渡す
              iconX={icon.x}
              iconY={topPositionPx}
              iconWidth={icon.width}
              iconHeight={icon.height}
              color={icon.color || COLORS.iconActive}
              className="absolute top-0 left-0 w-full h-full"
            />
          );
        } 
        
        // 3. 画像 (SVG/PNG)
        if (icon.type === 'IMAGE' && icon.maskSrc) {
           if (icon.color) {
             return (
               <div 
                 key={icon.id}
                 style={{
                   ...stylePos,
                   backgroundColor: icon.color,
                   maskImage: `url(${icon.maskSrc})`,
                   WebkitMaskImage: `url(${icon.maskSrc})`,
                   maskSize: 'contain',       
                   WebkitMaskSize: 'contain',
                   maskPosition: 'left bottom', 
                   WebkitMaskPosition: 'left bottom',
                   maskRepeat: 'no-repeat',
                   WebkitMaskRepeat: 'no-repeat',
                   filter: isActive ? `drop-shadow(0 0 8px ${icon.color})` : 'none' 
                 }}
               />
             )
           }

           return (
            <img 
              key={icon.id}
              src={icon.maskSrc} 
              alt={icon.name} 
              style={{
                ...stylePos,
                objectFit: 'contain',
                objectPosition: 'left bottom'
              }}
            />
          );
        }
        return null;
      })}
    </div>
  )
}