<template>
  <div>
    <div class="category-cabin__headline">
      <div class="uk-container">
        <h2 class="headline_52">
          {{title}}
        </h2>
      </div>
    </div>
    <div class="about-capitans__section">
      <div class="uk-position-relative yacht__slider uk-slider uk-slider-container" tabindex="-1" uk-slider="" id="yacht__slider1">
        <ul class="uk-slider-items uk-flex" uk-lightbox="" uk-scrollspy="target: > li > a; cls: uk-animation-slide-bottom-medium; delay: 500">
          <li v-for="image in images" tabindex="-1" class="uk-active">
            <a :href="`${$config.baseSiteURL}${image}`" :data-caption="title" class="gallery_card uk-position-relative uk-scrollspy-inview uk-animation-slide-bottom-medium" style="">
              <img uk-img=""
                   :data-src="`${$config.imageURL}?size=650&format=webp&src=${$config.baseSiteURL}${image}`"
                   class="img_cover"
                   :src="`${$config.imageURL}?size=650&format=webp&src=${$config.baseSiteURL}${image}`">
              <div class="gallery_card__caption">
                <span>{{ title }}</span>
              </div>
            </a>
          </li>
        </ul>
        <div class="yacht__slider_navigation">
          <div class="slider_numbers">
            <div class="slider_number">01</div>
            <div class="slider_num_bread">/</div>
            <div class="slider_amount">{{ images?.length }}</div>
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
    </div>
<!--    <div class="uk-flex uk-child-width-1-2@m uk-flex-wrap category-cabin-grid">
      <div v-for="image in images">
        <CategoryCabin :fileName="image" />
      </div>
    </div>-->
    <div class="uk-position-relative category-cabin-section">
<!--      <div class="buy-ticket-info__item1__icon2 uk-visible@l">
        <svg-icon name="category-rotate"/>
        <svg-icon name="category-days"/>
      </div>-->

      <div class="uk-container uk-position-relative">
        <div class="yacht-information__value">
          <svg-icon name="yacht-decor1" class="icon"/>
          <div class="yacht-information-value__txt">
            <span>Стоимость:</span>
            <span>{{ price }}</span>
          </div>
          <nuxt-link class="uk-button uk-button-secondary button_ticket transition" to="/yachts/schedule/">
            <span>{{ $t('buttons.buy_ticket') }}</span>
            <svg-icon name="ticket" class="icon"/>
          </nuxt-link>
          <nuxt-link class="uk-button uk-button-primary button_menu-cafe transition" to="/menu/">
            <span>{{ $t('buttons.show_menu') }}</span>
            <svg-icon name="menu" class="icon"/>
          </nuxt-link>
        </div>

        <div class="yacht__information_text" v-html="content">
        </div>
<!--        <div class="yacht__information_p1">
          <b>На рейсах Ройал класса:</b>
        </div>
        <div class="yacht__information__list">
          <div>• Авторская кухня</div>
          <div>• Комфортабельные диванные группы</div>
          <div>• Профессиональные свет и звук</div>
          <div>• Живая музыка на вечерних рейсах с четверга по субботу на яхте «Монтана»</div>
        </div>-->
        <div class="yacht__information_capacity">
          <div v-if="boarding" class="yacht__information_capacity-item1">
            <svg-icon name="pass" class="icon"/>
            <span>
                Рейсовая посадка – {{boarding}}
              </span>
          </div>
          <div v-if="banquet" class="yacht__information_capacity-item2">
            <svg-icon name="feast" class="icon"/>
            <span>
              Банкет – {{ banquet }}
            </span>
          </div>
          <div v-if="buffet" class="yacht__information_capacity-item3">
            <svg-icon name="serving" class="icon"/>
            <span>
                Фуршет - {{ buffet }}
            </span>
          </div>
          <div v-if="hallarea" class="yacht__information_capacity-item3">
            <svg-icon name="svg-area" class="icon"/>
            <span>
                Вместимость открытой палубы: {{ hallarea }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCabin from "./categories/CategoryCabin";
import UIkit from "uikit";
export default {
  name: "SalonCategory",
  components: {CategoryCabin},
  props: {
    title: String,
    price: String,
    yachts: Array,
    images: Array,
    content: String,
    boarding: String,
    banquet: String,
    buffet: String,
    hallarea: String,
    html: String,
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
.category-cabin-section {
  padding: 100px 0;
  background: #fff;
  min-height: 500px;
}
</style>
