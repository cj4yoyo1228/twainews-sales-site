# 臺灣人新聞網 — 新聞銷售官網

把您 Google 上的真實好評，編輯成一篇刊登於臺灣人新聞網的專業新聞報導。
這是給「在地店家媒體合作」服務的銷售 landing page。

## 技術棧

- **Next.js 14** (App Router) + **TypeScript**
- **React 18**
- **Tailwind v3**（已裝但目前未用，預留給未來 utility 微調）
- **Noto Sans TC + Inter**（透過 `next/font/google` 載入）
- **Flaticon UICons**（CDN，圖示用）
- 設計 CSS：`app/styles/tokens.css` + `app/styles/styles-v2.css` — 沿用 Claude Design 匯出的 pixel-perfect CSS

## 目錄結構

```
新聞銷售官網/
├── app/
│   ├── components/
│   │   ├── AnimatedNumber.tsx   數字計數動畫（IntersectionObserver）
│   │   ├── ApplyForm.tsx        申請表單（送出後導向 Google Form）
│   │   ├── CityGrid.tsx         22 縣市選擇按鈕（toggle）
│   │   └── SmoothScroll.tsx     錨點點擊平滑捲動（含 72px header 偏移）
│   ├── styles/
│   │   ├── tokens.css           UniLife 設計系統 token
│   │   └── styles-v2.css        Landing Page v2 完整樣式
│   ├── globals.css              Tailwind layers + 設計 CSS 入口
│   ├── icon.svg                 favicon
│   ├── layout.tsx               <html> + 字型 + SEO meta
│   └── page.tsx                 主頁面（v2 設計搬上來）
├── public/assets/               logo + 範例圖（取自 design bundle）
├── .env.local                   Google Form 網址（gitignored，不會被推到 GitHub）
├── .env.example                 環境變數範本
├── tailwind.config.ts           （已關 preflight 避免覆蓋設計 reset）
└── package.json
```

## 在本地跑起來

```bash
# 1. 進到專案根目錄
cd ~/Desktop/Vibe\ Coding/UniLife/新聞網/新聞銷售官網

# 2. 安裝依賴（首次或更新 package.json 後）
npm install

# 3. 啟動 dev server（自動 hot reload）
npm run dev
```

瀏覽器打開 [http://localhost:3000](http://localhost:3000) 就能看到。

## 環境變數

把 `.env.example` 複製成 `.env.local` 然後填上：

| 變數                          | 用途                                                                     |
| ----------------------------- | ------------------------------------------------------------------------ |
| `NEXT_PUBLIC_GOOGLE_FORM_URL` | 申請表單送出後會開新分頁導向這個網址。沒填的話走 demo 模式只顯示成功訊息 |

目前 `.env.local` 已經填好現有的 Google Form 短網址。

## Build & Production 測試

```bash
npm run build   # 編譯成 production bundle
npm run start   # 跑 production server，預設 port 3000
```

## 部署到 Vercel

1. **使用者先看過本地版本沒問題**才 deploy
2. 在 Vercel dashboard 連這個資料夾的 git remote（或用 `vercel --prod` CLI）
3. 把 `NEXT_PUBLIC_GOOGLE_FORM_URL` 加到 Vercel **Environment Variables**
4. Deploy

## 設計來源

`Landing Page v2.html` 由 Claude Design (claude.ai/design) 匯出，原始 HTML/CSS 在 `~/Desktop/新聞銷售官網/project/` 還可以對照。

策略是保留原始 CSS 不重寫成 Tailwind，把 HTML 轉成 React component 並抽出 4 個互動單元（數字計數、縣市選擇、表單、平滑捲動）。確保 pixel-perfect 一致。

## 版本

- v1.1.0 — 2026-05-27 新增「報導用途」section（3 張 card 展示「一篇報導三種用法」）+ nav 加入連結 + 後續 section 編號遞延
- v1.0.1 — 2026-05-26 統計數字更新（合作店家 300、刊登報導 500+、月閱讀 100K+）
- v1.0.0 — 2026-05-26 初版（Landing Page v2 設計）
