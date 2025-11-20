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

        // アイコンの基準位置（左下）を計算
        const topPosition = icon.y - icon.height

        const stylePos: React.CSSProperties = {
            position: 'absolute',
            left: `${icon.x}px`,
            top: `${topPosition}px`,
            width: `${icon.width}px`,
            height: `${icon.height}px`,
            transition: 'opacity 0.2s ease-in-out',
            opacity: isActive ? 1 : 0.1, 
        }

        // 1. SVGコンポーネント
        if (icon.type === 'COMPONENT' && icon.component) {
            const SvgComponent = icon.component
            return (
                <div key={icon.id} style={stylePos}>
                    <SvgComponent 
                        color={icon.color || COLORS.iconActive} 
                        active={isActive}
                        width={icon.width}
                        height={icon.height}
                    />
                </div>
            )
        }

        // 2. ドットマトリクス
        if (icon.type === 'DOT_MATRIX' && icon.maskSrc) {
          return (
            <MaskedDotMatrix
              key={icon.id}
              width={width}
              height={height}
              maskSrc={icon.maskSrc}
              active={isActive}
              iconX={icon.x}
              iconY={topPosition}
              iconWidth={icon.width}
              iconHeight={icon.height}
              color={icon.color || COLORS.iconActive}
              className="absolute top-0 left-0 w-full h-full"
            />
          );
        } 
        
        // 3. 画像 (SVG/PNG)
        if (icon.type === 'IMAGE' && icon.maskSrc) {
           // 色指定がある場合 => CSS Mask
           if (icon.color) {
             return (
               <div 
                 key={icon.id}
                 style={{
                   ...stylePos,
                   backgroundColor: icon.color,
                   
                   // ★ここが修正ポイント
                   maskImage: `url(${icon.maskSrc})`,
                   WebkitMaskImage: `url(${icon.maskSrc})`,
                   
                   // アスペクト比を維持して、ボックス内に収める
                   maskSize: 'contain',       
                   WebkitMaskSize: 'contain',
                   
                   // 左下を基準にする（これでサイズを変えても位置がずれない）
                   maskPosition: 'left bottom', 
                   WebkitMaskPosition: 'left bottom',
                   
                   maskRepeat: 'no-repeat',
                   WebkitMaskRepeat: 'no-repeat',
                   
                   filter: isActive ? `drop-shadow(0 0 8px ${icon.color})` : 'none' 
                 }}
               />
             )
           }

           // 色指定なし => そのまま表示
           return (
            <img 
              key={icon.id}
              src={icon.maskSrc} 
              alt={icon.name} 
              style={{
                ...stylePos,
                objectFit: 'contain',       // 枠内に収める
                objectPosition: 'left bottom' // 左下基準
              }}
            />
          );
        }
        return null;
      })}
    </div>
  )
}