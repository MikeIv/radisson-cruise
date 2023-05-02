<template>
  <div class="flight__info">
    <svg-icon v-if="decor" class="instagram_decor1" name="decor4"/>
    <svg-icon v-if="svgName" class="flight__info__icon" :name="svgName"/>
    <div class="uk-position-relative">
      <div class="headline_line"></div>
      <div class="headline_22 t_semibold">
        {{ title }}
      </div>
      <div class="flight__txt" v-html="text"></div>
      <div class="flight-info__btns">
        <BuyTicketBtn v-if="linkBuy" :link="linkBuy"/>
        <a class="uk-button uk-button-more transition" :href="linkMore" v-if="linkMore">
          <span>Подробнее</span>
        </a>
        <nuxt-link class="uk-button uk-button-default button_ticket transition" v-if="linkFree" :to="linkFree">
          <span>{{ button }}</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import BuyTicketBtn from "../BuyTicketBtn";
export default {
  name: "CruiseItemInfo",
  components: {BuyTicketBtn},
  props: {
    title: String,
    text: String,
    svgName: String,
    theatrical: Boolean,
    decor: Boolean,
    infoCard: Boolean,
    linkThematic: String,
    linkBuy: String,
    linkMore: String,
    linkFree: String,
    button: String,
  }
}
</script>

<style scoped>
</style>
