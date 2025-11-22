"use client";

import React, { useEffect, useState, useRef } from "react";
import { parseAndSortPaths } from "@/lib/svg-utils";

export interface RingConfig {
  rotationSpeed: number;
  numSets: number;
  setSize: number;
  litColor: string;
  dimColor: string;
  direction: 1 | -1;
}

interface RingLevelizerProps {
  svgContent: string; 
  config: RingConfig;
  width?: string | number;
  height?: string | number;
  debug?: boolean;
}

export const RingLevelizer: React.FC<RingLevelizerProps> = ({
  svgContent,
  config,
  width = "100%",
  height = "100%",
  debug = false,
}) => {
  const [paths, setPaths] = useState<string[]>([]);
  const [offset, setOffset] = useState(0);
  
  const requestRef = useRef<number>();
  const prevTimeRef = useRef<number>();

  const VIEW_BOX = "0 0 134 117";
  const CENTER = { x: 67, y: 58.5 };

  useEffect(() => {
    if (!svgContent) return;
    const sorted = parseAndSortPaths(svgContent, CENTER);
    setPaths(sorted);
  }, [svgContent]);

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
    // パスがあれば即アニメーション開始
    if (paths.length > 0) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [paths, config.rotationSpeed, config.direction]);

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

  // パスがまだない場合（一瞬）は何も表示しない
  if (paths.length === 0) return null;

  return (
    <div style={{ width, height, position: "relative" }}>
      <svg
        width="100%"
        height="100%"
        viewBox={VIEW_BOX}
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
      >
        {debug && (
          <rect x="0" y="0" width="134" height="117" fill="none" stroke="red" strokeWidth="1" />
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
    </div>
  );
};