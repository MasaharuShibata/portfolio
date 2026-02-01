# Portfolio (sample)

このリポジトリはローカルで動作するシンプルなポートフォリオサイトのサンプルです。

概要
- 新しいデザインは hodalab のポートフォリオを参考にしたダークモダンなレイアウトです。
- ファイル構成はシンプル (静的 HTML/CSS/JS)。画像は `img/` に配置して利用します。

ファイル
- `index.html` — トップページ（Works / About / Contact）
- `project-a.html`, `project-b.html`, `project-c.html` — 各プロジェクトの詳細ページ
- `styles.css` — スタイル
- `script.js` — ナビ切替・スムーススクロール・フォームダミー
- `img/` — 画像フォルダ（既存画像を流用しています）

ローカルで開く
1. このフォルダを開く
2. ブラウザで `index.html` を開く（またはローカルサーバーで提供）

画像の最適化（自動化スクリプト）
小さめのリポジトリサイズと高速な読み込みのために、`scripts/optimize-images.js`（sharpを利用）を用意しました。Node.js がインストールされていれば実行できます。

手順:

```powershell
cd "C:\Users\kuruk\OneDrive\ドキュメント\プログラミング\portfolio"
# 1) 依存をインストール
npm install

# 2) 画像を最適化（img にある画像を img/optimized に webp と thumbnails を作成）
node scripts/optimize-images.js
```

生成されるファイル:
- `img/optimized/` に `*.webp` と `*_thumb.jpg` を出力します。

注意
- `sharp` を利用するため Node の native ビルドが走ります。Windows で問題が起きる場合は公式ドキュメントを参照してください。

Git 管理のヒント
- 画像は小さめにしてコミットするか、非常に大きいものは Git LFS を検討してください。
- `.gitignore` に `node_modules/` を追加してください（スクリプトを使う場合）。

カスタマイズ案
- 作品ごとに GitHub リポジトリやライブデモリンクを追加できます。
- フォームはサーバー側 API へ連携するか、Formspree 等のサービスを使うと簡単です。

サポート
ご希望があれば `README` のデプロイ手順追記、画像の自動最適化の代行（ローカルでの実行手順を同梱）などを行います。

現在の HTML 参照について
- `index.html` と各 `project-*.html` は最適化済み画像を優先して参照するように更新済みです。画像が `img/optimized/` にある場合は WebP を優先し、サムネイル JPG をフォールバックとして使用します。

再生成・差し替えの流れ
1. 画像を `img/` に追加する（例: `img/new-photo.jpg`）
2. 最適化スクリプトを実行して `img/optimized/` を更新:

```powershell
npm run optimize-images
```

3. ブラウザでページを確認し、必要なら HTML を手動で差し替え（自動差し替えが必要なら対応します）

注意: 現在は HTML を `img/optimized/` を優先参照するように置き換え済みですが、もし異なる命名規則で画像を追加した場合は `index.html` と各詳細ページ内の `<picture>` の `srcset` / `img` を該当ファイル名に合わせて編集してください。
