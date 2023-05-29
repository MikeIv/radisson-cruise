<template>
  <div id="modal-tenancy" class="uk-modal-full " uk-modal>
    <div class="uk-modal-dialog">

      <div class="modal_decor"></div>
      <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>

      <img class="modal-tenancy__back" data-src="~assets/img/inners/rent23.png" alt="" src="~assets/img/inners/rent23.png">

      <div class="uk-container modal-full_container uk-position-relative">
        <div class="headline_p1">
          {{ event.name }}
        </div>
        <div class="uk-modal-full__block">
          <div class="uk-modal-full__info">
            <div v-if="event.slides && event.slides.length !== 0" class="uk-position-relative yacht__slider" tabindex="-1" uk-slider >
              <ul class="uk-slider-items uk-flex"  uk-lightbox >
                <li v-for="slide in event.slides">
                  <a href="" class="gallery_card uk-position-relative">
                    <img :src="`${$config.baseSiteURL}${slide}`" :data-src="`${$config.baseSiteURL}${slide}`" alt="" class="img_cover">
                  </a>
                </li>
              </ul>
              <div class="yacht__slider_navigation">
                <div class="slider_numbers">
                  <div class="slider_number">0{{ slide }}</div>
                  <div class="slider_num_bread">/</div>
                  <div class="slider_amount">{{ slides }}</div>
                </div>
                <div class="slider_arrows">
                  <a @click="--slide" class="" href="#" uk-slider-item="previous">
                    <svg-icon name="arr_lang" class="icon"/>
                  </a>
                  <a @click="++slide" class="" href="#" uk-slider-item="next">
                    <svg-icon name="arr_lang" class="icon"/>
                  </a>
                </div>
              </div>
            </div>
            <div class="headline_line"></div>
            <div class="modal-tenancy__info">
              {{ event.body }}
            </div>
          </div >
          <div class="uk-modal-full__block__bottom">
            <a class="uk-button uk-button-default button_calcalutor" href="#modal-calculation" uk-toggle>
              <svg-icon name="calculator" class="icon"/>
              <span>{{ $t('buttons.rent_calc') }}</span>
            </a>
            <img data-src="~assets/img/inners/head-logo2@2x.png" alt="" class="uk-visible@s" src="~assets/img/inners/head-logo2@2x.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalTenancy",
  props: {
    event: Object,
  },
  data() {
    return {
      slide: 1,
    };
  },
  computed: {
    slides() {
      return this.event.slides.length;
    },
  },
  watch: {
    slide() {
      if (this.slide > this.slides) {
        this.slide = 1;
      } else if (this.slide < 1) {
        this.slide = this.slides;
      }
    },
  },
}
</script>

<style scoped>

</style>
