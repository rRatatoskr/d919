# KENWOOD D919 Spectrum Analyzer

KENWOOD D919 (MP3 対応 CD レシーバー) の VFD 表示を再現したスペクトラムアナライザーです。

- Web 版: https://rratatoskr.github.io/d919/
- iPhone アプリ: [docs/ios-app.md](docs/ios-app.md) (Capacitor。Apple Music / Spotify / マイク入力に対応)

## 開発

```sh
npm ci
npm run dev          # http://localhost:3000
npm run build        # GitHub Pages 用 (/d919 配下) の静的ビルド
npm run ios          # iOS アプリ用にビルドして Xcode を開く
```

## 表示パターン (S.A)

取扱説明書にある順番で切り替わります。PEAK HOLD 以外はパターン名から動きを解釈して作っています。
パラメータは `components/spectrum-analyzer/config.ts` の `PATTERN_CONFIG`、動きは `components/spectrum-analyzer/patterns/index.ts` にあります。

| パターン | 動き |
| --- | --- |
| PROMINENCE | 立ち上がりでピークが打ち上がり、重力で落ちてくる (紅炎)。サイドが炎の舌のように伸びる |
| CANYON | 上から垂れ下がるバー。サイドは下から伸びて谷を作る |
| BLIZZARD | バーの上を雪 (サイドの細いセグメント) が風に流されながら降る |
| MUSIC SCOPE | 各バンドのレベルを点で結んだオシロスコープ風の線 |
| EXPLOSION | 低音を中央にして左右対称、バーは上下中央から膨らみ、低音のアタックで火花が飛ぶ |
| PEAK HOLD | バーと一瞬止まるピーク |

そのほか DEMO (パターンの自動切り替え)、POSI (リスニングポジション)、音量に合わせて増減するサウンドレベライザーのリングがあります。
