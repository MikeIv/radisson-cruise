<template>
  <div>
    <Header class="main_header main-header-index">
      <img src="~images/main/back1.webp" data-src="~images/main/back1.webp" class="img_cover" alt="">
      <video src="~/assets/video/video-main.mp4" autoplay="" loop="" muted="" playsinline="" class="img_cover"></video>
      <div class="uk-overlay-default uk-position-cover video-overlay"></div>
      <div class="uk-overlay-default uk-position-cover header__overlay-default"></div>
      <div class="uk-position-relative header-container">
        <div class="uk-container uk-position-relative">
          <!--          <div class="header__middle">
                      <div class="header__middle_left">
                        <div class="header__p1">
                          Прогулки
                        </div>
                        <div class="header__p2">
                          по Москве-реке
                        </div>
                      </div>
          &lt;!&ndash;            <div class="header__middle_right">
                        <img class="uk-preserve" src="~assets/img/svg/winter_and_summer.svg" alt="" uk-svg>
                      </div>&ndash;&gt;
                    </div>-->
          <div class="header__middle">
            <div class="header__middle_left">
              <h1>
                <span class="header__p1">{{ pageHeader }}</span>
                <br>
                <span class="header__p2">{{ pageHeaderSubtitle }}</span>
              </h1>
              <div class="header__p3">
                <div class="tpl-block-83">
                  <div class="tpl-block-list tpl-component-netcat-base-text"
                       id="nc-block-82e0847e2fb8d5cdaf7a21daeda89c99">
                    <div class="tpl-block-list-objects tpl-block-83-list" data-object-count="1">
                      <article class="tpl-text-default">
                        {{ $t('main_subtitle') }}
                      </article>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header__middle_right uk-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.669 361" id="winter_and_summer">
                <defs>
                  <linearGradient id="winter_and_summer_grad" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#00c1f3"></stop>
                    <stop offset="1" stop-color="#fff"></stop>
                  </linearGradient>
                </defs>
                <g transform="translate(181.669 57)" fill="#fff" stroke="#707070" opacity=".34">
                  <circle cx="123.5" cy="123.5" r="123.5" stroke="none"></circle>
                  <circle cx="123.5" cy="123.5" r="123" fill="none"></circle>
                </g>
                <g transform="translate(124.669)" fill="none" stroke="#fff" stroke-dasharray="4 4">
                  <ellipse cx="181" cy="180.5" rx="181" ry="180.5" stroke="none"></ellipse>
                  <ellipse cx="181" cy="180.5" rx="180.5" ry="180"></ellipse>
                </g>
                <path
                    d="M79.554 12.917L68.715 2.853A47.673 47.673 0 0138.52 12.917a47.069 47.069 0 01-17.677-3.161A28.933 28.933 0 018.52.917a20.174 20.174 0 01-4.452-12.774 24.231 24.231 0 014.71-14.775q4.71-6.387 15.162-12.194a37.329 37.329 0 01-7.1-9.613 21.715 21.715 0 01-2.194-9.484 19.9 19.9 0 013.484-11.613A22.59 22.59 0 0128-77.343a36.8 36.8 0 0114.775-2.774q11.742 0 18.839 5.613t7.1 15.162a19.7 19.7 0 01-4.194 12.387q-4.193 5.42-13.483 10.455l16.516 15.352a58.669 58.669 0 004.517-14.065L88.2-30.18a58.991 58.991 0 01-8.259 20.516L90.522.143zM42.779-66.439a10.471 10.471 0 00-7.161 2.323 7.546 7.546 0 00-2.645 5.936 9.808 9.808 0 001.419 5.1 35.227 35.227 0 005.548 6.38q6.581-3.484 9.162-6.258a8.67 8.67 0 002.581-6 6.9 6.9 0 00-2.323-5.419 9.58 9.58 0 00-6.581-2.062zM39.94-2.825a28.578 28.578 0 0016.9-5.29L35.036-28.5q-6.065 3.484-8.645 6.839a12.159 12.159 0 00-2.581 7.613 9.52 9.52 0 004.39 8.126q4.385 3.097 11.74 3.097z"
                    transform="translate(340.648 248.617)" fill="url(#winter_and_summer_grad)"></path>
                <g fill="#fff">
                  <path
                      d="M113.153 123.021a13.948 13.948 0 012.932 8.8 13.7 13.7 0 01-3.57 9.435 22.621 22.621 0 01-9.647 6.12 40.082 40.082 0 01-13.3 2.125 49.78 49.78 0 01-12.2-1.53 44.69 44.69 0 01-11.518-4.675l4.25-9.86a32.013 32.013 0 008.628 3.612 36.338 36.338 0 009.223 1.233 20.965 20.965 0 0010.157-2.21q4.037-2.21 4.037-6.205a5.525 5.525 0 00-2.766-5.018 14.3 14.3 0 00-7.523-1.7H77.322v-10.37h13.514a10.882 10.882 0 006.5-1.7 5.466 5.466 0 002.338-4.675 6.036 6.036 0 00-3.358-5.44 16.991 16.991 0 00-8.628-1.955 32.632 32.632 0 00-8.075 1.063 31.925 31.925 0 00-7.9 3.187l-4.164-10.71a44 44 0 0120.4-4.845 38.845 38.845 0 0112.835 2.04 21.844 21.844 0 019.35 5.95 13.256 13.256 0 013.484 9.1 12.972 12.972 0 01-2.294 7.565 14.8 14.8 0 01-6.29 5.1 16.939 16.939 0 018.119 5.563zm13.812-34.043h13.685v38.76l28.39-38.76h12.92v59.5h-13.6v-38.67l-28.39 38.675h-13.005zm123.93 59.5l-.085-35.615-17.51 29.325h-6.12l-17.511-28.645v34.935h-12.92v-59.5h11.391l22.27 36.975 21.93-36.975h11.39l.085 59.5zm39.396-2.97a29.647 29.647 0 01-11.644-11.007 30.051 30.051 0 01-4.207-15.768 30.054 30.054 0 014.207-15.768 29.661 29.661 0 0111.644-11.007 34.746 34.746 0 0116.7-3.995 34.5 34.5 0 0116.66 3.995 30.061 30.061 0 0111.648 11.002 29.827 29.827 0 014.25 15.768 29.825 29.825 0 01-4.25 15.768 30.047 30.047 0 01-11.644 11.012 34.482 34.482 0 01-16.66 3.995 34.723 34.723 0 01-16.704-3.995zm26.223-10.158a17.38 17.38 0 006.673-6.757 19.86 19.86 0 002.423-9.86 19.866 19.866 0 00-2.423-9.86 17.38 17.38 0 00-6.673-6.757 18.883 18.883 0 00-9.519-2.423 18.88 18.88 0 00-9.516 2.415 17.364 17.364 0 00-6.672 6.757 19.866 19.866 0 00-2.428 9.863 19.86 19.86 0 002.423 9.86 17.364 17.364 0 006.672 6.757 18.88 18.88 0 009.521 2.423 18.883 18.883 0 009.519-2.423zm33.665-46.372h13.681v38.76l28.389-38.76h12.92v59.5h-13.6v-38.67l-28.39 38.67h-13zm10.966-16.83h9.434q.169 6.205 7.054 6.205a7.615 7.615 0 005.186-1.572 6.1 6.1 0 001.87-4.633h9.435q-.085 6.375-4.166 9.69t-12.329 3.315q-16.32 0-16.489-13.005zm-301.9 111.591v59.5h-13.6v-48.281h-20.4l-.425 12.411a127.068 127.068 0 01-2.041 20.527q-1.617 7.863-5.4 12.07t-10.582 4.207a30.661 30.661 0 01-6.8-.934l.85-11.645a8.346 8.346 0 002.465.34q4.929 0 6.886-5.823t2.464-18.233l.85-24.139zm60.945 48.45v11.05H74.12v-59.5h44.965v11.05h-31.28v12.919h27.625v10.71H87.805v13.771zm56.609-37.231H157.76v48.281h-13.6v-48.281h-18.955v-11.219h51.6zm19.508 45.306a29.645 29.645 0 01-11.645-11.008 30.045 30.045 0 01-4.207-15.767 30.053 30.053 0 014.207-15.768 29.659 29.659 0 0111.645-11.013 34.742 34.742 0 0116.7-3.994 34.5 34.5 0 0116.66 3.994 30.052 30.052 0 0111.645 11.008 29.827 29.827 0 014.25 15.768 29.819 29.819 0 01-4.25 15.767 30.038 30.038 0 01-11.645 11.008 34.482 34.482 0 01-16.66 3.994 34.719 34.719 0 01-16.7-3.989zm26.222-10.156a17.389 17.389 0 006.674-6.757 19.865 19.865 0 002.422-9.86 19.872 19.872 0 00-2.422-9.861 17.393 17.393 0 00-6.674-6.756 18.873 18.873 0 00-9.519-2.423 18.869 18.869 0 00-9.521 2.423 17.375 17.375 0 00-6.672 6.756 19.872 19.872 0 00-2.423 9.861 19.866 19.866 0 002.423 9.86 17.37 17.37 0 006.672 6.757 18.88 18.88 0 009.521 2.423 18.883 18.883 0 009.519-2.423zm87.805 13.131l-.085-35.615-17.509 29.325h-6.12l-17.51-28.641v34.935h-12.921v-59.5h11.39l22.27 36.974 21.93-36.978h11.39l.085 59.5z">
                  </path>
                  <path
                      d="M323.254 118.728a16.613 16.613 0 00-.1-1.808h-6.155l4.839-4.839a16.269 16.269 0 00-1.807-3.071l-7.91 7.91h-3.369v-3.483l7.837-7.836a16.181 16.181 0 00-3.1-1.781l-4.74 4.739v-6a16.439 16.439 0 00-1.757-.1 16.577 16.577 0 00-1.692.087v6l-4.759-4.76a16.263 16.263 0 00-3.105 1.773l7.864 7.865v3.483h-3.6l-7.811-7.799a16.265 16.265 0 00-1.787 3.091l4.726 4.726h-5.993a16.612 16.612 0 00-.1 1.808q0 .831.082 1.641h6.011l-4.777 4.777a16.26 16.26 0 001.768 3.11l7.887-7.887h3.6v3.483l-7.961 7.961a16.244 16.244 0 003.085 1.793l4.876-4.876v6.171a16.577 16.577 0 001.692.087 16.439 16.439 0 001.757-.1v-6.163l4.856 4.856a16.29 16.29 0 003.077-1.8l-7.933-7.933v-3.483h3.369l7.981 7.981a16.186 16.186 0 001.786-3.092l-4.889-4.889h6.173q.078-.811.079-1.642zm-108.155 43.08c-.212-3.318-1.061-5.68-2.043-5.68s-1.832 2.362-2.044 5.68l-1.327 20.7h6.741zm-43.579 20.99l15.34 13.934 4.22-5.308-17.012-11.837a10.459 10.459 0 00-4.937-2.23.9.9 0 00-.769.292c-.611.77.69 2.92 3.158 5.149zm10.749 34.051l-19.879 5.892c-3.185.956-5.308 2.309-5.069 3.265s1.3 1.008 3.052 1.008a17.529 17.529 0 002.946-.265l20.542-3.318zm6.61 41.934c-1.273 3.1-1.512 5.6-.637 6.024a.578.578 0 00.292 0c.956 0 2.654-1.672 4.035-4.273l10.164-18.047-6.077-2.919zm40.579-19.215l-6.079 2.919 10.165 18.074c1.459 2.654 3.078 4.273 4.034 4.273a.578.578 0 00.292 0c.876-.425.637-2.919-.611-6.025zm34.263-16.827l-19.879-5.892-1.592 6.582 20.462 3.318a17.539 17.539 0 002.946.265c1.752 0 2.92-.345 3.053-1.008s-1.805-2.309-4.99-3.265zm-9.13-39.943c2.468-2.229 3.769-4.379 3.158-5.149a.9.9 0 00-.769-.292 10.459 10.459 0 00-4.937 2.23l-17.012 11.863 4.22 5.308zm-27.257-.955a5.052 5.052 0 002.017.451 4.619 4.619 0 004.7-4.533 4.619 4.619 0 00-2.685-4.279 4.483 4.483 0 00-2.017-.451 4.619 4.619 0 00-4.644 4.592 4.618 4.618 0 002.627 4.193zm-32.14.371a4.375 4.375 0 001.991-.451 4.619 4.619 0 002.176-6.158 4.619 4.619 0 00-4.167-2.627 4.466 4.466 0 00-1.99.451 4.618 4.618 0 00-2.176 6.158 4.616 4.616 0 004.166 2.627zm-21.338 17.437a4.618 4.618 0 00-4.67 4.566 4.618 4.618 0 003.635 4.564 4.592 4.592 0 001.035 0 4.617 4.617 0 004.669-4.566 4.617 4.617 0 00-3.634-4.564 4.593 4.593 0 00-1.035 0zm7.537 33.308a4.618 4.618 0 00-4.62 4.616 4.617 4.617 0 004.615 4.62h.005a4.516 4.516 0 002.866-1.008 4.592 4.592 0 00.766-6.448l-.022-.028a4.541 4.541 0 00-3.61-1.752zm30.734 14.836a4.619 4.619 0 00-4.621 4.613 4.618 4.618 0 004.616 4.62h.005a4.617 4.617 0 004.615-4.62 4.618 4.618 0 00-4.615-4.613zm33.706-13.695a4.618 4.618 0 00-6.49.727 4.617 4.617 0 00.726 6.49 4.618 4.618 0 006.48-.714 4.671 4.671 0 00-.716-6.503zm4.777-34.316a4.618 4.618 0 00-4.639 4.6 4.618 4.618 0 004.6 4.64 4.619 4.619 0 004.639-4.6 4.637 4.637 0 00-.112-1.03 4.617 4.617 0 00-4.488-3.61z">
                  </path>
                </g>
              </svg>
            </div>
          </div>
          <div class="header-tickets-grid uk-flex uk-flex-wrap">
            <div class="uk-width-auto@s block-tikets">
              <nuxt-link :to="localePath('/yachts/schedule')" class="header-ticket transition">
                <div class="font-29 text-upper">
                  <b>{{$t('ticket_yacht')}}</b>
                </div>
                <div class="uk-flex uk-flex-middle">
                  <div class="txt16">
                    {{ $t('buttons.buy_ticket') }}
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="uk-width-auto@s block-tikets">
              <nuxt-link :to="localePath('/trams/')" class="header-ticket transition">
                <div class="font-29 text-upper">
                  <b>{{ $t('nav.trams') }}</b>
                </div>
                <div class="uk-flex uk-flex-middle">
                  <div class="txt16">
                    {{ $t('buttons.more') }}
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="header-compass uk-visible@l">
        <div></div>
        <div></div>
        <div></div>
        <svg-icon name="compass"/>
      </div>
    </Header>
    <div class="wrapper">
      <NewsBar :news="currentNews" :actions="currentActions"/>
      <Scheme/>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';
