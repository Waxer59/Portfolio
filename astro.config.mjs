import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'
import { defaultLang, languages } from './src/i18n/ui'
import { cannonicalURL } from './src/constants/seo'

// https://astro.build/config
export default defineConfig({
  site: cannonicalURL,
  devToolbar: {
    enabled: false
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({
      i18n: {
        defaultLocale: defaultLang,
        locales: {
          en: 'en-US',
          es: 'es-ES'
        }
      }
    })
  ],
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages)
  }
})
