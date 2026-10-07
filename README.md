# Bellview Nursing Home, Tamluk — Digital Reception Desk

A patient-friendly, low-cognitive-load website designed for **Bellview Nursing Home, Tamluk, Purba Medinipur, West Bengal**.

Built specifically for presentation and proposal to the nursing home management.

---

## 🌟 The Core UX Philosophy

> **"A LOW-LEVEL USER MUST UNDERSTAND THIS WEBSITE WITHOUT KNOWING HOW TO USE WEBSITES."**
>
> Designed as a **"Friendly Digital Reception Desk"** where an elderly or anxious visitor never has to wonder: *"Where should I click?"*

### Designed For:
- **Elderly Bengali citizens** and first-time smartphone users
- **Attendants & family members** seeking urgent, clear information
- **Slow 2G/3G mobile networks** on budget Android devices
- **Single-handed mobile thumb usage** with large finger-friendly targets (min 52px)
- **High-contrast, legible typography** (Noto Sans Bengali + Inter)

---

## 🧭 12-Section Flow on Homepage

The homepage strictly follows the natural mental progression of a patient attendant:

1. **Brand Identity & Location:** Bellview Nursing Home • তমলুক, পূর্ব মেদিনীপুর
2. **Hero:** *চিকিৎসা সংক্রান্ত তথ্য সহজেই খুঁজে নিন* (One clear CTA: *আপনার কী দরকার? ↓*)
3. **The Six Big Actions (আপনি কী জানতে চান?):**
   - 👨‍⚕️ ১. ডাক্তার (*কোন ডাক্তার দেখেন?*)
   - 📅 ২. OPD / অ্যাপয়েন্টমেন্ট (*কখন ডাক্তার দেখেন?*)
   - 🏥 ৩. ভর্তি (*ভর্তি সম্পর্কে জানতে চান?*)
   - 📋 ৪. রোগীর তথ্য (*রোগী ও পরিবারের তথ্য*)
   - 📍 ৫. কীভাবে আসবেন (*লোকেশন ও রাস্তা দেখুন*)
   - 📞 ৬. যোগাযোগ (*ফোন / WhatsApp / Directions*)
4. **আজকের তথ্য (Today's Live Desk):** Today's doctors, OPD shifts, and real-time announcements.
5. **ডাক্তার (Doctors):** Simplified cards with consultation days, timings, and verification disclaimers.
6. **চিকিৎসা পরিষেবা (Services):** Grouped into 4 essential categories (🩺 চিকিৎসা, 🏥 ভর্তি, 🔬 পরীক্ষা, 👩‍⚕️ বিশেষজ্ঞ).
7. **রোগী ও পরিবারের জন্য (Patient Handbook):**
   - 🧾 ভর্তি হতে কী লাগবে?
   - 🎒 কী কী সঙ্গে আনবেন?
   - 👨‍👩‍👧 রোগীর সঙ্গে থাকার নিয়ম
   - 📋 ছাড়পত্রের সময় (Discharge)
8. **🚨 এখনই দরকার? (I am in a hurry UX):** 3 prominent buttons (📞 ফোন করুন | 📍 রাস্তা দেখুন | 👨‍⚕️ ডাক্তার দেখুন).
9. **Bellview-এ কীভাবে আসবেন? (How to Reach):** Visual 3-step transit pictorial (Train Station → Toto → Bellview) + direct Google Maps button.
10. **সাধারণ প্রশ্ন (FAQ):** Conversational accordion answering real attendant questions.
11. **যোগাযোগ (Contact):** Direct phone, WhatsApp message, address, and visiting hours.
12. **Footer:** Clean navigation, legal notices, and proposal transparency disclaimer.

---

## 📱 Mobile Sticky Action Bar

On mobile screens, a persistent bottom bar gives instant access without clutter:
- **📞 ফোন** (Direct call)
- **💬 WhatsApp** (Pre-filled Bengali greeting message)
- **📍 রাস্তা** (Instant navigation guide)

---

## ♿ Accessibility & Senior-Friendly Tools

- **A− | A | A+ Text Size Scaling:** Dynamic root font-scaling preserved in `localStorage`.
- **Bilingual Support (বাংলা | English):** Instant language toggle and dedicated `/en/` route.
- **Icon + Bengali Text Pairing:** No bare icons. Every graphic is accompanied by large text.
- **Instant Search (কী খুঁজছেন?):** Simple helper that matches doctors, OPD, admission, and routes without complex search syntax.
- **Printable Patient Guide:** One-tap print stylesheet for attendants to carry physical paper checklists.

---

## 🛡️ Truthful Presentation & Ethics

In strict compliance with healthcare ethics:
- ❌ **No fake claims** ("No. 1 hospital", fake awards, fake 100% cure rates).
- ❌ **No unverified emergency promises.**
- ❌ **No manufactured patient reviews.**
- ✅ **Pending Verification Badges (`[যাচাইকরণ সাপেক্ষ]` / `[VERIFY WITH BELLVIEW]`):** Used transparently on unverified phone numbers, doctor timings, and exact railway distances until management formally confirms.

---

## 🚀 Future Firebase Integration ("Bellview Digital Desk")

The frontend data architecture (`src/data/siteData.js`) maps 1:1 with future Google Cloud Firestore collections:
- `businessInfo`
- `doctors`
- `services`
- `opdSchedules`
- `announcements`
- `faqs`
- `gallery`

### Management Demo Modal:
Clicking **"ম্যানেজমেন্ট ডেমো (Digital Desk)"** showcases to the nursing home owners how non-technical staff can update daily announcements and doctor timings on the fly.

---

## 🔗 URL Structure

- `/` — Homepage (Bengali)
- `/doctors/` — Dedicated Doctor Directory
- `/opd/` — OPD Schedule & Booking Guidelines
- `/services/` — Inpatient & Outpatient Healthcare Services
- `/patient-guide/` — Family Handbook & Discharge Policy
- `/admission/` — Admission Requirements & Checklist
- `/how-to-reach/` — Transportation & Directions from Tamluk Station
- `/faq/` — Conversational Questions & Answers
- `/contact/` — Direct Phone, WhatsApp & Address
- `/en/` — English Edition

---

## ⚡ Technical & SEO Performance

- **Zero Framework Bloat:** Vanilla HTML5, CSS3, and modern ES modules.
- **Production Bundle:** Total CSS < 24 KB (4.8 KB gzip); Total JS < 8 KB (2.6 KB gzip).
- **Core Web Vitals:** Instant sub-300ms loading even on weak 2G/3G networks.
- **SEO Ready:** Full Schema.org `MedicalOrganization` JSON-LD, `sitemap.xml`, `robots.txt`, Open Graph tags.