import Slider from '../components/Slider';
import RewardSlider from '../components/rewards-slider/RewardSlider';
import NewsBar from '../components/NewsBar';
import Scheme from '../components/Scheme';
import Header from '../components/Header';
import PhotoCard from '../components/PhotoCard';
import SalonCategoryIndex from '../components/SalonCategoryIndex';
import BuyTicketBtn from '../components/BuyTicketBtn';
import axios from "axios";

export default {
  name: 'index',
  head() {
    return {
      title: this.seoData?.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.seoData?.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.seoData?.keywords,
        },
      ]
    }
  },
  components: {
    BuyTicketBtn,
    SalonCategoryIndex,
    PhotoCard,
    Header,
    Scheme,
    NewsBar,
    RewardSlider,
    Slider,
  },
  props: {},
  data() {
    return {
      isActive: false,
      sliderItems: [
        {
          title: 'Заголовок картинки 1',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 2',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 3',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 4',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 5',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 6',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 7',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 8',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 9',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 10',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 11',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 12',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 13',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 14',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 15',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 16',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 17',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 18',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 19',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 20',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 21',
          srcImg: 'home-image-1.jpg',
        },
      ],
      CabinsInfos: [
        {
          category: `Основной зал`,
          price: `от 1 100 ₽`,
          text: `
            <p>Белоснежная яхта с ресторанным сервисом на борту, которая
            совершает круизы по Москве-реке круглый год. Это не просто
            речная прогулка по историческому центру столицы, а целое
            гастрономическое приключение! Во время 2,5-часового круиза
            в Основном зале гости смогут насладиться не только видами
            на главные достопримечательности Москвы, но и попробовать
            блюда интернациональной кухни от бренд-шефа Сергея
            Маслова.</p>

             <p>Салоны класса Основной зал предполагают размещение на
            главной палубе одной из яхт Флотилии. Панорамные окна,
            интернациональная кухня и удобные стулья гарантируют отдых
            от столичной рутины. На открытой палубе яхты Основного
            зала есть тент, который защитит от солнца в жаркую погоду.</p>
            `,
          allPeople: `до 150 персон `,
          restPeople: ` до 220 персон`,
          restSmallPeople: `до 300 персон`,
          slides: [
            {
              fileName: 'yachts/main/3536.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_1128-Pano.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_4468.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/no12.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/royal/DSC02426.jpg',
              text: 'Подпись',
            },
          ],
          royal: false,
          salonInfoItems: [],
        },
        {
          price: `1 500 ₽ `,
          text: `Специально для любителей живой музыки, расслабленной
                   атмосферы и авторской кухни! По будням и по выходным дням от
                   причала «Гостиница «Украина» яхты «Монтана» и «Примавера»
                   отправляются в круизы по Москве-реке, а ее пассажиры, удобно
                   разместившись на диванах, из столичной суеты переносятся в
                   мир неспешного наслаждения жизнью. Теперь достаточно взять
                   билет на рейс Ройал класса, чтобы ощутить всю прелесть и
                   романтику путешествия по Москве-реке, любуясь видами
                   исторического центра Москвы.
            `,
          allPeople: ` 100 персон `,
          restPeople: ` до 150 персон`,
          restSmallPeople: ``,
          slides: [
            {
              fileName: 'yachts/main/3536.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_1128-Pano.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_4468.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/no12.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/royal/DSC02426.jpg',
              text: 'Подпись',
            },
          ],
          royal: true,
          salonInfoItems: [
            `Авторская кухня`,
            `Комфортабельные диванные группы`,
            `Профессиональные свет и звук`,
            ` Живая музыка на вечерних рейсах с четверга по субботу на
              яхте «Монтана»`,
          ],
        },
        {
          price: `2 400 ₽ `,
          text: `
            Проведите уютное мероприятие в камерной атмосфере. Салон
                      Первого класса расположен на верхней палубе суперъяхт
                      «Примавера», «Бьюти», «Феличита», «Монтана» и «Баттерфляй».
                      Из панорамных окон открывается вид на достопримечательности
                      городских пейзажей с наиболее выгодного ракурса. Рядом
                      капитанская рубка, открытая палуба и отдельный санузел. Мы
                      позаботились об эстетике, поэтому выбрали мебель и текстиль,
                      посуду и столовые приборы от премиальных марок
                      Великобритании и Италии – Robert Welch, Churchill, Piazza.
                      Декор и наполнение интерьера не уступает оснащению личных
                      яхт: например, характерная отделка африканским розовым
                      деревом (бубинго) — любимый сорт древесины у Lexus, BMW и
                      Cartier. Первый класс оснащён автономной системой
                      климат-контроля и мультимедийным оборудованием.
            `,
          allPeople: `до 32 персоны  `,
          restPeople: ` до 32 персоны `,
          restSmallPeople: `до 40 персон`,
          slides: [
            {
              fileName: 'yachts/main/3536.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_1128-Pano.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_4468.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/no12.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/royal/DSC02426.jpg',
              text: 'Подпись',
            },
          ],
          royal: false,
          salonInfoItems: [],
        },
        {
          price: `от 1 100 ₽ `,
          text: `
            Филиал популярного рыбного ресторана «Erwin.РекаМореОкеан»
                      расположен прямо на борту роскошной яхты Флотилии «Рэдиссон
                      Ройал», которая ежедневно совершает круизы по Москве-реке.Во
                      время речной прогулки гости могут наслаждаться не только
                      первоклассными блюдами из рыбы и морепродуктов, выловленных
                      из российских 25 рек и морей, но и живописными видами на
                      главные достопримечательности столицы. Во время стоянки на
                      причале «Erwin.Река» функционирует в привычном режиме работы
                      ресторана, регистрация на рейс не нужна.
            `,
          allPeople: `до 150 персон  `,
          restPeople: ` до 250 персон`,
          restSmallPeople: `до 250 персон`,
          slides: [
            {
              fileName: 'yachts/main/3536.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_1128-Pano.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_4468.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/no12.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/royal/DSC02426.jpg',
              text: 'Подпись',
            },
          ],
        },
      ],

      mainHallSlider: [
        {
          fileName: 'yachts/main/3536.jpg',
          text: 'Подпись',
        },
        {
          fileName: 'yachts/main/IMG_1128-Pano.jpg',
          text: 'Подпись',
        },
        {
          fileName: 'yachts/main/IMG_4468.jpg',
          text: 'Подпись',
        },
        {
          fileName: 'yachts/main/no12.jpg',
          text: 'Подпись',
        },
        {
          fileName: 'yachts/royal/DSC02426.jpg',
          text: 'Подпись',
        },
      ],

      categoriesFetch: [],
      currentNews: [],
      currentActions: [],
      seoData: {},
      pageHeader: [],
      pageHeaderSubtitle: '',
      seoHeaderSplitted: [],
    };
  },
  methods: {
    switchTicket() {
      this.isActive = !this.isActive
    },
  },
  mounted() {
    const swiperFotoUser = new Swiper('.home-insta-slider-wrap', {
      slidesPerView: 5,
      slidesPerColumn: 2,
      spaceBetween: 0,
      /* autoplay: 100,
       loop: true,*/
      centeredSlides: true,
      slidesOffsetBefore: 0,
      centeredSlidesBounds: true,
      navigation: {
        nextEl: '.inst_right',
        prevEl: '.inst_left',
      },

      /*           breakpoints: {
          639: {
            slidesOffsetBefore: 30,
            spaceBetween: 20,
          },
          1199: {
            slidesOffsetBefore: 40,
          },
        }, */
    });
    this.$nextTick(function () {
      /*         console.log('Mounted Next Tick => ', this.$data);
              console.log('Mounted Next Tick  swiperFotoUser => ', swiperFotoUser); */
    });
  },
  async fetch() {
    try {
      let seoDataResult = await axios.get(
          `${this.$config.baseURL}pages?ref=/&lang=${this.$i18n.locale}`);
      this.seoData = seoDataResult.data.result
      let seoHeaderSplitted = seoDataResult.data.result.header.split(' ')
      this.pageHeader = seoHeaderSplitted[0]
      seoHeaderSplitted.shift()
      this.pageHeaderSubtitle = seoHeaderSplitted.join(' ')
      /*this.pageHeaderSubtitle = seoHeaderSplitted.shift().join()*/
    } catch (error) {
      this.$nuxt.error({statusCode: 404, message: 'Data not found'})
    }
  },
  fetchOnServer: true,
  fetchKey: 'main-page',
};
</script>

