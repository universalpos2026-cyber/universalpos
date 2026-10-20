// Universal POS website: settings, then rendering. Used by index.html (English) and hi.html (Hindi).

// ===================== EDIT THESE =====================
const CONTACT = {
  whatsapp: "918922962849",            // country code + number, digits only (owner, 2026-10-20)
  email: "universalpos2026@gmail.com",
};
const CURRENCY = "₹";
const TRIAL_DAYS = 30;

// Subscription plans, price per device. payUrl: a Razorpay/Cashfree payment link; when set, a "Pay now" button shows.
const PLANS = [
  { id: "monthly",   months: 1,  price: 499,  payUrl: "" },
  { id: "quarterly", months: 3,  price: 1399, payUrl: "" },
  { id: "half",      months: 6,  price: 2699, payUrl: "" },
  { id: "annual",    months: 12, price: 4999, payUrl: "", best: true },
];

// Multi-device discount: from `min` devices, `off` percent off the whole order.
const VOLUME = [
  { min: 3, off: 10 },
  { min: 5, off: 15 },
];

// Other ways to buy. price: number (0 = free trial), or null for "contact us". show: false hides a card.
// The only free offer is the TRIAL_DAYS free trial.
const OTHER_PLANS = [
  { id: "trial",    price: 0,     show: true },
  { id: "lifetime", price: 14999, show: true, payUrl: "" },
  { id: "selfhost", price: null,  show: false }, // not offered (owner, 2026-10-20)
];

// Multi-year card (owner, 2026-10-20): paid once per device for N years, priced from the annual plan;
// `terms` = years and percent off the annual price for that many years (owner: 2 yr 10%, 3 yr 15%, 5 yr 20%).
const MULTI_YEAR = { show: true, terms: [[2, 10], [3, 15], [5, 20]], payUrl: "" };

// Direct trial downloads: the signed release files in downloads/ (filled by
// tools/release/site_downloads.sh, same version as the app). url "" = button asks for the file on WhatsApp.
const RELEASE = "0.1.8";
const DL = f => `downloads/${f}`;
const DOWNLOADS = [
  { id: "apk",   icon: "i-phone",  url: DL(`universal-pos-${RELEASE}.apk`) },
  { id: "win",   icon: "i-laptop", url: DL(`UniversalPOS-Setup-${RELEASE}.exe`) },
  { id: "linux", icon: "i-laptop", url: DL(`universal-pos_${RELEASE}_amd64.deb`) },
  { id: "tar",   icon: "i-laptop", url: DL(`universal-pos-${RELEASE}-linux-x64.tar.gz`) },
  { id: "sums",  icon: "i-shield", url: DL("SHA256SUMS") },
  { id: "web",   icon: "i-globe",  url: "" },
];

// App stores. status: "soon" or "live" (then set url).
const STORES = [
  { id: "play",    icon: "i-phone",  status: "soon", url: "" },
  { id: "apple",   icon: "i-phone",  status: "soon", url: "" },
  { id: "msstore", icon: "i-laptop", status: "soon", url: "" },
  { id: "snap",    icon: "i-laptop", status: "soon", url: "" },
  { id: "flathub", icon: "i-laptop", status: "soon", url: "" },
];

// Demo video: YouTube video id (the part after "v=" in the link). "" hides the video section.
const VIDEO_ID = "";

// Real customer quotes only, with the shop's permission. Empty list hides the section.
// { quote: { en: "...", hi: "..." }, name: "Owner name", shop: { en: "Shop, City", hi: "दुकान, शहर" } }
const TESTIMONIALS = [];
// =======================================================

