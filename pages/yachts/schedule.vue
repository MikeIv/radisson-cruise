<template>
  <div>
    <Header class="buy-ticket-shedule__header">
      <div class="uk-container uk-position-relative schedule_header-title">
        <div class="">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ seoData?.header }}
          </h1>
          <button @click="openFilter" class="filter_button">
            <svg-icon name="schedule/filter"/>
          </button>
        </div>
      </div>
    </Header>

    <section class="buy-ticket-shedule__container">
      <div class="uk-container">
        <form uk-sticky="offset: 100;media: 1200" class="buy-ticket uk-visible@s" autocomplete="off">
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
                    <span>{{ place.name }}</span>
                  </label>
                </div>
                <button @click="routesFilter(); hideFilterItem('portFilter');"
                        type="button"
                        class="uk-button uk-button-default accept_button"
                >
                  {{ $t('buttons.accept') }}
                </button>
              </div>
            </div>
          </div>
          <div class="buy-ticket__item">
            <svg-icon class="icon buy-ticket__item_icon3" name="cat_room"/>
            <button
                class="select-styled pass-btn"
                type="button"
                aria-expanded="false"
            >
              {{ selectCategory }}
            </button>

            <div
                uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;"
                class="pass-quantity__drop uk-dropdown"
                id="categoryFilter"
            >
              <div class="pass-quantity">
                <div class="form_politic buy-ticket__politic">
                  <label v-for="category in setCategories">
                    <input class="uk-checkbox"
                           @change="sendYandexMetrikaEvent('filtr_category_2023')"
                           name="category__salon"
                           type="checkbox"
                           :value="category"
                           v-model="checkedCategories">
                    <span>{{ category.name }}</span>
                  </label>
                </div>
                <button @click="routesFilter(); hideFilterItem('categoryFilter');"
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
                <button @click="routesFilter();hideFilterItem('timeFilter');"
                        type="button"
                        class="uk-button uk-button-default accept_button"
                >
                  {{ $t('buttons.accept') }}
                </button>
              </div>
            </div>
          </div>
          <label class="buy-ticket__item buy-ticket__item-available">
            <input @change="routesFilter"
                   v-model="isAvailableTicketsShown"
                   class="uk-checkbox"
                   type="checkbox"
            >
            <span>{{ $t('select_available') }}</span>
          </label>
        </form>
        <!--        <button
                    class="uk-button btn-news-filter uk-hidden@s"
                    @click="openFilter"
                >
                  <span> {{ $t('buttons.open_filter') }} </span>
                  <svg-icon name="svg-flight4" class="icon"/>
                </button>-->
        <!--        :class="{'buy-ticket-shedule-day__red': isWeekend(calendarItem.weekday), 'currentDay': isCurrentDaySelected()}"-->
