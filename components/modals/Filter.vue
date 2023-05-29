<template v-if="isComponentView">
  <div id="modal-filter" >
  <div id="modal-buy-ticket-filter" class="uk-modal-full" uk-modal ref="filtermodal" v-show="isSheduleFilter">
    <div class="uk-modal-dialog" id="bg-modal">
      <button class="uk-modal-close-default uk-close-large" type="button" @click="closeModal">
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <line fill="none" stroke="#fff" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"></line>
          <line fill="none" stroke="#fff" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"></line>
        </svg></button>
      <div class="uk-container modal-full_container">
        <div class="headline_56 text-upper">
          {{ $t('filter') }}
        </div>
        <div class="modal-news-filter__body">
            <div class="buy-ticket__item" id="calendar">
              <svg-icon name="date" class="icon buy-ticket__item_icon1"/>
              <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
              <input class="select-styled litepicker-filter" id="modal-buy-ticket-filter-datepicker " type="text" value="" placeholder="Выбрать дату" @click="clickSelect('days')">
            </div>
            <div class="buy-ticket__item" >
              <svg-icon name="cat_room" class="icon buy-ticket__item_icon3"/>
              <button class="select-styled pass-btn" type="button" @click="clickSelect('arrival')" id="arrival">Выбрать причал</button>

              <div class="pass-quantity__drop uk-dropdown uk-open" v-show="isArrival">
                <div class="pass-quantity">
                  <div class="form_politic buy-ticket__politic">
                    <label v-for="place in arrivalPlaces">
                      <input class="uk-checkbox" name="category__moorage" type="checkbox" :value="place" v-model="localArrivalFilter">
                      <span>{{place}}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="buy-ticket__item" >
              <svg-icon name="cat_room" class="icon buy-ticket__item_icon3"/>
              <button class="select-styled pass-btn" type="button" id="categories" @click="clickSelect('categories')">Категория салона</button>

              <div class="pass-quantity__drop uk-dropdown uk-open" v-show="isCatetories">
                <div class="pass-quantity">
                  <div class="form_politic buy-ticket__politic">
                    <label v-for="category in routesCategories">
                      <input class="uk-checkbox" name="category__salon" type="checkbox" :value="category" v-model="checkedCategoriesFilter">
                      <span>{{category}}</span>
                    </label>

                  </div>
                </div>
              </div>
            </div>
            <div class="buy-ticket__item" >
              <svg-icon name="passengers" class="icon buy-ticket__item_icon4"/>
              <button class="select-styled pass-btn" type="button" id="tikets" @click="clickSelect('tikets')">Кол-во пассажиров</button>
              <div  class="pass-quantity__drop uk-dropdown uk-open" v-show="isTikets">
                <div class="pass-quantity">
                  <div class="pass-quantity__item">
                    <!-- <div class="pass-quantity__item_name">
                      Взрослый
                    </div> -->
                    <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->
                    <div class="input-group plus-minus-input uk-flex-between">
                      <div class="input-group-button">
                        <button type="button" class="button "  @click="TiketsDecrement">
                          -
                        </button>
                      </div>
                      <input class="input-group-field" type="number" name="quantity" value="1" v-model="tiketsCount.adult" >
                      <div class="input-group-button">
                        <button type="button" class="button"  @click="TiketsIncrement">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
<!--             <div class="buy-ticket__item buy-ticket__item_5">
              <svg-icon name="clock3" class="icon buy-ticket__item_icon1"/>
              <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
              <input class=" select-styled  datetimepicker" id="datetimepicker-time2" type="text" value="" placeholder="Время посадки">
              <div class="datetimepicker-time2-container picker-container"></div>
            </div> -->

        </div>
        <div class="modal-news-filter__footer">
          <button class="uk-button uk-button-default button_ticket uk-modal-close" @click="setFilter">

            <span>НАЙТИ РЕЙС</span>
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
        </svg></button>
      <div class="uk-container modal-full_container">
        <div class="headline_56 text-upper">
          {{ $t('filter') }}
        </div>
        <div class="modal-news-filter__body" >
          <div class="news__navigatiom__date" v-show="isNewsFilter">
            <div class="input_archive input_archive_month">
              <div class="select">
