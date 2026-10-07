import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        doctors: resolve(import.meta.dirname, 'doctors/index.html'),
        services: resolve(import.meta.dirname, 'services/index.html'),
        opd: resolve(import.meta.dirname, 'opd/index.html'),
        patientGuide: resolve(import.meta.dirname, 'patient-guide/index.html'),
        admission: resolve(import.meta.dirname, 'admission/index.html'),
        howToReach: resolve(import.meta.dirname, 'how-to-reach/index.html'),
        faq: resolve(import.meta.dirname, 'faq/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
        en: resolve(import.meta.dirname, 'en/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
