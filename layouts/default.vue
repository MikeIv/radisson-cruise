<template>
  <div>
<!--    <PreloaderMain  v-if="isLoading && $route.path === '/'" />
    <PreloaderYacht v-else-if="isLoading" />-->
    <div class="old-site uk-cover-container" uk-alert="sel-close: .cookie-close;">
      <a class="cookie-close uk-alert-close" id="cookie-close-2" uk-close></a>
      <div class="uk-container uk-position-relative">
        <div class="uk-text-center uk-flex uk-flex-center uk-flex-middle">
          <a href="https://www.radisson-cruise.ru/?old=1" class="transition">Перейти на старый сайт</a>
        </div>
      </div>
    </div>

    <SideNav ref="slideNav"/>
    <Nuxt keep-alive :keep-alive-props="{ exclude: ['schedule', 'yachts-buy', 'news', 'index', 'NewsBar', 'Theatrical-item'] }" />
    <!--    <Kiev />-->
    <!--    <SubscribeNews />-->
    <keep-alive>
      <Footer/>
    </keep-alive>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  import Kiev from '../components/Kiev';
  import SubscribeNews from '../components/SubscribeNews';
  import SideNav from "../components/SideNav";
  import UIkit from 'uikit';
  import PreloaderYacht from '~/components/PreloaderYacht.vue'
  import PreloaderMain from "../components/PreloaderMain.vue";

  export default {
    name: "default",
    components: {
      PreloaderYacht,
      PreloaderMain,
      SideNav,
      Kiev,
      SubscribeNews,
      Header,
      Footer,
    },
    data() {
      return {
        isLoading: true,
      }
    },
    computed: {
      showNav () {
      return this.$store.state.showNav
    },
  },
    watch: {
    $route(to, from) {
      this.$store.commit('changeNavState', false)
/*       console.log('showNav = ', this.showNav)
      console.log('showNav = ', this.$store.state.showNav)
      console.log('REFS = ', this.$refs)
      console.log('route change to', to)
      console.log('route change from', from) */
    },
  },
    /*head() {
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
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          ...i18nHead.link,
        ],
      };
    },*/
    mounted() {
      this.isLoading = false;
      const yachtSlider = document.querySelectorAll('.yacht__slider');
      yachtSlider.forEach(element => {
        //Счетчик слайда яхт
        UIkit.util.on(element, 'itemshown', function(e) {
          // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
          element.querySelector('.slider_number').textContent = (('0' + (e.detail[0].index + 1)).slice(-2));
        });
      });

      // preloader on loading for every page in nuxt
    },
  };
</script>

<style scoped>
#preloader2 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1003;
  width: 100%;
  height: 100%;
  overflow: visible;
  background: #1D2240;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}

#preloader2.hidden {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: op2;
}
#preloader2.hiddenBlock {
  display: none;
}

.preloader2_center {
  text-align: center;
  margin: auto;
  position: absolute;
  top: 12%;
  right: 13%;
  z-index: 11;
  fill: #fff;
  opacity: 0;
  animation: op1 2s linear;
  animation-fill-mode: both;
}

@keyframes op1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes op2 {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.preloader2_center * {
  position: relative;
  z-index: 12;
}

.preloader2_center svg {
  width: 235px;
  height: 228px;
}

#js-progressbar {
  position: absolute;
  top: 81%;
  left: 10%;
  width: 50%;
  z-index: 9;
}

#js-progressbar .uk-progress {
  background: #00C1F3;
  height: 5px;
  width: 0px;
  animation: w100 2.5s linear;
  animation-fill-mode: both;
  margin-bottom: 0;
  border-radius: 0;
}

#js-progressbar2 {
  position: absolute;
  top: 70%;
  right: 0%;
  width: 50%;
  z-index: 9;
}

#js-progressbar2 .uk-progress {
  background: #00C1F3;
  height: 5px;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-name: w100;
  animation-fill-mode: both;
  width: 0px;
}

