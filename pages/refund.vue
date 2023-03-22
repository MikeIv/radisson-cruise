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
              {{ $t('pages.refund') }}
            </h1>
          </div>
        </div>
      </Header>
      <section class="buy-ticket-form__container">
        <div class="uk-container">
          <div class="buy-ticket-form">
            <Breadcrumbs/>
            <div class="headline_p1">
              Возврат электронного билета
            </div>
            <div v-if="!response && !foundedError" class="buy-ticket-form__grid">
              <form class="buy-ticket-form__info" id="payData" @submit.prevet="findTicket">
                <div class="headline_32 headline_subtitle">
                  Пожалуйста, введите номер билета, контактный телефон и e-mail, указанные при покупке
                </div>
                <div class="buy-ticket-form__data">
                  <div class="buy-ticket-form__data__head">
                    <b>Данные</b>
                    <span v-if="onError" class="text-error">{{onError}}</span>
                  </div>
                  <div class="uk-flex uk-flex-wrap buy-ticket-form__data__grid">
                    <div class="uk-width-1-1">
                      <div class="uk-form-controls">
                        <label class="uk-form-label">Код билета</label>
                        <input class="uk-input buy-ticket__input" type="text"
                               placeholder="XXXX-XXXX-XXXX-XXXX"
                               required="required"
                               name="id"
                               inputmode="text"
                               :value="ticketID"
                               v-imask="maskID"
                               @accept="onAcceptID"
                               @complete="onCompleteID">
                      </div>
                    </div>
                    <div class="uk-width-1-1">
                      <div class="uk-form-controls">
                        <label class="uk-form-label">Ваше ФИО</label>
                        <input class="uk-input buy-ticket__input"
                               type="text"
                               placeholder="Введите ФИО"
                               name="name"
                               v-model="fullName">
                      </div>
                    </div>
                    <div class="uk-width-1-2@s">
                      <div class="uk-form-controls">
                        <label class="uk-form-label">Контактный телефон</label>
                        <input class="uk-input buy-ticket__input f_phone"
                               type="tel"
                               placeholder="+7 ("
                               name=""
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
                        <input class="uk-input buy-ticket__input"
                               type="email"
                               placeholder="Введите e-mail"
                               required="required"
                               name=""
                               v-model="email"
                        >
                      </div>
                    </div>
                    <div class="uk-width-1-2@s">
                      <div class="uk-form-controls">
                        <button @click.prevent="findTicket" type="submit" :class="{'disabled-link': !isAgree}" class="uk-button uk-button-default button_ticket">
                          <span>Найти билет</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buy-ticket-form__agreement">
                  <div class="form_politic buy-ticket__politic">
                    <label>
                      <input v-model="isAgree" class="uk-checkbox" type="checkbox" name="check-personal" required>
                      <span class="">
                        Согласен с <nuxt-link to="/politic/">условиями возврата билетов</nuxt-link>
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
<!--                <div v-if="founded" class="buy-ticket-form__passengers">
                  <p class="buy-ticket-form__passengers__head">
                    <b>Пожалуйста, выберите билеты к возврату
                    </b>
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
                </div>-->
                <button v-if="founded" v-show="availableRefund" type="button" :class="{'disabled-link': !isAgree}" class="uk-button uk-button-default button_ticket uk-margin-top" @click="refundTicket">
                  <span>Вернуть билет</span>
                </button>
                <div v-if="!founded" class="buy-ticket-form__footer">
                  <ul class="uk-accordion uk-margin-top accordion_vacantion" uk-accordion="multiple: true;">
                    <li v-for="(option, index) in options" :key="index">
                      <a class="uk-accordion-title" href="#">
                        <div class="accordion_vacantion__title__info">
                          <div class="accordion_vacantion__name">
                            {{ option.title }}
                          </div>
                        </div>
                        <div class="accordion_vacantion__title__arr"></div>
                      </a>
                      <div class="uk-accordion-content">
                        <p>{{ option.content }}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </form>
              <div v-if="founded" class="uk-width-auto">
                <div class="buy-ticket-form__basket">
                  <div class="buy-ticket-form__basket__head">
                    <div class="headline_22 t_semibold">
                      Информация о билете
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__main">
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        Причал:
                      </div>
                      <div class="buy-ticket-form__basket__item__info">
                        «{{ ticketData.route.placeName }}»
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
                        {{ ticketData.route.className }}
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
                            {{ ticketData.adultQuantity }} шт.
                          </div>
                          <div>
                            <b>{{ ticketData.adultPrice }} ₽</b>
                          </div>
                        </div>
                        <div class="buy-ticket-form__basket__item__passenger">
                          <div>
                            Детский
                          </div>
                          <div>
                            {{ ticketData.childQuantity }} шт.
                          </div>
                          <div>
                            <b>{{ ticketData.childPrice }} ₽</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        Данные
                      </div>
                      <div class="buy-ticket-form__basket__item__info buy-ticket-form__basket__item__info_data">
                        {{ availableRefundText }}
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__summ">
                        <div>
                          Сумма:
                        </div>
                        <div>
                          {{ ticketData.totalCost }} ₽
                        </div>
                      </div>
                    </div>
