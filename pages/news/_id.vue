<template>
  <div>
    <Header class="news-item__header">
      <img src="~images/inners2/IMG_4478.webp" data-src="~images/inners2/IMG_4478.webp" class="img_cover" alt="">
    </Header>
    <NewsItem :content="myNew.content"
              :slidesLength="slidesLength"
              :isSlides="slides"
              :slides="myNew.slides"
              :title="name"
              :date="myNew.date"
              :grp="myNew.grp"
              :recentNews="recentNews"
    />
  </div>
</template>

<script>
import NewsItem from "../../components/news/NewsItem";
import Breadcrumbs from "../../components/Breadcrumbs";
import axios from "axios";
import UIkit from "uikit";
export default {
  name: "News-post",
  components: {Breadcrumbs, NewsItem},
  data() {
    return {
      page: this.$route.params.page,
      name: this.$route.params.name,
      group:  this.$route.params.group,
      id: '',
      newsInfo: {
        title: 'ВЕЛИКИЙ ПОСТ С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
        date: '15 ноября 2019 г.',
        sale: true,
      },
      pagesToFilter: [],
      myNew: [],
      slidesLength: 0,
      slides: false,
      formattedName: '',
      recentNews: [],
    }
  },
  methods: {
    /*async currentRoute() {
      try {
        let news = await axios.get(
          `${this.$config.baseURL}new?id=${this.id}`)

        let recentNews = await axios.get(
          `${this.$config.baseURL}news?page=1`);
        this.recentNews = recentNews.data.news.slice(0, 2)

        this.pagesToFilter = news.data.news
        this.myNew = this.pagesToFilter[0]

        this.name = this.myNew.name

        if (this.myNew.slides.length > 0) {
          this.slides = true
          this.slidesLength = this.myNew.slides.length
        }
        console.log(news)
      } catch(error) {
        console.log(error)
      }
    }*/
  },

  async fetch() {

    try {
      const news = await axios.get(
          `${this.$config.baseURL}new?id=${this.$route.params.id}`)
      const recentNews = await axios.get(
          `${this.$config.baseURL}news?page=1`);
      this.recentNews = recentNews.data.news.slice(0, 2)
      this.myNew = news.data.result

      this.name = this.myNew.name

      if (this.myNew.slides.length > 0) {
        this.slides = true
        this.slidesLength = this.myNew.slides.length
      }
    }catch(error) {
      this.$nuxt.error({ statusCode: 404, message: 'Data not found' })
    }
  },
  fetchOnServer: true,
  fetchKey: 'news-post',

  /*beforeMount() {
    this.id = this.name.split('-')[0]
   /!* this.currentRoute()*!/
  },*/

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
