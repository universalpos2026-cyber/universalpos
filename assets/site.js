// Universal POS website: settings, then rendering. Used by index.html (English) and hi.html (Hindi).

// ===================== GLOBAL CONFIG =====================
const CONFIG = {
  websiteUrl: "https://universalpos2026-cyber.github.io/universalpos",
  adminPanelUrl: "https://panel.quantlogiq.in/#/admin/connect",
  vendorPanelUrl: "https://vinex.tail5adeef.ts.net/vendor/plans",
  whatsapp: "918922962849",            // country code + number, digits only (owner, 2026-10-20)
  email: "universalpos2026@gmail.com",
};
const CONTACT = {
  whatsapp: CONFIG.whatsapp,
  email: CONFIG.email,
};
const CURRENCY = "₹";
const TRIAL_DAYS = 30;

// Structured Product Tiers
const TIERS = {
  standalone: {
    id: "standalone",
    icon: "i-laptop",
    badge: { en: "100% Offline", hi: "100% ऑफ़लाइन" },
    name: { en: "Standalone POS", hi: "स्टैंडअलोन POS" },
    tagline: {
      en: "Single Till · 100% Offline · Zero Internet Required",
      hi: "सिंगल काउंटर · 100% ऑफ़लाइन · इंटरनेट की कोई ज़रूरत नहीं",
    },
    base: 499,
    plans: [
      { id: "monthly",   months: 1,  price: 499,  payUrl: "" },
      { id: "quarterly", months: 3,  price: 1399, payUrl: "" },
      { id: "half",      months: 6,  price: 2699, payUrl: "" },
      { id: "annual",    months: 12, price: 4999, payUrl: "", best: true },
    ],
    features: {
      en: [
        "100% Offline SQLite WAL database",
        "Full Retail & Restaurant billing engine",
        "Fast GST invoicing & thermal receipts",
        "Barcode scanner & weighing scale support",
        "Inventory movements & low-stock alerts",
        "Customer ledger (Khata) & credit",
        "Encrypted USB backup & restore",
      ],
      hi: [
        "100% ऑफ़लाइन SQLite WAL डेटाबेस",
        "पूरा रिटेल और रेस्टोरेंट बिलिंग इंजन",
        "तेज़ GST इनवॉइसिंग और थर्मल रसीदें",
        "बारकोड स्कैनर और वेइंग स्केल सपोर्ट",
        "स्टॉक मूवमेंट और लो-स्टॉक अलर्ट",
        "ग्राहक खाता (उधार बहीखाता)",
        "एन्क्रिप्टेड USB बैकअप और रिस्टोर",
      ],
    },
    note: {
      en: "No cloud sync or web admin panel. Perfect for standalone counters and zero-internet shops.",
      hi: "क्लाउड सिंक या वेब एडमिन पैनल शामिल नहीं। बिना इंटरनेट वाले एकल काउंटरों के लिए सर्वोत्तम।",
    },
  },
  connected: {
    id: "connected",
    icon: "i-globe",
    badge: { en: "Cloud & Multi-Counter", hi: "क्लाउड और मल्टी-काउंटर" },
    name: { en: "Connected POS", hi: "कनेक्टेड POS" },
    tagline: {
      en: "Real-time Cloud Sync + Web Admin Panel + Multi-Till Hub",
      hi: "रीयल-टाइम क्लाउड सिंक + वेब एडमिन पैनल + मल्टी-काउंटर हब",
    },
    base: 799,
    plans: [
      { id: "monthly",   months: 1,  price: 799,  payUrl: "" },
      { id: "quarterly", months: 3,  price: 2199, payUrl: "" },
      { id: "half",      months: 6,  price: 4199, payUrl: "" },
      { id: "annual",    months: 12, price: 7999, payUrl: "", best: true },
    ],
    features: {
      en: [
        "Everything in Standalone plan",
        "Real-time Cloud Sync across all counters",
        "Web Admin Panel",
        "Live sales & profit reports on owner's phone",
        "Multi-counter P2P Hub without internet",
        "Remote catalog, pricing & stock management",
        "Automated cloud backup & instant restore",
      ],
      hi: [
        "स्टैंडअलोन प्लान के सभी फ़ीचर",
        "सभी काउंटरों पर रीयल-टाइम क्लाउड सिंक",
        "वेब एडमिन पैनल",
        "मालिक के फ़ोन पर लाइव बिक्री और मुनाफ़ा रिपोर्ट",
        "बिना इंटरनेट मल्टी-काउंटर P2P हब",
        "रिमोट प्रोडक्ट, कीमत और स्टॉक प्रबंधन",
        "ऑटोमैटिक क्लाउड बैकअप और तुरंत रिस्टोर",
      ],
    },
    note: {
      en: "Full cloud connectivity + web browser management. Includes offline resilience if internet drops.",
      hi: "पूर्ण क्लाउड कनेक्टिविटी + वेब ब्राउज़र प्रबंधन। इंटरनेट बंद होने पर भी बिलिंग कभी नहीं रुकती।",
    },
  },
};

