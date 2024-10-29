<template>
  <section class="main-news uk-container">
<!--    <img src="~assets/img/svg/decor1.svg" alt="" class="main-news_decor1 uk-visible@m" uk-svg>-->
    <div class="main-news__headline uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
      <ul class="uk-subnav" uk-switcher="connect: .main-news_container; animation: uk-animation-fade;swiping:false;">
        <li class="uk-active">
          <nuxt-link class="main-news_title" to="/news/?grp=article" aria-expanded="true">{{ $t('news') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link class="main-news_title" to="/news/?grp=action" aria-expanded="false">{{ $t('action') }}</nuxt-link>
        </li>
      </ul>
      <nuxt-link v-if="!lessThanTablet" class="uk-button uk-button-default button_news-all button_news-all-top" to="/news/">
        <span>{{ $t('all') }} {{ $t('news') }}</span>
        <svg-icon name="arrow2" class="icon"/>
      </nuxt-link>
    </div>
    <div v-if="!isNewsLoaded">
      <h3>{{ $t('no_results') }}</h3>
    </div>
    <div v-if="isNewsLoaded && lessThanTablet" uk-slider="" class="uk-slider">
      <div class="uk-slider-container">
        <ul class="uk-slider-items uk-child-width-1-1"
            uk-scrollspy="target: > li > .uk-card ; cls: uk-animation-slide-bottom-medium; delay: 500"
        >
          <li v-for="(card,index) in newsCards"
              :key="'inx2' + index"
              class="main_news-slider--item"
          >
            <NewsBarCard :link="card.uri"
                         :fileName="card.banner"
                         :date="card.date"
                         :title="card.name"
                         :important="card.stick"
            />
          </li>

        </ul>
      </div>
    </div>
    <ul class="main-news_container uk-switcher"
        v-else-if="isNewsLoaded && !lessThanTablet"
    >
      <li uk-scrollspy="target: > div > .uk-card; cls: uk-animation-slide-bottom-medium; delay: 500" class="uk-active">
        <div class="main-news__items uk-flex uk-grid-match">
          <NewsBarCard v-for="(card,index) in newsCards"
                       :key="'inx2' + index"
                       :link="card.uri"
                       :fileName="card.banner"
                       :date="card.date"
                       :title="card.name"
                       :important="card.stick"
          />
        </div>
      </li>
    </ul>
    <nuxt-link v-if="lessThanTablet" class="uk-button uk-button-default button_news-all button_news-all-bottom" to="/news/">
      <span>{{ $t('all') }} {{ $t('news') }}</span>
      <svg-icon name="arrow2" class="icon"/>
    </nuxt-link>
<!--    <div uk-slider="" class="awards__slider uk-slider">
      <div class="uk-position-relative">
        <div class="uk-slider-container ">
          <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-match"
              uk-scrollspy="target: > li > .awards__card ; cls: uk-animation-slide-bottom-medium; delay: 500">
            <li class="uk-active" v-for="(card,index) in newsCards" :key="'inx2' + index">
              <NewsBarCard :link="card.uri"
                           :fileName="card.banner"
                           :date="card.date"
                           :title="card.name"
                           :important="card.stick"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>-->
  </section>
</template>

<script>
import NewsBarCardImportant from "./news/NewsBarCardImportant";
import NewsBarCard from "./news/NewsBarCard";
import axios from "axios";
export default {
  name: "NewsBar",
  components: {NewsBarCard, NewsBarCardImportant},
  props: {
    news: Array,
    actions: Array
  },
  data() {
    return {
      isNewsLoaded: false,
      interval: null,
      time: null,
      currentDate: null,
      currentNews: {},
      currentActions: {},
      cardMain: {
          banner: 'main/img2.png',
          uri: '/news',
          date: '15 ноября 2019 г.',
          name: `С 1 декабря Ройал класс Флотилии
                возобнавляет навигацию`,
          qname: ` С началом декабря Флотилия возобновляет рейсы
                Ройал-класса. Гости отправятся в круиз вместе
                с профессиональной кавер-группой, а каждый
                столик получит бутылку вина в подарок.`,
        },
      cardSmall:[
        {
          banner: 'main/img3.png',
          uri: '/news',
          date: '15 ноября 2019 г.',
          name: `С 1 декабря Ройал класс Флотилии
                  возобнавляет навигацию`,
        },
        {
          banner: 'main/img3.png',
          uri: '/news',
          date: '15 ноября 2019 г.',
          name: `С 1 декабря Ройал класс Флотилии
                  возобнавляет навигацию`,
        },
        {
          banner: 'main/img3.png',
          uri: '/news',
          date: '15 ноября 2019 г.',
          name: `С 1 декабря Ройал класс Флотилии
                  возобнавляет навигацию`,
        },
        {
          banner: 'main/img3.png',
          uri: '/news',
          date: '15 ноября 2019 г.',
          name: `С 1 декабря Ройал класс Флотилии
                  возобнавляет навигацию`,
        },
      ],
      newsCards: [],
      weekend: "",
      lessThanTablet: this.$viewport.isLessThan('tablet')
    }
  },
  watch: {
    '$viewport.breakpoint'() {
      this.lessThanTablet = this.$viewport.isLessThan('tablet')
    },
  },
  async fetch() {
    let urlNewsQuery = `${this.$config.baseURL}news?onindex=true&grp=article&lang=${this.$i18n.locale}`;
    let news
    try{
      news = await this.$axios(urlNewsQuery);
    } catch(error) {
      console.log("ERROR AXIOS NEWS = ",error)
    }
    if(news.data.news !== undefined && news.data.news.length > 0) {
      this.currentNews = news.data.news;
      this.newsCards = this.currentNews;
      this.isNewsLoaded = true;
    }
  },
  fetchOnServer: false,
  fetchKey: 'newsHome',

}
</script>

<style scoped>
/*
.more_container {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.more_container>div:nth-child(1) {
  margin-right: 75px;
}
.more_container>div {
  height: 1px;
  background: #232323;
  width: 70%;
}

.more_container {
  margin-top: 126px;
}
*/

.btn_more {
  text-align: center;
  position: relative;
  border-top: 1px solid #1d2240;
  border-bottom: 1px solid #1d2240;
  max-width: 290px;
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  padding: 23px 0;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

/*.main-news {
  padding-bottom: 140px;
}

.main-news__headline {
  margin-top: 80px;
}

.uk-subnav>.uk-active>a {
  color: #1d2240;
  opacity: 1;
  text-decoration: none;
}

.uk-subnav>*>:first-child {
  font-size: 66px;
  font-weight: 400;
  transition: .2s;
  font-family: cowor,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  padding: 0;
  text-decoration: underline;
  opacity: .5;
  color: #1d2240;
}

.main-news__headline .description {
  margin-right: 100px;
}
.description {
  text-transform: none;
  font-size: 14px;
  border-left: 2px solid #5f82aa;
  padding-left: 27px;
  line-height: 1.4;
  color: #232323;
  padding-top: 10px;
  padding-bottom: 10px;
}

.uk-subnav>* {
  padding-left: 90px;
}

.uk-subnav {
  margin-left: -90px;
}

.main-news_container {
  list-style: none;
  padding: 0;
  margin: 0;
}

.main-news_container>li {
  display: flex;
  flex-wrap: wrap;
  margin-left: -47px;
}

.main-news__important {
  width: 40%;
}

.main-news__items {
  width: 60%;
  flex-wrap: wrap;
  justify-content: space-between;
}


.uk-switcher>*>:last-child {
  margin-bottom: 0;
}

.main-news_container>li>* {
  padding-left: 47px;
}
.more_container {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.more_container>div:nth-child(1) {
  margin-right: 75px;
}
.more_container>div {
  height: 1px;
  background: #232323;
  width: 70%;
}

.more_container {
  margin-top: 126px;
}

.btn_more {
  text-align: center;
  position: relative;
  border-top: 1px solid #1d2240;
  border-bottom: 1px solid #1d2240;
  max-width: 290px;
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  padding: 23px 0;
  font-size: 12px;
  font-weight: 600;
}

.main-news_container .uk-card {
  margin-top: 70px;
}
.uk-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  color: #000;
  font-weight: 400;
  text-decoration: none;
  width: auto;
  margin-right: 0;
  background: 0 0;
  transition: .3s;
  padding: 0;
}

.uk-card-default_media {
  min-height: 420px;
  height: 420px;
  width: 100%;
}
.uk-cover-container {
  overflow: hidden;
  position: relative;
}

.img_cover {
  position: absolute;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  transition: 1s;
}

.card__important .uk-badge {
  left: 20px;
  top: 20px;
}
.uk-card .card_text, .uk-card .card_time, .uk-card .uk-badge, .uk-card .uk-card-title {
  position: relative;
  z-index: 3;
}

.uk-badge {
  border-radius: 0;
  margin-top: 0;
  padding: 7px 13px;
  height: auto;
  color: #fff;
  background: #fb1301;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: mont,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}

.card__important .uk-card-body {
  position: relative;
  margin-top: -70px;
}
.uk-card-body {
  padding: 38px 0 0;
  width: 100%;
  z-index: 5;
  position: relative;
  display: flex;
  flex: 1;
  transition: .3s;
  align-items: flex-start;
  flex-direction: column;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: 0 0;
}

.card__important .uk-card-body::before {
  position: absolute;
  top: 0;
  left: 0;
  background: #e7f0f7;
  width: 80%;
  height: 70px;
  content: "";
}

.card__important .uk-card-body * {
  position: relative;
}
.card_time {
  font-size: 10px;
  display: flex;
  text-transform: uppercase;
  font-weight: 400;
  color: #232323;
  transition: .3s;
  background: 0 0;
  padding: 0;
  border-radius: 0;
  align-items: center;
}

.card__important .uk-card-title {
  max-width: 418px;
  text-decoration: underline;
}

.card__important .card_text {
  max-width: 418px;
}

.card_text {
  max-width: 100%;
  color: #232323;
  font-size: 16px;
  margin-top: 33px;
  line-height: 1.7;
  margin-bottom: 40px;
}

.uk-card .link_more {
  margin-top: auto;
}
.link_more {
  font-size: 14px;
  font-weight: 600;
  color: #1d2240;
  transition: .2s;
  fill: #1d2240;
}

.main-news__items .uk-card {
  height: 310px;
  width: calc(50% - 23.5px);
  min-height: calc(50% - 70px);
}
.main-news_container .uk-card {
  margin-top: 70px;
}

.card-news_decor {
  position: absolute;
  background: linear-gradient(rgba(0,0,0,0) 0,#000 100%);
  bottom: 0;
  left: 0;
  width: 100%;
  height: 225px;
}

.card-news .uk-card-body {
  justify-content: flex-end;
  padding: 51px 38px;
  position: relative;
}

.card-news .card_time {
  color: #fff;
}

.card-news .uk-card-title {
  margin-top: 15px;
  color: #fff;
  text-decoration: underline;
  font-size: 16px;
  text-transform: uppercase;
}*/
.uk-slider-container {
  //overflow:visible;
}
.main_news-slider--item {
  height: 400px;
  width: 90%;
  padding-right: 10px;
}
.main_news-slider--item .uk-card{
  height: 100%;
}
.button_news-all-bottom {
  display: none;
}
.main-news_title {
  font-size: 18px;
}
.main-news {
  padding-top: 70px;
  padding-bottom: 70px;
}
.main-news_title {
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.main-news__headline {
  margin-top: 0;
}
.main-news_container > li > * {
  padding-left: 0;
}
.main-news_container > li {
  margin-left: 0;
}
.main-news__items {
  width: 100%;
  height: 100%;
  justify-content: normal;
  gap: 50px;
  margin-top: 50px;
  .uk-card {
    width: calc(33% - 50px);
    margin-top: 0;
  }
}

.card-news .uk-card-title {
  text-decoration: none;
}
@media screen and (max-width: 1400px) {
  .main-news__items > .card-news:nth-child(3), .main-news__items > .card-news:nth-child(4) {
    display: flex;
  }
}
@media screen and (max-width: 1366px) {
  .main-news__items {
    .uk-card {
      width: calc(50% - 25px);
    }
  }
}
@media screen and (max-width: 767px) {
  .button_news-all-bottom {
    display: flex;
    width: 100%;
    max-width: 180px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }
  .button_news-all-top {
    display: none;
  }
}

@media screen and (max-width: 639px) {
  .main-news_title {
    font-size: 18px;
  }
  .main-news {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
@media screen and (max-width: 428px) {
  .main_news-slider--item {
    height: 210px;
  }
}
</style>
