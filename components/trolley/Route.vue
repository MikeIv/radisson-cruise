<template>
  <div class="trams__route">
    <div class="trams__route__img uk-cover-container">
      <img  class="img_cover" :data-src="require(`~/assets/img/${fileName}`)" alt="" :src="require(`~/assets/img/${fileName}`)">
    </div>
    <div class="trams__route__info">
      <div class="trams__route__num">
        0{{ counter }}
      </div>
      <div class="headline_line"></div>
      <div class="headline_22 t_semibold">
        {{ portName }}
      </div>
      <div class="trams__route__metro">
        <MetroBadge :colors="metroColor"
        />
        <span>
          {{ metro }}
        </span>
      </div>
      <div class="trams__route__txt">
        <p>
          {{ howToGo }}
        </p>
        <p>
          Координаты для навигатора: <b>{{ coordinates }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MetroBadge from "./MetroBadge";
export default {
  name: "Route",
  components: {MetroBadge},
  props: {
    fileName: String,
    counter: Number,
    portName: String,
    metro: String,
    howToGo: String,
    coordinates: String,
    metroColor: Array,
  },
}
</script>

<style scoped>
</style>
