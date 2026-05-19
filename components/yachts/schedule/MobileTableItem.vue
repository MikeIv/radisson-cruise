<template>
  <div class="buy-ticket-shedule_responsive__item"
       :class="{'disabled' : checkForLateRoutes, 'disabled-sold': isRouteSoldOut }"
       :style="{'--text': currentRouteState}">
    <div class="buy-ticket-schedule__category-wrapper">
      <div v-if="!dayData.riverbus" class="buy-ticket-shedule__category">
        <svg-icon class="category_icon" :name="currentIcon"/>
        <span>{{ dayData.journeySubType }}</span>
        <button @click="getCategory(dayData.journeyTypeId)">
          <svg-icon
              name="svg-info"
              class="icon info-icon"
          />
        </button>
      </div>
      <div class="buy-ticket-shedule_responsive__moorage">
        {{ $t('from_port') }} <strong>«{{ dayData.placeName }}»</strong>
      </div>
      <span v-if="dayData.depatureTime" class="buy-ticket-shedule__time__num uk-hidden@s">
        {{ timeCalcDate(dayData.depatureTime, dayData.arrivalTime) }}
      </span>
    </div>
    <div class="uk-visible@s">
      <div class="buy-ticket-shedule_responsive__time">
        <div class="buy-ticket-shedule__time">
          <span v-if="dayData.depatureTime" class="buy-ticket-shedule__time__num">
            {{ timeCalcDate(dayData.depatureTime, dayData.arrivalTime) }}
          </span>
          <span v-if="dayData.dayTime" class="buy-ticket-shedule__time__txt">
            {{ $t('daytime') }}
          </span>
          <span v-else class="buy-ticket-shedule__time__txt">
            {{ $t('vespertime') }}
          </span>
        </div>
      </div>
      <div class="buy-ticket-shedule_responsive__cost">
        <span>{{ dayData.adultPrice }} &#8381; /
          <span v-if="dayData.availableChild">{{ dayData.childPrice }} &#8381;</span>
          <span v-else>&#8212;</span>
        </span>
        <button type="button" @click="openChildModal">
          <svg-icon name="svg-info" class="icon info-icon"/>
        </button>
      </div>
    </div>
    <div class="buy-ticket-schedule__info">
      <nuxt-link
          class="uk-button uk-button-default button_ticket"
          :class="{'disabled-link': checkForLateRoutes}"
          :to="`/yachts-buy/?journey=${dayData.journey}`"
          :prefetch="false"
          @click.native="sendBuyTicketMetrika"
      >
        <span>{{ isRouteSoldOut ? $t('buttons.sold_out') : $t('buttons.buy_ticket') }}</span>
        <svg-icon class="icon" name="ticket"/>
      </nuxt-link>
      <div class="buy-ticket-shedule_responsive__free">
        <span> {{ $t('free_sits_left') }} - </span>
        <span>{{ dayData.freeSeats }}</span>
      </div>
      <div class="buy-ticket-shedule_responsive__cost uk-hidden@s">
        <div>
          <span>{{ dayData.adultPrice }} &#8381; /
            <span v-if="dayData.availableChild">{{ dayData.childPrice }} &#8381;</span>
            <span v-else>&#8212;</span>
          </span>
          <button type="button" @click="openChildModal">
            <svg-icon name="svg-info" class="icon info-icon"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BuyTicketBtn from "../../BuyTicketBtn";
import axios from "axios";
import moment from "moment";

export default {
  name: "MobileTableItem",
  components: {BuyTicketBtn},
  props: {
    dayData: Object,
    buyTicketMetrikaGoal: {
      type: String,
      default: 'kupit_bilet_23',
    },
  },
  data() {
    return {
      disabledLink: false,
    }
  },
  methods: {
    isDepartureTimeApproaching(departureTime) {
      const now = new Date().toLocaleString('en-US', {timeZone: 'Europe/Moscow'});
      const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds
      const departureTimeObj = new Date(departureTime);
      const timeDifferenceInMs = departureTimeObj - new Date(now);
      return timeDifferenceInMs <= thirtyMinutesInMs;
    },
    timeCalcDate(dptrTime, arvTime) {
      if (dptrTime === null || arvTime === null) return;
      let formattedDeparture = moment(dptrTime).format('HH:mm')
      let formattedArrival = moment(arvTime).format('HH:mm')
      return `${formattedDeparture} - ${formattedArrival}`
    },
    getCategory(journey) {
      this.$emit('get-category', journey)
    },
    openChildModal() {
      this.$emit('open-child-modal')
    },
    sendBuyTicketMetrika() {
      if (this.checkForLateRoutes) {
        return;
      }
      this.$yandexMetrika.reachGoal(this.buyTicketMetrikaGoal);
    },
  },

  computed: {
    currentIcon() {
      switch (this.dayData.journeyTypeId) {
        case 0:
          return 'categories/Osnovnoy';
        case 1:
          return 'categories/Teatr';
        case 2:
          return 'categories/Royal';
        case 3:
          return 'categories/Erwin';
        case 4:
          return 'categories/Royal';
        case 5:
          return 'categories/1class';
        case 6:
          return 'categories/Jazz';
        case 7:
          return 'categories/Degust';
        case 9:
          return 'categories/Tramvay';
        default: {
          return 'categories/Osnovnoy'
        }
      }
    },
    checkForLateRoutes() {
      /*function isDepartureTimeApproaching(departureTime) {
        const now = new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
        const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds
        const departureTimeObj = new Date(departureTime);
        const timeDifferenceInMs  = departureTimeObj - new Date(now);
        return timeDifferenceInMs <= thirtyMinutesInMs;
      }*/

      if(this.dayData.freeSeats === 0) {
        return this.disabledLink = true
      } else {
        return this.disabledLink = false
      }
    },

    currentRouteState() {
      if (this.dayData.freeSeats === 0) {
        return JSON.stringify(this.$i18n.t('schedule_sold'))
      } else {
        return JSON.stringify(this.$i18n.t('schedule_delay'))
      }
    },

    isRouteSoldOut() {
      return this.dayData.freeSeats === 0
    },
  },
}
</script>

