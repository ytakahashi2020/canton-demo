// Bilingual copy for the whole site. Every user-visible string lives here so the
// language toggle can swap the entire UI without touching components.
//
// Sourced from verified Canton research (Digital Asset docs, Canton whitepaper,
// sync.global / Splice docs). Where a claim is an analogy or vendor framing, the
// copy is deliberately neutral and says so.

export type Lang = 'ja' | 'en'

export interface Dict {
  nav: {
    intro: string
    privacy: string
    synchronizer: string
    atomic: string
    compare: string
  }
  hero: {
    kicker: string
    title: string
    subtitle: string
    toggleLabel: string
    publicMode: string
    cantonMode: string
    publicCaption: string
    cantonCaption: string
    cta: string
    note: string
  }
  intro: {
    title: string
    lead: string
    cards: { term: string; body: string }[]
  }
  privacy: {
    title: string
    lead: string
    instruction: string
    parties: { id: string; name: string; role: string }[]
    dealLabel: string
    sees: string
    blind: string
    explainTitle: string
    explain: string
  }
  sync: {
    title: string
    lead: string
    steps: { label: string; body: string }[]
    play: string
    reset: string
    next: string
    roleSequencer: string
    roleMediator: string
    roleSuperv: string
    facts: { k: string; v: string }[]
  }
  atomic: {
    title: string
    lead: string
    legA: string
    legB: string
    runOk: string
    runFail: string
    reset: string
    statusIdle: string
    statusOk: string
    statusFail: string
    explainTitle: string
    explain: string
  }
  compare: {
    title: string
    lead: string
    colFeature: string
    colPublic: string
    colCanton: string
    rows: { feature: string; pub: string; canton: string }[]
    disclaimer: string
  }
  footer: {
    builtWith: string
    sourcesTitle: string
    sources: { label: string; url: string }[]
    disclaimer: string
  }
}

