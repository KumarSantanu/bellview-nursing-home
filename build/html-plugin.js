/**
 * Build-time HTML partials for the Bellview site (no extra dependencies).
 *
 * Each page keeps only its own <title>, meta description and <main> content.
 * This plugin fills in the shared parts, so the header, footer, contact
 * details and SEO tags are written once:
 *
 *   <!-- @head -->        SEO / social tags, fonts, stylesheet, JSON-LD
 *   <!-- @header -->      skip link, header, menu, demo notice
 *   <!-- @footer -->      footer, mobile bottom bar, script
 *   {{icon:name}}         inline SVG icon (build/icons.js)
 *   {{call-buttons}}      call + WhatsApp buttons, or a "number coming soon" note
 *   {{phone}} {{hours}}   confirmed value, or a "to be confirmed" chip
 *   {{address}} {{map-url}} {{tbc}}
 *
 * It also writes robots.txt, sitemap.xml and Cloudflare's _headers file.
 */
import { site } from '../site.config.js';
import { icon } from './icons.js';

const T = {
  bn: {
    skip: 'সরাসরি মূল তথ্যে যান',
    menu: 'মেনু',
    menuOpen: 'মেনু খুলুন',
    mainNav: 'মূল মেনু',
    langLink: { href: '/en/', label: 'English', lang: 'en', aria: 'Read this site in English' },
    nav: [
      ['/doctors/', 'ডাক্তার'],
      ['/opd/', 'OPD'],
      ['/admission/', 'ভর্তি'],
      ['/patient-guide/', 'রোগী ও পরিবার'],
      ['/how-to-reach/', 'কীভাবে আসবেন'],
    ],
    allPages: [
      ['/', 'হোম', 'home'],
      ['/doctors/', 'ডাক্তার', 'doctor'],
      ['/opd/', 'OPD ও অ্যাপয়েন্টমেন্ট', 'calendar'],
      ['/admission/', 'ভর্তি সংক্রান্ত তথ্য', 'bed'],
      ['/patient-guide/', 'রোগী ও পরিবারের জন্য', 'family'],
      ['/services/', 'চিকিৎসা পরিষেবা', 'flask'],
      ['/how-to-reach/', 'কীভাবে আসবেন', 'route'],
      ['/faq/', 'সাধারণ প্রশ্ন', 'help'],
      ['/contact/', 'যোগাযোগ ও ঠিকানা', 'phone'],
      ['/en/', 'English (ইংরেজি)', 'globe'],
    ],
    contact: ['/contact/', 'যোগাযোগ'],
    textSize: 'অক্ষরের আকার',
    sizes: ['ছোট', 'স্বাভাবিক', 'বড়'],
    demo: 'প্রস্তাবিত ডেমো ওয়েবসাইট। বাকি তথ্য কর্তৃপক্ষ নিশ্চিত করার পর যোগ হবে।',
    tbc: 'নিশ্চিত হলে যোগ হবে',
    phoneSoon: 'ফোন নম্বর শীঘ্রই যোগ হবে',
    call: 'ফোন করুন',
    whatsapp: 'WhatsApp',
    waText: 'নমস্কার, বেলভিউ নার্সিং হোমে যোগাযোগ করতে চাই।',
    route: 'রাস্তা দেখুন',
    routeHref: '/how-to-reach/',
    quickBar: 'দ্রুত যোগাযোগ',
    footerPages: 'প্রয়োজনীয় পেজ',
    footerContact: 'ঠিকানা ও যোগাযোগ',
    footerTools: 'ভাষা ও পড়ার সুবিধা',
    phoneLabel: 'ফোন',
    hoursLabel: 'সময়',
    rights: '© ২০২৬ বেলভিউ নার্সিং হোম, তমলুক',
    demoFooter: 'প্রস্তাবিত ডেমো ওয়েবসাইট — চূড়ান্ত তথ্য কর্তৃপক্ষের অনুমোদন সাপেক্ষ।',
    locale: 'bn_IN',
  },
  en: {
    skip: 'Skip to main content',
    menu: 'Menu',
    menuOpen: 'Open menu',
    mainNav: 'Main menu',
    langLink: { href: '/', label: 'বাংলা', lang: 'bn', aria: 'বাংলায় পড়ুন' },
    nav: [
      ['#doctors', 'Doctors & OPD'],
      ['#admission', 'Admission'],
      ['#reach', 'How to reach'],
    ],
    allPages: [
      ['#top', 'Home', 'home'],
      ['#doctors', 'Doctors & OPD', 'doctor'],
      ['#admission', 'Admission & patient guide', 'bed'],
      ['#reach', 'How to reach', 'route'],
      ['#faq', 'Questions', 'help'],
      ['#contact', 'Contact & address', 'phone'],
      ['/', 'Full site in Bengali (বাংলা)', 'globe'],
    ],
    contact: ['#contact', 'Contact'],
    textSize: 'Text size',
    sizes: ['Small', 'Normal', 'Large'],
    demo: 'Proposed demo website. Remaining details will be added once management confirms them.',
    tbc: 'to be confirmed',
    phoneSoon: 'Phone number coming soon',
    call: 'Call',
    whatsapp: 'WhatsApp',
    waText: 'Hello, I would like to contact Bellview Nursing Home.',
    route: 'Directions',
    routeHref: '#reach',
    quickBar: 'Quick contact',
    footerPages: 'On this page',
    footerContact: 'Address & contact',
    footerTools: 'Language & reading',
    phoneLabel: 'Phone',
    hoursLabel: 'Hours',
    rights: '© 2026 Bellview Nursing Home, Tamluk',
    demoFooter: 'Proposed demo website — final details subject to management approval.',
    locale: 'en_IN',
  },
};

