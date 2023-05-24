import { resolve } from 'path'
const fs = require('fs')
import axios from 'axios'
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
    { src: '~/plugins/routesTimeCalc.js', ssr: true },
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
  modules: [
      '@nuxtjs/i18n',
      '@nuxtjs/axios',
      '@nuxtjs/redirect-module',
      '@nuxtjs/proxy',
      '@nuxtjs/composition-api/module',
      '@nuxtjs/yandex-metrika'
  ],
  yandexMetrika: {
    id: '22731748',
    webvisor: true,
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true
  },
  /*redirect: [
    {
      from: '^(\\/[^\\?]*[^\\/.])(\\?.*)?$',
      to: '$1/$2',
      statusCode: 301
    }

    /!*{ from: '^/bezopasnost/(.*)$', to: '/rules', statusCode: 301 },
    { from: '^/nasi-preimusestva/(.*)$', to: '/rent/', statusCode: 301 },
    { from: '^/tickets/raspisanie/', to: '/yachts/schedule/', statusCode: 301 },
    { from: '^/action/(.*)$', to: '/news/?grp=action', statusCode: 301 },*!/
  ],*/
  redirect: async () => {
    const list = [];
    const redirects = await axios.get(`${process.env.API_BASE_URL}redirects`) // It'll wait!
    const formatedRedirects = redirects.data.map((redirect) => {
      // if (redirect.source.includes('/action/?id')) {
      //   return {
      //     from: '^/action/\\?id=(\\d+)$',
      //     to: '/news/$1/',
      //     statusCode: 301,
      //   }
      // } else {
        return {
          from: '^' + redirect.source.replace('?', '\\?') + '$',
          to: redirect.target,
          statusCode: 301,
        }
      // }
    })
    list.push(...formatedRedirects)
    list.push(
        {
          from: '^(\\/[^\\?\\.]+[^\\/])(\\?.*)?$',
          to: '$1/$2',
          statusCode: 301
        }
    )
    return list
  },
  /*build: {
    publicPath: 'store', // changed '_nuxt' way to 'store'
  },
  serverMiddleware: [
    { path: '/server-middleware', handler: '~/server-middleware/errorhandler.js' }
  ],*/
 /* redirect: {
    rules: [
      {
        from: '^(\\/[^\\?]*[^\\/.])(\\?.*)?$',
        to: '$1/$2',
        statusCode: 301
      }
    ],
    onDecode: (req, res, next) => decodeURI(req.url),
    onDecodeError: (error, req, res, next) => next(error)
  },*/
  axios: {
    proxy: false,
    https: true,
    baseURL: process.env.API_BASE_URL,
    browserBaseURL: process.env.API_BASE_URL
  },
  publicRuntimeConfig: {
    baseURL: process.env.API_BASE_URL,
    baseSiteURL: process.env.BASE_URL,
    imageURL: process.env.IMAGE_URL
  },

  privateRuntimeConfig: {
    baseURL: process.env.API_BASE_URL,
    baseSiteURL: process.env.BASE_URL,
    imageURL: process.env.IMAGE_URL
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

  loaders: {
    vue: {
      transformAssetUrls: {
        img: 'data-src',
        div: 'data-src',
      },
    },
  },
};
