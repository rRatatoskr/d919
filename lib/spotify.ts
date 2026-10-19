import { CapacitorHttp } from '@capacitor/core'
import { BASE_PATH } from '@/lib/base-path'
import { D919Native, isNativeApp } from '@/lib/native/d919-native'
import { sha256 } from '@/lib/sha256'

// Spotify Web API (Authorization Code + PKCE)
// 音声データは取れないので、再生中の曲情報の取得と再生操作だけを行う。
// スペアナはマイクで拾った音で動かす。

const AUTH_URL = 'https://accounts.spotify.com/authorize'
const TOKEN_URL = 'https://accounts.spotify.com/api/token'
const API_URL = 'https://api.spotify.com/v1'
const SCOPES = ['user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing']

/** iOS アプリのリダイレクト先。Spotify Developer Dashboard に登録する */
export const APP_REDIRECT_URI = 'd919://spotify-callback'
const APP_CALLBACK_SCHEME = 'd919'

const STORAGE_KEYS = {
  clientId: 'd919.spotify.clientId',
  token: 'd919.spotify.token',
  verifier: 'd919.spotify.verifier',
  state: 'd919.spotify.state',
}

interface StoredToken {
  accessToken: string
  refreshToken: string
  expiresAt: number
}

export interface SpotifyPlayback {
  isPlaying: boolean
  progressMs: number
  durationMs: number
  title: string
  artist: string
  album: string
  deviceName: string
}

export class SpotifyError extends Error {
  constructor(message: string, readonly code: string, readonly status?: number) {
    super(message)
  }
}

const storage = {
  get(key: string) {
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set(key: string, value: string) {
    try {
      localStorage.setItem(key, value)
    } catch {
      // プライベートモードなど
    }
  },
  remove(key: string) {
    try {
      localStorage.removeItem(key)
    } catch {
      // ignore
    }
  },
}

export const getRedirectUri = () =>
  isNativeApp() ? APP_REDIRECT_URI : `${window.location.origin}${BASE_PATH}/`

/** ビルド時の NEXT_PUBLIC_SPOTIFY_CLIENT_ID か、アプリ内で入力した Client ID */
export const getClientId = (): string | null =>
  storage.get(STORAGE_KEYS.clientId) || process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || null

export const setClientId = (clientId: string) => storage.set(STORAGE_KEYS.clientId, clientId.trim())

const readToken = (): StoredToken | null => {
  const raw = storage.get(STORAGE_KEYS.token)
  if (!raw) return null
  try {
    return JSON.parse(raw) as StoredToken
  } catch {
    return null
  }
}

const saveToken = (data: { access_token: string; refresh_token?: string; expires_in: number }, previous?: StoredToken | null) => {
  const token: StoredToken = {
    accessToken: data.access_token,
    // リフレッシュ時は新しい refresh_token が返らないことがある
    refreshToken: data.refresh_token || previous?.refreshToken || '',
    expiresAt: Date.now() + data.expires_in * 1000,
  }
  storage.set(STORAGE_KEYS.token, JSON.stringify(token))
  return token
}

export const isConnected = () => !!readToken()

export const disconnect = () => storage.remove(STORAGE_KEYS.token)

// ---------------------------------------------------------------------------
// HTTP: アプリではネイティブの HTTP を使う (capacitor:// からの CORS を気にしなくてよい)
// ---------------------------------------------------------------------------

interface HttpResponse {
  status: number
  data: any
}

const http = async (
  method: 'GET' | 'POST' | 'PUT',
  url: string,
  options: { headers?: Record<string, string>; form?: Record<string, string>; query?: Record<string, string> } = {},
): Promise<HttpResponse> => {
  const headers = { ...(options.headers ?? {}) }
  if (options.form) headers['Content-Type'] = 'application/x-www-form-urlencoded'

  if (isNativeApp()) {
    const res = await CapacitorHttp.request({ method, url, headers, data: options.form, params: options.query })
    return { status: res.status, data: res.data }
  }

  const query = options.query ? `?${new URLSearchParams(options.query)}` : ''
  const res = await fetch(url + query, {
    method,
    headers,
    body: options.form ? new URLSearchParams(options.form).toString() : undefined,
  })
  const text = await res.text()
  let data: any = null
  if (text) {
    try {
      data = JSON.parse(text)
    } catch {
      data = text
    }
  }
  return { status: res.status, data }
}

// ---------------------------------------------------------------------------
// ログイン
// ---------------------------------------------------------------------------

const randomString = (length: number) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
  const bytes = crypto.getRandomValues(new Uint8Array(length))
  return Array.from(bytes, (b) => chars[b % chars.length]).join('')
}

