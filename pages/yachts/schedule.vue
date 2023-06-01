<template>
  <div>
    <Header class="buy-ticket-shedule__header">
      <img src="~images/inners/shedule1.webp" data-src="~images/inners/shedule1.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading uk-text-center">
          <h1 class="headline_p1">
            {{ seoData?.header }}
          </h1>
        </div>
      </div>
    </Header>

    <section class="buy-ticket-shedule__container">
      <div class="uk-container">
        <form class="buy-ticket uk-visible@s" autocomplete="off">
          <div class="buy-ticket__item">
            <svg-icon class="icon buy-ticket__item_icon1" name="date" />
            <img
              src="~assets/img/main/arr_dow.png"
              alt=""
              class="buy-ticket__item1_arr"
            />
            <input
              class="select-styled litepicker"
              id="datepickerTest"
              type="text"
              value=""
              v-model="lpick"
              placeholder="Выбрать дату"
            />
          </div>
          <div class="buy-ticket__item">
            <svg-icon class="icon buy-ticket__item_icon3" name="ancor" />
            <button
              class="select-styled pass-btn"
              type="button"
              aria-expanded="false"
            >
              Выбрать причал
            </button>

            <div
              uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;"
              class="pass-quantity__drop uk-dropdown"
            >
              <div class="pass-quantity">
                <div class="form_politic buy-ticket__politic">
                  <label v-for="(place, idxarriv) in arrivalPlaces" :key="'dx-'+idxarriv" >
                    <input class="uk-checkbox" name="category__moorage" type="checkbox" :id="'dx-'+idxarriv" :value="place" v-model="checkedArrival">
                    <span>{{place}}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="buy-ticket__item">
            <svg-icon class="icon buy-ticket__item_icon3" name="cat_room" />
            <button
              class="select-styled pass-btn"
              type="button"
              aria-expanded="false"
            >
              Категория билета
            </button>

            <div
              uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;"
              class="pass-quantity__drop uk-dropdown"
            >
              <div class="pass-quantity">
                <div class="form_politic buy-ticket__politic">
                  <label v-for="category in setCategories">
                    <input class="uk-checkbox" name="category__salon" type="checkbox" :value="category" v-model="checkedCategories">
                    <span>{{category}}</span>
                  </label>
<!--                  <label>
                    <input
                      class="uk-checkbox"
                      type="checkbox"
                      name="category__salon"
                    />
                    <span class=""> Основной зал </span>
                  </label>
                  <label>
                    <input
                      class="uk-checkbox"
                      type="checkbox"
                      name="category__salon"
                    />
                    <span class=""> Ройал класс </span>
                  </label>
                  <label>
                    <input
                      class="uk-checkbox"
                      type="checkbox"
                      name="category__salon"
                    />
                    <span class=""> Первый класс </span>
                  </label>
                  <label>
                    <input
                      class="uk-checkbox"
                      type="checkbox"
                      name="category__salon"
                    />
                    <span class=""> Erwin.Река </span>
                  </label>
                  <label>
                    <input
                      class="uk-checkbox"
                      type="checkbox"
                      name="category__salon"
                    />
                    <span class=""> Театральные круизы </span>
                  </label>-->
                </div>
              </div>
            </div>
          </div>
          <div class="buy-ticket__item">
            <svg-icon name="passengers" class="icon buy-ticket__item_icon4" />
            <button
              class="select-styled pass-btn"
              type="button"
              aria-expanded="false"
            >
              Кол-во пассажиров
            </button>

            <div
              uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;"
              class="pass-quantity__drop uk-dropdown"
            >
              <div class="pass-quantity">
                <div class="pass-quantity__item">
                  <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->
                  <div class="input-group plus-minus-input">
                    <div class="input-group-button">
                      <button
                        type="button"
                        class="button"
                        data-quantity="minus"
                        data-field="quantity"
                        @click="interactSits('-')"
                      >
                        -
                      </button>
                    </div>
                    <input
                      class="input-group-field"
                      type="number"
                      name="quantity"
                      v-model.number="chosenSits"
                      min="1"
                    />
                    <div class="input-group-button">
                      <button
                        type="button"
                        class="button"
                        data-quantity="plus"
                        data-field="quantity"
                        @click="interactSits('+')"
                      >
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
            <button @click.prevent="openSelect" class="select-styled timeSelect datetimepicker">
              {{ choiseTime }}
            </button>
            <svg-icon name="clock3" class="icon buy-ticket__item_icon1" />
            <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr"/>
            <div class="testW">
              <select
                onfocus="this.size=10;"
                @focusout="clickOutside"
                onblur="this.size=1;"
                onchange="this.size=1; this.blur();"
                name=""
                id=""
                class="test"
                v-model="choisenTime"
              >
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
              </select>
              <!--              <div class="picker-footer">
                <button type="button" class="picker-cancel" @click="clickOutside">Отмена</button>
                <button type="button" class="picker-confirm" data-picker-action="pick">Принять</button>
              </div>-->
            </div>
          </div>
          <button
            class="uk-button uk-button-default button_ticket"
            type="submit" @click.prevent="filterRoutes"
          >
            <span>{{ $t('buttons.find_route') }}</span>
            <svg-icon name="looking_glass" class="icon" />
          </button>
        </form>
        <button
          class="uk-button btn-news-filter uk-hidden@s"
          
          @click="openFilter"
        >
          <span> {{ $t('buttons.open_filter') }} </span>
          <svg-icon name="svg-flight4" class="icon" />
        </button>

        <div class="buy-ticket-shedule-days uk-hidden@s">
          <button class="buy-ticket-shedule-day"
                  :class="{'buy-ticket-shedule-day__red': isWeekend(new Date(buttonRoutes.date))}"
                  v-for="buttonRoutes in buttonsRoutes"
                  @click="setDate(buttonRoutes.date)"
          >
            <span>{{ new Date(buttonRoutes.date).toLocaleDateString(`ru-RU`, {day: 'numeric'}) }}</span>
            <span>{{ new Date(buttonRoutes.date).toLocaleDateString(`ru-RU`, {weekday: 'short'}) }}</span>
          </button>
        </div>

