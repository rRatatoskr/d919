"use client";

import React from "react";
import { RingLevelizer, RingConfig } from "./RingLevelizer";
import { VFD_COLORS } from '@/lib/constants';
import { RING_SVG_DATA } from "@/lib/ring-data";

const BASE_CONFIG: RingConfig = {
  rotationSpeed: 0.2,
  numSets: 2,
  setSize: 4,
  litColor: VFD_COLORS.BLUE,
  dimColor: VFD_COLORS.OFF,
  direction: 1,
};

interface LevelizerLayerProps {
  width: number;
  height: number;
  active?: boolean;
  activeLevels?: boolean[];
  isBooting?: boolean; // ★追加: 起動モードフラグ
}

export const LevelizerLayer: React.FC<LevelizerLayerProps> = ({ 
  width, 
  height, 
  active = false,
  activeLevels = [false, true, true, true, true, true, true, true],
  isBooting = false // ★デフォルトfalse
}) => {
  
  const renderRing = (level: number, style: React.CSSProperties) => {
    const isRingActive = active && activeLevels[level];

    const config: RingConfig = isRingActive ? BASE_CONFIG : {
      ...BASE_CONFIG,
      rotationSpeed: 0,
      litColor: BASE_CONFIG.dimColor,
    };

    return (
      <div className="absolute" style={style}>
        <RingLevelizer
          svgContent={RING_SVG_DATA[`ring-level${level}.svg`]}
          config={{ ...config, rotationSpeed: isRingActive ? 0.15 : 0 }}
          // ★追加: アクティブかつ起動中なら全点灯させる
          fullLit={isRingActive && isBooting}
        />
      </div>
    );
  };

  return (
    <div className="absolute top-0 left-0 pointer-events-none z-20 w-full h-full">
      {/* 位置設定はそのまま維持 */}
      {renderRing(7, { top: '42%', right: '85.21%', width: '9.57%', height: '25.57%' })}
      {renderRing(6, { top: '38.1%', right: '86.1%', width: '9.57%', height: '25.5%' })}
      {renderRing(5, { top: '33.5%', right: '86.95%', width: '9.57%', height: '25.7%' })}
      {renderRing(4, { top: '28.5%', right: '88%', width: '9.57%', height: '25.5%' })}
      {renderRing(3, { top: '22.7%', right: '89.2%', width: '9.57%', height: '25.5%' })}
      {renderRing(2, { top: '15.2%', right: '90.7%', width: '9.57%', height: '25.5%' })}
      {renderRing(1, { top: '15.2%', right: '90.7%', width: '9.57%', height: '25.6%' })}
    </div>
  );
};