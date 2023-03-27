import { resolve } from 'path'

export default {
  debug: false,
  server: {
    host: '0'
  },
  alias: {
    'images': resolve(__dirname, './assets/img'),
    'style': resolve(__dirname, './assets/css'),
    'fonts': resolve(__dirname, './assets/fonts'),
  },
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: 'cruise.ru',
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta,
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
        ...i18nHead.link,
      ],
    };
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/uikit/dist/css/uikit',
    '@/node_modules/ress',
    '@/assets/css/general',
    '@/assets/css/menu_styles',
    '@/assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/uikit', ssr: false },
    { src: '~/plugins/ymPlugin.js', mode: 'client', ssr: true },
    { src: '~/plugins/litepicker.js', mode: 'client', ssr: false },
    { src: '~/plugins/routesTimeCalc.js', mode: 'server', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/svg-sprite'],
  svgSprite: {
    input: '~/assets/img/svg',
  },
  router: {
    trailingSlash: undefined,
    middleware: ["preloader"],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n', '@nuxtjs/axios', '@nuxtjs/redirect-module', '@nuxtjs/proxy', '@nuxtjs/composition-api/module'],
  redirect: [
    /*{
      from: '^[\\w\\.\\/]*(?<!\\/)(\\?.*\\=.*)*$',
      to: (from, req) => {
        const matches = req.url.match(/^.*(\?.*)$/)
        if (matches.length > 0) {
          return matches[0].replace(matches[1], '') + '/' + matches[1]
        }
        return matches[0]
      },
      statusCode: 301
    }*/
    {
      from: '^(\\/[^\\?]*[^\\/])(\\?.*)?$',
      to: '$1/$2',
      statusCode: 301
    }
  ],
  axios: {
    proxy: false,
    https: true,
    baseURL: process.env.API_BASE_URL,
    browserBaseURL: process.env.API_BASE_URL
  },
  publicRuntimeConfig: {
    baseURL: process.env.API_BASE_URL,
    baseSiteURL: process.env.BASE_URL
  },

  privateRuntimeConfig: {
    baseURL: process.env.API_BASE_URL,
    baseSiteURL: process.env.BASE_URL
  },
/*  proxy: {
    '/rewards/': { target: 'https://new.radisson-cruise.ru', pathRewrite: {'^/api/': ''} }
  },*/

  i18n: {
    /* module options */
    locales: [
      /*{
        code: 'en',
        iso: 'en-US',
        name: 'RU',
        file: 'en-US.js',
      },*/
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'EN',
        file: 'ru-RU.js',
      },
    ],
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loaders: {
    vue: {
      transformAssetUrls: {
        img: 'data-src',
        div: 'data-src',
      },
    },
  },
};
