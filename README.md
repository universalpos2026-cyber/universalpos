# Universal POS website

A static sales site with one page per language: English (`index.html`) and Hindi (`hi.html`). There's no build step
and no external scripts or fonts. Everything the site uses is in this folder.

```
index.html, hi.html        the page in English and Hindi (same sections, same ids)
assets/site.css            all styles (light + dark)
assets/site.js             SETTINGS (top of file) + English/Hindi text for prices, downloads, stores
assets/logo.png            app icon (from packaging/icons/universal-pos.png)
assets/og.jpg              preview picture when the link is shared
assets/screens/dark/       dark-theme screenshots (WebP)
assets/screens/light/      light-theme screenshots (WebP, same names)
assets/pdf/                shop guide PDFs (English, Hindi); no seller/vendor docs
downloads/                 signed release files for the download buttons (not in git; see downloads/README.md)
robots.txt, sitemap.xml    for search engines; site address https://universalpos.in/
.nojekyll                  tells GitHub Pages to serve files as they are
deploy-pages.example.yml   optional GitHub Action that publishes this folder on every release tag
```

## Settings (top of `assets/site.js`, marked `EDIT THESE`)

| Setting | What | Now |
| --- | --- | --- |
| `CONTACT.whatsapp`, `CONTACT.email` | Buy, demo and download buttons | 918922962849, universalpos2026@gmail.com |
| `TRIAL_DAYS` | Free-trial length shown everywhere | 30 |
| `PLANS` | Monthly, quarterly, half-yearly, annual price per device; `payUrl` = Razorpay/Cashfree link adds a "Pay now" button; `best: true` highlights one | ₹499 / ₹1,399 / ₹2,699 / ₹4,999 |
| `VOLUME` | Multi-device discount (used by the calculator) | 3+ = 10%, 5+ = 15% |
| `OTHER_PLANS` | Free trial (₹0 for 1 month) and lifetime cards; self-host is not offered (`show: false`) | ₹0 / ₹14,999 / hidden |
| `MULTI_YEAR` | Multi-year card priced from the annual plan: `terms` = `[years, % off]` | 2 yr 10% / 3 yr 15% / 5 yr 20% |
| `RELEASE` | App version of the files in `downloads/`; must equal `apps/pos/pubspec.yaml` | 0.1.8 |
| `DOWNLOADS` | Trial download buttons → `downloads/<file>` (APK, Windows, .deb, .tar.gz, SHA256SUMS); empty `url` = ask on WhatsApp | All set except web panel |
| `STORES` | App store listings; `status: "live"` + `url` when live | All "soon" |
| `VIDEO_ID` | YouTube id of the demo video; empty hides the section | Empty |
| `TESTIMONIALS` | Real quotes only, with the shop's permission; empty hides the section | Empty |

"Save %", "per month" and the calculator are worked out from these numbers. Plan names and button text in both
languages are in the `T` object below the settings.

Before going live, also check:
- **Terms, privacy and refund text** (`#terms`, `#privacy`, `#refund` in both pages) is a starting draft. Have it
  checked before you take payments, since Razorpay and Cashfree ask for these pages.

## Update after a new release

- After changing `assets/site.css` or `assets/site.js`, raise the `?v=` number in their links in both pages
  (`site.css?v=2` → `?v=3`). Otherwise browsers keep the old file.

- Text lives in both `index.html` and `hi.html`. Change both.
- Feature cards are in `#features` and roadmap phases are in `#roadmap`. When a phase ships, change its badge from
  `badge soon` to `badge ok` and give its `<li>` the class `done`.
- New guide PDFs: run `python3 tools/guide/build.py`, copy them into `assets/pdf/`, and update the links in `#guide`.
- Screenshots follow the page theme (`dark/` ↔ `light/`, same names, `phone-` prefix for phone shots).
  - Dark ones come from `docs/guide/images/en/`.
  - Light ones: `cd apps/pos && flutter test --update-goldens tool/guide_screenshots_test.dart --dart-define=GUIDE_THEME=light --dart-define=GUIDE_LANGS=en --dart-define=GUIDE_OUT=../../../.claude/tmp/shots-light`
    (about 4 min), then copy the files you need from `.claude/tmp/shots-light/en/{desktop,phone}/`.
  - Convert to WebP: `python3 -c "from PIL import Image; import sys; [Image.open(f).convert('RGB').save(f[:-4]+'.webp', quality=82, method=6) for f in sys.argv[1:]]" *.png`
- Store plan: `docs/superpowers/plans/2026-10-18-store-listings.md`. The stores ask for the privacy URL
  (`…/#privacy`, which opens that section).

## Preview locally

```
python3 -m http.server 8090 --directory website_planned
```

Open http://localhost:8090 (English) or http://localhost:8090/hi.html (Hindi).

## Publish on GitHub Pages

The main repo is private, and Pages on a private repo needs a paid GitHub plan. To publish for free:

1. Create a public repo, e.g. `universal-pos-site`.
2. Copy this folder's contents (including `.nojekyll`) to its root, then commit and push. Or copy
   `deploy-pages.example.yml` to `.github/workflows/deploy-site.yml` in the main repo and add the `SITE_DEPLOY_TOKEN`
   secret; it then publishes on every release tag.
3. In the site repo, open Settings → Pages → *Deploy from a branch*, choose `main`, folder `/ (root)`.
4. For a custom domain (e.g. `universalpos.in`), add it under Settings → Pages (or set `cname:` in the workflow). Then
   replace `https://example.com/` in `robots.txt` and `sitemap.xml`.

All links are relative, so the site also works under `https://<user>.github.io/universal-pos-site/`.