export const dict: Record<Lang, Dict> = {
  ja: {
    nav: {
      intro: 'Cantonとは',
      privacy: 'プライバシー',
      synchronizer: 'Global Synchronizer',
      atomic: 'アトミック取引',
      compare: '比較',
    },
    hero: {
      kicker: '触って理解する',
      title: 'Canton Network の仕組み',
      subtitle:
        '「プライベートっぽい」と言われるパブリック・パーミッション型ブロックチェーン。データの見え方と取引の繋がり方を、動かしながら理解しよう。',
      toggleLabel: 'クリックして切り替え',
      publicMode: 'パブリックBC（例: Ethereum）',
      cantonMode: 'Canton Network',
      publicCaption:
        'すべての取引が全ノードにブロードキャストされ、誰でも台帳全体を見られる。',
      cantonCaption:
        '取引は当事者にだけ届く。各参加者は自分に関係する部分しか見えず、台帳全体を見られる者はいない。',
      cta: '仕組みを見る ↓',
      note: '※ 比較はわかりやすさのための単純化です。詳細は各セクションへ。',
    },
    intro: {
      title: 'Canton とは何か',
      lead: 'ひとことで言うと「ネットワークのネットワーク」。独立した参加者のノードがつながり、誰も全体を見られない“仮想的なグローバル台帳”を形づくります。',
      cards: [
        {
          term: 'パブリック・パーミッション型',
          body: '誰でも参加申請できる（パブリック）が、参加者は識別される（パーミッション型）。規制下の金融機関が使える設計です。',
        },
        {
          term: 'Participant Node（参加ノード）',
          body: '各組織が自分のノードを運用し、自分が当事者の契約だけを保持します。',
        },
        {
          term: 'Daml',
          body: '契約のロジックと「誰が何を見られる／できるか」を記述する専用言語。プライバシーの土台です。',
        },
        {
          term: 'ACS（アクティブ契約集合）',
          body: '状態は残高ではなく「有効な契約の集合」で表現。BitcoinのUTXOに似た考え方です（あくまで例え。Damlの契約はより表現力が高い）。',
        },
        {
          term: 'Synchronizer（旧称: domain）',
          body: '参加ノードを束ねて取引を同期する役。Canton 3.3 で「domain」から「Synchronizer」に改称。古い資料では「domain」と書かれています。',
        },
      ],
    },
    privacy: {
      title: '① プライバシーモデル',
      lead: 'Cantonの最大の特徴は「サブトランザクション・プライバシー」。契約に名前が載っている当事者にだけ、取引が届きます。無関係な参加者は取引の存在すら知りません。',
      instruction: '下の取引カードをクリックすると、誰に見えて誰に見えないかがわかります。',
      parties: [
        { id: 'A', name: '銀行A', role: '取引の当事者' },
        { id: 'B', name: '銀行B', role: '取引の当事者' },
        { id: 'C', name: '銀行C', role: '無関係な参加者' },
      ],
      dealLabel: 'AとBの秘密取引',
      sees: '見える',
      blind: '見えない（存在も知らない）',
      explainTitle: 'なぜ重要？',
      explain:
        'パブリックBCでは全員に取引が見えてしまうため、金融機関は手の内（ポジションや取引相手）を競合に晒すことになります。Cantonは当事者だけにデータを届けるので、機密を守りつつ同じネットワークを共有できます。',
    },
    sync: {
      title: '② Global Synchronizer',
      lead: '複数のネットワーク（Synchronizer）をまたぐ取引の順序づけと確定を担う“背骨”。ポイントは「中身を見ずに調整する」こと。',
      steps: [
        {
          label: '1. 暗号化して送信',
          body: '当事者のノードが取引を暗号化し、Synchronizerに送ります。',
        },
        {
          label: '2. Sequencer が順序づけ',
          body: 'Sequencerは暗号化されたバッチを“順番に並べる”だけ。取引の中身（ペイロード）は復号できません。配送に必要なメタデータ（送受信者やタイミング）は見えます。',
        },
        {
          label: '3. 当事者が検証',
          body: '復号できるのは当事者だけ。各自が取引を検証し、確認（confirmation）を返します。',
        },
        {
          label: '4. Mediator が確定',
          body: 'Mediatorは確認（賛否）を集約し、2相コミットで取引を確定（finality）させます。Mediator自身も取引の中身は見ません。',
        },
      ],
      play: '再生',
      reset: 'リセット',
      next: '次へ',
      roleSequencer: 'Sequencer（順序づけ）',
      roleMediator: 'Mediator（確定の調停）',
      roleSuperv: 'Super Validator が分散運営',
      facts: [
        { k: 'コンセンサス', v: '2/3 BFT（順序づけ層とガバナンス投票。取引確定は当事者の2相コミット）' },
        { k: '運営', v: 'Super Validator 群（分散）' },
        { k: 'ガバナンス', v: 'Global Synchronizer Foundation（Linux Foundation下）' },
        { k: '手数料', v: 'USD建てで見積もり・Canton Coin で支払い' },
      ],
    },
    atomic: {
      title: '③ アトミックな取引（DvP）',
      lead: '「証券の受け渡し」と「現金の支払い」を同時に成立させるDvP（Delivery versus Payment）。Cantonでは片方だけ成立することがありません。全部成立するか、全部なかったことになるか、どちらかです。',
      legA: '証券を A → B へ',
      legB: '現金を B → A へ',
      runOk: '両方を実行',
      runFail: '片方を失敗させてみる',
      reset: 'リセット',
      statusIdle: '待機中',
      statusOk: '✓ 取引成立（両方が確定）',
      statusFail: '✗ 取引失敗 → 全てロールバック（片方だけ成立はしない）',
      explainTitle: 'なぜ重要？',
      explain:
        '従来は「証券は渡したのに入金されない」決済リスクが存在しました。1回のアトミック取引は1つのSynchronizer内で完結しますが、異なるSynchronizer上の契約も、共通のSynchronizerへ再割り当て（reassignment）した上でブリッジなしにアトミック決済できます。これが金融機関が注目する理由のひとつです。',
    },
    compare: {
      title: '④ パブリックBC との比較',
      lead: 'Ethereumのような一般的なパブリックブロックチェーンと、設計思想の違いを並べてみます。',
      colFeature: '観点',
      colPublic: 'パブリックBC（例: Ethereum）',
      colCanton: 'Canton Network',
      rows: [
        { feature: 'データの可視性', pub: '全ノードに公開', canton: 'ステークホルダー（署名者＋オブザーバー）に need-to-know で開示' },
        { feature: '状態モデル', pub: 'アカウント残高マップ', canton: 'アクティブ契約集合（ACS）' },
        { feature: '参加', pub: '擬名で誰でも（アドレスは公開）', canton: '公開・パーミッション型（public permissioned）' },
        { feature: 'スマートコントラクト', pub: 'Solidity / EVM', canton: 'Daml' },
        { feature: 'ネットワーク構成', pub: '単一のグローバル台帳', canton: '台帳の連合（誰も全体を見ない）' },
        { feature: '主な用途', pub: 'パブリックなDeFi・公開アプリ', canton: '規制下の機関金融・RWA' },
      ],
      disclaimer:
        '※ この比較は理解のための単純化で、優劣を示すものではありません。Cantonの公開情報は開発元（Digital Asset）由来が多く、対比はその点を踏まえて中立に記述しています。\n※ 可視性: 契約を見られるのは「当事者（署名者）」だけでなくオブザーバーも含むステークホルダー。さらに divulgence／explicit disclosure により、ステークホルダー以外にも開示されうる場合があります。\n※ 参加: ネットワーク全体は「public permissioned」。同期レイヤー（Synchronizer）は permissionless な設計を志向しますが、現状の検証ノード参加は GSF の承認／スポンサーが必要で、将来的な permissionless 化が計画されています。許可制の度合いはアプリごとにも設定できます。',
    },
    footer: {
      builtWith: 'React + Vite + TypeScript で構築・ブラウザ完結（バックエンド不要）',
      sourcesTitle: '主な出典',
      sources: [
        { label: 'Canton Network 公式ドキュメント', url: 'https://docs.digitalasset.com/' },
        { label: 'Global Synchronizer / Splice docs', url: 'https://docs.sync.global/' },
        { label: 'Canton ホワイトペーパー', url: 'https://www.canton.io/publications/canton-whitepaper.pdf' },
      ],
      disclaimer:
        'これは教育目的の非公式デモです。正確さに努めていますが、最新の仕様は公式ドキュメントをご確認ください。',
    },
  },
  en: {
    nav: {
      intro: 'What is Canton',
      privacy: 'Privacy',
      synchronizer: 'Global Synchronizer',
      atomic: 'Atomic settlement',
      compare: 'Compare',
    },
    hero: {
      kicker: 'Touch to understand',
      title: 'How the Canton Network works',
      subtitle:
        'A public, permissioned blockchain that feels "private". See how data is exposed and how transactions connect — by playing with it.',
      toggleLabel: 'Click to switch',
      publicMode: 'Public chain (e.g. Ethereum)',
      cantonMode: 'Canton Network',
      publicCaption:
        'Every transaction is broadcast to all nodes; anyone can read the whole ledger.',
      cantonCaption:
        'A transaction reaches only its parties. Each participant sees only its own slice — no one sees the whole ledger.',
      cta: 'See how it works ↓',
      note: 'Note: comparisons are simplified for clarity. Details follow in each section.',
    },
    intro: {
      title: 'What Canton is',
      lead: 'In one line: a "network of networks". Independent participant nodes connect to form a virtual global ledger that no single party can see in full.',
      cards: [
        {
          term: 'Public & permissioned',
          body: 'Anyone may apply to join (public), but participants are identified (permissioned). Built so regulated institutions can use it.',
        },
        {
          term: 'Participant Node',
          body: 'Each organization runs its own node and stores only the contracts it is a party to.',
        },
        {
          term: 'Daml',
          body: 'A purpose-built language for contract logic and "who may see / do what". The foundation of Canton privacy.',
        },
        {
          term: 'ACS (Active Contract Set)',
          body: 'State is a set of active contracts rather than balances — conceptually similar to Bitcoin UTXOs (an analogy; Daml contracts are far more expressive).',
        },
        {
          term: 'Synchronizer (formerly "domain")',
          body: 'Connects participant nodes and synchronizes their transactions. Renamed from "domain" to "Synchronizer" in Canton 3.3 — older material still says "domain".',
        },
      ],
    },
    privacy: {
      title: '① Privacy model',
      lead: 'Canton’s defining trait is sub-transaction privacy: a transaction reaches only the parties named in the contract. Unrelated participants don’t even know it exists.',
      instruction: 'Click the deal card below to reveal who can — and cannot — see it.',
      parties: [
        { id: 'A', name: 'Bank A', role: 'Party to the deal' },
        { id: 'B', name: 'Bank B', role: 'Party to the deal' },
        { id: 'C', name: 'Bank C', role: 'Unrelated participant' },
      ],
      dealLabel: 'Private deal between A & B',
      sees: 'can see',
      blind: 'cannot see (unaware it exists)',
      explainTitle: 'Why it matters',
      explain:
        'On a public chain everyone sees every transaction, so institutions would expose their positions and counterparties to competitors. Canton delivers data only to the parties, so confidentiality is preserved while sharing one network.',
    },
    sync: {
      title: '② Global Synchronizer',
      lead: 'The backbone that orders and finalizes transactions across multiple networks (Synchronizers). The key: it coordinates without ever seeing the contents.',
      steps: [
        {
          label: '1. Encrypt & submit',
          body: 'A party’s node encrypts the transaction and submits it to the Synchronizer.',
        },
        {
          label: '2. Sequencer orders',
          body: 'The Sequencer only puts the encrypted batches in order — it cannot decrypt the transaction payload. It does see the metadata needed for delivery (senders, recipients, timing).',
        },
        {
          label: '3. Parties validate',
          body: 'Only the parties can decrypt. Each validates the transaction and returns a confirmation.',
        },
        {
          label: '4. Mediator finalizes',
          body: 'The Mediator aggregates the confirmations (the verdicts) and commits the transaction via two-phase commit (finality). The Mediator itself never sees the transaction contents.',
        },
      ],
      play: 'Play',
      reset: 'Reset',
      next: 'Next',
      roleSequencer: 'Sequencer (ordering)',
      roleMediator: 'Mediator (commit coordination)',
      roleSuperv: 'Operated by Super Validators',
      facts: [
        { k: 'Consensus', v: '2/3 BFT (ordering layer & governance votes; transaction finality is the parties’ two-phase commit)' },
        { k: 'Operation', v: 'A set of Super Validators (decentralized)' },
        { k: 'Governance', v: 'Global Synchronizer Foundation (under Linux Foundation)' },
        { k: 'Fees', v: 'Quoted in USD, paid in Canton Coin' },
      ],
    },
    atomic: {
      title: '③ Atomic settlement (DvP)',
      lead: 'Delivery versus Payment settles "hand over the security" and "pay the cash" together. On Canton one leg never succeeds alone — either both commit, or neither does.',
      legA: 'Security: A → B',
      legB: 'Cash: B → A',
      runOk: 'Run both',
      runFail: 'Make one leg fail',
      reset: 'Reset',
      statusIdle: 'Idle',
      statusOk: '✓ Settled (both legs committed)',
      statusFail: '✗ Failed → everything rolls back (no half-settlement)',
      explainTitle: 'Why it matters',
      explain:
        'Traditionally there was settlement risk: "I delivered the security but the cash never arrived." A single atomic transaction lives within one Synchronizer, but contracts on different Synchronizers can be reassigned to a common one and then settled atomically — with no bridge. That is a major reason institutions are interested.',
    },
    compare: {
      title: '④ Versus a public chain',
      lead: 'Side by side with a typical public blockchain like Ethereum, to highlight the difference in design philosophy.',
      colFeature: 'Aspect',
      colPublic: 'Public chain (e.g. Ethereum)',
      colCanton: 'Canton Network',
      rows: [
        { feature: 'Data visibility', pub: 'Public to all nodes', canton: 'Disclosed on a need-to-know basis to stakeholders (signatories + observers)' },
        { feature: 'State model', pub: 'Account balance map', canton: 'Active Contract Set (ACS)' },
        { feature: 'Joining', pub: 'Pseudonymous, anyone (addresses are public)', canton: 'Public permissioned' },
        { feature: 'Smart contracts', pub: 'Solidity / EVM', canton: 'Daml' },
        { feature: 'Network shape', pub: 'One global ledger', canton: 'Federated ledgers (no full view)' },
        { feature: 'Primary use', pub: 'Public DeFi & open apps', canton: 'Regulated institutional finance & RWAs' },
      ],
      disclaimer:
        'This comparison is simplified for learning and is not a judgment of which is "better". Much public material on Canton comes from its developer (Digital Asset); the contrast is written neutrally with that in mind.\nVisibility: a contract is seen not only by its signatories but by all stakeholders (signatories + observers). Via divulgence / explicit disclosure, data can also reach parties beyond the stakeholders in some cases.\nJoining: the network as a whole is "public permissioned". The synchronizer layer is designed to be permissionless, but today validator onboarding requires GSF approval / a sponsor, with permissionless access planned over time. The degree of permissioning is also configurable per application.',
    },
    footer: {
      builtWith: 'Built with React + Vite + TypeScript — runs entirely in the browser, no backend.',
      sourcesTitle: 'Key sources',
      sources: [
        { label: 'Canton Network official docs', url: 'https://docs.digitalasset.com/' },
        { label: 'Global Synchronizer / Splice docs', url: 'https://docs.sync.global/' },
        { label: 'Canton whitepaper', url: 'https://www.canton.io/publications/canton-whitepaper.pdf' },
      ],
      disclaimer:
        'This is an unofficial educational demo. We strive for accuracy, but please consult the official docs for the latest specification.',
    },
  },
}
