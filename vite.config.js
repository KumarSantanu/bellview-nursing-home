import { defineConfig } from 'vite';
import { resolve } from 'path';
import { bellviewHtml } from './build/html-plugin.js';

const page = (p) => resolve(import.meta.dirname, p);

export default defineConfig({
  root: '.',
  plugins: [bellviewHtml()],
  build: {
    rollupOptions: {
      input: {
        main: page('index.html'),
        doctors: page('doctors/index.html'),
        services: page('services/index.html'),
        opd: page('opd/index.html'),
        patientGuide: page('patient-guide/index.html'),
        admission: page('admission/index.html'),
        howToReach: page('how-to-reach/index.html'),
        faq: page('faq/index.html'),
        contact: page('contact/index.html'),
        en: page('en/index.html'),
        notFound: page('404.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
