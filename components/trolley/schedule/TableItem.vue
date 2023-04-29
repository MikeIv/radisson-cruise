<template>
  <div class="buy-ticket-shedule_trams__table ">
<!--    <div class="buy-ticket-shedule_trams__table__item">
      <div>
        <div>
          —
        </div>
        <div>
          11:00
        </div>
      </div>
    </div>
    <div class="buy-ticket-shedule_trams__table__item">
      <div>
        <div>
          11 : 05
        </div>
        <div>
          11 : 15
        </div>
      </div>
    </div>
    <div class="buy-ticket-shedule_trams__table__item">
      <div>
        <div>
          11 : 35
        </div>
        <div>
          11 : 40
        </div>
      </div>
    </div>
    <div class="buy-ticket-shedule_trams__table__item">
      <div>
        <div>
          12 : 00
        </div>
        <div>
          12 : 10
        </div>
      </div>
    </div>
    <div class="buy-ticket-shedule_trams__table__item">
      <div>
        <div>
          12 : 25
        </div>
        <div>
          12 : 35
        </div>
      </div>
    </div>
    <div class="buy-ticket-shedule_trams__table__item">
      <div>
        <div>
          12 : 50
        </div>
        <div>
          12 : 55
        </div>
      </div>
    </div>
    <div class="buy-ticket-shedule_trams__table__item-last-1">
      <div>
        <div>
          13 : 45
        </div>
      </div>

    </div>-->
<!--     <div class="name-tram">
      {{ nameTram }}
    </div> -->
    <TableItemTime v-for="(tableTime, index) in tableDay" 
    :key="`tblTm` + index" 
    :start="tableTime.arrival" 
    :end="tableTime.departure"/>
<!--    <div class="buy-ticket-shedule_trams__table__item-last">
      <BuyTicketBtn link="/tickets/trolley-buy"/>
    </div>-->
  </div>
</template>

<script>
import BuyTicketBtn from "../../BuyTicketBtn";
import TableItemTime from "./TableItemTime";
export default {
  name: "TableItem",
  components: {TableItemTime, BuyTicketBtn},
  props: {
    tableDay: Array,
    nameTram: String,
  }
}
</script>

<style scoped>
.name-tram{
  width: 340px;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
}
</style>