// Volume discount formula: +5% off per extra device (starting from 2 devices), up to 40% max.
const getVolumeDiscount = n => {
  if (n <= 1) return 0;
  return Math.min(40, (n - 1) * 5);
};

const VOLUME_PILLS = [
  { min: 2, off: 5 },
  { min: 3, off: 10 },
  { min: 5, off: 20 },
  { min: 7, off: 30 },
  { min: 9, off: 40 },
];

// Other ways to buy: Free Trial (1 month), Lifetime, Self-host
const OTHER_PLANS = [
  { id: "trial",    price: 0,     show: true },
  { id: "lifetime", price: 14999, show: true, payUrl: "" },
  { id: "selfhost", price: null,  show: false }, // not offered (owner, 2026-10-20)
];

// Multi-year card: paid once per device for N years from the tier's annual price
const MULTI_YEAR = { show: true, terms: [[2, 10], [3, 15], [5, 20]], payUrl: "" };

// Direct trial downloads: v0.1.9 release files hosted on Google Drive
const RELEASE = "0.1.9";
const DRIVE_BASE = "https://drive.google.com/uc?export=download&id=";
const DRIVE_FILES = {
  apk: "1lk_DBkDeKRrGX4EF-Hm_bBxBV3Pk7IMw",     // universal-pos-0.1.9.apk
  win: "1aJXpCZyZlyTJWptlgFCkIumg43RHlLBu",     // UniversalPOS-Setup-0.1.9.exe
  linux: "1yHWMk7Sn8peUxyfFa5FZIaAScRTvl3UK",   // universal-pos_0.1.9_amd64.deb
  tar: "1m-5LDP6QvxZu8fArGsbnOGxI82_nS2Z7",     // universal-pos-0.1.9-linux-x64.tar.gz
  server: "1wZ0XnpY4GT3WYHjtyo9hOnQncEmXIxiW",  // universal-pos-server_0.1.9_amd64.deb
  sums: "1X2xwkF3ECtsNmKwCf7PI-C6ts08gk-ZG",    // SHA256SUMS
};
const DL = id => DRIVE_FILES[id] ? `${DRIVE_BASE}${DRIVE_FILES[id]}` : "";
const DOWNLOADS = [
  { id: "apk",    icon: "i-phone",  url: DL("apk") },
  { id: "win",    icon: "i-laptop", url: DL("win") },
  { id: "linux",  icon: "i-laptop", url: DL("linux") },
  { id: "tar",    icon: "i-laptop", url: DL("tar") },
  { id: "server", icon: "i-db",     url: DL("server") },
  { id: "sums",   icon: "i-shield", url: DL("sums") },
  { id: "web",    icon: "i-globe",  url: CONFIG.adminPanelUrl },
];

