<template>
  <nuxt-link class="uk-card card__important transition uk-scrollspy-inview uk-animation-slide-bottom-medium" :to="link">
    <div class="uk-cover-container uk-card-default_media">
      <img :data-src="`${this.$config.baseSiteURL}${fileName}`" alt="" class="img_cover" :src="`${this.$config.baseSiteURL}${fileName}`">
      <div class="uk-badge">
        {{ $t('news_important') }}
      </div>
    </div>
    <div class="uk-card-body">
      <div class="card_time">
        <span> {{ date }} </span>
      </div>
      <h3 class="uk-card-title">
        {{ title }}
      </h3>
      <div class="card_text">
        {{ description }}
      </div>
      <div class="link_more">
        <span>{{$t('buttons.more')}}</span>
        <svg-icon class="icon" name="arrow"/>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "NewsBarCardImportant",
  props: {
    link: String,
    fileName: String,
    date: String,
    title: String,
    description: String,
  }
}
</script>

<style scoped>
.uk-card-title {
  text-transform: uppercase;
}
.card_text {
  text-transform: uppercase;
}
</style>