<!--                    <div class="buy-ticket-form__basket__item_checked">
                      <div class="form_politic buy-ticket__politic">
                        <label>
                          <input class="uk-checkbox" type="checkbox" name="check-info" checked="">
                          <span class="">
                            Согласие получать информацию о скидках, выгодных предложениях и <a href="" target="_blank">мероприятиях на яхтах  </a>
                          </span>
                        </label>
                      </div>
                    </div>-->
                  </div>
                </div>
              </div>
            </div>
            <div v-if="foundedError" class="notification__text--wrapper">
              <div class="notification__text">
                Извините, билет не найден. Просим Вас обратиться к нашим специалистам по телефону 8 495 228 5555 или по электронной почте info@radisson-cruise.ru
              </div>
            </div>
            <div v-if="response" class="notification__text--wrapper">
              <div class="notification__text">
                  {{ text }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </client-only>
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";
import { IMaskDirective } from "vue-imask";
import Breadcrumbs from "../components/Breadcrumbs";
const querystring = require('querystring');
export default {
  scrollToTop: true,
  name: "refund",
  components: {
    Breadcrumbs,
    Header,
  },
  directives: {
    imask: IMaskDirective
  },

  data() {
    return {
      response: false,
      testResp: false,
      options: [
        {
          title: "Как сдать электронный билет на сайте?\n",
          content: "Пожалуйста, заполните форму возврата электронного билета. Убедитесь, что данные введены корректно. Обращаем Ваше внимание, что в форме возврата должны быть указаны те контактные данные, которые использовались при покупке билета."
        },
        {
          title: "Как сдать электронный билет в кассе?\n",
          content: "Вы можете оформить возврат электронных билетов, обратившись в один из офисов Флотилии:\n" +
              "Причал  «Гостиница «Украина», набережная Тараса Шевченко, м. Киевская.\n" +
              "Причал «Парк Горького», Пушкинская набережная, м. Парк Культуры/Октябрьская\n" +
              "Вы также можете уточнить информацию у наших сотрудников по телефону +7 495 228 55 55 или по электронной почте info@radisson-cruise.ru\n"
        },
        {
          title: "Какую часть стоимости данного билета я получу?\n",
          content: "Сумма возврата до отправления яхты в рейс составит 100% от стоимости билета. В случае возврата электронного билета в течение часа после отправления яхты, сумма возврата составит 50% от стоимости билета. "
        },
        {
          title: "Я вернул(а) электронный билет, когда на карточку или счет электронного кошелька придут деньги?",
          content: "Деньги будут автоматически зачислены по реквизитам, которые были указаны во время покупки билета. Зачисление причитающихся денежных средств на банковскую карту, с помощью которой производилась оплата билета, осуществляется в сроки, установленные правилами платежных систем и банков-эмитентов банковских карт (от 7-ми до 30-ти календарных дней с момента оформления возврата). \n"
        },
      ],
      adultNewVal: null,
      adultOldVal: null,
      childNewVal: null,
      childOldVal: null,
      maskTel: {
        mask: '{+7}(000)-000-00-00',
        lazy: true,
      },
      maskID: {
        mask: '0000000000',
        placeholderChar: 'X',
        lazy: false,
      },
      routeData: [],
      fullName: '',
      email: '',
      phone: '',
      ticketID: '',
      ticketData: {},
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
      founded: false,
      foundedError: false,
      isAgree: false,
      availableRefundText: null,
      availableRefund: false,
    }
  },
  watch: {
    // whenever question changes, this function will run
    adultCount: function (newVal, oldVal) {
      this.adultNewVal = +newVal
      this.adultOldVal = +oldVal

      console.log('max', this.maxSum)

      if(this.adultNewVal < 0 ) {
        this.adultCount = 0
      }

      /*      if (this.maxSum < 0) {
              return this.adultCount = this.maxSum
            } else if (this.maxSum <= 0 && this.childCount != 0) {
              return this.adultCount
            }*/

      let currentMax = this.maxSits - this.childCount

      console.log('current', currentMax)

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

      console.log('max', this.maxSum)

      if(this.childNewVal < 0 ) {
        this.childCount = 0
      }

      let currentMax = this.maxSits - this.adultCount

      console.log('current', currentMax)

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
    totalSumCount() {
      return this.adultPriceCalc + this.childPriceCalc
    },
    dayFormat() {
      return new Date(this.ticketData.route.journeyDate).toLocaleDateString(`ru-RU`, {month: 'long', day: 'numeric'})
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

    text() {
      return this.testResp ? 'Извините, билет не найден. Просим Вас обратиться к нашим специалистам по телефону 8 495 228 5555 или по электронной почте info@radisson-cruise.ru' : 'Ваш запрос на возврат электронных билетов оформлен успешно. Пожалуйста, ожидайте зачисления средств на банковскую карту, с которой осуществлялась оплата.\n' +
          '\n' +
          '*Зачисление причитающихся денежных средств за неиспользованный электронный билет осуществляется на счет плательщика, с помощью которого производилась оплата электронного билета, в сроки, установленные правилами платежных систем (от 7-ми до 30-ти календарных дней с момента оформления возврата).\n'
    }
  },

  methods: {
    onAccept (e) {
      const maskRef = e.detail;
      this.value = maskRef.value;
      console.log('accept', maskRef.value);
    },
    onComplete (e) {
      const maskRef = e.detail;
      this.phone = maskRef.unmaskedValue
      console.log('complete', maskRef.unmaskedValue);
    },

    onAcceptID (e) {
      const maskRef = e.detail;
      this.value = maskRef.value;
      console.log('accept', maskRef.value);
    },
    onCompleteID (e) {
      const maskRef = e.detail;
      this.ticketID = maskRef.unmaskedValue
      console.log('complete', maskRef.unmaskedValue);
    },

    timeCalc() {
      let depatureTime = new Date(this.ticketData.route.depatureTime);
      let arrivalTime = new Date(this.ticketData.route.arrivalTime);
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

    async findTicket() {
      let onError
      try {
        const response = await axios({
          url: `${this.$config.baseURL}ticket`,
          /*headers: { 'Content-Type': 'application/x-www-form-urlencoded' },*/
          method: 'POST',
          /*data: querystring.stringify({
            code: this.ticketID,
            email: this.email
          })*/
          data: {
            code: this.ticketID,
            email: this.email
          },
        })

        const data = await response.data
        this.availableRefundText = data.ticket.availableRefund ? 'Билет доступен к возврату' : 'Билет не доступен к возврату'
        this.availableRefund = data.ticket.availableRefund
        this.founded = true
        this.ticketData = data.ticket
        this.onError = null
      } catch(e) {
        onError = e.response.data.error
        this.onError = onError
        this.foundedError = true
        e ? this.founded = false : this.founded = true
      }

     /* this.onError = onError
      this.payUrl = payUrl*/
    },

    async refundTicket() {
      let onError
      try {
        const response = await axios({
          url: `${this.$config.baseURL}refund`,
          /*headers: { 'Content-Type': 'application/x-www-form-urlencoded' },*/
          method: 'POST',
          /*data: querystring.stringify({
            ticket: this.ticketData.id,
            email: this.email,
            name: this.fullName,
            phone: this.phone
          })*/
          data: {
            ticket: this.ticketData.id,
            email: this.email,
            name: this.fullName,
            phone: this.phone
          }
        })

        const data = await response.data
        console.log(data)
        this.response = true
        this.onError = null
      } catch(e) {
        onError = e.response.data.error
        this.onError = onError
        e ? this.response = false : this.response = true
      }
    },

    async payTicket() {
      let payUrl
      let onError
      await axios.post(`${this.$config.baseURL}ticket`,
          {
            code: this.ticketID,
            email: this.email
          }).then(function (response) {
        if(response.data.error) {
          console.log(response.data.error)
          return onError = response.data.error
        } else {
          console.log(response.data);
        }
      }).catch(function (error) {
        console.log(error);
      });
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
        console.log('yes')
        console.log(response);
        if (response.data.error) {
          promoMsg = response.data.error
          console.log(promoMsg)
          return promoMsg
        } else {
          promoMsg = `Промокод применен`
          promoStatus = true
          console.log(promoMsg)
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
        console.log(data)

        if(data.data.routes.length === 0) {
          window.location = '/200'
        }
      } catch(error) {
        console.log(error)
      }
    }
  },
}
</script>

<style scoped>
.headline_p1 {
  color: #00c1f3;
  font-family: Montserrat;
  text-transform: none;
  margin-bottom: 20px;
}

.headline_subtitle {
  color: #000000;
  font-family: Montserrat;
  font-weight: bold;
}
.buy-ticket-form__info {
  margin-top: 0;
}
.buy-ticket-form__grid {
  margin-top: 0;
}
.buy-ticket-no-sale {
  color: #bebebe;
  font-size: 14px;
  text-decoration: line-through;
}
.uk-nav > li > a.uk-accordion-title::before {
  content: "";
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
  width: 15px;
  height: 15px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
}

.uk-nav > li.uk-open > a.uk-accordion-title::before {
  content: "-";
  text-align: center;
}

.uk-nav > li > .uk-accordion-content > ul > li > a {
  padding: 5px;
  display: block;
  color: #333;
}

.uk-nav > li > .uk-accordion-content > ul > li > a:hover {
  background-color: #f0f0f0;
}
.notification__text--wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px auto 0;
  width: 100%;
  max-width: 700px;
}

.notification__text {
  padding: 30px;
  border-radius: 20px;
  border: 20px solid #00c1f3;
}
.disabled-link {
  opacity: 0.3;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