// App stores. status: "soon" or "live" (then set url).
const STORES = [
  { id: "play",    icon: "i-phone",  status: "soon", url: "" },
  { id: "apple",   icon: "i-phone",  status: "soon", url: "" },
  { id: "msstore", icon: "i-laptop", status: "soon", url: "" },
  { id: "snap",    icon: "i-laptop", status: "soon", url: "" },
  { id: "flathub", icon: "i-laptop", status: "soon", url: "" },
];

// Demo video: YouTube video id ("" hides the video section)
const VIDEO_ID = "";

// Real customer quotes only
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
      trial:    ["30-Day Free Trial", "Free for 1 month trial period", ["100% offline billing & GST receipts", "Thermal printing & phone barcode scanner", "Customer ledger (Khata) & cash drawer", "Encrypted offline USB backup", "No credit card, no sign-up required", "Upgrade anytime as your store grows"]],
      multiyear: ["Multi-year", "Pay once per device for 2, 3 or 5 years", ["All features and updates for the whole term", "The longer you take, the more you save"]],
      lifetime: ["Lifetime", "Pay once per device", ["100% offline standalone POS", "1 year of updates included", "Optional update plan after that", "Offline licence, never expires"]],
      selfhost: ["Self-host", "Run on your own server", ["Server on your PC or cloud", "Unlimited devices on request", "Priority support and setup", "Custom connectors"]],
    },
    perDevice: "per device",
    perMonth: m => `= ${m} per month · per device`,
    once: "one-time · per device",
    trialPer: "for 1 month · then pick a plan",
    trialCta: "Download Free Trial",
    trialTag: "Free Trial",
    contact: "Contact us",
    save: n => `Save ${n}%`,
    years: y => `${y} years`,
    perYear: v => ` = ${v} per year`,
    best: "Best value",
    buyWa: "Buy on WhatsApp",
    pay: "Pay now",
    email: "Email us",
    talk: "Talk to us",
    priceNote: tierName => `Prices per device, before GST. Every plan includes free updates and full features of ${tierName}.`,
    volumeRule: "+5% off per extra device (up to 40% discount)",
    calcPlan: "Plan",
    calcDevices: "Devices (tills, phones, PCs)",
    calcList: "List price",
    calcDiscount: n => `Multi-device discount (${n}%)`,
    calcTotal: "Total before GST",
    calcEach: (e, m) => `${e} per device for ${m}`,
    months: n => n === 1 ? "1 month" : `${n} months`,
    volume: (min, off) => `${min}+ devices: ${off}% off`,
    calcBuy: "Get this quote on WhatsApp",
    quoteMsg: (tierName, planName, n, total, off) => off > 0
      ? `Hi, I'd like Universal POS ${tierName} (${planName}) for ${n} devices (quote ${total} before GST, with ${off}% multi-device discount).`
      : `Hi, I'd like Universal POS ${tierName} (${planName}) for ${n} device (quote ${total} before GST).`,
    planMsg: (tierName, planName, price) => `Hi, I'd like the Universal POS ${tierName} ${planName} plan (${price} per device).`,
    otherMsg: plan => `Hi, I'm interested in Universal POS ${plan}.`,
    dl: {
      apk:    ["Android app (APK)", "Phones and tablets · v0.1.9 free trial"],
      win:    ["Windows installer", "Windows 10 and 11 · v0.1.9 free trial"],
      linux:  ["Linux (.deb)", "Ubuntu and Debian · v0.1.9 free trial"],
      tar:    ["Linux (.tar.gz)", "Any other Linux, no root · v0.1.9 free trial"],
      // server: ["Linux server (.deb)", "Dedicated server · Ubuntu & Debian"],
      sums:   ["Check the files", "Signed SHA256SUMS (v0.1.9)"],
      web:    ["Web admin panel", "Any modern browser"],
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
      trial:    ["30-दिन फ्री ट्रायल", "1 महीने की ट्रायल अवधि के लिए फ्री", ["100% ऑफ़लाइन बिलिंग और GST रसीदें", "थर्मल प्रिंटिंग और फ़ोन बारकोड स्कैनर", "ग्राहक खाता (उधार बहीखाता) और कैश ड्रॉअर", "एन्क्रिप्टेड ऑफ़लाइन USB बैकअप", "न क्रेडिट कार्ड, न साइन-अप आवश्यक", "दुकान बढ़ने पर कभी भी अपग्रेड करें"]],
      multiyear: ["कई साल", "हर डिवाइस पर 2, 3 या 5 साल के लिए एक बार भुगतान", ["पूरी अवधि के लिए सभी फ़ीचर और अपडेट", "जितनी लंबी अवधि, उतनी ज़्यादा बचत"]],
      lifetime: ["लाइफ़टाइम", "हर डिवाइस पर एक बार भुगतान", ["100% ऑफ़लाइन स्टैंडअलोन POS", "1 साल के अपडेट शामिल", "उसके बाद अपडेट प्लान अपनी मर्ज़ी से", "ऑफ़लाइन लाइसेंस, कभी ख़त्म नहीं"]],
      selfhost: ["सेल्फ़-होस्ट", "अपने सर्वर पर चलाएँ", ["सर्वर आपके PC या क्लाउड पर", "माँगने पर अनगिनत डिवाइस", "प्राथमिकता सहायता और सेटअप", "कस्टम कनेक्टर"]],
    },
    perDevice: "प्रति डिवाइस",
    perMonth: m => `= ${m} प्रति माह · प्रति डिवाइस`,
    once: "एक बार · प्रति डिवाइस",
    trialPer: "1 महीने के लिए · फिर प्लान चुनें",
    trialCta: "फ्री ट्रायल डाउनलोड करें",
    trialTag: "फ्री ट्रायल",
    contact: "संपर्क करें",
    save: n => `${n}% बचत`,
    years: y => `${y} साल`,
    perYear: v => ` = ${v} प्रति साल`,
    best: "सबसे फ़ायदेमंद",
    buyWa: "WhatsApp पर ख़रीदें",
    pay: "अभी भुगतान करें",
    email: "ईमेल करें",
    talk: "हमसे बात करें",
    priceNote: tierName => `कीमतें प्रति डिवाइस, GST अलग। हर प्लान में फ्री अपडेट और ${tierName} के सभी फ़ीचर शामिल।`,
    volumeRule: "+5% अतिरिक्त छूट प्रति डिवाइस (अधिकतम 40% तक)",
    calcPlan: "प्लान",
    calcDevices: "डिवाइस (काउंटर, फ़ोन, PC)",
    calcList: "सूची कीमत",
    calcDiscount: n => `कई डिवाइस की छूट (${n}%)`,
    calcTotal: "कुल (GST से पहले)",
    calcEach: (e, m) => `${m} के लिए ${e} प्रति डिवाइस`,
    months: n => n === 1 ? "1 महीने" : `${n} महीने`,
    volume: (min, off) => `${min}+ डिवाइस: ${off}% छूट`,
    calcBuy: "यह कोटेशन WhatsApp पर पाएँ",
    quoteMsg: (tierName, planName, n, total, off) => off > 0
      ? `नमस्ते, मुझे Universal POS ${tierName} (${planName}) प्लान ${n} डिवाइस के लिए चाहिए (कोटेशन ${total}, GST से पहले, ${off}% छूट के साथ)।`
      : `नमस्ते, मुझे Universal POS ${tierName} (${planName}) प्लान ${n} डिवाइस के लिए चाहिए (कोटेशन ${total}, GST से पहले)।`,
    planMsg: (tierName, planName, price) => `नमस्ते, मुझे Universal POS ${tierName} ${planName} प्लान चाहिए (${price} प्रति डिवाइस)।`,
    otherMsg: plan => `नमस्ते, मुझे Universal POS ${plan} के बारे में जानना है।`,
    dl: {
      apk:    ["Android ऐप (APK)", "फ़ोन और टैबलेट · v0.1.9 फ्री ट्रायल"],
      win:    ["Windows इंस्टॉलर", "Windows 10 और 11 · v0.1.9 फ्री ट्रायल"],
      linux:  ["Linux (.deb)", "Ubuntu और Debian · v0.1.9 फ्री ट्रायल"],
      tar:    ["Linux (.tar.gz)", "कोई भी दूसरा Linux, root नहीं चाहिए · v0.1.9"],
      // server: ["Linux सर्वर (.deb)", "समर्पित सर्वर · Ubuntu और Debian"],
      sums:   ["फ़ाइलें जाँचें", "साइन किया हुआ SHA256SUMS (v0.1.9)"],
      web:    ["वेब एडमिन पैनल", "कोई भी नया ब्राउज़र"],
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
const fill = (id, html) => { const el = $(id); if (el) el.innerHTML = html; };

// WhatsApp / e-mail / demo links anywhere on the page
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = wa(L[a.dataset.wa] || L.enquiry);
  a.target = "_blank"; a.rel = "noopener";
});
document.querySelectorAll("[data-mail]").forEach(a => { a.href = mail(L.mailSubject); if (!a.children.length && !a.textContent.trim()) a.textContent = CONTACT.email; });
document.querySelectorAll("[data-trial-days]").forEach(el => el.textContent = TRIAL_DAYS);

