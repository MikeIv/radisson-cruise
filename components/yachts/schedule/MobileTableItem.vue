<template>
  <div class="buy-ticket-shedule_responsive__item">
    <div>
      <div class="buy-ticket-shedule_responsive__moorage">
        <div class="buy-ticket-shedule_responsive__moorage__name1">
          {{ $t('port') }}
        </div>
        <div class="buy-ticket-shedule_responsive__moorage__name2">
          «{{ dayData.placeName }}»
        </div>
      </div>
      <div @click="getCategory(dayData.journey)" class="buy-ticket-shedule__category">
        <span>{{ dayData.journeySubType }}</span>
        <svg-icon
            name="svg-info3"
            class="icon"
        />
      </div>
      <span v-if="dayData.depatureTime" class="buy-ticket-shedule__time__num uk-hidden@s">
        {{ timeCalcDate(dayData.depatureTime, dayData.arrivalTime) }}
      </span>
    </div>
    <div class="uk-visible@s">
      <div class="buy-ticket-shedule_responsive__time">
        <div class="buy-ticket-shedule_responsive__time__name">
          {{ $t('time') }}
        </div>
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
        <div>
          <span>{{ $t('adult') }}</span>
          <span>{{ dayData.adultPrice }}</span>
        </div>
        <div>
          <span>{{ $t('children') }}</span>
          <span>{{ dayData.childPrice }}</span>
        </div>
      </div>
    </div>
    <div v-if="!checkForLateRoutes(dayData)">
      <nuxt-link
          class="uk-button uk-button-default button_ticket"
          :class="{'disabled-link': checkForLateRoutes(dayData.depatureTime)}"
          :to="`/yachts-buy/?journey=${dayData.journey}`"
          @click="$yandexMetrika.reachGoal('kupit_bilet_23')"
      >
        <span>{{ $t('buttons.buy_ticket') }}</span>
        <svg-icon class="icon" name="ticket"/>
      </nuxt-link>
      <div class="buy-ticket-shedule_responsive__free">
        <span> {{ $t('free_sits') }} </span>
        <span>{{ dayData.freeSeats }}</span>
      </div>
      <div class="buy-ticket-shedule_responsive__cost uk-hidden@s">
        <div>
          <span>{{ $t('adult') }}</span>
          <span>{{ dayData.adultPrice }}</span>
        </div>
        <div>
          <span>{{ $t('children') }}</span>
          <span>{{ dayData.childPrice }}</span>
        </div>
      </div>
    </div>
    <div v-else>
      {{ dayData.freeSeats === 0 ? $t('schedule_sold') : $t('schedule_delay') }}
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
  },
  data() {
    return {}
  },
  methods: {
    isDepartureTimeApproaching(departureTime) {
      const now = new Date().toLocaleString('en-US', {timeZone: 'Europe/Moscow'});
      const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds
      const departureTimeObj = new Date(departureTime);
      const timeDifferenceInMs = departureTimeObj - new Date(now);
      return timeDifferenceInMs <= thirtyMinutesInMs;
    },
    checkForLateRoutes(route) {
      return this.isDepartureTimeApproaching(route.depatureTime) || route.freeSeats === 0;
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
  },

  computed: {},
}
</script>

<style scoped>


</style>