const PAGES = ['/', '/doctors/', '/opd/', '/services/', '/patient-guide/', '/admission/', '/how-to-reach/', '/faq/', '/contact/', '/en/'];

function pagePath(ctxPath) {
  let p = ctxPath.split('?')[0].replace(/index\.html$/, '');
  if (p.endsWith('.html')) p = p.slice(0, -5); // /404.html -> /404
  else if (!p.endsWith('/')) p += '/';
  return p || '/';
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// "তমলুক<span>, পূর্ব মেদিনীপুর</span>" — the district part is hidden on narrow phones.
const placeParts = (lang) => {
  const [town, ...rest] = site.place[lang].split(',');
  return `${town}<span class="place-long">,${rest.join(',')}</span>`;
};
const tbc = (t) => `<span class="tbc">${t.tbc}</span>`;

function head({ lang, path, title, description }) {
  const t = T[lang];
  const abs = (p) => site.url + p;
  const out = ['<meta name="theme-color" content="#084C44">'];
  if (site.demo) out.push('<meta name="robots" content="noindex, nofollow">');
  if (site.url && path !== '/404') {
    out.push(`<link rel="canonical" href="${abs(path)}">`);
    if (path === '/' || path === '/en/') {
      out.push(`<link rel="alternate" hreflang="bn" href="${abs('/')}">`);
      out.push(`<link rel="alternate" hreflang="en" href="${abs('/en/')}">`);
      out.push(`<link rel="alternate" hreflang="x-default" href="${abs('/')}">`);
    }
    out.push(`<meta property="og:url" content="${abs(path)}">`);
    out.push(`<meta property="og:image" content="${abs('/images/og-image.png')}">`);
    out.push('<meta property="og:image:width" content="1200">', '<meta property="og:image:height" content="630">');
  }
  out.push(
    '<meta property="og:type" content="website">',
    `<meta property="og:site_name" content="${esc(site.name[lang])}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:locale" content="${t.locale}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    '<link rel="icon" type="image/svg+xml" href="/favicon.svg">',
    '<link rel="apple-touch-icon" href="/images/apple-touch-icon.png">',
    '<link rel="preload" href="/fonts/noto-sans-bengali-bengali-400-v5.woff2" as="font" type="font/woff2" crossorigin>',
    '<link rel="stylesheet" href="/src/styles/main.css">',
  );
  if (path === '/' || path === '/en/') {
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'MedicalOrganization',
      name: site.name.en,
      alternateName: site.name.bn,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: 'IN',
      },
    };
    if (site.url) ld.url = site.url + '/';
    if (site.phone) ld.telephone = site.phone;
    out.push(`<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
  }
  return out.join('\n  ');
}

function navLink([href, label], path, cls) {
  const current = href === path ? ' aria-current="page"' : '';
  return `<a href="${href}" class="${cls}"${current}>${label}</a>`;
}

function textSizeGroup(t) {
  const sizes = ['small', 'normal', 'large'];
  return `<div class="text-size" role="group" aria-label="${t.textSize}">
        <span class="text-size-label">${t.textSize}</span>
        ${sizes.map((s, i) => `<button type="button" class="text-size-btn" data-size="${s}" aria-pressed="${s === 'normal'}" aria-label="${t.sizes[i]}"><span aria-hidden="true" class="ts-${s}">${lang_A(t)}</span></button>`).join('\n        ')}
      </div>`;
}
const lang_A = (t) => (t === T.bn ? 'অ' : 'A');

function header({ lang, path }) {
  const t = T[lang];
  const home = lang === 'en' ? '/en/' : '/';
  const L = t.langLink;
  const callBtn = site.phone
    ? `<a class="header-call" href="tel:${site.phone}" aria-label="${t.call}">${icon('phone')}</a>`
    : '';
  return `<a href="#main" class="skip-link">${t.skip}</a>
  <header class="site-header" id="top">
    <div class="container header-row">
      <a href="${home}" class="brand"${path === home ? ' aria-current="page"' : ''}>
        <img src="/favicon.svg" alt="" width="40" height="40" class="brand-mark">
        <span class="brand-text">
          <span class="brand-name">${site.name[lang]}</span>
          <span class="brand-place">${placeParts(lang)}</span>
        </span>
      </a>
      <nav class="nav-desktop" aria-label="${t.mainNav}">
        ${t.nav.map((n) => navLink(n, path, 'nav-link')).join('\n        ')}
        ${navLink(t.contact, path, 'nav-link nav-contact')}
      </nav>
      <div class="header-actions">
        ${callBtn}
        <a href="${L.href}" class="lang-link" lang="${L.lang}" hreflang="${L.lang}" aria-label="${L.aria}">${icon('globe')}<span>${L.label}</span></a>
        <button type="button" class="menu-btn" aria-expanded="false" aria-controls="site-menu" aria-label="${t.menuOpen}">
          <span class="menu-icon-open">${icon('menu')}</span><span class="menu-icon-close">${icon('close')}</span><span class="menu-btn-label">${t.menu}</span>
        </button>
      </div>
    </div>
    <div class="menu-panel" id="site-menu" hidden>
      <div class="container">
        <nav aria-label="${t.menu}">
          <ul class="menu-list">
            ${t.allPages.map(([href, label, ic]) => `<li><a href="${href}" class="menu-link"${href === path ? ' aria-current="page"' : ''}>${icon(ic)}<span>${label}</span></a></li>`).join('\n            ')}
          </ul>
        </nav>
        ${textSizeGroup(t)}
      </div>
    </div>
  </header>
  ${site.demo ? `<div class="demo-notice" role="note"><div class="container">${icon('info')}<p>${t.demo}</p></div></div>` : ''}`;
}

function callButtons(lang, { compact = false } = {}) {
  const t = T[lang];
  const size = compact ? '' : ' btn-lg';
  const parts = [];
  if (site.phone) parts.push(`<a class="btn btn-primary${size}" href="tel:${site.phone}">${icon('phone')}<span>${t.call}</span></a>`);
  else parts.push(`<p class="pending-note">${icon('phone')}<span>${t.phoneSoon}</span></p>`);
  if (site.whatsapp) {
    const wa = `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(t.waText)}`;
    parts.push(`<a class="btn btn-whatsapp${size}" href="${wa}" target="_blank" rel="noopener noreferrer">${icon('chat')}<span>${t.whatsapp}</span></a>`);
  }
  return parts.join('\n');
}

function footer({ lang, path }) {
  const t = T[lang];
  const pages = t.allPages.filter(([h]) => h !== '/' && h !== '/en/');
  const bar = [];
  if (site.phone) bar.push(`<a href="tel:${site.phone}" class="bar-btn bar-call">${icon('phone')}<span>${t.call}</span></a>`);
  else bar.push(`<a href="${lang === 'en' ? '#contact' : '/contact/'}" class="bar-btn bar-call">${icon('phone')}<span>${lang === 'en' ? 'Contact' : 'যোগাযোগ'}</span></a>`);
  if (site.whatsapp) bar.push(`<a href="https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(t.waText)}" target="_blank" rel="noopener noreferrer" class="bar-btn bar-wa">${icon('chat')}<span>${t.whatsapp}</span></a>`);
  bar.push(`<a href="${t.routeHref}" class="bar-btn bar-route">${icon('pin')}<span>${t.route}</span></a>`);
  const otherLang = T[lang].langLink;
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <section class="footer-col" aria-labelledby="f-contact">
        <h2 class="footer-title" id="f-contact">${t.footerContact}</h2>
        <p>${site.name[lang]}<br>${site.address[lang]}</p>
        <p><strong>${t.phoneLabel}:</strong> ${site.phoneDisplay[lang] || site.phone || tbc(t)}</p>
        <p><strong>${t.hoursLabel}:</strong> ${site.hours[lang] || tbc(t)}</p>
      </section>
      <nav class="footer-col" aria-labelledby="f-pages">
        <h2 class="footer-title" id="f-pages">${t.footerPages}</h2>
        <ul class="footer-links">
          ${pages.map(([href, label]) => `<li><a href="${href}"${href === path ? ' aria-current="page"' : ''}>${label}</a></li>`).join('\n          ')}
        </ul>
      </nav>
      <section class="footer-col" aria-labelledby="f-tools">
        <h2 class="footer-title" id="f-tools">${t.footerTools}</h2>
        <p><a class="footer-lang" href="${otherLang.href}" lang="${otherLang.lang}" hreflang="${otherLang.lang}">${icon('globe')}<span>${otherLang.label}</span></a></p>
        ${textSizeGroup(t)}
      </section>
    </div>
    <div class="container footer-bottom">
      <p>${t.rights}</p>
      ${site.demo ? `<p>${t.demoFooter}</p>` : ''}
    </div>
  </footer>
  <nav class="quick-bar" aria-label="${t.quickBar}">
    ${bar.join('\n    ')}
  </nav>
  <script type="module" src="/src/js/app.js"></script>`;
}

export function transformPage(html, ctxPath) {
  const path = pagePath(ctxPath);
  const lang = /<html[^>]*lang="en"/.test(html) ? 'en' : 'bn';
  const t = T[lang];
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || site.name[lang];
  const description = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  return html
    .replace('<!-- @head -->', () => head({ lang, path, title, description }))
    .replace('<!-- @header -->', () => header({ lang, path }))
    .replace('<!-- @footer -->', () => footer({ lang, path }))
    .replace(/\{\{icon:([a-z-]+)\}\}/g, (_, n) => icon(n))
    .replace(/\{\{call-buttons\}\}/g, () => callButtons(lang))
    .replace(/\{\{phone\}\}/g, () => site.phoneDisplay[lang] || site.phone || tbc(t))
    .replace(/\{\{hours\}\}/g, () => site.hours[lang] || tbc(t))
    .replace(/\{\{address\}\}/g, () => site.address[lang])
    .replace(/\{\{map-url\}\}/g, () => esc(site.mapUrl))
    .replace(/\{\{tbc\}\}/g, () => tbc(t));
}

function robots() {
  const lines = ['User-agent: *', 'Allow: /'];
  if (site.url && !site.demo) lines.push('', `Sitemap: ${site.url}/sitemap.xml`);
  return lines.join('\n') + '\n';
}

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = PAGES.map((p) => `  <url><loc>${site.url}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function headers() {
  const csp = [
    "default-src 'self'",
    "img-src 'self' data:",
    "style-src 'self'",
    "font-src 'self'",
    "script-src 'self'",
    "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
  ].join('; ');
  return `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Content-Security-Policy: ${csp}
${site.demo ? '  X-Robots-Tag: noindex, nofollow\n' : ''}
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable
`;
}

export function bellviewHtml() {
  return {
    name: 'bellview-html',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        return transformPage(html, ctx.path || ctx.filename || '/');
      },
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots() });
      this.emitFile({ type: 'asset', fileName: '_headers', source: headers() });
      if (site.url && !site.demo) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap() });
    },
  };
}
