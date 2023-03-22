<template>
  <li class="">
    <div class="yacht__wrapper">
      <div class="yacht-information__value">
        <svg-icon name="yacht-decor1" />
        <div class="yacht-information-value__txt">
          <span>Стоимость:</span>
          <span>{{ price }}</span>
        </div>
        <BuyTicketBtn class="uk-button uk-button-secondary button_ticket transition" link='tickets/yacht'/>
        <nuxt-link
          class="uk-button uk-button-primary button_menu-cafe transition"
          to="/menu"
        >
          <span>Посмотреть меню</span>
          <svg-icon name="menu" />
        </nuxt-link>
      </div>

      <div class="yacht__information_text" v-html="text"></div>

<!--      <div v-if="royal" class="yacht__information_p1">
        <b>На рейсах Ройал класса:</b>
      </div>
      <ul v-if="royal" class="yacht__information__list">
        <li v-for="(salonInfoItem, index) in salonInfoItems" :key="'slnInfo' + index">{{salonInfoItem}}</li>
      </ul>-->

      <div class="yacht__information_capacity">
        <div v-if="boarding" class="yacht__information_capacity-item1">
          <svg-icon name="pass" />
          <span> Рейсовая посадка – {{ boarding }}</span>
        </div>
        <div v-if="banquet" class="yacht__information_capacity-item2">
          <svg-icon name="feast" />
          <span> Банкет – {{ banquet }}; </span>
        </div>
        <div v-if="buffet" class="yacht__information_capacity-item3">
          <svg-icon name="serving" />
          <span> Фуршет - {{ buffet }} </span>
        </div>
      </div>
    </div>

    <div class="yacht__information_bottom">
      <div
        class="uk-position-relative yacht__slider uk-slider uk-slider-container"
        tabindex="-1"
        uk-slider=""
        id="yacht__slider1"
      >
        <ul
          class="uk-slider-items uk-flex"
          uk-lightbox=""
          uk-scrollspy="target: > li > a; cls: uk-animation-slide-bottom-medium; delay: 500"
        >
          <li tabindex="-1" class="uk-active" v-for="slide in slides">
<!--            <PhotoCard :fileName="slide.fileName" :text="slide.text"/>-->
            <a :href="$config.baseSiteURL+slide"  class="gallery_card uk-position-relative">
              <!--    style="visibility: hidden for link if needed -->
              <img :data-src="$config.baseSiteURL+slide" class="img_cover" :src="$config.baseSiteURL+slide" data-alt="Image"/>
<!--              <div v-if="text" class="gallery_card__name">{{ text }}</div>-->
            </a>
          </li>
        </ul>
        <div class="yacht__slider_navigation">
          <div class="slider_numbers">
            <div class="slider_number">01</div>
            <div class="slider_num_bread">/</div>
            <div class="slider_amount">{{slides.length}}</div>
          </div>
          <div class="slider_arrows">
            <a class="" href="#" uk-slider-item="previous">
              <svg-icon name="arr_lang" />
            </a>
            <a class="" href="#" uk-slider-item="next">
              <svg-icon name="arr_lang" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import BuyTicketBtn from "./BuyTicketBtn";
import UIkit from "uikit";
import PhotoCard from "./PhotoCard";
export default {
  name: "SalonCategoryIndex",
  components: {PhotoCard, BuyTicketBtn},
  props: {
    price: String,
    text: String,
    boarding: String,
    banquet: String,
    buffet: String,
    slides: Array,
    salonInfoItems: Array,
    royal: Boolean,
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
  }
}
</script>

<style scoped>
.yacht__information_bottom {
  margin-top: 60px;
}

.yacht__wrapper {
  min-height: 250px;
}

</style>
