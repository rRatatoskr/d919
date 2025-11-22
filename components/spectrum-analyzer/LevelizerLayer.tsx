"use client";

import React from "react";
import { RingLevelizer, RingConfig } from "./RingLevelizer";
import { VFD_COLORS } from '@/lib/constants';
// データを直接読み込む（これで表示遅延ゼロ）
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
  active?: boolean; // ON/OFF制御用
}

export const LevelizerLayer: React.FC<LevelizerLayerProps> = ({ width, height, active = false }) => {
  
  // activeがfalseなら回転を止め、色を暗くする
  const currentConfig: RingConfig = active ? BASE_CONFIG : {
    ...BASE_CONFIG,
    rotationSpeed: 0,
    litColor: BASE_CONFIG.dimColor,
  };

  return (
    <div className="absolute top-0 left-0 pointer-events-none z-20 w-full h-full">
      
      {/* Ring 7 - あなたの調整した位置: top 42%, right 85.21% */}
      <div 
        className="absolute"
        style={{ 
          top: '42%', 
          right: '85.21%', 
          width: '9.57%', 
          height: '25.57%' 
        }}
      >
        <RingLevelizer
          svgContent={RING_SVG_DATA['ring-level7.svg']}
          config={{ ...currentConfig, rotationSpeed: active ? 0.15 : 0 }}
        />
      </div>

      {/* Ring 6 - top 38.1%, right 86.1% */}
      <div 
        className="absolute"
        style={{ 
          top: '38.1%', 
          right: '86.1%', 
          width: '9.57%', 
          height: '25.5%' 
        }}
      >
        <RingLevelizer
          svgContent={RING_SVG_DATA['ring-level6.svg']}
          config={{ ...currentConfig, rotationSpeed: active ? 0.15 : 0 }}
        />
      </div>

      {/* Ring 5 - top 33.5%, right 86.95% */}
      <div 
        className="absolute"
        style={{ 
          top: '33.5%', 
          right: '86.95%', 
          width: '9.57%', 
          height: '25.7%' 
        }}
      >
        <RingLevelizer
          svgContent={RING_SVG_DATA['ring-level5.svg']}
          config={{ ...currentConfig, rotationSpeed: active ? 0.15 : 0 }}
        />
      </div>

      {/* Ring 4 - top 28.5%, right 88% */}
      <div 
        className="absolute"
        style={{ 
          top: '28.5%', 
          right: '88%', 
          width: '9.57%', 
          height: '25.5%' 
        }}
      >
        <RingLevelizer
          svgContent={RING_SVG_DATA['ring-level4.svg']}
          config={{ ...currentConfig, rotationSpeed: active ? 0.15 : 0 }}
        />
      </div>

      {/* Ring 3 - top 22.7%, right 89.2% */}
      <div 
        className="absolute"
        style={{ 
          top: '22.7%', 
          right: '89.2%', 
          width: '9.57%', 
          height: '25.5%' 
        }}
      >
        <RingLevelizer
          svgContent={RING_SVG_DATA['ring-level3.svg']}
          config={{ ...currentConfig, rotationSpeed: active ? 0.15 : 0 }}
        />
      </div>

      {/* Ring 2 - top 15.2%, right 90.7% */}
      <div 
        className="absolute"
        style={{ 
          top: '15.2%', 
          right: '90.7%', 
          width: '9.57%', 
          height: '25.5%' 
        }}
      >
        <RingLevelizer
          svgContent={RING_SVG_DATA['ring-level2.svg']}
          config={{ ...currentConfig, rotationSpeed: active ? 0.15 : 0 }}
        />
      </div>

      {/* Ring 1 - top 15.2%, right 90.7% */}
      <div 
        className="absolute"
        style={{ 
          top: '15.2%', 
          right: '90.7%', 
          width: '9.57%', 
          height: '25.6%' 
        }}
      >
        <RingLevelizer
          svgContent={RING_SVG_DATA['ring-level1.svg']}
          config={{ ...currentConfig, rotationSpeed: active ? 0.15 : 0 }}
        />
      </div>
      
    </div>
  );
};