<!--        <div class="buy-ticket-shedule-days uk-hidden@s">
          <SmallCalendarItem
              v-for="(calendarItem, index) in mobileCalendarItems"
              :key="'cldr' + index"
              :calendar-item="calendarItem"
              :class="{'currentDay': isCurrentDaySelected(calendarItem.fullDate)}"
              @click.native="selectDate(calendarItem.fullDate)"
          />
        </div>-->

        <svg class="schedule_loader" v-if="isLoading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
              d="m 12.703823,16.853203 0.0041,-0.0064 c 0.758665,-0.12064 1.475633,-0.423533 2.087893,-0.88203 0.612228,-0.458497 1.100926,-1.05855 1.423088,-1.747335 l -1.391376,-0.368725 2.367783,-1.34963 1.366969,2.337749 -1.377561,-0.364726 -0.02115,0.08032 c -0.06186,0.217784 -0.139354,0.430936 -0.231874,0.637884 -0.209287,0.483349 -0.478202,0.939358 -0.80065,1.357662 -0.473544,0.638544 -1.096078,1.154936 -1.814768,1.505392 -0.718722,0.350456 -1.512417,0.524645 -2.313802,0.507793 h -0.0049 C 11.196159,18.578047 10.402432,18.40389 9.6837093,18.053434 8.9649871,17.702979 8.3424891,17.186523 7.8689932,16.547948 7.5463052,16.129801 7.2773746,15.67376 7.068346,15.190285 6.9758258,14.983338 6.898329,14.770185 6.8364458,14.552402 l -0.021155,-0.08032 -1.3775398,0.364725 1.3669606,-2.337749 2.3677762,1.349631 -1.3913598,0.368725 c 0.3224137,0.688785 0.8112902,1.288775 1.4236461,1.747272 0.612356,0.458465 1.3294189,0.761389 2.0881479,0.882093 V 11.821831 H 9.5305087 V 10.664186 H 11.295379 V 9.2599367 C 10.85728,9.0968042 10.491059,8.7870762 10.260525,8.3847416 10.029958,7.9824007 9.9496889,7.5129516 10.033659,7.0581808 c 0.08397,-0.4547706 0.326915,-0.8660351 0.686436,-1.1621462 0.359553,-0.296108 0.812933,-0.458291 1.281117,-0.458291 0.468216,0 0.921597,0.162183 1.28115,0.458291 0.35952,0.2961111 0.602433,0.7073756 0.686435,1.1621462 0.08397,0.4547708 0.0037,0.9242199 -0.226866,1.3265608 -0.230566,0.4023346 -0.596755,0.7120626 -1.034853,0.8751951 v 1.4050683 h 1.76404 v 1.156826 H 12.703823 V 16.84999 Z M 11.997575,8.2244283 c 0.162836,0 0.322066,-0.047683 0.457464,-0.1370168 0.135431,-0.089331 0.240968,-0.2163025 0.303276,-0.3648572 0.06234,-0.1485549 0.07864,-0.3120181 0.04687,-0.4697232 C 12.773402,7.0951259 12.694986,6.9502627 12.579814,6.8365645 12.464674,6.7228663 12.31795,6.6454359 12.158209,6.6140662 c -0.15974,-0.031366 -0.325288,-0.015268 -0.475745,0.046266 -0.150457,0.061533 -0.279091,0.1657374 -0.36957,0.2994342 -0.09048,0.1336936 -0.138748,0.290876 -0.138748,0.4516712 0,0.1068314 0.02131,0.212614 0.06272,0.311303 0.04144,0.098689 0.102187,0.1883504 0.178723,0.2638531 0.07654,0.075503 0.16743,0.1353694 0.267416,0.1761793 0.100017,0.04081 0.207181,0.061763 0.315366,0.061656 z"
              fill="#232323"
              id="path132"
              style="stroke-width:0.317005"/>

          <path fill="#00C1F3" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                opacity=".5"/>
          <path fill="#00C1F3" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
            <animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12"
                              type="rotate"/>
          </path>

        </svg>
        <div v-if="isError" class="no-routes">
          {{ routesError }}
        </div>
        <div class="filters_invalid" v-else-if="invalidFilter">
          <svg-icon name="schedule/invalid"/>
          {{ $t('invalid_filter') }}
        </div>
        <div v-if="!isLoading && !invalidFilter">
          <DaysTable
              v-for="(dayRoute, index) in showRoutes"
              :key="'tbl' + index"
              :aboutDays="dayRoute.routes"
              :day="dayRoute.date"
              @get-category="getCategory"
              @open-child-modal="openChildModal"
          />
          <MobileTable
              v-for="(dayRoute, index) in showRoutes"
              :key="'tblMob' + index"
              :day-route="dayRoute"
              @get-category="getCategory"
              @open-child-modal="openChildModal"
          />
        </div>
      </div>
    </section>
    <ChildInfo/>
    <CategoryInfoSmall :info="categoryInfo"/>
    <FilterMobile
        :is-shedule-filter="true"
        :arrival-places.sync="arrivalPlaces"
        :routes-categories.sync="setCategories"
        :range-time="rangeTime"
        :selected-time="selectedTime"
        :checked-arrival.sync="checkedArrival"
        :checked-categories.sync="checkedCategories"
        :is-ticket-available="isAvailableTicketsShown"
        ref="filterModal"
        @checked-arrival="checkedFilter"
    />
  </div>
</template>

<script>
import Header from '../../components/Header';
import DaysTable from '../../components/yachts/schedule/DaysTable';
import PortItem from "../../components/trolley/PortItem";
import CategoryCabin from "../../components/categories/CategoryCabin";
import CategoryInfo from "../../components/modals/CategoryInfo";
import Breadcrumbs from "../../components/Breadcrumbs";
import FilterMobile from "../../components/modals/Filter.vue";
import UIkit from "uikit";
import moment from "moment";
import SmallCalendarItem from "../../components/yachts/schedule/SmallCalendarItem.vue";
import MobileTable from "../../components/yachts/schedule/MobileTable.vue";
import ChildInfo from "../../components/modals/ChildInfo.vue";
import CategoryInfoSmall from "~/components/modals/CategoryInfoSmall.vue";

