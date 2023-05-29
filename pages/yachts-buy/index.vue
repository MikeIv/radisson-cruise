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
              {{ seoData?.header }}
            </h1>
          </div>
        </div>
      </Header>
      <section v-if="routeData.hasGone">
        <div class="uk-container uk-text-center uk-padding-large">
          этот рейс уже отправился, на него уже нельзя оформить билет
        </div>
      </section>
      <section v-else class="buy-ticket-form__container">
        <div class="uk-container">
          <div class="buy-ticket-form">
            <Breadcrumbs/>
            <div class="buy-ticket-form__grid">
              <form ref="form" class="buy-ticket-form__info" id="payData" @submit.prevent="payTicket">
                <div class="headline_p1">
                  {{ seoData?.header }}
                </div>
                <div class="buy-ticket-form__headline uk-position-relative">
                  <svg-icon class="buy-ticket-form__headline__icon" name="back-tickets"/>
                  <div class="buy-ticket-form__headline__item1">
                    <svg-icon class="icon" name="ancor-in-circle"/>
                    <div>
                  <span class="headline_32 t_semibold">
                    {{ $t('port') }}: «{{ routeData.placeName }}»
                  </span>
                      <div class="buy-ticket-form__date uk-hidden@s">
                        <div>
                          Время и дата:
                        </div>
                        <div>
<!--                          <b>{{ journeyDate }}, {{ timeCalc }}</b>-->
                          <b>{{ routeData.showTime }}</b>
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
<!--                      <b>{{ journeyDate }}, {{ timeCalc }}</b>-->
                      <b>{{ routeData.showTime }}</b>
                    </div>
                    <span v-if="routeData.dayTime" class="buy-ticket-shedule__time__txt">
                         Дневной
                    </span>
                    <span v-else class="buy-ticket-shedule__time__txt">
                         Вечерний
                    </span>
                  </div>
                </div>
                <div class="buy-ticket-form__passengers">
<!--                  <p class="buy-ticket-form__passengers__head">
                    <b>Количество пассажиров</b>
                  </p>-->
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
                      <input @change="adultCount <= 1 ? adultCount = 1 : adultCount" class="input-group-field" type="number" name="quantity" v-model.number="adultCount" min="1">
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
<!--                  <div class="buy-ticket-form__data__head">
                    <b>Данные</b>
                    <span class="text-error">{{onError}}</span>
                  </div>-->
                  <div class="uk-flex uk-flex-wrap buy-ticket-form__data__grid">
                    <div class="uk-width-1-1">
                      <div class="uk-form-controls">
<!--                        <label class="uk-form-label">Ваше ФИО</label>-->
                        <input class="uk-input buy-ticket__input"
                               :class="{'uk-form-danger': errors.name.isError}"
                               type="text"
                               placeholder="Введите ФИО"
                               required="required"
                               name=""
                               v-model="form.name"
                               @change="ym(22731748,'reachGoal','kontaky_bilet_23')"
                        >
                        
                      </div>
                    </div>
                    <div class="uk-width-1-2@s">
                      <div class="uk-form-controls">
<!--                        <label class="uk-form-label">Контактный телефон</label>-->
                        <input class="uk-input buy-ticket__input f_phone"
                               :class="{'uk-form-danger': errors.phone.isError}"
                               type="tel"
                               placeholder="+7 ("
                               required="required"
                               name=""
                               inputmode="text"
                               v-model="form.phone"
                               v-imask="maskTel"
                               @accept="onAccept"
                               @complete="onComplete"
                               @change="ym(22731748,'reachGoal','kontaky_bilet_23')"
                        >
                        <div class="uk-form-danger uk-margin-top" v-if="errors.phone.isError">{{ errors.phone.msg }}</div>
                      </div>
                    </div>
                    <div class="uk-width-1-2@s">
                      <div class="uk-form-controls">
