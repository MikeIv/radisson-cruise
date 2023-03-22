<template>
  <div class="wrapper">
    <Header fileName="inners/buy_yachta1.png" :linkName="$t('pages.tickets.yacht.title')" class="buy-ticket-yacht__header" :ticketYacht="true"/>
<!--    <form class="buy-ticket">

      <div class="buy-ticket__item">
        <svg-icon class="icon buy-ticket__item_icon1" name="date"/>
        <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
        <input class=" select-styled  litepicker" id="datepicker" type="text" value="" placeholder="Выбрать дату">
      </div>
      &lt;!&ndash; <div class="buy-ticket__item">
        <svg class="icon buy-ticket__item_icon2">
          <use xlink:href="#passengers"></use>
        </svg>
        <div class="input input-js ">
          <select class="select-hidden" select_name="Выбрать причал">
            <option value=""></option>
            <option value="Причал «Гостиница украина»">Причал «Гостиница украина»</option>
            <option value="Причал «Парк Горького»">Причал «Парк Горького»</option>
          </select>
        </div>
      </div> &ndash;&gt;
      &lt;!&ndash; <div class="buy-ticket__item">
        <svg class="icon buy-ticket__item_icon3">
          <use xlink:href="#cat_room"></use>
        </svg>
        <div class="input input-js ">
          <select class="select-hidden" select_name="Категория салона">
            <option value=""></option>
            <option value="Яхта">Яхта</option>
            <option value="Ройал-класс">Ройал-класс</option>
            <option value="Супер-яхта">Супер-яхта</option>
            <option value="Erwin.Река">Erwin.Река</option>
            <option value="Трамвайчики">Трамвайчики</option>
          </select>
        </div>
      </div> &ndash;&gt;


      <div class="buy-ticket__item">
        <svg-icon class="icon buy-ticket__item_icon3" name="blue-ancor"/>
        <button class="select-styled pass-btn" type="button" aria-expanded="false">Выбрать причал</button>

        <div uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="pass-quantity__drop uk-dropdown">
          <div class="pass-quantity">
            <div class="form_politic buy-ticket__politic">
              <label>
                <input class="uk-checkbox" type="checkbox" name="category__moorage">
                <span class="">
                      Гостиница «Украина»
                    </span>
              </label>
              <label>
                <input class="uk-checkbox" type="checkbox" name="category__moorage">
                <span class="">
                      Парк Горького
                    </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="buy-ticket__item">
        <svg-icon class="icon buy-ticket__item_icon3" name="cat_room"/>
        <button class="select-styled pass-btn" type="button" aria-expanded="false">Категория салона</button>

        <div uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="pass-quantity__drop uk-dropdown">
          <div class="pass-quantity">
            <div class="form_politic buy-ticket__politic">
              <label>
                <input class="uk-checkbox" type="checkbox" name="category__salon">
                <span class="">
                      Основной зал
                    </span>
              </label>
              <label>
                <input class="uk-checkbox" type="checkbox" name="category__salon">
                <span class="">
                      Ройал класс
                    </span>
              </label>
              <label>
                <input class="uk-checkbox" type="checkbox" name="category__salon">
                <span class="">
                      Первый класс
                    </span>
              </label>
              <label>
                <input class="uk-checkbox" type="checkbox" name="category__salon">
                <span class="">
                      Erwin.Река
                    </span>
              </label>
              <label>
                <input class="uk-checkbox" type="checkbox" name="category__salon">
                <span class="">
                      Театральный круиз
                    </span>
              </label>
              <label>
                <input class="uk-checkbox" type="checkbox" name="category__salon">
                <span class="">
                      Спецрейс
                    </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="buy-ticket__item">
        <svg-icon class="icon buy-ticket__item_icon4" name="passengers"/>
        <button class="select-styled pass-btn" type="button" aria-expanded="false">Кол-во пассажиров</button>

        <div uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="pass-quantity__drop uk-dropdown">
          <div class="pass-quantity">
            <div class="pass-quantity__item">
              <div class="pass-quantity__item_name">
                Взрослый
              </div>
              &lt;!&ndash; Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons&ndash;&gt;
              <div class="input-group plus-minus-input">
                <div class="input-group-button">
                  <button type="button" class="button " data-quantity="minus" data-field="quantity">
                    -
                  </button>
                </div>
                <input class="input-group-field" type="number" name="quantity" value="1">
                <div class="input-group-button">
                  <button type="button" class="button" data-quantity="plus" data-field="quantity">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div class="pass-quantity__item">
              <div class="pass-quantity__item_name">
                Детский
              </div>
              &lt;!&ndash; Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons&ndash;&gt;
              <div class="input-group plus-minus-input">
                <div class="input-group-button">
                  <button type="button" class="button " data-quantity="minus" data-field="quantity2">
                    -
                  </button>
                </div>
                <input class="input-group-field" type="number" name="quantity2" value="0">
                <div class="input-group-button">
                  <button type="button" class="button " data-quantity="plus" data-field="quantity2">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buy-ticket__item buy-ticket__item_5">
        <svg-icon class="icon buy-ticket__item_icon1" name="clock3"/>
        <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
        <input class=" select-styled  datetimepicker" id="datetimepicker-time" type="text" value="" placeholder="Время посадки">
        <div class="datetimepicker-time-container picker-container"><div class="picker picker-fixed" data-picker-action="hide" touch-action="none" tabindex="-1" role="dialog"><div class="picker-dialog" role="document"><div class="picker-header"><h4 class="picker-title">Pick a date and time</h4><button type="button" class="picker-close" data-picker-action="hide" aria-label="Close">×</button></div><div class="picker-body"><div class="picker-grid picker-multiple picker-controls"><div data-type="hour" data-token="HH" class="picker-cell picker-hours"><div class="picker-cell__control picker-cell__control&#45;&#45;prev" data-picker-action="prev"></div><div class="picker-cell__body"><ul class="picker-list"><li data-name="hour" data-value="9" class="picker-item">9:00</li><li data-name="hour" data-value="10" class="picker-item">10:00</li><li data-name="hour" data-value="11" class="picker-item">11:00</li><li data-name="hour" data-value="12" class="picker-item picker-picked">12:00</li><li data-name="hour" data-value="13" class="picker-item">13:00</li><li data-name="hour" data-value="14" class="picker-item">14:00</li><li data-name="hour" data-value="15" class="picker-item">15:00</li></ul></div><div class="picker-cell__control picker-cell__control&#45;&#45;next" data-picker-action="next"></div></div></div></div><div class="picker-footer"><button type="button" class="picker-cancel" data-picker-action="hide">Отмена</button><button type="button" class="picker-confirm" data-picker-action="pick">Принять</button></div></div></div></div>

      </div>

      &lt;!&ndash; <div class="buy-ticket__item">
        <svg class="icon buy-ticket__item_icon1">
          <use xlink:href="#date"></use>
        </svg>
        <img src="/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
        <input class="select-styled litepicker" id="datepicker" type="text"  placeholder="Диапазон дат" >
      </div> &ndash;&gt;
      <button class="uk-button uk-button-default button_ticket" type="submit">
        <span>Купить билет</span>
        <svg-icon class="icon" name="ticket"/>
      </button>
    </form>-->
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "Yacht",
  components: {Header}
}
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 100vh;
}

.buy-ticket-yacht__header {
  height: 100%;
}

</style>
