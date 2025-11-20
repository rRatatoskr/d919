import { SvgIconProps } from '@/components/spectrum-analyzer/types'

export function Mp3Logo({ color, active }: SvgIconProps) { // width, height は受け取らず無視する
  const fillColor = active ? color : '#333333' 
  const filterStyle = active ? `drop-shadow(0 0 5px ${color})` : 'none'

  return (
    <svg
      width="100%"   // ★親要素に合わせて伸縮
      height="100%"  // ★親要素に合わせて伸縮
      viewBox="0 0 100 40" // SVGの元座標系（ここは維持）
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        transition: 'all 0.2s ease',
        filter: filterStyle,
        overflow: 'visible' // 光彩が見切れないように
      }}
    >
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