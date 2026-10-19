'use client'

import type { ReactNode } from 'react'
import {
  AudioLines,
  ExternalLink,
  Eye,
  EyeOff,
  FolderOpen,
  ListMusic,
  LogIn,
  LogOut,
  Monitor,
  Pause,
  Play,
  Power,
  Armchair,
  SkipBack,
  SkipForward,
  Sparkles,
} from 'lucide-react'
import { SOURCE_LABELS, type AudioSourceState, type useAudioSource } from './audio/use-audio-source'

interface CtlButtonProps {
  onClick?: () => void
  disabled?: boolean
  active?: boolean
  label?: string
  title?: string
  children?: ReactNode
  className?: string
}

const CtlButton = ({ onClick, disabled, active, label, title, children, className = '' }: CtlButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title ?? label}
    aria-label={title ?? label}
    className={`ctl-btn inline-flex h-9 min-w-9 items-center justify-center gap-1.5 rounded-md border px-2.5 font-mono text-[11px] tracking-wider text-white transition-colors select-none disabled:opacity-30 sm:px-3 ${
      active ? 'border-cyan-500 bg-cyan-500/15 text-cyan-300' : 'border-white/20 bg-white/10 active:bg-white/25 hover:bg-white/20'
    } ${className}`}
  >
    {children}
    {label && <span>{label}</span>}
  </button>
)

interface ControlsProps {
  player: AudioSourceState
  audio: ReturnType<typeof useAudioSource>
  isPoweredOn: boolean
  controlsEnabled: boolean
  demo: boolean
  showGuide: boolean
  trackLabel: string
  timeLabel: string
  onPower: () => void
  onSource: () => void
  onSa: () => void
  onDisp: () => void
  onPosi: () => void
  onDemo: () => void
  onGuide: () => void
}

