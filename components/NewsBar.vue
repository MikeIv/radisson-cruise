<template>
  <section class="main-news uk-cover-container uk-container">
<!--    <img src="~assets/img/svg/decor1.svg" alt="" class="main-news_decor1 uk-visible@m" uk-svg>-->
    <div class="main-news__headline uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
      <ul class="uk-subnav" uk-switcher="connect: .main-news_container; animation: uk-animation-fade;swiping:false;">
        <li class="uk-active" @click="selectNewsTab('news')">
          <a href="#" aria-expanded="true">Новости</a>
        </li>
        <li  @click="selectNewsTab('actions')">
          <a href="#" aria-expanded="false">АКЦИИ</a>
        </li>
      </ul>
      <div class="description">
        Сегодня: <b>{{dayInWeek}},<br>
        {{currentDate}} {{time}}</b>
      </div>
      <nuxt-link class="uk-button uk-button-default button_news-all" to="/news/">
        <span>Все новости</span>
        <svg-icon name="arrow2" class="icon"/>
      </nuxt-link>
    </div>
    <div v-if="!isNewsLoaded">
      <h3>Материалов по запросу не найдено</h3>
    </div>
    <ul class="main-news_container uk-switcher" v-if="isNewsLoaded">
      <li uk-scrollspy="target: > div > .uk-card; cls: uk-animation-slide-bottom-medium; delay: 500" class="uk-active">
        <div class="main-news__important">
          <NewsBarCardImportant :link="cardMain.uri"
                                :fileName="cardMain.banner"
                                :date="cardMain.date"
                                :title="cardMain.name"
                                :description="cardMain.anons"
          />
        </div>
        <div class="main-news__items uk-flex uk-flex-nowrap uk-grid-match">
            <!--          <a class="uk-card card-news transition uk-scrollspy-inview uk-animation-slide-bottom-medium" href="news_item.html" style="">
            <img  data-src="~assets/img/main/img3.png" alt="" class="img_cover" src="http://flotilia.r-b-m.ru/img/main/img3.png">
            <div class="card-news_decor"></div>
            <div class="uk-card-body">
              <div class="card_time">
                <span>15 ноября 2019 г.</span>
              </div>
              <h3 class="uk-card-title">
                Голосвание за премию
                «Путеводная звезда»
              </h3>
            </div>
          </a>
          <a class="uk-card card-news transition uk-scrollspy-inview uk-animation-slide-bottom-medium" href="news_item.html" style="">
            <img data-src="~assets/img/main/img4.png" alt="" class="img_cover" src="http://flotilia.r-b-m.ru/img/main/img4.png">
            <div class="card-news_decor"></div>
            <div class="uk-card-body">
              <div class="card_time">
                <span>15 ноября 2019 г.</span>
              </div>
              <h3 class="uk-card-title">
                Получи круиз в подарок!
              </h3>
            </div>
          </a>
          <a class="uk-card card-news transition uk-scrollspy-inview uk-animation-slide-bottom-medium" href="news_item.html" style="">
            <img data-src="~assets/img/main/img3.png" alt="" class="img_cover" src="http://flotilia.r-b-m.ru/img/main/img3.png">
            <div class="card-news_decor"></div>
            <div class="uk-card-body">
              <div class="card_time">
                <span>15 ноября 2019 г.</span>
              </div>
              <h3 class="uk-card-title">
                Голосвание за премию
                «Путеводная звезда»
              </h3>
            </div>
          </a>
          <a class="uk-card card-news transition uk-scrollspy-inview uk-animation-slide-bottom-medium" href="news_item.html" style="">
            <img  data-src="~assets/img/main/img3.png" alt="" class="img_cover" src="http://flotilia.r-b-m.ru/img/main/img3.png">
            <div class="card-news_decor"></div>
            <div class="uk-card-body">
              <div class="card_time">
                <span>15 ноября 2019 г.</span>
              </div>
              <h3 class="uk-card-title">
                Голосвание за премию
                «Путеводная звезда»
              </h3>
            </div>
          </a>-->
          <NewsBarCard v-for="(card,index) in cardSmall"
                              :key="'inx2' + index"
                              :link="card.uri"
                              :fileName="card.banner"
                              :date="card.date"
                              :title="card.name"
          />
        </div>
