<template>
  <div class="trams__route">
    <div class="trams__route__img uk-cover-container">
      <img  class="img_cover"
            :data-src="`${$config.imageURL}?size=1060&format=webp&src=${$config.baseSiteURL}` + fileName"
            alt=""
            :src="`${$config.imageURL}?size=1060&format=webp&src=${$config.baseSiteURL}` + fileName"
      >
    </div>
    <div class="trams__route__info">
      <div class="trams__route__num">
        0{{ counter }}.
      </div>
      <div class="headline_line"></div>
      <div class="headline_22 t_semibold">
        {{ portName }}
      </div>
<!--      <div class="trams__route__metro">
      </div>-->
      <div class="trams__route__txt" v-html="text">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Route",
  props: {
    fileName: String,
    counter: Number,
    portName: String,
    text: String,
  },
}
</script>

<style scoped>
</style>
