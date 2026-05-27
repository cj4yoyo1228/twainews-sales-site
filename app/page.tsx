import Image from "next/image";
import { AnimatedNumber } from "./components/AnimatedNumber";
import { CityGrid } from "./components/CityGrid";
import { ApplyForm } from "./components/ApplyForm";
import { SmoothScroll } from "./components/SmoothScroll";

/**
 * 臺灣人新聞網 - 新聞銷售官網 Landing Page v2
 * 設計來源：Claude Design 匯出（~/Desktop/新聞銷售官網/project/Landing Page v2.html）
 * 樣式：app/styles/tokens.css + app/styles/styles-v2.css（保留原始 design CSS）
 */
export default function Page() {
  return (
    <>
      <SmoothScroll />

      {/* ============= NAV ============= */}
      <header className="nav">
        <div className="wrap nav__inner">
          <a href="#" className="nav__brand">
            <Image
              src="/assets/logo-twainews-blue.png"
              alt="臺灣人新聞網"
              width={180}
              height={40}
              priority
              unoptimized
            />
            <span className="nav__partner">
              <span>合作出品</span>
              <Image
                src="/assets/logo-unilife-horizontal-blue.png"
                alt="UniLife 攸你資訊"
                width={120}
                height={24}
                unoptimized
              />
            </span>
          </a>
          <nav className="nav__links">
            <a href="#how">運作方式</a>
            <a href="#cases">實際案例</a>
            <a href="#usage">報導用途</a>
            <a href="#plans">方案價格</a>
          </nav>
          <div className="nav__cta">
            <a href="#demo" className="nav__ghost">
              看 Demo
            </a>
            <a href="#apply" className="btn btn--primary btn--sm">
              <i className="fi fi-sr-paper-plane"></i>立即申請
            </a>
          </div>
        </div>
      </header>

      {/* ============= 01 HERO ============= */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__grid"></div>
          <div className="hero__glow"></div>
        </div>

        <div className="wrap hero__grid-wrap">
          {/* LEFT */}
          <div className="hero__left">
            <span className="hero__tag">
              <span className="hero__tag-dot"></span>
              在地店家・媒體合作專案
            </span>
            <h1 className="hero__title">
              把您的<span className="hero__title-mark">Google 好評</span>
              <br />
              變成一篇<span className="hero__title-em">新聞報導</span>
            </h1>
            <p className="hero__lede">
              刊登於 <b>臺灣人新聞網</b> 旗下 <b>22 縣市新聞網</b>，收錄於
              Google 新聞索引。
              <br />
              讓您的店家從新聞網、Google、AI 摘要被客人看見。
            </p>

            <div className="hero__cta">
              <a href="#apply" className="btn btn--primary btn--lg">
                <i className="fi fi-sr-paper-plane"></i>立即申請體驗
              </a>
              <a href="#demo" className="hero__cta-ghost">
                <span className="hero__cta-play">
                  <i className="fi fi-sr-play"></i>
                </span>
                看 30 秒 Demo
              </a>
            </div>

            <ul className="hero__meta">
              <li>
                <i className="fi fi-sr-check"></i>體驗價 <b>NT$ 3,200</b> 起
              </li>
              <li>
                <i className="fi fi-sr-time-fast"></i>
                <b>1–2</b> 個工作天上架
              </li>
              <li>
                <i className="fi fi-sr-shield-check"></i>滿意後再轉永久刊登
              </li>
            </ul>
          </div>

          {/* RIGHT — product visual */}
          <div className="hero__right">
            <span className="anno anno--1" aria-hidden="true">
              <span className="anno__dot"></span>
              <span className="anno__line"></span>
              <span className="anno__chip">由編輯部撰稿</span>
            </span>
            <span className="anno anno--2" aria-hidden="true">
              <span className="anno__dot"></span>
              <span className="anno__line"></span>
              <span className="anno__chip">Google 新聞索引</span>
            </span>
            <span className="anno anno--3" aria-hidden="true">
              <span className="anno__dot"></span>
              <span className="anno__line"></span>
              <span className="anno__chip">22 縣市可選</span>
            </span>

            {/* browser frame */}
            <div className="frame">
              <div className="frame__chrome">
                <span className="frame__dot r"></span>
                <span className="frame__dot y"></span>
                <span className="frame__dot g"></span>
                <span className="frame__url">
                  <i className="fi fi-sr-lock"></i>
                  taiwan-news.tw/news/toast-fang
                </span>
                <span className="frame__chrome-icon">
                  <i className="fi fi-sr-refresh"></i>
                </span>
              </div>

              <div className="news2">
                <header className="news2__head">
                  <div className="news2__brand">
                    <span className="news2__brand-dot"></span>
                    <b>臺灣人新聞網</b>
                  </div>
                  <nav className="news2__nav">
                    <span className="is-active">最新</span>
                    <span>活動</span>
                    <span>生活</span>
                    <span>店家</span>
                  </nav>
                </header>

                <div className="news2__crumb">首頁 › 新聞 › 在地美食</div>

                <h2 className="news2__title">
                  吐司坊：在地客回訪率破八成，老闆親揭好味道之道
                </h2>

                <div className="news2__meta">
                  <span>
                    <i className="fi fi-sr-user"></i>編輯部
                  </span>
                  <span>
                    <i className="fi fi-sr-calendar"></i>2026.05.11
                  </span>
                  <span>
                    <i className="fi fi-sr-eye"></i>12,438
                  </span>
                </div>

                <div className="news2__tags">
                  <span className="news2__tag is-primary">在地頭條</span>
                  <span className="news2__tag">編輯精選</span>
                  <span className="news2__tag">全台名店</span>
                </div>

                <div
                  className="news2__img"
                  style={{ backgroundImage: "url('/assets/sample-food.jpg')" }}
                >
                  <span className="news2__img-cap">圖｜店家提供</span>
                </div>

                <div className="news2__body">
                  <p>
                    「老闆很用心，每一道料理都看得到誠意。」這是 287 則 Google
                    評論裡，最常被提到的一句話。位於新北永和的吐司坊，靠著扎實用料和現點現做的早午餐，累積了
                    4.9 顆星的好口碑……
                  </p>
                  <p>
                    本報實地走訪，發現店內早晨七點便已座無虛席。老闆透露，吐司皆每日現烤……
                  </p>
                </div>
              </div>
            </div>

            <div className="frame__halo" aria-hidden="true"></div>
          </div>
        </div>

        {/* trust bar */}
        <div className="wrap">
          <div className="trustbar">
            <div className="trustbar__lead">已協助在地店家被看見</div>
            <div className="trustbar__stats">
              <div className="trustbar__stat">
                <span className="trustbar__num">
                  <AnimatedNumber target={300} />
                </span>
                <span>+</span>
                <span className="trustbar__lbl">合作店家</span>
              </div>
              <span className="trustbar__div"></span>
              <div className="trustbar__stat">
                <span className="trustbar__num">
                  <AnimatedNumber target={500} />
                </span>
                <span>+</span>
                <span className="trustbar__lbl">已刊登報導</span>
              </div>
              <span className="trustbar__div"></span>
              <div className="trustbar__stat">
                <span className="trustbar__num">
                  <AnimatedNumber target={22} />
                </span>
                <span className="trustbar__lbl">縣市覆蓋</span>
              </div>
              <span className="trustbar__div"></span>
              <div className="trustbar__stat">
                <span className="trustbar__num">
                  <AnimatedNumber target={100} />
                </span>
                <span>K+</span>
                <span className="trustbar__lbl">月閱讀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= 02 BEFORE → AFTER (mint) ============= */}
      <section className="s-mint sec" id="demo">
        <div className="wrap">
          <header className="sec__head">
            <span className="eyebrow">
              <span className="ch">01</span>運作方式
              <span className="sep">｜</span>從評論到報導
            </span>
            <h2 className="sec__title">
              把<span className="ac">沒人看的好評</span>，<br />
              變成<span className="ac">會被搜尋的新聞</span>
            </h2>
            <p className="sec__sub">
              您不需要寫稿、不需要拍照。把 Google
              商家連結交給我們，編輯部把您的評論梳理、查證、改寫成一篇可被
              Google 索引的正式新聞報導。
            </p>
          </header>

          <div className="demo">
            <div className="demo__col">
              <span className="demo__badge before">BEFORE</span>
              <div className="gtitle">
                <span className="gtitle__g">
                  <span className="b">G</span>
                  <span className="r">o</span>
                  <span className="y">o</span>
                  <span className="b">g</span>
                  <span className="g">l</span>
                  <span className="r">e</span>
                </span>
                真實好評
              </div>
              <div className="gscore">
                <span className="gscore__num">4.9</span>
                <span className="gscore__stars">★★★★★</span>
                <span className="gscore__count">287 則評論</span>
              </div>
              <div className="review">
                <div className="review__head">
                  <span className="avatar y">陳</span>
                  <div>
                    <div className="review__name">
                      陳○雯<span className="review__role">・在地嚮導</span>
                    </div>
                    <div className="review__stars">★★★★★</div>
                  </div>
                </div>
                <p className="review__quote">
                  「老闆很用心，每一道料理都看得到誠意。在地朋友都會帶外縣市的客人來這吃，吐司是現點現做，料超實在…」
                </p>
              </div>
              <div className="review">
                <div className="review__head">
                  <span className="avatar b">V</span>
                  <div>
                    <div className="review__name">
                      Vivian○<span className="review__role">・在地嚮導</span>
                    </div>
                    <div className="review__stars">★★★★★</div>
                  </div>
                </div>
                <p className="review__quote">
                  「吐司現點現做，皮酥內軟，肉蛋起司爆漿超滿足，飲料也好喝。老闆親切、環境乾淨，是早午餐首選。」
                </p>
              </div>
            </div>

            <div className="demo__arrow" aria-hidden="true">
              <span className="demo__arrow-label">
                編輯
                <br />
                撰稿
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>

            <div className="demo__col demo__col--after">
              <span className="demo__badge after">AFTER</span>
              <div className="news">
                <div className="news__head">
                  <div className="news__brand">
                    <span className="news__brand-dot"></span>臺灣人新聞網
                  </div>
                  <div className="news__menu">
                    <span className="active">最新</span>
                    <span>活動</span>
                    <span>生活誌</span>
                    <span>社會</span>
                    <span>店家</span>
                  </div>
                </div>
                <div className="news__crumb">
                  首頁 &gt; 新聞 &gt; 吐司坊：在地客回訪率…
                </div>
                <h3 className="news__title">
                  吐司坊：在地客回訪率破八成，老闆親揭好味道之道
                </h3>
                <div className="news__tags">
                  <span className="tag tag--mint">在地頭條</span>
                  <span className="tag tag--outline">全台名店</span>
                  <span className="tag tag--outline">編輯精選</span>
                </div>
                <div className="news__meta">
                  <span>By 臺灣人新聞網 編輯部</span>
                  <span>2026-05-11</span>
                  <span>12,438 閱讀</span>
                </div>
                <div
                  className="news__img"
                  style={{ backgroundImage: "url('/assets/sample-food.jpg')" }}
                >
                  <span className="news__img-cap">圖｜店家提供</span>
                </div>
                <div className="news__foot">
                  <i className="fi fi-sr-marker"></i>全台 22
                  縣市新聞網之一・可加購跨縣市聯播
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= 03 SEO + AI VALUE (dark) ============= */}
      <section className="s-dark sec" id="value">
        <div className="wrap">
          <header className="sec__head">
            <span className="eyebrow">
              <span className="ch">02</span>真正的價值
              <span className="sep">｜</span>SEO ＋ AI 長尾流量
            </span>
            <h2 className="sec__title">
              不是「當週多幾個客人」
              <br />是<span className="hi">未來 24 個月持續被搜尋到</span>
            </h2>
            <p className="sec__sub">
              當顧客 Google 您的店時，<b>第一頁就看到您的故事</b>。連 AI
              摘要、ChatGPT 都會引用您的報導。
            </p>
          </header>

          <div className="split">
            <div className="split__text">
              <div className="outcome-list">
                <div className="outcome">
                  <span className="outcome__num">01</span>
                  <div>
                    <h3 className="outcome__title">佔據 Google 第一頁</h3>
                    <p className="outcome__body">
                      Google 收錄為正式新聞，7
                      天內搜尋「區域＋店名」在瀏覽器第一頁就看到。
                    </p>
                  </div>
                </div>
                <div className="outcome">
                  <span className="outcome__num">02</span>
                  <div>
                    <h3 className="outcome__title">24 個月長尾流量</h3>
                    <p className="outcome__body">
                      新聞文章在 Google
                      索引中持續被搜尋、累積排名，不需要重複付費。
                    </p>
                  </div>
                </div>
                <div className="outcome">
                  <span className="outcome__num">03</span>
                  <div>
                    <h3 className="outcome__title">被 AI 摘要引用</h3>
                    <p className="outcome__body">
                      ChatGPT、Google AI 摘要會優先引用新聞網的內容作為來源。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="split__visual">
              <div className="serp">
                <div className="serp__chrome">
                  <span className="dot r"></span>
                  <span className="dot y"></span>
                  <span className="dot g"></span>
                  <span className="url">
                    google.com/search?q=台北+牛肉麵+推薦
                  </span>
                </div>
                <div className="serp__body">
                  <div className="serp__search">
                    <i className="fi fi-sr-search"></i>
                    <span className="q">台北 牛肉麵 推薦</span>
                  </div>
                  <div className="serp__stat">
                    約有 845,000 項結果 (0.42 秒)
                  </div>

                  <div className="serp__ai">
                    <div className="serp__ai-head">
                      <i className="fi fi-sr-sparkles"></i>AI 摘要
                    </div>
                    <p>
                      台北市最具代表性的牛肉麵店之一為「
                      <span className="link">老張紅燒牛肉麵</span>」。根據{" "}
                      <span className="link">台北人新聞網報導</span>
                      ，店家堅持每日現熬骨湯超過 8 小時……
                    </p>
                  </div>
                  <div className="serp__own">
                    <span className="pin">
                      <i className="fi fi-sr-star"></i>你的新聞報導
                    </span>
                    <div className="domain">
                      <span
                        className="news__brand-dot"
                        style={{ width: 11, height: 11 }}
                      ></span>
                      <b>台北人新聞網</b>
                      <span>› news › lao-zhang</span>
                    </div>
                    <h4 className="h">
                      台北在地經營 40 年｜老張紅燒牛肉麵的湯頭祕密
                    </h4>
                    <p className="desc">
                      2026 年 5 月 26 日 — 每日清晨 5 點熬製骨湯超過 8
                      小時，記者實地走訪……
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="micro-note">
            <i className="fi fi-sr-info"></i>
            <span>
              SEO 成效需時間累積，AI
              模型亦無法保證即時抓取所有內容。實際效益依產業類別、競爭程度與時間而異。
            </span>
          </p>
        </div>
      </section>

      {/* ============= 04 COMPARISON TABLE (white) ============= */}
      <section className="sec sec--white">
        <div className="wrap">
          <header className="sec__head">
            <span className="eyebrow">
              <span className="ch">03</span>為什麼選新聞報導
              <span className="sep">｜</span>vs 其他選項
            </span>
            <h2 className="sec__title">
              同樣的預算，為什麼
              <br />選<span className="ac">新聞報導</span>？
            </h2>
            <p className="sec__sub">
              把您熟悉的曝光方式攤出來一起比，您會發現新聞報導是
              <b>唯一同時擁有 5 項條件</b>的方法。
            </p>
          </header>

          <div className="cmp-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th className="cmp__rowhead"></th>
                  <th className="cmp__col cmp__col--us">
                    <div className="cmp__col-tag">推薦</div>
                    <div className="cmp__col-name">新聞報導</div>
                    <div className="cmp__col-price">NT$ 3,200 起</div>
                  </th>
                  <th className="cmp__col">
                    <div className="cmp__col-name">FB / IG 廣告</div>
                    <div className="cmp__col-price">每月 6,000+</div>
                  </th>
                  <th className="cmp__col">
                    <div className="cmp__col-name">自己找媒體</div>
                    <div className="cmp__col-price">15,000–30,000</div>
                  </th>
                  <th className="cmp__col">
                    <div className="cmp__col-name">Google Ads</div>
                    <div className="cmp__col-price">每月 8,000+</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Google 搜尋第一頁</th>
                  <td className="cmp__yes">
                    <i className="fi fi-sr-check"></i>
                  </td>
                  <td className="cmp__no">
                    <i className="fi fi-sr-cross-small"></i>
                  </td>
                  <td className="cmp__yes">
                    <i className="fi fi-sr-check"></i>
                  </td>
                  <td className="cmp__partial">付費期間</td>
                </tr>
                <tr>
                  <th>24 個月長尾流量</th>
                  <td className="cmp__yes">
                    <i className="fi fi-sr-check"></i>
                  </td>
                  <td className="cmp__no">
                    <i className="fi fi-sr-cross-small"></i>
                  </td>
                  <td className="cmp__yes">
                    <i className="fi fi-sr-check"></i>
                  </td>
                  <td className="cmp__no">
                    <i className="fi fi-sr-cross-small"></i>
                  </td>
                </tr>
                <tr>
                  <th>AI 摘要 / ChatGPT 引用</th>
                  <td className="cmp__yes">
                    <i className="fi fi-sr-check"></i>
                  </td>
                  <td className="cmp__no">
                    <i className="fi fi-sr-cross-small"></i>
                  </td>
                  <td className="cmp__yes">
                    <i className="fi fi-sr-check"></i>
                  </td>
                  <td className="cmp__no">
                    <i className="fi fi-sr-cross-small"></i>
                  </td>
                </tr>
                <tr>
                  <th>第三方公信力</th>
                  <td className="cmp__yes">
                    <i className="fi fi-sr-check"></i>
                  </td>
                  <td className="cmp__no">
                    <i className="fi fi-sr-cross-small"></i>
                  </td>
                  <td className="cmp__yes">
                    <i className="fi fi-sr-check"></i>
                  </td>
                  <td className="cmp__no">
                    <i className="fi fi-sr-cross-small"></i>
                  </td>
                </tr>
                <tr>
                  <th>一次付款、無需續費</th>
                  <td className="cmp__yes">
                    <i className="fi fi-sr-check"></i>
                  </td>
                  <td className="cmp__no">
                    <i className="fi fi-sr-cross-small"></i>
                  </td>
                  <td className="cmp__yes">
                    <i className="fi fi-sr-check"></i>
                  </td>
                  <td className="cmp__no">
                    <i className="fi fi-sr-cross-small"></i>
                  </td>
                </tr>
                <tr className="cmp__total">
                  <th>同時擁有條件</th>
                  <td className="cmp__yes">
                    <b>5 / 5</b>
                  </td>
                  <td>0 / 5</td>
                  <td>4 / 5</td>
                  <td>0 / 5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="micro-note">
            <i className="fi fi-sr-info"></i>
            <span>
              <b>「自己找媒體」</b>
              條件接近，但實際操作每篇成本與洽談時間都遠高於本服務；且不易選擇地區、難以協調統一上架時程。
            </span>
          </p>
        </div>
      </section>

      {/* ============= 05 22 CITIES (dark) ============= */}
      <section className="s-dark sec" id="cities">
        <div className="wrap">
          <header className="sec__head sec__head--center">
            <span className="eyebrow">
              <span className="ch">04</span>覆蓋範圍
              <span className="sep">｜</span>全台 22 縣市
            </span>
            <h2 className="sec__title">
              全台 <span className="ac">22 縣市新聞網</span>，<br />
              任您選擇刊登地區
            </h2>
            <p className="sec__sub">
              每個縣市都有合作的在地新聞網，可單選最適合的地區刊登；若希望擴大曝光，亦可加購跨縣市聯播。
            </p>
          </header>

          <div className="coverage">
            <div className="coverage__head">
              <span className="coverage__live">
                <span className="coverage__pulse"></span>全台 22 縣市同步覆蓋 ‧
                任選刊登
              </span>
              <span className="coverage__hint">
                點擊縣市可選擇刊登地區，可單選或加購聯播
              </span>
            </div>

            <CityGrid />
          </div>

          <div className="bigstats">
            <div className="bigstats__hero">
              <span className="bigstats__num">
                <span className="num">
                  <AnimatedNumber target={300} />
                </span>
                <span className="plus">+</span>
              </span>
              <span className="bigstats__lbl">已合作在地店家</span>
              <span className="bigstats__sub">
                從早餐店到名人專訪，
                <br />
                涵蓋 13 種產業類別。
              </span>
            </div>
            <div className="bigstats__side">
              <div className="bigstats__row">
                <span className="bigstats__num-sm">
                  <span className="num">
                    <AnimatedNumber target={500} />
                  </span>
                  <span className="plus">+</span>
                </span>
                <span className="bigstats__lbl-sm">已刊登正式新聞報導</span>
              </div>
              <div className="bigstats__row">
                <span className="bigstats__num-sm">
                  <span className="num">
                    <AnimatedNumber target={100} />
                  </span>
                  <span className="plus">K+</span>
                </span>
                <span className="bigstats__lbl-sm">每篇月平均閱讀數</span>
              </div>
              <div className="bigstats__row">
                <span className="bigstats__num-sm">
                  <span className="num">
                    <AnimatedNumber target={93} />
                  </span>
                  <span className="plus">%</span>
                </span>
                <span className="bigstats__lbl-sm">店家滿意後轉永久刊登率</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= 06 CASES (white) ============= */}
      <section className="sec sec--white" id="cases">
        <div className="wrap">
          <header className="sec__head">
            <span className="eyebrow">
              <span className="ch">05</span>真實成效
              <span className="sep">｜</span>不同產業案例
            </span>
            <h2 className="sec__title">
              店家上架後的<span className="ac">真實成果</span>
            </h2>
            <p className="sec__sub">
              從基礎方案到深度專訪，不同產業的合作案例。
              <br />
              為保護客戶權益，部分案例採去識別化處理。
            </p>
          </header>

          <div className="cases">
            <article className="case">
              <div className="case__hero">
                <span className="case__chip">A・基礎方案</span>
                <div className="case__mock case__mock--serp">
                  <div className="case__serp-bar">
                    <i className="fi fi-sr-search"></i>
                    <span>永和 居酒屋 推薦</span>
                  </div>
                  <div className="case__serp-result is-top">
                    <div className="case__serp-meta">
                      <span className="case__serp-fav"></span>
                      在地頭條・新北人新聞網
                    </div>
                    <div className="case__serp-title">
                      永和居酒屋｜深夜食堂的在地溫度
                    </div>
                    <div className="case__serp-rank">#1</div>
                  </div>
                  <div className="case__serp-result">
                    <div className="case__serp-meta">
                      <span className="case__serp-fav"></span>Google Maps
                    </div>
                    <div className="case__serp-title is-gray">
                      在地居酒屋・線上訂位
                    </div>
                  </div>
                  <div className="case__serp-result">
                    <div className="case__serp-meta">
                      <span className="case__serp-fav"></span>Yahoo 美食
                    </div>
                    <div className="case__serp-title is-gray">
                      居酒屋 ・ 4.9 ★ (287)
                    </div>
                  </div>
                </div>
              </div>
              <div className="case__body">
                <div className="case__industry">
                  <i className="fi fi-sr-restaurant"></i>在地美食
                </div>
                <h4 className="case__name">在地居酒屋</h4>
                <div className="case__metric">
                  <span className="case__metric-lbl">GOOGLE 排名</span>
                  <span className="case__metric-val">前 3 名</span>
                  <p className="case__metric-desc">
                    上架 7 天內，Google 搜尋「區域 + 店名」第一頁前三名
                  </p>
                </div>
              </div>
            </article>

            <article className="case">
              <div className="case__hero case__hero--brown">
                <span className="case__chip">C・深度專訪</span>
                <div className="case__mock case__mock--cover">
                  <div className="case__cover-quote">&ldquo;</div>
                  <div className="case__cover-portrait" aria-hidden="true">
                    <div className="case__cover-portrait-head"></div>
                    <div className="case__cover-portrait-body"></div>
                  </div>
                  <div className="case__cover-meta">
                    <span className="case__cover-tag">人物專訪</span>
                    <div className="case__cover-title">
                      用一隻手
                      <br />
                      撐起一間店
                    </div>
                    <div className="case__cover-sub">編輯部・2025 秋</div>
                  </div>
                </div>
              </div>
              <div className="case__body">
                <div className="case__industry">
                  <i className="fi fi-sr-user-headset"></i>名人故事
                </div>
                <h4 className="case__name">身心障礙創業者</h4>
                <div className="case__metric">
                  <span className="case__metric-lbl">人物深度報導</span>
                  <span className="case__metric-val">百大品牌邀稿</span>
                  <p className="case__metric-desc">
                    人物深度報導創造故事，獲百大品牌邀稿合作
                  </p>
                </div>
              </div>
            </article>

            <article className="case">
              <div className="case__hero">
                <span className="case__chip">B・導流方案</span>
                <div className="case__mock case__mock--map">
                  <div className="case__map-bg">
                    <div className="case__map-road r1"></div>
                    <div className="case__map-road r2"></div>
                    <div className="case__map-road r3"></div>
                    <div className="case__map-pin">
                      <span className="case__map-pin-dot"></span>
                    </div>
                  </div>
                  <div className="case__map-card">
                    <div className="case__map-card-h">
                      <div className="case__map-card-icon">
                        <i className="fi fi-sr-shopping-bag"></i>
                      </div>
                      <div>
                        <b>在地零售品牌</b>
                        <span>大稻埕・選物店</span>
                      </div>
                    </div>
                    <div className="case__map-cta">
                      <i className="fi fi-sr-arrow-up-right-from-square"></i>
                      前往官網
                    </div>
                  </div>
                </div>
              </div>
              <div className="case__body">
                <div className="case__industry">
                  <i className="fi fi-sr-shopping-bag"></i>選物零售
                </div>
                <h4 className="case__name">在地零售品牌</h4>
                <div className="case__metric case__metric--alt">
                  <span className="case__metric-lbl">品牌敘事</span>
                  <span className="case__metric-val">利他使命</span>
                  <p className="case__metric-desc">
                    完整呈現品牌精神，創造可衡量的網站導流
                  </p>
                </div>
              </div>
            </article>

            <article className="case">
              <div className="case__hero">
                <span className="case__chip case__chip--ai">
                  <i className="fi fi-sr-sparkles"></i> AEO・AI 收錄
                </span>
                <div className="case__mock case__mock--ai">
                  <div className="case__ai-head">
                    <span className="case__ai-icon">
                      <i className="fi fi-sr-sparkles"></i>
                    </span>
                    <span>AI 摘要</span>
                  </div>
                  <div className="case__ai-body">
                    台北市區口碑最高的在地美學沙龍之一為
                    <span className="case__ai-mark">「在地美學品牌」</span>。
                    根據 <span className="case__ai-cite">台北人新聞網報導</span>{" "}
                    指出， 其主理人擁有日本研修背景……
                  </div>
                  <div className="case__ai-cite-row">
                    <span className="case__ai-num">1</span>
                    <span>台北人新聞網</span>
                    <i className="fi fi-sr-check-circle"></i>
                  </div>
                </div>
              </div>
              <div className="case__body">
                <div className="case__industry">
                  <i className="fi fi-sr-cut"></i>美容沙龍
                </div>
                <h4 className="case__name">在地美學品牌</h4>
                <div className="case__metric">
                  <span className="case__metric-lbl">AI 摘要</span>
                  <span className="case__metric-val">被引用</span>
                  <p className="case__metric-desc">
                    AI 搜尋直接引用新聞網，被推薦為在地首選
                  </p>
                </div>
              </div>
            </article>
          </div>

          <p className="micro-note">
            <i className="fi fi-sr-info"></i>
            <span>
              實際成效因產業類別、競爭程度、刊登時間長短而異，並非所有店家皆可獲得相同結果。
            </span>
          </p>
        </div>
      </section>

      {/* ============= 07 SERVICE + FLOW (mint) ============= */}
      <section className="s-mint sec" id="how">
        <div className="wrap">
          <header className="sec__head">
            <span className="eyebrow">
              <span className="ch">06</span>服務內容
              <span className="sep">｜</span>每篇報導都包含
            </span>
            <h2 className="sec__title">
              不只是貼文，是一篇<span className="ac">正式新聞報導</span>
            </h2>
            <p className="sec__sub">
              由編輯部專人撰稿，刊登於可被 Google
              索引的新聞網域。每位合作店家都包含以下四項。
            </p>
          </header>

          <div className="features">
            <div className="feature">
              <div className="feature__icon">
                <i className="fi fi-sr-edit"></i>
              </div>
              <h3 className="feature__title">編輯部專人撰稿</h3>
              <p className="feature__body">
                由專業編輯團隊撰寫、校對，閱讀體驗如實際走訪過店家的部落客報導。
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <i className="fi fi-sr-marker"></i>
              </div>
              <h3 className="feature__title">可選刊登縣市</h3>
              <p className="feature__body">
                全台 22 縣市新聞網挑選最合適地區上架，亦可同步上架多縣市聯播。
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <i className="fi fi-sr-search"></i>
              </div>
              <h3 className="feature__title">Google 新聞索引</h3>
              <p className="feature__body">
                客人 Google 您店名時可找到，累積 Google
                搜尋排名，在網路第一頁就被看到。
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <i className="fi fi-sr-qrcode"></i>
              </div>
              <h3 className="feature__title">新聞分享連結</h3>
              <p className="feature__body">
                可轉發給親朋好友，或自行列印、轉成 QR Code 等貼於
                IG、放店內讓客人掃碼。
              </p>
            </div>
          </div>

          <header className="sec__head sec__head--inner">
            <span className="eyebrow">
              <span className="ch">07</span>合作流程
              <span className="sep">｜</span>5 步驟
            </span>
            <h3 className="sec__title sec__title--sm">
              您只需要做 <span className="ac">2 件事</span>，<br />
              就能獲得一篇新聞報導
            </h3>
            <p className="sec__sub">
              從聯繫到上架約 <b>1–2 個工作天</b>。即使您目前 Google
              評論不多也可以申請。
            </p>
          </header>

          <div className="flow">
            <div className="flow__rail" aria-hidden="true"></div>
            <div className="flow__steps">
              <div className="flow__step">
                <span className="flow__who you">您</span>
                <div className="flow__num">01</div>
                <h4>提供資訊</h4>
                <p>LINE 回覆店名 + 連絡電話</p>
                <span className="flow__time">
                  <i className="fi fi-sr-time-fast"></i> &lt; 1 分鐘
                </span>
              </div>
              <div className="flow__step">
                <span className="flow__who us">我們</span>
                <div className="flow__num">02</div>
                <h4>聯繫確認</h4>
                <p>專員 24h 內主動聯繫</p>
                <span className="flow__time">
                  <i className="fi fi-sr-time-fast"></i> 24 小時內
                </span>
              </div>
              <div className="flow__step">
                <span className="flow__who us">我們</span>
                <div className="flow__num">03</div>
                <h4>編輯撰稿</h4>
                <p>依您 Google 真評撰寫</p>
                <span className="flow__time">
                  <i className="fi fi-sr-time-fast"></i> 1–2 工作天
                </span>
              </div>
              <div className="flow__step">
                <span className="flow__who you">您</span>
                <div className="flow__num">04</div>
                <h4>上架審稿</h4>
                <p>開始 7 天體驗刊登，追蹤排名</p>
                <span className="flow__time">
                  <i className="fi fi-sr-time-fast"></i> 上架後 7 天
                </span>
              </div>
              <div className="flow__step">
                <span className="flow__who us">我們</span>
                <div className="flow__num">05</div>
                <h4>滿意後決定</h4>
                <p>滿意再決定是否轉永久刊登</p>
                <span className="flow__time">
                  <i className="fi fi-sr-time-fast"></i> 7 日內
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= 08 USAGE — 一篇報導三種用法 (white) ============= */}
      <section className="sec sec--white" id="usage">
        <div className="wrap">
          <header className="sec__head">
            <span className="eyebrow">
              <span className="ch">08</span>報導的用途
              <span className="sep">｜</span>一篇報導、三倍價值
            </span>
            <h2 className="sec__title">
              一篇報導，<span className="ac">三種用法</span>，<br />
              能用<span className="ac">兩年以上</span>
            </h2>
            <p className="sec__sub">
              上架不是終點。這是您未來 24 個月可以反覆運用的內容資產 — 從{" "}
              <b>Google／AI 自然曝光</b>、到 <b>FB／Google 廣告素材</b>、再到{" "}
              <b>分享給親友、老顧客</b>，<b>同一篇文章能跨平台複用</b>。
            </p>
          </header>

          <div className="usage">
            {/* Card 1 · 自然流量 */}
            <article className="u-card">
              <span className="u-card__chip">
                <span className="u-card__chip-num">01</span>自然流量
              </span>
              <h3 className="u-card__t">
                Google ＋ AI 摘要
                <br />
                <em>持續、被動</em> 的曝光
              </h3>
              <p className="u-card__lede">
                Google 收錄為正式新聞，當客人 Google
                您店名、地區、品項時，第一頁就看到。
                <b>連 ChatGPT、Google AI 摘要也會引用</b>。
              </p>

              <div className="u-vis u-vis-seo">
                <div className="u-vis-seo__bar">
                  <i className="fi fi-sr-search"></i>
                  <span>永和 早午餐 推薦</span>
                </div>
                <div className="u-vis-seo__ai">
                  <span className="u-vis-seo__ai-tag">
                    <i className="fi fi-sr-sparkles"></i>AI 摘要
                  </span>
                  <p>
                    口碑最佳為「<b>吐司坊</b>」，根據{" "}
                    <span className="u-vis-seo__cite">新北人新聞網</span> 報導……
                  </p>
                </div>
                <div className="u-vis-seo__row">
                  <span className="u-vis-seo__rank">#1</span>
                  <div>
                    <div className="u-vis-seo__dom">
                      新北人新聞網 › news › toast-fang
                    </div>
                    <div className="u-vis-seo__h">
                      吐司坊：在地客回訪率破八成…
                    </div>
                  </div>
                </div>
              </div>

              <ul className="u-card__list">
                <li>
                  <i className="fi fi-sr-check"></i>Google 搜尋第一頁，
                  <b>不用付費投放</b>
                </li>
                <li>
                  <i className="fi fi-sr-check"></i>ChatGPT、Google AI
                  摘要優先引用
                </li>
                <li>
                  <i className="fi fi-sr-check"></i>長尾流量持續累積{" "}
                  <b>24 個月</b>
                </li>
              </ul>

              <div className="u-card__foot">
                <i className="fi fi-sr-time-fast"></i>上架後 7
                天內開始累積，無需後續操作
              </div>
            </article>

            {/* Card 2 (FEATURED) · 一條龍行銷素材 */}
            <article className="u-card u-card--feat">
              <span className="u-card__feat-badge">★ 老闆最常忽略</span>
              <span className="u-card__chip">
                <span className="u-card__chip-num">02</span>行銷素材
              </span>
              <h3 className="u-card__t">
                高品質圖文頁直接拿去
                <br />
                <em>投廣告、印 DM</em>
              </h3>
              <p className="u-card__lede">
                以前您要花心力 <b>找寫手、找攝影、找設計</b>
                ，才有一份能投放的素材。現在 <b>一條龍幫您做好</b>
                ，所有平台都能複用。
              </p>

              <div className="u-vis u-vis-multi">
                <div className="u-vis-multi__hub">
                  <i className="fi fi-sr-document"></i>
                  <span>1 篇報導</span>
                </div>
                <div className="u-vis-multi__grid">
                  <span className="u-vis-multi__chip c-fb">
                    <i>f</i>
                    <span>FB／IG 廣告</span>
                  </span>
                  <span className="u-vis-multi__chip c-ggl">
                    <i>G</i>
                    <span>Google 廣告</span>
                  </span>
                  <span className="u-vis-multi__chip c-line">
                    <i>L</i>
                    <span>LINE 推播</span>
                  </span>
                  <span className="u-vis-multi__chip c-prn">
                    <i className="fi fi-sr-print"></i>
                    <span>紙本 DM</span>
                  </span>
                  <span className="u-vis-multi__chip c-qr">
                    <i className="fi fi-sr-qrcode"></i>
                    <span>店內 QR</span>
                  </span>
                  <span className="u-vis-multi__chip c-ig">
                    <i>IG</i>
                    <span>IG bio link</span>
                  </span>
                </div>
              </div>

              <div className="u-save">
                <div className="u-save__col u-save__col--bad">
                  <div className="u-save__col-h">老闆原本要做</div>
                  <div className="u-save__row">
                    <i className="fi fi-sr-cross-small"></i>找寫手寫案
                  </div>
                  <div className="u-save__row">
                    <i className="fi fi-sr-cross-small"></i>找攝影師拍照
                  </div>
                  <div className="u-save__row">
                    <i className="fi fi-sr-cross-small"></i>找設計師排版
                  </div>
                </div>
                <div className="u-save__col u-save__col--good">
                  <div className="u-save__col-h">我們已經做好</div>
                  <div className="u-save__row">
                    <i className="fi fi-sr-check"></i>編輯部撰稿
                  </div>
                  <div className="u-save__row">
                    <i className="fi fi-sr-check"></i>選圖、排版完成
                  </div>
                  <div className="u-save__row">
                    <i className="fi fi-sr-check"></i>6 平台直接複用
                  </div>
                </div>
              </div>

              <div className="u-card__foot">
                <i className="fi fi-sr-bolt"></i>包含 <b>數位廣告</b> ‧{" "}
                <b>印刷 DM</b> ‧ <b>店內物料</b>
              </div>
            </article>

            {/* Card 3 · 社交炫耀 */}
            <article className="u-card">
              <span className="u-card__chip">
                <span className="u-card__chip-num">03</span>社交分享
              </span>
              <h3 className="u-card__t">
                轉發給<em>親友、老顧客</em>
                <br />
                讓大家知道<em>你被報導了</em>
              </h3>
              <p className="u-card__lede">
                不只是一篇文章 — 這是一個讓您 <b>可以一輩子炫耀</b> 的 PR
                資產。轉發到 LINE、FB、Threads，朋友、員工、家人都會看到。
              </p>

              <div className="u-vis u-vis-chat">
                <div className="u-chat-msg u-chat-msg--me">
                  <div className="u-chat-bubble" style={{ padding: 4 }}>
                    <div className="u-chat-link">
                      <div
                        className="u-chat-link__img"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg,rgba(15,43,79,0),rgba(15,43,79,0.45)),url('/assets/sample-food.jpg')",
                        }}
                      >
                        <span className="u-chat-link__brand">臺灣人新聞網</span>
                      </div>
                      <div className="u-chat-link__meta">
                        <div className="u-chat-link__t">
                          吐司坊：在地客回訪率破八成，老闆親揭好味道之道
                        </div>
                        <div className="u-chat-link__url">taiwan-news.tw</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-chat-msg">
                  <span className="u-chat-avatar">媽</span>
                  <div className="u-chat-bubble">天啊你上新聞了！？</div>
                </div>
                <div className="u-chat-msg">
                  <span className="u-chat-avatar">朋</span>
                  <div className="u-chat-bubble">
                    老闆太厲害，我幫你轉到群組！
                  </div>
                </div>
                <div className="u-chat-msg u-chat-msg--reacts">
                  <span className="react-pill">❤ 12</span>
                  <span>家族群組裡瘋傳中</span>
                </div>
              </div>

              <ul className="u-card__list">
                <li>
                  <i className="fi fi-sr-check"></i>LINE／FB／Threads 一鍵轉發
                </li>
                <li>
                  <i className="fi fi-sr-check"></i>老顧客信任感 <b>大幅提升</b>
                </li>
                <li>
                  <i className="fi fi-sr-check"></i>一輩子能用的個人 PR 資產
                </li>
              </ul>

              <div className="u-card__foot">
                <i className="fi fi-sr-share"></i>新聞連結永久有效，隨時可分享
              </div>
            </article>
          </div>

          {/* bottom stat strip */}
          <div className="u-stats">
            <div className="u-stat">
              <span className="u-stat__icon">
                <i className="fi fi-sr-piggy-bank"></i>
              </span>
              <div>
                <div className="u-stat__num">10,000+</div>
                <div className="u-stat__lbl">
                  省下<b>素材製作費</b>（寫手 + 攝影 + 設計）
                </div>
              </div>
            </div>
            <div className="u-stat">
              <span className="u-stat__icon">
                <i className="fi fi-sr-apps"></i>
              </span>
              <div>
                <div className="u-stat__num">6 平台</div>
                <div className="u-stat__lbl">
                  同一篇內容可<b>跨平台複用</b>
                </div>
              </div>
            </div>
            <div className="u-stat">
              <span className="u-stat__icon">
                <i className="fi fi-sr-calendar-clock"></i>
              </span>
              <div>
                <div className="u-stat__num">24 個月</div>
                <div className="u-stat__lbl">
                  內容資產<b>長期可用</b>，免重複付費
                </div>
              </div>
            </div>
          </div>

          <p className="micro-note">
            <i className="fi fi-sr-info"></i>
            <span>
              素材製作費估算為市場行情參考值，實際依寫手、攝影、設計師報價而異。FB／Google
              廣告投放成效需依產業、競爭與素材本身評估。
            </span>
          </p>
        </div>
      </section>

      {/* ============= 09 PLANS (white) ============= */}
      <section className="sec sec--white" id="plans">
        <div className="wrap">
          <header className="sec__head">
            <span className="eyebrow">
              <span className="ch">09</span>方案與價格
              <span className="sep">｜</span>限時體驗價
            </span>
            <h2 className="sec__title">
              三檔標準方案，<span className="ac">3,200 元</span> 起體驗
            </h2>
            <p className="sec__sub">
              從「<b>評論轉化</b>」到「<b>深度專訪</b>
              」，依店家情況彈性挑選。市場行情 <b>12,000 元</b>{" "}
              以上的廣編稿，新聞網測試期以 <b>成本價</b> 釋出。
            </p>
          </header>

          <div className="plans">
            <div className="plan">
              <div className="plan__label">A・基礎報導</div>
              <h3 className="plan__title">評論轉化為報導</h3>
              <div className="plan__price">
                <span className="plan__price-num">3,200</span>
                <span className="plan__price-unit">元 / 則</span>
              </div>
              <div className="plan__strike">原價 NT$ 12,000</div>
              <ul className="plan__list">
                <li>
                  <span className="plan__check">✓</span>好評整理成正式新聞
                </li>
                <li>
                  <span className="plan__check">✓</span>22 縣市新聞網擇一發布
                </li>
                <li>
                  <span className="plan__check">✓</span>SEO 長尾流量
                </li>
              </ul>
              <a href="#apply" className="btn btn--secondary plan__cta">
                選擇此方案
              </a>
            </div>

            <div className="plan plan--featured">
              <span className="plan__badge">推薦</span>
              <div className="plan__label">B・含導流連結</div>
              <h3 className="plan__title">Maps + 導流連結</h3>
              <div className="plan__price">
                <span className="plan__price-num">4,500</span>
                <span className="plan__price-unit">元 / 則</span>
              </div>
              <ul className="plan__list">
                <li>
                  <span className="plan__check">✓</span>嵌 Google Maps 定位
                </li>
                <li>
                  <span className="plan__check">✓</span>訂位 / LINE 導流
                </li>
                <li>
                  <span className="plan__check">✓</span>曝光直接接成交
                </li>
                <li>
                  <span className="plan__check">✓</span>含基礎報導所有內容
                </li>
              </ul>
              <a
                href="#apply"
                className="btn btn--primary plan__cta plan__cta--accent"
              >
                <i className="fi fi-sr-paper-plane"></i>選擇推薦方案
              </a>
            </div>

            <div className="plan">
              <div className="plan__label">C・深度專訪</div>
              <h3 className="plan__title">店家／人物 深度報導</h3>
              <div className="plan__price">
                <span className="plan__price-num">
                  8,000<span className="plan__price-sep">–</span>12,000
                </span>
                <span className="plan__price-unit">元 / 則</span>
              </div>
              <ul className="plan__list">
                <li>
                  <span className="plan__check">✓</span>採訪式長文
                </li>
                <li>
                  <span className="plan__check">✓</span>完整品牌敘事
                </li>
                <li>
                  <span className="plan__check">✓</span>記者視角公信力
                </li>
              </ul>
              <a href="#apply" className="btn btn--secondary plan__cta">
                洽詢專訪
              </a>
            </div>
          </div>

          <div className="plan-d">
            <span className="plan-d__chip">D・客製化</span>
            <p>
              沒有 Google 商家、評論不足的店家也能合作。提供 <b>表單收集</b> 與{" "}
              <b>廣告代操</b> 等加值服務，依需求客製。
            </p>
            <a href="#apply" className="plan-d__link">
              了解客製方案 <i className="fi fi-sr-arrow-small-right"></i>
            </a>
          </div>

          <h3 className="subhead">
            加值選項 <span className="subhead__hint">讓報導效益最大化</span>
          </h3>
          <div className="addons">
            <div className="addon">
              <div className="addon__price">
                +1,500<span className="ntd">NTD</span>
              </div>
              <div>
                <h4>Google Maps + 導流連結</h4>
                <p>嵌定位 + LINE / 官網導流・把曝光接到實際成交</p>
              </div>
            </div>
            <div className="addon">
              <div className="addon__price addon__price--dark">
                +1,000<span className="ntd">NTD</span>
              </div>
              <div>
                <h4>加聯播一個縣市新聞網</h4>
                <p>22 縣市新聞網可選・最大化 SEO 曝光</p>
              </div>
            </div>
          </div>

          <h3 className="subhead">
            店家老闆收到報導後的真實回饋{" "}
            <span className="subhead__hint">為保護隱私，採去識別化處理</span>
          </h3>
          <div className="quotes">
            <div className="quote">
              <div className="quote__chip">選</div>
              <div className="quote__body">
                <p className="quote__text">
                  「<b>Google 排名已經到第一頁了！</b> 感謝你們 🙏」
                </p>
                <div className="quote__who">
                  <span className="quote__who-name">L 老闆</span>
                  <span className="quote__who-meta">選物零售・大稻埕</span>
                  <span className="quote__verified">
                    <i className="fi fi-sr-check-circle"></i>已徵得同意
                  </span>
                </div>
              </div>
            </div>
            <div className="quote">
              <div className="quote__chip">餐</div>
              <div className="quote__body">
                <p className="quote__text">
                  「<b>你們有來過店裡嗎？</b> 文章很像有體驗過我們的服務」
                </p>
                <div className="quote__who">
                  <span className="quote__who-name">陳老闆</span>
                  <span className="quote__who-meta">居酒屋・新北永和</span>
                  <span className="quote__verified">
                    <i className="fi fi-sr-check-circle"></i>已徵得同意
                  </span>
                </div>
              </div>
            </div>
            <div className="quote">
              <div className="quote__chip">烘</div>
              <div className="quote__body">
                <p className="quote__text">
                  「寫得很好，<b>知名大飯店活動的首選</b>」
                </p>
                <div className="quote__who">
                  <span className="quote__who-name">王老闆</span>
                  <span className="quote__who-meta">烘焙坊・台北信義</span>
                  <span className="quote__verified">
                    <i className="fi fi-sr-check-circle"></i>已徵得同意
                  </span>
                </div>
              </div>
            </div>
            <div className="quote">
              <div className="quote__chip">服</div>
              <div className="quote__body">
                <p className="quote__text">
                  「你們的文章 <b>寫得真好！</b>」
                </p>
                <div className="quote__who">
                  <span className="quote__who-name">林老闆</span>
                  <span className="quote__who-meta">美學沙龍・桃園中壢</span>
                  <span className="quote__verified">
                    <i className="fi fi-sr-check-circle"></i>已徵得同意
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= OFFER CARD (dark band) ============= */}
      <section className="offer-band">
        <div className="wrap">
          <div className="offer">
            <div className="offer__bg" aria-hidden="true">
              <div className="offer__shape s1"></div>
              <div className="offer__shape s2"></div>
              <div className="offer__shape s3"></div>
            </div>
            <div className="offer__inner">
              <div className="offer__left">
                <span className="offer__chip">限時 ・ 新聞網測試推廣</span>
                <div className="offer__market">
                  市場行情 <s>NT$ 12,000+</s>
                </div>
                <div className="offer__price">
                  <span className="ntd">NT$</span>
                  <span className="num">3,200</span>
                  <span className="unit">元 / 篇</span>
                </div>
                <div className="offer__bullets">
                  <div>
                    <i className="fi fi-sr-check-circle"></i>含完整廣編稿撰寫
                  </div>
                  <div>
                    <i className="fi fi-sr-check-circle"></i>1–2 工作天上架
                  </div>
                  <div>
                    <i className="fi fi-sr-check-circle"></i>滿意後再轉永久刊登
                  </div>
                </div>
              </div>
              <div className="offer__right">
                <a
                  href="#apply"
                  className="btn btn--primary btn--lg offer__cta"
                >
                  <i className="fi fi-sr-paper-plane"></i>立即申請體驗
                </a>
                <div className="offer__assure">
                  <div className="offer__assure-row">
                    <span className="offer__assure-icon">
                      <i className="fi fi-sr-shield-check"></i>
                    </span>
                    <div>
                      <b>滿意後再決定</b>
                      <span>7 天體驗刊登，再決定是否轉永久</span>
                    </div>
                  </div>
                  <div className="offer__assure-row">
                    <span className="offer__assure-icon">
                      <i className="fi fi-sr-time-fast"></i>
                    </span>
                    <div>
                      <b>24 小時內回覆</b>
                      <span>專員主動聯繫，無壓力諮詢</span>
                    </div>
                  </div>
                </div>
                <div className="offer__bonus">
                  <span className="offer__bonus-badge">- NT$ 300</span>
                  <span>
                    <b>前 3 天付款再省</b>・限本月新申請店家
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= 09 APPLY (mint) ============= */}
      <section className="s-mint sec" id="apply">
        <div className="wrap">
          <header className="sec__head sec__head--center">
            <span className="eyebrow">
              <span className="ch">10</span>立即申請
              <span className="sep">｜</span>24 小時內回覆
            </span>
            <h2 className="sec__title">
              準備好了嗎？
              <br />
              留下<span className="ac">店名</span>與
              <span className="ac">聯絡電話</span>
            </h2>
            <p className="sec__sub">
              專員將於 24 小時內主動聯繫，提供詳細流程；也可直接加 LINE /
              Messenger 詢問。
            </p>
          </header>

          <div className="apply">
            <ApplyForm />
          </div>
        </div>
      </section>

      {/* ============= FOOTER ============= */}
      <footer className="footer">
        <div className="wrap footer__grid">
          <div>
            <div className="fbrand">
              <span className="fbrand-dot"></span>
              <strong>臺灣人新聞網</strong>
            </div>
            <p className="footer__about">
              UniLife 攸你資訊 旗下品牌・全台 22 縣市在地新聞網。
              <br />把 Google 真實好評變成一篇正式新聞報導，讓在地店家被
              Google、AI、客戶看見。
            </p>
          </div>
          <div>
            <h5>服務</h5>
            <ul>
              <li>
                <a href="#value">SEO 真正價值</a>
              </li>
              <li>
                <a href="#cases">真實案例</a>
              </li>
              <li>
                <a href="#how">服務內容</a>
              </li>
              <li>
                <a href="#plans">方案與價格</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>聯絡</h5>
            <ul>
              <li>
                <a href="#apply">
                  <i className="fi fi-sr-paper-plane"></i> 線上申請
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fi fi-brands-facebook-messenger"></i> Messenger
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fi fi-brands-line"></i> LINE@
                </a>
              </li>
              <li>
                <a href="mailto:hello@twainews.com">
                  <i className="fi fi-sr-envelope"></i> hello@twainews.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap fcopy">
          <span>© 2026 臺灣人新聞網 ・ UniLife 攸你資訊 版權所有</span>
          <span>
            <a href="#">隱私權</a> · <a href="#">服務條款</a>
            <span style={{ opacity: 0.5, marginLeft: 12, fontSize: 12 }}>
              v1.1.0
            </span>
          </span>
        </div>
      </footer>

      <a href="#apply" className="float-cta">
        <i className="fi fi-sr-paper-plane"></i>申請
      </a>
    </>
  );
}
