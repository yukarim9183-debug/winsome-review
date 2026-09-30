// =====================================================================
//  Winsome 店舗設定ファイル
//  店舗が増えたら、下の STORES に { ... } をコピーして1ブロック追加するだけでOK。
//
//  id           : URLに使う英字（例: review.html?store=kichijoji）
//  name         : 画面に表示する店舗名
//  hotpepperUrl : ホットペッパーの予約履歴ページ（開くとログイン画面→予約履歴→「口コミを投稿する」）
//                 全店共通のURLでOK。店舗ごとの口コミ一覧ページではありません。
//  hotpepperSalonUrl : 各店のホットペッパー店舗ページ（控え用。画面には使っていません）
//  googleUrl    : Googleの口コミ投稿URL
//                 おすすめ → Googleビジネスプロフィール管理画面の「口コミを依頼」で
//                 表示される https://g.page/r/xxxxx/review 形式のURL
//                 （開くとすぐに★と口コミ入力画面が出ます）
//  staff        : 担当スタッフ名の候補（空 [] なら自由入力のみ）
//  空欄 "" のURLはボタンが「準備中」表示になります。
// =====================================================================

window.WINSOME_CONFIG = {
  brand: "Winsome",
  brandSub: "メンズ眉毛サロン",

  STORES: [
    {
      id: "kichijoji",
      name: "吉祥寺店",
      hotpepperUrl: "https://beauty.hotpepper.jp/CSP/my/reserveHistoryList/",
      hotpepperSalonUrl: "https://beauty.hotpepper.jp/kr/slnH000825427/",
      googleUrl: "https://g.page/r/CZ6qgAxr_zvoEAE/review",
      staff: [],
    },
    {
      id: "shinjuku",
      name: "新宿店",
      hotpepperUrl: "https://beauty.hotpepper.jp/CSP/my/reserveHistoryList/",
      hotpepperSalonUrl: "https://beauty.hotpepper.jp/kr/slnH000796477/",
      googleUrl: "https://g.page/r/CZC_tWHPC2GTEAE/review",
      staff: [],
    },
    {
      id: "koenji",
      name: "高円寺店",
      hotpepperUrl: "https://beauty.hotpepper.jp/CSP/my/reserveHistoryList/",
      hotpepperSalonUrl: "",
      googleUrl: "https://g.page/r/CTab2VYoNKEaECE/review",
      staff: [],
    },
  ],

  // 受けたメニューの選択肢
  MENUS: [
    "眉毛スタイリング（ワックス）",
    "眉カット・デザイン",
    "眉毛パーマ",
    "ドライヘッドスパ",
    "毛穴洗浄",
    "フェイシャルエステ",
    "まつげ",
  ],

  // 良かった点の選択肢（label: ボタン表示 / phrase: 文章に入る言い回し）
  GOOD_POINTS: [
    { label: "カウンセリングが丁寧", phrase: "カウンセリングで眉の形や悩みを丁寧に聞いてもらえた" },
    { label: "顔に合った眉にしてくれた", phrase: "自分の顔立ちに合った眉を提案してもらえた" },
    { label: "仕上がりが自然", phrase: "やりすぎ感のない自然な仕上がりだった" },
    { label: "清潔感が出た", phrase: "眉が整って一気に清潔感が出た" },
    { label: "印象が良くなった", phrase: "顔の印象が明るく、キリッとした" },
    { label: "痛みが少なかった", phrase: "思っていたより痛みが少なかった" },
    { label: "スタッフの対応が良い", phrase: "スタッフさんの対応が気さくで話しやすかった" },
    { label: "初めてでも安心", phrase: "初めての眉毛サロンでも緊張せずに受けられた" },
    { label: "セルフケアを教わった", phrase: "自宅での眉の整え方まで教えてもらえた" },
    { label: "店内が清潔", phrase: "店内が清潔で落ち着いた雰囲気だった" },
    { label: "駅から近い", phrase: "駅から近くて通いやすい" },
    { label: "時間がちょうどいい", phrase: "施術時間もちょうどよく、仕事帰りにも寄りやすい" },
    { label: "価格に満足", phrase: "この仕上がりでこの価格なら満足できる" },
  ],

  // ★3以下のときに表示する「気になった点」
  CONCERNS: [
    { label: "待ち時間", phrase: "少し待ち時間があった" },
    { label: "仕上がりがイメージと違う", phrase: "仕上がりが想像していたイメージと少し違った" },
    { label: "説明が足りない", phrase: "施術内容の説明がもう少しほしかった" },
    { label: "痛みがあった", phrase: "思ったより痛みがあった" },
    { label: "価格", phrase: "価格が少し高く感じた" },
    { label: "予約の取りやすさ", phrase: "予約が取りにくかった" },
  ],
};
