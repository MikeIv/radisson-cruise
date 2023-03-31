<template>
  <div class="uk-position-relative tenancy-advantages__item">
    <div class="tenancy-advantages__item__img uk-cover-container">
<!--      <img  :data-src="require(`~/assets/img/${fileName}`)" alt="" class="img_cover" :src="require(`~/assets/img/${fileName}`)">-->
      <img  :data-src="`${$config.imageURL}?size=650&format=webp&src=${$config.baseSiteURL}${fileName}`"
            alt="advantages-img"
            class="img_cover"
            :src="`${$config.imageURL}?size=650&format=webp&src=${$config.baseSiteURL}${fileName}`">
    </div>
    <div class="tenancy-advantages__item__info" uk-slider-parallax="x: 400,-400">
      <div class="headline_22">
        {{ title }}
      </div>
      <div class="headline_line"></div>
      <div class="tenancy-advantages__item__p1">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RentSliderItem",
  props: {
    fileName: String,
    title: String,
    description: String,
  }
}
</script>

<style scoped>

</style>
