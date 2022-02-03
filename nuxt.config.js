export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: 'Ecommerce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
  static: {
    prefix: false
  },
  server: {
    // host: '0.0.0' // default: localhost
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/style/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  loading: {
    name: 'circle',
    color: '#0d6efd',
    background: 'white'
  },
  axios: {
    baseURL: process.env.API_URL,
  },
  build: {},
  // env: {
  //   baseURL: process.env.API_URL
  // },
  // publicRuntimeConfig: {
  //   baseURL: process.env.API_URL
  // },
  middleware: {
    router: ['auth', 'noAuth']
  }
}
