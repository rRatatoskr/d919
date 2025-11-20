// 作成した定数ファイルをインポートしてください
import { VFD_COLORS } from '@/lib/constants'

// 設定をエクスポート
export const DOT_MATRIX_CONFIG = {
  position: { x: 542.7, y: 126 }, 

  // セル（1文字分）の設定
  rows: 7, 
  cols: 5, 
  numCells: 12, 

  pixel: {
    width: 5.7, 
    height: 6.8, 
    slantLR: 3, 
    slopeTB: 0.0, 
    stackSlant: 4.3, 
  },

  // ピクセル間の隙間
  dotGapX: 3.65, 
  dotGapY: 2.8, 
  cellGap: 25, 

  // 見た目の設定：定数を使用
  color: VFD_COLORS.CYAN,      // #1fd8f0ff
  offColor: VFD_COLORS.OFF,    // #231e2dff
  glowBlur: 0, 

  // デバッグ用
  debugAllOn: false,
}