<template>
  <div class="uk-overflow-auto buy-ticket-shedule__table uk-visible@l">
    <table class="uk-table">
      <thead>
      <tr>
        <th colspan="7">
          {{weekday}}, {{dayFormat}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{$t('port')}}</td>
        <td>{{$t('select_ticket_category')}}</td>
        <td>{{$t('time')}}</td>
        <td>{{$t('adult')}}</td>
        <td>{{$t('children')}}</td>
        <td>{{$t('free_sits')}}</td>
        <td>Купить</td>
      </tr>
      <tr v-if="!aboutDays || aboutDays.length === 0">
        <td colspan="7">
          К сожалению, на данную дату продажа билетов еще закрыта
        </td>
      </tr>
      <DaysTableItem v-else v-for="(dayData, index) in aboutDays"
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
                     :class-id="dayData.classId"
                     @get-category="getCategory"
      />
      </tbody>
    </table>
  </div>
</template>

<script>
import BuyTicketBtn from "../../BuyTicketBtn";
import DaysTableItem from "./DaysTableItem";

export default {
  name: "DaysTable",
  components: {DaysTableItem, BuyTicketBtn},
  props: {
    day: String,
    aboutDays: Array,
  },
  computed: {
    weekday() {
      let day = new Date(this.day)
      return new Intl.DateTimeFormat(`${this.$i18n.localeProperties.iso}`, {weekday: "long"}).format(day)
    },
    dayFormat() {
      return new Date(this.day).toLocaleDateString(`ru-RU`, { month: 'long', day: 'numeric' })
    },
  },
  methods: {
    getCategory(id) {
      this.$emit('get-category', id)
    }
  },
}
</script>

<style scoped>

</style>
