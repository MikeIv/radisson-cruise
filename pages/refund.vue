<template>
  <div>
    <client-only>
      <Header class="buy-ticket-form__header">
        <img src="~images/inners/shedule1.webp" data-src="~images/inners/shedule1.webp" class="img_cover" alt="">
        <div class="uk-container uk-position-relative">
          <div class="heading_white">
            <Breadcrumbs/>
          </div>
        </div>
      </Header>
      <section class="buy-ticket-form__container">
        <div class="uk-container">
          <div class="buy-ticket-form">
            <Breadcrumbs/>
            <div class="headline_p1">
              {{ seoData?.header || 'Возврат билетов' }}
            </div>
            <div v-if="!response && !foundedError" class="buy-ticket-form__grid">
              <form class="buy-ticket-form__info" id="payData" @submit.prevet="findTicket">
                <div class="headline_32 headline_subtitle">
                  {{ $t('refund.title') }}
                </div>
                <div class="buy-ticket-form__data">
                  <div class="buy-ticket-form__data__head">
                    <b>{{ $t('data') }}</b>
<!--                    <span v-if="onError" class="text-error">{{onError}}</span>-->
                  </div>
                  <div class="uk-flex uk-flex-wrap buy-ticket-form__data__grid">
                    <div class="uk-width-1-1">
                      <div class="uk-form-controls">
                        <label class="uk-form-label">{{$t('refund.ticket_code')}}</label>
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
                        <label class="uk-form-label">{{$t('form.label_name')}}</label>
                        <input class="uk-input buy-ticket__input"
                               type="text"
                               :placeholder="$t('form.name')"
                               name="name"
                               v-model="fullName">
                      </div>
                    </div>
                    <div class="uk-width-1-2@s">
                      <div class="uk-form-controls">
                        <label class="uk-form-label">{{ $t('form.label_tel') }}</label>
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
                        <label class="uk-form-label">{{ $t('form.label_email') }}</label>
                        <input class="uk-input buy-ticket__input"
                               type="email"
                               :placeholder="$t('form.email')"
                               required="required"
                               name=""
                               v-model="email"
                        >
                      </div>
                    </div>
                    <div class="uk-width-1-2@s">
                      <div class="uk-form-controls">
                        <button @click.prevent="findTicket" type="submit" :class="{'disabled-link': !isAgree}" class="uk-button uk-button-default button_ticket">
                          <span>{{ $t('buttons.find_ticket') }}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buy-ticket-form__agreement">
                  <div v-if="onError" class="text-error uk-margin">{{onError}}</div>
                  <div class="form_politic buy-ticket__politic">
                    <label>
                      <input v-model="isAgree" class="uk-checkbox" type="checkbox" name="check-personal" required>
                      <span class="">
                        {{$t('agree_with')}} <a :href="$config.baseSiteURL+refundDoc">{{$t('refund.condition')}}</a>
                      </span>
                    </label>
                  </div>
                </div>
                <button v-if="founded" v-show="availableRefund" type="button" :class="{'disabled-link': !isAgree}" class="uk-button uk-button-default button_ticket uk-margin-top" @click="refundTicket">
                  <span>{{ $t('buttons.return_ticket') }}</span>
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
                      {{ $t('refund.ticket_info') }}
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__main">
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        {{ $t('port') }}:
                      </div>
                      <div class="buy-ticket-form__basket__item__info">
                        «{{ ticketData.route.placeName }}»
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        {{ $t('time_date') }}::
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
                        {{$t('select_number_tickets_long')}}
                      </div>
                      <div class="buy-ticket-form__basket__item__passengers">
                        <div class="buy-ticket-form__basket__item__passenger">
                          <div>
                            {{ $t('adult') }}
                          </div>
                          <div>
                            {{ ticketData.adultQuantity }} {{$t('pax')}}
                          </div>
                          <div>
                            <b>{{ ticketData.adultPrice }} ₽</b>
                          </div>
                        </div>
                        <div class="buy-ticket-form__basket__item__passenger">
                          <div>
                            {{ $t('children') }}
                          </div>
                          <div>
                            {{ ticketData.childQuantity }}  {{$t('pax')}}
                          </div>
                          <div>
                            <b>{{ ticketData.childPrice }} ₽</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        {{ $t('data') }}
                      </div>
                      <div class="buy-ticket-form__basket__item__info buy-ticket-form__basket__item__info_data">
                        {{ availableRefundText }}
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__summ">
                        <div>
                          {{$t('amount')}}:
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
                {{ onError }}.<br> {{$t('refund.help')}}
              </div>
            </div>
            <div v-if="response" class="notification__text--wrapper">
              <div class="notification__text" v-html="text"></div>
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
import {mapActions, mapGetters} from "vuex";
const querystring = require('querystring');
export default {
  scrollToTop: true,
  name: "refund",
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
          content: "Сумма возврата до отправления яхты в рейс составит 100% от стоимости билета. В случае возврата электронного билета в течение часа после отправления яхты, сумма возврата составит 50% от стоимости билета." +
              "Возврат билета не осуществляется в том случае, если билет прошел контроль и был отсканирован при посадке на рейс. "
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
      seoData: {},
      ticketFound: '',
      ticketNotFound: '',
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
    ...mapGetters(['refundDoc']),
    totalSumCount() {
      return this.adultPriceCalc + this.childPriceCalc
    },
    dayFormat() {
      return new Date(this.ticketData.route.journeyDate).toLocaleDateString(`${this.$i18n.localeProperties.iso}`, {month: 'long', day: 'numeric'})
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
      return this.testResp ? this.ticketNotFound : this.ticketFound
    }
  },

  methods: {
    ...mapActions(['getRefundDoc']),
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

    onAcceptID (e) {
      const maskRef = e.detail;
      this.value = maskRef.value;
      //console.log('accept', maskRef.value);
    },
    onCompleteID (e) {
      const maskRef = e.detail;
      this.ticketID = maskRef.unmaskedValue
      //console.log('complete', maskRef.unmaskedValue);
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
        //console.log(data)
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
          //console.log(response.data.error)
          return onError = response.data.error
        } else {
          //console.log(response.data);
        }
      }).catch(function (error) {
        //console.log(error);
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
        //console.log(error);
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
            `${this.$config.baseURL}routes?date=${this.$route.query.day}&journey=${this.$route.query.journey}&lang=${this.$i18n.locale}`
        )
        //console.log(data)

        if(data.data.routes.length === 0) {
          window.location = '/200'
        }
      } catch(error) {
        //console.log(error)
      }
    }
  },

  mounted() {
    this.getRefundDoc();
  },

  async fetch() {
    try {
      let optionsData = await axios.get(
          `${this.$config.baseURL}faq?lang=${this.$i18n.locale}`);
      let seoDataResult = await axios.get(
          `${this.$config.baseURL}pages?ref=/refund/&lang=${this.$i18n.locale}`);
      const refundData = await axios.get(
          `${this.$config.baseURL}varyelements?code[]=ticket_refund_message&code[]=ticket_not_found&lang=${this.$i18n.locale}`)
      this.ticketFound = refundData.data.result?.ticket_refund_message?.content
      this.ticketNotFound = refundData.data.result?.ticket_not_found?.content
      this.seoData = seoDataResult.data.result
      this.options = optionsData.data.result
    } catch(error) {
      this.$nuxt.error({ statusCode: 404, message: 'Data not found' })
    }
  },
  fetchOnServer: true,
  fetchKey: 'refund',
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
