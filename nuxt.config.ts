// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
  ],

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },
    googleFonts: {
    families: {
      Montserrat: true,
    },
  },

})