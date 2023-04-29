<template>
  <div class="trams__cost__item block-price-tram">
    <div class="trams__cost__item__p1">
      {{ time }}
    </div>
    <div class="trams__cost__item__type uk-flex ">
      <div class="text-price">
        {{ adultPrice }}
      </div>      
      <div class="title-age">
        (Взрослый)
      </div>
      <div  class="text-price ml-4">
        {{ childPrice }}
      </div>
      <div  class="title-age">
        (Детский)
      </div>

    </div>
<!--     <div class="trams__cost__item__type">
      <div>
        Детский
      </div>
      <div>
        {{ childPrice }}
      </div>
    </div> -->
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
.title-age{
  font-size: 16px;
  font-weight: 400 !important;
}
.text-price{
  font-size: 16px;
  font-weight: 800;
  padding: 0 5px ;
}
.block-price-tram{
  max-width: 100%;
  width: 100%;
}
.ml-4{
  margin-left: 24px;
}
</style>
