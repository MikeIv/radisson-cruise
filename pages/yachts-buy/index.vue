<template>
  <div>
    <client-only>
      <Header class="buy-ticket-form__header">
        <img src="~images/inners/shedule1.webp" data-src="~images/inners/shedule1.webp" class="img_cover" alt="">
        <div class="uk-container uk-position-relative">
          <div class="heading_white">
            <Breadcrumbs/>
          </div>
          <div class="heading">
            <h1 class="headline_p1">
              {{ $t('pages.tickets.flights.title') }}
            </h1>
          </div>
        </div>
      </Header>
      <section class="buy-ticket-form__container">
        <div class="uk-container">
          <div class="buy-ticket-form">
            <Breadcrumbs/>
            <div class="buy-ticket-form__grid">
              <form class="buy-ticket-form__info" id="payData" :action="payUrl">
                <div class="headline_p1">
                  Купить билет
                </div>
                <div class="buy-ticket-form__headline uk-position-relative">
                  <svg-icon class="buy-ticket-form__headline__icon" name="back-tickets"/>
                  <div class="buy-ticket-form__headline__item1">
                    <svg-icon class="icon" name="ancor-in-circle"/>
                    <div>
                  <span class="headline_32 t_semibold">
                    Причал: «{{ routeData.placeName }}»
                  </span>
                      <div class="buy-ticket-form__date uk-hidden@s">
                        <div>
                          Время и дата:
                        </div>
                        <div>
                          <b>{{ dayFormat }}, {{ timeCalc() }}</b>
                        </div>
                        <span v-if="routeData.dayTime" class="buy-ticket-shedule__time__txt">
                            Дневной
                        </span>
                        <span v-else class="buy-ticket-shedule__time__txt">
                            Вечерний
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="buy-ticket-form__date uk-visible@s">
                    <div>
                      Время и дата:
                    </div>
                    <div>
                      <b>{{ dayFormat }}, {{ timeCalc() }}</b>
                    </div>
                    <span v-if="routeData.dayTime" class="buy-ticket-shedule__time__txt">
                         Дневной
                    </span>
                    <span v-else class="buy-ticket-shedule__time__txt">
                         Вечерний
                    </span>
                  </div>
                </div>
                <div class="buy-ticket-form__hall">
                  <p>
                    <b> {{ routeData.classData?.name }} </b>
                  </p>
                  <div v-html="routeData.classData?.content"></div>
                  <div v-if="routeData.classData?.slides && routeData.classData?.slides.length > 0" class="buy-ticket-form-hall__gallery" uk-lightbox="">
                    <div v-for="img in routeData.classData.slides">
                      <a :href="$config.baseSiteURL + img" class="gallery_card uk-position-relative ">
                        <img :data-src="$config.baseSiteURL + img" alt="" class="img_cover"
                             :src="$config.baseSiteURL + img">
                        <div class="gallery_card__plus ">+</div>
                      </a>
                    </div>

                  </div>
                </div>
                <div class="buy-ticket-form__passengers">
                  <p class="buy-ticket-form__passengers__head">
                    <b>Количество пассажиров</b>
                  </p>
                  <div class="buy-ticket-form__passengers__item buy-ticket-form__passengers__item__first">
                    <div class="buy-ticket-form__passengers__item__info">
                      <div class="buy-ticket-form__passengers__item__name">
                        <b>Взрослый билет</b>
                      </div>
                      <div class="buy-ticket-form__passengers__item__summ">
                        <b>{{ routeData.adultPrice }}</b>
                      </div>
                    </div>
                    <div class="input-group plus-minus-input">
                      <div class="input-group-button">
                        <button @click="changeTicketNumberAdult('-')" type="button" class="button "
                                data-quantity="minus" data-field="quantity">
                          -
                        </button>
                      </div>
                      <input class="input-group-field" type="number" name="quantity" v-model="adultCount">
                      <div class="input-group-button">
                        <button @click="changeTicketNumberAdult('+')" type="button" class="button" data-quantity="plus"
                                data-field="quantity">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="buy-ticket-form__passengers__item">
                    <div class="buy-ticket-form__passengers__item__info">
                      <div class="buy-ticket-form__passengers__item__name">
                        <b>Детский билет</b>
                      </div>
                      <div class="buy-ticket-form__passengers__item__summ">
                        <b>{{ routeData.childPrice }}</b>
                      </div>
                    </div>
                    <div class="input-group plus-minus-input">
                      <div class="input-group-button">
                        <button @click="changeTicketNumberChild('-')" type="button" class="button "
                                data-quantity="minus" data-field="quantity2">
                          -
                        </button>
                      </div>
                      <input class="input-group-field" type="number" name="quantity2"
                             v-model="childCount">
                      <div class="input-group-button">
                        <button @click="changeTicketNumberChild('+')" type="button" class="button " data-quantity="plus"
                                data-field="quantity2">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buy-ticket-form__data">
                  <div class="buy-ticket-form__data__head">
                    <b>Данные</b>
                    <span class="text-error">{{onError}}</span>
                  </div>
                  <div class="uk-flex uk-flex-wrap buy-ticket-form__data__grid">
                    <div class="uk-width-1-1">
                      <div class="uk-form-controls">
                        <label class="uk-form-label">Ваше ФИО</label>
                        <input class="uk-input buy-ticket__input" type="text"
                               placeholder="Введите ФИО" required="required" name=""
                               v-model="fullName">
                      </div>
                    </div>
                    <div class="uk-width-1-2@s">
                      <div class="uk-form-controls">
                        <label class="uk-form-label">Контактный телефон</label>
                        <input class="uk-input buy-ticket__input f_phone" type="tel"
                               placeholder="+7 (" required="required" name=""
                               inputmode="text"
                               :value="phone"
                               v-imask="maskTel"
                               @accept="onAccept"
                               @complete="onComplete"
                        >
                      </div>
                    </div>
                    <div class="uk-width-1-2@s">
                      <div class="uk-form-controls">
                        <label class="uk-form-label">Ваш e-mail</label>
                        <input class="uk-input buy-ticket__input" type="email"
                               placeholder="Введите e-mail" required="required" name=""
                               v-model="email"
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buy-ticket-form__agreement">
                  <div class="form_politic buy-ticket__politic">
                    <label>
                      <input v-model="isAgree" class="uk-checkbox" type="checkbox" name="check-personal" required>
                      <span class="">
                        Я принимаю условия приобритения билетов и даю согласие на обработку <nuxt-link to="/politic/">персональных данных</nuxt-link>
                      </span>
                    </label>
                    <!-- <label>
                      <input class="uk-checkbox" type="checkbox" name="check-info">
                      <span class="">
                        Согласие получать информацию о скидках, выгодных предложениях и <a href="" target="_blank">мероприятиях на яхтах  </a>
                      </span>
                    </label> -->
                  </div>
                </div>
                <div class="buy-ticket-form__footer">
                  <div class="buy-ticket-form__total">
                    <span>
                      Итого:
                    </span>
                    <span>
                      {{ totalSumCount }} ₽
                    </span>
                  </div>
                  <div class="buy-ticket-form__footer__item">
                    <input class="uk-input buy-ticket__input" type="text" placeholder="Промокод" name=""
                           v-model="promoCode">
                    <button @click="promoCodeCheck" class="uk-button uk-button-default button_ticket" type="button">
                      <span>Применить</span>
                      <svg-icon class="icon uk-visible@s" name="ticket"/>
                    </button>
                    <div>{{ promoMsg }}</div>
                  </div>
                </div>
              </form>
              <div class="uk-width-auto">
                <div class="buy-ticket-form__basket">
                  <div class="buy-ticket-form__basket__head">
                    <div class="headline_22 t_semibold">
                      Корзина
                    </div>
                    <svg-icon class="icon" name="cart"/>
                  </div>
                  <div class="buy-ticket-form__basket__main">
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        Причал:
                      </div>
                      <div class="buy-ticket-form__basket__item__info">
                        «{{ routeData.placeName }}»
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        Время и дата:
                      </div>
                      <div class="buy-ticket-form__basket__item__info">
                        {{ dayFormat }}, {{ timeCalc() }}
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        {{ routeData.className }}
                      </div>
                      <div class="buy-ticket-form__basket__item__info">

                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        Количество пассажиров
                      </div>
                      <div class="buy-ticket-form__basket__item__passengers">
                        <div class="buy-ticket-form__basket__item__passenger">
                          <div>
                            Взрослый
                          </div>
                          <div>
                            {{ adultCount }} шт.
                          </div>
                          <div>
                            <b>{{ adultPriceCalc }} ₽</b>
                          </div>
                        </div>
                        <div class="buy-ticket-form__basket__item__passenger">
                          <div>
                            Детский
                          </div>
                          <div>
                            {{ childCount }} шт.
                          </div>
                          <div>
                            <b>{{ childPriceCalc }} ₽</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        Данные
                      </div>
                      <div class="buy-ticket-form__basket__item__info buy-ticket-form__basket__item__info_data">
                        {{ fullName }}<br>
                        {{ email }} <br>
                        {{ phone }}
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__summ">
                        <div>
                          Сумма:
                        </div>
                        <div v-if="promoStatus">
                          {{ totalSumWithSale }} ₽
                        </div>
                        <div v-else>
                          {{ totalSumCount }} ₽
                        </div>
                        <div v-if="promoStatus" class="buy-ticket-no-sale">
                          {{ totalSumCount }} ₽
                        </div>
                      </div>
                      <div class="buy-ticket-form__basket__sail" v-if="promoStatus">
                        Скидка по промокоду {{ saleNumber }}%
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item buy-ticket-form__basket__item__last">
<!--                      <button type="submit" form="payData">
                        <a class="uk-button uk-button-default button_ticket" :href="payUrl">
                          <span>Перейти к оплате</span>
                          <svg-icon class="icon" name="ticket"/>
                        </a>
                      </button>-->
                      <button type="button" class="uk-button uk-button-default button_ticket" :class="{'disabled-link': !isAgree}" @click="payTicket">
                        <span>Перейти к оплате</span>
                        <svg-icon class="icon" name="ticket"/>
                      </button>

                    </div>
                    <div class="buy-ticket-form__basket__item_checked">
                      <div class="form_politic buy-ticket__politic">
                        <label>
                          <input class="uk-checkbox" type="checkbox" name="check-info" checked="">
                          <span class="">
                            Согласие получать информацию о скидках, выгодных предложениях и <a href="" target="_blank">мероприятиях на яхтах  </a>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="buy-ticket-more-information">
            <div class="buy-ticket-more-information__cards">
              <div class="txt18">
                <b>
                  К оплате принимаются
                </b>
              </div>
              <img data-src="~assets/img/inners/buy_visa.png" alt="" class="uk-visible@s"
                   src="~assets/img/inners/buy_visa.png">
              <img data-src="~assets/img/inners/buy_visa_small.png" src="~assets/img/inners/buy_visa_small.png" alt="" class="uk-hidden@s">
            </div>
            <div class="buy-ticket-more-information__call">
              <svg-icon class="icon" name="blue-info"/>
              <div class="buy-ticket-more-information__call__p1">
                <b>
                  Получить дополнительную
                  информацию можно по телефону:
                </b>
              </div>
              <div class="buy-ticket-more-information__call__p2">
                <a href="tel:+74952285555">+7 (495) 228-55-55</a> с 10.00 до 21.00 час. ежедневно
              </div>
            </div>
          </div>
        </div>
      </section>
    </client-only>
  </div>
