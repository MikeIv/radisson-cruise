<template>
  <tr :class="{'disabled' : checkForLateRoutes, 'disabled-sold': isRouteSoldOut }"
      class="table_item-row"
      :style="{'--text': currentRouteState}">
    <td class="table_item-port">
      «{{ startPoint }}»
    </td>
    <td v-if="!isRiverBus">
      <div class="buy-ticket-shedule__category">
        <svg-icon class="category_icon" :name="currentIcon"/>
        <span>{{ category }}</span>
        <button type="button" @click="getCategory(journey)">
          <svg-icon name="svg-info" class="icon info-icon"/>
        </button>
      </div>
    </td>
    <td>
      <div class="buy-ticket-shedule__time">
         <span class="buy-ticket-shedule__time__num">
            {{ timeCalc }}
         </span>
        <span class="buy-ticket-shedule__time__txt">{{typeOfDay}}</span>
      </div>
    </td>
    <td >
      <div class="buy-ticket_price">
        <b> {{adult}} &#8381; / {{child}} &#8381;
        </b>
        <button type="button" @click="openChildModal">
          <svg-icon name="svg-info" class="icon info-icon"/>
        </button>
      </div>
    </td>
    <td>
      {{ freeSpots }}
    </td>
    <td v-if="freeSpots == '0'">
      <a href=""
         :class="{'disabled-link': checkForLateRoutes}"
         class="uk-button uk-button-default button_ticket"
      >
        {{ $t('buttons.sold_out') }}
      </a>
    </td>
    <td v-else>
      <nuxt-link class="uk-button uk-button-default button_ticket transition"
                 :class="{'disabled-link': checkForLateRoutes}"
                 :to="'/yachts-buy/?journey='+journey"
                 :prefetch="false"
                 @click.native="sendBuyTicketMetrika"
      >
        <span>{{ $t('buttons.buy_ticket') }}</span>
        <svg-icon class="icon" name="ticket"/>
      </nuxt-link>
    </td>
  </tr>
</template>

<script>

import BuyTicketBtn from "../../BuyTicketBtn";
import axios from "axios";
import moment from "moment";
export default {
  name: "DaysTableItemOld",
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
    isRiverBus: Boolean,
    buyTicketMetrikaGoal: {
      type: String,
      default: 'kupit_bilet_23',
    },
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
    sendBuyTicketMetrika() {
      if (this.checkForLateRoutes) {
        return;
      }
      this.$yandexMetrika.reachGoal(this.buyTicketMetrikaGoal);
    },
  },

  computed: {
    currentIcon() {
      switch (this.classId) {
        case 1:
          return 'categories/Osnovnoy';
        case 2:
          return 'categories/Royal';
        case 'Первый класс':
          return 3;
        case 4:
          return 'categories/1class';
        case 5:
          return 'categories/Erwin';
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
      // function isDepartureTimeApproaching(departureTime) {
      //   const now = new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
      //   const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds
      //   const departureTimeObj = new Date(departureTime);
      //   const timeDifferenceInMs  = departureTimeObj - new Date(now);
      //   return timeDifferenceInMs <= thirtyMinutesInMs;
      // }

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
  opacity: 0.3;
  pointer-events: none;
  cursor: not-allowed;
}
.table_item-row.disabled:hover td{
  opacity: 0.1;
}

.table_item-row.disabled:hover {
  position: relative;
}


.table_item-row.disabled::after {
  content: var(--text, 'Посадка на рейс началась, наличие билетов можно уточнить в кассе');
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  white-space: nowrap;
  top: 25%;
  font-weight: 600;
  font-size: 20px;
  display: none;
}
.table_item-row.disabled:hover::after {
  display: inline-block;
  text-align: center;
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
</style>
