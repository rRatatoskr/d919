import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { BASE_PATH, IS_APP_BUILD } from '@/lib/base-path'
import './globals.css'

// 1. 必要なフォント（GeistとGeist_Mono）だけをシンプルにインポート
import { Geist, Geist_Mono } from 'next/font/google'

// 2. フォントの設定
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'KENWOOD D919 Spectrum Analyzer',
  description: 'Real-time spectrum analyzer inspired by the KENWOOD D919',
  generator: 'v0.app',
  // GitHub Pages では /d919 配下になるので BASE_PATH を付ける
  icons: {
    icon: [
      {
        url: `${BASE_PATH}/icon-light-32x32.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: `${BASE_PATH}/icon-dark-32x32.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: `${BASE_PATH}/icon.svg`,
        type: 'image/svg+xml',
      },
    ],
    apple: `${BASE_PATH}/apple-icon.png`,
  },
  // iPhone の「ホーム画面に追加」で全画面のアプリとして開けるようにする
  manifest: `${BASE_PATH}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    title: 'D919',
    statusBarStyle: 'black-translucent',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black`}>
        {children}
        {/* アプリ版はオフラインでも動くように外部スクリプトを読まない */}
        {!IS_APP_BUILD && <Analytics />}
      </body>
    </html>
  )
}