export function Controls({
  player,
  audio,
  isPoweredOn,
  controlsEnabled,
  demo,
  showGuide,
  trackLabel,
  timeLabel,
  onPower,
  onSource,
  onSa,
  onDisp,
  onPosi,
  onDemo,
  onGuide,
}: ControlsProps) {
  const canTransport = controlsEnabled && player.source !== 'MIC' && (player.hasMedia || player.source !== 'FILE')
  const canSeek = controlsEnabled && player.hasMedia && player.source !== 'MIC' && player.duration > 0
  const seekRatio = player.duration ? (player.currentTime / player.duration) * 100 : 0

  return (
    <div className="w-full space-y-2">
      <div className="relative w-full">
        <input
          type="range"
          min="0"
          max={player.duration || 0}
          step="0.1"
          value={Math.min(player.currentTime, player.duration || 0)}
          onChange={(e) => audio.seek(parseFloat(e.target.value))}
          disabled={!canSeek}
          className="w-full h-0.5 bg-white/10 rounded-full appearance-none cursor-pointer disabled:opacity-20 seek-slider"
          style={{ '--seek-ratio': `${seekRatio}%` } as React.CSSProperties}
        />
      </div>

      <div className="flex items-center justify-between gap-3 font-mono text-xs">
        <div className={`min-w-0 truncate tracking-wider ${controlsEnabled ? 'text-white/70' : 'text-transparent'}`}>
          <span className="mr-2 text-cyan-400/80">{SOURCE_LABELS[player.source]}</span>
          {trackLabel}
          {(player.source === 'APPLE_MUSIC' || player.source === 'SPOTIFY') && player.micActive && (
            <span className="ml-2 text-red-400/80">● MIC</span>
          )}
        </div>
        <div className={`shrink-0 tracking-wider ${isPoweredOn ? 'text-white/50' : 'text-white/10'}`}>{timeLabel}</div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <CtlButton
          onClick={onPower}
          label={isPoweredOn ? 'OFF' : 'ON'}
          className={isPoweredOn ? '!border-cyan-500 !text-cyan-400' : '!border-red-500 !text-red-500'}
        >
          <Power className="h-4 w-4" />
        </CtlButton>

        <CtlButton onClick={onSource} disabled={!controlsEnabled} label={SOURCE_LABELS[player.source]} title="SRC (音源切り替え)">
          <AudioLines className="h-4 w-4" />
        </CtlButton>

        {player.source === 'FILE' && (
          <>
            <input
              type="file"
              accept="audio/*"
              multiple
              onChange={(e) => {
                if (e.target.files) audio.loadFiles(e.target.files)
                e.target.value = ''
              }}
              className="hidden"
              id="audio-upload"
              disabled={!controlsEnabled}
            />
            <label
              htmlFor="audio-upload"
              aria-disabled={!controlsEnabled}
              className={`ctl-btn inline-flex h-9 items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-2.5 font-mono text-[11px] tracking-wider text-white sm:px-3 ${
                controlsEnabled ? 'cursor-pointer hover:bg-white/20 active:bg-white/25' : 'pointer-events-none opacity-30'
              }`}
            >
              <FolderOpen className="h-4 w-4" />
              <span>OPEN</span>
            </label>
          </>
        )}

        {player.source === 'APPLE_MUSIC' && (
          <CtlButton onClick={() => void audio.pickAppleMusic()} disabled={!controlsEnabled} label="SELECT" title="ライブラリから曲を選ぶ">
            <ListMusic className="h-4 w-4" />
          </CtlButton>
        )}

        {player.source === 'SPOTIFY' && (
          <>
            {player.spotifyConnected ? (
              <CtlButton onClick={audio.disconnectSpotify} disabled={!controlsEnabled} label="LOGOUT">
                <LogOut className="h-4 w-4" />
              </CtlButton>
            ) : (
              <CtlButton onClick={() => void audio.connectSpotify()} disabled={!controlsEnabled} label="LOGIN">
                <LogIn className="h-4 w-4" />
              </CtlButton>
            )}
            <CtlButton onClick={audio.openSpotify} disabled={!controlsEnabled} title="Spotify を開く">
              <ExternalLink className="h-4 w-4" />
            </CtlButton>
          </>
        )}

        <div className="flex items-center gap-2">
          <CtlButton onClick={audio.previous} disabled={!canTransport} title="前の曲 / 曲の頭へ">
            <SkipBack className="h-4 w-4" />
          </CtlButton>
          <CtlButton
            onClick={player.isPlaying ? audio.pause : audio.play}
            disabled={!canTransport}
            label={player.isPlaying ? 'PAUSE' : 'PLAY'}
          >
            {player.isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </CtlButton>
          <CtlButton onClick={audio.next} disabled={!canTransport} title="次の曲">
            <SkipForward className="h-4 w-4" />
          </CtlButton>
        </div>

        <CtlButton onClick={onSa} disabled={!controlsEnabled} label="S.A" title="スペアナ表示パターンの切り替え" />
        <CtlButton onClick={onDisp} disabled={!controlsEnabled} label="DISP">
          <Monitor className="h-4 w-4" />
        </CtlButton>
        <CtlButton onClick={onPosi} disabled={!controlsEnabled} label="POSI" title="リスニングポジション">
          <Armchair className="h-4 w-4" />
        </CtlButton>
        <CtlButton onClick={onDemo} disabled={!controlsEnabled} active={demo} label="DEMO">
          <Sparkles className="h-4 w-4" />
        </CtlButton>
        <CtlButton onClick={onGuide} disabled={!controlsEnabled} title={showGuide ? 'GUIDE OFF' : 'GUIDE ON'}>
          {showGuide ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </CtlButton>
      </div>

      <div className="flex min-h-4 items-start justify-between gap-3">
        <div className="font-mono text-[11px] tracking-wide text-amber-300/80">{player.message}</div>
        <div className="shrink-0" style={{ color: 'white', fontSize: '10px' }}>DEPLOYED VERSION 0.3.0</div>
      </div>
    </div>
  )
}
