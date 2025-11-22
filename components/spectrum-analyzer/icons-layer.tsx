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
  active?: boolean;
  hiddenIconIds?: string[];
  isBooting?: boolean;
}

export const IconsLayer: React.FC<IconsLayerProps> = ({
  displayMode,
  isPlaying,
  audioFile,
  active = false,
  hiddenIconIds = [],
  isBooting = false,
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

        let isActive = active && (icon.condition ? icon.condition(isPlaying, hasFile) : true);

        if (hiddenIconIds.includes(icon.id)) {
          isActive = false;
        }

        if (icon.id.startsWith('note-') && icon.id !== 'note-ring') {
            if (isBooting) {
              if (!hiddenIconIds.includes(icon.id)) {
                 isActive = true; 
              }
            } else {
              const noteNum = parseInt(icon.id.split('-')[1]);
              if (!isNaN(noteNum)) {
                isActive = isActive && isPlaying && noteStep >= noteNum;
              }
            }
        }

        const currentColor = isActive ? (icon.color || COLORS.iconActive) : COLORS.iconInactive;
        
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
              opacity: 1, 
              
              transition: 'all 0.2s ease',
            }} 
          />
        );
      })}
    </div>
  );
};