const T = {
  en: {
    plan: {
      monthly:   ["Monthly", "Billed every month"],
      quarterly: ["Quarterly", "Billed every 3 months"],
      half:      ["Half-yearly", "Billed every 6 months"],
      annual:    ["Annual", "Billed every year"],
    },
    other: {
      trial:    ["Free trial", "Free for 1 month", ["Every feature included", "No card, no sign-up", "Then pick any plan", "Products and bills stay as they are"]],
      multiyear: ["Multi-year", "Pay once per device for 2, 3 or 5 years", ["All features and updates for the whole term", "The longer you take, the more you save"]],
      lifetime: ["Lifetime", "Pay once per device", ["All features", "1 year of updates included", "Optional update plan after that", "Offline licence, never expires"]],
      selfhost: ["Self-host", "Run on your own server", ["Server on your PC or cloud", "Unlimited devices on request", "Priority support and setup", "Custom connectors"]],
    },
    perDevice: "per device",
    perMonth: m => `= ${m} per month · per device`,
    once: "one-time · per device",
    trialPer: "for 1 month · then pick a plan",
    trialCta: "Download free trial",
    contact: "Contact us",
    save: n => `Save ${n}%`,
    years: y => `${y} years`,
    perYear: v => ` = ${v} per year`,
    best: "Best value",
    included: ["All features, no add-ons", "Free updates incl. roadmap", "Cloud sync + web admin panel", `${TRIAL_DAYS}-day free trial first`],
    buyWa: "Buy on WhatsApp",
    pay: "Pay now",
    email: "Email us",
    talk: "Talk to us",
    priceNote: "Prices per device, before GST. Every plan includes all features and free updates.",
    calcPlan: "Plan",
    calcDevices: "Devices (tills, phones, PCs)",
    calcList: "List price",
    calcDiscount: n => `Multi-device discount (${n}%)`,
    calcTotal: "Total before GST",
    calcEach: (e, m) => `${e} per device for ${m}`,
    months: n => n === 1 ? "1 month" : `${n} months`,
    volume: (min, off) => `${min}+ devices: ${off}% off`,
    calcBuy: "Get this quote on WhatsApp",
    quoteMsg: (plan, n, total) => `Hi, I'd like Universal POS ${plan} for ${n} devices (quote ${total} before GST).`,
    planMsg: (plan, price) => `Hi, I'd like the Universal POS ${plan} plan (${price} per device).`,
    otherMsg: plan => `Hi, I'm interested in Universal POS ${plan}.`,
    dl: {
      apk:   ["Android app (APK)", "Phones and tablets · free trial"],
      win:   ["Windows installer", "Windows 10 and 11 · free trial"],
      linux: ["Linux (.deb)", "Ubuntu and Debian · free trial"],
      tar:   ["Linux (.tar.gz)", "Any other Linux, no root · free trial"],
      sums:  ["Check the files", "Signed SHA256SUMS (guide chapter 20)"],
      web:   ["Web admin panel", "Any modern browser"],
    },
    st: {
      play:    ["Google Play", "Android phones and tablets"],
      apple:   ["App Store", "iPhone and iPad"],
      msstore: ["Microsoft Store", "Windows 10 and 11"],
      snap:    ["Snap Store", "Ubuntu and most Linux"],
      flathub: ["Flathub", "Any Linux desktop"],
    },
    download: "Download",
    request: "Get it",
    available: "Available",
    soon: "Coming soon",
    getIt: "Get it",
    dlMsg: name => `Hi, please send me the Universal POS free trial: ${name}.`,
    demo: "Hi, I'd like to book a demo of Universal POS.",
    enquiry: "Hi, I'd like to know more about Universal POS.",
    mailSubject: "Universal POS enquiry",
  },
  hi: {
    plan: {
      monthly:   ["मासिक", "हर महीने बिल"],
      quarterly: ["तिमाही", "हर 3 महीने बिल"],
      half:      ["छमाही", "हर 6 महीने बिल"],
      annual:    ["सालाना", "हर साल बिल"],
    },
    other: {
      trial:    ["फ्री ट्रायल", "1 महीना फ्री", ["सभी फ़ीचर शामिल", "न कार्ड, न साइन-अप", "फिर कोई भी प्लान चुनें", "प्रोडक्ट और बिल वैसे ही रहते हैं"]],
      multiyear: ["कई साल", "हर डिवाइस पर 2, 3 या 5 साल के लिए एक बार भुगतान", ["पूरी अवधि के लिए सभी फ़ीचर और अपडेट", "जितनी लंबी अवधि, उतनी ज़्यादा बचत"]],
      lifetime: ["लाइफ़टाइम", "हर डिवाइस पर एक बार भुगतान", ["सभी फ़ीचर", "1 साल के अपडेट शामिल", "उसके बाद अपडेट प्लान अपनी मर्ज़ी से", "ऑफ़लाइन लाइसेंस, कभी ख़त्म नहीं"]],
      selfhost: ["सेल्फ़-होस्ट", "अपने सर्वर पर चलाएँ", ["सर्वर आपके PC या क्लाउड पर", "माँगने पर अनगिनत डिवाइस", "प्राथमिकता सहायता और सेटअप", "कस्टम कनेक्टर"]],
    },
    perDevice: "प्रति डिवाइस",
    perMonth: m => `= ${m} प्रति माह · प्रति डिवाइस`,
    once: "एक बार · प्रति डिवाइस",
    trialPer: "1 महीने के लिए · फिर प्लान चुनें",
    trialCta: "फ्री ट्रायल डाउनलोड करें",
    contact: "संपर्क करें",
    save: n => `${n}% बचत`,
    years: y => `${y} साल`,
    perYear: v => ` = ${v} प्रति साल`,
    best: "सबसे फ़ायदेमंद",
    included: ["सभी फ़ीचर, कोई ऐड-ऑन नहीं", "आने वाले फ़ीचर समेत फ्री अपडेट", "क्लाउड सिंक + वेब एडमिन पैनल", `पहले ${TRIAL_DAYS} दिन फ्री ट्रायल`],
    buyWa: "WhatsApp पर ख़रीदें",
    pay: "अभी भुगतान करें",
    email: "ईमेल करें",
    talk: "हमसे बात करें",
    priceNote: "कीमतें प्रति डिवाइस, GST अलग। हर प्लान में सभी फ़ीचर और फ्री अपडेट।",
    calcPlan: "प्लान",
    calcDevices: "डिवाइस (काउंटर, फ़ोन, PC)",
    calcList: "सूची कीमत",
    calcDiscount: n => `कई डिवाइस की छूट (${n}%)`,
    calcTotal: "कुल (GST से पहले)",
    calcEach: (e, m) => `${m} के लिए ${e} प्रति डिवाइस`,
    months: n => n === 1 ? "1 महीने" : `${n} महीने`,
    volume: (min, off) => `${min}+ डिवाइस: ${off}% छूट`,
    calcBuy: "यह कोटेशन WhatsApp पर पाएँ",
    quoteMsg: (plan, n, total) => `नमस्ते, मुझे Universal POS ${plan} प्लान ${n} डिवाइस के लिए चाहिए (कोटेशन ${total}, GST से पहले)।`,
    planMsg: (plan, price) => `नमस्ते, मुझे Universal POS ${plan} प्लान चाहिए (${price} प्रति डिवाइस)।`,
    otherMsg: plan => `नमस्ते, मुझे Universal POS ${plan} के बारे में जानना है।`,
    dl: {
      apk:   ["Android ऐप (APK)", "फ़ोन और टैबलेट · फ्री ट्रायल"],
      win:   ["Windows इंस्टॉलर", "Windows 10 और 11 · फ्री ट्रायल"],
      linux: ["Linux (.deb)", "Ubuntu और Debian · फ्री ट्रायल"],
      tar:   ["Linux (.tar.gz)", "कोई भी दूसरा Linux, root नहीं चाहिए · फ्री ट्रायल"],
      sums:  ["फ़ाइलें जाँचें", "साइन किया हुआ SHA256SUMS (गाइड अध्याय 20)"],
      web:   ["वेब एडमिन पैनल", "कोई भी नया ब्राउज़र"],
    },
    st: {
      play:    ["Google Play", "Android फ़ोन और टैबलेट"],
      apple:   ["App Store", "iPhone और iPad"],
      msstore: ["Microsoft Store", "Windows 10 और 11"],
      snap:    ["Snap Store", "Ubuntu और ज़्यादातर Linux"],
      flathub: ["Flathub", "कोई भी Linux डेस्कटॉप"],
    },
    download: "डाउनलोड",
    request: "मँगाएँ",
    available: "उपलब्ध",
    soon: "जल्द आ रहा है",
    getIt: "पाएँ",
    dlMsg: name => `नमस्ते, कृपया Universal POS का फ्री ट्रायल भेजें: ${name}।`,
    demo: "नमस्ते, मुझे Universal POS का डेमो बुक करना है।",
    enquiry: "नमस्ते, मुझे Universal POS के बारे में जानना है।",
    mailSubject: "Universal POS पूछताछ",
  },
};

