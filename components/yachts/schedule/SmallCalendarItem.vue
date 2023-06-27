<template>
  <button type="button" class="buy-ticket-shedule-day">
    <span>{{ calendarItem.date }}</span>
    <span>{{ calendarItem.weekday }}</span>
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


</style>
