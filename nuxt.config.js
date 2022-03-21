export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Minerva',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', name: 'og:title', content: 'Minerva' },
      { hid: 'og:description', name: 'og:description', content: "Purchase 'en primeur' wine sourced directly from producers with confirmation of sale stored safely on the blockchain, accompanied by a unique artwork for each sale phase, while earning yield on it until delivery. Winemakers from across the world are hand-picked by our community for their unique narrative, quality, and innovation."},
      { hid: 'og:image', name: 'og:image', content: '/Minerva_Banner.jpg' },  
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/globalStyles.scss',
    '@/assets/styles/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/directives.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/sanity/module',
    'nuxt-typed-vuex'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', ['nuxt-modernizr', {
    'feature-detects': ["test/img/webp"],
    options: ['setClasses'],
  }]],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  styleResources: {
    scss: ['~/assets/styles/vars.scss'],
  },
  
}
