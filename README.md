# 2023 THE F2E 5th Mission2 - 總統即時開票全台地圖
![Node](https://img.shields.io/badge/Node.js-18.17.1-brightgreen.svg)
![Vue](https://img.shields.io/badge/Vue.js-3.3.8-blue.svg)
![Nuxt](https://img.shields.io/badge/Nuxt.js-3.8.1-blue.svg)
![Vue-charts](https://img.shields.io/badge/vue_echarts-6.6.1-pink.svg)

![cover](https://jcsamoyed.github.io/F2E-2023-mission2/og-image.png)

[Demo](https://jcsamoyed.github.io/F2E-2023-mission2/)

## 作品說明
本專案為 2023 第五屆 The F2E 之參賽作品：第二關 - 總統即時開票全台地圖

- 組別【前端個人組】

- 專案工程師【JC】：https://2023.thef2e.com/users/12061579704041640868

- 設計稿作者【Yuni】：https://2023.thef2e.com/users/12061579704055397263

## 專案架構

```shell
├── assets/           # 需要被編譯的靜態資源
│   ├── css/          # 樣式檔
│   └── images/       # 圖檔
├── components/       # 共用元件
├── composables/      # 有狀態邏輯的函式
├── layouts/          # 共用的佈局模板
├── pages/            # 配置主要頁面
├── plugins/          # 定義插件
├── public/           # 無須被編譯的靜態資源
├── utils/            # 無狀態邏輯的函式
├── node_modules/     # 專案所需要的相依套件
├── app.vue           # 專案進入點
├── nuxt.config.ts    # 配置專案的設定檔
└── package.json      # 定義專案資訊、腳本、相依套件及版本號
```

## 執行流程
### Development Server

```bash
# Install the dependencies
npm install

# Start the development server on `http://localhost:3000`
npm run dev
```

### Deploy

```bash
# Build the application for production
npm run generate

# Deploy to Github pages
npm run deploy
```
