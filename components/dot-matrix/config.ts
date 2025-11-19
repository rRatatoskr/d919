// 設定をエクスポート
export const DOT_MATRIX_CONFIG = {
  position: { x: 542.7, y: 96.8 }, // (x, y) = ドットマトリクス全体の左下の座標

  // セル（1文字分）の設定
  rows: 7, // 縦のドット数
  cols: 5, // 横のドット数
  numCells: 12, // セル（文字）の数

  pixel: {
    width: 5.7, // ピクセルの横幅
    height: 9, // ピクセルの縦幅
    slantLR: 3, // 左右の傾斜（平行四辺形の変形：上にいくほど右にずれる量）
    slopeTB: 0.0, // 上下の傾斜（平行四辺形の変形：右にいくほど上に上がる量）
    stackSlant: 4.3, // 積み上げ時の傾斜（上の行ほど右にずらす量）
  },

  // ピクセル間の隙間
  dotGapX: 3.65, // ドット間の横の隙間
  dotGapY: 4.45, // ドット間の縦の隙間
  cellGap: 25, // セル（文字）間の隙間

  // 見た目の設定
  color: "#b0f5ffff", // ドットの色
  offColor: "#231e2dff", // 消灯時のドットの色
  glowBlur: 0, // 発光エフェクトの強さ

  // デバッグ用: 全点灯させるかどうか
  debugAllOn: false,
}