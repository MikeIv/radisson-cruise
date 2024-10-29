<template>
  <div :class="{'disabled' : checkForLateRoutes, 'disabled-sold': isRouteSoldOut }"
      class="table_item-row"
      :style="{'--text': currentRouteState}">
    <div class="table_item-port">
      «{{ startPoint }}»
    </div>
    <div v-if="!isRiverBus">
      <div class="buy-ticket-shedule__category">
        <svg-icon class="category_icon" :name="currentIcon"/>
        <span>{{ category }}</span>
        <button type="button" @click="getCategory(classId)">
          <svg-icon name="svg-info" class="icon info-icon"/>
        </button>
      </div>
    </div>
    <div>
      <div class="buy-ticket-shedule__time">
         <span class="buy-ticket-shedule__time__num">
            {{ timeCalc }}
         </span>
        <span class="buy-ticket-shedule__time__txt">{{typeOfDay}}</span>
      </div>
    </div>
    <div >
      <div class="buy-ticket_price">
        <b> {{adult}} &#8381; / <span v-if="availableChild">{{child}} &#8381;</span><span v-else>&#8212;</span>
        </b>
        <button type="button" @click="openChildModal">
          <svg-icon name="svg-info" class="icon info-icon"/>
        </button>
      </div>
    </div>
    <div>
      {{ freeSpots }}
    </div>
    <div v-if="freeSpots == '0'">
      <a href=""
         :class="{'disabled-link': checkForLateRoutes}"
         class="uk-button uk-button-default button_ticket"
      >
        {{ $t('buttons.sold_out') }}
      </a>
    </div>
    <div v-else>
      <nuxt-link class="uk-button uk-button-default button_ticket transition"
                 :class="{'disabled-link': checkForLateRoutes}"
                 :to="'/yachts-buy/?journey='+journey"
                 :prefetch="false"
                 @click="$yandexMetrika.reachGoal('kupit_bilet_23')"
      >
<!--                 :to="'/yachts-buy/?day='+ this.day + '&journey=' + this.journey"-->
        <span>{{ $t('buttons.buy_ticket') }}</span>
        <svg-icon class="icon" name="ticket"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

