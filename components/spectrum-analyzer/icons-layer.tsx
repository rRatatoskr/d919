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
  
  // 10秒遅延用のステート
  const [isDelayedActive, setIsDelayedActive] = React.useState(false);

  // ファイル読み込みを監視して10秒タイマーを作動
  React.useEffect(() => {
    if (hasFile) {
      setIsDelayedActive(false); // まず消灯
      const timer = setTimeout(() => {
        setIsDelayedActive(true); // 10秒後に点灯
      }, 10000);
      return () => clearTimeout(timer);
    } else {
      setIsDelayedActive(false);
    }
  }, [hasFile]);

  React.useEffect(() => {
    if (!active || !isPlaying) {
      setNoteStep(0);
      return;
    }
    const interval = setInterval(() => {
      // 1 -> 2 -> 3 のループ
      setNoteStep((prev) => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying, active]);

  return (
    <div className="absolute top-0 left-0 pointer-events-none z-20 w-full h-full">
      {CUSTOM_ICONS.map((icon) => {
        if (!icon.activeModes.includes(displayMode)) return null;

        const conditionMet = icon.condition ? icon.condition(isPlaying, hasFile) : true;
        // ベースの点灯状態（起動中は強制ON）
        let isActive = active && (conditionMet || isBooting);

        // 起動アニメーションのステップ制御で隠されている場合はOFF
        if (hiddenIconIds.includes(icon.id)) {
          isActive = false;
        }

        // MP3とROMアイコンの遅延処理
        if (['mp3-logo', 'rom'].includes(icon.id)) {
          if (!isBooting) {
             isActive = isActive && isDelayedActive;
          }
        }

        // 音符アイコンのアニメーション処理
        if (icon.id.startsWith('note-') && icon.id !== 'note-ring') {
            if (!isBooting) {
              const noteNum = parseInt(icon.id.split('-')[1]);
              if (!isNaN(noteNum)) {
                // ★修正: >= ではなく === にすることで、現在ステップの音符のみを点灯させる
                isActive = isActive && isPlaying && noteStep === noteNum;
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