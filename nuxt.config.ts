// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // 配置该页面渲染模式
  routeRules:{
    '/ssgPage': { static: true },
    '/csrPage': { ssr: false },
  },
  nitro: {
    prerender: {
      // 显式指定 SSG 页面的路由（确保预渲染）
      routes: ['/ssgPage']
    },
    devProxy:{
      '/api': {
        target: 'http://your-api-server.com', // 目标接口地址
        changeOrigin: true, // 改变请求源
        prependPath: true, // 保留路径前缀
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})