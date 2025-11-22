"use client";

import React from "react";
import { DisplayMode } from "./types";
import { COLORS } from "./config";
import { CUSTOM_ICONS } from "./icon-definitions";

interface IconsLayerProps {
  displayMode: DisplayMode;
  isPlaying: boolean;
  audioFile: string | null;
  width: number;
  height: number;
  active?: boolean; // ON/OFF制御
}

export const IconsLayer: React.FC<IconsLayerProps> = ({
  displayMode,
  isPlaying,
  audioFile,
  active = false, // デフォルトOFF
}) => {
  const hasFile = !!audioFile;
  const [noteStep, setNoteStep] = React.useState(0);

  React.useEffect(() => {
    if (!active || !isPlaying) {
      setNoteStep(0);
      return;
    }
    const interval = setInterval(() => {
      setNoteStep((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying, active]);

  return (
    <div className="absolute top-0 left-0 pointer-events-none z-20 w-full h-full">
      {CUSTOM_ICONS.map((icon) => {
        if (!icon.activeModes.includes(displayMode)) return null;

        // activeがfalseなら強制的にOFF扱い
        let isActive = active && (icon.condition ? icon.condition(isPlaying, hasFile) : true);

        if (icon.id.startsWith('note-') && icon.id !== 'note-ring') {
            const noteNum = parseInt(icon.id.split('-')[1]);
            if (!isNaN(noteNum)) {
              isActive = isActive && isPlaying && noteStep >= noteNum;
            }
        }

        // OFFなら暗い色、ONなら指定色
        const currentColor = isActive ? (icon.color || COLORS.iconActive) : COLORS.iconInactive;
        
        // 1400x400 に対する%位置計算
        const leftPct = (icon.x / 1400) * 100;
        const topPct = (icon.y / 400) * 100;
        const widthPct = (icon.width / 1400) * 100;
        const heightPct = (icon.height / 400) * 100;

        return (
          <div 
            key={icon.id} 
            style={{
              position: 'absolute',
              left: `${leftPct}%`,
              top: `${topPct}%`,
              width: `${widthPct}%`,
              height: `${heightPct}%`,
              maskImage: `url(${icon.maskSrc})`,
              WebkitMaskImage: `url(${icon.maskSrc})`,
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              backgroundColor: currentColor,
              opacity: isActive ? 1 : 1, // 消灯時は薄くする
              transition: 'all 0s ease',
            }} 
          />
        );
      })}
    </div>
  );
};