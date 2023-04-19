<template>
  <div>
    <Header class="buy-ticket-trams__header">
      <img src="~images/inners2/rules1.webp" data-src="~images/inners2/rules1.webp" class="img_cover" alt="">
      <video src="~/assets/video/trams3.mp4" autoplay="" loop="" muted="" playsinline="" class="img_cover"></video>
      <div class="uk-overlay-default uk-position-cover video-overlay"></div>
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ $t('pages.tickets.trolley.title') }}
          </h1>
          <form class="buy-ticket">
            <div class="buy-ticket__item">
              <svg-icon name="date" class="icon buy-ticket__item_icon1"></svg-icon>
              <input class="select-styled litepicker" id="ticket_trolley" type="text"  placeholder="Выбрать дату" >
              <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
            </div>
            <!--          <div class="buy-ticket__item buy-ticket__item_switch-trams">
              <div class="switch-container">
                <div class="switch-name" :class="{'active': !isActive}">На 24 часа</div>
                <label class="switch-round">
                  <input type="checkbox" @click="isActive = !isActive">
                  <span class="switch-slider"></span>
                </label>
                <div class="switch-name" :class="{'active': isActive}">На 48 часов</div>
              </div>
            </div>-->
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
            <BuyTicketBtn link="/trams/schedule/"/>
          </form>
        </div>
      </div>
    </Header>
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
import BuyTicketBtn from "../../components/BuyTicketBtn";
import Breadcrumbs from "../../components/Breadcrumbs";
export default {
  name: "tickets",
  components: {Breadcrumbs, BuyTicketBtn, Header},
  mounted() {
    let lpick = new Litepicker({
      lang: 'ru-RU',
      element: document.getElementById('ticket_trolley'),
      singleMode: false,
      numberOfMonths: 2,
      numberOfColumns: 2,
      tooltipText: {
        one: 'flight',
        other: 'flights'
      },
    });
  }
}
</script>

<style scoped>
.buy-ticket-trams__header {
  height: 100vh;
}
.buy-ticket-trams__header .buy-ticket {
  justify-content: center;
}

</style>
