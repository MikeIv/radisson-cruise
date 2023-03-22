<template>
  <div class="trams__cost__item">
    <div class="trams__cost__item__p1">
      {{ time }}
    </div>
    <div class="trams__cost__item__type">
      <div>
        Взрослый
      </div>
      <div>
        {{ adultPrice }}
      </div>
    </div>
    <div class="trams__cost__item__type">
      <div>
        Детский
      </div>
      <div>
        {{ childPrice }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketCostVariant",
  props: {
    time: String,
    adultPrice: String,
    childPrice: String,
  }
}
</script>

<style scoped>

</style>
