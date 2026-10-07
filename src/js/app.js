/**
 * Bellview Nursing Home, Tamluk
 * Core interactive controller:
 * - Font Size (A- | A | A+)
 * - Bilingual Toggle (BN / EN)
 * - Mobile Navigation Drawer
 * - Expandable FAQ Accordion
 * - Simple Instant Search (কী খুঁজছেন?)
 * - Management Preview: Bellview Digital Desk Simulator
 */

import { siteData } from '../data/siteData.js';

class BellviewApp {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.currentFontSize = localStorage.getItem('bellview_font_size') || 'normal';
    this.init();
  }

  detectLanguage() {
    // If URL contains /en/ or localStorage is en
    if (window.location.pathname.includes('/en/')) {
      return 'en';
    }
    return localStorage.getItem('bellview_lang') || 'bn';
  }

  init() {
    this.applyFontSize(this.currentFontSize);
    this.setupFontSizeControls();
    this.setupLanguageToggle();
    this.setupMobileMenu();
    this.setupFaqAccordion();
    this.setupInstantSearch();
    this.setupDigitalDeskModal();
    this.setupSmoothScroll();
  }

  /* -------------------------------------------------------------
     1. FONT SIZE ADJUSTMENT (A- | A | A+)
     ------------------------------------------------------------- */
  applyFontSize(size) {
    document.documentElement.setAttribute('data-font-size', size);
    localStorage.setItem('bellview_font_size', size);
    this.currentFontSize = size;

    // Update active state in UI
    document.querySelectorAll('.font-size-btn').forEach(btn => {
      const targetSize = btn.getAttribute('data-size');
      if (targetSize === size) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  setupFontSizeControls() {
    const buttons = document.querySelectorAll('.font-size-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const size = btn.getAttribute('data-size');
        this.applyFontSize(size);
      });
    });
  }

  /* -------------------------------------------------------------
     2. BILINGUAL TOGGLE (বাংলা | English)
     ------------------------------------------------------------- */
  setupLanguageToggle() {
    const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const newLang = this.currentLang === 'bn' ? 'en' : 'bn';
        localStorage.setItem('bellview_lang', newLang);
        
        // If navigating to English from root or vice versa
        const currentPath = window.location.pathname;
        if (newLang === 'en' && !currentPath.includes('/en/')) {
          window.location.href = '/en/';
        } else if (newLang === 'bn' && currentPath.includes('/en/')) {
          window.location.href = '/';
        } else {
          // If bilingual elements are on page, toggle their visibility
          this.togglePageLanguageElements(newLang);
        }
      });
    });
  }

  togglePageLanguageElements(lang) {
    this.currentLang = lang;
    document.querySelectorAll('[data-lang-bn]').forEach(el => {
      const bnText = el.getAttribute('data-lang-bn');
      const enText = el.getAttribute('data-lang-en');
      if (lang === 'en' && enText) {
        el.textContent = enText;
      } else if (bnText) {
        el.textContent = bnText;
      }
    });
  }

  /* -------------------------------------------------------------
     3. MOBILE MENU DRAWER
     ------------------------------------------------------------- */
  setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const drawer = document.querySelector('.mobile-drawer');

    if (!toggle || !drawer) return;

    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', !isOpen);
      toggle.innerHTML = !isOpen ? '✕ বন্ধ করুন' : '☰ মেনু';
    });

    // Close when clicking nav link inside
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '☰ মেনু';
      });
    });
  }

  /* -------------------------------------------------------------
     4. FAQ ACCORDION (One/Multi-card expandable)
     ------------------------------------------------------------- */
  setupFaqAccordion() {
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
      const btn = card.querySelector('.faq-question-btn');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        // Toggle current card
        if (isOpen) {
          card.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          card.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* -------------------------------------------------------------
     5. SIMPLE INSTANT SEARCH (কী খুঁজছেন?)
     ------------------------------------------------------------- */
  setupInstantSearch() {
    const searchInput = document.querySelector('#quickSearchInput');
    const clearBtn = document.querySelector('#quickSearchClear');
    const resultsTray = document.querySelector('#quickSearchResults');
    const resultsList = document.querySelector('#quickSearchList');

    if (!searchInput || !resultsTray || !resultsList) return;

    const searchableItems = [
      { title: "👨‍⚕️ ডাক্তার ও বিশেষজ্ঞ তালিকা", url: "#doctors-section", keywords: "ডাক্তার doctor doc মেডিসিন শিশু স্ত্রী হাড় specialist" },
      { title: "📅 OPD ও সময়সূচী", url: "#today-section", keywords: "ওপিডি opd সময় timing কখন বসেন বহির্বিভাগ appointment" },
      { title: "🏥 রোগী ভর্তি সংক্রান্ত নিয়ম", url: "#patient-guide-section", keywords: "ভর্তি admission admit কাগজপত্র নিয়ম ডকুমেন্ট" },
      { title: "🎒 হাসপাতালে কী কী সঙ্গে আনবেন", url: "#patient-guide-section", keywords: "জিনিসপত্র পোশাক ব্যাগ ওষুধ কাপড় সামগ্রী" },
      { title: "📍 তমলুক স্টেশন থেকে কীভাবে আসবেন", url: "#how-to-reach-section", keywords: "রাস্তা route location স্টেশন ট্রেন train toto টোটো ধারিণ্ডা ম্যাপ" },
      { title: "📞 সরাসরি যোগাযোগ ও ফোন নম্বর", url: "#contact-section", keywords: "ফোন phone call যোগাযোগ কথা বলা whatsapp নম্বর" },
      { title: "🔬 প্যাথলজি ও স্বাস্থ্য পরীক্ষা", url: "#services-section", keywords: "পরীক্ষা test blood রক্ত প্যাথলজি ল্যাব" }
    ];

    const performSearch = (query) => {
      const cleanQ = query.trim().toLowerCase();
      if (!cleanQ) {
        resultsTray.classList.remove('has-results');
        if (clearBtn) clearBtn.classList.remove('visible');
        return;
      }

      if (clearBtn) clearBtn.classList.add('visible');

      const matches = searchableItems.filter(item => 
        item.title.toLowerCase().includes(cleanQ) || 
        item.keywords.toLowerCase().includes(cleanQ)
      );

      if (matches.length > 0) {
        resultsList.innerHTML = matches.map(item => `
          <li>
            <a href="${item.url}" class="search-result-item">
              <span>👉</span>
              <span>${item.title}</span>
            </a>
          </li>
        `).join('');
        resultsTray.classList.add('has-results');
      } else {
        resultsList.innerHTML = `
          <li style="padding: 12px; color: var(--color-text-muted); font-size: 1.05rem;">
            কোনো তথ্য মেলেনি। দয়া করে সরাসরি <a href="#contact-section" style="color: var(--color-primary); font-weight: bold; text-decoration: underline;">ফোনে যোগাযোগ করুন</a>।
          </li>
        `;
        resultsTray.classList.add('has-results');
      }
    };

    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const firstLink = resultsList.querySelector('a.search-result-item');
        if (firstLink) {
          e.preventDefault();
          firstLink.click();
          resultsTray.classList.remove('has-results');
        }
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        resultsTray.classList.remove('has-results');
        clearBtn.classList.remove('visible');
        searchInput.focus();
      });
    }

    // Dismiss search tray when clicking outside
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !resultsTray.contains(e.target)) {
        resultsTray.classList.remove('has-results');
      }
    });
  }

  /* -------------------------------------------------------------
     6. BELLVIEW DIGITAL DESK (Management Preview Simulator)
     Demonstrates live staff updates without code
     ------------------------------------------------------------- */
  setupDigitalDeskModal() {
    const openBtns = document.querySelectorAll('.trigger-digital-desk');
    const modal = document.querySelector('#digitalDeskModal');
    const closeBtn = document.querySelector('#closeDeskModal');

    if (!modal) return;

    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('open');
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });

    // Simulated form in modal to update announcement live
    const liveUpdateForm = document.querySelector('#deskSimulationForm');
    if (liveUpdateForm) {
      liveUpdateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newNotice = document.querySelector('#deskNoticeInput')?.value;
        const targetNoticeEl = document.querySelector('#todayAnnouncementText');
        if (targetNoticeEl && newNotice) {
          targetNoticeEl.textContent = newNotice;
          const statusMsg = document.querySelector('#deskSimulationStatus');
          if (statusMsg) {
            statusMsg.style.display = 'block';
            setTimeout(() => {
              statusMsg.style.display = 'none';
              modal.classList.remove('open');
            }, 1200);
          }
        }
      });
    }
  }

  /* -------------------------------------------------------------
     7. SMOOTH SCROLLING WITH OFFSET
     ------------------------------------------------------------- */
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = document.querySelector('.main-header')?.offsetHeight || 70;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  window.bellviewApp = new BellviewApp();
});