const base64Url = (bytes: Uint8Array) =>
  btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

const exchangeCode = async (clientId: string, code: string, verifier: string) => {
  const res = await http('POST', TOKEN_URL, {
    form: {
      grant_type: 'authorization_code',
      code,
      redirect_uri: getRedirectUri(),
      client_id: clientId,
      code_verifier: verifier,
    },
  })
  if (res.status !== 200 || !res.data?.access_token) {
    throw new SpotifyError(`Spotify のログインに失敗しました (${res.data?.error_description ?? res.status})`, 'TOKEN_FAILED', res.status)
  }
  saveToken(res.data)
}

/**
 * Spotify にログインする。
 * アプリ: ASWebAuthenticationSession で完結する。
 * ブラウザ: Spotify のページへ移動し、戻ってきたら completeRedirectLogin() で続きを行う。
 */
export const login = async (): Promise<void> => {
  const clientId = getClientId()
  if (!clientId) throw new SpotifyError('Spotify の Client ID が設定されていません', 'NO_CLIENT_ID')

  const verifier = randomString(64)
  const challenge = base64Url(await sha256(new TextEncoder().encode(verifier)))
  const state = randomString(16)
  const url = `${AUTH_URL}?${new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: getRedirectUri(),
    code_challenge_method: 'S256',
    code_challenge: challenge,
    scope: SCOPES.join(' '),
    state,
  })}`

  if (isNativeApp()) {
    const result = await D919Native.webAuth({ url, callbackScheme: APP_CALLBACK_SCHEME })
    const params = new URL(result.url).searchParams
    if (params.get('state') !== state) throw new SpotifyError('ログインの検証に失敗しました', 'STATE_MISMATCH')
    const code = params.get('code')
    if (!code) throw new SpotifyError(`Spotify のログインが拒否されました (${params.get('error') ?? 'unknown'})`, 'DENIED')
    await exchangeCode(clientId, code, verifier)
    return
  }

  storage.set(STORAGE_KEYS.verifier, verifier)
  storage.set(STORAGE_KEYS.state, state)
  window.location.assign(url)
}

/** ブラウザで Spotify から戻ってきたときに呼ぶ。ログインできたら true */
export const completeRedirectLogin = async (): Promise<boolean> => {
  if (isNativeApp()) return false
  const params = new URLSearchParams(window.location.search)
  const code = params.get('code')
  const state = params.get('state')
  const error = params.get('error')
  if (!code && !error) return false

  // URL から code を消しておく (リロードで再利用しない)
  window.history.replaceState(null, '', window.location.pathname)

  const expectedState = storage.get(STORAGE_KEYS.state)
  const verifier = storage.get(STORAGE_KEYS.verifier)
  storage.remove(STORAGE_KEYS.state)
  storage.remove(STORAGE_KEYS.verifier)

  if (error) throw new SpotifyError(`Spotify のログインが拒否されました (${error})`, 'DENIED')
  if (!code || !verifier || state !== expectedState) {
    throw new SpotifyError('ログインの検証に失敗しました。もう一度お試しください', 'STATE_MISMATCH')
  }
  const clientId = getClientId()
  if (!clientId) throw new SpotifyError('Spotify の Client ID が設定されていません', 'NO_CLIENT_ID')
  await exchangeCode(clientId, code, verifier)
  return true
}

