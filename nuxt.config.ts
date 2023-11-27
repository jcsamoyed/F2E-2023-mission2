// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/F2E-2023-mission2/' : '/',
    buildAssetsDir: '/static/',
  },
  css: ['~/assets/css/main.scss'],
  build: {
    transpile: [/echarts/],
  },
});
