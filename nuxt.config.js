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
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'yandex-verification', content: '8cf37b8211002270' },
        ...i18nHead.meta,
      ],
      link: [
        /*{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' },*/
        ...i18nHead.link.map(link => (
            link.hreflang === undefined
                ? {
                  hid: link.hid,
                  rel: link.rel,
                  href: link.href.slice(-1) === '/' ? link.href : link.href + '/',
                }
                : {
                  hid: link.hid,
                  rel: link.rel,
                  href: link.href.slice(-1) === '/' ? link.href : link.href + '/',
                  hreflang: link.hreflang,
                }
        )),
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
      '@nuxtjs/robots',
      [
        '@rkaliev/nuxtjs-yandex-metrika',
        {
          id: '22731748',
          debug: false,
          webvisor: true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true
        },
      ],
      [
          'nuxt-rfg-icon',
        {
          static: true,
          staticPath: '/_favicons/',
          rfg: {
            "masterPicture": "/icon.png",
            "iconsPath": "/_favicons/",
            "design": {
              "ios": {
                "pictureAspect": "noChange",
                "assets": {
                  "ios6AndPriorIcons": false,
                  "ios7AndLaterIcons": true,
                  "precomposedIcons": false,
                  "declareOnlyDefaultIcon": true
                }
              },
              "desktopBrowser": {
                "design": "raw"
              },
              "windows": {
                "pictureAspect": "noChange",
                "backgroundColor": "#00aba9",
                "onConflict": "override",
                "assets": {
                  "windows80Ie10Tile": false,
                  "windows10Ie11EdgeTiles": {
                    "small": false,
                    "medium": true,
                    "big": false,
                    "rectangle": false
                  }
                }
              },
              "androidChrome": {
                "pictureAspect": "noChange",
                "themeColor": "#ffffff",
                "manifest": {
                  "display": "standalone",
                  "orientation": "notSet",
                  "onConflict": "override",
                  "declared": true
                },
                "assets": {
                  "legacyIcon": false,
                  "lowResolutionIcons": false
                }
              },
              "safariPinnedTab": {
                "pictureAspect": "silhouette",
                "themeColor": "#5bbad5"
              }
            },
            "settings": {
              "scalingAlgorithm": "Mitchell",
              "errorOnImageTooSmall": false,
              "readmeFile": false,
              "htmlCodeFile": false,
              "usePathAsIs": false
            }
          }
        }
      ],
      '@nuxtjs/moment',
      '@nuxtjs/sitemap',
  ],
  robots: () => {
    if (process.env.ENVIRONMENT === 'prod') {
      return {
        UserAgent: '*',
        Disallow: ['/_nuxt/', '/yachts-buy/']
      }
    } else {
      return {
        UserAgent: '*',
        Disallow: '/'
      }
    }
  },
  redirect: {
    rules: async () => {
      const list = [];
      const redirects = await axios.get(`${process.env.API_BASE_URL}redirects`) // It'll wait!
      const formatedRedirects = redirects.data.map((redirect) => {
          return {
            from: '^' + redirect.source.replace('?', '\\?') + '$',
            to: redirect.target,
            statusCode: 301,
          }
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
    onDecode: (req, res, next) => {
      let urlParts = decodeURI(req.url).split('?');
      let searchParams = new URLSearchParams(urlParts[1]);
      Array.from(searchParams).filter(([key]) => key !== "id").forEach(([key]) => searchParams.delete(key));
      urlParts[1] = searchParams.toString();
      let resUrl = urlParts[1] ? urlParts[0] + '?' + urlParts[1] : urlParts[0];
      if (resUrl != req.url) {
        console.log("Rewriting: "+ req.url + " => " + resUrl);
      }
      return resUrl;
    }
  },
  /*build: {
    publicPath: 'store', // changed '_nuxt' way to 'store'
  },
  serverMiddleware: [
    { path: '/server-middleware', handler: '~/server-middleware/errorhandler.js' }
  ],*/
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
  i18n: {
    /* module options */
    baseUrl: process.env.BASE_URL,
    strategy: 'no_prefix', //  strategy: 'no_prefix' for production till langs incomplete
    detectBrowserLanguage: false,
    differentDomains: false,
    langDir: 'lang/',
    lazy: true,
    defaultLocale: 'ru',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'EN',
        file: 'en-US.js',
        domain: !process.env.LANG_EN ? process.env.LANG_RU : process.env.LANG_EN,
        active: !!process.env.LANG_EN
      },
      {
        code: 'cn',
        iso: 'zh-CN',
        name: 'CN',
        file: 'zh-CN.js',
        domain: !process.env.LANG_CN ? process.env.LANG_RU : process.env.LANG_CN,
        active: !!process.env.LANG_CN
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'RU',
        file: 'ru-RU.js',
        domain: process.env.LANG_RU,
        active: !!process.env.LANG_RU
      },
    ],
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