<style scoped>
.home-insta-slider-wrap {
  /*   width: 100%;
    padding: 10px;
       display: flex;
    justify-content: center; */
}

.swiper-slide img {
  /*     display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; */
}

.title-img-insta {
  position: absolute;
  bottom: 5px;
  left: 35%;
  color: #fff;
}

.swiper-slide.img-insta {
  padding: 2px;
}

.slider-nav-local {
  padding: 0px;
}

.swiper-slide.img-insta img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transition: 1s;
}

.yacht {
  padding-top: 40px;
}

.yacht__informations_switcher {
  margin-top: 30px;
}

.yacht__information_btns {
  margin-top: 30px;
}

.reward-slider {
  padding: 110px 0 95px;
}

.salon_buy-btn {
  border: 1px solid #fff;
}

.section_img {
  width: 100%;
  height: auto;
  padding-top: 110px;
}

.button_switcher {
  width: 180px;
  height: 45px;
  background: 0 0;
  border: 1px solid #fff;
  color: #a1c2e5;
  font-size: 12px;
  font-weight: 700;
  text-transform: none;
}

.button_switcher.uk-active {
  background: #fff;
  color: #1d2240;
}

.yacht__information__list {
  list-style: disc;
}

.instagram .headline .headline_p1:nth-child(3) {
  -webkit-text-stroke: 1px #5f82aa;
  margin-left: 0;
}

.instagram .headline .headline_p1:nth-child(4) {
  margin-left: 216px;
}

.block-tikets {
  border: 1px solid #fff;
  padding: 5px 20px;
}

@media screen and (max-width: 1199px) {
  .block-tikets {
    border: none;
    padding: 0;
  }
  .header-tickets-grid {
    margin-top: 10px;
    margin-left: 0;
  }

}

/*.header-ticket:hover {
  color: #fff;
}*/

@media screen and (max-width: 639px) {
  .block-tikets {
    margin-top: 25px;
  }
}

@media screen and (max-width: 1199px) {
  .instagram .headline .headline_p1:nth-child(4) {
    margin-left: 0;
  }
}
</style>
