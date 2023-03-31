<template>
  <li>
    <a class="uk-accordion-title" href="">
      <span class="accordion_default__num">0{{ count }}.</span>
      <div class="accordion_default__name">
        {{ name }}
      </div>
    </a>
    <div class="uk-accordion-content" hidden="">
      <div class="accordion_default__txt">
        <p v-if="yachtClass !== ''">
          <strong>{{ yachtClass }}</strong>
        </p>
        <p>
          {{ description }}
        </p>
      </div>
      <div class="yacht__information_capacity">
        <div v-if="squareInfo !== ''" class="yacht__information_capacity-item2">
          <svg-icon name="svg-area" class="icon"/>
          <span>
              Площадь зала: {{ squareInfo }}
          </span>
        </div>

        <div v-if="maxSits !== ''" class="yacht__information_capacity-item1">
          <svg-icon name="pass" class="icon"/>
          <span>
              Рейсовая посадка: {{ maxSits }}
          </span>
        </div>
        <div v-if="maxFeast !== ''" class="yacht__information_capacity-item2">
          <svg-icon name="feast" class="icon"/>
          <span>
               Банкет: {{ maxFeast }}
          </span>
        </div>
        <div v-if="maxServing !== ''" class="yacht__information_capacity-item3">
          <svg-icon name="serving" class="icon"/>
          <span>
               Фуршет: {{ maxServing }}
          </span>
        </div>
      </div>
      <div v-if="slides.length !== 0" class="uk-position-relative yacht__slider uk-slider uk-slider-container" tabindex="-1" uk-slider="">
        <ul class="uk-slider-items uk-flex" uk-lightbox="">
<!--          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/_nuxt/assets/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover" src="~assets/img/main/_MG_1373.png">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1415.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1458-2.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1415.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1458-2.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1415.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1458-2.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover">
            </a>
          </li>
          <li tabindex="-1" class="uk-active">
            <a href="/_nuxt/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
              <img data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover">
            </a>
          </li>-->
          <li v-for="slide in slides" tabindex="-1" class="uk-active">
<!--            <PhotoCard :fileName="slide"/>-->
            <a :href="$config.baseSiteURL + slide"  class="gallery_card uk-position-relative">
              <!--    style="visibility: hidden for link if needed -->
              <img
                  :data-src="`${$config.imageURL}?size=800&format=webp&src=${$config.baseSiteURL}` + slide"
                  class="img_cover"
                  :src="`${$config.imageURL}?size=800&format=webp&src=${$config.baseSiteURL}` + slide" data-alt="Image"/>
            </a>
          </li>
        </ul>
        <div class="yacht__slider_navigation">
          <div class="slider_numbers">
            <div class="slider_number">01</div>
            <div class="slider_num_bread">/</div>
            <div class="slider_amount">{{ slides.length }}</div>
          </div>
          <div class="slider_arrows">
            <a class="" href="#" uk-slider-item="previous">
              <svg-icon name="arr_lang" class="icon"/>
            </a>
            <a class="" href="#" uk-slider-item="next">
              <svg-icon name="arr_lang" class="icon"/>
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="accordion_default__bottom">
        <a class="uk-button uk-button-default button_ticket" href="/_nuxt">
          <span>Купить билет</span>
          <svg class="icon">
            <use xlink:href="/_nuxt#vkontakte"></use>
          </svg>
        </a>
        <img uk-img data-src="/img/inners/head-logo2@2x.png" alt="">
      </div> -->
    </div>
  </li>
</template>

<script>
import PhotoCard from "../../PhotoCard";
import UIkit from "uikit";
export default {
  name: "CabinDropdownItem",
  components: {PhotoCard},
  props: {
    yachtClass: String,
    name: String,
    count: Number,
    description: String,
    maxSits: String,
    maxFeast: String,
    maxServing: String,
    squareInfo: String,
    slides: Array,
    fileName: String,
  },
  mounted() {
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
