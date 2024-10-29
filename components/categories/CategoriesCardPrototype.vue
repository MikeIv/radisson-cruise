<script>
import BuyTicketBtn from "../BuyTicketBtn.vue";

export default {
  name: "CategoriesCardPrototype",
  components: {BuyTicketBtn},
  props: {
    card: Object,
    /*isLoading: {
      type: Boolean,
      default: false,
    }*/
  },
  data() {
    return {
      currentImage: 0,
      lessThanTablet: this.$viewport.isLessThan('tabletWide'),
      isLoading: true,
    }
  },
  watch: {
    '$viewport.breakpoint'() {
      this.lessThanTablet = this.$viewport.isLessThan('tabletWide')
    },
  },
}
</script>

<template>
  <div class="category_card-wrapper">
    <div class="category_card-skeleton" v-if="isLoading">
      <!-- Card image skeleton -->
      <div class="category_card-img-skeleton"></div>

      <!-- Card content skeleton -->
      <div class="category_card-content-skeleton">
        <div class="category_card-title-skeleton"></div>
        <div class="category_card-description-skeleton"></div>
        <div class="category_card-price-skeleton"></div>
      </div>
    </div>
    <article v-else class="category_card" @mouseleave="currentImage = 0">
      <nuxt-link :to="card.linkMore" class="category_card-img--wrapper" @mouseleave="currentImage = 0">
        <img v-for="(image,index) in card.images"
             :src="require(`~/assets/img/categories-card/${image}`)"
             alt=""
             class="category_card-img"
             v-show="currentImage === index"
        >
        <div class="category_card-pagination">
          <div v-for="(image,index) in card.images"
               class="category_card-pagination--item"
               :class="{'active': currentImage === index}"
               @mouseenter="currentImage = index"
          >
          </div>
        </div>
      </nuxt-link>
      <div class="category_card-content" :class="{'disabled': !card.active}">
        <div>
          <nuxt-link :to="card.linkMore" class="category_card-title">
            <svg-icon class="category_card-icon" :name="`categories/${card.icon}`"/>
            {{ card.title }}
          </nuxt-link>
          <p class="category_card-description">{{ card.description }}</p>
        </div>
        <div>
          <div class="category_card-price">
            <svg-icon class="category_card-price--icon" name="categories/Cena.svg"/>
            <div class="category_card-price-inner">
              <div class="category_card-price--item">
                <span class="category_card-price--item_title">{{ $t('adult') }}</span>
                <span class="category_card-price--item_value">{{ card.price.adult }} ₽</span>
              </div>
              <div class="category_card-price--item">
                <span class="category_card-price--item_title">{{ $t('children') }}</span>
                <span class="category_card-price--item_value">{{ card.price.child }} ₽</span>
              </div>
              <div class="category_card-price--subinfo" v-if="card.isTram">Покупка билетов на борту</div>
            </div>
          </div>
          <div class="category_card-buttons">
            <BuyTicketBtn v-if="!card.isTram" :link="card.linkBuy"/>
            <nuxt-link v-else-if="!lessThanTablet && card.isTram"
                       class="uk-button uk-button-default button_ticket transition"
                       :class="{ 'disabled': !card.active }"
                       :to="card.linkBuy">{{ $t('schedule') }}</nuxt-link>
            <nuxt-link :to="`${card.linkMore}${card.id}`"
                       class="uk-button uk-button-more"
                       :class="{'tram': card.isTram}"
            >
              {{ $t('buttons.more') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  to {
    background-position: 200% 0; /* Move the gradient to the right, making it appear as if it's sliding */
  }
}
.category_card-wrapper {
  width: calc(33% - 30px);
}
/* Add styling for the skeleton loader */
.category_card-skeleton {
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* Add other styling as needed */
}

.category_card-img-skeleton {
  width: 100%;
  height: 200px; /* Adjust the height as needed */
  background: #ccc linear-gradient(to right, #ccc 25%, #f8f8f8 50%, #ccc 75%);
  background-size: 200% 100%; /* Double the size horizontally to create the shimmer effect */
  animation: shimmer 1s infinite; /* Set the shimmer animation to run infinitely */
  /* Add other styling as needed */
}

.category_card-content-skeleton {
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  /* Add other styling as needed */
}

.category_card-title-skeleton {
  width: 80%;
  height: 24px;
  background: #ccc linear-gradient(to right, #ccc 25%, #f8f8f8 50%, #ccc 75%);
  background-size: 200% 100%; /* Double the size horizontally to create the shimmer effect */
  animation: shimmer 1s infinite; /* Set the shimmer animation to run infinitely */
  margin-bottom: 10px;
  /* Add other styling as needed */
}

.category_card-description-skeleton {
  width: 100%;
  height: 16px;
  margin-top: 20px;
  background: #ccc linear-gradient(to right, #ccc 25%, #f8f8f8 50%, #ccc 75%);
  background-size: 200% 100%; /* Double the size horizontally to create the shimmer effect */
  animation: shimmer 1s infinite; /* Set the shimmer animation to run infinitely */
  /* Add other styling as needed */
}

.category_card-price-skeleton {
  width: 100%;
  height: 16px;
  margin-top: 20px;
  background: #ccc linear-gradient(to right, #ccc 25%, #f8f8f8 50%, #ccc 75%);
  background-size: 200% 100%; /* Double the size horizontally to create the shimmer effect */
  /* Add other styling as needed */
}
.category_card {
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media screen and (max-width: 1400px) {
  .category_card-wrapper {
    width: calc(50% - 30px);
  }
}
@media screen and (max-width: 767px) {
  .category_card-wrapper {
    width: calc(33% - 12px);
  }
}
@media screen and (max-width: 567px) {
  .category_card-wrapper {
    width: calc(50% - 8px);
  }
}
.category_card-img--wrapper {
  position: relative;
}
.category_card-img {
  width: 100%;
}
.category_card-pagination {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0 40px 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.category_card-pagination--item {
  width: 100%;
  border-bottom: 3px solid #FFF;
}
.category_card-pagination--item.active {
  border-color: #00C1F3;
}
.category_card-content {
  padding: 20px 30px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.category_card-content.disabled::before {
  content: " До встречи в апреле!";
  position: absolute;
  left: 0;
  top: 20%;
  height: 55%;
  width: 100%;
  background: #00C1F3;
  display: flex;
  text-align: center;
  text-wrap: balance;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: clamp(11px, 2vw, 24px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.category_card-icon {
  width: 35px;
  height: 35px;
}
.category_card-title {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  color: #1D2240;
  cursor: pointer;
  margin-bottom: 14px;
  fill: #00C1F3;
}
.category_card-title:hover {
  color: #00C1F3;
  text-decoration: none;
}
.category_card-description {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #232323;
}
.category_card-price {
  display: flex;
  gap: 10px;
  align-items: center;
  color: #232323;
  font-style: normal;
  line-height: normal;
  margin-bottom: 20px;
}
.category_card-price-inner {
  display: flex;
  column-gap: 20px;
  align-items: center;
  flex-wrap:wrap;
}
.category_card-price--subinfo {
  width: 100%;
}
.category_card-price--item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: calc(50% - 10px)
}
.category_card-price--item_title, .category_card-price--subinfo {
  font-size: 14px;
  font-weight: 400;
}
.category_card-price--item_value {
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
}
.category_card-price--icon {
  width: 28px;
  height: 28px;
  flex: none;
}
.category_card-buttons {
  display: flex;
  justify-content: center;
  border-top: 1px solid #A7A7A7;
  padding-top: 20px;
  gap: 30px;
}
.button_ticket.disabled {
  background: #D8D8D8;
  border-color: #D8D8D8;
  opacity: 0.3;
  pointer-events: none;
  cursor: not-allowed;
}
@media screen and (max-width: 976px) {
  .uk-button-more {
    display: none;
  }
  .uk-button-more.tram {
    display: flex;
    height: 50px;
    background: #00c1f3;
    color: #fff
  }
  .category_card-price--item {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 767px) {
  .category_card-pagination {
    display: none;
  }
  .category_card-content {
    padding: 10px;
  }
  .category_card-title {
    font-size: 13px;
    gap: 8px;
  }
  .category_card-icon {
    width: 20px;
    height: 20px;
  }
  .category_card-description {
    display: none;
  }
  .category_card-price {
    gap: 8px;
    margin-bottom: 5px;
  }
  .category_card-price--item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2px;
  }
  .category_card-price--item_title, .category_card-price--subinfo {
    font-size: 8px;
  }
  .category_card-price--item_value {
    font-size: 13px;
  }
  .category_card-buttons {
    padding-top: 8px;
  }

  .category_card-content.disabled::before {
    height: 40%;
  }
}
@media screen and (max-width: 639px) {
  .uk-button-more.tram {
    height: 40px;
  }
}

@media screen and (max-width: 420px) {
  .category_card-title {
    margin-bottom: 8px;
  }
  .uk-button {
    font-size: 9px;
    padding: 0;
  }
  .button_ticket svg {
    margin-left: 5px;
  }

}
@media screen and (max-width: 375px) {
  .category_card-title {
    font-size: 9px;
  }
  .category_card-price--item_value {
    font-size: 9px;
  }
  .category_card-icon, .category_card-price--icon {
    width: 18px;
    height: 18px;
  }
}
</style>