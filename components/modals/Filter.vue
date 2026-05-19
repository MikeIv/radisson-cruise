<template v-if="isComponentView">
  <div id="modal-filter">
    <div id="modal-buy-ticket-filter" class="uk-modal-full" uk-modal ref="filtermodal" v-show="isSheduleFilter">
      <div class="uk-modal-dialog" id="bg-modal">
        <button class="uk-modal-close-default uk-close-large" type="button" @click="closeModal">
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <line fill="none" stroke="#fff" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"></line>
            <line fill="none" stroke="#fff" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"></line>
          </svg>
        </button>
        <div class="uk-container modal-full_container">
          <div class="headline_56 text-upper">
            {{ $t('filter') }}
          </div>
          <div class="modal-news-filter__body">
            <div class="buy-ticket__item" id="calendar">
              <svg-icon name="date" class="icon buy-ticket__item_icon1"/>
              <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
              <input class="select-styled litepicker-filter"
                     id="modal-buy-ticket-filter-datepicker "
                     type="text"
                     :placeholder="$t('select_date')"
                     @click="clickSelect('days')">
            </div>
            <div class="buy-ticket__item">
              <svg-icon name="cat_room" class="icon buy-ticket__item_icon3"/>
              <button class="select-styled pass-btn"
                      :class="{ 'select-open': isArrival }"
                      type="button"
                      @click="clickSelect('arrival')"
                      id="arrival">
                {{ $t('select_port') }}
              </button>

              <div class="pass-quantity__drop uk-dropdown uk-open" v-show="isArrival">
                <div class="pass-quantity">
                  <div class="form_politic buy-ticket__politic">
                    <label v-for="place in arrivalPlaces">
                      <input class="uk-checkbox"
                             name="category__moorage"
                             type="checkbox"
                             :value="place"
                             v-model="localArrivalFilter">
                      <span>{{ place.name }}</span>
                    </label>
                  </div>
                  <button @click="isArrival = false"
                          type="button"
                          class="uk-button uk-button-default accept_button"
                  >
                    {{$t('buttons.accept')}}
                  </button>
                </div>
              </div>
            </div>
            <div class="buy-ticket__item">
              <svg-icon name="cat_room" class="icon buy-ticket__item_icon3"/>
              <button class="select-styled pass-btn"
                      :class="{ 'select-open': isCatetories }"
                      type="button"
                      id="categories"
                      @click="clickSelect('categories')"

              >
                {{ $t('select_ticket_category') }}
              </button>

              <div class="pass-quantity__drop uk-dropdown uk-open" v-show="isCatetories">
                <div class="pass-quantity">
                  <div class="form_politic buy-ticket__politic">
                    <label v-for="category in routesCategories">
                      <input class="uk-checkbox"
                             name="category__salon"
                             type="checkbox"
                             :value="category"
                             v-model="checkedCategoriesFilter">
                      <span>{{ category.name }}</span>
                    </label>

                  </div>
                  <button @click="isCatetories = false"
                          type="button"
                          class="uk-button uk-button-default accept_button"
                  >
                    {{$t('buttons.accept')}}
                  </button>
                </div>
              </div>
            </div>
            <div v-if="rangeTime" class="buy-ticket__item">
              <svg-icon name="clock3" class="icon buy-ticket__item_icon1"/>
              <button type="button"
                      class="select-styled timeSelect datetimepicker"
                      :class="{ 'select-open': isTime }"
                      @click="clickSelect('time')"
              >
                {{ $t(labelTime) }}
              </button>
              <div class="testW pass-quantity__drop uk-dropdown uk-open" v-show="isTime">
                <div class="pass-quantity">
                  <div class="form_politic buy-ticket__politic">
                    <label v-for="time in rangeTime">
                      <input class="uk-radio"
                             name="category__salon"
                             type="radio"
                             :value="time.value"
                             v-model="selectedTimeFilter">
                      <span>{{ $t(time.title) }}</span>
                    </label>
                  </div>
                  <button @click="isTime = false"
                          type="button"
                          class="uk-button uk-button-default accept_button"
                  >
                    {{ $t('buttons.accept') }}
                  </button>
                </div>
              </div>
            </div>
            <label class="buy-ticket__item buy-ticket__item-available">
              <input v-model="isTicketAvailableFilter"
                     class="uk-checkbox"
                     type="checkbox"
              >
              <span>{{ $t('select_available') }}</span>
            </label>

          </div>
          <div class="modal-news-filter__footer">
            <button class="uk-button uk-button-default button_ticket uk-modal-close" @click="setFilter">

              <span>{{ $t('buttons.find_route') }}</span>
              <svg-icon name="looking_glass" class="icon"/>
            </button>
          </div>

        </div>
      </div>
    </div>
    <!-- ########## TAB FILTER MODAL ########### -->
    <div id="modal-category-cabin-filter" class="uk-modal-full" uk-modal v-show="isTabsFilter">
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default uk-close-large" type="button" @click="closeModal">
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <line fill="none" stroke="#fff" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"></line>
            <line fill="none" stroke="#fff" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"></line>
          </svg>
        </button>
        <div class="uk-container modal-full_container">
          <div class="headline_56 text-upper">
            {{ $t('filter') }}
          </div>
          <div class="modal-news-filter__body">
            <div class="news__navigatiom__date" v-show="isNewsFilter">
