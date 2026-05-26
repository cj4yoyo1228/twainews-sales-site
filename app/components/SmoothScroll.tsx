"use client";

import { useEffect } from "react";

/**
 * 全站平滑捲動：點 a[href^="#"] 時捲到該元素，並預留 72px header 偏移
 * 等同原 design HTML 結尾 <script> 那段邏輯
 */
export function SmoothScroll() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      // 找最近的 <a href="#xxx">
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.length <= 1) return;
      const dest = document.querySelector(href);
      if (!dest) return;

      event.preventDefault();
      const top = dest.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top, behavior: "smooth" });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