<!--                 <button class="uk-button uk-button-default" type="button">Click</button>
                  <div uk-dropdown="mode: click">
                    <ul>
                      <li v-for="(itemM,idxM) in monthItemsSelect" :key="'idxM-'+idxM">
                          <button>{{ itemM }}</button>  
                      </li>
                    </ul>
                  </div> -->
                  <button class="uk-button uk-button-default select-dropdown-button" type="button" >Месяц {{ uiSelectMonth }}</button>
                  <div uk-dropdown="mode: click" ref="dropMonth">
                      <ul class="uk-nav uk-dropdown-nav">
                        <li class="uk-active" v-for="(itemM,idxM) in monthItemsSelect" :key="'idxM-'+idxM">
                          <button @click="selectMonth(idxM)" class="uk-button uk-button-drop uk-small-bottom-drop">{{ itemM }}</button>  
                      </li>

                      </ul>
                  </div>


              </div>
            </div>
            <div class="input_archive input_archive_year">
              <div class="select">
                <button class="uk-button uk-button-default select-dropdown-button" type="button" >Год {{ uiSelectYear }}</button>
                  <div uk-dropdown="mode: click" ref="dropYear">
                      <ul class="uk-nav uk-dropdown-nav">
                        <li class="uk-active" v-for="(itemY,idxY) in dropYear" :key="'idxY-'+idxY">
                          <button @click="selectYear(itemY)" class="uk-button uk-button-drop uk-small-bottom-drop" v-if="idxY===0">{{ itemY }}</button>  
                          <button @click="selectYear(itemY)" class="uk-button uk-button-drop uk-small-bottom-drop" v-if="idxY!==0">{{ itemY }} год</button>  
                      </li>

                      </ul>
                  </div>

              </div>
            </div>
          </div>

          <ul class="news__navigatiom__tabs uk-padding-remove">
            <li class="uk-button button_switcher-second active" ref="seltab-0"  @click="setFilterTabs(0)">
              <button class="uk-text-uppercase " >{{$t('all')}}</button>
            </li>
            <li class="uk-button button_switcher-second" v-for="(tab,index) in categories"
                :key="'tab1' + index"  @click="setFilterTabs(index+1)" :ref="'seltab-'+(index+1)"  >
              <button >{{ tab.name }}</button>
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
<!--         <div class="modal-news-filter__footer">
          <button class="uk-button uk-button-default uk-modal-close"  @click="setFilterTabs">
            <span>ПРИМЕНИТЬ</span>
          </button>
        </div> -->

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
      type: Array,
      default: () => [],
    },
    arrivalPlaces: {
      type: Array,
      default: () => [],
    },
    routesCategories: {
      type: [Array, Set],
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
      activeTab: 0,
      isComponentView: false,
      isTikets: false,
      isCatetories: false,
      isArrival: false,
      datesFilter: {
        dateFirst: null,
        dateEnd: null,
    },
    monthItemsSelect: [
      'Все' ,
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
      checkedCategoriesFilter: this.checkedCategories,
      tiketsCount: {
        adult: 1,
        child: 0,
      },
      selectedMonth: null,
      selectedYear: null,
    };
  },
  computed: { 
    dropYear(){
      let listYers = [];
      const startYear = 2009;
      const nowYear = new Date().getFullYear();
      listYers.push("Все года");
      for (let index = nowYear; index >= startYear; index--) {
        listYers.push(index);
      }
      return listYers;

  },
  uiSelectMonth(){
    const sMonth = this.selectedMonth;
    let sMonthText = '';
    if(sMonth === null){
      sMonthText = 'Все';
    }
    else{
      sMonthText = this.monthItemsSelect[sMonth];
    }
    
    return sMonthText;
  },
  uiSelectYear(){
    const sYear = this.selectedYear;
    let sYearText = '';
    if(sYear === null){
      sYearText = 'Все';
    }
    else{
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
      
        default:
        this.closeFields();
          break;
      }
      if (item  ==="modal-buy-ticket-filter") {
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
      this.$emit('checked-arrival', {
        dates: this.datesFilter,
        arrival: this.localArrivalFilter,
        categories: this.checkedCategoriesFilter,
        tikets: this.tiketsCount,
      });
/*       this.$emit('update:checked-categories', this.checkedCategoriesFilter);
      this.$emit('update:tikets-count', this.tiketsCount); */
      this.closeModal();
    },
    selectMonth(item) {
      //console.log("selectMonth",item);
      //console.log("this.$refs.dropMonth = ",this.$refs.dropMonth);
      if(item === 0){
        this.selectedMonth = null;
      }else{

            this.selectedMonth = item;
      }
      UIkit.dropdown(this.$refs.dropMonth).hide(false);
    },
    selectYear(item) {
      //console.log("selectYear",item);
      //console.log("this.$refs.dropYear = ",this.$refs.dropYear);
      if(item === "Все года"){
        this.selectedYear = null;
      }else{
        this.selectedYear = item;
      }
      
      UIkit.dropdown(this.$refs.dropYear).hide(false);
    },
    clearSelectTab() {
      //this.activeTab = 0;
      //console.log("ALL REFS = ",this.$refs);
      for (let ik = 0; ik < this.categories.length+1; ik++) {
        const element = this.$refs['seltab-'+ik].length>0 ? this.$refs['seltab-'+ik][0] : this.$refs['seltab-'+ik];
        //console.log(`REF ${ik} = `,element);
        element.classList.remove('active');
      }
      
      //this.$refs.seltab0;
    },
    setFilterTabs(selectTab) {
      UIkit.modal('#modal-category-cabin-filter').hide();
      
      this.clearSelectTab();
      const activElement = this.$refs['seltab-'+selectTab].length>0 ? this.$refs['seltab-'+selectTab][0] : this.$refs['seltab-'+selectTab];
      //console.log("Select REFS = ",activElement.classList);
      activElement.classList.add('active');
      this.activeTab = selectTab;
      if(this.isNewsFilter)
      this.$emit('checked-tabs', {
        activeTab: this.activeTab,
        activeMonth: this.selectedMonth,
        activeYear: this.selectedYear,
      });
      else{
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
      if(this.isSheduleFilter){
        UIkit.modal('#modal-buy-ticket-filter').show();
      }
      else if(this.isTabsFilter){
        UIkit.modal('#modal-category-cabin-filter').show();
      }
      else{
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
      /* console.log('destroyModal');
      console.log('this.litePickerFilter = ',this.litePickerFilter); */
      const elementLitepicker = document.querySelectorAll('.litepicker');
      // delete elementLitepicker;
      elementLitepicker.forEach(element => {
        element.remove();
        
      });
      

  
      this.litePickerFilter.destroy()
      if(this.isTabsFilter || this.isNewsFilter) {
        UIkit.modal('#modal-category-cabin-filter').$destroy(true);
      }
      else{
        UIkit.modal('#modal-buy-ticket-filter').$destroy(true);
      }
      
    },
  },
  beforeMount(){
    this.isComponentView = true;
  },
  mounted(){
    this.$nextTick(function () {
      //console.log("localArrival = ",this.localArrival)
      
      const options = {
      lang: 'ru-RU',
      element: document.querySelector('.litepicker-filter'),
      singleMode: false,
      numberOfMonths: 1,
      numberOfColumns: 1,
      minDate: new Date().setDate(new Date().getDate() - 0),
      maxDate: new Date().setDate(new Date().getDate() + 60),
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

            let dateFirst = addDays(date1.dateInstance, 1).toISOString().split('T')[0]
            let dateEnd = addDays(date2.dateInstance, 1).toISOString().split('T')[0]
            this.datesFilter.dateFirst = dateFirst;
            this.datesFilter.dateEnd = dateEnd;
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
  }
}
</script>

<style >
/* mediaquery for mobile */
@media screen and (max-width: 639px) {
  .litepicker .container__main {

justify-content: center;
}

.uk-button-drop{
  background: none;
  color: #444;
  border: 2px solid #999;
  height: 24px;
  margin-bottom: 7px;
}
.select-dropdown-button{
  background: none;
  color: #444;
  border: 2px solid #999;
  height: 40px;
  margin-bottom: 10px;
}
}



</style>