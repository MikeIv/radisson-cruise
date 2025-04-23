<script>
import BuyTicketBtn from "../BuyTicketBtn.vue";

export default {
  name: "CategoriesCard",
  components: {BuyTicketBtn},
  props: {
    card: Object,
  },
  data() {
    return {
      currentImage: 0,
      lessThanTablet: this.$viewport.isLessThan('tabletWide'),
    }
  },
  watch: {
    '$viewport.breakpoint'() {
      this.lessThanTablet = this.$viewport.isLessThan('tabletWide')
    },
  },
  methods: {
    linkMore(card) {
      return `/categories/${card.slug}/`
    },
    linkBuy(card) {
      return (card.type_id === 14 || card.type_id === 15) ? `/trams/schedule/?category=${card.type_id}` : `/yachts/schedule/?category=${card.type_id}`
    },
    sendYandexMetrikaEvent(type) {
      let eventName = null;
      switch (type) {
        case 0:
          eventName = 'buy-ticket-main-hall';
          break;
        case 2:
          eventName = 'buy-ticket-royal';
          break;
        case 6:
          eventName = 'buy-jazz-ticket';
          break;
        case 7:
          eventName = 'buy_tasting_set';
          break;
        default: eventName = null;
      }
      if (eventName !== null) this.$yandexMetrika.reachGoal(eventName)
      this.$router.push(this.linkBuy(this.card))
    },
  },
  computed: {
    tramText() {
      return JSON.stringify(this.$i18n.t('trams_delay'))
    },
    isSubInfoText() {
      if(this.card?.type_id === null && !this.card?.simple) {
        return this.$i18n.t('kassa_ticket_info')
      } else if (this.card?.type_id === null && this.card?.simple){
        return this.$i18n.t('trams_tickets')
      } else {
        return false
      }
    }
  }
}
</script>

<template>
  <article class="category_card" @mouseleave="currentImage = 0" :style="{'--text': tramText}">
    <nuxt-link v-if="card?.images.length > 0" :to="linkMore(card)" class="category_card-img--wrapper"
               @mouseleave="currentImage = 0">
      <img v-for="(image,index) in card?.images"
           :src="`${$config.imageURL}?size=520&format=webp&src=${$config.baseSiteURL}` + image"
           alt=""
           class="category_card-img"
           v-show="currentImage === index"
      >
      <div class="category_card-pagination">
        <div v-for="(image, index) in card?.images"
             class="category_card-pagination--item"
             :class="{'active': currentImage === index}"
             @mouseenter="currentImage = index"
        >
        </div>
      </div>
    </nuxt-link>
    <nuxt-link v-else :to="linkMore(card)" class="category_card-img--wrapper">
      <div class="skeleton-loader"></div>
    </nuxt-link>
    <div class="category_card-content" :class="{'disabled': card?.simple}">
      <div>
        <nuxt-link :to="linkMore(card)" class="category_card-title">
          <svg-icon class="category_card-icon" :name="`categories/${card?.icon}`"/>
          {{ card?.name }}
        </nuxt-link>
        <div v-html="card?.description" class="category_card-description"></div>
      </div>
      <div>
        <div class="category_card-price">
          <svg-icon class="category_card-price--icon" name="categories/Cena.svg"/>
          <div class="category_card-price-inner">
            <div class="category_card-price--item">
              <span class="category_card-price--item_title">{{ $t('adult') }}</span>
              <span class="category_card-price--item_value">{{ card?.price_adult }} ₽</span>
            </div>
            <div class="category_card-price--item" v-if="card.price_child !== '0' && !!card?.price_child">
              <span class="category_card-price--item_title">{{ $t('children') }}</span>
              <span class="category_card-price--item_value">{{ card?.price_child }} ₽</span>
            </div>
            <div class="category_card-price--subinfo"
                 v-if="isSubInfoText"
                 :class="{'kassa-payment': !card?.simple && card?.type_id === null}"
            >
              {{ isSubInfoText }}
            </div>
          </div>
        </div>
        <div class="category_card-buttons">
          <span v-if="card?.type_id === null && !card?.simple && !lessThanTablet"
                class="category_card-buttons--text"
          >
            {{ $t('kassa_ticket_info') }}
          </span>
          <button v-if="!card?.simple && card?.type_id !== null"
                  @click="sendYandexMetrikaEvent(card?.type_id)"
                  class="uk-button uk-button-default button_ticket transition">
            <span>{{ $t('buttons.buy_ticket') }}</span>
            <svg-icon class="icon" name="ticket"/>
          </button>
          <nuxt-link v-else-if="!lessThanTablet && !!card?.simple"
                     class="uk-button uk-button-default button_ticket transition"
                     :class="{ 'disabled': card?.simple }"
                     :to="'/yachts/schedule/?category='+ card?.type_id">{{ $t('schedule') }}
          </nuxt-link>
          <nuxt-link :to="linkMore(card)"
                     class="uk-button uk-button-more"
                     :class="{'tram': !!card?.simple || card?.type_id === null}"
          >
            {{ $t('buttons.more') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.category_card {
  background: #fff;
  display: flex;
  flex-direction: column;
  width: calc(33% - 30px);
}
/*

.skeleton-loader {
  width: 100%;
  height: 0;
  padding-bottom: 60%; !* Adjust the aspect ratio as needed *!
  background-color: #1d2240; !* Adjust the background color of the skeleton loader *!
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.6;
  }
}
*/

.skeleton-loader {
  width: 100%;
  height: 0;
  padding-bottom: 60%; /* Adjust the aspect ratio as needed */
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media screen and (max-width: 1400px) {
  .category_card {
    width: calc(50% - 30px);
  }
}

@media screen and (max-width: 767px) {
  .category_card {
    width: calc(33% - 12px);
  }
}

@media screen and (max-width: 567px) {
  .category_card {
    width: calc(50% - 8px);
  }
}

.category_card-img--wrapper {
  position: relative;
}

.category_card-img {
  width: 100%;
  aspect-ratio: 52 / 33;
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
  content: var(--text, 'До встречи в апреле!');
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
  font-size: 24px;
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
  flex-wrap: wrap;
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

.category_card-buttons--text {
  color: #00C1F3;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.category_card-price--subinfo.kassa-payment {
  display: none;
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
  .category_card-price--subinfo.kassa-payment {
    display: block;
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