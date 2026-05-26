import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // 關閉 preflight：避免覆蓋 design bundle 既有的 reset（保證 pixel-perfect）
  corePlugins: { preflight: false },
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
