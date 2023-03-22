<template>
  <div class="menu-cafe__item" :class="customClass">

<!--    <img class="img_cover" :data-src="require(`~/assets/img/${fileName}`)" alt="" :src="require(`~/assets/img/${fileName}`)">-->
    <img :data-src="$config.baseSiteURL + fileName" class="img_cover" :src="$config.baseSiteURL + fileName" :alt="title"/>
<!--    <picture v-if="fileNameSmall">
      <source :srcset="require(`~/assets/img/${fileNameSmall}`)" media="(max-width: 1310px)">
      <source :srcset="require(`~/assets/img/${fileName}`)">
      <img class="img_cover" :data-src="require(`~/assets/img/${fileName}`)" alt="" :src="require(`~/assets/img/${fileName}`)">

    </picture>-->
    <picture v-if="fileNameSmall">
      <source :srcset="$config.baseSiteURL + fileName" media="(max-width: 1310px)">
      <source :srcset="$config.baseSiteURL + fileName">
      <img class="img_cover" :data-src="$config.baseSiteURL + fileName" alt="" :src="$config.baseSiteURL + fileName">

    </picture>
    <div class="uk-position-relative">
      <div class="headline_26 text-upper">
        {{ title }}
      </div>
      <div class="menu-cafe__item_txt">
        {{ description }}
      </div>
      <MenuBtn :pdf="pdf"/>
    </div>
  </div>
</template>

<script>
import MenuBtn from "./MenuBtn";
export default {
  name: "MenuCard",
  components: {MenuBtn},
  props: {
    fileName: String,
    title: String,
    description: String,
    customClass: String,
    fileNameSmall: String,
    pdf: String,
  }
}
</script>

<style scoped>
</style>
