<template>
  <div class="trams__cost">
    <div class="headline_32 t_semibold">
      {{ route.name }}
    </div>
    <div class="trams__cost__main trams__cost__main_1 uk-position-relative">
      <div class="trams__cost__info">
        <svg-icon name='ancor-in-circle' class="icon"/>
        <div class="pierce-wrapper">
          <span v-for="pier in route.points">{{ pier.name }} <span class="helper">-</span></span>
        </div>
      </div>
    </div>
    <div class="trams__cost__main">
      <svg-icon class="trams__cost__svg" name="back-tickets"/>
      <div class="trams__cost__item uk-position-relative">
        <div class="trams__cost__item__p1">
          {{ $t('ticket_cost') }}:
        </div>
        <div class="trams__cost__item__type">
          <b>{{ route.price_adult }}  ₽</b> ({{ $t('adult') }})
        </div>
        <div class="trams__cost__item__type">
          <b>{{ route.price_child }} ₽</b> ({{ $t('children') }})
        </div>
      </div>
    </div>
    <div class="trams__cost__main">
      {{ route.upname }}
    </div>
    <div class="trams__cost__main">
      {{ route.annex }}
    </div>
    <!-- <BuyTicketBtn v-if="online" link="/tickets/trolley"/> -->
  </div>
</template>

<script>
import BuyTicketBtn from "../BuyTicketBtn";
import TicketCostVariant from "./TicketCostVariant";
export default {
  name: "TicketCost",
  components: { TicketCostVariant, BuyTicketBtn },
  props: {
    route: Object,
  },
}
</script>

<style scoped>
.trams__cost:first-child {
  background: rgba(255,255,255,.5);
}
.trams__cost__main_1 {
  min-height: auto;
}
.trams__cost__info .icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  margin-right: 19px;
}

.trams__cost__info .pierce-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.trams__cost__info span {
  white-space: nowrap;
}
.trams__cost__info span:last-child .helper {
  display: none;
}


</style>
