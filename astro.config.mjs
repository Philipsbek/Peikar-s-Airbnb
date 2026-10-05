import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: set this to your real production domain for correct canonical/OG URLs
  site: 'https://eztidorsolution.com',
  integrations: [sitemap()],
});