// Active Tier State (standalone vs connected)
let currentTierKey = "standalone";

function renderPlans(tierKey) {
  const tier = TIERS[tierKey] || TIERS.standalone;
  const base = tier.plans.find(p => p.months === 1)?.price ?? tier.plans[0].price;
  const tierName = tier.name[LANG];
  const items = tier.features[LANG];

  fill("plans", tier.plans.map(p => {
    const [name, term] = L.plan[p.id];
    const save = Math.round((1 - p.price / (base * p.months)) * 100);
    return `<div class="plan${p.best ? " best" : ""}">
      ${p.best ? `<span class="tag">${L.best}</span>` : ""}
      <h3>${name}</h3>
      <div class="term">${term}</div>
      <div class="amount">${fmt(p.price)}</div>
      <div class="per">${p.months > 1 ? L.perMonth(fmt(p.price / p.months)) : L.perDevice}</div>
      <span class="save${save > 0 ? "" : " none"}">${L.save(save)}</span>
      <ul>${items.map(t => `<li>${icon("i-check")}${t}</li>`).join("")}</ul>
      <div class="actions">
        ${p.payUrl ? `<a class="btn btn-primary" href="${esc(p.payUrl)}" ${ext}>${L.pay}</a>` : ""}
        <a class="btn ${p.best && !p.payUrl ? "btn-primary" : "btn-wa"}" href="${wa(L.planMsg(tierName, name, fmt(p.price)))}" ${ext}>${icon("i-chat")}${L.buyWa}</a>
        <a class="btn btn-ghost" href="${mail("Universal POS " + tierName + " " + name)}">${icon("i-mail")}${L.email}</a>
      </div>
    </div>`;
  }).join(""));

  fill("priceNote", `${L.priceNote(tierName)} ${tier.note[LANG]}`);
  fill("tierDesc", tier.tagline[LANG]);
}

