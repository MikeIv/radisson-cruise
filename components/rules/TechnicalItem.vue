<template>
  <div class="rules-performance__item">
    <div class="headline_22 t_semibold">
      {{ title }}
    </div>
    <div class="rules-performance__item__txt">
      <p><b>Год выпуска:</b> {{year}}</p>
      <p><b>Параметры:</b> {{params}}</p>
      <p> <b>Круизная скорость:</b> {{speed}}</p>
      <p><b>Двигатели:</b> {{engine}}</p>
      <p>
        <b>Характеристики салона:</b>
        {{ cabinParams }}
      </p>
    </div>
    <div class="rules-performance__item__img">
      <img :data-src="require(`~/assets/img/${fileName}`)" alt="" :src="require(`~/assets/img/${fileName}`)">
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnicalItem",
  props: {
    fileName: String,
    year: String,
    params: String,
    title: String,
    engine: String,
    speed: String,
    cabinParams: String,
  }
}
</script>

<style scoped>

</style>
