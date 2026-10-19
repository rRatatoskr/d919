"use client";

import { SpectrumAnalyzer } from "@/components/spectrum-analyzer";

export default function Home() {
  return (
    <main className="app-shell flex min-h-[100dvh] flex-col items-center justify-center bg-black">
      <div className="z-10 w-full max-w-5xl text-sm landscape:max-w-[min(64rem,calc((100dvh-160px)*3.5))]">
        <SpectrumAnalyzer />
      </div>
    </main>
  );
}
