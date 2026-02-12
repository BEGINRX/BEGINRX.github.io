import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://beginrx.github.io',
  base: '/',
  build: {
    format: 'directory',
  },
});