let refreshing: Promise<StoredToken> | null = null

const refreshToken = async (token: StoredToken): Promise<StoredToken> => {
  if (refreshing) return refreshing
  refreshing = (async () => {
    const clientId = getClientId()
    if (!clientId || !token.refreshToken) {
      disconnect()
      throw new SpotifyError('Spotify に再ログインしてください', 'NOT_CONNECTED')
    }
    const res = await http('POST', TOKEN_URL, {
      form: { grant_type: 'refresh_token', refresh_token: token.refreshToken, client_id: clientId },
    })
    if (res.status !== 200 || !res.data?.access_token) {
      if (res.status === 400 || res.status === 401) disconnect()
      throw new SpotifyError('Spotify のログインの有効期限が切れました。再ログインしてください', 'NOT_CONNECTED', res.status)
    }
    return saveToken(res.data, token)
  })()
  try {
    return await refreshing
  } finally {
    refreshing = null
  }
}

const getAccessToken = async (): Promise<StoredToken> => {
  const token = readToken()
  if (!token) throw new SpotifyError('Spotify にログインしてください', 'NOT_CONNECTED')
  if (Date.now() > token.expiresAt - 60_000) return refreshToken(token)
  return token
}

const api = async (method: 'GET' | 'POST' | 'PUT', path: string, query?: Record<string, string>) => {
  let token = await getAccessToken()
  let res = await http(method, API_URL + path, { headers: { Authorization: `Bearer ${token.accessToken}` }, query })
  if (res.status === 401) {
    token = await refreshToken(token)
    res = await http(method, API_URL + path, { headers: { Authorization: `Bearer ${token.accessToken}` }, query })
  }
  if (res.status >= 400) {
    const reason: string = res.data?.error?.reason ?? ''
    const detail: string = res.data?.error?.message ?? ''
    if (res.status === 403 && reason === 'PREMIUM_REQUIRED') {
      throw new SpotifyError('再生操作には Spotify Premium が必要です', 'PREMIUM_REQUIRED', 403)
    }
    if (res.status === 404 || reason === 'NO_ACTIVE_DEVICE') {
      throw new SpotifyError('再生中のデバイスがありません。Spotify アプリで一度再生してください', 'NO_ACTIVE_DEVICE', res.status)
    }
    if (res.status === 429) {
      throw new SpotifyError('Spotify へのリクエストが多すぎます。少し待ってください', 'RATE_LIMITED', 429)
    }
    throw new SpotifyError(`Spotify API エラー (${res.status}${detail ? `: ${detail}` : ''})`, 'API_ERROR', res.status)
  }
  return res
}

/** 再生状態。どのデバイスでも再生していなければ null */
export const getPlayback = async (): Promise<SpotifyPlayback | null> => {
  const res = await api('GET', '/me/player')
  const d = res.data
  if (res.status === 204 || !d || typeof d !== 'object') return null
  const item = d.item
  return {
    isPlaying: !!d.is_playing,
    progressMs: d.progress_ms ?? 0,
    durationMs: item?.duration_ms ?? 0,
    title: item?.name ?? '',
    artist: item?.artists?.map((a: { name: string }) => a.name).join(', ') ?? item?.show?.name ?? '',
    album: item?.album?.name ?? '',
    deviceName: d.device?.name ?? '',
  }
}

export const play = async () => {
  await api('PUT', '/me/player/play')
}
export const pause = async () => {
  await api('PUT', '/me/player/pause')
}
export const next = async () => {
  await api('POST', '/me/player/next')
}
export const previous = async () => {
  await api('POST', '/me/player/previous')
}
export const seek = async (positionMs: number) => {
  await api('PUT', '/me/player/seek', { position_ms: String(Math.max(0, Math.round(positionMs))) })
}

/** Spotify アプリを開く (アプリ内では URL スキーム、ブラウザでは Web Player) */
export const openSpotify = () => {
  window.location.href = isNativeApp() ? 'spotify:' : 'https://open.spotify.com/'
}