// Free trial, multi-year, lifetime
function otherCard(o) {
  const [name, term, items] = L.other[o.id] || L.other.trial;
  const isTrial = o.id === "trial" || o.id === "free" || o.price === 0;
  const amount = o.price === null ? L.contact : fmt(o.price);
  const per = o.price === null ? "" : (isTrial ? L.trialPer : L.once);
  const tag = isTrial ? (L.trialTag || "Free Trial") : "";
  const cta = isTrial ? `<a class="btn btn-primary" href="#download">${icon("i-download")}${L.trialCta}</a>`
    : o.payUrl ? `<a class="btn btn-primary" href="${esc(o.payUrl)}" ${ext}>${L.pay}</a>`
    : `<a class="btn btn-wa" href="${wa(L.otherMsg(name))}" ${ext}>${icon("i-chat")}${L.talk}</a>`;
  return `<div class="plan${isTrial ? " free-card" : ""}">
    ${tag ? `<span class="tag" style="background:var(--ok)">${tag}</span>` : ""}
    <h3>${name}</h3>
    <div class="term">${term}</div>
    <div class="amount">${amount}</div>
    <div class="per">${per}</div>
    <ul>${items.map(t => `<li>${icon("i-check")}${t}</li>`).join("")}</ul>
    <div class="actions">${cta}</div>
  </div>`;
}

