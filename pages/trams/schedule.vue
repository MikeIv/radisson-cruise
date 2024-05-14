<template>
  <div>
    <Header class="buy-ticket-shedule__header">
      <img src="~images/inners/shedule2.webp" data-src="~images/inners/shedule2.webp" class="img_cover" alt="">
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
        <form uk-sticky="offset: 115;media: 1200" class="buy-ticket uk-visible@s" autocomplete="off">
          <div class="buy-ticket__item">
            <svg-icon class="icon buy-ticket__item_icon1" name="date"/>
            <img
                src="~assets/img/main/arr_dow.png"
                alt=""
                class="buy-ticket__item1_arr"
            />
            <input
                class="select-styled litepicker"
                id="datepickerTest"
                type="text"
                v-model="dateInputValue"
                value=""
                :placeholder="$t('select_date')"
            />
          </div>
          <div class="buy-ticket__item">
            <svg-icon class="icon buy-ticket__item_icon3" name="ancor"/>
            <button
                class="select-styled pass-btn"
                type="button"
                aria-expanded="false"
            >
              {{ selectedPorts }}
            </button>

            <div
                uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;"
                class="pass-quantity__drop uk-dropdown"
                id="portFilter"
            >
              <div class="pass-quantity">
                <div class="form_politic buy-ticket__politic">
                  <label v-for="(place, idxarriv) in arrivalPlaces" :key="'dx-'+idxarriv">
                    <input @change="sendYandexMetrikaEvent('filtr_prichal_2023')"
                           class="uk-checkbox"
                           name="category__moorage"
                           type="checkbox"
                           :id="'dx-'+idxarriv"
                           :value="place"
                           v-model="checkedArrival">
                    <span>{{ place }}</span>
                  </label>
                </div>
                <button @click="hideFilterItem('portFilter')"
                        type="button"
                        class="uk-button uk-button-default accept_button"
                >
                  {{ $t('buttons.accept') }}
                </button>
              </div>
            </div>
          </div>
          <div class="buy-ticket__item">
            <svg-icon name="clock3" class="icon buy-ticket__item_icon1"/>
            <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
            <button type="button" class="select-styled timeSelect datetimepicker">
              {{ labelTime }}
            </button>
            <div class="testW pass-quantity__drop uk-dropdown"
                 uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;"
                 id="timeFilter"
            >
              <div class="pass-quantity">
                <div class="form_politic buy-ticket__politic">
                  <label v-for="time in rangeTime">
                    <input class="uk-radio"
                           name="category__salon"
                           type="radio"
                           :value="time.value"
                           v-model="selectedTime">
                    <span>{{ $t(time.title) }}</span>
                  </label>
                </div>
                <button @click="hideFilterItem('timeFilter')"
                        type="button"
                        class="uk-button uk-button-default accept_button"
                >
                  {{ $t('buttons.accept') }}
                </button>
              </div>
            </div>
          </div>
          <button
              class="uk-button uk-button-default button_ticket"
              type="submit" @click.prevent="filterRoutes"
          >
            <span>{{ $t('buttons.find_route') }}</span>
            <svg-icon name="looking_glass" class="icon"/>
          </button>
        </form>
        <button
            class="uk-button btn-news-filter uk-hidden@s"
            @click="openFilter"
        >
          <span> {{ $t('buttons.open_filter') }} </span>
          <svg-icon name="svg-flight4" class="icon"/>
        </button>
        <div class="buy-ticket-shedule-days uk-hidden@s">
          <SmallCalendarItem
              v-for="(calendarItem, index) in mobileCalendarItems"
              :key="'cldr' + index"
              :calendar-item="calendarItem"
              :class="{'buy-ticket-shedule-day__red': isWeekend(calendarItem.weekday)}"
              @click.native="setFilterDates(calendarItem.fullDate)"
          />
        </div>
        <DaysTable
            v-for="(dayRoute, index) in showRoutes"
            :key="'tbl' + index"
            :aboutDays="dayRoute.routes"
            :day="dayRoute.date"
            is-tram
        />
        <MobileTable
            v-for="(dayRoute, index) in showRoutes"
            :key="'tblMob' + index"
            :day-route="dayRoute"
            is-tram
        />
      </div>
    </section>
    <FilterMobile
        :is-shedule-filter="true"
        :arrival-places="arrivalPlaces"
        :range-time="rangeTime"
        :selected-time="selectedTime"
        :checked-arrival="checkedArrival"
        is-tram
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
import {timeCalc} from "@/plugins/routesTimeCalc";
import UIkit from "uikit";
import moment from "moment";
import SmallCalendarItem from "../../components/yachts/schedule/SmallCalendarItem.vue";
import MobileTable from "../../components/yachts/schedule/MobileTable.vue";