<!--        <p v-if="$fetchState.pending">
          Loading....
        </p>
        <p v-else-if="$fetchState.error">Error while fetching info</p>-->
        <DaysTable
          v-for="(dayRoute, index) in showRoutes"
          :key="'tbl' + index"
          :aboutDays="dayRoute.routes"
          :day="dayRoute.date"
          @get-category="getCategory"
        />
        <!--        <DaysTable v-for="(dayInfo, index) in daysInfo"
                   :key="'tbl1`' + index"
                   :aboutDays="dayInfo.aboutDays"
                   :day="dayInfo.day"
        />-->

        <div v-for="(dayRoute, index) in showRoutes"
             :key="'tblMob' + index"
             class="uk-overflow-auto buy-ticket-shedule_responsive uk-hidden@l">
          <div class="buy-ticket-shedule_responsive__head">{{ new Date(dayRoute.date).toLocaleDateString(`ru-RU`, {month: 'long', day: 'numeric'}) }}</div>

          <div v-if="dayRoute.routes.length === 0">
            <div class="buy-ticket-shedule_responsive__item uk-flex-center uk-padding">
              К сожалению, на данную дату продажа билетов еще закрыта
            </div>
          </div>
          <div v-else>
            <div v-for="(dayData, i) in dayRoute.routes" :key="'ddata' + i" class="buy-ticket-shedule_responsive__items">
              <div class="buy-ticket-shedule_responsive__item">
                <div>
                  <div class="buy-ticket-shedule_responsive__moorage">
                    <div
                      class="buy-ticket-shedule_responsive__moorage__name1 uk-visible@s"
                    >
                      Причал
                    </div>
                    <div class="buy-ticket-shedule_responsive__moorage__name2">
                      «{{dayData.placeName}}»
                    </div>
                  </div>
                  <div @click="getCategory(dayData.journey)" class="buy-ticket-shedule__category">
                    <span>{{dayData.journeySubType}}</span>
                    <svg-icon
                      name="svg-info3"
                      class="icon"
                    />
                  </div>
                  <span v-if="dayData.depatureTime" class="buy-ticket-shedule__time__num uk-hidden@s">
                    {{ timeCalcDate(dayData.depatureTime, dayData.arrivalTime)  }}
                  </span>
                </div>
                <div class="uk-visible@s">
                  <div class="buy-ticket-shedule_responsive__time">
                    <div class="buy-ticket-shedule_responsive__time__name">
                      Время
                    </div>
                    <div class="buy-ticket-shedule__time">
                    <span v-if="dayData.depatureTime" class="buy-ticket-shedule__time__num">
                      {{ timeCalcDate(dayData.depatureTime, dayData.arrivalTime) }}
                    </span>
                      <span v-if="dayData.dayTime" class="buy-ticket-shedule__time__txt">
                      Дневной
                    </span>
                      <span v-else class="buy-ticket-shedule__time__txt">
                      Вечерний
                    </span>
                    </div>
                  </div>
                  <div class="buy-ticket-shedule_responsive__cost">
                    <div>
                      <span>Взрослый</span>
                      <span>{{ dayData.adultPrice }}</span>
                    </div>
                    <div>
                      <span>Детский</span>
                      <span>{{ dayData.childPrice }}</span>
                    </div>
                  </div>
                </div>
                <div v-if="!checkForLateRoutes(dayData.depatureTime)">
