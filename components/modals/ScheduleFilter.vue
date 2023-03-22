<template>
  <div id="modal-buy-ticket-filter" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-container modal-full_container">
        <div class="headline_56 text-upper">
          Фильтр
        </div>
        <div class="modal-news-filter__body">
          <form class="buy-ticket " autocomplete="off">
            <div class="buy-ticket__item">
              <svg-icon name="date" class="icon buy-ticket__item_icon1"/>
              <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
              <input class="select-styled litepicker" id="modal-buy-ticket-filter-datepicker " type="text" value="" placeholder="Выбрать дату">
            </div>
            <div class="buy-ticket__item">
              <svg-icon name="cat_room" class="icon buy-ticket__item_icon3"/>
              <button class="select-styled pass-btn" type="button">Выбрать причал</button>

              <div uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="pass-quantity__drop">
                <div class="pass-quantity">
                  <div class="form_politic buy-ticket__politic">
                    <label v-for="place in arrivalPlaces">
                      <input class="uk-checkbox" name="category__moorage" type="checkbox" :value="place" v-model="localArrival">
                      <span>{{place}}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="buy-ticket__item">
              <svg-icon name="cat_room" class="icon buy-ticket__item_icon3"/>
              <button class="select-styled pass-btn" type="button">Категория салона</button>

              <div uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="pass-quantity__drop">
                <div class="pass-quantity">
                  <div class="form_politic buy-ticket__politic">
                    <label v-for="category in routesCategories">
                      <input class="uk-checkbox" name="category__salon" type="checkbox" :value="category" v-model="checkedCategories">
                      <span>{{category}}</span>
                    </label>
                    <!-- <label>
                      <input class="uk-checkbox" type="checkbox" name="category__salon">
                      <span class="">
                        Mercedes Benz
                      </span>
                    </label>
                    <label>
                      <input class="uk-checkbox" type="checkbox" name="category__salon">
                      <span class="">
                        Театарльный круиз
                      </span>
                    </label>
                    <label>
                      <input class="uk-checkbox" type="checkbox" name="category__salon">
                      <span class="">
                        Спецрейс
                      </span>
                    </label> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="buy-ticket__item">
              <svg-icon name="passengers" class="icon buy-ticket__item_icon4"/>
              <button class="select-styled pass-btn" type="button">Кол-во пассажиров</button>

              <div uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="pass-quantity__drop">
                <div class="pass-quantity">
                  <div class="pass-quantity__item">
                    <div class="pass-quantity__item_name">
                      Взрослый
                    </div>
                    <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->
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
                    <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->
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
              <svg-icon name="clock3" class="icon buy-ticket__item_icon1"/>
              <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
              <input class=" select-styled  datetimepicker" id="datetimepicker-time2" type="text" value="" placeholder="Время посадки">
              <div class="datetimepicker-time2-container picker-container"></div>
            </div>
          </form>

        </div>
        <div class="modal-news-filter__footer">
          <a class="uk-button uk-button-default button_ticket uk-modal-close" href="">
            <span>НАЙТИ РЕЙС</span>
            <svg-icon name="looking_glass" class="icon"/>
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScheduleFilter",
  props: {
    arrivalPlaces: {
      type: Array,
      default: () => [],
    },
    routesCategories: {
      type: Array,
      default: () => [],
    },
    checkedArrival: {
      type: Array,
      default: () => [],
    },
    checkedCategories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localArrival: this.checkedArrival,
    };
  },
  computed: {

  },
  methods: {
    handleCheckboxChange(event) {
      this.$emit('update:checked-arrival', this.localArrival);
    }
  }
}
</script>

<style scoped>

</style>