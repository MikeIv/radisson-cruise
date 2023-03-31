<template>
  <a :href="link" class="about-partner__card uk-scrollspy-inview uk-animation-slide-bottom-medium">
    <img :data-src="`${$config.imageURL}?size=176&format=webp&src=${$config.baseSiteURL}${fileName}`"
         alt="partner-img"
         :src="`${$config.imageURL}?size=176&format=webp&src=${$config.baseSiteURL}${fileName}`"
    >
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
