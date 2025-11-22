"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";

// サーバーサイドでも動くシンプルな解析関数
// DOMParserを使わず、文字列から d="..." を抜き出します
const extractPathsFromSvg = (svgContent: string, center: { x: number, y: number }) => {
  const paths: { d: string; angle: number }[] = [];
  // 正規表現で d属性の中身を探す
  const regex = /d="([^"]+)"/g;
  let match;

  while ((match = regex.exec(svgContent)) !== null) {
    const d = match[1];
    // 重心を簡易計算 (M x y ... の最初の座標を取得)
    const numbers = d.match(/-?[\d.]+/g)?.map(Number) || [];
    if (numbers.length >= 2) {
      const x = numbers[0];
      const y = numbers[1];
      const angle = Math.atan2(y - center.y, x - center.x);
      paths.push({ d, angle });
    }
  }
  // 角度でソート
  paths.sort((a, b) => a.angle - b.angle);
  return paths.map(p => p.d);
};

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
  fullLit?: boolean;
}

export const RingLevelizer: React.FC<RingLevelizerProps> = ({
  svgContent,
  config,
  width = "100%",
  height = "100%",
  debug = false,
  fullLit = false,
}) => {
  const [offset, setOffset] = useState(0);

  // 固定サイズ (位置ズレ防止)
  const VIEW_BOX = "0 0 134 117"; 
  const CENTER = { x: 67, y: 58.5 };

  // ★修正: useMemoを使ってレンダリング中に同期的に解析
  // これならサーバーでも実行され、初期HTMLにパスが含まれます
  const paths = useMemo(() => {
    if (!svgContent) return [];
    return extractPathsFromSvg(svgContent, CENTER);
  }, [svgContent]);

  const requestRef = useRef<number>();
  const prevTimeRef = useRef<number>();

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
    if (paths.length > 0) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [paths, config.rotationSpeed, config.direction]);

  const isLit = (index: number) => {
    if (fullLit) return true;
    if (paths.length === 0) return false;

    const total = paths.length;
    const currentBase = Math.floor(offset) % total;
    // const dist = Math.floor(total / config.numSets); // 未使用なら削除可

    // セット間の距離
    const distanceBetweenSets = Math.floor(total / config.numSets);

    for (let i = 0; i < config.numSets; i++) {
      const start = (currentBase + i * distanceBetweenSets) % total;
      
      // 環状の距離計算
      let rel = index - start;
      if (rel < 0) rel += total;
      
      if (rel < config.setSize) return true;
    }
    return false;
  };

  // データがない場合は空を返す
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
          <rect width="100%" height="100%" fill="none" stroke="red" strokeWidth="1" />
        )}
        <g>
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              // 初期状態(Hydration前)でも色がつくようにCSS変数は使わず直接指定
              fill={isLit(i) ? config.litColor : config.dimColor}
              stroke="none"
              // アニメーション時のみtransitionを有効にする
              style={{ transition: "fill 0 linear" }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};