export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  
  tailwindcss: {
    viewer: true,
    config: {
      content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './error.vue',
        './plugins/**/*.{js,ts}'
      ]
    }
  },
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/tailwind.css" as *;'
        }
      }
    }
  }
})