"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  target: number;
  durationMs?: number;
  // 觸發比例：元素進入視窗多少 % 才開始跑（0–1）
  threshold?: number;
}

/**
 * 數字進場動畫
 * - 用 IntersectionObserver 等元素進入畫面才開始
 * - ease-out cubic 與原 design JS 一致
 */
export function AnimatedNumber({
  target,
  durationMs = 1400,
  threshold = 0.4,
}: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || animatedRef.current) return;
          animatedRef.current = true;

          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, durationMs, threshold]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}
