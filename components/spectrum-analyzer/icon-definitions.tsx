import { IconDefinition } from './types'

const basePath = process.env.NODE_ENV === 'production' ? '/d919' : ''

export const CUSTOM_ICONS: IconDefinition[] = [
  {
    id: 'mp3-logo',
    name: 'MP3',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/mp3.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 348,
    y: 106.5,
    width: 100, 
    height: 18,
  
    color: '#ff0000ff' 
  },
  {
    id: 'mp3-guide',
    name: 'MP3GUIDE',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/mp3-guide.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 312.5,
    y: 133.15,
    width: 233, 
    height: 150,
    
    color: '#00ff15ff' 
  },
  {
    id: 'balance-center',
    name: 'CENTER',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/balance-center.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 1368.5,
    y: 279.8,
    width: 233, 
    height: 9.3,
    
    color: '#ff0000ff' 
  },
  {
    id: 'balance-guide',
    name: 'BALANCEGUIDE',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/balance-guide.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 1325,
    y: 341,
    width: 233, 
    height: 157,
    
    color: '#00ff15ff' 
  },
  {
    id: 'balance-seat',
    name: 'BALANCESEAT',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/balance-seat.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 1334.5,
    y: 317,
    width: 233, 
    height: 73,
    
    color: '#00ff15ff' 
  },
  {
    id: 'cd-circle',
    name: 'CDCIRCLE',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/cd-circle.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 92,
    y: 260.5,
    width: 233, 
    height: 80,
    
    color: '#00ff15ff' 
  },
  {
    id: 'cd-in',
    name: 'CDIN',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/cd-in.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 1359.6,
    y: 128.9,
    width: 233, 
    height: 43,
    
    color: '#ff0000ff' 
  },
  {
    id: 'corner-ring',
    name: 'CORNERRING',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/corner-ring.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 16,
    y: 337.5,
    width: 233, 
    height: 28,
    
    color: '#00ff15ff' 
  },
  {
    id: 'corner',
    name: 'CORNER',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/corner.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 4,
    y: 340.7,
    width: 233, 
    height: 78.2,
    
    color: '#1876eaff',
  },
  {
    id: 'folder',
    name: 'FOLDER',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/folder.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 410.2,
    y: 131.5,
    width: 233, 
    height: 60,
    
    color: "#1fd8f0ff"
  },
  {
    id: 'folder-in',
    name: 'FOLDERIN',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/folder-in.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 416,
    y: 121,
    width: 233, 
    height: 40,
    
    color: '#1877eaff',
  },
  {
    id: 'note-1',
    name: 'NOTE1',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/note-1.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 490.9,
    y: 97,
    width: 233, 
    height: 34,
    
    color: "#1fd8f0ff",
  },
  {
    id: 'note-2',
    name: 'NOTE2',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/note-2.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 459,
    y: 102,
    width: 233, 
    height: 34,
    
    color: "#1fd8f0ff",
  },
  {
    id: 'note-3',
    name: 'NOTE3',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/note-3.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 456.7,
    y: 131.3,
    width: 233, 
    height: 34,
    
    color: "#1fd8f0ff",
  },
  {
    id: 'note-ring',
    name: 'NOTERING',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/note-ring.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 461.5,
    y: 125,
    width: 233, 
    height: 62,
    
    color: '#1877eaff',
  },
  {
    id: 'posi',
    name: 'POSI',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/posi.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 1348,
    y: 340,
    width: 233, 
    height: 18,
    
    color: '#ff0000ff',
  },
  {
    id: 'sa',
    name: 'SA',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/sa.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 298.5,
    y: 82.5,
    width: 233, 
    height: 21,
    
    color: "#1fd8f0ff",
  },
  {
    id: 'cd',
    name: 'CD',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/cd.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 107.8,
    y: 216.5,
    width: 233, 
    height: 22,
    
    color: "#1fd8f0ff",
  },
  {
    id: 'rom',
    name: 'ROM',
    type: 'IMAGE', 
    
    maskSrc: `${basePath}/images/masks/rom.svg`, 
    
    activeModes: ['UPLOAD_PROMPT', 'PEAK_HOLD', 'ANIMATION', 'MUSIC'],
    
    // ★デバッグのため常に表示 (確認できたら condition: (_, hasFile) => hasFile に戻してください)
    condition: () => true, 
    
    x: 107,
    y: 244,
    width: 233, 
    height: 45,
    
    color: "#1fd8f0ff",
  },

]