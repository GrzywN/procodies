import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import pageInsight from 'astro-page-insight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), pageInsight(), sitemap()],
});