<!--              <div class="input_archive input_archive_month">
                <div class="select">
                  &lt;!&ndash;                 <button class="uk-button uk-button-default" type="button">Click</button>
                                    <div uk-dropdown="mode: click">
                                      <ul>
                                        <li v-for="(itemM,idxM) in monthItemsSelect" :key="'idxM-'+idxM">
                                            <button>{{ itemM }}</button>
                                        </li>
                                      </ul>
                                    </div> &ndash;&gt;
                  <button class="uk-button uk-button-default select-dropdown-button" type="button">Месяц
                    {{ uiSelectMonth }}
                  </button>
                  <div uk-dropdown="mode: click" ref="dropMonth">
                    <ul class="uk-nav uk-dropdown-nav">
                      <li class="uk-active" v-for="(itemM,idxM) in monthItemsSelect" :key="'idxM-'+idxM">
                        <button @click="selectMonth(idxM)" class="uk-button uk-button-drop uk-small-bottom-drop">
                          {{ itemM }}
                        </button>
                      </li>

                    </ul>
                  </div>


                </div>
              </div>
              <div class="input_archive input_archive_year">
                <div class="select">
                  <button class="uk-button uk-button-default select-dropdown-button" type="button">Год {{
                      uiSelectYear
                    }}
                  </button>
                  <div uk-dropdown="mode: click" ref="dropYear">
                    <ul class="uk-nav uk-dropdown-nav">
                      <li class="uk-active" v-for="(itemY,idxY) in dropYear" :key="'idxY-'+idxY">
                        <button @click="selectYear(itemY)" class="uk-button uk-button-drop uk-small-bottom-drop"
                                v-if="idxY===0">{{ itemY }}
                        </button>
                        <button @click="selectYear(itemY)" class="uk-button uk-button-drop uk-small-bottom-drop"
                                v-if="idxY!==0">{{ itemY }} год
                        </button>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>-->
              <div class="input_archive input_archive_month">
                <div class="select">
                  <div class="select-styled">
                    {{ selectedMonth }}
                  </div>
                  <ul uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="select-options uk-dropdown">
                    <li @click="currentMonth = null; selectMonth(null)">Все месяцы</li>
                    <li @click="currentMonth = month.value; selectMonth(month.value)"
                        v-for="month in getMonths"
                        :key="'mnt' + month.value"
                    >
                      {{ month.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="input_archive input_archive_year">
                <div class="select">
                  <div class="select-styled">
                    {{ selectedYear }}
                  </div>
                  <ul uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="select-options uk-dropdown">
                    <li @click="currentYear = null;selectYear(null)">Все года</li>
                    <li @click="currentYear = year;selectYear(year)"
                        v-for="year in getYears"
                        :key="'yr' + year"
                    >
                      {{ year }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul class="news__navigatiom__tabs uk-padding-remove">
              <li class="uk-button button_switcher-second"
                  :class="{'active': activeTab === 0}"
                  @click="activeTab = 0">
                <button class="uk-text-uppercase uk-width-1-1">{{ $t('all') }}</button>
              </li>
              <li class="uk-button button_switcher-second"
                  :class="{'active' : activeTab === tab.id}"
                  v-for="(tab,index) in categories"
                  :key="'tab1' + index"
                  @click="activeTab = tab.id">
                <button class="uk-width-1-1">{{ tab.name }}</button>
              </li>
            </ul>

          </div>
          <!--         <div class="modal-news-filter__body" uk-filter="target: .js-filter">
                    <ul class="news__navigatiom__tabs uk-padding-remove">
                      <li class="uk-button button_switcher-second" uk-filter-control="">
                        <button class="uk-text-uppercase">{{$t('pages.categories.tabs.all')}}</button>
                      </li>
                      <li class="uk-button button_switcher-second" v-for="(tab,index) in categories"
                          :key="'tab1' + index" :uk-filter-control="`[data-color='${tab.name}']`">
                        <button>{{ tab.name }}</button>
                      </li>
                    </ul>

                  </div> -->
          <div class="modal-news-filter__footer">
            <button class="uk-button uk-button-default uk-modal-close"  @click="setFilterTabs">
              <span>{{$t('buttons.accept')}}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UIkit from "uikit";

export default {
  name: "FilterMobile",
  props: {
    isSheduleFilter: {
      type: Boolean,
      default: false,
    },
    isTabsFilter: {
      type: Boolean,
      default: false,
    },
    isNewsFilter: {
      type: Boolean,
      default: false,
    },
    categories: {
      type: [Array, Set],
      default: () => [],
    },
    arrivalPlaces: {
      type: [Array, Set],
      default: () => [],
    },
    routesCategories: {
      type: [Array, Set],
      default: () => [],
    },
    checkedArrival: {
      type: [Array, Set],
      default: () => [],
    },
    checkedCategories: {
      type: [Array, Set],
      default: () => [],
    },
    actualMonth: {
      type: Number,
      default: null,
    },
    actualYear: {
      type: Number,
      default: null,
    },
    rangeTime: {
      type: Array,
      default: () => [],
    },
    selectedTime: {
      type: Array,
      default: () => [],
    },
    isTicketAvailable: {
      type: Boolean,
      default: false,
    },
    isTram: {
      type: Boolean,
    }
  },
  watch: {
    actualMonth() {
      this.currentMonth = this.actualMonth;
    },
    actualYear() {
      this.currentYear = this.actualYear;
    },
    checkedCategories() {
      this.checkedCategoriesFilter = this.checkedCategories;
    },
  },
  data() {
    return {
      activeTab: 0,
      isComponentView: false,
      isTikets: false,
      isCatetories: false,
      isTime: false,
      isArrival: false,
      datesFilter: {
        dateFirst: null,
        dateEnd: null,
      },
      monthItemsSelect: [
        'Все',
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      localArrivalFilter: this.checkedArrival,
      litePickerFilter: null,
      isModalDestroyed: false,
      checkedCategoriesFilter: this.checkedCategories,
      selectedTimeFilter: this.selectedTime,
      tiketsCount: {
        adult: 1,
        child: 0,
      },
      currentMonth: this.actualMonth,
      currentYear: this.actualYear,
      isTicketAvailableFilter: this.isTicketAvailable,
    };
  },
  computed: {
    labelTime() {
      if (this.selectedTime === null) {
        return 'select_time'
      } else {
        if(this.rangeTime !== null && this.rangeTime.length > 0) {
          return this.rangeTime.find((option) => {
            if (option.value) {
              const [start, end] = option.value;
              const selectedStart = this.selectedTime[0];
              const selectedEnd = this.selectedTime[1];
              return selectedStart >= start && selectedEnd <= end;
            }
            return false;
          }).title
        } else {
          return 'select_time'
        }
      }
    },
    getYears() {
      let years = [];
      const currentYear = new Date().getFullYear();
      for (let year = currentYear; year >= 2009; year--) {
        years.push(year);
      }
      return years
    },

    getMonths() {
      return this.$i18n.t('monthnames').map((month, index) => {
        return {
          name: month,
          value: index + 1
        }
      })
    },
    selectedMonth() {
      return this.currentMonth !== null  ? this.getMonths.find((month) => month.value === this.currentMonth).name : this.$i18n.t('month')
    },
    selectedYear() {
      return this.currentYear !== null ? this.currentYear : this.$i18n.t('year')
    },
    dropYear() {
      let listYers = [];
      const startYear = 2009;
      const nowYear = new Date().getFullYear();
      listYers.push("Все года");
      for (let index = nowYear; index >= startYear; index--) {
        listYers.push(index);
      }
      return listYers;

    },
    uiSelectMonth() {
      const sMonth = this.selectedMonth;
      let sMonthText = '';
      if (sMonth === null) {
        sMonthText = 'Все';
      } else {
        sMonthText = this.monthItemsSelect[sMonth];
      }

      return sMonthText;
    },
    uiSelectYear() {
      const sYear = this.selectedYear;
      let sYearText = '';
      if (sYear === null) {
        sYearText = 'Все';
      } else {
        sYearText = this.selectedYear;
      }

      return sYearText;
    },

  },
  methods: {
    clickSelect(item) {
      //console.log("clickSelect");
      //console.log("clickSelect",item );
      switch (item) {
        case 'days':
          this.closeFields();
          break;
        case 'arrival':
          this.isTikets = false;
          this.isCatetories = false;
          this.isArrival = !this.isArrival;
          break;
        case 'categories':
          this.isTikets = false;
          this.isCatetories = !this.isCatetories;
          this.isArrival = false;
          break;
        case 'tikets':
          this.isTikets = !this.isTikets;
          this.isCatetories = false;
          this.isArrival = false;
          break;
        case 'time':
          this.isTime = !this.isTime;
          this.isCatetories = false;
          this.isArrival = false;
          break;
        default:
          this.closeFields();
          break;
      }
      if (item === "modal-buy-ticket-filter") {
        console.log("clickBackground");
        //this.closeModal();
      }
    },
    closeFields() {
      this.isTikets = false;
      this.isCatetories = false;
      this.isArrival = false;
    },
    setFilter() {
      let today = new Date()
      let now = today.toISOString().split('T')[0]
      if(this.datesFilter.dateFirst === null) {
        this.datesFilter.dateFirst = now
      }
      console.log(this.checkedCategoriesFilter)
      this.$emit('checked-arrival', {
        dates: this.datesFilter,
        arrival: this.localArrivalFilter,
        categories: this.checkedCategoriesFilter,
        tikets: this.tiketsCount,
        time: this.selectedTimeFilter,
        available: this.isTicketAvailableFilter
      });
      this.closeModal();
    },
    selectMonth(item) {
      //console.log("selectMonth",item);
      //console.log("this.$refs.dropMonth = ",this.$refs.dropMonth);
      if (item === 0) {
        this.currentMonth = null;
      } else {

        this.currentMonth = item;
      }
      UIkit.dropdown(this.$refs.dropMonth).hide(false);
    },
    selectYear(item) {
      //console.log("selectYear",item);
      //console.log("this.$refs.dropYear = ",this.$refs.dropYear);
      if (item === "Все года") {
        this.currentYear = null;
      } else {
        this.currentYear = item;
      }

      UIkit.dropdown(this.$refs.dropYear).hide(false);
    },
    setFilterTabs(selectTab) {
      UIkit.modal('#modal-category-cabin-filter').hide();
      /*const activElement = this.$refs['seltab-' + selectTab].length > 0 ? this.$refs['seltab-' + selectTab][0] : this.$refs['seltab-' + selectTab];
      //console.log("Select REFS = ",activElement.classList);
      activElement.classList.add('active');
      this.activeTab = selectTab;*/
      if (this.isNewsFilter)
        this.$emit('checked-tabs', {
          activeTab: this.activeTab,
          activeMonth: this.currentMonth,
          activeYear: this.currentYear,
        });
      else {
        this.$emit('checked-tabs', {
          activeTab: this.activeTab,
        });
      }

      /*       this.$emit('update:checked-categories', this.checkedCategoriesFilter);
            this.$emit('update:tikets-count', this.tiketsCount); */

    },
    TiketsDecrement() {

      if (this.tiketsCount.adult > 1) {
        this.tiketsCount.adult--;
      }
      //console.log("Tikets filter = ",this.tiketsCount.adult);
    },
    TiketsIncrement() {
      this.tiketsCount.adult++;
      //console.log("Tikets filter = ",this.tiketsCount.adult);
    },
    handleCheckboxChange(event) {
      this.$emit('update:checked-arrival', this.localArrival);
    },
    openModal() {
      if (this.isSheduleFilter) {
        UIkit.modal('#modal-buy-ticket-filter').show();
      } else if (this.isTabsFilter) {
        UIkit.modal('#modal-category-cabin-filter').show();
      } else {
        //UIkit.modal('#modal-filter').show();
      }
      //UIkit.modal('#modal-filter').show();
      //this.isModalShow = true;
    },
    closeModal() {
      //console.log('closeModal');
      //this.isModalShow = false;
      UIkit.modal('#modal-filter').hide();
    },
    destroyModal() {
      if (this.isModalDestroyed) {
        return;
      }
      this.isModalDestroyed = true;

      document.querySelectorAll('.litepicker').forEach((element) => {
        element.remove();
      });

      if (this.litePickerFilter) {
        this.litePickerFilter.destroy();
        this.litePickerFilter = null;
      }

      const modalSelector = (this.isTabsFilter || this.isNewsFilter)
        ? '#modal-category-cabin-filter'
        : '#modal-buy-ticket-filter';
      const modal = UIkit.modal(modalSelector);

      if (modal && typeof modal.$destroy === 'function') {
        modal.$destroy(true);
      }
    },
  },
  beforeMount() {
    this.isComponentView = true;
  },
  mounted() {
    this.$nextTick(function () {
      //console.log("localArrival = ",this.localArrival)

      const maxTramScheduleDate = new Date(new Date().getFullYear(), 8, 30)
      const options = {
        lang: this.$i18n.localeProperties.iso,
        element: document.querySelector('.litepicker-filter'),
        singleMode: false,
        numberOfMonths: 1,
        numberOfColumns: 1,
        autoApply: true,
        minDate: new Date().setDate(new Date().getDate() - 0),
        maxDate: this.isTram ? maxTramScheduleDate : new Date().setDate(new
        Date().getDate() + 90),
        tooltipText: {
          one: 'flight',
          other: 'flights',
        },
      }
      this.litePickerFilter = new Litepicker({
        ...options,
        //element: el,
        setup: (picker) => {
          picker.on('preselect', (date1, date2) => {
            function addDays(date, days) {
              let result = new Date(date);
              result.setDate(result.getDate() + days);
              return result;
            }

            this.datesFilter.dateFirst = addDays(date1.dateInstance, 1).toISOString().split('T')[0];
          });
          picker.on('show', (el) => {
            picker.ui.style.left = '0px';
            //console.log("Show Element = ",  picker.ui.style)
            picker.setOptions({
              singleMode: false,
            })
          });
          picker.on('selected', async (date1, date2) => {

            picker.getDate()

            /*             console.log("GET DATE FROM Picker = ",picker.getDate())
                        console.log("select Date 1= ", date1.dateInstance);
                        console.log("select Date 2= ", date2.dateInstance); */
            function addDays(date, days) {
              let result = new Date(date);
              result.setDate(result.getDate() + days);
              return result;
            }

            const dateFirst = addDays(date1.dateInstance, 1).toISOString().split('T')[0]
            const dateEnd = addDays(date2.dateInstance, 1).toISOString().split('T')[0]
            this.datesFilter.dateFirst = dateFirst;
            this.datesFilter.dateEnd = dateEnd;
            if( date1.getTime() === date2.getTime() ) {
              picker.setOptions({
                singleMode: true,
              })
            }

            /*             console.log("this.datesFilter = ", this.datesFilter)
                        console.log("dateFirst = ", dateFirst)
                        console.log("dateEnd = ", dateEnd) */
            //this.selectDate(date1, date2);
            //this.arrayToFilter = []
            /* let dayRoutes = await axios.get(
                `${this.$config.baseURL}routes?date=${dateFirst}&end=${dateEnd}`);
            console.log(dayRoutes.data.routes)
            this.testFetch = dayRoutes.data.routes;
            Object.entries(this.testFetch).forEach(item => {
              this.arrayToFilter.push({
                date: item[0],
                routes: item[1],
              })
            })
            this.showRoutes = this.arrayToFilter */

          });
        },
      });
      //this.$emit('update:checked-arrival', this.localArrival);
    })
  },
  beforeDestroy() {
    this.destroyModal();
  },
}
</script>

<style>
/* mediaquery for mobile */
@media screen and (max-width: 639px) {
  .litepicker .container__main {

    justify-content: center;
  }

  .uk-button-drop {
    background: none;
    color: #444;
    border: 2px solid #999;
    height: 24px;
    margin-bottom: 7px;
  }

  .select-dropdown-button {
    background: none;
    color: #444;
    border: 2px solid #999;
    height: 40px;
    margin-bottom: 10px;
  }
}

.select-styled.select-open::after {
  rotate: 180deg;
}

.pass-quantity {
  display: flex;
  flex-direction: column;
}

.accept_button {
  margin-top: 20px;
  width: 100%;
}

.pass-quantity__drop .form_politic .uk-radio {
  margin-right: 22px;
}
.pass-quantity__drop .form_politic .uk-radio:checked {
  background: #1e87f0 url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E) !important;
}
.buy-ticket__item-available {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.buy-ticket__item-available .uk-checkbox{
  font-size: 14px;
  border-color: #00C1F3;
  margin-top: 0;
  min-width: 16px;
  min-height: 16px;
}
.buy-ticket__item-available .uk-checkbox:checked{
  border-color: #00C1F3 !important;
}
.buy-ticket__item-available .uk-checkbox::before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAOklEQVR4AWNwL/DBwAz7/wswHPh8AYRxSx78/B9MAxkHQBgkgS4J5iMLoEuCTUTWhS4Jwij2IkvCMAAh2FqBbBYe0QAAAABJRU5ErkJggg==) no-repeat center center;
}
@media screen and (max-width: 639px) {
  .buy-ticket__item-available {
    padding-left: 18px;
    font-size: 12px;
  }
}
</style>
