<template>
  <div class="trams__cost">
    <div class="headline_32 t_semibold">
      {{ title }}
    </div>
    <div class="trams__cost__main uk-position-relative">
      <svg-icon class="trams__cost__svg" name="back-tickets"/>
      <div class="trams__cost__p1">
        {{ subtitle }}
      </div>
      <div class="trams__cost__items">
        <TicketCostVariant v-for="(variant, index) in variants" :key="'vrt' + index"
                           :time="variant.time" :adultPrice="variant.adultPrice" :childPrice="variant.childPrice"/>
      </div>

    </div>
    <div>Маршрут без остановок</div>
    <div>Билеты продаются на борту</div>
    <!-- <BuyTicketBtn v-if="online" link="/tickets/trolley"/> -->
  </div>
</template>

<script>
import BuyTicketBtn from "../BuyTicketBtn";
import TicketCostVariant from "./TicketCostVariant";
export default {
  name: "TicketCost",
  components: {TicketCostVariant, BuyTicketBtn},
  props: {
    title: String,
    subtitle: String,
    variants: Array,
    online: Boolean,
  },
}
</script>

<style scoped>

</style>
