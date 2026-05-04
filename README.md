# 田舎亭 アルバイト募集 LP

Next.js App Router / TypeScript / Tailwind CSS で作成した、田舎亭のアルバイト募集LP・店舗紹介サイトです。

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

## 編集する場所

文言、電話番号、募集条件、画像パス、FAQ は主に `constants/lp.ts` にまとめています。

よく編集する項目：

- `siteInfo.phoneDisplay`：画面に表示する電話番号
- `siteInfo.phoneHref`：電話ボタンのリンク
- `siteInfo.address`：住所
- `requirements`：募集要項
- `faqs`：よくある質問
- `galleryImages`：画像パスと説明文

未確定の情報は「要確認」「あとで編集」として入れています。電話番号、住所、研修期間、面接時の持ち物、服装や髪色ルールなどは、確定後に `constants/lp.ts` を編集してください。

## 写真の差し替え方法

写真は `public/images/` に入れてください。次のファイル名で置くと、そのままLPに表示されます。

- `public/images/shop-exterior.jpg`
- `public/images/shop-interior.jpg`
- `public/images/shop-interior-2.jpg`
- `public/images/food.jpg`
- `public/images/food-2.jpg`
- `public/images/staff.jpg`
- `public/images/kitchen.jpg`

現在のギャラリーは、店舗写真・店内写真・料理写真を中心に表示しています。スタッフ写真や作業風景写真がまだない場合でも、店内写真や料理写真から職場の雰囲気が伝わるようにしています。画像が未配置の場合でも、LP上では「写真未配置」のプレースホルダーが表示されます。

## 電話番号の変更方法

`constants/lp.ts` の次の2か所を変更してください。

```ts
phoneDisplay: "000-0000-0000",
phoneHref: "tel:0000000000",
```

`phoneDisplay` は画面表示用、`phoneHref` はスマホで電話をかけるためのリンクです。ハイフンなしの番号を `tel:` の後に入れてください。

## 次にやること

- 正しい電話番号に変更する
- 住所を確定して `siteInfo.address` を編集する
- 研修期間、面接時の持ち物、服装・髪色ルールを確認して募集要項を更新する
- 店舗写真、料理写真、店内写真、スタッフや作業風景の写真を `public/images/` に追加する
- 実機スマホで電話ボタンの見え方と押しやすさを確認する