<!--                        <label class="uk-form-label">Ваш e-mail</label>-->
                        <input class="uk-input buy-ticket__input"
                               type="email"
                               placeholder="Введите e-mail"
                               required="required"
                               name=""
                               :class="{'uk-form-danger': errors.email.isErrorInput || errors.email.isErrorSubmit}"
                               v-model="form.email"
                               @change="ym(22731748,'reachGoal','kontaky_bilet_23')"
                        >
                        <div class="uk-form-danger uk-margin-top" v-if="errors.email.isErrorInput">{{ errors.email.msgOnInput }}</div>
                        <div class="uk-form-danger uk-margin-top" v-if="errors.email.isErrorSubmit">{{ errors.email.msgOnSubmit }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buy-ticket-form__agreement">
                  <div class="form_politic buy-ticket__politic">
                    <label>
                      <input
                          v-model="form.agree"
                          class="uk-checkbox"
                          :class="{'uk-form-danger': errors.agree.isError}"
                          type="checkbox"
                          name="check-personal"
                          required
                      >
                      <span class="">
                        Я принимаю условия приобритения билетов и даю согласие на обработку <nuxt-link to="/politic/">персональных данных</nuxt-link>
                      </span>
                    </label>
                    <span class="uk-form-danger uk-margin-top uk-display-block" v-if="errors.agree.isError">{{ errors.agree.msg }}</span>
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
                  <div v-if="routeData.availablePromo" class="buy-ticket-form__footer__item">
                    <input class="uk-input buy-ticket__input" type="text" placeholder="Промокод" name=""
                           v-model="promoCode">
                    <button @click="promoCodeCheck" class="uk-button uk-button-default button_ticket" type="button">
                      <span>Применить</span>
                      <svg-icon class="icon uk-visible@s" name="ticket"/>
                    </button>
                    <div>{{ promoMsg }}</div>
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
                        <img :data-src="`${$config.imageURL}?size=150&format=webp&src=${$config.baseSiteURL}` + img" alt="" class="img_cover"
                             :src="`${$config.imageURL}?size=150&format=webp&src=${$config.baseSiteURL}` + img">
                        <div class="gallery_card__plus ">+</div>
                      </a>
                    </div>

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
<!--                        {{ journeyDate }}, {{ timeCalc }}-->
                        {{ routeData.showTime }}
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        {{ routeData.journeySubType }}
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
                    <div v-if="routeData.classData?.ticketinfo" class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        Информация
                      </div>
                      <div v-html="routeData.classData?.ticketinfo" class="buy-ticket-form__basket__item__info buy-ticket-form__basket__item__info_data">
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
                      
                      <div class="error-block">
                        <!-- <div class="uk-form-danger uk-margin-top" v-show="true"> Ошибка. Исправьте ошибку для продолжения покупки</div> -->
                         <div class="uk-form-danger uk-margin-top" v-if="errors.name.isError">{{ errors.name.msg }}</div>
                         <span class="text-error">{{onError}}</span>
                      </div>
                     
                      <button @click="ym(22731748,'reachGoal','oplata__bileta_2023')" type="submit" form="payData" class="uk-button uk-button-default button_ticket" :class="{'disabled-link': !valid || isLoading }">
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
import moment from "moment";
const querystring = require('querystring');
export default {
  scrollToTop: true,
  name: "yachts-buy",
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
      adultNewVal: null,
      adultOldVal: null,
      childNewVal: null,
      childOldVal: null,
      maskTel: {
        mask: '{+7}(900)-000-00-00',
        lazy: true,
      },
      routeData: [],
      fullName: '',
      email: '',
      phone: '',
      adultCount: 1,
      childCount: 0,
      childPrice: 0,
      adultPrice: 0,
      journey: this.$route.query.journey,
      journeyDate: null,
      adultSum: 0,
      childSum: 0,
      promoCode: '',
      promoMsg: '',
      totalSumWithSale: 0,
      promoStatus: false,
      saleNumber: 0,
      payUrl: '',
      onError: '',
      isAgree: false,
      rowPhone: '',
      form: {
        journey: this.$route.query.journey,
        name: '',
        email: '',
        phone: '',
        promoCode: null,
        seatsAdult: 0,
        seatsChild: 0,
        agree: false,
      },
      errors: {
        name: {
          isError: false,
          msg: 'Введите имя'
        },
        phone: {
          isError: false,
          msg: 'Введите номер телефона'
        },
        email: {
          isErrorInput: false,
          isErrorSubmit: false,
          msgOnInput: 'Введите e-mail',
          msgOnSubmit: 'Введите корректный e-mail со знаком @'
        },
        agree: {
          isError: false,
          msg: 'Примите условия соглашения'
        },
      },
      valid: false,
      isLoading: false,
      seoData: {},
    }
  },
  watch: {
    // whenever question changes, this function will run
    adultCount: function (newVal, oldVal) {
      this.adultNewVal = +newVal
      this.adultOldVal = +oldVal

      if(this.adultNewVal < 0 ) {
        this.adultCount = 0
      }

      let currentMax = this.maxSits - this.childCount

      if (this.maxSum < 0 && this.childCount != 0) {
        this.adultCount = currentMax
      }

      if (this.maxSum < 0) {
        return this.adultCount = this.maxSum
      } else if (this.maxSum >= 0) {
        return this.adultCount
      }
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

    },

    '$route.query': '$fetch',

    'form.name': function (val) {
      val.length > 0 ? this.errors.name.isError = false : this.errors.name.isError = true;
    },
    'form.phone': function (val) {
      val.length > 0 ? this.errors.phone.isError = false : this.errors.phone.isError = true
    },
    'form.email': function (val) {
      val.length > 0 ? this.errors.email.isErrorInput = false : this.errors.email.isErrorInput = true
    },
    'form.agree': function (val) {
      val ? this.errors.agree.isError = false : this.errors.agree.isError = true
    },

    form: {
      handler: function (val) {
        this.valid = val.name.length > 0 && val.phone.length > 0 && val.email.length > 0 && val.agree
      },
      deep: true
    }
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

    maxSits() {
      return this.routeData.freeSeats > 40 ? 40 : this.routeData.freeSeats
    },

    timeCalc() {
      if (this.routeData.depatureTime && this.routeData.arrivalTime) {
        let depatureTime = new Date(this.routeData.depatureTime);
        let arrivalTime = new Date(this.routeData.arrivalTime);
        let hourDepature = depatureTime.getHours().toString().length < 2 ? '0' + depatureTime.getHours() : depatureTime.getHours();
        let minDepature = depatureTime.getMinutes().toString().length < 2 ? '0' + depatureTime.getMinutes() : depatureTime.getMinutes();
        let hourArrival = arrivalTime.getHours().toString().length < 2 ? '0' + arrivalTime.getHours() : arrivalTime.getHours();
        let minArrival = arrivalTime.getMinutes().toString().length < 2 ? '0' + arrivalTime.getMinutes() : arrivalTime.getMinutes();
        return isNaN(hourDepature) ? `Ошибка данных` : `${hourDepature}:${minDepature} - ${hourArrival}:${minArrival}`
      } else {
        return 'Данные времени отсутствуют'
      }
    },


  },

  methods: {
    onAccept (e) {
      //console.log("onAccept ",e);
      const maskRef = e.detail;
      this.value = maskRef.value;
      this.rowPhone = maskRef.value;
/*       if(maskRef.value.length < 17 && maskRef.value[3]!=='9'){
        this.errors.phone.isError = true
        this.errors.phone.msg = 'Введите номер телефона в формате +7 (9XX) XXX-XX-XX'
      } */
      //console.log("onAccept length -> ",maskRef.value.length);
    },
    onComplete (e) {
      
      const maskRef = e.detail;
      this.form.phone = this.rowPhone;
      if(maskRef.value[3]!=='9'){
        this.errors.phone.isError = true
        this.errors.phone.msg = 'Введите номер телефона в формате \n +7 (9XX) XXX-XX-XX'
      }
/*       console.log("onComplete maskRef -> ",maskRef);
      console.log("onComplete 9 -> ",maskRef.value[3]);
      console.log("onComplete length -> ",maskRef.value.length);
      console.log("onComplete",this.form.phone); */
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
        if (this.adultCount <= 1) {
          return 1
        } else {
          this.adultCount--
          this.adultSum -= this.adultPrice
        }
      } else {
        if(this.adultCount == 40) {
          this.adultCount
        } else {
          if (this.maxSits == 0) {
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

      this.form.seatsAdult = this.adultCount;
      this.form.seatsChild = this.childCount;
      //console.log("Send Phone -> ",this.rowPhone.replace(/[^+\d]/g, ''));
      this.form.phone = this.rowPhone.replace(/[^+\d]/g, '');
      try {
        this.isLoading = true
        const response = await axios({
          method: 'POST',
          url: `${this.$config.baseURL}order`,
          /*data: querystring.stringify(this.form)*/
          data: this.form
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
        this.isLoading = false
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
          `${this.$config.baseURL}routes?date=${this.$route.query.day}&journey=${this.$route.query.journey}&lang=${this.$i18n.locale}`
        )
        //console.log(data)

        if(data.data.routes.length === 0) {
          window.location = '/200'
        }
      } catch(error) {
        console.log(error)
      }
    },
    isValidDate(d) {
      return d instanceof Date && !isNaN(d);
    },
    timeCalcDate(dptrTime, arvTime) {
      if(dptrTime === null || arvTime === null) return;
      let formattedDeparture = moment(dptrTime).format('HH:mm')
      let formattedArrival = moment(arvTime).format('HH:mm')
      return `${formattedDeparture} - ${formattedArrival}`
    },
    sendYandexMetrikaEvent(eventName) {
      console.log(this.$yandexMetrika)
      this.$yandexMetrika.reachGoal(eventName);
    },
  },

  mounted() {
    //console.log(this.$route.params)
  },
  middleware: [
    function({ redirect, route }) {
      if(Object.keys(route.query).length == 0) {
        redirect('/yachts/schedule/')
      } else {
        //console.log('test')
      }
      /*return redirect('/yachts/schedule');*/
    },
  ],

  async fetch() {
    try {
      let seoDataResult = await axios.get(
          `${this.$config.baseURL}pages?ref=/yachts-buy/&lang=${this.$i18n.locale}`);
      this.seoData = seoDataResult.data.result
      let data = await axios.get(
          `${this.$config.baseURL}route?journey=${this.$route.query.journey}&lang=${this.$i18n.locale}`
      )
      this.routeData = data.data.result
      this.journeyDate = new Date(this.routeData.depatureTime).toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
      })
      this.childPrice = this.routeData.childPrice
      this.adultPrice = this.routeData.adultPrice
      this.isValidDate(new Date(this.routeData.depatureTime))
          ? this.journeyDate = new Date(this.routeData.depatureTime).toLocaleString('ru', {month: 'long', day: 'numeric'})
          : 'Неверная дата'
    } catch(error) {
      this.$nuxt.error({ statusCode: 404, message: 'Data not found' })
    }
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
.uk-form-danger, .uk-form-danger:focus {
  border-color: #ff0000;
  color: #ff0000;
}
.error-block{
  min-height: 55px;
  width: 100%;
}
</style>
