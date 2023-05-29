<template>
  <div>
    <!--    <h1>Расписание трамвайчиков</h1>
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching mountains</p>
        <ul v-else>
          <li v-for="(mountain, index) in mountains" :key="index" @click="checkLog">
            {{ mountain.title }}
          </li>
        </ul>-->

    <!--    <section class="table-section">
          <div class="uk-overflow-auto buy-ticket-shedule_trams__overflow">
            <table>
              <tr class="buy-ticket-shedule_trams__headline__p1">
                <td  colspan="2">Гостиница «Украина»</td>
                <td  colspan="2">Киевский вокзал</td>
                <td  colspan="2">Воробъевы горы</td>
                <td  colspan="2">Парк Горького</td>
                <td  colspan="2">Зарядье</td>
                <td  colspan="2">Парк горьгоко</td>
                <td  colspan="2">Гостиница «Украина»</td>
              </tr>
              <tr class="buy-ticket-shedule_trams__headline__p2-items">
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-white">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-gray">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-white">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-gray">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-white">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-gray">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-white">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-gray">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </section>-->
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
    <section class="buy-ticket-shedule__container_trams">
      <div class="uk-container">
        <!-- НЕ УДАЛЯТЬ ЭТОТ БЛОК -->
        <!--             <div class="buy-ticket sheduletram__switchblock uk-width-1-1 uk-flex uk-flex-center">
                      <div class="uk-width-1-1 uk-flex">
                      <div class="buy-ticket__item buy-ticket__item_switch-trams">
                              <div class="switch-container">
                                <div class="switch-name"  :class="{active: !selectRoute}">Маршрут 1</div>
                                <label class="switch-round">
                                  <input type="checkbox" name="trams-select" v-model="selectRoute">
                                  <span class="switch-slider"></span>
                                </label>
                                <div class="switch-name " :class="{active: selectRoute}">Маршрут 2</div>
                              </div>
                            </div>
                            <button class="uk-button uk-button-default button_ticket"  @click.prevent="filterRoutes">
                              <span>НАЙТИ РЕЙС</span>
                              <svg-icon name="looking_glass" class="icon" />
                            </button>
                      </div>

                    </div> -->
        <!-- НЕ УДАЛЯТЬ ЭТОТ БЛОК -->
        <div class="uk-width-1-1 uk-flex uk-flex-center">
          <div :class="widthContentTable">
            <div class="buy-ticket-shedule_trams-info__grid uk-flex uk-flex-wrap">
                {{ tableInfos.upname }}
            </div>
          </div>
        </div>
        <div class="uk-flex uk-flex-center">
          <div class="uk-flex uk-flex-between table-shedule head-table-time" :class="widthContentTable">
            <div class="text-time uk-flex uk-width-1-1"
                 :class="{'uk-flex-column uk-text-center': isMobile && viewportWidth<640}">
              <div class="head-date  uk-width-1-6@l uk-width-1-1@s ">
                {{ dayNow }}
              </div>
              <div class="head-title  uk-width-4-6@l uk-width-1-1@s uk-text-center">
                {{ tableInfos?.name }} (Понедельник-среда)
              </div>
            </div>
          </div>
        </div>

        <div class="uk-flex uk-flex-center uk-flex-column uk-margin-auto" :class="widthContentTable">
          <div class="uk-flex uk-flex-center table-shedule">
            <div class="uk-width-1-1" v-for="(headItem, idxh1) in tableHeads" :key="'idh1-'+idxh1">
              <div class="uk-width-1-1">
                <div class="name-station-text uk-width-1-1 ">
                  {{ headItem?.name }}
                </div>
                <!--                  <div class="uk-flex uk-child-width-auto uk-flex-between child-two-column">
                                    <div class="inout-text">Приб.</div>
                                    <div class="inout-text">Отпр.</div>
                                  </div>-->
              </div>
            </div>
          </div>
          <div class="uk-flex uk-flex-between table-shedule">
            <div v-for="(rowItem, idxr1) in tableFlightsPart1[0]?.points" class="uk-flex uk-flex-between uk-width-1-1">
              <div class="inout-text" v-show="rowItem?.arrival!==null">Приб.</div>
              <div class="inout-text" v-show="rowItem?.departure!==null">Отпр.</div>
            </div>
          </div>
        </div>

        <div class="uk-flex uk-flex-center uk-flex-column uk-width-1-1 item-center">
          <div class="uk-flex uk-flex-center table-shedule table-row " :class="widthContentTable"
               v-for="(rowItem, idxr1) in tableFlightsPart1" :key="'idr1-'+idxr1">
            <div class="uk-width-1-1" v-for="(rowItem, idxp1) in rowItem?.points" :key="'idp1-'+idxp1">
              <div class="uk-width-1-1">
                <div class="uk-flex uk-child-width-auto uk-flex-between child-two-column">
                  <div class="inout-text" v-show="rowItem?.arrival!==null">{{ rowItem?.arrival }}</div>
                  <div class="inout-text" v-show="rowItem?.departure!==null">{{ rowItem?.departure }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="uk-flex uk-flex-center">
          <div class="uk-flex uk-flex-between table-shedule head-table-time " :class="widthContentTable">
            <div class="text-time uk-flex uk-width-1-1 "
                 :class="{'uk-flex-column uk-text-center': isMobile && viewportWidth<640}">
              <div class="head-date uk-width-1-6@l uk-width-1-1@s">
                {{ dayNow }}
              </div>
              <div class="head-title uk-width-4-6@l uk-width-1-1@s uk-text-center">
                {{ tableInfos?.name }} (Четверг-воскресенье)
              </div>

            </div>
          </div>
        </div>

        <div class="uk-flex uk-flex-center uk-flex-column uk-margin-auto" :class="widthContentTable">
          <div class="uk-flex uk-flex-center table-shedule">
            <div class="uk-width-1-1  " v-for="(headItem, idxh2) in tableHeads" :key="'idh2-'+idxh2">
              <div class="uk-width-1-1">
                <div class="name-station-text uk-width-1-1 ">
                  {{ headItem?.name }}
                </div>
                <!--                  <div class="uk-flex uk-child-width-auto uk-flex-between child-two-column">
                                    <div class="inout-text">Приб. </div>
                                    <div class="inout-text">Отпр.</div>
                                  </div>-->
              </div>
            </div>
          </div>
          <div class="uk-flex uk-flex-between table-shedule">
            <div v-for="(rowItem, idxr1) in tableFlightsPart1[0]?.points" class="uk-flex uk-flex-between uk-width-1-1">
              <div class="inout-text" v-show="rowItem?.arrival !==null">Приб.</div>
              <div class="inout-text" v-show="rowItem?.departure !==null">Отпр.</div>
            </div>
          </div>
        </div>

        <div class="uk-flex uk-flex-center uk-flex-column uk-width-1-1 item-center">
          <div class="uk-flex uk-flex-center table-shedule table-row " :class="widthContentTable"
               v-for="(rowItem, idxr2) in tableFlightsPart2" :key="'idr2-'+idxr2">
            <div class="uk-width-1-1  " v-for="(rowItem, idxp2) in rowItem?.points" :key="'idp2-'+idxp2">
              <div class="uk-width-1-1">

                <div class="uk-flex uk-child-width-auto uk-flex-between child-two-column">
                  <div class="inout-text" v-show="rowItem?.arrival!==null">{{ rowItem?.arrival }}</div>
                  <div class="inout-text" v-show="rowItem?.departure!==null">{{ rowItem?.departure }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="uk-width-1-1 uk-flex uk-flex-center">
          <div :class="widthContentTable">
            <div class="buy-ticket-shedule_trams-info__grid uk-flex uk-flex-wrap ">
              <div>
                <div class="buy-ticket-shedule_trams__info">
                  <span>Продолжительность рейса:</span>
                  <span>50 мин</span>
                </div>
              </div>
              <div>
                <div class="buy-ticket-shedule_trams__info">
                  <span>Стоянка на конечном причале:</span>
                  <span>10 мин.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header";
import TableItem from "../../components/trolley/schedule/TableItem";
import axios from 'axios'
import Breadcrumbs from "../../components/Breadcrumbs";
import BuyTicketBtn from "../../components/BuyTicketBtn";

export default {
  name: "schedule",
  components: {BuyTicketBtn, Breadcrumbs, TableItem, Header},
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
      isViewMobile: false,
      isActive: false,
      viewportHeight: null,
      viewportWidth: null,
      tableHeads: [],
      tableInfos: [],
      tablePoints: [],
      tableFlights: [],
      tableFlightsPart1: [],
      tableFlightsPart2: [],
      selectRoute: false,
      widthContetntTable: {
        width2item: 'width: 40%;',
        width3item: 'width: 50%;',
        width4item: 'width: 60%;',
        width5item: 'width: 70%;',
        width6item: 'width: 80%;',
        width7item: 'width: 100%;',
      },
      seoData: {},
    }
  },
  computed: {
    dayNow() {
      const formatedDayNow = new Date().toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      return formatedDayNow;
    },
    widthContentTable() {
      switch (this.tableHeads.length) {
        case 2:
          if (this.isMobile && this.viewportWidth < 640) {
            console.log("width7item");
            return "width7item";
          } else {
            console.log("width2item");
            return "width2item";
          }
        case 3:
          if (this.isMobile && this.viewportWidth < 640) {
            console.log("width7item");
            return "width7item";
          } else {
            console.log("width3item");
            return "width3item";
          }
        case 4:
          if (this.isMobile && this.viewportWidth < 640) {
            console.log("width7item");
            return "width7item";
          } else {
            console.log("width4item");
            return "width4item";
          }
        case 5:
          if (this.isMobile && this.viewportWidth < 640) {
            console.log("width7item");
            return "width7item";
          } else {
            console.log("width5item");
            return "width5item";
          }
        case 6:
          if (this.isMobile && this.viewportWidth < 640) {
            console.log("width7item");
            return "width7item";
          } else {
            console.log("width2item");
            return "width2item";
          }
        case 7:
          console.log("width7item");
          return "width7item";


        default:
          //console.log("default");
          return "width7item";
      }

    }
  },
  methods: {
    filterRoutes() {
      this.isActive = !this.selectRoute

    },
    switchRoutes() {
      this.isActive = !this.isActive
    },
    isMobile() {
      const userAgent = navigator?.userAgent;
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    }
  },
  mounted() {
    this.isViewMobile = this.isMobile();
    this.viewportHeight = window.innerHeight;
    this.viewportWidth = window.innerWidth;
  },
  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/trams/schedule/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let trolleyRoutes = await axios.get(
        `${this.$config.baseURL}tramschedule?lang=${this.$i18n.locale}`,
    )
    this.tableInfos = (trolleyRoutes.data.result['0'])
    this.tableHeads = this.tableInfos.points;
    this.tableFlights = this.tableInfos.flights;
    this.tableFlightsPart1 = this.tableInfos.flights.filter((item) => item.weekdays === "1,2,3,4,5,6,7");
    this.tableFlightsPart2 = this.tableInfos.flights.filter((item) => item.weekdays === "4,5,6,7");
  },
  fetchOnServer: false,
  fetchKey: 'trams-schedule',
}
</script>