export default {
  scrollToTop: true,
  name: 'schedule',
  components: {
    CategoryInfoSmall,
    ChildInfo,
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
      today: new Date().toISOString().split('T')[0],
      inWeek: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0],
      isLoading: true,
      showSelect: false,
      selectedTime: null,
      selectedTimeQuery: null,
      rangeTime: [
        {
          title: 'timeOptions.anytime',
          value: null,
          query: 'anytime'
        },
        {
          title: 'timeOptions.morning',
          value: [`10.00`, `11.00`, `12.00`],
          query: 'morning'
        },
        {
          title: 'timeOptions.daytime',
          value: [`12.00`, `13.00`, `14.00`, `15.00`, `16.00`, `17.00`, `18.00`],
          query: 'daytime'
        },
        {
          title: 'timeOptions.evening',
          value: [`18.00`, `19.00`, `20.00`, `21.00`, `22.00`, `23.00`],
          query: 'evening'
        },
      ],
      interval: null,
      dateInputValue: null,
      isAvailableTicketsShown: false,
      selectedDay: null,
      routesError: '',
      invalidFilter: false,
      isError: false,
      allAvailableCategories: [],
    };
  },
  methods: {
    openChildModal() {
      UIkit.modal('#childInfo').show();
    },
    async checkedFilter(emitFilterPrameters) {
      /*       console.log("PARENT CHECKED ARRIVAL emitArrival = ", emitFilterPrameters)
            console.log("PARENT CHECKED ARRIVAL = ", this.checkedArrival) */
      this.checkedCategories = emitFilterPrameters.categories;
      this.checkedArrival = emitFilterPrameters.arrival;
      this.chosenSits = emitFilterPrameters.tikets.adult;
      this.startDate = emitFilterPrameters.dates.dateFirst;
      this.endDate = emitFilterPrameters.dates.dateEnd;
      this.selectedTime = emitFilterPrameters.time;
      this.isAvailableTicketsShown = emitFilterPrameters.available;
      /*this.setFilterDates(this.startDate, this.endDate);*/
      //this.filterRoutes();
      /*await this.datesFilter();
      this.validateFilterOptions();
      await this.routesFilter();*/
      await this.datesFilter()
      await this.routesFilter()
      this.validateFilterOptions();
      //await this.routesFilter()
      this.validateDateQuery(this.startDate,  this.endDate);
    },
    async getCategory(id) {
      this.categoryInfo = this.allAvailableCategories.find(category => category.type_id === id)
      UIkit.modal('#categoryInfoSmall').show();
    },

    openFilter() {
      //console.log("REFS = ",this.$refs)
      this.$refs.filterModal.openModal()
    },
    filterRoutes() {
      //console.log("FILTER ROUTES = ", this.checkedArrival, this.checkedCategories)
      this.showRoutes = []
      if (this.isAvailableTicketsShown) {
        if (this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            let filteredRoutes = day.routes.filter(val => val.freeSeats > 0)
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
        } else {
          let arr = []
          this.showRoutes.forEach(day => {
            let filteredRoutes = day.routes.filter(val => val.freeSeats > 0)
            arr.push({
              date: day.date,
              routes: filteredRoutes
            })
          })
          this.showRoutes = arr
        }
      }

      if (this.checkedCategories.length > 0) {
        if (this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            let filteredRoutes = day.routes.filter(val => {
              return this.checkedCategories.some(item => item.id === val.journeyTypeId);
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
              return this.checkedCategories.some(item => item.id === val.journeyTypeId);
            })
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
            let filteredRoutes = day.routes.filter(val => {
              return this.checkedArrival.some(item => item.id === val.placeId);
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
              return this.checkedArrival.some(item => item.id === val.placeId);
            })
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

      if (this.checkedArrival.length === 0
          && this.checkedCategories.length === 0
          && this.selectedTime === null
          && this.isAvailableTicketsShown === false
      ) {
        this.showRoutes = Array.from(this.arrayToFilter)
      }
    },
    openSelect(e) {
      this.showSelect = !this.showSelect
      /*document.querySelector('.testW').style.display = 'block'
      document.querySelector('.test').focus()*/
    },
    clickOutside() {
      document.querySelector('.testW').style.display = 'none'
    },
    interactSits(param) {
      if (param == '-') {
        //console.log('minus')
        if (this.chosenSits == 1) {
          return this.chosenSits = 1
        } else {
          return this.chosenSits--
        }
      } else {
        //console.log('plus')
        return this.chosenSits++
      }
    },
    async setDate(date) {
      let dayRoutes = await this.$axios(
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
      this.selectedDay = date1;
      this.arrayToFilter = [];
      let dayRoutes
      date2 !== undefined && date2 !== null
          ? dayRoutes = await this.$axios(
              `${this.$config.baseURL}routes?date=${date1}&end=${date2}&lang=${this.$i18n.locale}`)
          : dayRoutes = await this.$axios(
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

        let filterArrival = day.routes
            .filter(val => this.checkedArrival.length > 0 ? this.checkedArrival.some(item => item.id === val.placeId) : true)
            .filter(val => this.checkedCategories.length > 0 ? this.checkedCategories.includes(val.journeySubType) : true)
            .filter(val => {
              if (this.selectedTime === null) return true;
              const departureTime = val.depatureTime.slice(11, 16);
              const timeRange = this.selectedTime;
              const departureHour = parseInt(departureTime.split(':')[0], 10);
              const rangeStartHour = parseInt(timeRange[0].split('.')[0], 10);
              const rangeEndHour = parseInt(timeRange[timeRange.length - 1].split('.')[0], 10);
              return departureHour >= rangeStartHour && departureHour <= rangeEndHour;
            })
            .filter(val => {
              if (this.isAvailableTicketsShown === false) return true;
              return val.freeSeats > 0;
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
    isCurrentDaySelected(day) {
      return day === this.selectedDay;
    },

    validateDateQuery(startVal, endVal) {
      const currentQuery = {...this.$route.query};
      // Modify the query parameters
      if (startVal !== currentQuery.start || endVal !== currentQuery.end) {
        currentQuery.start = startVal;
        if (currentQuery.end === null) {
          delete currentQuery.end;
        } else {
          currentQuery.end = endVal;
        }

        // Bypass Vue Router's navigation checks using a timeout
        setTimeout(() => {
          this.$router.replace({ query: currentQuery });
        }, 100);
      }
    },

    validateQuery(queryVal, ...queryType) {
      const currentQuery = {...this.$route.query};
      // Modify the query parameters
      queryType.forEach(query => {
        currentQuery[query] = queryVal;
      })
      // Check if the modified query is different from the current query
      const isQueryModified = JSON.stringify(currentQuery) !== JSON.stringify(this.$route.query);
      // Only update the query if it has changed
      if (isQueryModified) {
        setTimeout(() => {
          this.$router.replace({ query: currentQuery });
        }, 1000);
      }

    },

    async selectDate(start, end) {
      this.selectedDay = start;
      this.startDate = start;
      this.endDate = end
      await this.datesFilter(start, end);
      this.validateFilterOptions();
      await this.routesFilter();
      this.validateDateQuery(start, end);
    },

    /*  async routesFilter() {
        this.isLoading = true;
        this.showRoutes = []
        if (this.checkedCategories.length > 0) {
          console.log(this.checkedCategories)
          await this.datesFilter()
          const queryCategory = this.checkedCategories.map(item => item.id).join(',')
          this.validateQuery(queryCategory, 'category')
          if (this.showRoutes.length === 0) {
            this.arrayToFilter.forEach(day => {
              const filteredRoutes = day.routes.filter(val => this.checkedCategories.some(item => item.id === val.journeyTypeId));
              this.showRoutes.push({
                date: day.date,
                routes: filteredRoutes
              });
            });
          }
          else {
            this.showRoutes = this.showRoutes.map(day => {
              const filteredRoutes = day.routes.filter(val => this.checkedCategories.some(item => item.id === val.journeyTypeId));
              return {
                date: day.date,
                routes: filteredRoutes
              };
            });
          }
        } else {
          this.validateQuery(undefined, 'category')
        }
        if (this.isAvailableTicketsShown) {
          if (this.showRoutes.length === 0) {
            this.arrayToFilter.forEach(day => {
              const filteredRoutes = day.routes.filter(val => val.freeSeats > 0);
              this.showRoutes.push({
                date: day.date,
                routes: filteredRoutes
              });
            });
          } else {
            this.showRoutes = this.showRoutes.map(day => {
              const filteredRoutes = day.routes.filter(val => val.freeSeats > 0);
              return {
                date: day.date,
                routes: filteredRoutes
              };
            });
          }
        }
        if (this.checkedArrival.length > 0) {
          const queryPier = this.checkedArrival.map(item => item.id).join(',')
          this.validateQuery(queryPier, 'pier');
          if (this.showRoutes.length === 0) {
            this.arrayToFilter.forEach(day => {
              const filteredRoutes = day.routes.filter(val => this.checkedArrival.some(item => item.id === val.placeId));
              this.showRoutes.push({
                date: day.date,
                routes: filteredRoutes
              });
            });
          }
          else {
            this.showRoutes = this.showRoutes.map(day => {
              const filteredRoutes = day.routes.filter(val => this.checkedArrival.some(item => item.id === val.placeId));
              return {
                date: day.date,
                routes: filteredRoutes
              };
            });
          }
        } else {
          this.validateQuery(undefined, 'pier')
        }


        if (this.selectedTime !== null) {
          const timeRange = this.selectedTime;
          const queryTime = this.rangeTime.find((option) => {
            if (option.value) {
              const [start, end] = option.value;
              const selectedStart = this.selectedTime[0];
              const selectedEnd = this.selectedTime[1];
              return selectedStart >= start && selectedEnd <= end;
            }
            return false;
          }).query;
          this.validateQuery(queryTime, 'time');
          const filterRoutes = (day) => {
            return day.routes.filter((val) => {
              const departureTime = val.depatureTime.slice(11, 16);
              const departureHour = parseInt(departureTime.split(':')[0], 10);
              const rangeStartHour = parseInt(timeRange[0].split('.')[0], 10);
              const rangeEndHour = parseInt(timeRange[timeRange.length - 1].split('.')[0], 10);
              return departureHour >= rangeStartHour && departureHour <= rangeEndHour;
            });
          };

          if (this.showRoutes.length === 0) {
            this.showRoutes = this.arrayToFilter.map((day) => ({
              date: day.date,
              routes: filterRoutes(day),
            }));
          } else {
            this.showRoutes = this.showRoutes.map((day) => ({
              date: day.date,
              routes: filterRoutes(day),
            }));
          }
        } else {
          this.validateQuery(undefined, 'time')
        }



        const emptyFilter =
            this.checkedArrival.length === 0 &&
            this.checkedCategories.length === 0 &&
            !this.isAvailableTicketsShown &&
            !this.selectedTime
        ;

        if (emptyFilter) {
  /!*        this.$router.replace({
            query: {
              ...this.$route.query,
              pier: undefined,
              category: undefined,
              time: undefined
            }
          })*!/
          await this.datesFilter();
          this.validateQuery(undefined, 'time', 'pier', 'category')
          this.showRoutes = this.arrayToFilter
        }

        this.invalidFilter = this.showRoutes.every(day => day.routes.length === 0);
        this.isLoading = false
      },

      validateFilterOptions() {
        let setPorts = new Set()
        this.checkedArrival = [];
        this.selectedTime = null;
        let formattedFetch = Object.entries(this.testFetch)
        formattedFetch.forEach(item => {
          item[1].forEach(route => {
            setPorts.add(JSON.stringify({
              name: route.placeName,
              id: route.placeId
            }))
          })
        })
        const formattedPorts = [...setPorts].map(item => {
          return JSON.parse(item)
        })
        this.arrivalPlaces = formattedPorts
        if(!!this.$route.query.pier) {
          const queryPiers = this.$route.query.pier.split(',').map(val => +val)
          queryPiers.forEach(pier => {
            formattedPorts.forEach(port => {
              if(port.id === pier) {
                this.checkedArrival.push(port)
              }
            })
          })
        }
        if(!!this.$route.query.category) {
          const queryCategory = this.$route.query.category.split(',').map(val => +val)
          queryCategory.forEach(id => {
            this.setCategories.forEach(category => {
              if(category.id === id) {
                this.checkedCategories.push(category)
              }
            })
          })
        }

        if(!!this.$route.query.time) {
          const queryTime = this.$route.query.time
          this.selectedTimeQuery = queryTime
          this.selectedTime = this.rangeTime.find(item => item.query === queryTime).value
        }
      },

      collectFilterOptions() {
        this.selectedTime = null;
        this.checkedArrival = [];
        this.checkedCategories = [];
        let setCategories = new Set()
        let setPorts = new Set()
        let setArrival = []
        let formattedFetch = Object.entries(this.testFetch)
        formattedFetch.forEach(item => {
          item[1].forEach(route => {
            setPorts.add(JSON.stringify({
              name: route.placeName,
              id: route.placeId
            }))
          })
        })
        setArrival = formattedFetch.map(item => {
          return {
            date: item[0],
            routes: item[1]
          }
        })
        const formattedPorts = [...setPorts].map(item => {
          return JSON.parse(item)
        })
        const formattedCategories = [...setCategories].map(item => {
          return JSON.parse(item)
        })
        if(!!this.$route.query.pier) {
          const queryPiers = this.$route.query.pier.split(',').map(val => +val)
          queryPiers.forEach(pier => {
            formattedPorts.forEach(port => {
              if(port.id === pier) {
                this.checkedArrival.push(port)
              }
            })
          })
        }
        if(!!this.$route.query.category) {
          const queryCategory = this.$route.query.category.split(',').map(val => +val)
          queryCategory.forEach(id => {
            this.setCategories.forEach(category => {
              if(category.id === id) {
                this.checkedCategories.push(category)
              }
            })
          })
        }

        if(!!this.$route.query.time) {
          const queryTime = this.$route.query.time
          this.selectedTimeQuery = queryTime
          this.selectedTime = this.rangeTime.find(item => item.query === queryTime).value
        }

        //this.setCategories = formattedCategories
        this.arrivalPlaces = formattedPorts
        this.arrayToFilter = setArrival;
        this.showRoutes = this.arrayToFilter
        this.invalidFilter = this.showRoutes.every(day => day.routes.length === 0);
      },

      async datesFilter() {
        let today = new Date()
        let now = today.toISOString().split('T')[0]
        let end = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0]
        const queryCategory = this.checkedCategories.map(item => item.id)
        console.log(queryCategory)
        const casualRoutes = queryCategory.some(category => {
          return category === 0 || category === 2 || category === 3 || category === 4 || category === 5
        })
        if (this.$route.query.category || queryCategory.length !== 0) {
          if (!casualRoutes && queryCategory.length !== 0) {
            end = new Date(today);
            end.setDate(today.getDate() + 90);
            if(!this.$route.query.start) {
              this.endDate = end.toISOString().split('T')[0];
            }
          }
        }

        const response = await this.$axios.get(`${this.$config.baseURL}routes`, {
          params: {
            date: this.startDate,
            end: this.endDate,
            type_id: queryCategory,
            lang: this.$i18n.locale
          }
        });
        console.log(response)
        if(response.data.length === 0) {
          this.routesError = this.$i18n.t('routes_not_found')
          this.isError = true
        } else {
          this.testFetch = response.data.routes;
          this.arrayToFilter = []
          Object.entries(this.testFetch).forEach(item => {
            this.arrayToFilter.push({
              date: item[0],
              routes: item[1],
            })
          })
          this.showRoutes = this.arrayToFilter
          this.isError = false
        }
        //console.log(dayRoutes.data.routes)
      }*/


    async datesFilter(start, end, queryCategory) {
      //console.log(queryCategory, queryCategory.split(', '))
      const response = await this.$axios.get(`${this.$config.baseURL}routes`, {
        params: {
          'type_id[]': queryCategory,
          date: this.startDate,
          end: end ? end : this.endDate,
          lang: this.$i18n.locale
        }
      });
      if (response.data.length === 0 ) {
        this.invalidFilter = true;
        this.isLoading = false;
      } else {
        this.testFetch = response.data.routes;
        this.arrayToFilter = []
        Object.entries(this.testFetch).forEach(item => {
          this.arrayToFilter.push({
            date: item[0],
            routes: item[1].filter(item => item.journeyTypeId !== 15 && item.journeyTypeId !== 14),
          })
        })
        this.showRoutes = this.arrayToFilter
      }
    },

    validateFilterOptions() {
      let setPorts = new Set()
      this.checkedArrival = [];
      this.checkedCategories = [];
      this.selectedTime = null;
      let formattedFetch = Object.entries(this.testFetch)
      formattedFetch.forEach(item => {
        item[1].forEach(route => {
          setPorts.add(JSON.stringify({
            name: route.placeName,
            id: route.placeId
          }))
        })
      })
      const formattedPorts = [...setPorts].map(item => {
        return JSON.parse(item)
      })
      this.arrivalPlaces = formattedPorts
      if (!!this.$route.query.pier) {
        const queryPiers = this.$route.query.pier.split(',').map(val => +val)
        queryPiers.forEach(pier => {
          formattedPorts.forEach(port => {
            if (port.id === pier) {
              this.checkedArrival.push(port)
            }
          })
        })
      }
      if (!!this.$route.query.category) {
        const queryCategory = this.$route.query.category.split(',').map(val => +val)
        queryCategory.forEach(id => {
          this.setCategories.forEach(category => {
            if (category.id === id) {
              this.checkedCategories.push(category)
            }
          })
        })
      }

      if (!!this.$route.query.time) {
        const queryTime = this.$route.query.time
        this.selectedTimeQuery = queryTime
        this.selectedTime = this.rangeTime.find(item => item.query === queryTime).value
      }
    },

    async routesFilter() {
      this.invalidFilter = false;
      this.isLoading = true;
      this.showRoutes = []

      // Initial query parameters
      const currentQuery = { ...this.$route.query };

      if (this.checkedCategories.length > 0) {
        let end = this.endDate
        let today = new Date()
        const casualRoutes = this.checkedCategories.map(item => item.id).some(category => {
          return category === 0 || category === 2 || category === 3 || category === 4 || category === 5
        })
        if(!casualRoutes) {
          if(!this.$route.query.start) {
            end = new Date(today.setDate(today.getDate() + 90)).toISOString().split('T')[0]
          } else {
            end = this.$route.query.end
          }
        }
        const queryCategory = this.checkedCategories.map(item => item.id).join(',')
        await this.datesFilter(this.startDate, end, queryCategory)

        currentQuery.category = queryCategory;


        //this.validateQuery(queryCategory, 'category')
        if (this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            const filteredRoutes = day.routes.filter(val => this.checkedCategories.some(item => item.id === val.journeyTypeId));
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            });
          });
        } else {
          this.showRoutes = this.showRoutes.map(day => {
            const filteredRoutes = day.routes.filter(val => this.checkedCategories.some(item => item.id === val.journeyTypeId));
            return {
              date: day.date,
              routes: filteredRoutes
            };
          });
        }
      } else {
        await this.datesFilter();
        delete currentQuery.category;
        //this.validateQuery(undefined, 'category')
      }
      if (this.isAvailableTicketsShown) {
        if (this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            const filteredRoutes = day.routes.filter(val => val.freeSeats > 0);
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            });
          });
        } else {
          this.showRoutes = this.showRoutes.map(day => {
            const filteredRoutes = day.routes.filter(val => val.freeSeats > 0);
            return {
              date: day.date,
              routes: filteredRoutes
            };
          });
        }
      }
      if (this.checkedArrival.length > 0) {
        const queryPier = this.checkedArrival.map(item => item.id).join(',')
        currentQuery.pier = queryPier;
        //this.validateQuery(queryPier, 'pier');
        if (this.showRoutes.length === 0) {
          this.arrayToFilter.forEach(day => {
            const filteredRoutes = day.routes.filter(val => this.checkedArrival.some(item => item.id === val.placeId));
            this.showRoutes.push({
              date: day.date,
              routes: filteredRoutes
            });
          });
        } else {
          this.showRoutes = this.showRoutes.map(day => {
            const filteredRoutes = day.routes.filter(val => this.checkedArrival.some(item => item.id === val.placeId));
            return {
              date: day.date,
              routes: filteredRoutes
            };
          });
        }
      } else {
        delete currentQuery.pier;
        //this.validateQuery(undefined, 'pier')
      }


      if (this.selectedTime !== null) {
        const timeRange = this.selectedTime;
        const queryTime = this.rangeTime.find((option) => {
          if (option.value) {
            const [start, end] = option.value;
            const selectedStart = this.selectedTime[0];
            const selectedEnd = this.selectedTime[1];
            return selectedStart >= start && selectedEnd <= end;
          }
          return false;
        }).query;
        currentQuery.time = queryTime;
        //this.validateQuery(queryTime, 'time');
        const filterRoutes = (day) => {
          return day.routes.filter((val) => {
            const departureTime = val.depatureTime.slice(11, 16);
            const departureHour = parseInt(departureTime.split(':')[0], 10);
            const rangeStartHour = parseInt(timeRange[0].split('.')[0], 10);
            const rangeEndHour = parseInt(timeRange[timeRange.length - 1].split('.')[0], 10);
            return departureHour >= rangeStartHour && departureHour <= rangeEndHour;
          });
        };

        if (this.showRoutes.length === 0) {
          this.showRoutes = this.arrayToFilter.map((day) => ({
            date: day.date,
            routes: filterRoutes(day),
          }));
        } else {
          this.showRoutes = this.showRoutes.map((day) => ({
            date: day.date,
            routes: filterRoutes(day),
          }));
        }
      } else {
        delete currentQuery.time;
        //this.validateQuery(undefined, 'time')
      }


      const emptyFilter =
          this.checkedArrival.length === 0 &&
          this.checkedCategories.length === 0 &&
          !this.isAvailableTicketsShown &&
          !this.selectedTime
      ;

      if (emptyFilter) {
        await this.datesFilter();
        currentQuery.category = undefined;
        currentQuery.pier = undefined;
        currentQuery.time = undefined;
        //this.validateQuery(undefined, 'time', 'pier', 'category')
        this.showRoutes = this.arrayToFilter
      }
      const routerReplacePromise = new Promise((resolve) => {
        this.$router.replace({ query: currentQuery }, () => {
          resolve();
        });
      });

      routerReplacePromise.then(() => {
        // Continue with any logic that needs to run after the navigation
        this.validateFilterOptions();
        this.isLoading = false; // Example: Set isLoading to false
      });
      /*setTimeout(() => {
        this.$router.replace({ query: currentQuery });
      }, 1000);*/
      this.invalidFilter = this.showRoutes.every(day => day.routes.length === 0);
      this.isLoading = false
    },
  },
  computed: {
    labelTime() {
      if (this.selectedTime === null) {
        return this.$i18n.t('select_time')
      } else {
        return this.$i18n.t(this.rangeTime.find(item => item.value === this.selectedTime).title)
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
          day: 'numeric'
        })
        dateItem.weekday = new Date(date).toLocaleDateString(`${this.$i18n.localeProperties.iso}`, {
          timeZone: 'Europe/Moscow',
          weekday: 'short',
          month: 'short',
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
        return `${this.$i18n.t('selected')}: ${this.checkedArrival[0].name}`
      } else {
        return `${this.$i18n.t('selected')}: ${this.checkedArrival.length}`
      }
    },
    selectCategory() {
      if (this.checkedCategories.length === 0) {
        return this.$i18n.t('select_ticket_category')
      } else if (this.checkedCategories.length === 1) {
        return `${this.$i18n.t('selected')}: ${this.checkedCategories[0].name}`
      } else {
        return `${this.$i18n.t('selected')}: ${this.checkedCategories.length}`
      }
    }
  },

  /*validate({ params, query, store }) {

  },*/

  watch: {
    '$route.query': {
      async handler(newQuery, oldQuery) {
        //console.log(this.$route.query)
        // Check if start and end dates exist in the URL query parameters
        /*if (newQuery.start && newQuery.end) {
          const newStartDate = new Date(newQuery.start);
          const newEndDate = new Date(newQuery.end);

          // Validate if the start date is less than or equal to the end date
          if (newStartDate <= newEndDate) {
            this.startDate = newStartDate;
            this.endDate = newEndDate;
          } else {
            // If the start date is greater than the end date, set them to null or handle the error as needed
            /!*this.startDate = null;
            this.endDate = null;*!/
            // You can also show an error message to the user if required
            console.error('Start date should be less than or equal to end date.');
          }
        } /!*else {
          this.startDate = null;
          this.endDate = null;
        }*!/*/
      },
      deep: true,
    },
  },

  async fetch() {
    let today = new Date()
    let now = today.toISOString().split('T')[0]
    let end = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0]
    let queryCategory = []
    if(this.$route.query.category) {
      queryCategory = this.$route.query.category.split(',').map(val => +val)
      const casualRoutes = queryCategory.some(category => {
        return category === 0 || category === 2 || category === 3 || category === 4 || category === 5
      })
      if(!casualRoutes) {
        if(!this.$route.query.start) {
          end = new Date(today.setDate(today.getDate() + 90)).toISOString().split('T')[0]
        }
      }
    }

    if (this.$route.query.start) {
      now = this.$route.query.start
    }
    if (this.$route.query.end) {
      const startDateObj = new Date(now);
      const endDateObj = new Date(this.$route.query.end);
      if (startDateObj > endDateObj) {
        // Handle invalid dates, for example, set both dates to null
        //this.routesError = 'Что то пошло не так...'
        this.isLoading = false;
        this.isError = true;
        this.routesError = 'Дата начала поездки должна быть раньше даты окончания поездки.'
      } else {
        end = this.$route.query.end
      }
    } else {
      if (this.$route.query.start) {
        end = this.$route.query.start
      }
    }
    this.endDate = end
    this.startDate = now
    try {
      let seoDataResult = await this.$axios(
          `${this.$config.baseURL}pages?ref=/yachts/schedule/&lang=${this.$i18n.locale}`);
      this.seoData = seoDataResult.data.result
      let categoriesData = await this.$axios(
          `${this.$config.baseURL}categories?&lang=${this.$i18n.locale}`);
      this.allAvailableCategories = categoriesData.data.result
      this.setCategories = categoriesData.data.result
          .filter(item => {
            return item.type_id !== null
          })
          .map(item => {
            return {
              name: item.name,
              id: item.type_id,
            }
          })
      /*await this.datesFilter();
      this.validateFilterOptions();
      await this.routesFilter();*/
      await this.datesFilter(this.startDate, this.endDate, this.$route.query.category);
      this.validateFilterOptions();
      //await this.routesFilter();
      this.isLoading = false;
    } catch (e) {

    }
  },
  fetchOnServer: false,
  fetchKey: 'yacht-schedule',

  mounted() {
    /*    this.selectedDay = this.today;

        let today = new Date()
        let end = null
        /!*this.checkedCategories = this.$route.query.class.split(',')*!/
        // Дописать валидацию даты начала и конца поиска
        if(this.$route.query.start) {
          this.startDate = this.$route.query.start
        }
        if(this.$route.query.end) {
          const startDateObj = new Date(this.startDate);
          const endDateObj = new Date(this.endDate);
          this.endDate = this.$route.query.end
        } else {
          this.endDate = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0]
        }

        this.setFilterDates(this.startDate, this.endDate)
        this.interval = setInterval(() => {
          this.setFilterDates(this.startDate, this.endDate); // Fetch data every 15 minutes
        }, 15 * 60 * 1000);*/
    const elements = document.querySelectorAll('.litepicker')
    const options = {
      lang: this.$i18n.localeProperties.iso,
      element: document.querySelector('#datepickerTest'),
      singleMode: false,
      numberOfMonths: 2,
      numberOfColumns: 2,
      minDate: new Date().setDate(new Date().getDate() - 0),
      maxDate: new Date().setDate(new Date().getDate() + 90),
      showTooltip: false,
    }
    // console.log("Elements = ",elements);
    this.litePickers = new Litepicker({
      ...options,

      setup: async (picker) => {
        picker.on('selected', async (date1, date2) => {
          this.isLoading = true
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
          if (date1.getTime() === date2.getTime()) {
            this.dateInputValue = `${dateFirst}`
            this.validateDateQuery(dateFirst, undefined)
          } else {
            this.dateInputValue = `${dateFirst} - ${dateEnd}`
            this.validateDateQuery(dateFirst, dateEnd)
          }

          this.startDate = dateFirst
          this.endDate = dateEnd
          /*await this.routesFilter()
          this.validateFilterOptions();*/
          await this.datesFilter(this.startDate, this.endDate, this.$route.query.category);
          this.validateFilterOptions();
          await this.routesFilter()
          //console.log("picker selected showRoutes = ",this.showRoutes);
          this.isLoading = false
        });
      },
    });
  },
  beforeDestroy() {
    //console.log("DESTROY Yachts Shedule =", this.$refs.filterModal);
    this.$refs.filterModal.destroyModal();
    clearInterval(this.interval)
  },
};
</script>

