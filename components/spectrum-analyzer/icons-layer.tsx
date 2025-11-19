'use client'

import { MaskedDotMatrix } from '@/components/dot-matrix/masked-display'
import { DisplayMode } from './types'
import { COLORS } from './config'

const CUSTOM_ICONS: {
  id: string
  activeModes: DisplayMode[]
  maskSrc: string
  condition?: (isPlaying: boolean, hasFile: boolean) => boolean
}[] = []

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
        // 点灯判定
        const isModeActive = icon.activeModes.includes(displayMode)
        const isConditionMet = icon.condition ? icon.condition(isPlaying, hasFile) : true
        const isActive = isModeActive && isConditionMet

        return (
          <MaskedDotMatrix
            key={icon.id}
            width={width}
            height={height}
            maskSrc={icon.maskSrc}
            active={isActive}
            color={COLORS.iconActive}
            // canvasを重ね合わせるのでabsolute配置
            className="absolute top-0 left-0 w-full h-full"
          />
        )
      })}
    </div>
  )
}