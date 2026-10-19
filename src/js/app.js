/**
 * Bellview Nursing Home — small progressive enhancements.
 * The site works without this file: links, FAQ (<details>) and anchors are
 * plain HTML. This adds the menu toggle and the text-size control.
 */

const storage = {
  get(key) {
    try { return window.localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { window.localStorage.setItem(key, value); } catch { /* storage blocked: setting lasts for this page only */ }
  },
};

/* Text size (অ / A) — remembered per browser when storage is available. */
function setupTextSize() {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('.text-size-btn');
  const apply = (size) => {
    if (!['small', 'normal', 'large'].includes(size)) size = 'normal';
    root.dataset.fontSize = size;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.size === size)));
  };
  apply(storage.get('bellview_font_size') || 'normal');
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      apply(b.dataset.size);
      storage.set('bellview_font_size', b.dataset.size);
    }),
  );
}

/* Mobile menu: Esc / outside tap / link tap closes it; focus moves in and back. */
function setupMenu() {
  const btn = document.querySelector('.menu-btn');
  const panel = document.getElementById('site-menu');
  if (!btn || !panel) return;
  const openLabel = btn.getAttribute('aria-label');
  const closeLabel = document.documentElement.lang === 'en' ? 'Close menu' : 'মেনু বন্ধ করুন';

  const setOpen = (open, { returnFocus = true } = {}) => {
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? closeLabel : openLabel);
    document.body.classList.toggle('menu-open', open);
    if (open) panel.querySelector('a, button')?.focus();
    else if (returnFocus) btn.focus();
  };

  btn.addEventListener('click', () => setOpen(panel.hidden));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) setOpen(false);
  });
  document.addEventListener('click', (e) => {
    if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) setOpen(false, { returnFocus: false });
  });
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false, { returnFocus: false })));
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches && !panel.hidden) setOpen(false, { returnFocus: false });
  });
}

/* Print button on the patient guide */
function setupPrint() {
  document.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));
}

setupMenu();
setupTextSize();
setupPrint();