<style scoped>
.buy-ticket-shedule_responsive__item.disabled {
  position: relative;
}
.disabled-link {
  opacity: 0.3;
  pointer-events: none;
  cursor: not-allowed;
  background: #707070;
  border-color: #707070;
}
.buy-ticket-shedule_responsive__item.disabled::after {
  content: var(--text, 'Посадка на рейс началась, наличие билетов можно уточнить в кассе');
  position: absolute;
  background: linear-gradient(270deg, rgba(244, 245, 246, 0.40) 4.7%, rgba(244, 245, 246, 0.70) 37.44%, rgba(244, 245, 246, 0.70) 63.43%, rgba(244, 245, 246, 0.40) 93.8%);
  left: 50%;
  transform: translate(-50%);
  white-space: normal;
  top: 0;
  font-weight: 700;
  font-size: 13px;
  height: 100%;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  text-wrap: balance;
  text-align: center;
  text-transform: uppercase;
}
.buy-ticket-shedule_responsive__item > div {
  padding: 20px 15px;
}
.buy-ticket-shedule_responsive__item > div:nth-child(2) {
  border: none;
}

.buy-ticket-shedule_responsive__item .uk-button {
  height: 35px;
}

.buy-ticket-schedule__category-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.buy-ticket-shedule__category {
  margin-top: 0;
}
.buy-ticket-shedule__category button {
  margin-inline-start: 10px;
  flex:none;
  align-self: baseline;
  width: 15px;
  height: 15px;
}
.buy-ticket-shedule__category .category_icon {
  margin-inline-end: 7px;
  flex:none;
  fill: #00C1F3;
}
.buy-ticket-shedule_responsive__item.disabled .buy-ticket-shedule__category .category_icon {
  fill: #A7A7A7;
}
.buy-ticket-shedule__category .info-icon{
  cursor: pointer;
  fill: #A7A7A7;
}
.buy-ticket-shedule__category span {
  width: auto;
  min-width: auto;
}
.buy-ticket-shedule_responsive__cost {
  display: flex;
  align-items: center;
  margin-left: 0;
}
.buy-ticket-shedule_responsive__cost button {
  margin-inline-start: 10px;
  flex:none;
  width: 15px;
  height: 15px;
  align-self: baseline;
}
.buy-ticket-shedule_responsive__cost .info-icon {
  cursor: pointer;
  fill: #A7A7A7;
  width: 100%;
  height: 100%;
}
.buy-ticket-shedule_responsive__cost span:nth-child(1) {
  font-size: 13px;
}
.buy-ticket-shedule__time {
  margin-top: 0;
}
.buy-ticket-shedule_responsive__free {
  font-weight: 400;
  margin-top: 10px;
}
.buy-ticket-shedule_responsive__free span:nth-child(1) {
  padding-left: 0;
  font-weight: 400;
}
@media screen and (max-width: 639px) {
  .buy-ticket-shedule_responsive__item {
    font-size: 11px;
    margin: 10px 0;
  }
  .buy-ticket-shedule_responsive__item > div {
    padding: 10px 7px;
  }
  .buy-ticket-shedule_responsive__item > div:nth-child(3) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    gap: 3px;
    align-items: flex-end;
  }
  .buy-ticket-shedule_responsive__cost {
    margin-top: 0;
  }
  .buy-ticket-shedule_responsive__free {
    margin-top: 0;
  }
  .buy-ticket-shedule_responsive__cost > div {
    padding-left: 0;
    margin-top: 0;
  }
  .buy-ticket-shedule_responsive__item.disabled::after {
    font-size: 10px;
    padding: 0 15%;
  }
  .buy-ticket-shedule_responsive__cost button {
    margin-left: 0;
  }
}
@media screen and (max-width: 375px) {
  .buy-ticket-shedule_responsive__item {
    justify-content: space-between;
  }
  .buy-ticket-schedule__category-wrapper {
    width: 100%;
    max-width: 60%;
  }
  .buy-ticket-schedule__info {
    max-width: 130px;
  }
  .buy-ticket-shedule_responsive__free {
    font-size: 9px;
  }
  .buy-ticket-shedule_responsive__cost span:nth-child(1) {
    font-size: 11px;
  }
}
</style>
