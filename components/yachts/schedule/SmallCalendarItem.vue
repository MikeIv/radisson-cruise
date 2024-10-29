<template>
  <button type="button" class="buy-ticket-shedule-day">
    <span class="buy-ticket-shedule-day-number">{{ calendarItem.date }}</span>
    <span class="buy-ticket-shedule-day-words">{{ calendarItem.weekday }}</span>
  </button>
</template>

<script>

import BuyTicketBtn from "../../BuyTicketBtn";
import axios from "axios";
import moment from "moment";
export default {
  name: "SmallCalendarItem",
  components: {BuyTicketBtn},
  props: {
    calendarItem: Object,
  },
  data(){
    return{

    }
  },
  methods: {
  },

  computed: {

  },
}
</script>

<style scoped>
.buy-ticket-shedule-day {
  width: 70px;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  flex-shrink: 0;
  height: auto;
}

.buy-ticket-shedule-day.currentDay {
  background: #00C1F3;
  color: #fff;
}

.buy-ticket-shedule-day-number {
  font-size: 16px;
}
.buy-ticket-shedule-day-words {
  font-size: 9px;
}

</style>
