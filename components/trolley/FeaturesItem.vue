<template>
  <div class="trams-advantage__item trams-advantage__item_1 uk-position-relative">
    <div class="trams-advantage__item__back"></div>
    <div class="trams-advantage__item__name">
      {{ name }}
    </div>
    <svg-icon class="trams-advantage__item__svg" :name="icon"/>
  </div>
</template>

<script>
export default {
  name: "FeaturesItem",
  props: {
    name: String,
    icon: String,
  },
}
</script>

<style scoped>

</style>
