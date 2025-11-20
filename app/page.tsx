"use client";

import { SpectrumAnalyzer } from "@/components/spectrum-analyzer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black p-4 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <SpectrumAnalyzer />
      </div>
    </main>
  );
}