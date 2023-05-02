// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  ssr: true,


  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      {
        iso: 'en',
        code: 'en',
        name: 'English',
        file: 'en.js',
      },
      {
        iso: 'ru',
        code: 'ru',
        name: 'Русский',
        file: 'ru.js',
      },
      {
        iso: 'bg',
        code: 'bg',
        name: 'Български',
        file: 'bg.js',
      },
      {
        iso: 'zh-tw',
        code: 'zh-tw',
        name: '中文 (繁體)',
        file: 'zhtw.js',
      },
      {
        iso: 'zh-cn',
        code: 'zh-cn',
        name: '中文 (简体)',
        file: 'zhcn.js',
      },
      {
        iso: 'cs',
        code: 'cs',
        name: 'Čeština',
        file: 'cs.js',
      },
      {
        iso: 'de',
        code: 'de',
        name: 'Deutsch',
        file: 'de.js',
      },
      {
        iso: 'fi',
        code: 'fi',
        name: 'Suomi',
        file: 'fi.js',
      },
      {
        iso: 'fr',
        code: 'fr',
        name: 'Français',
        file: 'fr.js',
      },
      {
        iso: 'nl',
        code: 'nl',
        name: 'Nederlands',
        file: 'nl.js',
      },
      {
        iso: 'id',
        code: 'id',
        name: 'Bahasa Indonesia',
        file: 'id.js',
      },
      {
        iso: 'it',
        code: 'it',
        name: 'Italiano',
        file: 'it.js',
      },
      {
        iso: 'jp',
        code: 'jp',
        name: '日本語',
        file: 'ja.js',
      },
      {
        iso: 'lv',
        code: 'lv',
        name: 'Latviešu valoda',
        file: 'lv.js',
      },
      {
        iso: 'mk',
        code: 'mk',
        name: 'Македонски',
        file: 'mk.js',
      },
      {
        iso: 'pl',
        code: 'pl',
        name: 'Polski',
        file: 'pl.js',
      },
      {
        iso: 'br',
        code: 'br',
        name: 'Português (Brasil)',
        file: 'pt.js',
      },
      {
        iso: 'ro',
        code: 'ro',
        name: 'Română',
        file: 'ro.js',
      },
      {
        iso: 'sk',
        code: 'sk',
        name: 'Slovenština',
        file: 'sk.js',
      },
      {
        iso: 'tr',
        code: 'tr',
        name: 'Türkçe',
        file: 'tr.js',
      },
      {
        iso: 'vn',
        code: 'vn',
        name: 'Tiếng Việt',
        file: 'vi.js',
      },
      {
        iso: 'ms',
        code: 'ms',
        name: 'Bahasa Malaysia',
        file: 'ms.js',
      },
      {
        iso: 'es',
        code: 'es',
        name: 'Español',
        file: 'es.js',
      },
      {
        iso: 'sa',
        code: 'sa',
        name: 'العربية',
        file: 'ar.js',
      },
      {
        iso: 'el',
        code: 'el',
        name: 'Ελληνικά',
        file: 'el.js',
      },
      {
        iso: 'hu',
        code: 'hu',
        name: 'Magyar',
        file: 'hu.js',
      },
      {
        iso: 'no',
        code: 'no',
        name: 'Norsk Bokmål',
        file: 'no.js',
      },
      {
        iso: 'sv',
        code: 'sv',
        name: 'Svenska',
        file: 'sv.js',
      },
      {
        iso: 'ua',
        code: 'ua',
        name: 'Українська',
        file: 'uk.js',
      },
      {
        iso: 'kr',
        code: 'kr',
        name: '한국어',
        file: 'ko.js',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',

    experimental: {
      jsTsFormatResource: true,
    },

    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
});