<template>
  <tr :class="{'disabled' : checkForLateRoutes}" class="table_item-row">
    <td>
      «{{ startPoint }}»
    </td>
    <td>
      <div class="buy-ticket-shedule__category">
        <span>{{ category }}</span>
        <button type="button" @click="getCategory(journey)">
          <svg-icon name="svg-info3" class="icon"/>
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
    <td>
      <b> {{adult}} &#8381;
      </b>
    </td>
    <td>
      <b> {{child}} &#8381;
      </b>
    </td>
    <td>
      {{ freeSpots }}
    </td>
    <td v-if="freeSpots == '0'">
      <a href="" class="uk-button uk-button-default button_ticket">Билеты раскуплены</a>
    </td>
    <td v-else>
      <nuxt-link class="uk-button uk-button-default button_ticket transition"
                 :class="{'disabled-link': checkForLateRoutes}"
                 :to="'/yachts-buy/?journey='+journey"
                 @click="$metrika.reachGoal('kupit_bilet_23')"
      >
<!--                 :to="'/yachts-buy/?day='+ this.day + '&journey=' + this.journey"-->
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
    classId: Number
  },
  data(){
    return{
      timeInTravel: '',
      disabledLink: false,
    }
  },
  methods: {
    getCategory(journey) {
      this.$emit('get-category', journey)
    },
  },

  computed: {
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
      return this.dayTime ? 'Дневной' : 'Вечерний'
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
      function isDepartureTimeApproaching(departureTime) {
        const now = new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
        const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds
        const departureTimeObj = new Date(departureTime);
        const timeDifferenceInMs  = departureTimeObj - new Date(now);
        return timeDifferenceInMs <= thirtyMinutesInMs;
      }

      if(isDepartureTimeApproaching(this.depatureTime)) {
        return this.disabledLink = true
      } else {
        return this.disabledLink = false
      }
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
  content: 'посадка на рейс началась, вы можете купить билет на кассе';
  position: absolute;
  left: 25%;
  top: 25%;
  font-weight: 600;
  font-size: 20px;
  display: none;
}
.table_item-row.disabled:hover::after {
  display: block;
}

</style>
