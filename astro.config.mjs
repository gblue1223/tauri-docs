import i18n from 'astro-i18n'
import { defineConfig } from 'astro/config'
import prefetch from '@astrojs/prefetch'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://tauri.app',
  experimental: {
    contentCollections: true,
  },
  integrations: [i18n(), prefetch(), tailwind(), sitemap()],
})
