import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "臺灣人新聞網｜在地店家媒體合作・把 Google 好評變成新聞報導",
  description:
    "把您 Google 上的真實好評，編輯成一篇刊登於臺灣人新聞網的專業新聞報導。SEO 長尾流量、AI 摘要引用，全台 22 縣市新聞網任您選擇。",
  metadataBase: new URL("https://twainews-sales.vercel.app"),
  openGraph: {
    title: "臺灣人新聞網｜在地店家媒體合作",
    description:
      "把 Google 真實好評變成一篇正式新聞報導，刊登於 22 縣市新聞網，SEO 長尾流量 + AI 摘要引用。",
    type: "website",
    locale: "zh_TW",
    images: ["/assets/sample-poster-toast-fang.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "臺灣人新聞網｜在地店家媒體合作",
    description:
      "把 Google 真實好評變成一篇正式新聞報導，刊登於 22 縣市新聞網。",
    images: ["/assets/sample-poster-toast-fang.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#104888",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <head>
        {/* Google Fonts — Inter + Noto Sans TC（與原 design HTML 一致，runtime CDN） */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+TC:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Flaticon UICons (icon classes 例如 fi fi-sr-paper-plane) */}
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
