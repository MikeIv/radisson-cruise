<template>
  <div>
    <client-only>
      <Header class="buy-ticket-form__header">
        <img src="~images/inners/shedule1.webp" data-src="~images/inners/shedule1.webp" class="img_cover" alt="">
      </Header>
      <section v-if="routeData.hasGone">
        <div class="uk-container uk-text-center uk-padding-large">
          {{ $t('schedule_gone') }}
        </div>
      </section>
      <section v-else class="buy-ticket-form__container">
        <div class="uk-container">
          <div class="buy-ticket-form">
            <div class="buy-ticket-form__grid">
              <form ref="form" class="buy-ticket-form__info" id="payData" @submit.prevent="payTicket">
                <div class="headline_p1">
                  {{ seoData?.header }}
                </div>
                <div class="buy-ticket-form__passengers">
                  <div class="buy-ticket-form__passengers__item buy-ticket-form__passengers__item__first">
                    <div class="buy-ticket-form__passengers__item__info">
                      <div class="buy-ticket-form__passengers__item__name">
                        <b>{{$t('adult')}} {{$t('ticket')}}</b>
                      </div>
                      <div class="buy-ticket-form__passengers__item__summ">
                        <b>{{ routeData.adultPrice }} &#8381;</b>
                      </div>
                    </div>
                    <div class="input-group plus-minus-input">
                      <div class="input-group-button">
                        <button @click="changeTicketNumberAdult('-')" type="button" class="button "
                                data-quantity="minus" data-field="quantity">
                          -
                        </button>
                      </div>
                      <input @change="routeData.availablePromo ? adultCount <= 1 ? adultCount = 1 : adultCount : adultCount <= 0 ? adultCount = 0 : adultCount" class="input-group-field" type="number" name="quantity" v-model.number="adultCount" min="0">
                      <div class="input-group-button">
                        <button @click="changeTicketNumberAdult('+')" type="button" class="button" data-quantity="plus"
                                data-field="quantity">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div v-if="routeData.availableChild" class="buy-ticket-form__passengers__item children_item">
                    <div class="buy-ticket-form__passengers__item__info">
                      <div class="buy-ticket-form__passengers__item__name">
                        <b>{{$t('children')}} {{$t('ticket')}}</b>
                      </div>
                      <div class="buy-ticket-form__passengers__item__summ">
                        <b>{{ routeData.childPrice }} &#8381;</b>
                        <button type="button" @click="openChildModal">
                          <svg-icon
                              name="svg-info"
                              class="icon"
                              width="18"
                              height="18"
                          />
                        </button>
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
                  <span class="children_subinfo">{{ $t('children_notation') }}</span>
                </div>
                <div class="buy-ticket-form__data">
                  <div class="uk-flex uk-flex-wrap buy-ticket-form__data__grid">
                    <div class="uk-width-1-1">
                      <div class="uk-form-controls">
                        <input class="uk-input buy-ticket__input"
                               :class="{'uk-form-danger': errors.name.isError}"
                               type="text"
                               :placeholder="$t('form.name')"
                               required="required"
                               name=""
                               v-model="form.name"
                               @change="sendYandexMetrikaEvent('kontaky_bilet_23')"
                        >
                        
                      </div>
                    </div>
                    <div class="uk-width-1-2@s">
                      <div class="uk-form-controls">
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
                               @change="sendYandexMetrikaEvent('kontaky_bilet_23')"
                        >
                        <div class="uk-form-danger uk-margin-top" v-if="errors.phone.isError">{{ $t(errors.phone.msg) }}</div>
                      </div>
                    </div>
                    <div class="uk-width-1-2@s">
                      <div class="uk-form-controls">
                        <input class="uk-input buy-ticket__input"
                               type="email"
                               :placeholder="$t('form.email')"
                               required="required"
                               name=""
                               :class="{'uk-form-danger': errors.email.isErrorInput || errors.email.isErrorSubmit}"
                               v-model="form.email"
                               @change="sendYandexMetrikaEvent('kontaky_bilet_23')"
                        >
                        <div class="uk-form-danger uk-margin-top" v-if="errors.email.isErrorInput">{{ $t(errors.email.msgOnInput) }}</div>
                        <div class="uk-form-danger uk-margin-top" v-if="errors.email.isErrorSubmit">{{ $t(errors.email.msgOnSubmit) }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buy-ticket-form__agreement">
                  <div class="form_politic buy-ticket__politic">
                    <label>
                      <input
                          v-model="agrees.rules"
                          class="uk-checkbox"
                          :class="{'uk-form-danger': errors.agree.isError}"
                          type="checkbox"
                          name="check-personal"
                          required
                          @change="sendYandexMetrikaEvent('kontaky_bilet_23')"
                      >
                      <span class="">
                        {{ $t('yacht_agree') }} <a :href="$config.baseSiteURL+refundDoc" target="_blank">{{ $t('links.rules') }} </a>
                      </span>
                    </label>
                    <span class="uk-form-danger uk-margin-top uk-display-block" v-if="errors.agree.isError">{{ $t(errors.agree.msg) }}</span>
                    <!-- <label>
                      <input class="uk-checkbox" type="checkbox" name="check-info">
                      <span class="">
                        Согласие получать информацию о скидках, выгодных предложениях и <a href="" target="_blank">мероприятиях на яхтах  </a>
                      </span>
                    </label> -->
                  </div>
                </div>
                <div class="buy-ticket-form__basket__item_checked">
                  <div class="form_politic buy-ticket__politic">
                    <label>
                      <input class="uk-checkbox"
                             type="checkbox"
                             name="check-info"
                             v-model="agrees.politic"
                             :class="{'uk-form-danger': errors.politic.isError}"
                      >
                      <span class="">
                        {{$t('im_accept')}} <nuxt-link to="/politic/">{{$t('links.politic')}}</nuxt-link>
                      </span>
                    </label>
                    <span class="uk-form-danger uk-margin-top uk-display-block" v-if="errors.politic.isError">{{ $t(errors.politic.msg) }}</span>
                  </div>
                </div>
                <div v-if="routeData.availablePromo" class="buy-ticket-form__footer__item">
                  <input class="uk-input buy-ticket__input" type="text" :placeholder="$t('promo_code')" name=""
                         v-model="promoCode">
                  <button @click="promoCodeCheck" class="uk-button uk-button-default button_ticket" type="button">
                    <span>{{$t('buttons.accept')}}</span>
                  </button>
                  <div class="uk-display-block uk-margin-small-top">{{ promoMsg }}</div>
                </div>
                <div v-if="routeData.journeyTypeId === 6" class="uk-margin-top">{{$t('route_jazz_msg')}}</div>
                <div class="buy-ticket-form__footer">
                  <div class="buy-ticket-form__total">
                    <div class="buy-ticket-form__total_price">
                      <span>
                      {{$t('total')}}:
                    </span>
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
                    <div v-if="promoStatus" class="buy-ticket-form__basket__sail">
                      {{ $t('by_promo') }} {{ saleNumber }}%
                    </div>
                    <button @click="sendYandexMetrikaEvent([14,15].includes(routeData.journeyTypeId)?'buy_ticket_rivertram':'oplata__bileta_2023')" type="submit" form="payData" class="uk-button uk-button-default button_ticket" :class="{'disabled-link': !valid || isLoading }">
                      <span>{{ $t('goto_payment') }}</span>
                      <svg-icon class="icon" name="ticket"/>
                    </button>
                  </div>
                </div>
              </form>
              <div class="uk-width-auto">
                <div class="buy-ticket-form__basket">
                  <div class="buy-ticket-form__basket__head">
                    <div class="headline_22 t_semibold">
                      {{ $t('your_ticket') }}
                    </div>
                    <svg-icon class="icon" name="ticket"/>
                  </div>
                  <div class="buy-ticket-form__basket__main">
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        <svg-icon width="23" height="23" class="icon" name="ancor-in-circle"/>
                        {{ $t('port') }}:
                      </div>
                      <div class="buy-ticket-form__basket__item__info">
                        «{{ routeData.placeName }}»
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item ticket_time_info">
                      <div class="buy-ticket-form__basket__item__name">
                        <svg-icon width="25" height="25" class="icon" name="blue-clock2"/>
                      </div>
                      <div class="buy-ticket-form__basket__item__info">
                        <span>{{ $t('time_date') }}:</span>
<!--                        {{ journeyDate }}, {{ timeCalc }}-->
                        <span>{{ dayFormat }} {{ timeCalc(routeData.depatureTime, routeData.arrivalTime) }}</span>
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        {{ $t('category') }}:
                      </div>
                      <div class="buy-ticket-form__basket__item__info ticket_category_info">
                        <svg-icon width="20" height="20" fill="#00C1F3" class="category_icon" :name="currentIcon"/>
                        {{ routeData.journeySubType }}
                        <button type="button" @click="getCategory(routeData.journeyTypeId)">
                          <svg-icon
                              name="svg-info"
                              class="icon category_info"
                              width="15"
                              height="15"
                              fill="#A7A7A7"
                          />
                        </button>
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
                            {{ adultCount }}  {{$t('pax')}}
                          </div>
                          <div>
                            <b>{{ adultPriceCalc }} ₽</b>
                          </div>
                        </div>
                        <div  v-if="routeData.availableChild" class="buy-ticket-form__basket__item__passenger">
                          <div>
                            {{ $t('children') }}
                          </div>
                          <div>
                            {{ childCount }}  {{$t('pax')}}
                          </div>
                          <div>
                            <b>{{ childPriceCalc }} ₽</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        {{ $t('data') }}
                      </div>
                      <div class="buy-ticket-form__basket__item__info buy-ticket-form__basket__item__info_data">
<!--                        {{ form.name }}<br>-->
                        {{ form.email }} <br>
                        {{ form.phone }}
                        <div class="uk-form-danger uk-margin-top" v-if="errors.name.isError">{{ $t(errors.name.msg) }}</div>
                        <div v-if="onError" class="text-error">{{onError}}</div>
                      </div>
                    </div>
                    <div v-if="routeData.classData?.ticketinfo" class="buy-ticket-form__basket__item">
                      <div class="buy-ticket-form__basket__item__name">
                        {{$t('information')}}
                      </div>
                      <div v-html="routeData.classData?.ticketinfo" class="buy-ticket-form__basket__item__info buy-ticket-form__basket__item__info_data">
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
                <b>{{$t('payment_methods')}}</b>
              </div>
              <img data-src="~assets/img/inners/cards_1.png" alt="" class="uk-visible@s"
                   src="~assets/img/inners/cards_1.png">
              <img data-src="~assets/img/inners/cards_2.png" src="~assets/img/inners/cards_2.png" alt="" class="uk-hidden@s">
            </div>
            <div class="buy-ticket-more-information__call">
              <svg-icon class="icon" name="blue-info"/>
              <div class="buy-ticket-more-information__call__p1">
                <b>
                  {{$t('more_tel_info')}}:
                </b>
              </div>
              <div class="buy-ticket-more-information__call__p2">
                <a href="tel:+74952285555">+7 (495) 228-55-55</a> {{ $t('call_range') }}
              </div>
            </div>
          </div>
          <div class="buy_ticket-questions">
            <ul class="uk-accordion accordion_vacantion" uk-accordion="multiple: true;">
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
        </div>
      </section>
      <ChildInfo />
      <CategoryInfoSmall :info="categoryInfo"/>
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
import 'moment/locale/ru';
import 'moment/locale/es-us'
import 'moment/locale/zh-cn'
import UIkit from "uikit";
import ChildInfo from "../../components/modals/ChildInfo.vue";
import {mapActions, mapGetters} from "vuex";
import CategoryInfoSmall from "~/components/modals/CategoryInfoSmall.vue";
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
    CategoryInfoSmall,
    ChildInfo,
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
      adultCount: 0,
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
      agrees: {
        politic: false,
        rules: false,
      },
      form: {
        journey: this.$route.query.journey,
        name: '',
        email: '',
        phone: '',
        promoCode: '',
        seatsAdult: 0,
        seatsChild: 0,
        agree: false,
      },
      errors: {
        name: {
          isError: false,
          msg: 'error_name'
        },
        phone: {
          isError: false,
          msg: 'error_phone'
        },
        email: {
          isErrorInput: false,
          isErrorSubmit: false,
          msgOnInput: 'error_email',
          msgOnSubmit: 'error_email_form'
        },
        agree: {
          isError: false,
          msg: 'error_agree_form'
        },
        politic: {
          isError: false,
          msg: 'error_agree_form'
        }
      },
      valid: false,
      isLoading: false,
      seoData: {},
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
      categoryInfo: null,
    }
  },
  watch: {
    // whenever question changes, this function will run
    adultCount: function (newVal, oldVal) {
      this.promoMsg = ''
      this.promoStatus = false
      this.adultNewVal = +newVal
      this.adultOldVal = +oldVal

      if(!this.routeData.availablePromo) {
        if (this.adultNewVal < 1 ) {
          this.adultCount = 1
        }
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
      this.promoMsg = ''
      this.promoStatus = false
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
    'agrees.rules': function (val) {
      val ? this.errors.agree.isError = false : this.errors.agree.isError = true
    },

    'agrees.politic': function (val) {
      val ? this.errors.politic.isError = false : this.errors.politic.isError = true
    },

    form: {
      handler: function (val) {
        this.valid = val.name.length > 0 && val.phone.length > 0 && val.email.length > 0 && this.agrees.rules && this.agrees.politic
      },
      deep: true
    },
    agrees: {
      handler: function (val) {
        this.valid = this.form.name.length > 0 && this.form.phone.length > 0 && this.form.email.length > 0 && val.rules && val.politic
      },
      deep: true
    }

  },

  computed: {
    ...mapGetters(['refundDoc']),
    currentIcon() {
      switch (this.routeData.journeyTypeId) {
        case 0:
          return 'categories/Osnovnoy';
        case 1:
          return 'categories/Teatr';
        case 2:
          return 'categories/Royal';
        case 3:
          return 'categories/Erwin';
        case 4:
          return 'categories/Royal';
        case 5:
          return 'categories/1class';
        case 6:
          return 'categories/Jazz';
        case 7:
          return 'categories/Degust';
        default: {
          return 'categories/Osnovnoy'
        }
      }
    },
    route() {
      return route
    },
    totalSumCount() {
      return this.adultPriceCalc + this.childPriceCalc
    },
    dayFormat() {
      return moment(this.routeData.journeyDate).locale(`${this.$i18n.locale}`).format('DD MMMM')
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
  },

  methods: {
    ...mapActions(['getRefundDoc']),
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
        //this.errors.phone.msg = 'Введите номер телефона в формате \n +7 (9XX) XXX-XX-XX'
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
        if(!this.routeData.availablePromo) {
          if (this.adultCount <= 1) {
            return 1
          } else {
            this.adultCount--
            this.adultSum -= this.adultPrice
          }
        } else {
          if (this.adultCount === 0) {
            return 0
          } else {
            this.adultCount--
            this.adultSum -= this.adultPrice
          }
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
          if (this.childCount === 1) {
            UIkit.modal('#childInfo').show();
          }
        }
      }
    },

    async payTicket() {
      let payUrl
      let onError

      this.form.seatsAdult = this.adultCount;
      this.form.seatsChild = this.childCount;
      this.form.promoCode = this.promoCode;
      //console.log("Send Phone -> ",this.rowPhone.replace(/[^+\d]/g, ''));
      this.form.phone = this.rowPhone.replace(/[^+\d]/g, '');
      this.form.agree = this.agrees.rules && this.agrees.politic
      try {
        this.isLoading = true
        const response = await this.$axios({
          method: 'POST',
          url: `${this.$config.baseURL}order?lang=${this.$i18n.locale}`,
          /*data: new URLSearchParams(this.form)*/
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
        if(onError === 'Нет свободных мест') {
          UIkit.notification({message: `${onError}`, status: 'danger', pos: 'top-center', timeout: 1500})
        }
        this.isLoading = false
      }
      this.onError = onError
      this.payUrl = payUrl
    },

    async promoCodeCheck() {
      let promoMsg
      let totalSumWithSale
      let promoStatus
      await this.$axios({
        url: `${this.$config.baseURL}amount?lang=${this.$i18n.locale}`,
        method: 'POST',
        data: {
          journey: this.journey,
          promoCode: this.promoCode,
          seatsAdult: this.adultCount,
          seatsChild: this.childCount,
        }
       /* data: new URLSearchParams({
          journey: this.journey,
          promoCode: this.promoCode,
          seatsAdult: this.adultCount,
          seatsChild: this.childCount,
        })*/
      }).then(function (response) {
        /*         console.log('yes')
                console.log(response); */
        console.log(response)
        if (response.data.error) {
          promoMsg = response.data.error
          UIkit.notification({message: `${promoMsg}`, status: 'danger', pos: 'top-center', timeout: 1500})
          //console.log(promoMsg)
          return promoMsg
        } else {
          promoMsg = `Промокод применен`
          promoStatus = true
          //console.log(promoMsg)
          totalSumWithSale = response.data.amount
        }
      }).catch(function (error) {
        promoMsg = error.response.data.error
        UIkit.notification({message: `${promoMsg}`, status: 'danger', pos: 'top-center', timeout: 1500})
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
        const data = await this.$axios(
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
    timeCalc(dptrTime, arvTime) {
      if(dptrTime === null || arvTime === null) return;
      let formattedDeparture = moment(dptrTime).format('HH:mm')
      let formattedArrival = moment(arvTime).format('HH:mm')
      return `${formattedDeparture} - ${formattedArrival}`
    },
    sendYandexMetrikaEvent(eventName) {
      this.$yandexMetrika.reachGoal(eventName);
    },

    openChildModal() {
      UIkit.modal('#childInfo').show();
    },
    async getCategory(id) {
      try {
        const responseData = await this.$axios(`${this.$config.baseURL}categories?type_id=${id}&lang=${this.$i18n.locale}`);
        if (!responseData.data.result) return;
        this.categoryInfo = responseData.data.result;
        UIkit.modal('#categoryInfoSmall').show();
      } catch (e) {
      }
    },
  },
  mounted() {
    this.getRefundDoc();
    if (process.browser) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'pageview',
        'pagePath': '/yachts-buy/',
        'pageTitle': 'Покупка билета',
        'siteLanguage': this.$i18n.locale,
      })
    }
  },
  middleware: [
    function({ redirect, route }) {
      if(Object.keys(route.query).length === 0) {
        redirect('/yachts/schedule/')
      }
    },
  ],

  async fetch() {
    try {
      let seoDataResult = await this.$axios(
          `${this.$config.baseURL}pages?ref=/yachts-buy/&lang=${this.$i18n.locale}`);
      this.seoData = seoDataResult.data.result
      /*if(this.$route.query.journey === undefined) return*/
      let optionsData = await this.$axios(
          `${this.$config.baseURL}faq?grp=purchase&lang=${this.$i18n.locale}`);
      let data = await this.$axios(
          `${this.$config.baseURL}route?journey=${this.journey}&lang=${this.$i18n.locale}`)
      this.routeData = data.data.result
      this.journeyDate = new Date(this.routeData.depatureTime).toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
      })
      this.childPrice = this.routeData.childPrice
      this.adultPrice = this.routeData.adultPrice
      this.routeData.availablePromo ? this.adultCount = 0 : this.adultCount = 1
      this.options = optionsData.data.result
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
.children_item {
  flex-wrap:wrap;
}
.children_subinfo {
  display: block;
  width: 100%;
  font-size: 12px;
}
.buy-ticket-form__info .headline_p1 {
  line-height: 1;
  font-weight: 700;
  font-size: clamp(26px, 5vw, 50px);
  margin-bottom: 29px;
}
.buy-ticket-form__info {
  margin-top: 0;
}
.buy-ticket-form__grid {
  margin-top: 0;
  justify-content: space-between;
}
.buy-ticket-form__data__grid > div {
  margin-top: 15px;
}
.buy-ticket-form {
  padding-top: 56px;
  padding-bottom: 70px;
}
.buy-ticket-more-information {
  margin-top: 0;
  border-top:1px solid rgba(161, 194, 229, 0.3);
}
.buy_ticket-questions {
  background: #FFFFFF;
  width: 100%;
  padding-bottom: 75px;

}
.buy_ticket-questions .uk-accordion{
  width: 100%;
  padding-top: 55px;
  max-width: 1250px;
  padding-left: 150px;
  margin-top: 0;
}
.buy-ticket-form__basket__head {
  padding: 17px 33px;
}
.buy-ticket-form__basket__item_checked {
  margin-top: 10px;
}
.form_politic .uk-checkbox {
  margin-right: 11px;
}
.buy-ticket-form__passengers {
  margin-top: 0;
  row-gap: 15px;
}
.buy-ticket-form__passengers__item__summ {
  align-items: center;
  display: flex;
  line-height: 1;
  gap: 9px;
}
.buy-ticket-form__passengers__item__summ svg {
  fill:#A7A7A7;
}
.buy-ticket-form__agreement {
  margin-top: 20px;
}
.buy-ticket-form__footer__item {
  margin-top: 20px;
  padding-bottom: 20px;
}
.buy-ticket-form__footer {
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid rgba(161, 194, 229, 0.3);
}
.buy-ticket-form__total_price {
  display: flex;
  align-items: center;
  gap: 20px;
}
.buy-ticket-form__basket__sail {
  margin-top: 5px;
}
.buy-ticket-form__total {
  width: 100%;
}
.buy-ticket-form__total .uk-button {
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
  padding: 18px 20px;
  justify-content: space-between;
}
.buy-ticket-form__basket__head {
  font-weight: 700;
}
.buy-ticket-form__basket__head svg {
  width: 51px;
  height: 24px;
}
.buy-ticket-form__basket__item__name {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 0;
  min-width: auto;
  margin-right: 10px;
}
.buy-ticket-form__basket__item__info {
  font-weight: 700;
  margin-top: 0;
}
.buy-ticket-form__basket__item {
  margin-top: 0;
  padding: 21px 0;
  align-items: center;
}
.category_icon {
  margin-right: 6px;
  margin-left: 8px;
  flex:none;
}
.ticket_category_info {
  display: flex;
  align-items: center;
}
.ticket_category_info .category_info {
  margin-left: 6px;
}
.ticket_time_info {
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 6px;
}
.ticket_time_info svg {
  flex-shrink: 0;
  min-width: fit-content;
}
.ticket_time_info .buy-ticket-form__basket__item__name {
  padding-right: 0;
  margin-right: 0;
}
.ticket_time_info .buy-ticket-form__basket__item__info {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

}
.buy-ticket-form__basket__main {
  padding: 0 25px 46px;
}
@media screen and (max-width: 1450px) {
  .buy-ticket-form__basket {
    width: 370px;
  }
}
@media screen and (max-width: 1400px) {
  .buy_ticket-questions .uk-accordion{
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media screen and (max-width: 1199px) {
  .ticket_time_info {
    align-items: center;
  }
  .ticket_time_info .buy-ticket-form__basket__item__name{
    margin-right: 0;
    padding-right: 0;
  }
  .buy-ticket-form__basket{
    width: auto;
  }
}
@media screen and (max-width: 639px) {
  .buy-ticket-form__passengers__item {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .buy-ticket-form__data {
    margin-top: 0;
  }
  .buy_ticket-questions .uk-accordion{
    padding: 0;
    margin: 0;
  }
  .buy_ticket-questions {
    padding: 0 15px 30px;
    margin: 0 -15px;
    width: auto;
  }
  .buy-ticket-more-information {
    margin-right: -15px;
    margin-left: -15px;
  }
}

</style>
