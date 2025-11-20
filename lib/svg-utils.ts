// lib/svg-utils.ts

export interface PathData {
  d: string;
  angle: number;
}

/**
 * SVG文字列をブラウザのDOMParserで解析し、パスを抽出してソートします。
 */
export const parseAndSortPaths = (
  svgContent: string,
  center: { x: number; y: number }
): string[] => {
  // サーバーサイド実行時のガード（DOMParserがないため）
  if (typeof window === 'undefined') return [];

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgContent, "image/svg+xml");

    // パースエラーのチェック
    const parseError = doc.querySelector("parsererror");
    if (parseError) {
      console.error("SVG Parse Error:", parseError.textContent);
      return [];
    }

    // 全ての <path> タグを取得
    const pathElements = Array.from(doc.querySelectorAll("path"));
    
    if (pathElements.length === 0) {
      console.warn("SVG loaded but no <path> tags found.");
      return [];
    }

    const paths: PathData[] = [];

    pathElements.forEach((path) => {
      const d = path.getAttribute("d");
      if (!d) return;

      // パスの最初の座標を取得して重心の代わりとする
      // M x y ... という形式の x, y を探す
      const numbers = d.match(/-?[\d.]+/g)?.map(Number) || [];
      
      if (numbers.length >= 2) {
        const x = numbers[0];
        const y = numbers[1];
        // 中心からの角度を計算
        const angle = Math.atan2(y - center.y, x - center.x);
        paths.push({ d, angle });
      }
    });

    // 時計回りにソート
    paths.sort((a, b) => a.angle - b.angle);
    console.log(`Parsed ${paths.length} paths successfully.`); // デバッグ用ログ

    return paths.map((p) => p.d);

  } catch (e) {
    console.error("Unexpected error in parseAndSortPaths:", e);
    return [];
  }
};