import BuyTicketBtn from "../../BuyTicketBtn";
import axios from "axios";
import moment from "moment";
export default {
  name: "DaysTableItem",
  components: {BuyTicketBtn},
  props: {
    day: String,
    dayFormat: String,
    startPoint: String,
    category: String,
    depatureTime: {
      type: String,
      required: true
    },
    arrivalTime: {
      type: String,
      required: true
    },
    adult: Number,
    child: Number,
    freeSpots: Number,
    dayTime: Boolean,
    disabled: Boolean,
    journey: Number,
    classId: Number,
    availableChild: Boolean,
    isRiverBus: Boolean,
  },
  data(){
    return{
      timeInTravel: '',
      disabledLink: false,
      scheduleDelay: JSON.stringify(this.$i18n.t('schedule_delay')),
      scheduleSold: JSON.stringify(this.$i18n.t('schedule_sold')),
      stylesData: {
        '--text-late': JSON.stringify(this.$i18n.t('schedule_delay')),
        '--text-sold': JSON.stringify(this.$i18n.t('schedule_sold')),
      },
      freeSpotsMoch: 0,
    }
  },
  methods: {
    getCategory(journey) {
      this.$emit('get-category', journey)
    },
    openChildModal() {
      this.$emit('open-child-modal')
    },
  },

  computed: {
    currentIcon() {
      switch (this.classId) {
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
    currentId() {
      switch (this.category) {
        case 'Основной зал':
          return 1;
        case 'Ройал класс':
          return 2;
        case 'Первый класс':
          return 3;
        case 'Erwin. Река':
          return 4;
      }
    },
    typeOfDay() {
      return this.dayTime ? this.$i18n.t('daytime') : this.$i18n.t('vespertime')
    },
    timeCalc() {
      /*let depatureTime = new Date(this.depatureTime);
      let arrivalTime = new Date(this.arrivalTime);
      let hourDepature = depatureTime.getHours().toString().length < 2 ? '0' + depatureTime.getHours() : depatureTime.getHours();
      let minDepature = depatureTime.getMinutes().toString().length < 2 ? '0' + depatureTime.getMinutes() : depatureTime.getMinutes();
      let hourArrival = arrivalTime.getHours().toString().length < 2 ? '0' + arrivalTime.getHours() : arrivalTime.getHours();
      let minArrival = arrivalTime.getMinutes().toString().length < 2 ? '0' + arrivalTime.getMinutes() : arrivalTime.getMinutes();
      return `${hourDepature}:${minDepature} - ${hourArrival}:${minArrival}`*/
      let formattedDeparture = moment(this.depatureTime).format('HH:mm')
      let formattedArrival = moment(this.arrivalTime).format('HH:mm')
      return `${formattedDeparture} - ${formattedArrival}`
    },

    routeChange() {
      if(this.$route.path.includes('en')) {
        return 'yachts-buy___en'
      } else {
        return 'yachts-buy___ru'
      }
    },
    // white a function that checks if the route is late for the current day and time,
    // if so, then the link is disabled, if not, then the link is active

    // white function to check one da

    checkForLateRoutes() {
      /*function isDepartureTimeApproaching(departureTime) {
        const now = new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
        const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds
        const departureTimeObj = new Date(departureTime);
        const timeDifferenceInMs  = departureTimeObj - new Date(now);
        return timeDifferenceInMs <= thirtyMinutesInMs;
      }*/

      if(this.freeSpots === 0) {
        return this.disabledLink = true
      } else {
        return this.disabledLink = false
      }
    },

    currentRouteState() {
      if (this.freeSpots === 0) {
        return JSON.stringify(this.$i18n.t('schedule_sold'))
      } else {
        return JSON.stringify(this.$i18n.t('schedule_delay'))
      }
    },

    isRouteSoldOut() {
      return this.freeSpots === 0
    },



    checkForLateRoute() {
      let today = new Date().toLocaleDateString(`ru-RU`, {month: 'long', day: 'numeric'})
      let routeDay = new Date(this.day).toLocaleDateString(`ru-RU`, {month: 'long', day: 'numeric'})
      if (today === routeDay) {
        let hourDepature = new Date(this.depatureTime).getHours().toString().length < 2 ? '0' + new Date(this.depatureTime).getHours() : new Date(this.depatureTime).getHours();
        let hourNow = new Date().getHours().toString().length < 2 ? '0' + new Date().getHours() : new Date().getHours();
        if (hourNow >= hourDepature) {
          return this.disabledLink = true
        }
      } else {
        return this.disabledLink = false
      }
    }
  },
}
</script>

<style scoped>
.disabled-link {
  pointer-events: none;
  cursor: not-allowed;
}
.table_item-row.disabled:hover td{
  //opacity: 0.1;
}

.table_item-row.disabled:hover {
  position: relative;
}

.table_item-row .button_ticket {
  font-size: 10px;
  height: 35px;
  min-width: 166px;
  padding: 0;
}
.table_item-row.disabled .button_ticket {
  background: #d8d8d8;
  border-color: #d8d8d8;
}

/*.uk-table .disabled .button_ticket {
  !*background: #707070;
  border-color: #707070;*!
  position: relative;
  z-index: 100;
}*/


.table_item-row.disabled::after {
  content: var(--text, 'Посадка на рейс началась, наличие билетов можно уточнить в кассе');
  position: absolute;
  background: linear-gradient(270deg, rgba(244, 245, 246, 0.40) 4.7%, rgba(244, 245, 246, 0.70) 37.44%, rgba(244, 245, 246, 0.70) 63.43%, rgba(244, 245, 246, 0.40) 93.8%);
  left: 50%;
  transform: translate(-50%);
  white-space: nowrap;
  top:0;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  z-index: 99;
  display: none;
  justify-content: center;
  align-items: center;
  text-wrap: balance;
  text-align: center;
}
.table_item-row.disabled:hover::after {
  display: flex;
}
.table_item-port {
  font-weight: 700;
}
.buy-ticket-shedule__category button {
  margin-inline-start: 10px;
  flex:none;
  align-self: baseline;
  width: 15px;
  height: 15px;
}
.buy-ticket-shedule__time, .buy-ticket-shedule__category {
  font-weight: 400;
}
.buy-ticket-shedule__category .category_icon {
  margin-inline-end: 7px;
  flex:none;
  fill: #00C1F3;
}
.table_item-row.disabled .buy-ticket-shedule__category .category_icon {
  fill: #A7A7A7;
}
.buy-ticket-shedule__category .info-icon{
  cursor: pointer;
  fill: #A7A7A7;
}
.buy-ticket-shedule__category span {
  width: auto;
  max-width: 240px;
  min-width: auto;
}
.buy-ticket_price {
  display: flex;
  align-items: center;
}
.buy-ticket_price button {
  margin-inline-start: 10px;
  flex:none;
  width: 15px;
  height: 15px;
  align-self: baseline;
}
.buy-ticket_price .info-icon {
  cursor: pointer;
  fill: #A7A7A7;
  width: 100%;
  height: 100%;
}
.uk-table .disabled td {
  opacity: 1;
}
.table_item-row {

}
.table_item-row {
  font-size: 14px;
  font-weight: 600;
  padding-top: 18px;
  padding-bottom: 18px;
  display: grid;
  grid-template-columns: minmax(165px, 20%) 20% 17% 12% 9% max-content;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}
.table_item-row:nth-child(odd) {
  background: #fff;
}
.table_item-row:nth-child(even) {
  background: #F5F5F5;
}
.table_item-row > div:first-child {
  padding-left: 45px;
}
.table_item-row > div:last-child {
  padding-right: 25px;
}
/*.table_item-row > div:nth-child(1) {
  width: 20%;
}
.table_item-row > div:nth-child(2) {
  width: 25%;
}
.table_item-row > div:nth-child(3) {
  width: 15%;
}
.table_item-row > div:nth-child(4) {
  width: 15%;
}
.table_item-row > div:nth-child(5) {
  width: 9%;
}
.table_item-row > div:last-child {
  width: 10%;
}*/
</style>