const LANG = document.documentElement.lang === "hi" ? "hi" : "en";
const L = T[LANG];
const $ = id => document.getElementById(id);
const fmt = n => CURRENCY + Math.round(n).toLocaleString("en-IN");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const wa = text => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
const mail = subject => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;
const icon = id => `<svg class="i"><use href="#${id}"/></svg>`;
const ext = 'target="_blank" rel="noopener"';
const base = PLANS.find(p => p.months === 1)?.price ?? PLANS[0].price;
const fill = (id, html) => { const el = $(id); if (el) el.innerHTML = html; };

// WhatsApp / e-mail / demo links anywhere on the page
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = wa(L[a.dataset.wa] || L.enquiry);
  a.target = "_blank"; a.rel = "noopener";
});
document.querySelectorAll("[data-mail]").forEach(a => { a.href = mail(L.mailSubject); if (!a.children.length && !a.textContent.trim()) a.textContent = CONTACT.email; });
document.querySelectorAll("[data-trial-days]").forEach(el => el.textContent = TRIAL_DAYS);

// Subscription plans
fill("plans", PLANS.map(p => {
  const [name, term] = L.plan[p.id];
  const save = Math.round((1 - p.price / (base * p.months)) * 100);
  return `<div class="plan${p.best ? " best" : ""}">
    ${p.best ? `<span class="tag">${L.best}</span>` : ""}
    <h3>${name}</h3>
    <div class="term">${term}</div>
    <div class="amount">${fmt(p.price)}</div>
    <div class="per">${p.months > 1 ? L.perMonth(fmt(p.price / p.months)) : L.perDevice}</div>
    <span class="save${save > 0 ? "" : " none"}">${L.save(save)}</span>
    <ul>${L.included.map(t => `<li>${icon("i-check")}${t}</li>`).join("")}</ul>
    <div class="actions">
      ${p.payUrl ? `<a class="btn btn-primary" href="${esc(p.payUrl)}" ${ext}>${L.pay}</a>` : ""}
      <a class="btn ${p.best && !p.payUrl ? "btn-primary" : "btn-wa"}" href="${wa(L.planMsg(name, fmt(p.price)))}" ${ext}>${icon("i-chat")}${L.buyWa}</a>
      <a class="btn btn-ghost" href="${mail("Universal POS " + name)}">${icon("i-mail")}${L.email}</a>
    </div>
  </div>`;
}).join(""));
fill("priceNote", L.priceNote);