</template>

<script>
import Header from "../../components/Header";
import axios from "axios";
import { IMaskDirective } from "vue-imask";
import Breadcrumbs from "../../components/Breadcrumbs";
import route from "../../components/trolley/Route.vue";
const querystring = require('querystring');
export default {
  scrollToTop: true,
  name: "index",
  components: {
    Breadcrumbs,
    Header,
  },
  directives: {
    imask: IMaskDirective
  },

  data() {
    return {
      adultNewVal: null,
      adultOldVal: null,
      childNewVal: null,
      childOldVal: null,
      maskTel: {
        mask: '{+7}(000)-000-00-00',
        lazy: true,
      },
      routeData: [],
      fullName: '',
      email: '',
      phone: '',
      adultCount: 0,
      childCount: 0,
      childPrice: 0,
      adultPrice: 0,
      journey: this.$route.query.journey,
      adultSum: 0,
      childSum: 0,
      promoCode: '',
      promoMsg: '',
      totalSumWithSale: 0,
      promoStatus: false,
      saleNumber: 0,
      payUrl: '',
      onError: '',
      maxSits: 40,
      isAgree: false,
    }
  },
  watch: {
    // whenever question changes, this function will run
    adultCount: function (newVal, oldVal) {
      this.adultNewVal = +newVal
      this.adultOldVal = +oldVal

      //console.log('max', this.maxSum)

      if(this.adultNewVal < 0 ) {
        this.adultCount = 0
      }

/*      if (this.maxSum < 0) {
        return this.adultCount = this.maxSum
      } else if (this.maxSum <= 0 && this.childCount != 0) {
        return this.adultCount
      }*/

      let currentMax = this.maxSits - this.childCount

      //console.log('current', currentMax)

      if (this.maxSum < 0 && this.childCount != 0) {
        this.adultCount = currentMax
      }

      if (this.maxSum < 0) {
        return this.adultCount = this.maxSum
      } else if (this.maxSum >= 0) {
        return this.adultCount
      }

      /*if(this.adultOldVal >= this.maxSits) {
        this.maxSits = this.adultNewVal
      } else {
        this.maxSits += this.adultOldVal
      }
*/
      /*if(this.adultNewVal >= this.maxSits) {
        this.adultCount = this.maxSits
        this.maxSits = 0
      } else {
        this.maxSits -= this.adultNewVal
      }*/
    },


    childCount: function (newVal, oldVal) {
      this.childNewVal = +newVal
      this.childOldVal = +oldVal

      //console.log('max', this.maxSum)

      if(this.childNewVal < 0 ) {
        this.childCount = 0
      }

      let currentMax = this.maxSits - this.adultCount

      //console.log('current', currentMax)

      if (this.maxSum < 0 && this.adultCount != 0) {
        this.childCount = currentMax
      }

      if (this.maxSum < 0) {
        return this.childCount = this.maxSum
      } else if (this.maxSum >= 0) {
        return this.childCount
      }

/*      if(this.childOldVal >= this.maxSits) {
        this.maxSits = this.childNewVal
      } else {
        this.maxSits += this.childOldVal
      }

      if(this.childNewVal >= this.maxSits) {
        this.childCount = this.maxSits
        this.maxSits = 0
      } else {
        this.maxSits -= this.childNewVal
      }*/
    },
  },

  computed: {
    route() {
      return route
    },
    totalSumCount() {
      return this.adultPriceCalc + this.childPriceCalc
    },
    dayFormat() {
      return new Date(this.$route.query.day).toLocaleDateString(`ru-RU`, {month: 'long', day: 'numeric'})
    },

    adultPriceCalc() {
      return this.adultCount * this.adultPrice
    },

    childPriceCalc() {
      return this.childCount * this.childPrice
    },

    maxSum() {
      return this.maxSits - (+this.adultCount + +this.childCount)
    },
  },

  methods: {
    onAccept (e) {
      const maskRef = e.detail;
      this.value = maskRef.value;
      //console.log('accept', maskRef.value);
    },
    onComplete (e) {
      const maskRef = e.detail;
      this.phone = maskRef.unmaskedValue
      //console.log('complete', maskRef.unmaskedValue);
    },

    timeCalc() {
      let depatureTime = new Date(this.routeData.depatureTime);
      let arrivalTime = new Date(this.routeData.arrivalTime);
      let hourDepature = depatureTime.getHours().toString().length < 2 ? '0' + depatureTime.getHours() : depatureTime.getHours();
      let minDepature = depatureTime.getMinutes().toString().length < 2 ? '0' + depatureTime.getMinutes() : depatureTime.getMinutes();
      let hourArrival = arrivalTime.getHours().toString().length < 2 ? '0' + arrivalTime.getHours() : arrivalTime.getHours();
      let minArrival = arrivalTime.getMinutes().toString().length < 2 ? '0' + arrivalTime.getMinutes() : arrivalTime.getMinutes();
      return `${hourDepature}:${minDepature} - ${hourArrival}:${minArrival}`
    },

    validateAdult() {
    },

    validateChild() {
      this.promoStatus = false
      this.saleNumber = 0

      if (this.childCount > this.maxSits) {
        this.childCount = this.maxSits
        this.maxSits = 0
      } else {
        this.maxSits -= this.childCount
      }
    },

    changeTicketNumberAdult(param) {
      this.promoStatus = false
      this.saleNumber = 0
      if (param == '-') {
        if (this.adultCount <= 0) {
          return 0
        } else {
          this.adultCount--
          this.adultSum -= this.adultPrice
        }
      } else {
        if(this.adultCount == 40) {
          this.adultCount
        } else {
          if(this.maxSits == 0) {
            this.adultCount
          } else {
            this.adultCount++
            this.adultSum += this.adultPrice
          }
        }
      }
    },

    changeTicketNumberChild(param) {
      this.promoStatus = false
      this.saleNumber = 0
      if (param == '-') {
        if (this.childCount <= 0) {
          return 0
        } else {
          this.childCount--
          this.childSum -= this.childPrice
        }
      } else {
        if(this.maxSits == 0) {
          this.childSum
        } else {
          this.childCount++
          this.childSum += this.childPrice
        }
      }
    },

    async payTicket() {
      let payUrl
      let onError
      try {
        const response = await axios({
          method: 'POST',
          url: `${this.$config.baseURL}order`,
          /*data: querystring.stringify({
            journey: this.journey,
            name: this.fullName,
            email: this.email,
            phone: this.phone,
            promoCode: this.promoCode,
            seatsAdult: this.adultCount,
            seatsChild: this.childCount,
            agree: this.isAgree,
          })*/
          data: {
            journey: this.journey,
            name: this.fullName,
            email: this.email,
            phone: this.phone,
            promoCode: this.promoCode,
            seatsAdult: this.adultCount,
            seatsChild: this.childCount,
            agree: this.isAgree,
          },
        })
        if(response.data.error) {
          //console.log(response.data.error)
          onError = response.data.error
          return this.onError = response.data.error
        } else {
          //console.log(response.data.formUrl);
        }
        payUrl = response.data.formUrl
        this.payUrl = payUrl
        if (payUrl !== undefined) {
          window.location = payUrl
        }
      } catch (error) {
/*         console.log(error)
        console.log(error.data)
        console.log(error.response.data) */
        onError = error.response.data.error
      }
      this.onError = onError
      this.payUrl = payUrl
    },

    async promoCodeCheck() {
      let promoMsg
      let totalSumWithSale
      let promoStatus
      await axios.post(`${this.$config.baseURL}amount`,
        {
          journey: this.journey,
          promoCode: this.promoCode,
          seatsAdult: this.adultCount,
          seatsChild: this.childCount,
        },
        {
          /*headers: {
            'Content-Type': 'multipart/form-data',
          }*/
        },
      ).then(function (response) {
/*         console.log('yes')
        console.log(response); */
        if (response.data.error) {
          promoMsg = response.data.error
          //console.log(promoMsg)
          return promoMsg
        } else {
          promoMsg = `Промокод применен`
          promoStatus = true
          //console.log(promoMsg)
          totalSumWithSale = response.data.amount
        }
      }).catch(function (error) {
        console.log(error);
      });
      this.promoMsg = promoMsg
      this.promoStatus = promoStatus
      this.totalSumWithSale = totalSumWithSale
      if (this.totalSumWithSale > 0) {
        this.saleNumber = (this.totalSumCount - this.totalSumWithSale) / this.totalSumCount * 100
      }
    },

    async currentRoute() {
      try {
        const data = await axios.get(
          `${this.$config.baseURL}routes?date=${this.$route.query.day}&journey=${this.$route.query.journey}`
        )
        //console.log(data)

        if(data.data.routes.length === 0) {
          window.location = '/200'
        }
      } catch(error) {
        console.log(error)
      }
    }
  },

  beforeMount() {
    this.currentRoute()
  },
  mounted() {
    //console.log(this.$route.params)
  },
  middleware: [
    function({ redirect, route }) {
      if(Object.keys(route.query).length == 0) {
        redirect('/yachts/schedule')
      } else {
        //console.log('test')
      }
      /*return redirect('/yachts/schedule');*/
    },
  ],

  async fetch() {
    let data = await axios.get(
      `${this.$config.baseURL}routes?date=${this.$route.query.day}&journey=${this.$route.query.journey}`
    )
    this.routeData = data.data.routes[this.$route.query.day][0]
    this.childPrice = this.routeData.childPrice
    this.adultPrice = this.routeData.adultPrice
  },
  fetchOnServer: false,
  fetchKey: 'yacht-ticket',
}
</script>

<style scoped>
.buy-ticket-no-sale {
  color: #bebebe;
  font-size: 14px;
  text-decoration: line-through;
}
.disabled-link {
  opacity: 0.3;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
