import { IconDefinition } from './types'

const basePath = process.env.NODE_ENV === 'production' ? '/d919' : ''

export const CUSTOM_ICONS: IconDefinition[] = [
  {
    id: 'mp3-logo',
    name: 'MP3',
    type: 'IMAGE', 
    
    // ★ここを .svg に指定
    maskSrc: `${basePath}/images/masks/mp3.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    // 配置と色
    x: 204.245,
    y: 55.45,
    width: 100, 
    height: 20,
    
    // ★この色でSVGが光ります
    color: '#ff00557c' 
  },
  // 他のアイコン設定...
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