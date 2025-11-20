/**
 * VFD (蛍光表示管) 風カラーパレット定義
 */
export const VFD_COLORS = {
  // 1. VFD消灯 (紫) - 背景色および消灯時の色として使用
  OFF: '#231e2dff',
  
  // 2. 蛍光緑
  GREEN: '#00ff15ff',
  
  // 3. 蛍光青
  BLUE: '#1876eaff',
  
  // 4. 濃い蛍光シアン (メインのアクティブ色)
  CYAN: '#1fd8f0ff',
  
  // 5. 淡い蛍光シアン (サイドバンドなどの高輝度/薄い色)
  CYAN_LIGHT: '#b0f5ffff',
  
  // 6. 蛍光赤
  RED: '#ff0000ff',
} as const;