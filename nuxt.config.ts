// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
  ],

  i18n: {
    lazy: true,
    langDir: "./lang/",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        file: "en/index.json",
        name: "english",
      },
      {
        code: "ar",
        file: "ar/index.json",
        name: "arabic",
      },
    ],
  },
});