export default {
  name: "schedule",
  components: {
    MobileTable,
    SmallCalendarItem, Breadcrumbs, CategoryInfo, CategoryCabin, PortItem, DaysTable, Header, FilterMobile
  },
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
      seoData: {},
      showRoutes: [],
      checkedArrival: [],
      arrivalPlaces: ['Парк Горького'],
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
      today: new Date().toISOString().split('T')[0],
      inWeek: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0],
      isLoading: true,
      showSelect: false,
      selectedTime: null,
      rangeTime: [
        {
          title: 'timeOptions.anytime',
          value: null
        },
        {
          title: 'timeOptions.morning',
          value: [`10.00`, `11.00`, `12.00`]
        },
        {
          title: 'timeOptions.daytime',
          value: [`12.00`, `13.00`, `14.00`, `15.00`, `16.00`, `17.00`, `18.00`]
        },
        {
          title: 'timeOptions.evening',
          value: [`18.00`, `19.00`, `20.00`, `21.00`, `22.00`, `23.00`]
        },
      ],
      interval: null,
      dateInputValue: null,
    }
  },
  computed: {
    labelTime() {
      if (this.selectedTime === null) {
        return this.$i18n.t('select_time')
      } else {
        return this.rangeTime.find(item => item.value === this.selectedTime).title
      }
    },
    mobileCalendarItems() {
      let arr = [];
      for (let i = 0; i < 7; i++) {
        let date = new Date();
        let dateItem = {}
        date.setDate(date.getDate() + i);
        dateItem.date = new Date(date).toLocaleDateString(`${this.$i18n.localeProperties.iso}`, {
          timeZone: 'Europe/Moscow',
          day: 'numeric'}
        )
        dateItem.weekday = new Date(date).toLocaleDateString(`${this.$i18n.localeProperties.iso}`, {
          timeZone: 'Europe/Moscow',
          weekday: 'short'
        })
        dateItem.fullDate = date.toISOString().split('T')[0];
        arr.push(dateItem)
      }
      return arr
    },
    selectedPorts() {
      if (this.checkedArrival.length === 0) {
        return this.$i18n.t('select_port')
      } else if (this.checkedArrival.length === 1) {
        return `${this.$i18n.t('selected')}: ${this.checkedArrival[0]}`
      } else {
        return `${this.$i18n.t('selected')}: ${this.checkedArrival.length}`
      }
    },
  },
  methods: {
    checkedFilter(emitFilterPrameters) {
      this.checkedArrival = emitFilterPrameters.arrival;
      this.startDate = emitFilterPrameters.dates.dateFirst;
      this.endDate = emitFilterPrameters.dates.dateEnd;
      this.selectedTime = emitFilterPrameters.time;
      this.setFilterDates(this.startDate, this.endDate);
    },
    openFilter() {
      this.$refs.filterModal.openModal()
    },
    filterRoutes() {
      //console.log("FILTER ROUTES = ", this.checkedArrival, this.checkedCategories)
      this.showRoutes = []
      if (this.checkedCategories.length > 0) {
        if (this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            let filteredRoutes = day.routes.filter(val => this.checkedCategories.includes(val.journeyType))
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
        } else {
          let arr = []
          this.showRoutes.forEach(day => {
            let filteredRoutes = day.routes.filter(val => this.checkedCategories.includes(val.journeyType))
            arr.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
          this.showRoutes = arr
        }
      }

      if (this.checkedArrival.length > 0) {
        if (this.showRoutes.length === 0) {
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

      if (this.selectedTime !== null) {
        if (this.showRoutes.length === 0) {
          const testArr = []
          this.arrayToFilter.forEach(day => {
            let filteredRoutes = day.routes.filter(val => {
              const departureTime = val.depatureTime.slice(11, 16);
              const timeRange = this.selectedTime;
              const departureHour = parseInt(departureTime.split(':')[0], 10);
              const rangeStartHour = parseInt(timeRange[0].split('.')[0], 10);
              const rangeEndHour = parseInt(timeRange[timeRange.length - 1].split('.')[0], 10);
              return departureHour >= rangeStartHour && departureHour <= rangeEndHour;
            });
            testArr.push({
              date: day.date,
              routes: filteredRoutes
            })
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
        } else {
          let arr = []
          this.showRoutes.forEach(day => {
            let filteredRoutes = day.routes.filter(val => {
              const departureTime = val.depatureTime.slice(11, 16);
              const timeRange = this.selectedTime;
              const departureHour = parseInt(departureTime.split(':')[0], 10);
              const rangeStartHour = parseInt(timeRange[0].split('.')[0], 10);
              const rangeEndHour = parseInt(timeRange[timeRange.length - 1].split('.')[0], 10);
              return departureHour >= rangeStartHour && departureHour <= rangeEndHour;
            });
            arr.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
          this.showRoutes = arr
        }
      }

      if (this.chosenSits !== 1) {
        if (this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            let filteredRoutes = day.routes.filter(val => val.freeSeats >= this.chosenSits)
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
        } else {
          let arr = []
          this.showRoutes.forEach(day => {
            let filteredRoutes = day.routes.filter(val => val.freeSeats >= this.chosenSits)
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
          && this.selectedTime === null
          && this.chosenSits === 1
      ) {
        //console.log('Empty filter')
        this.showRoutes = Array.from(this.arrayToFilter)
      }
      //console.log("filterRoutes showRoutes = ",this.showRoutes);
    },
    isWeekend(date) {
      return date === 'сб' || date === 'вс' || date === 'Sat' || date === 'Sun'
    },
    async setDate(date) {
      let dayRoutes = await axios.get(
          `${this.$config.baseURL}routes?date=${date}&end=${date}&type_id[]=9&lang=${this.$i18n.locale}`);
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
      date2 !== undefined && date2 !== null
          ? dayRoutes = await axios.get(
              `${this.$config.baseURL}routes?date=${date1}&end=${date2}&type_id[]=9&lang=${this.$i18n.locale}`)
          : dayRoutes = await axios.get(
              `${this.$config.baseURL}routes?date=${date1}&type_id[]=9&lang=${this.$i18n.locale}`);
      //console.log("AXIOS dayRoutes = ",dayRoutes.data.routes)
      this.testFetch = await dayRoutes.data.routes;
      Object.entries(this.testFetch).forEach(item => {
        this.arrayToFilter.push({
          date: item[0],
          routes: item[1],
        })
      })
      this.arrayToFilter.forEach(day => {

        let filterArrival = day.routes
            .filter(val => this.checkedArrival.length > 0 ? this.checkedArrival.includes(val.placeName) : true)
            .filter(val => this.checkedCategories.length > 0 ? this.checkedCategories.includes(val.journeyType) : true)
            .filter(val => {
              if (this.selectedTime === null ) return true;
              const departureTime = val.depatureTime.slice(11, 16);
              const timeRange = this.selectedTime;
              const departureHour = parseInt(departureTime.split(':')[0], 10);
              const rangeStartHour = parseInt(timeRange[0].split('.')[0], 10);
              const rangeEndHour = parseInt(timeRange[timeRange.length - 1].split('.')[0], 10);
              return departureHour >= rangeStartHour && departureHour <= rangeEndHour;
            })
        //console.log("filterArrival = ",filterArrival)
        day.routes = filterArrival;
        //console.log("DAY Data = ",day.routes)

      })
      this.showRoutes = this.arrayToFilter;
    },
    isDepartureTimeApproaching(departureTime) {
      const now = new Date().toLocaleString('en-US', {timeZone: 'Europe/Moscow'});
      const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds
      const departureTimeObj = new Date(departureTime);
      const timeDifferenceInMs = departureTimeObj - new Date(now);
      return timeDifferenceInMs <= thirtyMinutesInMs;
    },
    checkForLateRoutes(route) {
      return this.isDepartureTimeApproaching(route.depatureTime) || route.freeSeats === 0;
    },
    timeCalcDate(dptrTime, arvTime) {
      if (dptrTime === null || arvTime === null) return;
      let formattedDeparture = moment(dptrTime).format('HH:mm')
      let formattedArrival = moment(arvTime).format('HH:mm')
      return `${formattedDeparture} - ${formattedArrival}`
    },
    hideFilterItem(id) {
      UIkit.dropdown(`#${id}`).hide(false);
    },
    sendYandexMetrikaEvent(eventName) {
      this.$yandexMetrika.reachGoal(eventName);
    },
  },
  mounted() {
    /*this.checkedCategories = this.$route.query.class.split(',')*/
    this.setFilterDates(this.startDate, this.endDate)
    this.interval = setInterval(() => {
      this.setFilterDates(this.startDate, this.endDate); // Fetch data every 15 minutes
    }, 15 * 60 * 1000);
    const elements = document.querySelectorAll('.litepicker')
    const options = {
      lang: this.$i18n.localeProperties.iso,
      element: document.querySelector('#datepickerTest'),
      singleMode: false,
      numberOfMonths: 1,
      numberOfColumns: 1,
      minDate: new Date().setDate(new Date().getDate() - 0),
      maxDate: new Date().setDate(new Date().getDate() + 6),
      showTooltip: false,
    }
    // console.log("Elements = ",elements);
    this.litePickers = new Litepicker({
      ...options,

      setup: (picker) => {
        picker.on('selected', async (date1, date2) => {
          this.sendYandexMetrikaEvent('filtr_data_2023')
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
          if( date1.getTime() === date2.getTime() ) {
            this.dateInputValue = `${dateFirst}`
          } else {
            this.dateInputValue = `${dateFirst} - ${dateEnd}`
          }

          this.startDate = dateFirst
          this.endDate = dateEnd

          let dayRoutes = await axios.get(
              `${this.$config.baseURL}routes?date=${dateFirst}&end=${dateEnd}&type_id[]=9&lang=${this.$i18n.locale}`);
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
    clearInterval(this.interval)
  },
  async fetch() {
    let today = new Date()
    let now = today.toISOString().split('T')[0]
    this.startDate = now
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/trams/schedule/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let dayRoutes = await axios.get(
        `${this.$config.baseURL}routes?date=${now}&type_id[]=9&lang=${this.$i18n.locale}`);
    this.testFetch = dayRoutes.data.routes;
    let setCategories = new Set()
    let setPorts = new Set()
    let setArrival = []
    let setCheckedCategories = new Set()
    let formattedFetch = Object.entries(this.testFetch)
    formattedFetch.forEach(item => {
      item[1].forEach(route => {
        setCategories.add(route.journeyType)
        setPorts.add(route.placeName)
      })
    })
    setArrival = formattedFetch.map(item => {
      return {
        date: item[0],
        routes: item[1]
      }
    })
    this.setCategories = setCategories
    this.arrivalPlaces = setPorts
    this.arrayToFilter = setArrival;
    this.checkedCategories = Array.from(setCheckedCategories)
    this.showRoutes = this.arrayToFilter
    this.isLoading = false;

  },
  fetchOnServer: true,
  fetchKey: 'trams-schedule',
}
</script>

<style scoped>
.buy-ticket {
  background: #fff;
  position: relative;
  z-index: 120;
}
.buy-ticket__item {
  max-width: 330px;
}
.button_ticket {
  margin-left: auto;
}
.uk-table td:nth-child(1) {
  width: 26%;
}
.uk-table td:nth-child(2) {
  width: 22.7%;
}
.uk-table td:nth-child(3) {
  width: 10.1%;
}
.buy-ticket__item1_arr {
  display: none;
}
</style>

