<template>
  <div class="buy-sertificat__card">
    <div class="uk-cover-container buy-sertificat-card__img">
      <img :data-src="`${$config.imageURL}?size=640&format=webp&src=${$config.baseSiteURL}` + fileName"
           :src="`${$config.imageURL}?size=640&format=webp&src=${$config.baseSiteURL}` + fileName"
           class="img_cover"
           alt="">
      <div class="buy-sertificat-card__badge">
        <img data-src="~assets/img/sertificat/sert6.png" alt="" src="~assets/img/sertificat/sert6.png">
      </div>
    </div>
    <div class="buy-sertificat-card__main">
      <div class="txt18">
        {{ title }}
      </div>
      <div class="buy-sertificat-card__p1">
        {{ $t('cost_include') }}?
      </div>
      <div class="buy-sertificat-card__p2" v-html="description">
      </div>
    </div>
    <div class="buy-sertificat-card__bottom uk-flex uk-flex-between uk-flex-middle">
      <div class="headline_22">
        {{ price }} ₽
      </div>
      <nuxt-link class="uk-button uk-button-default" :to="`/certificates/${id}/`">
        {{ $t('buttons.buy_certificates') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CertificateCard",
  props: {
    fileName: String,
    title: String,
    description: String,
    price: Number,
    id: Number,
  }
}
</script>

<style scoped>

</style>
