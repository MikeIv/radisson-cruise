<template>
  <div class="yacht__capitan">
    <div class="yacht__capitan_img uk-cover-container">
      <img :data-src="`${$config.imageURL}?size=275&format=webp&src=${$config.baseSiteURL}`+personaImg"
           alt=""
           class="img_cover"
           :src="`${$config.imageURL}?size=275&format=webp&src=${$config.baseSiteURL}`+personaImg">
    </div>
    <div class="yacht__capitan_info">
      <nuxt-link :to="{ path: '/yachts', hash:`${yachtName}`}" replace class="transition yacht__capitan__ship">
        {{ yachtName }}
      </nuxt-link>
      <div class="yacht__capitan_name">
        {{ personaName }}
      </div>
      <div class="yacht__capitan_job">
        {{ position }}
      </div>
      <div class="yacht__capitan_experience_new">
        <svg-icon class="icon" name="calendar"/>
        <span v-if="capitans">
           {{ $t('capitan_experience') }} <br class="uk-hidden@s"> во Флотилии: <b>{{ experience }}</b>
        </span>
        <span v-else-if="managers || sellers">
           Работает: <b>{{ experience }}</b>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCard",
  props: {
    capitans: Boolean,
    managers: Boolean,
    sellers: Boolean,
    personaImg: String,
    yachtName: String,
    personaName: String,
    position: String,
    experience: String,
  }
}
</script>

<style scoped>
.yacht__capitan_img img {
  height: auto;
}

</style>