<style scoped>
.timeSelect:after {
  display: none;
}

/*
.testW {
  display: none;
}
*/

.testW select {
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background: #fff;
  height: 150px;
  z-index: 1000;
}

.testW select option {
  text-align: center;
  padding: 10px 0;
}

.testW select option:hover {
  color: #00c1f3;;
  transform: scale(1.5);
}

.picker-footer {
  display: flex;
  position: absolute;
  z-index: 1000;
  width: 100%;
  left: 0;
  top: 215px;
}

.picker-cancel, .picker-confirm {
  background-color: #fff;
  border-top: 1px solid #858585;
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

/*.pass-quantity {
  display: flex;
  flex-direction: column;
}*/


.accept_button {
  margin-top: 20px;
  width: 100%;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.buy-ticket.uk-sticky-fixed {
  z-index: 999;
//left: 0; margin: 0;
}

.pass-quantity__drop .form_politic .uk-radio {
  margin-right: 22px;
}

.pass-quantity__drop .form_politic .uk-radio:checked {
  background: #1e87f0 url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E) !important;
}

@media screen and (max-width: 1550px) {
  .buy-ticket.uk-sticky-fixed {
    left: 0;
  }
}

.buy-ticket-shedule__header {
  background: #E7F0F7;
}

.heading {
  padding-top: 0;
  padding-bottom: 20px;
}

.headline_p1 {
  font-size: clamp(18px, 5vw, 50px);
  color: #1D2240;
}

.buy-ticket-shedule__container {
  padding-bottom: 50px;
}

.buy-ticket-shedule__container .buy-ticket {
  margin-top: 0;
  z-index: 101;
}

.buy-ticket__item {
  justify-content: center;
}

.buy-ticket__item-available {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.buy-ticket__item-available .uk-checkbox {
  font-size: 14px;
  border-color: #00C1F3;
  margin-top: 0;
}

.buy-ticket__item-available .uk-checkbox:checked {
  border-color: #00C1F3 !important;
}

.buy-ticket__item-available .uk-checkbox::before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAOklEQVR4AWNwL/DBwAz7/wswHPh8AYRxSx78/B9MAxkHQBgkgS4J5iMLoEuCTUTWhS4Jwij2IkvCMAAh2FqBbBYe0QAAAABJRU5ErkJggg==) no-repeat center center;
}

.buy-ticket__item:nth-child(odd) {
  background: #F5F5F5;
}


.select-styled {
  border: none;
}

.filter_button {
  display: none;
}

.no-routes {
  margin-top: 25px;
}

.filters_invalid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #1D2240;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
  text-transform: uppercase;
  width: 100%;
  margin: 10% auto;
  max-width: 466px;
}

.filters_invalid svg {
  width: 41px;
  height: 41px;
}

.schedule_loader {
  width: 125px;
  height: 125px;
  margin: 10% auto;
  display: block;
}

@media screen and (max-width: 1199px) {
  .buy-ticket-shedule__container .buy-ticket {
    justify-content: center;
    border: none;
  }
}

@media screen and (max-width: 639px) {
  .buy-ticket-shedule__container {
    padding-bottom: 25px;
  }

  .heading {
    padding-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0;
  }

  .filter_button {
    display: block;
    width: 30px;
    height: 30px;
  }

  .filter_button svg {
    height: 100%;
    width: 100%;
  }

  .buy-ticket-shedule-days {
    margin-top: 0;
  }
}

</style>

