import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'io.github.rratatoskr.d919',
  appName: 'D919',
  // `npm run build:app` (BUILD_TARGET=app next build) の出力
  webDir: 'out',
  backgroundColor: '#000000',
  // スペクトラムのイベントを毎秒数十回送るので、Xcode コンソールへのブリッジログは止める
  // (JS のログは Safari の Web インスペクタで確認できる)
  loggingBehavior: 'none',
  ios: {
    contentInset: 'never',
    backgroundColor: '#000000',
  },
  plugins: {
    SystemBars: {
      hidden: true,
      style: 'DARK',
    },
  },
}

export default config
