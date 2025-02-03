import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://fonts.coollabs.io",
  vite: {
    optimizeDeps: {
      include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
    }
  },
  server: {
    host: '0.0.0.0'
  },
  integrations: [tailwind(), svelte(), sitemap()]
});