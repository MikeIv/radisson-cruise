<template>
  <div>
    <Header :video="true" videoName="trams3.mp4" :ticketTrolley="true" fileName="inners2/rules1.png" :linkName="$t('pages.tickets.trolley.title')" class="buy-ticket-trams__header"/>
<!--    <form class="buy-ticket">
      <div class="buy-ticket__item">
        <svg-icon class="icon buy-ticket__item_icon1" name="date"/>
        <input class="select-styled litepicker" id="datepicker-one" type="text" placeholder="Выбрать дату">
        <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">

      </div>
      <div class="buy-ticket__item buy-ticket__item_switch-trams">
        <div class="switch-container">
          <div class="switch-name active">На 24 часа</div>
          <label class="switch-round">
            <input type="checkbox">
            <span class="switch-slider"></span>
          </label>
          <div class="switch-name">На 48 часов</div>
        </div>
      </div>
      &lt;!&ndash; <div class="buy-ticket__item">
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
      </div> &ndash;&gt;
      <button class="uk-button uk-button-default button_ticket" type="submit">
        <span>Купить билет</span>
        <svg-icon class="icon"  name="ticket"/>
      </button>
    </form>-->
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "Trolley",
  components: {Header}
}
</script>

<style scoped>
.buy-ticket-trams__header {
  height: 100vh;
}

</style>
