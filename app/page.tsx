'use client'

import { SpectrumAnalyzer } from '@/components/spectrum-analyzer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <SpectrumAnalyzer />
    </main>
  )
}
