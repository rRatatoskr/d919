'use client'

import { MaskedDotMatrix } from '@/components/dot-matrix/masked-display'
import { CUSTOM_ICONS } from './icon-definitions' // ★ファイル名を複数形(.tsx)に合わせる
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

        // 位置合わせ用スタイル
        const stylePos: React.CSSProperties = {
            position: 'absolute',
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            width: `${icon.width}px`,
            height: `${icon.height}px`,
        }

        // ★ SVGコンポーネントの場合
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

        // ★ ドット絵の場合（従来通り）
        if (icon.type === 'DOT_MATRIX' && icon.maskSrc) {
          return (
            <MaskedDotMatrix
              key={icon.id}
              width={icon.width}
              height={icon.height}
              maskSrc={icon.maskSrc}
              active={isActive}
              iconX={icon.x}
              iconY={icon.y}
              iconWidth={icon.width}
              iconHeight={icon.height}
              color={icon.color || COLORS.iconActive}
              className="absolute top-0 left-0 w-full h-full"
            />
          );
        } 
        return null;
      })}
    </div>
  )
}