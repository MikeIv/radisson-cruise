<template>
  <div class="uk-overflow-auto buy-ticket-shedule_responsive uk-hidden@l">
    <div class="buy-ticket-shedule_responsive__head">
      {{
        new Date(dayRoute.date).toLocaleDateString(`${$i18n.localeProperties.iso}`, {
          month: 'long',
          day: 'numeric'
        })
      }}
    </div>
    <div v-if="dayRoute.routes.length !== 0">
      <MobileTableItem
          v-for="(dayData, i) in dayRoute.routes"
          :key="'ddata' + i"
          :day-data="dayData"
          @get-category="getCategory"
      />
    </div>
  </div>
</template>

<script>

import BuyTicketBtn from "../../BuyTicketBtn";
import axios from "axios";
import moment from "moment";
import MobileTableItem from "./MobileTableItem.vue";
export default {
  name: "MobileTable",
  components: {MobileTableItem, BuyTicketBtn},
  props: {
    dayRoute: Object,
  },
  data(){
    return{

    }
  },
  methods: {
    getCategory(id) {
      this.$emit('get-category', id)
    }
  },

  computed: {
    weekday() {
      let day = new Date(this.day)
      return new Intl.DateTimeFormat(`${this.$i18n.localeProperties.iso}`, {weekday: "long"}).format(day)
    },
    dayFormat() {
      return new Date(this.day).toLocaleDateString(`${this.$i18n.localeProperties.iso}`, { month: 'long', day: 'numeric' })
    },
  },
}
</script>

<style scoped>


</style>
