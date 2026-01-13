# KUROKO PLUS LP 仕様書

**バージョン:** 1.0
**作成日:** 2026年1月14日
**作成者:** Manus AI

---

## 1. プロジェクト概要

本プロジェクトは、会話支援AIアプリケーション「KUROKO PLUS」のランディングページ（LP）です。

- **リポジトリ:** https://github.com/makoban/kuroko-plus-lp
- **デプロイ先:** GitHub Pages
- **URL:** https://kuroko.becreative.co.jp/

## 2. 技術スタック

| カテゴリ | 技術 | バージョン |
|---|---|---|
| フロントエンド | React | 19.2.1 |
| | TypeScript | 5.6.3 |
| ビルドツール | Vite | 7.1.7 |
| スタイリング | Tailwind CSS | 4.1.14 |
| ルーティング | wouter | 3.3.5 |

## 3. ディレクトリ構造

```
/kuroko-plus-lp
├── client/           # フロントエンドのソースコード
│   ├── public/       # 静的ファイル（画像、404.htmlなど）
│   └── src/          # Reactコンポーネント、ページ
│       ├── components/ # 共通コンポーネント
│       ├── pages/      # 各ページ（Home, Terms, Privacy, Tokushoho）
│       └── App.tsx     # ルーティング定義
├── dist/             # ビルド後の成果物
│   └── public/
├── deploy_gh_pages.sh # デプロイスクリプト
└── vite.config.ts    # Vite設定ファイル
```

## 4. デプロイ方法

本プロジェクトは**GitHub Pages**でホストされており、`gh-pages`ブランチの内容が公開されます。

**デプロイ手順：**

1. `main`ブランチで開発・修正を行う
2. `pnpm build` を実行して `dist/public` に成果物を生成
3. `deploy_gh_pages.sh` を実行
   - このスクリプトが `dist/public` の内容を `gh-pages` ブランチに強制プッシュします

**注意点：**
- `main`ブランチに直接プッシュしてもデプロイされません。
- `gh-pages`ブランチはビルド成果物専用です。

## 5. SPAルーティング対応

GitHub PagesでSPA（Single Page Application）のルーティングを機能させるため、以下の対応を行っています。

1. **404.html**
   - `/terms` のようなパスに直接アクセスするとGitHub Pagesは404を返します。
   - この `404.html` がリクエストを `index.html` にリダイレクトします。

2. **index.htmlのスクリプト**
   - `index.html` 内のスクリプトがリダイレクトされたパスを解釈し、`wouter`が正しいページを表示します。

**問題が発生した場合：**
- GitHub Pagesのキャッシュが原因の可能性があります。数分待ってから確認してください。
- または、`wouter`をハッシュベースのルーティングに変更することを検討してください。


## 6. ページ構成

| パス | ファイル | 説明 |
|---|---|---|
| `/` | `Home.tsx` | メインのランディングページ |
| `/terms` | `Terms.tsx` | 利用規約 |
| `/privacy` | `Privacy.tsx` | プライバシーポリシー |
| `/tokushoho` | `Tokushoho.tsx` | 特定商取引法に基づく表示 |
| `/404` | `NotFound.tsx` | 404エラーページ |

## 7. 静的ファイル

`client/public/` ディレクトリに配置されたファイルはビルド時にそのままコピーされます。

| ファイル | 説明 |
|---|---|
| `logo.png` | KUROKO PLUSのロゴ（忍者デザイン） |
| `favicon.ico` | ファビコン |
| `apple-touch-icon.png` | iOSホーム画面用アイコン |
| `404.html` | SPAリダイレクト用 |
| `CNAME` | カスタムドメイン設定（kuroko.becreative.co.jp） |
| `.nojekyll` | GitHub PagesのJekyll処理を無効化 |

## 8. ブランチ運用

| ブランチ | 用途 |
|---|---|
| `main` | 開発用。ソースコードを管理 |
| `gh-pages` | デプロイ用。ビルド成果物のみ |

**重要：**
- `main`ブランチで開発し、`deploy_gh_pages.sh`でデプロイする
- `gh-pages`ブランチを直接編集しないこと（次回デプロイで上書きされる）

## 9. 開発コマンド

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# デプロイ
./deploy_gh_pages.sh
```

## 10. トラブルシューティング

### 10.1 デプロイしたのに反映されない

**原因：** GitHub Pagesのキャッシュ

**対策：**
1. 数分待つ
2. ブラウザのキャッシュをクリア（Ctrl+Shift+R）
3. GitHub Actionsのデプロイ状況を確認

### 10.2 `/terms` などのパスで404になる

**原因：** SPAリダイレクトが機能していない

**対策：**
1. `client/public/404.html` が存在するか確認
2. `client/index.html` にリダイレクトスクリプトがあるか確認
3. `gh-pages`ブランチに正しくデプロイされているか確認

### 10.3 ロゴが古いまま

**原因：** ブラウザキャッシュまたはCDNキャッシュ

**対策：**
1. ブラウザのキャッシュをクリア
2. `logo.png?v=2` のようにクエリパラメータを追加

## 11. 関連リソース

- **Webアプリ:** https://stealth-ai-web-new.onrender.com
- **Webアプリリポジトリ:** https://github.com/makoban/stealth-ai-web
- **運営会社:** 株式会社ビークリエイティブ（バンテックス）
