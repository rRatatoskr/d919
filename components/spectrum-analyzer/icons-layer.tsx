"use client";

import React from "react";
import { DisplayMode, ListeningPosition } from "./types";
import { COLORS } from "./config";
import { CUSTOM_ICONS } from "./icon-definitions";

interface IconsLayerProps {
  displayMode: DisplayMode;
  isPlaying: boolean;
  // 曲 (ファイル / 再生中アイテム) があるか
  hasMedia: boolean;
  // MP3 ロゴはファイル再生のときだけ
  isFileSource?: boolean;
  width: number;
  height: number;
  active?: boolean;
  hiddenIconIds?: string[];
  isBooting?: boolean;
  posi?: ListeningPosition;
  // 曲が変わるたびに増える (フォルダアイコンの読み込み点滅)
  trackId?: number;
}

const SEATS_BY_POSITION: Record<ListeningPosition, string[]> = {
  ALL: ['seat-fl', 'seat-fr', 'seat-rl', 'seat-rr'],
  FRONT_L: ['seat-fl'],
  FRONT_R: ['seat-fr'],
  FRONT: ['seat-fl', 'seat-fr'],
};

// 中央の赤い点を選んだ席の方へずらす (1400x400 座標)
const CENTER_OFFSET: Record<ListeningPosition, { x: number; y: number }> = {
  ALL: { x: 0, y: 0 },
  FRONT_L: { x: -5, y: -6 },
  FRONT_R: { x: 5, y: -8 },
  FRONT: { x: 0, y: -7 },
};

const FOLDER_BLINK_MS = 1200;
const FOLDER_BLINK_INTERVAL = 150;

export const IconsLayer: React.FC<IconsLayerProps> = ({
  displayMode,
  isPlaying,
  hasMedia,
  isFileSource = true,
  active = false,
  hiddenIconIds = [],
  isBooting = false,
  posi = 'ALL',
  trackId = 0,
}) => {
  const hasFile = hasMedia;
  const [noteStep, setNoteStep] = React.useState(0);

  // 10秒遅延用のステート
  const [isDelayedActive, setIsDelayedActive] = React.useState(false);

  // 曲の読み込み中はフォルダの中身を点滅させる
  const [folderBlink, setFolderBlink] = React.useState<boolean | null>(null);

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
    if (!active || trackId === 0) return;
    let on = false;
    setFolderBlink(on);
    const interval = setInterval(() => {
      on = !on;
      setFolderBlink(on);
    }, FOLDER_BLINK_INTERVAL);
    const timer = setTimeout(() => {
      clearInterval(interval);
      setFolderBlink(null);
    }, FOLDER_BLINK_MS);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      setFolderBlink(null);
    };
  }, [trackId, active]);

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

        if (icon.id === 'mp3-logo' && !isBooting) {
          isActive = isActive && isFileSource;
        }

        // POSI: 選んだ席だけ点灯
        if (icon.id.startsWith('seat-') && !isBooting) {
          isActive = isActive && SEATS_BY_POSITION[posi].includes(icon.id);
        }

        if (icon.id === 'folder-in' && !isBooting && folderBlink !== null) {
          isActive = isActive && folderBlink;
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

        const offset = icon.id === 'balance-center' && !isBooting ? CENTER_OFFSET[posi] : { x: 0, y: 0 };

        const leftPct = ((icon.x + offset.x) / 1400) * 100;
        const topPct = ((icon.y + offset.y) / 400) * 100;
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
              // 点滅させるアイコンは即時に切り替える
              transition: icon.id === 'folder-in' ? 'none' : 'all 0.2s ease',
            }}
          />
        );
      })}
    </div>
  );
};
