import { resolve } from 'path'
const fs = require('fs')
import axios from 'axios'
export default {
  debug: false,
  server: {
    host: 'localhost'
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
    '@/assets/css/main',
    '@/assets/css/redesign_first'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/uikit', ssr: false },
    { src: '~/plugins/ymPlugin.js', mode: 'client', ssr: true },
    { src: '~/plugins/litepicker.js', mode: 'client', ssr: false },
    { src: '~/plugins/mobile_friendly_litepicker.js', mode: 'client', ssr: false },
    '~/plugins/axios'
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
      'nuxt-viewport',
  ],
  viewport: {
    breakpoints: {
      desktop: 1024,
      desktopMedium: 1280,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,
      tablet: 768,
      tabletWide: 976,
    },

    cookieName: 'viewport',

    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
      tablet: 'tablet',
    },

    fallbackBreakpoint: 'desktop',
  },
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
      axios.defaults.withCredentials = true
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
    browserBaseURL: process.env.API_BASE_URL,
    credentials: true,
    headers: {
        common: {
          'crossDomain': true
        }
    }
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
    strategy: 'no_prefix', //  strategy: 'no_prefix' for production till langs incomplete, 'prefix_except_default' for local tests
    detectBrowserLanguage: false,
    differentDomains: true,
    langDir: 'lang/',
    lazy: true,
    defaultLocale: 'ru',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'ENG',
        file: 'en-US.js',
        domain: !process.env.LANG_EN ? process.env.LANG_RU : process.env.LANG_EN,
        active: !!process.env.LANG_EN
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        name: '中文',
        file: 'zh-CN.js',
        domain: !process.env.LANG_ZH ? process.env.LANG_RU : process.env.LANG_ZH,
        active: !!process.env.LANG_ZH
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'РУС',
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
