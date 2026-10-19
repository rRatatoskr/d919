// next.config.mjs で埋め込まれる。GitHub Pages では '/d919'、iOS アプリと開発時は ''。
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

// `npm run build:app` (Capacitor 向け) でビルドされたか
export const IS_APP_BUILD = process.env.NEXT_PUBLIC_BUILD_TARGET === 'app'
