<template>
  <div class="cabin">
    <div class="cabin__header">
      <div class="cabin__img uk-cover-container">
<!--        <img :data-src="require(`~/assets/img/${fileName}`)" alt="" class="img_cover" :src="require(`~/assets/img/${fileName}`)">-->
        <img :data-src="`${$config.baseSiteURL}`+fileName" alt="" class="img_cover" :src="`${$config.baseSiteURL}`+  fileName">
        <div v-if="yachtName" class="cabin__badge">
          {{ yachtName }}
        </div>
      </div>
      <div v-if="params" class="cabin__header__info">
        <div class="cabin__header__info__parameter">
          <p><b>Год выпуска:</b> {{ year }}</p>
          <p>
            <b>Параметры:</b> {{ params }}
          </p>
          <p><b>Круизная скорость:</b> {{ speed }}</p>
          <p><b>Двигатель:</b>{{ engine }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCabin",
  props: {
    yachtName: String,
    fileName: String,
    year: String,
    params: String,
    speed: String,
    engine: String,
  }
}
</script>

<style scoped>

</style>
