<template>
  <div>
    <Header class="news-item__header" fileName="inners2/IMG_4478.png" :linkName="$t('pages.tickets.flights.title')">
      <img src="~images/inners2/IMG_4478.webp" data-src="~images/inners2/IMG_4478.webp" class="img_cover" alt="">

    </Header>
    <section class="news-item__section">
      <div class="uk-container">
        <div class="news-item__container">
          <Breadcrumbs :last-crumb="currentNew.name"/>
          <div class="news-item__grid uk-flex uk-flex-wrap">
            <div class="uk-width-expand@l uk-width-1-1 news-item__content">
              <h1 class="news-item__h1">
                {{ currentNew.name }}
              </h1>
              <div v-if="currentNew.slides" class="uk-position-relative yacht__slider uk-slider uk-slider-container" tabindex="-1" uk-slider="">
                <ul class="uk-slider-items uk-flex" uk-lightbox="">
                  <li v-for="img in currentNew.slides" tabindex="-1" class="uk-active">
                    <a href="" class="gallery_card uk-position-relative">
                      <img :data-src="`${$config.imageURL}?size=915&format=webp&src=${$config.baseSiteURL}` + img"
                           alt=""
                           class="img_cover"
                           :src="`${$config.imageURL}?size=915&format=webp&src=${$config.baseSiteURL}` + img">
                    </a>
                  </li>
                </ul>
                <div class="yacht__slider_navigation">
                  <div class="slider_numbers">
                    <div class="slider_number">01</div>
                    <div class="slider_num_bread">/</div>
                    <div class="slider_amount">{{ currentNew.slides?.length }}</div>
                  </div>
                  <div class="slider_arrows">
                    <a class="" href="#" uk-slider-item="previous">
                      <svg-icon class="icon" name="arr_lang"/>
                    </a>
                    <a class="" href="#" uk-slider-item="next">
                      <svg-icon class="icon" name="arr_lang"/>
                    </a>
                  </div>
                </div>
              </div>
              <div class="headline_line"></div>
              <div class="news-item__text" v-html="currentNew.content">
              </div>

              <div class="back-container">
                <nuxt-link to="/theatrical/" class="link_back transition">
                  <svg-icon class="icon" name="arrow3"/>
                  <span>{{ $t('back_to_cruise') }}</span>
                </nuxt-link>
              </div>

            </div>
            <div v-if="currentNewRoute !== null" class="uk-width-auto uk-width-1-1 ">
              <div class="buy-ticket-form__basket">
                <div class="buy-ticket-form__basket__head">
                  <div class="headline_22 t_semibold">
                    {{ $t('cart') }}
                  </div>
                  <svg-icon class="icon" name="cart"/>
                </div>
                <div class="buy-ticket-form__basket__main">
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      {{ $t('port') }}:
                    </div>
                    <div v-if="currentNewRoute.placeName" class="buy-ticket-form__basket__item__info">
                      {{ currentNewRoute.placeName }}
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      Время и дата:
                    </div>
                    <div class="buy-ticket-form__basket__item__info">
                      {{ dayFormat }}, {{ timeCalcDate }}
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      Время круиза:
                    </div>
                    <div v-if="currentNewRoute.journeyTime" class="buy-ticket-form__basket__item__info">
                      {{ currentNewRoute.journeyTime }}
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      Посадка начинается за 30 минут
                      до отправления
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      Возрастное ограничение 16+
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__summ">
                      <div>
                        {{ $t('amount') }}::
                      </div>
                      <div v-if="currentNewRoute.adultPrice">
                        {{ currentNewRoute.adultPrice }}  ₽
                      </div>
                      <!-- <div>
                        1 400 ₽
                      </div> -->
                    </div>
                    <div class="buy-ticket-form__basket__sail buy-ticket-form__basket__sail_cruise">
                      *В стоимость входит дегустационный сет-меню,
                      посвященный итальянской кухне.
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item buy-ticket-form__basket__item__last">
                    <!--                    <a class="uk-button uk-button-default button_ticket" href="#buy-ticket-shedule-info" uk-toggle="">
                      <span>ПЕРЕЙТИ К ОПЛАТЕ</span>
                      <svg-icon class="icon" name="ticket"/>
                    </a>-->
                    <nuxt-link class="uk-button uk-button-default button_ticket transition"
                               :to="'/yachts-buy?journey=' + currentNewRoute.journey"
                    >
                      <!--                 :to="'/yachts-buy/?day='+ this.day + '&journey=' + this.journey"-->
                      <span>{{ $t('goto_payment') }}</span>
                      <svg-icon class="icon" name="ticket"/>
                    </nuxt-link>
                  </div>
                </div>
                <div class="buy-ticket-form__basket__bottom">
                  ** Внимание! На спецрейсы Флотилии «Рэдиссон Ройал»
                  помеченные звёздочкой (*) действие подарочных сертификатов
                  не распространяется
                </div>
              </div>
            </div>
            <div v-else class="uk-width-auto uk-width-1-1 uk-visible@l">
              <div class="news-last">
                <div class="headline_22 t_semibold">
                  {{ $t('recent_news') }}
                </div>
                <ul class="uk-padding-remove uk-margin-remove">
                  <li v-for="recentNew in recentNews">
                    <nuxt-link class="uk-card card-news__small transition" :to="recentNew.uri">
                      <div class="uk-cover-container uk-card-default_media">
                        <img :data-src="`${$config.imageURL}?size=300&format=webp&src=${$config.baseSiteURL}`+recentNew.banner"
                             alt="" class="img_cover"
                             :src="`${$config.imageURL}?size=300&format=webp&src=${$config.baseSiteURL}`+recentNew.banner">
                      </div>
                      <div class="uk-card-body">
                        <div class="card_time">
                          <svg-icon class="icon" name="clock2"/>
                          <span>{{ new Date(recentNew.date).toLocaleDateString(`ru-RU`, {month: 'long', day: 'numeric', year: 'numeric'}) }}</span>
                        </div>
                        <h3 class="uk-card-title">
                          {{recentNew.name}}
                        </h3>
                        <div v-html="recentNew.anons" class="card_text">
                        </div>
                      </div>
                    </nuxt-link>
                  </li>
                </ul>
                <div class="link_archive__container">
                  <nuxt-link to="/news" class="link_archive">
                    {{ $t('archive_news') }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NewsItem from "../../components/news/NewsItem";
import Breadcrumbs from "../../components/Breadcrumbs";
import axios from "axios";
import UIkit from "uikit";
import { timeCalc } from "../../plugins/routesTimeCalc";
export default {
  name: "Thematic-item",
  components: {Breadcrumbs, NewsItem},
  head() {
    return {
      title: this.currentNew.name + this.seoData?.title,
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
  data() {
    return {
      page: this.$route.params.page,
      name: this.$route.params.name,
      group:  this.$route.params.group,
      id: '',
      pagesToFilter: null,
      currentNew: {},
      currentNewRoute: {},
      slidesLength: 0,
      slides: false,
      formattedName: '',
      recentNews: [],
      currentDay: '',
      seoData: [],
    }
  },
  computed: {
    dayFormat() {
      return new Date(this.currentNewRoute?.depatureTime).toLocaleDateString(`ru-RU`, {month: 'long', day: 'numeric'})
    },
    timeCalcDate() {
      return timeCalc(this.currentNewRoute.depatureTime, this.currentNewRoute.arrivalTime)
    }
  },
  /*async asyncData({params, $config, error}) {
    try {
      const news = await axios.get(
          `${$config.baseURL}new?id=${params.name}`)
      console.log(news.data.result)
      const recentNewsData = await axios.get(
          `${$config.baseURL}news?page=1`)
      if (news.data.length === 0) {
        error({ statusCode: 404, message: 'err message' })
      } else {
        console.log(news.data.result)
        const currentNew = news.data.result
        const recentNews = recentNewsData.data.news.slice(0,2)
        const currentNewRoute = currentNew?.route
        return {
          currentNew,
          currentNewRoute,
          recentNews
        }
      }
    } catch (e) {
      /!*error({ statusCode: 404, message: 'err message' })*!/
    }
  },*/
  async fetch() {
    try {
      let seoDataResult = await axios.get(
          `${this.$config.baseURL}pages?ref=/flights/{id}/&lang=${this.$i18n.locale}`);
      this.seoData = seoDataResult.data.result
      const news = await axios.get(
          `${this.$config.baseURL}new?id=${this.$route.params.id}&lang=${this.$i18n.locale}`)
      const recentNews = await axios.get(
          `${this.$config.baseURL}news?page=1&lang=${this.$i18n.locale}`);
      this.currentNew = news.data.result
      this.recentNews = recentNews.data.news.slice(0, 2)
    } catch(error) {
      this.$nuxt.error({ statusCode: 404, message: 'Data not found' })
    }
    this.currentNewRoute = this.currentNew?.route
  },
  fetchOnServer: true,
  fetchKey: 'thematic-post',

  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },

  updated() {
    const yachtSlider = document.querySelectorAll('.yacht__slider');
    yachtSlider.forEach(element => {
      //Счетчик слайда яхт
      UIkit.util.on(element, 'itemshown', function(e) {
        // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
        element.querySelector('.slider_number').textContent = (('0' + (e.detail[0].index + 1)).slice(-2));
      });
    });
  }
}
</script>

<style scoped>

</style>
