import { SvgIconProps } from '@/components/spectrum-analyzer/types'

export function Mp3Logo({ color, active, width, height }: SvgIconProps) {
  // 点灯時は指定色、消灯時は暗いグレーにする
  const fillColor = active ? color : '#333333' 
  
  // 点灯時だけ光るエフェクト(ドロップシャドウ)をつける
  const filterStyle = active ? `drop-shadow(0 0 5px ${color})` : 'none'

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        transition: 'all 0.2s ease',
        filter: filterStyle
      }}
    >
      {/* MP3の文字のパスデータ（仮） */}
      <path
        d="M10 30 V10 L20 20 L30 10 V30 M45 30 V10 H55 C65 10 65 20 55 20 H45 M55 30 H65 C75 30 75 20 65 20 C75 20 75 10 65 10 H55"
        stroke={fillColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}