// Multi-device calculator
const calcPlan = $("calcPlan"), calcN = $("calcN");
if (calcPlan && calcN) {
  calcPlan.innerHTML = PLANS.map(p => `<option value="${p.id}"${p.best ? " selected" : ""}>${L.plan[p.id][0]} · ${fmt(p.price)}</option>`).join("");
  fill("volume", VOLUME.map(v => `<span>${L.volume(v.min, v.off)}</span>`).join(""));
  const calc = () => {
    const p = PLANS.find(x => x.id === calcPlan.value);
    const n = Math.max(1, Math.min(999, parseInt(calcN.value, 10) || 1));
    const off = VOLUME.filter(v => n >= v.min).reduce((m, v) => Math.max(m, v.off), 0);
    const list = p.price * n, total = list * (1 - off / 100);
    const name = L.plan[p.id][0];
    fill("calcOut", `
      <div class="lines">
        <div><span>${L.calcList} (${n} × ${fmt(p.price)})</span><span>${fmt(list)}</span></div>
        ${off ? `<div><span>${L.calcDiscount(off)}</span><span>−${fmt(list - total)}</span></div>` : ""}
      </div>
      <div class="term">${L.calcTotal}</div>
      <div class="total">${fmt(total)}</div>
      <div class="lines">${L.calcEach(fmt(total / n), L.months(p.months))}</div>
      <a class="btn btn-wa" href="${wa(L.quoteMsg(name, n, fmt(total)))}" ${ext}>${icon("i-chat")}${L.calcBuy}</a>`);
  };
  calcPlan.addEventListener("change", calc);
  calcN.addEventListener("input", calc);
  calc();
}

