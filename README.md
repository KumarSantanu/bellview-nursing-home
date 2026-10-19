# Bellview Nursing Home, Tamluk — website

A Bengali-first information website for Bellview Nursing Home, Vivekananda Nagar, Dharinda, Tamluk, Purba Medinipur. It is built as a proposal for the nursing home's management, so it runs in **demo mode** until they confirm the facts.

## Principles

- **Nothing is guessed.** Doctors, timings, phone numbers, services and rules appear only after Bellview confirms them. Until then the page shows a "নিশ্চিত হলে যোগ হবে" (to be confirmed) chip.
- **Reception desk first.** The address, phone and hours are on the first screen. There are four big task tiles, and a call / directions bar on phones.
- **For everyone.** Plain Bengali, 17px base text with a text-size control, 44px+ tap targets, and keyboard and screen-reader support. Works without JavaScript.
- **Light.** Plain HTML, CSS and a 2 KB script, with self-hosted fonts. No framework and no trackers.

## Pages

| URL | Content |
| --- | --- |
| `/` | Reception card, task tiles, facts at a glance, doctors preview, directions, short FAQ |
| `/doctors/` | Doctor list (to be confirmed) and what to bring |
| `/opd/` | OPD timings and how to register |
| `/admission/` | Admission documents and questions to ask |
| `/patient-guide/` | Printable guide for families: what to bring, staying with the patient, discharge |
| `/services/` | Services checklist (to be confirmed) |
| `/how-to-reach/` | Address, Google Maps link, step-by-step directions |
| `/faq/` | Common questions, including emergency, insurance and visiting hours |
| `/contact/` | Phone, WhatsApp, hours, address |
| `/en/` | One-page English summary |
| `404.html` | Not-found page (Cloudflare Pages serves it with HTTP 404) |

## Updating facts

All contact details live in **`site.config.js`**. Fill a value only after management confirms it, then rebuild:

```js
phone: '+913228XXXXXX',
phoneDisplay: { bn: '০৩২২৮-XXXXXX', en: '03228-XXXXXX' },
whatsapp: '+91XXXXXXXXXX',
hours: { bn: 'সকাল ১০টা – রাত ৮টা', en: '10 am – 8 pm' },
mapUrl: 'https://maps.app.goo.gl/…', // Bellview's own pin
```

Call and WhatsApp buttons appear automatically once `phone` and `whatsapp` are set. Page-specific facts (doctors, OPD times, services) are in each page's HTML, marked with `{{tbc}}`.

## How the build works

`build/html-plugin.js` is a small Vite plugin with no extra dependencies. Each page holds only its title, description and `<main>`. The plugin fills in:

- `<!-- @head -->`: SEO and social tags, fonts, stylesheet, JSON-LD
- `<!-- @header -->` and `<!-- @footer -->`: shared header, menu, demo notice, footer, mobile quick bar
- `{{icon:name}}`, `{{call-buttons}}`, `{{phone}}`, `{{hours}}`, `{{address}}`, `{{map-url}}`, `{{tbc}}`

It also writes `robots.txt`, `sitemap.xml` and Cloudflare's `_headers` (security headers, long caching for `/assets/*` and `/fonts/*`).

```bash
npm ci
npm run dev       # http://localhost:3000
npm run build     # output in dist/
```

## Deployment (Cloudflare Pages)

Build command `npm run build`, output directory `dist`.

| Environment variable | Effect |
| --- | --- |
| `SITE_URL` | Public URL, e.g. `https://bellview-nursing-home.pages.dev` now and the custom domain later. Enables canonical links, `og:url` / `og:image` (WhatsApp previews) and the sitemap. |
| `SITE_DEMO=false` | Turns off demo mode: removes the demo notice and `noindex`, and publishes the sitemap. Set this only when every fact is confirmed. |

### When the custom domain is connected

1. Add it under Pages → Custom domains.
2. Set `SITE_URL` to the new domain and `SITE_DEMO=false`, then redeploy.
3. Add a Cloudflare redirect rule from `bellview-nursing-home.pages.dev` to the custom domain.
4. Submit `/sitemap.xml` in Google Search Console, and add the website to Bellview's Google Business Profile and Justdial listing.

## Facts Bellview must confirm

Official name spelling (Bellview / Belview), PIN code (721636 or 721648), exact map pin and landmark, reception phone and WhatsApp, reception and OPD hours, doctors (name, department, days, times), services offered, emergency / 24-hour admission, Swasthya Sathi and insurance, admission documents and deposit, attendant and visiting rules, discharge timing, photos (with permission).

## Licences

Noto Sans Bengali: SIL Open Font License 1.1 (`public/fonts/OFL.txt`). Icons are drawn after the Lucide set (ISC).
