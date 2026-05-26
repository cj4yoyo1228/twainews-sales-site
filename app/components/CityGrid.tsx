"use client";

import { useState } from "react";

interface Region {
  label: string;
  cities: string[];
}

// 22 縣市 — 按地區分組
const REGIONS: Region[] = [
  { label: "北部", cities: ["基隆市", "臺北市", "新北市", "桃園市"] },
  { label: "桃竹苗", cities: ["新竹市", "新竹縣", "苗栗縣"] },
  { label: "中彰投", cities: ["台中市", "彰化縣", "南投縣"] },
  { label: "雲嘉南", cities: ["雲林縣", "嘉義市", "嘉義縣", "台南市"] },
  { label: "高屏", cities: ["高雄市", "屏東縣"] },
  { label: "宜花東", cities: ["宜蘭縣", "花蓮縣", "台東縣"] },
  { label: "離島", cities: ["澎湖縣", "金門縣", "連江縣"] },
];

/**
 * 22 縣市互動 grid — 點擊縣市切換 is-selected
 * 原 design JS：cityButtons.forEach(btn => btn.addEventListener('click', ...))
 */
export function CityGrid() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (city: string) => {
    // 不可變更新 — 建新 Set 而非 mutate
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(city)) next.delete(city);
      else next.add(city);
      return next;
    });
  };

  return (
    <div className="coverage__grid" id="cityGrid">
      {REGIONS.map((region) => (
        <div className="cov-region" key={region.label}>
          <div className="cov-region__hd">
            <span className="cov-region__lbl">{region.label}</span>
            <span className="cov-region__ct">{region.cities.length}</span>
          </div>
          {region.cities.map((city) => (
            <button
              type="button"
              className={`city${selected.has(city) ? " is-selected" : ""}`}
              data-city={city}
              key={city}
              onClick={() => toggle(city)}
            >
              <span className="city__dot"></span>
              {city}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
