import type { MetadataRoute } from 'next'
import { BASE_PATH } from '@/lib/base-path'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KENWOOD D919 Spectrum Analyzer',
    short_name: 'D919',
    description: 'Real-time spectrum analyzer inspired by the KENWOOD D919',
    start_url: `${BASE_PATH}/`,
    scope: `${BASE_PATH}/`,
    display: 'fullscreen',
    orientation: 'landscape',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      { src: `${BASE_PATH}/apple-icon.png`, sizes: '180x180', type: 'image/png' },
      { src: `${BASE_PATH}/icon.svg`, type: 'image/svg+xml', sizes: 'any' },
    ],
  }
}