<!--                  v-if="checkForLateRoutes(dayData.depatureTime)"-->
                  <nuxt-link
                    class="uk-button uk-button-default button_ticket"
                    :class="{'disabled-link': checkForLateRoutes(dayData.depatureTime)}"
                    :to="`/yachts-buy/?journey=${dayData.journey}`"
                    @click="ym(22731748,'reachGoal','kupit_bilet_23')"
                  >
                    <span>{{ $t('buttons.buy_ticket') }}</span>
                    <svg-icon class="icon" name="ticket" />
                  </nuxt-link>
                  <div class="buy-ticket-shedule_responsive__free">
                    <span> Свободных мест </span>
                    <span>{{dayData.freeSeats}}</span>
                  </div>
                  <div class="buy-ticket-shedule_responsive__cost uk-hidden@s">
                    <div>
                      <span>{{ $t('adult') }}</span>
                      <span>{{dayData.adultPrice}}</span>
                    </div>
                    <div>
                      <span>{{ $t('children') }}</span>
                      <span>{{dayData.childPrice}}</span>
                    </div>
                  </div>
                </div>
                <div v-else>
                  посадка на рейс началась, вы можете купить билет на кассе
                </div>
              </div>
            </div>
          </div>
        </div>

<!--        <div class="uk-overflow-auto buy-ticket-shedule_responsive uk-hidden@l">
          <div class="buy-ticket-shedule_responsive__head">7 июня</div>
          <div class="buy-ticket-shedule_responsive__items">
            <div
              class="buy-ticket-shedule_responsive__item buy-ticket-shedule_responsive__item_none"
            >
              <div>К сожалению, на данную дату продажа билетов еще закрыта</div>
            </div>
          </div>
        </div>-->
      </div>
    </section>
    <CategoryInfo :info="categoryInfo"/>
    <FilterMobile
        :is-shedule-filter="true"
        :arrival-places="arrivalPlaces"
        :routes-categories="setCategories"
        :checked-arrival="checkedArrival"
        :checked-categories.sync="checkedCategories"
        ref="filterModal"
        @checked-arrival="checkedFilter"
    />
  </div>
</template>

<script>
import Header from '../../components/Header';
import DaysTable from '../../components/yachts/schedule/DaysTable';
import axios from 'axios';
import PortItem from "../../components/trolley/PortItem";
import CategoryCabin from "../../components/categories/CategoryCabin";
import CategoryInfo from "../../components/modals/CategoryInfo";
import Breadcrumbs from "../../components/Breadcrumbs";
import ScheduleFilter from "../../components/modals/ScheduleFilter.vue";
import FilterMobile from "../../components/modals/Filter.vue";
import { timeCalc } from "@/plugins/routesTimeCalc";
import UIkit from "uikit";
import moment from "moment";

