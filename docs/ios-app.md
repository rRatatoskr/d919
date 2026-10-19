# iPhone アプリとして動かす

D919 のシミュレーターを [Capacitor](https://capacitorjs.com/) で iOS アプリにしています。
Web 版 (Next.js) のコードをそのままアプリに入れ、ブラウザではできない部分 (マイク解析・Apple Music 操作など) だけを Swift のプラグイン `plugins/d919-native` で補っています。

## できること

| 音源 (SRC) | iOS アプリ | ブラウザ / ホーム画面の Web アプリ | スペアナの動かし方 |
| --- | --- | --- | --- |
| FILE | ○ (ファイル App から選択・複数可) | ○ | 音声を直接解析 |
| APPLE MUSIC | ○ (ライブラリから選曲・再生操作・曲名表示) | × | マイク |
| SPOTIFY | ○ (ログイン・再生操作・曲名表示) | ○ | マイク |
| MIC | ○ | ○ | マイク |

### Apple Music / Spotify をマイクで解析する理由

Apple Music と Spotify の曲は DRM で保護されていて、アプリから音声データを取り出せません (公式 SDK でも同じです)。
そのため **iPhone のスピーカー (または車や部屋のスピーカー) から流れている音をマイクで拾って** スペアナを動かします。
本物の D919 が AUX 入力の音でスペアナを動かしていたのに近い動きです。

- イヤホン・Bluetooth ヘッドホンで聴いていると音を拾えないので、スペアナはほとんど動きません。
- 拾った音は小さいので自動ゲインで持ち上げています (`components/spectrum-analyzer/config.ts` の `MIC_CONFIG`)。
- マイクの音は解析に使うだけで、保存も送信もしません。
- iOS アプリでは他のアプリの再生を止めないモード (`mixWithOthers`) で録音します。

## 必要なもの

- Mac (Xcode 16 以降。最新の Xcode を推奨)
- Node.js 20 以降
- iPhone (iOS 15 以降) と USB ケーブル
- Apple ID (無料のままで OK。有料の Apple Developer Program は不要)

## 実機で動かす手順

1. 依存パッケージを入れる

   ```sh
   git clone https://github.com/rRatatoskr/d919.git
   cd d919
   npm ci
   ```

2. アプリ用にビルドして Xcode を開く

   ```sh
   npm run ios
   ```

   `npm run build:app` (ルートパスでの静的ビルド) → `npx cap sync ios` → Xcode 起動、の順に実行されます。
   初回は Swift Package (Capacitor 本体) のダウンロードに少し時間がかかります。

3. Xcode で署名を設定する

   1. 左のナビゲータで `App` プロジェクト → TARGETS の `App` → **Signing & Capabilities**
   2. **Team** で自分の Apple ID (Personal Team) を選ぶ (無ければ Xcode > Settings > Accounts で追加)
   3. **Bundle Identifier** を自分専用のもの (例: `io.github.<あなたの名前>.d919`) に変える
      - 無料アカウントは他の人と同じ ID を使えないため

4. iPhone の準備
   - iPhone を Mac に接続し、「このコンピュータを信頼」を許可
   - 設定 > プライバシーとセキュリティ > **デベロッパモード** をオン (再起動されます)

5. 実行
   - Xcode 上部の実行先で自分の iPhone を選び、▶ (Run)
   - 初回は iPhone で 設定 > 一般 > VPN とデバイス管理 から自分の Apple ID の App を「信頼」
   - 無料アカウントで入れたアプリは 7 日で起動できなくなるので、そのときは Xcode からもう一度 Run してください

### Web 側のコードを変えたとき

```sh
npm run ios:sync   # ビルドして ios/ にコピー
```

のあと Xcode で Run し直します。Swift (`plugins/d919-native`) を変えたときも Run し直すだけで反映されます。

デバッグは Mac の Safari の「開発」メニュー → iPhone の名前 → D919 で Web インスペクタが開けます (JS の console もここに出ます)。

## 使い方

| ボタン | 動作 |
| --- | --- |
| ON / OFF | 電源。ON で起動アニメーション |
| SRC | 音源の切り替え (FILE → APPLE MUSIC → SPOTIFY → MIC) |
| OPEN | (FILE) 音楽ファイルを選ぶ。複数選ぶと順番に再生 |
| SELECT | (APPLE MUSIC) ライブラリから曲を選んでミュージックアプリで再生 |
| LOGIN / LOGOUT | (SPOTIFY) Spotify アカウントの接続 |
| ⏮ ▶ ⏭ | 前の曲 / 再生・一時停止 / 次の曲 (Apple Music・Spotify も操作できます) |
| S.A | スペアナ表示パターンの切り替え |
| DISP | ドットマトリクスの表示切り替え (S.A 名 → イルカ → 曲名) |
| POSI | リスニングポジション (ALL → FRONT L → FRONT R → FRONT) |
| DEMO | デモ。パターンを自動で切り替え、音が無ければ疑似スペクトルで動かす |
| 👁 | 位置合わせ用のガイド画像 |

Apple Music はミュージックアプリ (systemMusicPlayer) を操作するので、ミュージックアプリ側で再生を始めた曲もそのまま表示・操作できます。
SELECT で選べるのは「ライブラリ」に入っている曲です (Apple Music の曲はライブラリに追加しておいてください)。

## Spotify の設定

Spotify の Web API を使うため、自分用の「アプリ」を Spotify に登録して Client ID を取得します。

1. <https://developer.spotify.com/dashboard> にログインして **Create app**
2. **Redirect URIs** に次を追加
   - `d919://spotify-callback` (iOS アプリ用)
   - `https://rratatoskr.github.io/d919/` (GitHub Pages 版を使う場合)
   - `http://127.0.0.1:3000/` (`npm run dev` で試す場合。Spotify は `localhost` を受け付けないので、ブラウザでも `127.0.0.1` で開いてください)
3. **Which API/SDKs are you planning to use?** で **Web API** を選んで保存
4. **User Management** に自分の Spotify アカウント (メールアドレス) を追加
5. 表示された **Client ID** をコピー
6. D919 で SRC を SPOTIFY にして LOGIN → Client ID を入力 → Spotify のログイン画面で許可

Client ID は端末に保存されます。毎回入力したくない場合は、ビルド前に `.env.local` に書いておくこともできます。

```sh
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxx
```

注意:

- 2026 年 2 月以降、開発モードの Spotify アプリは **アプリ所有者の Spotify Premium が必須**、利用できるユーザーは 5 人までです。自分で使う場合は Premium が前提になります。
- 再生・一時停止・曲送りの API も Premium のアカウントでしか使えません。
- D919 は再生中の曲を取得して操作するだけで、音は Spotify アプリ (または他のデバイス) から出ます。

## Mac が無い場合: ホーム画面の Web アプリとして使う

GitHub Pages 版 (<https://rratatoskr.github.io/d919/>) を iPhone の Safari で開き、共有 → **ホーム画面に追加** すると全画面のアプリとして起動できます。
FILE / MIC / SPOTIFY が使えます (Apple Music の操作はアプリ版のみ)。
ブラウザでマイクを使うと、環境によっては他のアプリの再生が止まることがあります。その場合は別の機器 (PC や車) で音楽を流して MIC で拾ってください。

## 構成メモ

| パス | 内容 |
| --- | --- |
| `capacitor.config.ts` | アプリ ID・表示設定 |
| `ios/` | Xcode プロジェクト (Capacitor が生成。`npx cap sync ios` で Web 資材をコピー) |
| `plugins/d919-native/` | Swift プラグイン。マイクの FFT 解析 (AnalyserNode と同じ手順)、ミュージックアプリの操作、Spotify ログイン用の `ASWebAuthenticationSession`、画面スリープ抑止 |
| `lib/native/d919-native.ts` | プラグインの JS 側の型定義 |
| `lib/spotify.ts` | Spotify Web API (PKCE ログイン・再生状態・操作) |
| `components/spectrum-analyzer/audio/` | 音源の切り替えとスペクトル入力 |
| `components/spectrum-analyzer/patterns/` | S.A 表示パターン |
| `.github/workflows/ios.yml` | macOS 上で署名なしビルドできるかの確認 |
