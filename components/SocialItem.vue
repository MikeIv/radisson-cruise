<template>
  <a :href="link" target="_blank">
    <svg-icon :name="svgURL" class="icon"/>
  </a>
</template>

<script>
export default {
  name: "SocialItem",
  props: {
    svgURL: String,
    link: String,
  }
}
</script>

<style scoped>

</style>
