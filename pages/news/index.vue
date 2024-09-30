<template>
  <div>
    <Header>
      <img src="~images/inners2/back_news.webp" data-src="~images/inners2/back_news.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ seoData?.header }}
          </h1>
        </div>
      </div>
    </Header>
    <div class="category-cabin__top uk-visible@s" uk-filter="target: .js-filter">
      <div class="uk-container">
        <div class="news__navigatiom">
<!--          <div class="uk-flex news__navigatiom__tabs">
            &lt;!&ndash;            <a class="uk-button button_switcher-second active" href="" id="newsAll">Все</a>
                        <a class="uk-button button_switcher-second" href="" id="new">Новости</a>
                        <a class="uk-button button_switcher-second" href="" id="sale">Акции</a>
                        <a class="uk-button button_switcher-second" href="" id="actions">События</a>&ndash;&gt;
            <button class="uk-button button_switcher-second" @click.prevent="filterPosts(''); setPages();">Все</button>
            <button class="uk-button button_switcher-second" v-for="(filter,index) in catFilter" :key="'fltr' + index"
                    :id="filter" name="catfilter" :value="filter" @click="filterPosts($event); setPages();"
            >
              {{filter}}
            </button>
            &lt;!&ndash;            <label class="uk-button button_switcher-second"  v-for="filter in catFilter" :for="filter">{{filter}}
                          <button
                                  :id="filter"
                                  type="button"
                                  name="catfilter" :value="filter" @click="filterPosts($event); setPages();"/>
                        </label>&ndash;&gt;
          </div>-->
          <div class="uk-flex news__navigatiom__tabs">
            <button @click="fetchNews(1, item.grp,currentMonth,currentYear)"
                    v-for="item in newsCategories" class="uk-button button_switcher-second"
                    :class="checkGrp(item.grp)"
            >
              {{$t(item.name)}}
            </button>
          </div>
