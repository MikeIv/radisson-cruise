<template>
  <div>
    <Header class="news-item__header">
      <img src="~images/inners2/IMG_4478.webp" data-src="~images/inners2/IMG_4478.webp" class="img_cover" alt="">
    </Header>
    <NewsItem :title="newsInfo.title" :date="newsInfo.date" :sale="true"/>
  </div>
</template>

<script>
import NewsItem from "../components/news/NewsItem";
import Breadcrumbs from "../components/Breadcrumbs";
export default {
  name: "News-post",
  components: {Breadcrumbs, NewsItem},
  data() {
    return {
      newsInfo: {
        title: 'ВЕЛИКИЙ ПОСТ С ФЛОТИЛИЕЙ «РЭДИССОН РОЙАЛ»',
        date: '15 ноября 2019 г.',
        sale: true,
      }
    }
  }
}
</script>

<style scoped>

</style>
