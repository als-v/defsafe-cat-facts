// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-mdi",
    "@pinia/nuxt",
    "@nuxt/test-utils/module"

  ],
  mdi: {
    cache: false,
    componentName: 'MdiIcon',
    defaultSize: '50px'
  },
  googleFonts: {
    families: {
      Jost: true
    }
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/tailwind.css'
  ],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
    },
  },
})
