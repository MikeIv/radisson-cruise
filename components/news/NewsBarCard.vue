<template>
  <nuxt-link class="uk-card card-news transition uk-scrollspy-inview uk-animation-slide-bottom-medium" :to="link">
    <img :data-src="`${this.$config.baseSiteURL}${fileName}`" alt="" class="img_cover" :src="`${this.$config.baseSiteURL}${fileName}`">
    <div class="card-news_decor"></div>
    <div class="uk-card-body">
      <div class="card_time">
        <svg-icon name="clock2"/>
        <span>{{ date }}</span>
      </div>
      <h3 class="uk-card-title">
        {{ title }}
      </h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "NewsBarCard",
  props: {
    link: String,
    fileName: String,
    date: String,
    title: String,
  }
}
</script>

<style scoped>
.card_time svg {
  fill: #fff;
}
</style>
