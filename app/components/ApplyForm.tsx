"use client";

import { useState } from "react";

// 22 縣市 — 給 select dropdown 用
const CITIES = [
  "由專員依產業推薦",
  "臺北市",
  "新北市",
  "桃園市",
  "基隆市",
  "新竹市",
  "新竹縣",
  "苗栗縣",
  "台中市",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義市",
  "嘉義縣",
  "台南市",
  "高雄市",
  "屏東縣",
  "宜蘭縣",
  "花蓮縣",
  "台東縣",
  "澎湖縣",
  "金門縣",
  "連江縣",
];

/**
 * 申請表單
 * - 等使用者在 .env.local 設定 NEXT_PUBLIC_GOOGLE_FORM_URL 後，送出會開新分頁導向 Google Form
 * - 未設定時走 demo 模式，純顯示成功訊息（與原 design 一致）
 */
export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
    if (formUrl) {
      // 開新分頁導向 Google Form 完成正式提交
      window.open(formUrl, "_blank", "noopener,noreferrer");
    }

    // 捲動到成功訊息位置
    requestAnimationFrame(() => {
      const ok = document.getElementById("applyOk");
      if (!ok) return;
      const top = ok.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  if (submitted) {
    return (
      <div id="applyOk" className="apply__ok">
        <i className="fi fi-sr-check-circle"></i>
        <div>
          <strong>已收到您的申請！</strong>
          <p>專員將於 24 小時內主動聯繫您；準備好 Google 商家連結會更快。</p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="apply__form"
      id="applyForm"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="apply__field">
        <label htmlFor="storeName">
          店名 <span className="req">*</span>
        </label>
        <input
          className="input"
          id="storeName"
          name="storeName"
          required
          placeholder="例：吐司坊"
        />
      </div>
      <div className="apply__field">
        <label htmlFor="phone">
          電話 <span className="req">*</span>
        </label>
        <input
          className="input"
          id="phone"
          name="phone"
          required
          placeholder="例：09XX-XXX-XXX"
        />
      </div>
      <div className="apply__field">
        <label htmlFor="fb">FB 粉專 / IG（選填）</label>
        <input
          className="input"
          id="fb"
          name="fb"
          placeholder="https://facebook.com/yourstore"
        />
      </div>
      <div className="apply__field">
        <label htmlFor="city">希望刊登縣市</label>
        <select
          className="input"
          id="city"
          name="city"
          defaultValue={CITIES[0]}
        >
          {CITIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="apply__field apply__field--full">
        <label htmlFor="notes">
          補充說明 <span className="opt">（選填）</span>
        </label>
        <textarea
          className="input"
          id="notes"
          name="notes"
          rows={3}
          placeholder="想要的方案、店家簡介、目前最在意什麼……"
        ></textarea>
      </div>
      <div className="apply__submit">
        <p className="apply__note">
          <i className="fi fi-sr-time-fast"></i>
          <b>24 小時內</b>回覆詳細流程
        </p>
        <a href="#" className="apply__alt">
          <i className="fi fi-brands-facebook-messenger"></i>用 Messenger
        </a>
        <button type="submit" className="btn btn--primary btn--lg">
          <i className="fi fi-sr-paper-plane"></i>送出申請
        </button>
      </div>
    </form>
  );
}