export default {
  scrollToTop: true,
  name: 'schedule',
  components: { Breadcrumbs, CategoryInfo, CategoryCabin, PortItem, DaysTable, Header, FilterMobile },
  head() {
    return {
      title: this.seoData?.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.seoData?.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.seoData?.keywords,
        },
      ]
    }
  },
  data() {
    return {
      showRoutes: [],
      checkedArrival: [],
      arrivalPlaces: ['Парк Горького', 'Гостиница Украина'],
      checkedCategories: [],
      routesCategories: ['Основной зал', "Ройал класс", "Первый класс", "Ervin Река"],
      dateStart: new Date().toISOString().split('T')[0],
      chosenSits: 1,
      lpick: null,
      lpick_val: null,
      choisenTime: null,
      post: {},
      testFetch: [],
      arrayToFilter: [],
      totalSpots: 0,
      modalId: 1,
      startDate: '',
      endDate: '',
      modalFilterShow: false,
      buttonsRoutes: [],
      setCategories: null,
      showed: false,
      categoryInfo: null,
      seoData: {},
    };
  },
  methods: {
    checkedFilter(emitFilterPrameters){
/*       console.log("PARENT CHECKED ARRIVAL emitArrival = ", emitFilterPrameters)
      console.log("PARENT CHECKED ARRIVAL = ", this.checkedArrival) */
      this.checkedCategories = emitFilterPrameters.categories;
      this.checkedArrival = emitFilterPrameters.arrival;
      this.chosenSits = emitFilterPrameters.tikets.adult;
      this.startDate = emitFilterPrameters.dates.dateFirst;
      this.endDate = emitFilterPrameters.dates.dateEnd;
      this.setFilterDates(this.startDate,this.endDate);
      //this.filterRoutes();
    },
    async getCategory(id) {
      try {
        const responseData = await axios.get(`${this.$config.baseURL}route?journey=${id}&lang=${this.$i18n.locale}`);
        if(!responseData.data.result) return;
        this.categoryInfo = responseData.data.result.classData;
        UIkit.modal('#buy-ticket-shedule-info').show();
      } catch (e) {

      }
    },

    openFilter() {
      //console.log("REFS = ",this.$refs)
      this.$refs.filterModal.openModal()
    },
    filterRoutes() {
      //console.log("FILTER ROUTES = ", this.checkedArrival, this.checkedCategories)
      this.showRoutes = []
      if (this.checkedCategories.length > 0) {
        if(this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            let filteredRoutes = day.routes.filter(val => this.checkedCategories.includes(val.journeySubType))
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
        } else {
          let arr = []
          this.showRoutes.forEach(day => {
            let filteredRoutes = day.routes.filter(val => this.checkedCategories.includes(val.journeySubType))
            arr.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
          this.showRoutes = arr
        }
      }

      if (this.checkedArrival.length > 0){
        if(this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            let filteredRoutes = day.routes.filter(val => this.checkedArrival.includes(val.placeName))
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
        } else {
          let arr = []
          this.showRoutes.forEach(day => {
            let filteredRoutes = day.routes.filter(val => this.checkedArrival.includes(val.placeName))
            arr.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
          this.showRoutes = arr
        }
      }

      if (this.choisenTime !== null){
        if (this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            let filteredRoutes = day.routes.filter(val => {return this.choisenTime === val.depatureTime.slice(11, 16)})
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
        } else {
          let arr = []
          this.showRoutes.forEach(day => {
            let filteredRoutes = day.routes.filter(val =>  this.choisenTime === val.depatureTime.slice(11, 16))
            arr.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
          this.showRoutes = arr
        }
      }

      if (this.chosenSits !== 1){
        if (this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            let filteredRoutes = day.routes.filter(val =>  val.freeSeats >= this.chosenSits)
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
        } else {
          let arr = []
          this.showRoutes.forEach(day => {
            let filteredRoutes = day.routes.filter(val =>  val.freeSeats >= this.chosenSits)
            arr.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
          this.showRoutes = arr
        }
      }

      if (this.checkedArrival.length === 0
        && this.checkedCategories.length === 0
        && this.choisenTime === null
        && this.chosenSits === 1
      ) {
        //console.log('Empty filter')
        this.showRoutes = Array.from(this.arrayToFilter)
      }
      //console.log("filterRoutes showRoutes = ",this.showRoutes);
    },
    openSelect(e) {
      document.querySelector('.testW').style.display = 'block'
      document.querySelector('.test').focus()
    },
    clickOutside() {
      document.querySelector('.testW').style.display = 'none'
    },
    interactSits(param) {
      if (param == '-') {
        //console.log('minus')
        if (this.chosenSits == 1){
          return this.chosenSits = 1
        } else {
          return this.chosenSits--
        }
      } else {
        //console.log('plus')
        return this.chosenSits++
      }
    },
    interactSitsAdult(param) {
      if (param == '-') {
        //console.log('minus')
        if (this.yachtSitsAdult == 1){
          return this.yachtSitsAdult = 1
        } else {
          return this.yachtSitsAdult--
        }
      } else {
        //console.log('plus')
        return this.yachtSitsAdult++
      }
    },
    interactSitsChild(param) {
      if (param == '-') {
        //console.log('minus')
        if (this.yachtSitsChild == 0){
          return this.yachtSitsChild = 0
        } else {
          return this.yachtSitsChild--
        }
      } else {
        //console.log('plus')
        return this.yachtSitsChild++
      }
    },
    isWeekend(date) {
      return date.toLocaleDateString(`ru-RU`, {weekday: 'long'}) === 'суббота' || date.toLocaleDateString(`ru-RU`, {weekday: 'long'}) === 'воскресенье'
    },

    async setDate(date) {
      let dayRoutes = await axios.get(
          `${this.$config.baseURL}routes?date=${date}&end=${date}&lang=${this.$i18n.locale}`);
      //console.log(dayRoutes.data.routes)
      this.testFetch = dayRoutes.data.routes;
      Object.entries(this.testFetch).forEach(item => {
        this.arrayToFilter.push({
          date: item[0],
          routes: item[1],
        })
      })
      this.showRoutes = this.arrayToFilter
      //console.log("setDate showRoutes = ",this.showRoutes);
    },
    async setFilterDates(date1, date2) {
      this.arrayToFilter = [];
      let dayRoutes
      date2 !== null
          ? dayRoutes = await axios.get(
              `${this.$config.baseURL}routes?date=${date1}&end=${date2}&lang=${this.$i18n.locale}`)
          : dayRoutes = await axios.get(
          `${this.$config.baseURL}routes?date=${date1}&lang=${this.$i18n.locale}`);
      //console.log("AXIOS dayRoutes = ",dayRoutes.data.routes)
      this.testFetch = await dayRoutes.data.routes;
      Object.entries(this.testFetch).forEach(item => {
        this.arrayToFilter.push({
          date: item[0],
          routes: item[1],
        })
      })
      
/*       console.log("setFilterDates showRoutes = ",this.showRoutes);
      console.log("this.checkedCategories = ",this.checkedCategories)
        console.log("this.checkedArrival = ",this.checkedArrival)
        console.log("this.chosenSits = ",this.chosenSits) */
      this.arrayToFilter.forEach(day => {
        
      let filterArrival =  day.routes
      .filter(val => this.checkedArrival.length>0?this.checkedArrival.includes(val.placeName) : true)
      .filter(val => this.checkedCategories.length >0 ? this.checkedCategories.includes(val.journeySubType) : true)
      .filter(val => val.freeSeats >= this.chosenSits)
        //console.log("filterArrival = ",filterArrival)
        day.routes = filterArrival;
        //console.log("DAY Data = ",day.routes)

      })
      this.showRoutes = this.arrayToFilter;
    },
    isDepartureTimeApproaching(departureTime) {
      const now = new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
      const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds
      const departureTimeObj = new Date(departureTime);
      const timeDifferenceInMs  = departureTimeObj - new Date(now);
      return timeDifferenceInMs <= thirtyMinutesInMs;
    },
    checkForLateRoutes(departureTime) {
      return this.isDepartureTimeApproaching(departureTime);
    },
    timeCalcDate(dptrTime, arvTime) {
      /*if(dptrTime === null || arvTime === null) return;
      let depatureTime = new Date(dptrTime);
      let arrivalTime = new Date(arvTime);
      let hourDepature = depatureTime.getHours().toString().length < 2 ? '0' + depatureTime.getHours() : depatureTime.getHours();
      let minDepature = depatureTime.getMinutes().toString().length < 2 ? '0' + depatureTime.getMinutes() : depatureTime.getMinutes();
      let hourArrival = arrivalTime.getHours().toString().length < 2 ? '0' + arrivalTime.getHours() : arrivalTime.getHours();
      let minArrival = arrivalTime.getMinutes().toString().length < 2 ? '0' + arrivalTime.getMinutes() : arrivalTime.getMinutes();
      if(isNaN(hourDepature) || isNaN(minDepature) || isNaN(hourArrival) || isNaN(minArrival)) return;
      return `${hourDepature}:${minDepature} - ${hourArrival}:${minArrival}`*/
      if(dptrTime === null || arvTime === null) return;
      let formattedDeparture = moment(dptrTime).format('HH:mm')
      let formattedArrival = moment(arvTime).format('HH:mm')
      return `${formattedDeparture} - ${formattedArrival}`
    }
  },
  computed:{
    choiseTime() {
      if (this.choisenTime === null) {
        return 'Время посадки'
      } else {
        return this.choisenTime
      }
    },
  },

  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/yachts/schedule/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let today = new Date()
    let now = today.toISOString().split('T')[0]
    let week = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0]
    let dayRoutes = await axios.get(
      `${this.$config.baseURL}routes?date=${now}&end=${week}&lang=${this.$i18n.locale}`);
    //console.log(dayRoutes.data.routes)
    this.testFetch = dayRoutes.data.routes;
    let setCategories = new Set()
    let setPorts = new Set()
    let setArrival = new Set()
    Object.entries(this.testFetch).forEach(item => {
      item[1].forEach(route => {
        setCategories.add(route.journeySubType)
        setPorts.add(route.placeName)
      })
      setArrival.add({
        date: item[0],
        routes: item[1],
      })
    })
    this.setCategories = setCategories
    this.arrivalPlaces = setPorts
    //console.log(setCategories)
    this.arrayToFilter = setArrival;
    this.showRoutes = this.arrayToFilter
    //console.log("fetch() showRoutes = ",this.showRoutes);
  },
  fetchOnServer: true,
  fetchKey: 'yacht-schedule',

  mounted() {
    this.$fetch();
    setInterval(() => {
      this.$fetch(); // Fetch data every 15 minutes
    }, 5 * 60 * 1000);
    const elements = document.querySelectorAll('.litepicker')
    const options = {
      lang: 'ru-RU',
      element: document.querySelector('#datepickerTest'),
      singleMode: false,
      numberOfMonths: 2,
      numberOfColumns: 2,
      minDate: new Date().setDate(new Date().getDate() - 0),
      maxDate: new Date().setDate(new Date().getDate() + 60),
      showTooltip: false
    }
   // console.log("Elements = ",elements);
    this.litePickers = new Litepicker({
        ...options,

        setup: (picker) => {
          picker.on('selected', async (date1, date2) => {

            picker.getDate()
            //console.log(picker.gotoDate())

            function addDays(date, days) {
              let result = new Date(date);
              result.setDate(result.getDate() + days);
              return result;
            }

            let dateFirst = addDays(date1.dateInstance, 1).toISOString().split('T')[0]
            let dateEnd = addDays(date2.dateInstance, 1).toISOString().split('T')[0]
            this.arrayToFilter = []

            let dayRoutes = await axios.get(
                `${this.$config.baseURL}routes?date=${dateFirst}&end=${dateEnd}&lang=${this.$i18n.locale}`);
            //console.log(dayRoutes.data.routes)
            this.testFetch = dayRoutes.data.routes;
            Object.entries(this.testFetch).forEach(item => {
              this.arrayToFilter.push({
                date: item[0],
                routes: item[1],
              })
            })
            this.showRoutes = this.arrayToFilter
            //console.log("picker selected showRoutes = ",this.showRoutes);
          });
        },
      });
  },
  beforeDestroy() {
    //console.log("DESTROY Yachts Shedule =", this.$refs.filterModal);
    this.$refs.filterModal.destroyModal();
    
  },
};
</script>

<style scoped>
.timeSelect:after {
  display: none;
}

.testW {
  display: none;
}
.testW select{
  position: absolute;
  top:70px;
  left:0;
  width: 100%;
  background: #fff;
  height: 150px;
  z-index: 1000;
}

.testW select option{
  text-align: center;
  padding: 10px 0;
}

.testW select option:hover{
  color:#00c1f3;;
  transform: scale(1.5);
}

.picker-footer {
  display: flex;
  position: absolute;
  z-index: 1000;
  width: 100%;
  left:0;
  top: 215px;
}
.picker-cancel, .picker-confirm {
  background-color: #fff;
  border-top:1px solid #858585;
  cursor: pointer;
  display: table-cell;
  padding: 0.75rem 1rem;
  width: 50%;
  font-size: .8rem;
}
.disabled-link {
  opacity: 0.3;
  pointer-events: none;
  cursor: not-allowed;
}
.disabled-link--icon {
  width: 18px;
  height: 18px;
  cursor: help;
  position: absolute;
}

.select-styled[aria-expanded="true"]::after {
  rotate: 180deg;
}

</style>

