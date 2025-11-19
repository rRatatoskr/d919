import { IconDefinition } from './types'
import { Mp3Logo } from '@/components/icons/mp3-logo' // ★手順1で作ったファイルを読み込む

const basePath = process.env.NODE_ENV === 'production' ? '/d919' : ''

export const CUSTOM_ICONS: IconDefinition[] = [
  {
    id: 'mp3-logo',
    name: 'MP3',
    type: 'COMPONENT', // ★タイプをCOMPONENTに指定
    component: Mp3Logo, // ★コンポーネントを割り当て
    activeModes: ['PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    condition: (_, hasFile) => hasFile,
    
    // 位置とサイズと色
    x: 1180,
    y: 45,
    width: 80,
    height: 40,
    color: '#ff0055' // ピンク色に発光
  },
  // 他のドット絵アイコン（今まで通り）
  {
    id: 'note-1',
    name: '音符1',
    type: 'DOT_MATRIX',
    maskSrc: `${basePath}/images/masks/icon-note1.png`,
    activeModes: ['ANIMATION', 'MUSIC'],
    condition: (isPlaying) => isPlaying,
    x: 370, y: 82, width: 15, height: 10, color: '#1fd7f0'
  },
]