import { defineAstroI18nConfig } from 'astro-i18n'

export default defineAstroI18nConfig({
  defaultLangCode: 'en',
  supportedLangCodes: ['fr', 'zh-cn'],
  showDefaultLangCode: false,
  translations: {},
  routeTranslations: {},
})
