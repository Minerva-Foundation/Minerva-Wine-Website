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
      { hid: 'description', name: 'description', content: "Purchase 'en primeur' wine sourced directly from producers with confirmation of sale stored safely on the blockchain, accompanied by a unique artwork for each sale phase, while earning yield on it until delivery. Winemakers from across the world are hand-picked by our community for their unique narrative, quality, and innovation." },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', name: 'og:title',property: 'og:title', content: 'Minerva - A new era of Wine' },
      { hid: 'og:description', name: 'og:description',property: 'og:description', content: "Purchase 'en primeur' wine sourced directly from producers with confirmation of sale stored safely on the blockchain, accompanied by a unique artwork."},
      { hid: 'og:image', name: 'og:image',property:'og:image', content: '/images/Minerva_Banner.jpg' },  
      { hid: 'og:site_name', name: "og:site_name",property:'og:site_name', content: "Minerva" },
      {
        hid: "twitter:title",property:"twitter:title",
        name: "twitter:title",
        content: 'Minerva - A new era of Wine',
      },
      {
        hid: "twitter:description",property:"twitter:description",
        name: "twitter:description",
        content: "Purchase 'en primeur' wine sourced directly from producers with confirmation of sale stored safely on the blockchain, accompanied by a unique artwork and earn yield on top.",
      },
      {
        hid: "twitter:image",property:"twitter:image",
        name: "twitter:image",
        content: '/images/torch.jpg',
      },{ name: "twitter:site", content: "@Minerva_NFT" },
      { hid: "twitter:card",  property:"twitter:card", name: "twitter:card", content: "summary" },{
        hid: "twitter:url", property:"twitter:url",
        name: "twitter:url",
        content: "https://www.minerva.market",
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, {
      hid: "canonical",
      rel: "canonical", property: "canonical",
      href: "https://minerva.market",
    },],
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
