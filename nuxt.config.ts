// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/F2E-2023-mission2/' : '/',
    buildAssetsDir: '/static/',
    head: {
      title: '2020 開票地圖',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '多位候選人角逐台灣總統，究竟誰輸誰贏？' },
        { property: 'og:title', content: '2020 開票地圖' },
        { property: 'og:description', content: '多位候選人角逐台灣總統，究竟誰輸誰贏？' },
        { property: 'og:image', content: 'https://jcsamoyed.github.io/F2E-2023-mission2/og-image.png' },
        { property: 'og:url', content: 'https://jcsamoyed.github.io/F2E-2023-mission2' },
      ],
    },
  },
  css: ['~/assets/css/main.scss'],
  build: {
    transpile: [/echarts/],
  },
});
