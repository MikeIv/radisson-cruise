<template>
  <div class="rules-performance__item">
    <div class="headline_22 t_semibold">
      {{ title }}: {{ yachts }}
    </div>
    <div class="rules-performance__item__txt">
      <p><b>{{ $t('yachts_release_year')}}:</b> {{year}}</p>
      <p><b>{{$t('params')}}:</b> {{params}}</p>
      <p> <b>{{$t('cruise_speed')}}:</b> {{speed}}</p>
      <p><b>{{$t('engines')}}:</b> {{engine}}</p>
      <p>
        <b>{{ $t('saloon_spec') }}:</b>
        {{ cabinParams }}
      </p>
    </div>
    <div v-if="fileName" class="rules-performance__item__img">
      <img :data-src="`${$config.imageURL}?size=1020&format=webp&src=${$config.baseSiteURL}` + fileName"
           alt=""
           :src="`${$config.imageURL}?size=1020&format=webp&src=${$config.baseSiteURL}` + fileName">
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
    yachts: String,
  }
}
</script>

<style scoped>

</style>