// Free trial, multi-year, lifetime
function otherCard(o) {
  const [name, term, items] = L.other[o.id];
  const amount = o.price === null ? L.contact : fmt(o.price);
  const per = o.price === null ? "" : o.price === 0 ? L.trialPer : L.once;
  const cta = o.price === 0 ? `<a class="btn btn-primary" href="#download">${icon("i-download")}${L.trialCta}</a>`
    : o.payUrl ? `<a class="btn btn-primary" href="${esc(o.payUrl)}" ${ext}>${L.pay}</a>`
    : `<a class="btn btn-wa" href="${wa(L.otherMsg(name))}" ${ext}>${icon("i-chat")}${L.talk}</a>`;
  return `<div class="plan">
    <h3>${name}</h3>
    <div class="term">${term}</div>
    <div class="amount">${amount}</div>
    <div class="per">${per}</div>
    <ul>${items.map(t => `<li>${icon("i-check")}${t}</li>`).join("")}</ul>
    <div class="actions">${cta}</div>
  </div>`;
}

// Multi-year: N years at the annual price minus that term's percent (rounded to whole rupees).
function multiYearCard() {
  const annual = PLANS.find(p => p.months === 12);
  if (!MULTI_YEAR.show || !annual) return "";
  const [name, term, items] = L.other.multiyear;
  const rows = MULTI_YEAR.terms.map(([y, off]) => {
    const total = Math.round(annual.price * y * (100 - off) / 100);
    return `<li class="my-row"><span><b>${L.years(y)}</b> · ${L.save(off)}</span>
      <span class="my-price">${fmt(total)}<small>${L.perYear(fmt(Math.round(total / y)))}</small></span></li>`;
  }).join("");
  const cta = MULTI_YEAR.payUrl ? `<a class="btn btn-primary" href="${esc(MULTI_YEAR.payUrl)}" ${ext}>${L.pay}</a>`
    : `<a class="btn btn-wa" href="${wa(L.otherMsg(name))}" ${ext}>${icon("i-chat")}${L.talk}</a>`;
  return `<div class="plan plan-multiyear">
    <h3>${name}</h3>
    <div class="term">${term}</div>
    <ul class="my-list">${rows}</ul>
    <div class="per">${L.once}</div>
    <ul>${items.map(t => `<li>${icon("i-check")}${t}</li>`).join("")}</ul>
    <div class="actions">${cta}</div>
  </div>`;
}

const shownOther = OTHER_PLANS.filter(o => o.show);
fill("otherPlans", [
  ...shownOther.filter(o => o.price === 0).map(otherCard),
  multiYearCard(),
  ...shownOther.filter(o => o.price !== 0).map(otherCard),
].join(""));

