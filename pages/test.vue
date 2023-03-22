<template>
  <form v-if="ticketTrolley" class="buy-ticket">
    <div class="buy-ticket__item">
      <svg class="icon buy-ticket__item_icon1">
        <use xlink:href="#date"></use>
      </svg>
      <input class="select-styled litepicker" id="datepicker-one" type="text"  placeholder="Выбрать дату" >
      <img src="/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">

    </div>
    <div class="buy-ticket__item buy-ticket__item_switch-trams">
      <div class="switch-container">
        <div class="switch-name">На 24 часа</div>
        <label class="switch-round">
          <input type="checkbox">
          <span class="switch-slider"></span>
        </label>
        <div class="switch-name">На 48 часов</div>
      </div>
    </div>
    <!-- <div class="buy-ticket__item">
      <svg class="icon buy-ticket__item_icon2">
        <use xlink:href="#passengers"></use>
      </svg>
      <div class="input input-js ">
        <select class="select-hidden" select_name="Выбрать причал">
          <option value=""></option>
          <option value="Гостиница украина">Гостиница «Украина»</option>
          <option value="Воробьевы горы">Воробьевы горы</option>
          <option value="Лужники">Лужники</option>
          <option value="Парк Горького">Парк Горького</option>
          <option value="Зарядье">Зарядье</option>
        </select>
      </div>
    </div> -->
    <BuyTicketBtn link="/schedule/trolley"/>
  </form>
</template>

<script>
export default {
  name: "test"
}
</script>

<style scoped>

</style>
