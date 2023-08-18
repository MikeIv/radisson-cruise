<template>
  <div id="buy-ticket-shedule-info" class="uk-modal-full buy-ticket-shedule-info uk-modal" uk-modal>
    <div v-if="info" class="uk-modal-dialog">

      <div class="modal_decor"></div>
      <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>

      <img src="~assets/img/inners/buy_shedule_info.png" class="modal-tenancy__back" data-src="~assets/img/inners/buy_shedule_info.png" alt="">

      <svg-icon class="instagram_decor1" name="decor4"/>

      <div class="uk-container modal-full_container uk-position-relative">
        <div class="headline_p2">{{info.name}}</div>
        <div class="uk-modal-full__block">
<!--          <div class="uk-modal-full__block__top">
            <span class=" t_semibold txt18">Рыбный ресторан на борту белоснежной яхты</span>
          </div>-->
          <div class="uk-modal-full__info">
            <div v-if="info" class="uk-position-relative yacht__slider" tabindex="-1" uk-slider >
              <ul class="uk-slider-items uk-flex"  uk-lightbox >
                <li v-for="img in info.slides">
                  <a href="" class="gallery_card uk-position-relative">
                    <img :src="$config.baseSiteURL + img" :data-src="$config.baseSiteURL + img" alt="" class="img_cover">
                  </a>
                </li>
              </ul>
              <div class="yacht__slider_navigation">
                <div class="slider_numbers">
                  <div class="slider_number">01</div>
                  <div class="slider_num_bread">/</div>
                  <div class="slider_amount">{{ info.slides?.length }}</div>
                </div>
                <div class="slider_arrows">
                  <a class="" href="#" uk-slider-item="previous">
                    <svg-icon class="icon" name="arr_lang"/>
                  </a>
                  <a class="" href="#" uk-slider-item="next">
                    <svg-icon class="icon" name="arr_lang"/>
                  </a>
                </div>
              </div>
            </div>
            <div class="headline_line"></div>
            <div class="modal-tenancy__info" v-if="info" v-html="info.content"></div>
          </div >
          <div class="uk-modal-full__block__bottom">
            <a class="uk-modal-close link_close">{{$t('buttons.close_window')}}</a>
            <img v-if="$i18n.locale === 'ru'" class="uk-visible@s" data-src="~assets/img/inners/head-logo2@2x.png" alt="" src="~assets/img/inners/head-logo2@2x.png">
            <svg-icon v-else class="transition uk-visible@s" :name="'logo-en'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UIkit from "uikit";
import axios from "axios";

export default {
  name: "CategoryInfo",
  props: {
    info: {
      type: Object,
    }
  },
  data() {
    return {
      category: {},
    };
  },
  updated() {
    const yachtSlider = document.querySelectorAll('.yacht__slider');
    yachtSlider.forEach(element => {
      //Счетчик слайда яхт
      UIkit.util.on(element, 'itemshown', function(e) {
        // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
        element.querySelector('.slider_number').textContent = (('0' + (e.detail[0].index + 1)).slice(-2));
      });
    });
  },
  async mounted() {
    const yachtSlider = document.querySelectorAll('.yacht__slider');
    yachtSlider.forEach(element => {
      //Счетчик слайда яхт
      UIkit.util.on(element, 'itemshown', function(e) {
        // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
        element.querySelector('.slider_number').textContent = (('0' + (e.detail[0].index + 1)).slice(-2));
      });
    });
  },
}
</script>

<style scoped>

</style>
