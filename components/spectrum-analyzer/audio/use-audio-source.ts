'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { PluginListenerHandle } from '@capacitor/core'
import { D919Native, isNativeApp, type MusicState } from '@/lib/native/d919-native'
import * as spotify from '@/lib/spotify'
import { AnalyserInput, createAnalyser, startNativeMicInput, startWebMicInput, type SpectrumInput } from './inputs'

export type SourceKind = 'FILE' | 'APPLE_MUSIC' | 'SPOTIFY' | 'MIC'

export const SOURCE_LABELS: Record<SourceKind, string> = {
  FILE: 'FILE',
  APPLE_MUSIC: 'APPLE MUSIC',
  SPOTIFY: 'SPOTIFY',
  MIC: 'MIC',
}

/** マイクの音でスペアナを動かすソース (DRM のため音声を直接解析できない) */
const MIC_SOURCES: SourceKind[] = ['APPLE_MUSIC', 'SPOTIFY', 'MIC']

/** Apple Music の操作はネイティブ (MediaPlayer) が必要なのでアプリのみ */
export const getAvailableSources = (): SourceKind[] =>
  isNativeApp() ? ['FILE', 'APPLE_MUSIC', 'SPOTIFY', 'MIC'] : ['FILE', 'SPOTIFY', 'MIC']

export interface TrackInfo {
  title: string
  artist: string
  album: string
}

export interface AudioSourceState {
  source: SourceKind
  isPlaying: boolean
  /** 曲 (ファイル / 再生中アイテム) があるか */
  hasMedia: boolean
  track: TrackInfo | null
  /** 曲が変わるたびに増える */
  trackId: number
  currentTime: number
  duration: number
  micActive: boolean
  spotifyConnected: boolean
  message: string | null
}

const SOURCE_STORAGE_KEY = 'd919.source'
const SPOTIFY_POLL_MS = 3000
const APPLE_MUSIC_POLL_MS = 1000

const errorMessage = (error: unknown) => (error instanceof Error ? error.message : String(error))

const sameTrack = (a: TrackInfo | null, b: TrackInfo | null) =>
  a === b || (!!a && !!b && a.title === b.title && a.artist === b.artist && a.album === b.album)

interface FilePlayer {
  audio: HTMLAudioElement
  ctx: AudioContext | null
  input: SpectrumInput | null
  queue: File[]
  index: number
  url: string | null
}

/** iOS Safari 17+ の Audio Session API (アプリ内では使わない: ネイティブ側と衝突するため) */
const setWebAudioSession = (type: 'playback' | 'play-and-record') => {
  if (isNativeApp()) return
  const session = (navigator as Navigator & { audioSession?: { type: string } }).audioSession
  if (session) session.type = type
}

