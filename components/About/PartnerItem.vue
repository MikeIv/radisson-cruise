<template>
  <a :href="link" class="about-partner__card uk-scrollspy-inview uk-animation-slide-bottom-medium">
    <img :data-src="$config.baseSiteURL+fileName" alt="" :src="$config.baseSiteURL+fileName">
<!--    <img :data-src="require(`~/assets/img/${fileName}`)" alt="" :src="require(`~/assets/img/${fileName}`)">-->
  </a>
</template>

<script>
export default {
  name: "PartnerItem",
  props: {
    fileName: String,
    link: String,
  }
}
</script>

<style scoped>

</style>