<!--        <div v-for="commentIndex in commentsToShow" class="main-news__items uk-flex uk-flex-nowrap uk-grid-match">
          <div v-if="commentIndex < reviews.length">
            <NewsBarCard v-for="(card,index) in cardSmall"
                         :key="'inx1' + index"
                         :link="card.uri"
                         :fileName="card.banner"
                         :date="card.date"
                         :title="card.name"
            />
          </div>
        </div>-->
      </li>
      <li uk-scrollspy="target: > div > .uk-card; cls: uk-animation-slide-bottom-medium; delay: 500" class="">
        <div class="main-news__important">
          <NewsBarCardImportant :link="cardMain.uri"
                                :fileName="cardMain.banner"
                                :date="cardMain.date"
                                :title="cardMain.name"
                                :description="cardMain.anons"
          />
        </div>
        <div class="main-news__items uk-flex uk-flex-nowrap uk-grid-match">
              <NewsBarCard v-for="(card,index) in cardSmall"
                           :key="'inx' + index"
                           :link="card.uri"
                           :fileName="card.banner"
                           :date="card.date"
                           :title="card.name"
              />
        </div>
      </li>
    </ul>
    <div class="uk-text-center more_container">
      <div></div>
<!--      <button class="btn_more transition" @click="commentsToShow += 1">
        <span>Показать еще</span>
      </button>-->
      <nuxt-link class="btn_more transition" to="/news/"><span>Показать еще</span></nuxt-link>
      <div></div>
    </div>
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
    let days = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
    ]
    let d = new Date();
    let n = d.getDay();
    let dayInWeek = days[n]
    return {
      isNewsLoaded: false,
      interval: null,
      time: null,
      currentDate: null,
      dayInWeek,
      reviews: [
        {name: 'Derek', description: 'Some comment'},
        {name: 'Joe', description: 'Some comment'},
        {name: 'Mike', description: 'Some comment'},
        {name: 'Ron', description: 'Some comment'},
        {name: 'Dii', description: 'Some comment'},
        {name: 'Lonnie', description: 'Some comment'},
        {name: 'Paul', description: 'Some comment'},
        {name: 'Mike', description: 'Some comment'},
        {name: 'Jody', description: 'Some comment'},
        {name: 'Ryn', description: 'Some comment'},
        {name: 'Jord', description: 'Some comment'},
        {name: 'Milly', description: 'Some comment'},
        {name: 'Judy', description: 'Some comment'},
        {name: 'Vanilly', description: 'Some comment'},
        {name: 'Nolan', description: 'Some comment'},
        {name: 'Pino', description: 'Some comment'},
        {name: 'Ryne', description: 'Some comment'},
        {name: 'Scott', description: 'Some comment'},
        {name: 'Son', description: 'Some comment'},
        {name: 'Bann', description: 'Some comment'},
      ],
      коcommentsToShow: 0,
      totalComments: 0,

      currentNews: {},
      currentActions: {},
      cardMain:
        {
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
      cardAdding: {
        banner: 'main/img3.png',
        uri: '/news',
        date: '15 ноября 2019 г.',
        name: `С 1 декабря Ройал класс Флотилии
                  возобнавляет навигацию`,
      },
    }
  },
  methods: {
    selectNewsTab(tab){
      if(tab === 'news'){
        if(this.currentNews.length > 0){
        this.isNewsLoaded = true;
        this.cardMain = this.currentNews[0]
        this.cardSmall = this.currentNews.slice(1, 5) 
        }
        else{
          this.isNewsLoaded = false;
        }
    }
    else{
      if(this.currentActions.length > 0){
        this.isNewsLoaded = true;
        this.cardMain = this.currentActions[0]
        this.cardSmall = this.currentActions.slice(1, 5) 
      }
      else{
        this.isNewsLoaded = false;
      }
      }
    }
  },
  mounted() {
    this.totalComments = this.reviews.length
    if(this.news !== undefined && this.news.length > 0) {
      this.currentNews = this.news;
      this.cardMain = this.news[0]
      this.cardSmall = this.news.slice(1, 5)
      this.isNewsLoaded = true;
    }
    if(this.actions !== undefined && this.actions.length > 0) {
      this.currentActions = this.actions;
    }
  },

  computed: {
  },

  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.currentDate = Intl.DateTimeFormat('en-GB', {
      }).format()
      this.time = Intl.DateTimeFormat('nu', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  },

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
</style>