// Downloads and stores
const card = (href, ic, title, sub, badge) => {
  const inner = `<span class="ic">${icon(ic)}</span><span><b>${title}</b><small>${sub}</small></span>${badge}`;
  return href ? `<a class="store" href="${esc(href)}" ${ext}>${inner}</a>` : `<div class="store soon">${inner}</div>`;
};
fill("downloads", DOWNLOADS.map(d => {
  const [title, sub] = L.dl[d.id];
  return card(d.url || wa(L.dlMsg(title)), d.icon, title, sub,
    `<span class="badge ok">${d.url ? L.download : L.request}</span>`);
}).join(""));
fill("stores", STORES.map(s => {
  const [title, sub] = L.st[s.id];
  const live = s.status === "live" && s.url;
  return card(live ? s.url : null, s.icon, title, sub,
    live ? `<span class="badge ok">${L.getIt}</span>` : `<span class="badge soon">${L.soon}</span>`);
}).join(""));

// Video
if (VIDEO_ID && $("video")) {
  $("video").hidden = false;
  fill("videoBox", `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(VIDEO_ID)}" title="Universal POS demo" loading="lazy" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>`);
}

// Testimonials
if (TESTIMONIALS.length && $("stories")) {
  $("stories").hidden = false;
  fill("quotes", TESTIMONIALS.map(t => `<figure class="card quote">
    <blockquote>“${esc(t.quote[LANG] || t.quote.en)}”</blockquote>
    <figcaption><b>${esc(t.name)}</b> · ${esc((t.shop && (t.shop[LANG] || t.shop.en)) || "")}</figcaption>
  </figure>`).join(""));
}

// Structured data for search engines (prices come from PLANS)
const ld = document.createElement("script");
ld.type = "application/ld+json";
ld.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Universal POS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android, Windows, Linux, iOS, Web",
  offers: PLANS.map(p => ({ "@type": "Offer", name: T.en.plan[p.id][0], price: p.price, priceCurrency: "INR" })),
});
document.head.appendChild(ld);

$("year") && ($("year").textContent = new Date().getFullYear());

// Mobile menu
const menuBtn = $("menuBtn"), navLinks = $("navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", e => {
  if (e.target.tagName === "A") { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }
});

// Theme (remembered per browser); screenshots follow it: assets/screens/dark/ or assets/screens/light/
const root = document.documentElement;
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
function syncShots() {
  const want = isDark() ? "/dark/" : "/light/";
  document.querySelectorAll('img[src*="assets/screens/"]').forEach(img => {
    const src = img.getAttribute("src").replace(/\/(dark|light)\//, want);
    if (src !== img.getAttribute("src")) img.setAttribute("src", src);
  });
}
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
syncShots();
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncShots);
$("themeBtn").addEventListener("click", () => {
  root.dataset.theme = isDark() ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  syncShots();
});

// Screenshot tabs
const tabs = [["tabDesk", "galDesk"], ["tabPhone", "galPhone"]];
tabs.forEach(([t]) => $(t).addEventListener("click", () => {
  tabs.forEach(([t2, g2]) => {
    const on = t2 === t;
    $(t2).setAttribute("aria-selected", on);
    $(g2).hidden = !on;
  });
}));

// Lightbox
const lb = $("lightbox"), lbImg = $("lbImg"), lbCap = $("lbCap");
document.querySelectorAll(".gallery figure").forEach(f => f.addEventListener("click", () => {
  const img = f.querySelector("img");
  lbImg.src = img.src; lbImg.alt = img.alt;
  lbCap.textContent = f.querySelector("figcaption")?.textContent ?? "";
  lb.showModal();
}));
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

// Links to #privacy, #terms, #refund open that policy
function openTarget() {
  const el = location.hash && document.getElementById(location.hash.slice(1));
  if (el && el.tagName === "DETAILS") { el.open = true; el.scrollIntoView(); }
}
addEventListener("hashchange", openTarget);
openTarget();
