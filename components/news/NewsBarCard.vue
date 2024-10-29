<template>
  <nuxt-link :prefetch="false" class="uk-card card-news transition uk-scrollspy-inview uk-animation-slide-bottom-medium" :to="link">
    <img :data-src="`${$config.imageURL}?size=650&format=webp&src=${$config.baseSiteURL}${fileName}`"
         alt=""
         class="img_cover"
         :src="`${$config.imageURL}?size=650&format=webp&src=${$config.baseSiteURL}${fileName}`">
    <div v-if="important === 1" class="uk-badge">
      {{ $t('news_important') }}
    </div>
    <div class="card-news_decor"></div>
    <div class="uk-card-body">
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
    important: Number,
  }
}
</script>

<style scoped>
.uk-badge {
  top: 20px;
  left: 20px;
  width: auto;
  height: auto;
  flex:none;
}
@media screen and (max-width: 639px) {
  .card-news .uk-card-title {
    font-size: 14px;
  }
}

</style>