<!--          <div class="news__navigatiom__date">
            <div class="input_archive input_archive_month">
              <div class="select">
                <select v-model="currentMonth" @change="fetchNews(currentPage,currentGrp,currentMonth,currentYear)" name="" id="" class="select-styled">
                  <option :value="null" selected disabled >Месяц</option>
                  <option :value="null">Все месяцы</option>
                  <option :value="1">Январь</option>
                  <option :value="2">Февраль</option>
                  <option :value="3">Март</option>
                  <option :value="4">Апрель</option>
                  <option :value="5">Май</option>
                  <option :value="6">Июнь</option>
                  <option :value="7">Июль</option>
                  <option :value="8">Август</option>
                  <option :value="9">Сентябрь</option>
                  <option :value="10">Октябрь</option>
                  <option :value="11">Ноябрь</option>
                  <option :value="12">Декабрь</option>
                </select>
              </div>
            </div>
            <div class="input_archive input_archive_year">
              <div class="select">
                <select v-model="currentYear" @change="fetchNews(currentPage,currentGrp,currentMonth,currentYear)" name="" id="" class="select-styled">
                  <option value="" selected disabled >Год</option>
                  <option :value="null">Все года</option>
                  <option :value="2023">2023 год</option>
                  <option :value="2022">2022 год</option>
                  <option :value="2021">2021 год</option>
                  <option :value="2020">2020 год</option>
                  <option :value="2019">2019 год</option>
                  <option :value="2018">2018 год</option>
                  <option :value="2017">2017 год</option>
                  <option :value="2016">2016 год</option>
                  <option :value="2015">2015 год</option>
                  <option :value="2014">2014 год</option>
                  <option :value="2013">2013 год</option>
                  <option :value="2012">2012 год</option>
                  <option :value="2011">2011 год</option>
                  <option :value="2010">2010 год</option>
                  <option :value="2009">2009 год</option>
                </select>
              </div>
            </div>
          </div>-->
          <div class="news__navigatiom__date">
            <div class="input_archive input_archive_month">
              <div class="select">
                <div class="select-styled">
                  {{ selectedMonth }}
                </div>
                <ul uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="select-options uk-dropdown">
                  <li @click="currentMonth = null;fetchNews(currentPage,currentGrp,currentMonth,currentYear)">Все месяцы</li>
                  <li @click="currentMonth = month.value;fetchNews(currentPage,currentGrp, currentMonth,currentYear)"
                      v-for="month in getMonths"
                      :key="'mnt' + month.value"
                  >
                    {{ month.name }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="input_archive input_archive_year">
              <div class="select">
                <div class="select-styled">
                  {{ selectedYear }}
                </div>
                <ul uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="select-options uk-dropdown">
                  <li @click="currentYear = null;fetchNews(currentPage, currentGrp, currentMonth, currentYear)">Все года</li>
                  <li @click="currentYear = year;fetchNews(currentPage, currentGrp, currentMonth, currentYear)"
                      v-for="year in getYears"
                      :key="'yr' + year"
                  >
                    {{ year }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="news__section">
      <div class="uk-container">
        <a href="#modal-category-cabin-filter" class="uk-button btn-news-filter uk-hidden@s" uk-toggle="">
            <span>
              {{ $t('buttons.open_filter') }}
            </span>
            <svg-icon class="icon" name="svg-flight4"/>
          </a>

        <div v-if="paginationPages === 0">
          {{$t('empty_news')}}
        </div>
        <div v-else class="news__grid js-filter">
          <NewsCard :key="'nscrd' + index"
                    v-for="(card, index) in currentNews"
                    :name="card.name"
                    :badge="card.grp"
                    :main="card.stick"
                    :date="card.date"
                    :top-info="card.name"
                    :bottom-info="card.anons"
                    :fileName="card.banner"
                    :page="currentPage"
                    :group="currentGrp"
                    :anons="card.anons"
                    :id="card.id"
                    :uri="card.uri"
          />
        </div>

        <ul v-if="paginationPages !== 0" class="mixitup-page-list uk-pagination uk-flex-center uk-flex-middle">
          <li class="mixitup-control mixitup-control-prev uk-margin-auto-right pagination_back"
              @click.prevent="fetchNews(--currentPage,currentGrp,currentMonth,currentYear)">
            <div>
              <svg-icon class="icon" name="arr_lang"/>
            </div>
          </li>

          <li class="mixitup-control" :class="checkClass(pageNumber)"
              @click="fetchNews(pageNumber, currentGrp,currentMonth,currentYear)"
              v-for="pageNumber in paginationPages">
            <div>{{pageNumber}}</div>
          </li>

          <li class="mixitup-control mixitup-control-next uk-margin-auto-left pagination_next"
              @click.prevent="fetchNews(++currentPage,currentGrp,currentMonth,currentYear)">
            <div>
              <svg-icon class="icon" name="arr_lang"/>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <FilterMobile
        :is-tabs-filter="true"
        :is-news-filter="true"
        :categories="newsCategoriesMobile"
        ref="filterModal"
        @checked-tabs="checkedFilter"
        :actual-month.sync="currentMonth"
        :actual-year.sync="currentYear"
    />
  </div>
</template>

<script>
import NewsCard from "../../components/news/NewsCard";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import FilterMobile from "../../components/modals/Filter";
import axios from "axios";
export default {
  name: "news",
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
  components: {Breadcrumbs, Header, NewsCard, FilterMobile},
  data() {
    return {
      paginationPages: 0,
      currentPage: 1,
      currentNews: [],
      currentGrp: 'all',
      currentMonth: null,
      currentYear: null,
      newsCategories: [
        {
          name: 'all',
          grp: 'all',
        },
        {
          name: 'news',
          grp: 'article',
        },
        {
          name: 'action',
          grp: 'action',
        },
        {
          name: 'event',
          grp: 'event',
        },
      ],
      newsCategoriesMobile: [

        {
          id: 1,
          name: 'Новости',
          grp: 'article',
        },
        {
          id: 2,
          name: 'Акции',
          grp: 'action',
        },
        {
          id: 3,
          name: 'События',
          grp: 'event',
        },
      ],
      cardInfo: [
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img2.png',
          main: true,
          sale: false,
          category: 'Новости'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: true,
          category: 'Акции'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: true,
          category: 'Акции'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'Новости'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'Новости'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'Новости'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'Новости'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'События'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'События'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'События'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'Новости'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: true,
          category: 'Акции'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'События'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'Новости'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'Новости'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: false,
          category: 'События'
        },
        {
          date: '15 ноября 2019г.',
          topInfo: 'ЕЩЕ БОЛЬШЕ КРУИЗОВ ПО МОСКВЕ-РЕК С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
          bottomInfo: 'Краткий описательный текст на сайте в несколько строк для пояснения ситуации',
          img: 'main/img3.png',
          main: false,
          sale: true,
          category: 'Акции'
        },
      ],
      filteredPosts: [],
      posts: [],
      page: 1,
      perPage: 7,
      pages: [],
      title: 'Новости и акции',
      seoData: {},
    }
  },
  methods: {
    showAllFilters(){
      const allCategoriesBloks = document.querySelectorAll('.category-item');
      allCategoriesBloks.forEach((item) => {
        item.classList.remove('hide');
      })
    },
    hideAllFilters(){
      const allCategoriesBloks = document.querySelectorAll('.category-item');
      allCategoriesBloks.forEach((item) => {
        item.classList.add('hide');
      })
    },
    checkedFilter(emitFilterPrameters){
      //console.log("PARENT CHECKED emitParam = ", emitFilterPrameters)
      this.currentSelectedCategory = emitFilterPrameters.activeTab;
      this.currentYear = emitFilterPrameters.activeYear;
      this.currentMonth = emitFilterPrameters.activeMonth;
      switch (emitFilterPrameters.activeTab) {
        case 0:
          if(emitFilterPrameters.activeMonth !== null && emitFilterPrameters.activeYear === null){
            this.fetchNews(1, 'all', emitFilterPrameters.activeMonth);
          }
         else if(emitFilterPrameters.activeYear !== null && emitFilterPrameters.activeMonth === null){
            this.fetchNews(1, 'all', null, emitFilterPrameters.activeYear);
          }
         else if(emitFilterPrameters.activeMonth !== null && emitFilterPrameters.activeYear !== null){
            this.fetchNews(1, 'all', emitFilterPrameters.activeMonth, emitFilterPrameters.activeYear);
          }
          else{
            this.fetchNews(1, 'all');
          }
        
          break;
        case 1:
        if(emitFilterPrameters.activeMonth !== null && emitFilterPrameters.activeYear === null){
            this.fetchNews(1, 'article', emitFilterPrameters.activeMonth);
          }
         else if(emitFilterPrameters.activeYear !== null && emitFilterPrameters.activeMonth === null){
            this.fetchNews(1, 'article', null, emitFilterPrameters.activeYear);
          }
         else if(emitFilterPrameters.activeMonth !== null && emitFilterPrameters.activeYear !== null){
            this.fetchNews(1, 'article', emitFilterPrameters.activeMonth, emitFilterPrameters.activeYear);
          }
          else{
            this.fetchNews(1, 'article');
          }

          break;
        case 2:
        if(emitFilterPrameters.activeMonth !== null && emitFilterPrameters.activeYear === null){
            this.fetchNews(1, 'action', emitFilterPrameters.activeMonth);
          }
         else if(emitFilterPrameters.activeYear !== null && emitFilterPrameters.activeMonth === null){
            this.fetchNews(1, 'action', null, emitFilterPrameters.activeYear);
          }
         else if(emitFilterPrameters.activeMonth !== null && emitFilterPrameters.activeYear !== null){
            this.fetchNews(1, 'action', emitFilterPrameters.activeMonth, emitFilterPrameters.activeYear);
          }
          else{
            this.fetchNews(1, 'action');
          }


          break;
        case 3:
        if(emitFilterPrameters.activeMonth !== null && emitFilterPrameters.activeYear === null){
            this.fetchNews(1, 'event', emitFilterPrameters.activeMonth );
          }
         else if(emitFilterPrameters.activeYear !== null && emitFilterPrameters.activeMonth === null){
            this.fetchNews(1, 'event', null, emitFilterPrameters.activeYear);
          }
         else if(emitFilterPrameters.activeMonth !== null && emitFilterPrameters.activeYear !== null){
            this.fetchNews(1, 'event', emitFilterPrameters.activeMonth, emitFilterPrameters.activeYear);
          }
          else{
            this.fetchNews(1, 'event');
          }

          break;
      
        default:
            this.fetchNews(1, 'all');

          break;
      }
      
      //this.filterRoutes();
      
    
    },
    checkGrp(grp) {
      if (this.currentGrp === grp) {
        return 'uk-active'
      } else {
        return ''
      }
    },

    checkClass(page) {
      if (this.currentPage === page) {
        return 'uk-active'
      } else {
        return ''
      }
    },


    async fetchNews(page = 1, grp, month = null,year = null) {
      //console.log("fetchNews params  = " ,page , ' || ', grp, ' || ', month, ' || ', year);
      if(page > this.paginationPages) {
        page = this.paginationPages
      } else if (page === 0 ) {
        page = 1
      }
      let news;
      let urlNewsQuery = `${this.$config.baseURL}news?page=${page}&lang=${this.$i18n.locale}`;

      if(typeof +page !== 'number') {
        return
      }
      if(!this.newsCategories.map(item => item.grp).includes(grp)) {
        const query = Object.assign({}, this.$route.query);
        delete query.grp;
        this.$router.replace({ query });
        return
      }

      if(grp !== 'all' && grp !== undefined) {
        if(month !== null && year === null) {
          urlNewsQuery = `${this.$config.baseURL}news?month=${month}&page=${page}&grp=${grp}&lang=${this.$i18n.locale}`;
        }
        else if(year !== null && month === null) {
          urlNewsQuery = `${this.$config.baseURL}news?year=${year}&page=${page}&grp=${grp}&lang=${this.$i18n.locale}`;
        }
        else if(year !== null && month !== null) {
            urlNewsQuery = `${this.$config.baseURL}news?year=${year}&month=${month}&page=${page}&grp=${grp}&lang=${this.$i18n.locale}`;
          }
        else{
          urlNewsQuery = `${this.$config.baseURL}news?page=${page}&grp=${grp}&lang=${this.$i18n.locale}`;
        }
        }
        else{
          if(month !== null && year === null) {
            urlNewsQuery = `${this.$config.baseURL}news?month=${month}&page=${page}&lang=${this.$i18n.locale}`;
          }
          else if(year !== null && month === null) {
            urlNewsQuery = `${this.$config.baseURL}news?year=${year}&page=${page}&lang=${this.$i18n.locale}`;
          }
          else if(year !== null && month !== null) {
            urlNewsQuery = `${this.$config.baseURL}news?year=${year}&month=${month}&page=${page}&lang=${this.$i18n.locale}`;
          }
          else{
            urlNewsQuery = `${this.$config.baseURL}news?page=${page}&lang=${this.$i18n.locale}`;
          }
        }

      


      
      this.currentGrp = grp;

/*       if(grp !== 'all') {
        news = await axios.get(
          `${this.$config.baseURL}news?grp=${grp}&page=${page}`);
      } else {
        news = await axios.get(
          `${this.$config.baseURL}news?page=${page}`);
      } */
      //console.log("page = " ,page);
      //console.log("urlNewsQuery = " ,urlNewsQuery);
      news = await axios.get(urlNewsQuery);


      //console.log(news.data)
      this.currentNews = news.data.news
      this.currentPage = news.data.page
      this.paginationPages = news.data.pages
      this.$router.push({query: {page: page, grp: grp}})
    },

    listPagesPrev() {
      if(this.page !== 1) {
        return this.page--
      } else {
        return this.page
      }
    },
    listPagesNext() {
      if(this.page < this.pages.length) {
        return this.page++
      } else {
        return this.page
      }
    },

    checkMain() {
      this.cardInfo.forEach(item => {
        if(item.main === true) {
          //console.log(item.main)
          return 'uk-card transition card-news_big'
        } else {
          return 'uk-card transition card-news__small'
        }
      })
    },
    /*    fetchPosts() {
          // return fetch('https://jsonplaceholder.typicode.com/posts/')
          return fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json => {
              // console.log(json)
              return json
            })
        },*/

    filterPosts(event) {
      if (event === '') {
        this.pages = []
        this.page = 1
        this.filteredPosts = this.cardInfo
      } else {
        this.filteredPosts = this.cardInfo.filter(post => {
          this.pages = []
          this.page = 1
          return post.category == event.target.value
        })
      }
    },
    paginate (posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  posts.slice(from, to);
    },
    setPages () {
      let numberOfPages = Math.ceil(this.filteredPosts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
  },
  computed: {
    catFilter() {
      return Array.from(new Set(this.cardInfo.map(e => e.category)))
    },

    displayedPosts () {
      return this.paginate(this.filteredPosts);
    },

    selectedMonth() {
      return this.currentMonth !== null  ? this.getMonths.find((month) => month.value === this.currentMonth).name : this.$i18n.t('month')
    },
    selectedYear() {
      return this.currentYear !== null ? this.currentYear : this.$i18n.t('year')
    },
    getYears() {
      let years = [];
      const currentYear = new Date().getFullYear();
      for (let year = currentYear; year >= 2009; year--) {
        years.push(year);
      }
      return years
    },

    getMonths() {
      return this.$i18n.t('monthnames').map((month, index) => {
        return {
          name: month,
          value: index + 1
        }
      })
    },
  },
  beforeDestroy() {
    //console.log("DESTROY Yachts Index =", this.$refs.filterModal);
    this.$refs.filterModal.destroyModal();
    
  },
  mounted() {
    this.filteredPosts = this.cardInfo
    this.setPages();
  },
  watch: {
    posts () {
      this.setPages();
    },
    '$route.query.grp'() {
      if(typeof +this.$route.query.page !== 'number') {
        return
      }
      if(!['all', 'article', 'action', 'event'].includes(this.$route.query.grp)){
        const query = Object.assign({}, this.$route.query);
        delete query.grp;
        this.$router.replace({ query });
        return
      }
      this.fetchNews(this.$route.query.page, this.$route.query.grp)
      switch (this.$route.query.grp) {
        case 'all':
          this.title = 'Новости и акции'
          break;
        case 'article':
          this.title = 'Новости'
          break;
        case 'action':
          this.title = 'Акции'
          break;
        case 'event':
          this.title = 'События'
          break;
        default:
          this.title = 'Новости и акции'
          break;
      }
    },
    deep: true
  },

  validate({ query }) {
    if(query.grp) {
      return ['all', 'article', 'action', 'event'].includes(query.grp);
    } else if(query.page) {
      return !isNaN(query.page)
    } else {
      return true
    }
  },

  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/news/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let urlNewsQuery = `${this.$config.baseURL}news?page=1&lang=${this.$i18n.locale}`;
    if(this.$route.query.page) {
      if(typeof +this.$route.query.page !== 'number') {
        return
      }
      this.currentPage = +this.$route.query.page
      
    } else {
      this.currentPage = 1
    }

    if(this.$route.query.grp && this.$route.query.grp !== 'all') {
      if(!['all', 'article', 'action', 'event'].includes(this.$route.query.grp)) {
        return
      }
      this.currentGrp = this.$route.query.grp
      urlNewsQuery = `${this.$config.baseURL}news?page=${this.currentPage}&grp=${this.currentGrp}&lang=${this.$i18n.locale}`;
    } else if(this.$route.query.grp === 'all'){
      this.currentGrp = 'all'
      urlNewsQuery = `${this.$config.baseURL}news?page=${this.currentPage}&lang=${this.$i18n.locale}`;
    }
    let news = await axios.get(urlNewsQuery);
    this.currentNews = news.data.news
    this.currentPage = news.data.page
    this.paginationPages = news.data.pages
  },
  fetchOnServer: true,
  fetchKey: 'news',
}
</script>

<style scoped>
.news__grid > a.card-news_big {
  padding: 0;
  grid-area: 1/1/3/2;
}
/*
.news__grid > a {
  border-bottom: 1px solid #a1c2e5;
  border-right: 1px solid #a1c2e5;
}*/

/*@media screen and (max-width: 1400px) {
  .news__grid > a.card-news_big {
    grid-area: auto;
  }
}*/
.input_archive .select-styled option {
  padding: 2px 20px;
  font-size: 12px;
}
/*
.select-styled {
  position: relative;
  display: block;
}

.select-styled::after {
  content: '>';
  display: block;
  color: #000;
  position: absolute;
  right:0;
  top:0;
  height: 10px;
  width: 10px;

}*/

.select-styled option {
  font-size: 13px;
  color: #000;
  margin: 0;
  padding: 7px 21px;
  transition: .15s ease-in;
}

.button_switcher-second.uk-active {
  border: 1px solid #00c1f3;
  background: #00c1f3;
  color: #fff;
}

.mixitup-page-list {
  column-gap: 15px;
  row-gap: 15px;
}
.uk-pagination > * {
  padding: 0;
}

</style>
