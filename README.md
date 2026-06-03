# Canton Network — Interactive Demo / 仕組み体験デモ

Canton Network の仕組みを「触って理解する」バイリンガル（日本語 / English）インタラクティブデモ。
A touch-to-understand, bilingual interactive demo of how the Canton Network works.

すべての演算はブラウザ内で完結し、バックエンドは不要です。
Everything runs in the browser — no backend.

## Sections

1. **Cantonとは / What is Canton** — パブリックBCとCantonでデータの見え方がどう変わるかをトグルで可視化
2. **プライバシーモデル / Privacy** — サブトランザクション・プライバシー（当事者だけが取引を見られる）を体験
3. **Global Synchronizer** — 暗号化バッチ → Sequencer順序づけ → 当事者検証 → Mediator 2相コミット のステップ再生
4. **アトミック取引 / Atomic settlement (DvP)** — 片方が失敗すると全ロールバックする様子を体験
5. **比較 / Compare** — Ethereum等のパブリックBCとの設計の違い（中立トーン）

## Tech

- React 18 + Vite + TypeScript
- 日英の全文言は `src/i18n/dict.ts` に集約。言語トグルでUI全体を切替。

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deploy (GitHub Pages)

`vite.config.ts` の `base` は `/canton-demo/`（リポジトリ名）に設定済み。
リポジトリ名が異なる場合は合わせて変更してください。

```bash
npm run build
# dist/ を gh-pages ブランチ等に公開（gh-pages パッケージ or GitHub Actions）
```

## Disclaimer

これは教育目的の非公式デモです。正確さに努めていますが、最新仕様は公式ドキュメントをご確認ください。
This is an unofficial educational demo; consult the official docs for the latest specification.

Sources: [Canton docs](https://docs.digitalasset.com/), [Global Synchronizer / Splice docs](https://docs.sync.global/), [Canton whitepaper](https://www.canton.io/publications/canton-whitepaper.pdf).
