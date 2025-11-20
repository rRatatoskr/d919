"use client";

import React, { useEffect, useState, useRef } from "react";
import { parseAndSortPaths } from "../../lib/svg-utils";

export interface RingConfig {
  rotationSpeed: number;
  numSets: number;
  setSize: number;
  litColor: string;
  dimColor: string;
  direction: 1 | -1;
}

interface RingLevelizerProps {
  src: string;
  config: RingConfig;
  width?: string | number;
  height?: string | number;
  debug?: boolean;
}

export const RingLevelizer: React.FC<RingLevelizerProps> = ({
  src,
  config,
  width = "100%",
  height = "100%",
  debug = false,
}) => {
  const [paths, setPaths] = useState<string[]>([]);
  const [offset, setOffset] = useState(0);
  const [status, setStatus] = useState<"loading" | "success" | "error" | "empty">("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const requestRef = useRef<number>();
  const prevTimeRef = useRef<number>();

  // 位置調整用（134x117の中心）
  const VIEW_BOX = "0 0 134 117";
  const CENTER = { x: 67, y: 58.5 };

  // 1. SVG読み込み
  useEffect(() => {
    const loadSvg = async () => {
      try {
        setStatus("loading");
        const res = await fetch(src);
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        const text = await res.text();

        const sorted = parseAndSortPaths(text, CENTER);

        if (sorted.length === 0) {
          setStatus("empty");
        } else {
          setPaths(sorted);
          setStatus("success");
        }
      } catch (e: any) {
        console.error(e);
        setStatus("error");
        setErrorMessage(e.message);
      }
    };
    loadSvg();
  }, [src]);

  // 2. アニメーション
  const animate = (time: number) => {
    if (prevTimeRef.current !== undefined) {
      setOffset((prev) => {
        const next = prev + config.direction * config.rotationSpeed;
        if (paths.length > 0) {
          if (next >= paths.length) return next - paths.length;
          if (next < 0) return next + paths.length;
        }
        return next;
      });
    }
    prevTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (status === "success") {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [status, config.rotationSpeed, config.direction, paths.length]);

  // 3. 点灯判定
  const isLit = (index: number) => {
    if (paths.length === 0) return false;
    const total = paths.length;
    const currentBase = Math.floor(offset) % total;
    const dist = Math.floor(total / config.numSets);

    for (let i = 0; i < config.numSets; i++) {
      const start = (currentBase + i * dist) % total;
      let rel = index - start;
      if (rel < 0) rel += total;
      if (rel < config.setSize) return true;
    }
    return false;
  };

  // 表示ロジック（エラー時の表示を追加）
  if (status === "error") {
    return (
      <div className="w-full h-full flex items-center justify-center bg-red-900/20 border border-red-500 text-red-500 text-[10px] p-2">
        Load Error: {errorMessage}
      </div>
    );
  }

  if (status === "empty") {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 border border-yellow-500 text-yellow-500 text-[10px] p-2">
        <p>SVG Loaded but 0 paths found.</p>
        <p>Check console for details.</p>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-500 text-[10px]">
        Loading SVG...
      </div>
    );
  }

  return (
    <div style={{ width, height, position: "relative" }}>
      <svg
        width="100%"
        height="100%"
        viewBox={VIEW_BOX}
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
      >
        {/* デバッグモード: 赤枠と中心線を表示 */}
        {debug && (
          <g pointerEvents="none">
            <rect x="0" y="0" width="134" height="117" fill="none" stroke="red" strokeWidth="0.5" />
            <line x1={CENTER.x} y1="0" x2={CENTER.x} y2="117" stroke="#0f0" strokeWidth="0.5" />
            <line x1="0" y1={CENTER.y} x2="134" y2={CENTER.y} stroke="#0f0" strokeWidth="0.5" />
          </g>
        )}

        <g>
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill={isLit(i) ? config.litColor : config.dimColor}
              stroke="none"
              style={{ transition: "fill 0.05s linear" }}
            />
          ))}
        </g>
      </svg>
      
      {/* デバッグ情報: パス数 */}
      {debug && (
        <div className="absolute bottom-0 right-0 bg-black/80 text-white text-[9px] p-1">
          Cells: {paths.length}
        </div>
      )}
    </div>
  );
};