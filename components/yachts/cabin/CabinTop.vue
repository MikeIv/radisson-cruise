<template>
  <div class="cabin__header">
<!--    <nuxt-link class="uk-button uk-button-default button_shedule transition" to="/yachts/schedule/">
      <svg-icon name="clock" class="icon"/>
      <span>Посмотреть расписание</span>
    </nuxt-link>-->
    <div class="cabin__img uk-cover-container">
<!--      <img alt="" class="img_cover" :src="require(`~/assets/img/${fileName}`)" :data-src="require(`~/assets/img/${fileName}`)">-->
      <img alt=""
           class="img_cover"
           :src="`${$config.imageURL}?size=1600&format=webp&src=${$config.baseSiteURL}` + fileName"
           :data-src="`${$config.imageURL}?size=1600&format=webp&src=${$config.baseSiteURL}` + fileName">
      <div class="cabin__badge">
        {{ name }}
      </div>
    </div>
    <div class="cabin__header__info">
      <div class="yacht__capitan">
        <div class="yacht__capitan_img uk-cover-container">
          <img class="img_cover"
               alt=""
               :src="`${$config.imageURL}?size=245&format=webp&src=${$config.baseSiteURL}` + capImg"
               :data-src="`${$config.imageURL}?size=245&format=webp&src=${$config.baseSiteURL}` + capImg">
        </div>
        <div class="yacht__capitan_info">
          <div class="yacht__capitan_job">
            {{ $t('yacht_capitan') }}
          </div>
          <div class="yacht__capitan_name">
            {{ capName }}
          </div>
          <div class="yacht__capitan_experience">
            {{ $t('capitan_experience') }}: {{ experience }}
          </div>
        </div>
      </div>
<!--      <div class="cabin__header__info__buy">
        <nuxt-link class="uk-button uk-button-default button_ticket" to="/yachts/schedule/">
          <span>{{ $t('buttons.buy_ticket') }}</span>
          <svg-icon name="ticket" class="icon"/>
        </nuxt-link>
        <nuxt-link class="uk-button uk-button-secondary button_shedule transition" to="/yachts/schedule/">
          <span>{{ $t('schedule') }}</span>
          <svg-icon name="clock3" class="icon"/>
        </nuxt-link>
      </div>-->
<!--      <div class="cabin__header__info__parameter">
        <p><b>Год выпуска:  </b>{{year}}</p>
        <p>
          <b>Параметры:  </b>{{params}}
        </p>
        <p><b>Круизная скорость:  </b>{{ speed }}</p>
        <p><b>Двигатель:  </b>{{engine}}</p>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "CabinTop",
  props: {
    name: String,
    fileName: String,
    capImg: String,
    capName: String,
    experience: String,
    year: String,
    params: String,
    speed: String,
    engine: String,
  }
}
</script>

<style scoped>

</style>