// Multi-year: N years at the annual price minus that term's percent
function multiYearCard(tier) {
  const annual = tier.plans.find(p => p.months === 12);
  if (!MULTI_YEAR.show || !annual) return "";
  const [name, term, items] = L.other.multiyear;
  const tierName = tier.name[LANG];
  const rows = MULTI_YEAR.terms.map(([y, off]) => {
    const total = Math.round(annual.price * y * (100 - off) / 100);
    return `<li class="my-row"><span><b>${L.years(y)}</b> · ${L.save(off)}</span>
      <span class="my-price">${fmt(total)}<small>${L.perYear(fmt(Math.round(total / y)))}</small></span></li>`;
  }).join("");
  const cta = MULTI_YEAR.payUrl ? `<a class="btn btn-primary" href="${esc(MULTI_YEAR.payUrl)}" ${ext}>${L.pay}</a>`
    : `<a class="btn btn-wa" href="${wa(L.otherMsg(tierName + " " + name))}" ${ext}>${icon("i-chat")}${L.talk}</a>`;
  return `<div class="plan plan-multiyear">
    <h3>${tierName} · ${name}</h3>
    <div class="term">${term}</div>
    <ul class="my-list">${rows}</ul>
    <div class="per">${L.once}</div>
    <ul>${items.map(t => `<li>${icon("i-check")}${t}</li>`).join("")}</ul>
    <div class="actions">${cta}</div>
  </div>`;
}

function renderOtherPlans(tierKey) {
  const tier = TIERS[tierKey] || TIERS.standalone;
  const shownOther = OTHER_PLANS.filter(o => o.show);
  fill("otherPlans", [
    ...shownOther.filter(o => o.price === 0).map(otherCard),
    multiYearCard(tier),
    ...shownOther.filter(o => o.price !== 0).map(otherCard),
  ].join(""));
}

// Multi-device calculator
const calcPlan = $("calcPlan"), calcN = $("calcN");
let calc = () => {};

if (calcPlan && calcN) {
  const optionsHtml = Object.keys(TIERS).map(k => {
    const t = TIERS[k];
    const groupLabel = `${t.name[LANG]} (${t.badge[LANG]})`;
    const opts = t.plans.map(p => {
      const selected = (k === "standalone" && p.best) ? " selected" : "";
      return `<option value="${k}:${p.id}"${selected}>${t.name[LANG]} ${L.plan[p.id][0]} · ${fmt(p.price)}</option>`;
    }).join("");
    return `<optgroup label="${groupLabel}">${opts}</optgroup>`;
  }).join("");
  calcPlan.innerHTML = optionsHtml;

  fill("volume", `
    <span class="volume-rule">${icon("i-check")}${L.volumeRule}</span>
    ${VOLUME_PILLS.map(v => `<span>${L.volume(v.min, v.off)}</span>`).join("")}
  `);

  calc = () => {
    const [tierKey, planId] = (calcPlan.value || "standalone:annual").split(":");
    const tier = TIERS[tierKey] || TIERS.standalone;
    const p = tier.plans.find(x => x.id === planId) || tier.plans[3];
    const n = Math.max(1, Math.min(999, parseInt(calcN.value, 10) || 1));
    const off = getVolumeDiscount(n);
    const list = p.price * n;
    const discountAmount = Math.round(list * (off / 100));
    const total = list - discountAmount;
    const tierName = tier.name[LANG];
    const planName = L.plan[p.id][0];

    fill("calcOut", `
      <div class="lines">
        <div><span>${L.calcList} (${n} × ${fmt(p.price)})</span><span>${fmt(list)}</span></div>
        ${off > 0 ? `<div><span>${L.calcDiscount(off)}</span><span>−${fmt(discountAmount)}</span></div>` : ""}
      </div>
      <div class="term">${L.calcTotal}</div>
      <div class="total">${fmt(total)}</div>
      <div class="lines">${L.calcEach(fmt(total / n), L.months(p.months))}</div>
      <a class="btn btn-wa" href="${wa(L.quoteMsg(tierName, planName, n, fmt(total), off))}" ${ext}>${icon("i-chat")}${L.calcBuy}</a>`);
  };

  calcPlan.addEventListener("change", () => {
    const [tKey] = (calcPlan.value || "").split(":");
    if (tKey && tKey !== currentTierKey) {
      setTier(tKey, false);
    }
    calc();
  });
  calcN.addEventListener("input", calc);
}

