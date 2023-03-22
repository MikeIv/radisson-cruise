<template>
  <a :href="$config.baseSiteURL+fileName"  class="gallery_card uk-position-relative">
    <!--    style="visibility: hidden for link if needed -->
    <img :data-src="$config.baseSiteURL+fileName" class="img_cover" :src="$config.baseSiteURL+fileName" data-alt="Image" alt="img"/>
    <div v-if="text" class="gallery_card__name">{{ text }}</div>
  </a>
</template>

<script>
export default {
  name: "PhotoCard",
  props: {
    fileName: String,
    text: String,
  }
}
</script>

<style scoped>

</style>
