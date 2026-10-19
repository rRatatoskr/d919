// BUILD_TARGET=app のときは iOS アプリ (Capacitor) 用にルートパスでビルドする。
// それ以外の本番ビルドは GitHub Pages (https://rratatoskr.github.io/d919/) 用。
const isAppBuild = process.env.BUILD_TARGET === 'app'
const basePath = !isAppBuild && process.env.NODE_ENV === 'production' ? '/d919' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_BUILD_TARGET: isAppBuild ? 'app' : 'web',
  },
};

export default nextConfig;