export function useAudioSource() {
  const [state, setState] = useState<AudioSourceState>({
    source: 'FILE',
    isPlaying: false,
    hasMedia: false,
    track: null,
    trackId: 0,
    currentTime: 0,
    duration: 0,
    micActive: false,
    spotifyConnected: false,
    message: null,
  })

  // コールバックから最新の状態を同期的に読むため、state と別に持つ (update でのみ書き換える)
  const stateRef = useRef(state)
  const poweredRef = useRef(false)
  const fileRef = useRef<FilePlayer | null>(null)
  const micRef = useRef<SpectrumInput | null>(null)
  const micStartingRef = useRef<Promise<void> | null>(null)
  const musicListenerRef = useRef<PluginListenerHandle | null>(null)
  const musicAuthorizedRef = useRef(false)
  // 外部プレーヤー (Spotify) の再生位置を補間するため
  const clockRef = useRef({ progress: 0, at: 0, playing: false, duration: 0 })
  const spotifyOkRef = useRef(false)

  const update = useCallback((partial: Partial<AudioSourceState>) => {
    const prev = stateRef.current
    const next = { ...prev, ...partial }
    if ('track' in partial && !sameTrack(prev.track, partial.track ?? null)) next.trackId = prev.trackId + 1
    stateRef.current = next
    setState(next)
  }, [])

  // -------------------------------------------------------------------------
  // マイク
  // -------------------------------------------------------------------------

  const shouldUseMic = () => poweredRef.current && MIC_SOURCES.includes(stateRef.current.source)

  const stopMic = useCallback(async () => {
    const mic = micRef.current
    micRef.current = null
    if (stateRef.current.micActive) update({ micActive: false })
    if (mic) await mic.stop()
  }, [update])

  const startMic = useCallback(async () => {
    if (micRef.current) return
    if (micStartingRef.current) return micStartingRef.current
    micStartingRef.current = (async () => {
      try {
        if (!isNativeApp()) setWebAudioSession('play-and-record')
        const input = isNativeApp()
          ? await startNativeMicInput((message) => update({ message }))
          : await startWebMicInput()
        // 起動中に電源 OFF / ソース変更された
        if (!shouldUseMic()) {
          await input.stop()
          return
        }
        micRef.current = input
        update({ micActive: true })
      } catch (error) {
        update({ micActive: false, message: `マイクを開始できません: ${errorMessage(error)}` })
      } finally {
        micStartingRef.current = null
      }
    })()
    return micStartingRef.current
  }, [update])

  const syncMic = useCallback(() => (shouldUseMic() ? startMic() : stopMic()), [startMic, stopMic])

  // -------------------------------------------------------------------------
  // ファイル
  // -------------------------------------------------------------------------

  const getFilePlayer = useCallback((): FilePlayer => {
    if (fileRef.current) return fileRef.current
    const audio = new Audio()
    audio.preload = 'auto'
    const player: FilePlayer = { audio, ctx: null, input: null, queue: [], index: 0, url: null }
    const isActive = () => stateRef.current.source === 'FILE'
    audio.addEventListener('timeupdate', () => isActive() && update({ currentTime: audio.currentTime }))
    const onDuration = () => isActive() && update({ duration: isFinite(audio.duration) ? audio.duration : 0 })
    audio.addEventListener('loadedmetadata', onDuration)
    audio.addEventListener('durationchange', onDuration)
    audio.addEventListener('play', () => isActive() && update({ isPlaying: true }))
    audio.addEventListener('pause', () => isActive() && update({ isPlaying: false }))
    audio.addEventListener('ended', () => {
      if (player.queue.length > 1) {
        loadQueueItem((player.index + 1) % player.queue.length, true)
      }
    })
    fileRef.current = player
    return player
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update])

  const loadQueueItem = (index: number, autoplay: boolean) => {
    const player = getFilePlayer()
    const file = player.queue[index]
    if (!file) return
    player.index = index
    if (player.url) URL.revokeObjectURL(player.url)
    player.url = URL.createObjectURL(file)
    player.audio.loop = player.queue.length === 1
    player.audio.src = player.url
    player.audio.load()
    update({
      hasMedia: true,
      track: { title: file.name.replace(/\.[^/.]+$/, ''), artist: '', album: '' },
      currentTime: 0,
      duration: 0,
      isPlaying: false,
    })
    if (autoplay) void playFile()
  }

  const playFile = async () => {
    const player = getFilePlayer()
    if (!player.audio.src) return
    setWebAudioSession('playback')
    if (!player.ctx) {
      // 1 つの <audio> とグラフを使い回し、曲の切り替えは src の差し替えだけで行う
      const ctx = new AudioContext()
      const source = ctx.createMediaElementSource(player.audio)
      const analyser = createAnalyser(ctx)
      source.connect(analyser)
      analyser.connect(ctx.destination)
      player.ctx = ctx
      player.input = new AnalyserInput(analyser)
    }
    // iOS はユーザー操作の中で play() まで呼ぶ必要があるので resume は待たない
    if (player.ctx.state === 'suspended') void player.ctx.resume()
    try {
      await player.audio.play()
    } catch (error) {
      update({ message: `再生できません: ${errorMessage(error)}` })
    }
  }

  // -------------------------------------------------------------------------
  // Apple Music (ミュージックアプリ)
  // -------------------------------------------------------------------------

  const applyMusicState = useCallback(
    (s: MusicState) => {
      if (stateRef.current.source !== 'APPLE_MUSIC') return
      update({
        hasMedia: s.hasItem,
        track: s.hasItem ? { title: s.title, artist: s.artist, album: s.album } : null,
        isPlaying: s.playing,
        currentTime: s.currentTime,
        duration: s.duration,
      })
    },
    [update],
  )

  const activateAppleMusic = useCallback(async () => {
    if (!isNativeApp()) return
    try {
      const { status } = await D919Native.musicAuthorize()
      musicAuthorizedRef.current = status === 'authorized'
      if (!musicAuthorizedRef.current) {
        update({ message: 'ミュージックへのアクセスが許可されていません (設定 > D919 > メディアと Apple Music)' })
        return
      }
      if (!musicListenerRef.current) {
        musicListenerRef.current = await D919Native.addListener('musicState', applyMusicState)
      }
      applyMusicState(await D919Native.musicNowPlaying())
    } catch (error) {
      update({ message: `Apple Music に接続できません: ${errorMessage(error)}` })
    }
  }, [applyMusicState, update])

  // -------------------------------------------------------------------------
  // Spotify
  // -------------------------------------------------------------------------

  const refreshSpotify = useCallback(async () => {
    if (stateRef.current.source !== 'SPOTIFY' || !spotify.isConnected()) return
    try {
      const playback = await spotify.getPlayback()
      if (stateRef.current.source !== 'SPOTIFY') return
      spotifyOkRef.current = true
      clockRef.current = {
        progress: (playback?.progressMs ?? 0) / 1000,
        at: performance.now(),
        playing: !!playback?.isPlaying,
        duration: (playback?.durationMs ?? 0) / 1000,
      }
      update({
        spotifyConnected: true,
        hasMedia: !!playback?.title,
        track: playback?.title ? { title: playback.title, artist: playback.artist, album: playback.album } : null,
        isPlaying: !!playback?.isPlaying,
        currentTime: clockRef.current.progress,
        duration: clockRef.current.duration,
      })
    } catch (error) {
      spotifyOkRef.current = false
      if (error instanceof spotify.SpotifyError && error.code === 'NOT_CONNECTED') {
        update({ spotifyConnected: false, message: error.message })
      } else {
        update({ message: errorMessage(error) })
      }
    }
  }, [update])

  const spotifyCommand = useCallback(
    async (command: () => Promise<void>, optimistic?: Partial<AudioSourceState>) => {
      try {
        await command()
        if (optimistic) update(optimistic)
      } catch (error) {
        update({ message: errorMessage(error) })
      }
      // Spotify 側に反映されるまで少し待ってから取り直す
      setTimeout(() => void refreshSpotify(), 500)
    },
    [refreshSpotify, update],
  )

  // -------------------------------------------------------------------------
  // ソースの切り替え / 電源
  // -------------------------------------------------------------------------

  const activateSource = useCallback(
    async (source: SourceKind) => {
      if (source === 'APPLE_MUSIC') await activateAppleMusic()
      if (source === 'SPOTIFY') {
        if (!spotify.isConnected()) {
          update({ spotifyConnected: false, message: 'LOGIN ボタンで Spotify に接続してください' })
        } else {
          await refreshSpotify()
        }
      }
    },
    [activateAppleMusic, refreshSpotify, update],
  )

  const selectSource = useCallback(
    (source: SourceKind) => {
      const prev = stateRef.current.source
      if (prev === source) return
      if (prev === 'FILE') fileRef.current?.audio.pause()
      try {
        localStorage.setItem(SOURCE_STORAGE_KEY, source)
      } catch {
        // ignore
      }
      const file = fileRef.current
      const fileTrack = file?.queue[file.index]
      update({
        source,
        message: null,
        // ソースごとの状態は activate で取り直す
        isPlaying: false,
        hasMedia: source === 'FILE' ? !!fileTrack : false,
        track: source === 'FILE' && fileTrack ? { title: fileTrack.name.replace(/\.[^/.]+$/, ''), artist: '', album: '' } : null,
        currentTime: source === 'FILE' && file ? file.audio.currentTime : 0,
        duration: source === 'FILE' && file && isFinite(file.audio.duration) ? file.audio.duration : 0,
      })
      void syncMic()
      if (poweredRef.current) void activateSource(source)
    },
    [activateSource, syncMic, update],
  )

  const setPowered = useCallback(
    (on: boolean) => {
      poweredRef.current = on
      if (isNativeApp()) void D919Native.setKeepAwake({ enabled: on }).catch(() => {})
      if (on) {
        void syncMic()
        void activateSource(stateRef.current.source)
      } else {
        fileRef.current?.audio.pause()
        void stopMic()
      }
    },
    [activateSource, stopMic, syncMic],
  )

  // -------------------------------------------------------------------------
  // 再生操作
  // -------------------------------------------------------------------------

  const loadFiles = useCallback(
    (files: FileList | File[]) => {
      const list = Array.from(files).filter((f) => f.type.startsWith('audio/') || /\.(mp3|m4a|aac|wav|aiff?|flac|ogg|opus)$/i.test(f.name))
      if (list.length === 0) return
      if (stateRef.current.source !== 'FILE') selectSource('FILE')
      const player = getFilePlayer()
      player.audio.pause()
      player.queue = list
      loadQueueItem(0, false)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getFilePlayer, selectSource],
  )

  const play = useCallback(() => {
    switch (stateRef.current.source) {
      case 'FILE':
        void playFile()
        break
      case 'APPLE_MUSIC':
        void D919Native.musicPlay().then(applyMusicState).catch((e) => update({ message: errorMessage(e) }))
        break
      case 'SPOTIFY':
        void spotifyCommand(spotify.play, { isPlaying: true })
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applyMusicState, spotifyCommand, update])

  const pause = useCallback(() => {
    switch (stateRef.current.source) {
      case 'FILE':
        fileRef.current?.audio.pause()
        break
      case 'APPLE_MUSIC':
        void D919Native.musicPause().then(applyMusicState).catch((e) => update({ message: errorMessage(e) }))
        break
      case 'SPOTIFY':
        void spotifyCommand(spotify.pause, { isPlaying: false })
        break
    }
  }, [applyMusicState, spotifyCommand, update])

  const next = useCallback(() => {
    switch (stateRef.current.source) {
      case 'FILE': {
        const player = fileRef.current
        if (player && player.queue.length > 1) loadQueueItem((player.index + 1) % player.queue.length, stateRef.current.isPlaying)
        break
      }
      case 'APPLE_MUSIC':
        void D919Native.musicNext().then(applyMusicState).catch((e) => update({ message: errorMessage(e) }))
        break
      case 'SPOTIFY':
        void spotifyCommand(spotify.next)
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applyMusicState, spotifyCommand, update])

  const previous = useCallback(() => {
    switch (stateRef.current.source) {
      case 'FILE': {
        const player = fileRef.current
        if (!player) break
        if (player.audio.currentTime > 3 || player.queue.length <= 1) {
          player.audio.currentTime = 0
        } else {
          loadQueueItem((player.index - 1 + player.queue.length) % player.queue.length, stateRef.current.isPlaying)
        }
        break
      }
      case 'APPLE_MUSIC':
        void D919Native.musicPrevious().then(applyMusicState).catch((e) => update({ message: errorMessage(e) }))
        break
      case 'SPOTIFY':
        void spotifyCommand(spotify.previous)
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applyMusicState, spotifyCommand, update])

  const seek = useCallback(
    (time: number) => {
      switch (stateRef.current.source) {
        case 'FILE':
          if (fileRef.current) fileRef.current.audio.currentTime = time
          break
        case 'APPLE_MUSIC':
          void D919Native.musicSeek({ time }).then(applyMusicState).catch((e) => update({ message: errorMessage(e) }))
          break
        case 'SPOTIFY':
          clockRef.current = { ...clockRef.current, progress: time, at: performance.now() }
          void spotifyCommand(() => spotify.seek(time * 1000))
          break
      }
      update({ currentTime: time })
    },
    [applyMusicState, spotifyCommand, update],
  )

  const pickAppleMusic = useCallback(async () => {
    if (!isNativeApp()) return
    if (!musicAuthorizedRef.current) await activateAppleMusic()
    if (!musicAuthorizedRef.current) return
    try {
      const { count } = await D919Native.musicPick()
      if (count > 0) applyMusicState(await D919Native.musicNowPlaying())
    } catch (error) {
      update({ message: errorMessage(error) })
    }
  }, [activateAppleMusic, applyMusicState, update])

  const connectSpotify = useCallback(async () => {
    if (!spotify.getClientId()) {
      const input = window.prompt(
        `Spotify Developer Dashboard で作成したアプリの Client ID を入力してください\n(Redirect URI: ${spotify.getRedirectUri()})`,
      )
      if (!input) return
      spotify.setClientId(input)
    }
    try {
      await spotify.login()
      // アプリではここで完了する (ブラウザはページ遷移する)
      update({ spotifyConnected: true, message: 'Spotify に接続しました' })
      await refreshSpotify()
    } catch (error) {
      update({ message: errorMessage(error) })
    }
  }, [refreshSpotify, update])

  const disconnectSpotify = useCallback(() => {
    spotify.disconnect()
    spotifyOkRef.current = false
    update({ spotifyConnected: false, hasMedia: false, track: null, isPlaying: false, message: 'Spotify から切断しました' })
  }, [update])

  const clearMessage = useCallback(() => update({ message: null }), [update])

  /** スペアナの描画ループから毎フレーム呼ばれる */
  const readLevels = useCallback((): number[] | null => {
    const current = stateRef.current
    if (current.source === 'FILE') {
      const input = fileRef.current?.input
      return input && current.isPlaying ? input.readLevels() : null
    }
    const mic = micRef.current
    if (!mic) return null
    // 再生状態が分かるときは、止まっている間は周りの音を拾わない
    const knowsState =
      (current.source === 'APPLE_MUSIC' && musicAuthorizedRef.current && current.hasMedia) ||
      (current.source === 'SPOTIFY' && spotifyOkRef.current)
    if (knowsState && !current.isPlaying) return null
    return mic.readLevels()
  }, [])

  // -------------------------------------------------------------------------
  // Effects
  // -------------------------------------------------------------------------

  // 保存してあるソースの復元と、ブラウザでの Spotify ログインの続き
  useEffect(() => {
    let stored: SourceKind | null = null
    try {
      stored = localStorage.getItem(SOURCE_STORAGE_KEY) as SourceKind | null
    } catch {
      // ignore
    }
    const available = getAvailableSources()
    update({
      source: stored && available.includes(stored) ? stored : 'FILE',
      spotifyConnected: spotify.isConnected(),
    })
    spotify
      .completeRedirectLogin()
      .then((loggedIn) => {
        if (!loggedIn) return
        try {
          localStorage.setItem(SOURCE_STORAGE_KEY, 'SPOTIFY')
        } catch {
          // ignore
        }
        update({ source: 'SPOTIFY', spotifyConnected: true, message: 'Spotify に接続しました' })
      })
      .catch((error) => update({ message: errorMessage(error) }))

    return () => {
      void micRef.current?.stop()
      void musicListenerRef.current?.remove()
      const player = fileRef.current
      if (player) {
        player.audio.pause()
        if (player.url) URL.revokeObjectURL(player.url)
        void player.ctx?.close()
      }
    }
  }, [update])

  // 外部プレーヤーの状態のポーリング
  const { source, spotifyConnected } = state
  useEffect(() => {
    if (source === 'SPOTIFY' && spotifyConnected) {
      const id = setInterval(() => poweredRef.current && void refreshSpotify(), SPOTIFY_POLL_MS)
      // Spotify の再生位置は間を補間する
      const tick = setInterval(() => {
        const clock = clockRef.current
        if (!poweredRef.current || !clock.playing) return
        const t = clock.progress + (performance.now() - clock.at) / 1000
        update({ currentTime: clock.duration ? Math.min(t, clock.duration) : t })
      }, 500)
      return () => {
        clearInterval(id)
        clearInterval(tick)
      }
    }
    if (source === 'APPLE_MUSIC') {
      const id = setInterval(() => {
        if (!poweredRef.current || !musicAuthorizedRef.current) return
        D919Native.musicNowPlaying().then(applyMusicState).catch(() => {})
      }, APPLE_MUSIC_POLL_MS)
      return () => clearInterval(id)
    }
  }, [source, spotifyConnected, refreshSpotify, applyMusicState, update])

  return {
    state,
    readLevels,
    setPowered,
    selectSource,
    loadFiles,
    play,
    pause,
    next,
    previous,
    seek,
    pickAppleMusic,
    connectSpotify,
    disconnectSpotify,
    openSpotify: spotify.openSpotify,
    clearMessage,
  }
}
