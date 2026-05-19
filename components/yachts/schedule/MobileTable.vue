<template>
  <div class="uk-overflow-auto buy-ticket-shedule_responsive uk-hidden@l">
    <div class="buy-ticket-shedule_responsive__head">
      {{
        new Date(dayRoute.date).toLocaleDateString(`${$i18n.localeProperties.iso}`, {
          month: 'long',
          day: 'numeric',
          weekday:'long',
        })
      }}
    </div>
    <div>
      <MobileTableItem
          v-for="(dayData, i) in dayRoute.routes"
          :key="'ddata' + i"
          :day-data="dayData"
          :is-tram="isTram"
          :buy-ticket-metrika-goal="buyTicketMetrikaGoal"
          @get-category="getCategory"
          @open-child-modal="openChildModal"
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
    isTram: Boolean,
    buyTicketMetrikaGoal: {
      type: String,
      default: 'kupit_bilet_23',
    },
  },
  data(){
    return{

    }
  },
  methods: {
    getCategory(id) {
      this.$emit('get-category', id)
    },
    openChildModal() {
      this.$emit('open-child-modal')
    },
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
.buy-ticket-shedule_responsive__head {
  font-size: 18px;
}
.buy-ticket-shedule_responsive__head:first-letter {
  text-transform: uppercase;
}
.buy-ticket-shedule_responsive__item > div:nth-child(2) {
  border: none;
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
  display: flex;
  flex-direction: column;
  width: 100%;
}
.buy-ticket-shedule__time__num, .buy-ticket-shedule__time a {
  width: 100%;
}
.buy-ticket-shedule__time a {
  color: #00C1F3;
  text-decoration-line: underline;
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
  .buy-ticket-shedule__time__num {
    width: 100%;
  }
}

@media screen and (max-width: 639px) {
  .buy-ticket-shedule_responsive {
    margin: 20px -5px 0;
  }
  .buy-ticket-shedule_responsive__head {
    font-size: 12px;
  }
}

</style>
