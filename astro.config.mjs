// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://acmwuc.org',
  // Emit about.html, contact.html, ... so existing links and URLs keep working.
  build: {
    format: 'file',
  },
});