// Tier Switcher Buttons
const btnStandalone = $("tierStandalone"), btnConnected = $("tierConnected");

function setTier(key, updateCalc = true) {
  currentTierKey = key;
  if (btnStandalone && btnConnected) {
    const isStandalone = key === "standalone";
    btnStandalone.classList.toggle("active", isStandalone);
    btnStandalone.setAttribute("aria-selected", String(isStandalone));
    btnConnected.classList.toggle("active", !isStandalone);
    btnConnected.setAttribute("aria-selected", String(!isStandalone));
  }
  renderPlans(key);
  renderOtherPlans(key);
  if (updateCalc && calcPlan) {
    calcPlan.value = `${key}:annual`;
    calc();
  }
}

if (btnStandalone) btnStandalone.addEventListener("click", () => setTier("standalone"));
if (btnConnected) btnConnected.addEventListener("click", () => setTier("connected"));

// Initialize pricing
setTier("standalone", true);

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

// Structured data for search engines (prices come from both TIERS)
const ld = document.createElement("script");
ld.type = "application/ld+json";
ld.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Universal POS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android, Windows, Linux, iOS, Web",
  offers: [
    ...TIERS.standalone.plans.map(p => ({
      "@type": "Offer",
      name: `Universal POS Standalone ${T.en.plan[p.id][0]}`,
      price: p.price,
      priceCurrency: "INR",
      description: "100% offline standalone POS for retail and restaurant",
    })),
    ...TIERS.connected.plans.map(p => ({
      "@type": "Offer",
      name: `Universal POS Connected ${T.en.plan[p.id][0]}`,
      price: p.price,
      priceCurrency: "INR",
      description: "Cloud sync and web admin panel POS for retail and restaurant",
    })),
  ],
});
document.head.appendChild(ld);

$("year") && ($("year").textContent = new Date().getFullYear());

// Mobile menu
const menuBtn = $("menuBtn"), navLinks = $("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  navLinks.addEventListener("click", e => {
    if (e.target.tagName === "A") { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }
  });
}

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
$("themeBtn")?.addEventListener("click", () => {
  root.dataset.theme = isDark() ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  syncShots();
});

// Screenshot tabs
const tabs = [["tabDesk", "galDesk"], ["tabPhone", "galPhone"]];
tabs.forEach(([t]) => $(t)?.addEventListener("click", () => {
  tabs.forEach(([t2, g2]) => {
    const on = t2 === t;
    $(t2)?.setAttribute("aria-selected", on);
    if ($(g2)) $(g2).hidden = !on;
  });
}));

// Lightbox
const lb = $("lightbox"), lbImg = $("lbImg"), lbCap = $("lbCap");
if (lb && lbImg && lbCap) {
  document.querySelectorAll(".gallery figure").forEach(f => f.addEventListener("click", () => {
    const img = f.querySelector("img");
    lbImg.src = img.src; lbImg.alt = img.alt;
    lbCap.textContent = f.querySelector("figcaption")?.textContent ?? "";
    lb.showModal();
  }));
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
}

// Links to #privacy, #terms, #refund open that policy
function openTarget() {
  const el = location.hash && document.getElementById(location.hash.slice(1));
  if (el && el.tagName === "DETAILS") { el.open = true; el.scrollIntoView(); }
}
addEventListener("hashchange", openTarget);
openTarget();
