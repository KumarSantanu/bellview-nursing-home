/**
 * Bellview Nursing Home — the ONE place for contact details and site settings.
 *
 * Every page gets these values at build time (see build/html-plugin.js), so a
 * phone number or address is changed here once, never in ten HTML files.
 *
 * RULE: only fill a value after Bellview management has confirmed it.
 * Leave it as null and the site shows "নিশ্চিত হলে যোগ হবে" instead of a guess.
 */

export const site = {
  /**
   * Public address of the site, without a trailing slash.
   * Set the SITE_URL environment variable in Cloudflare Pages
   * (Settings → Environment variables) rather than editing this line.
   * Empty = no canonical / sitemap / og:image URLs are emitted.
   */
  url: (process.env.SITE_URL || '').replace(/\/+$/, ''),

  /**
   * Demo mode: shows the "proposal website" notice on every page and tells
   * search engines not to index the site (meta robots + X-Robots-Tag).
   * Set to false only when every fact below has been confirmed.
   */
  demo: process.env.SITE_DEMO !== 'false',

  name: {
    bn: 'বেলভিউ নার্সিং হোম',
    en: 'Bellview Nursing Home',
  },

  place: {
    bn: 'তমলুক, পূর্ব মেদিনীপুর',
    en: 'Tamluk, Purba Medinipur',
  },

  // Matches the public Justdial listing. PIN differs in the Udyam record (721648) — confirm.
  address: {
    bn: 'বিবেকানন্দ নগর, ধারিণ্ডা, তমলুক, পূর্ব মেদিনীপুর, পশ্চিমবঙ্গ ৭২১৬৩৬',
    en: 'Vivekananda Nagar, Dharinda, Tamluk, Purba Medinipur, West Bengal 721636',
    street: 'Vivekananda Nagar, Dharinda',
    locality: 'Tamluk',
    region: 'West Bengal',
    postalCode: '721636',
    confirmed: false,
  },

  /**
   * Replace with the exact Google Maps "Share → Copy link" URL of Bellview's
   * own map pin once it is confirmed. Until then this searches the address.
   */
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Bellview Nursing Home, Vivekananda Nagar, Dharinda, Tamluk 721636'),

  /**
   * Reception phone and WhatsApp, in international format without spaces,
   * e.g. '+913228XXXXXX'. null = not confirmed yet: every call / WhatsApp
   * button is replaced by a "number coming soon" note.
   */
  phone: null,
  phoneDisplay: { bn: null, en: null }, // e.g. '০৩২২৮-XXXXXX' / '03228-XXXXXX'
  whatsapp: null,

  /** Reception / OPD hours as shown to visitors. null = not confirmed. */
  hours: { bn: null, en: null },
};