@keyframes w100 {
  0% {
    width: 0%;
  }

  10% {
    width: 10%;
  }

  20% {
    width: 20%;
  }

  30% {
    width: 30%;
  }

  40% {
    width: 40%;
  }

  50% {
    width: 50%;
  }

  60% {
    width: 60%;
  }

  70% {
    width: 70%;
  }

  80% {
    width: 80%;
  }

  90% {
    width: 90%;
  }

  100% {
    width: 100%;
  }
}

.uk-progress::-webkit-progress-bar {
  background-color: #F2C200;
}

.uk-progress::-webkit-progress-value {
  background-color: #F2C200;
}

.uk-progress::-moz-progress-bar {
  background-color: #F2C200;
}

.uk-progress::-ms-fill {
  background-color: #F2C200;
}

.preloader-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background: rgba(0, 0, 0, 0.5);
  animation-delay: 0s;
  opacity: 1;
  animation-duration: 2s;
  animation-name: preloader2backgroundanimate;
  animation-fill-mode: both;
}

@keyframes preloader2backgroundanimate {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}

.preloader2-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1.5s;
}

.preloader2-decor {
  position: absolute;
  bottom: 0;
  width: 100%;
  right: 0;
}

.preloader2_bottom {
  font-family: cowor, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #fff;
  position: absolute;
  top: 21%;
  left: 7%;
  font-size: 72px;
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 0px;
  animation: blink 1.5s linear infinite;
}

.preloader2_decor {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #00C1F3;
}

.klademug {
  font-family: mont;
  font-size: 300px;
  font-weight: 700;
  color: #fff;
  animation: op1 1s linear;
  line-height: 1;
  margin-top: 0px;
  animation-fill-mode: both;
  position: absolute;
  right: 0;
  bottom: 14%;
}

.preloader2__slide {
  background: url('assets/img/main/preload.png') center center / auto;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 400px;
  opacity: 1;
  transition: 1s;
  width: 100%;
  animation: animatedBackground 30s linear infinite;
}

@-webkit-keyframes animatedBackground {
  0% {
    background-position: 0 0
  }

  100% {
    background-position: -2979px 0px
    /* анимируем свойство background-position */
  }
}

@keyframes animatedBackground {
  0% {
    background-position: 0 0
  }

  100% {
    background-position: -2979px 0px
    /* анимируем свойство background-position */
  }
}

@keyframes blink {
  0% {
    opacity: .5;
  }

  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 1600px) {
  .klademug {
    font-size: 175px;
    z-index: 10;
  }
}

@media screen and (max-width: 959px) {
  #js-progressbar {
    left: 20px;
  }

  .preloader2_center svg {
    width: 125px;
    height: 128px;
  }

  .preloader2_center {
    right: 20px;
  }

  .preloader2_bottom {
    font-size: 35px;
    left: 20px;
  }

  .klademug {
    font-size: 105px;
  }
}

@media screen and (max-width: 640px) {
  @-webkit-keyframes animatedBackground {
    0% {
      background-position: 0 0
    }

    100% {
      background-position: -1000px 0px
      /* анимируем свойство background-position */
    }
  }

  @keyframes animatedBackground {
    0% {
      background-position: 0 0
    }

    100% {
      background-position: -1000px 0px
      /* анимируем свойство background-position */
    }
  }

  .preloader2__slide {
    background-size: 1000px !important;
    background-repeat: no-repeat !important;
    height: 200px;
  }

  #js-progressbar .uk-progress {
    height: 3px;
  }

  #js-progressbar {
    left: 15px;
    top: 60%;
  }

  .klademug {
    font-size: 55px;
    bottom: 39%;

  }

  .preloader2_bottom {
    font-size: 22px;
    top: 35%;
    left: 15px;
  }

  .preloader2_center svg {
    width: 55px;
    height: 55px;
  }

  .preloader2_center {
    top: 32%;
    right: 15px;
  }
}
</style>
