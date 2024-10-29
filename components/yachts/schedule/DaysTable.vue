<template>
  <div v-if="aboutDays.length !== 0" class="uk-overflow-auto buy-ticket-shedule__table uk-visible@l">
    <span class="schedule_item--date">
      {{weekday}}, {{dayFormat}}
    </span>
    <table v-if="isTram" class="uk-table">
      <thead>
        <tr>
          <th class="routes_table-head-item">{{$t('port')}}</th>
          <th class="routes_table-head-item">{{$t('time')}}</th>
          <th class="routes_table-head-item">{{$t('adult')}} / {{$t('children')}}</th>
          <th class="routes_table-head-item">{{$t('free_sits')}}</th>
          <th class="routes_table-head-item"></th>
        </tr>
      </thead>
      <tbody>
        <DaysTableItemOld v-for="(dayData, index) in aboutDays"
                       :key="'day' + index"
                       :dayFormat="dayFormat"
                       :day="day"
                       :startPoint="dayData.placeName"
                       :category="dayData.journeySubType"
                       :depatureTime="dayData.depatureTime"
                       :arrivalTime="dayData.arrivalTime"
                       :adult="dayData.adultPrice"
                       :child="dayData.childPrice"
                       :freeSpots="dayData.freeSeats"
                       :dayTime="dayData.dayTime"
                       :disabled="dayData.disabled"
                       :journey="dayData.journey"
                       :class-id="dayData.journeyTypeId"
                       :available-child="dayData.availableChild"
                       :is-river-bus="isTram"
                       @get-category="getCategory"
                       @open-child-modal="openChildModal"
        />
      </tbody>
    </table>
    <div v-else class="routes_table">
      <div class="routes_table-head">
        <div class="routes_table-head-item">
          <span>{{$t('port')}}</span>
        </div>
        <div v-if="!isTram" class="routes_table-head-item">
          <span>{{$t('select_ticket_category')}}</span>
        </div>
        <div class="routes_table-head-item">
          <span>{{$t('time')}}</span>
        </div>
        <div class="routes_table-head-item">
          <span>{{$t('adult')}} / {{$t('children')}}</span>
        </div>
        <div class="routes_table-head-item">
          <span>{{$t('free_sits')}}</span>
        </div>
        <div class="routes_table-head-item">
          <span></span>
        </div>
      </div>
      <div class="routes_table-body">
        <DaysTableItem v-for="(dayData, index) in aboutDays"
                       :key="'day' + index"
                       :dayFormat="dayFormat"
                       :day="day"
                       :startPoint="dayData.placeName"
                       :category="dayData.journeySubType"
                       :depatureTime="dayData.depatureTime"
                       :arrivalTime="dayData.arrivalTime"
                       :adult="dayData.adultPrice"
                       :child="dayData.childPrice"
                       :freeSpots="dayData.freeSeats"
                       :dayTime="dayData.dayTime"
                       :disabled="dayData.disabled"
                       :journey="dayData.journey"
                       :class-id="dayData.journeyTypeId"
                       :available-child="dayData.availableChild"
                       :is-river-bus="isTram"
                       @get-category="getCategory"
                       @open-child-modal="openChildModal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BuyTicketBtn from "../../BuyTicketBtn";
import DaysTableItem from "./DaysTableItem";
import UIkit from "uikit";
import DaysTableItemOld from "./DaysTableItemOld.vue";

export default {
  name: "DaysTable",
  components: {DaysTableItemOld, DaysTableItem, BuyTicketBtn},
  props: {
    day: String,
    aboutDays: Array,
    isTram: Boolean
  },
  data() {
    return {
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
  methods: {
    getCategory(id) {
      this.$emit('get-category', id)
    },
    openChildModal() {
      this.$emit('open-child-modal')
    },
  },
}
</script>

<style scoped>

.schedule_item--date {
  color: #232323;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: block;
  margin-bottom: 30px;
}
.schedule_item--date:first-letter {
  text-transform: uppercase;
}
.uk-table {
  table-layout: auto;
  width: 100%;
}
.uk-table th {
  text-transform: none;
  vertical-align: middle;
  font-size: 12px;
  font-weight: 600;
  padding-left: 0;
  padding-right: 0;
  border:none;
}
.uk-table th:first-child {
  padding-left: 45px;
  padding-top: 18px;
  padding-bottom: 18px;
}
.routes_table-body >div:nth-child(odd) {
  background-color: #f5f5f5;
}
.routes_table-body >div:nth-child(even) {
  background-color: #fff;
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
  fill: #0BC3F3;
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
.buy-ticket-shedule__tram-time, .buy-ticket_price-wrapper {
  display: flex;
  flex-direction: column;
}
.buy-ticket-shedule__tram-time a {
  color: #00C1F3;
  text-decoration-line: underline;
}
.table_item-tram .table_item-port{
  font-weight: 700;
}

.routes_table {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}
.routes_table-head {
  background: #3B4790;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: minmax(165px, 20%) 20% 17% 12% 9% 180px;
  gap: 20px;
  padding-right: 25px;
}
.table_item-tram {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: minmax(165px, 20%) 20% 17% 12% 9% max-content;
  gap: 20px;
  padding-top: 18px;
  padding-bottom: 18px;
}
.table_item-tram >div:last-child {
  padding-right: 25px;
}

.table_item-tram .button_ticket {
  font-size: 10px;
  height: 35px;
  min-width: 166px;
  padding: 0;
}

.buy-ticket-shedule__time,
.buy-ticket-shedule__category,
.buy-ticket-shedule__tram-time,
.buy-ticket_price-wrapper span{
  font-weight: 400;
}

.table_item-tram > div {
  text-transform: none;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 600;
  padding-left: 0;
  padding-right: 0;
  border:none;
}
.table_item-tram > div:first-child {
  padding-left: 45px;
  padding-top: 18px;
  padding-bottom: 18px;
}

.routes_table-head-item {
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding-top: 18px;
  padding-bottom: 18px;
  width: 100%;
}

.routes_table-head-item:first-child {
  padding-left: 45px;
}

.routes_table-body {
  width: 100%;
}



.uk-table tbody {
  width: 100%;
}
.uk-table th:nth-child(1) {
  width: 26%;
}
.uk-table th:nth-child(2) {
  width: 25%;
}
.uk-table th:nth-child(3) {
  width: 25%;
}
.uk-table th:nth-child(4) {
  width: 15%;
}

.uk-table td:nth-child(1) {
  width: 26%;
}
.uk-table td:nth-child(2) {
  width: 25%;
}
.uk-table td:nth-child(3) {
  width: 14.1%;
}
@media screen and (max-width: 1650px) {
  .uk-table td:nth-child(5) {
    width: 15%;
  }
}


</style>