<style scoped>
/*.buy-ticket-shedule_trams__headline__p1 {
  font-size: 12px;
  font-weight: 600;
}
.buy-ticket-shedule_trams__headline__p1 td{
  width: 12.5%;
  min-width: 12.5%;
}

.buy-ticket-shedule_trams__headline__p2-items {
  font-size: 10px;
  font-weight: 600;
  color: #858585;
}
.buy-ticket-shedule_trams__headline__p2-items td {
  padding-top:20px;
  padding-bottom: 35px;
}

.buy-ticket-shedule_trams__headline__p2-items td:nth-child(odd) {
  padding-left:0;
}

.buy-ticket-shedule_trams__headline__p2-items td:nth-child(even) {
  padding-left:13px;
}


.buy-ticket-shedule_trams__info td{
  padding: 11px 0 11px;
  font-size: 12px;
  font-weight: 600;
}

.buy-ticket-shedule_trams__info td:nth-child(even){
  padding: 11px 0 11px 13px;
}

.buy-ticket-shedule_trams__info td:first-child{
  padding: 11px 0 11px 13px;
}

.buy-ticket-shedule_trams__info td:last-child{
  padding-left: 50px;
}

.button_ticket {
  height: 35px;
  font-size: 10px;
  min-width: 166px;
  padding: 0;
}

.bg-gray {
  background: #f4f5f6;
}
.bg-white {
  background-color: #fff;
}

table {
  border-collapse: collapse;
}
.table-section {
  margin: 100px 0 130px;
}

.buy-ticket-shedule__container_trams .buy-ticket {
  max-width: 250px;
}*/
.buy-ticket-shedule__container_trams .buy-ticket {
  margin-top: -36px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.name-station-text {
  font-weight: 600;
  color: #00c1f3;
  text-transform: capitalize;
  font-size: 12px;
  text-align: center;
  background-color: #FFFFFF;
  padding-top: 20px;
  padding-bottom: 20px;
}

.inout-text {
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  color: #000000;
  text-align: center;
  padding: 10px 4px;
}

.table-shedule {
  background-color: #e7f0f7;

}

.body-table {
  margin-top: 0;
}

.head-table-time {
  background-color: #3b4790;
  color: #fff;
  font-size: 14px;
  padding: 10.5px 45px;
  font-weight: 700;
  margin-top: 20px;
}

.buy-ticket-shedule_trams-info__grid {
  margin-left: 0px;
  font-size: 12px;
  font-weight: 600;
  margin-top: 20px;
  column-gap: 56px;
  row-gap: 20px;
}

.buy-ticket-shedule_trams-info__grid span:nth-child(1) {
  color: #00c1f3;
}


.table-row:nth-child(odd):hover {
  background-color: #eff4f8;
}

.table-row:nth-child(odd) {

  background-color: #fff;
}

.table-row:nth-child(even):hover {
  background-color: #eff4f8;
}

.table-row:nth-child(even) {
  background-color: #e7f0f7;
}

.table-row .inout-text {
  font-size: 14px;
  font-weight: 400;

}

.table-row {
  cursor: default;
  padding: 10px 0;
  border-bottom: 1px solid #e7e7e7;
}

.item-center {
  align-items: center;
}

.column-width {
  width: auto;
  min-width: 200px;
}

.child-two-column {
  padding: 0 30px;
}

.width2item {
  width: 40%;
}

.width3item {
  width: 50%;
}

.width4item {
  width: 60%;
}

.width5item {
  width: 70%;
}

.width6item {
  width: 80%;
}

.width7item {
  width: 100%;
}

@media (min-width: 320px) {
  .child-two-column {
    padding: 0 5px;
  }
}
</style>

