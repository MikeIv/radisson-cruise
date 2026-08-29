<template>
  <div>
    <Header fileName="inners/shedule1.png" class="buy-ticket-form__header">
      <img src="~images/inners/shedule1.webp" data-src="~images/inners/shedule1.webp" class="img_cover" alt="">
    </Header>
    <section class="buy-ticket-form__container">
      <div class="uk-container">
        <div class="buy-ticket-form">
          <Breadcrumbs/>
          <div class="buy-ticket-form__grid">
            <form class="buy-ticket-form__info">
              <h1 class="headline_p1">
                {{ seoData?.header }}
              </h1>
              <div class="buy-ticket-form__headline uk-position-relative">
                <div class="buy-ticket-form__headline__item1">
                  <img data-src="~assets/img/sertificat/sert7.png" class="buy-ticket-form__headline__item1__sert-img"
                       alt="" src="~assets/img/sertificat/sert7.png">
                  <span class="headline_32 t_semibold">
                      {{ certData.name }}
                  </span>
                </div>
                <div v-if="certData.name === 'Сертификат в Ройал класс'"
                     class="buy-ticket-form__date txt14 uk-visible@s">
                  {{ $t('cert.royal') }}
                </div>
              </div>


              <div class="buy-ticket-form__data">
                <div class="buy-ticket-form__data__head">
                  <b>{{ $t('data') }}</b>
                  <span v-if="onError" class="text-error">{{ onError }}</span>
                </div>
                <div class="uk-flex uk-flex-wrap buy-ticket-form__data__grid">
                  <div class="uk-width-1-1">
                    <div class="uk-form-controls">
                      <label class="uk-form-label">{{$t('form.label_name')}}</label>
                      <input v-model="userName" class="uk-input buy-ticket__input" type="text" :placeholder="$t('form.name')"
                             required="" name="">
                    </div>
                  </div>
                  <div class="uk-width-1-2@s">
                    <div class="uk-form-controls">
                      <label class="uk-form-label">{{ $t('form.label_tel') }}</label>
                      <input
                          ref="phoneInput"
                          :value="userPhone"
                          v-imask="maskTel"
                          @accept="onAccept"
                          class="uk-input buy-ticket__input f_phone"
                          type="text"
                          placeholder="+123 456 789 000"
                          required=""
                          name=""
                          inputmode="tel">
                    </div>
                  </div>
                  <div class="uk-width-1-2@s">
                    <div class="uk-form-controls">
                      <label class="uk-form-label">{{ $t('form.label_email') }}</label>
                      <input v-model="userEmail" class="uk-input buy-ticket__input" type="text"
                             :placeholder="$t('form.email')" required="" name="">
                    </div>
                  </div>
                </div>
              </div>

              <div class="buy-ticket-form__passengers">
                <div class="buy-ticket-form__passengers__head">
                  <b>{{$t('cert.tickets_number')}}</b>
                </div>
                <div class="buy-ticket-form__passengers__item uk-flex-middle">
                  <div class="input-group plus-minus-input">
                    <div class="input-group-button">
                      <button @click="removeSeat" type="button" class="button " data-quantity="minus"
                              data-field="quantity">
                        -
                      </button>
                    </div>
                    <input class="input-group-field" type="number" name="quantity" v-model="seats">
                    <div class="input-group-button">
                      <button @click="addSeat" type="button" class="button" data-quantity="plus" data-field="quantity">
                        +
                      </button>
                    </div>
                  </div>
                  <div class="buy-ticket-form__passengers__item__info_sert">
                    {{ $t('cert.price') }} {{ certData.price }} ₽
                  </div>

                </div>
              </div>

              <div class="buy-ticket-form__agreement">
                <div class="form_politic buy-ticket__politic">
                  <label>
                    <input v-model="isAgreeCert" class="uk-checkbox" type="checkbox" name="check-personal">
                    <span class="">
                    {{$t('im_agree')}} <a :href="$config.baseSiteURL+certDoc" target="_blank">{{ $t('cert.agree_doc') }}</a>
                  </span>
                  </label>
                  <label>
                    <input v-model="isAgreePolitic" class="uk-checkbox" type="checkbox" name="check-info">
                    <span class="">
                      {{$t('im_accept')}} <nuxt-link to="/politic/">{{$t('links.politic')}}</nuxt-link>
                    </span>
                  </label>
                </div>
              </div>
              <!--              <div class="buy-ticket-form__footer">
                              <div class="buy-ticket-form__total">
                              <span>
                                Итого:
                              </span>
                                <span>
                                {{ seats * certData.price }} ₽
                              </span>
                              </div>
                              <div class="buy-ticket-form__footer__item">
                                <input class="uk-input buy-ticket__input" type="text" placeholder="Промокод" required="" name="">
                                <button class="uk-button uk-button-default button_ticket" type="submit">
                                  <span>ПЕРЕЙТИ К ОПЛАТЕ</span>
                                  <svg-icon class="icon vk-visible@s" name="ticket"/>
                                </button>
                              </div>

                            </div>-->
              <div class="buy-ticket-form__sert-item">
                <div class="buy-ticket-form__sert-item__p1" v-html="certInfoTitle"></div>

                <a class="buy-ticket-form__sert-item__more-link"
                   uk-toggle="target: #toggle-animation-multiple; animation:  uk-animation-fade;">
                  {{ $t('buttons.more') }}
                </a>
                <div id="toggle-animation-multiple" hidden="" class="" v-html="certInfoList">

                </div>

              </div>
            </form>
            <div class="uk-width-auto">
              <div class="buy-ticket-form__basket">
                <div class="buy-ticket-form__basket__head">
                  <div class="headline_22 t_semibold">
                    {{ $t('cart') }}
                  </div>
                  <svg-icon class="icon" name="cart"/>
                </div>
                <div class="buy-ticket-form__basket__main">
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      {{ $t('port') }}:
                    </div>
                    <div v-if="certData.name === 'Сертификат в Ройал класс'"
                         class="buy-ticket-form__basket__item__info">
                      «Гостиница «Украина»
                    </div>
                  </div>
                  <!--                  <div class="buy-ticket-form__basket__item">
                                      <div class="buy-ticket-form__basket__item__name">
                                        Время и дата:
                                      </div>
                                      <div class="buy-ticket-form__basket__item__info">
                                        5 июня, 20:00 - 22:30
                                      </div>
                                    </div>-->
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name buy-ticket-form__basket__item__name_sert">
                      {{ $t('cert.amount_tickets') }}
                    </div>
                    <div class="buy-ticket-form__basket__item__info">
                      {{ seats }}
                    </div>
                  </div>

                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      {{ $t('data') }}
                    </div>
                    <div class="buy-ticket-form__basket__item__info buy-ticket-form__basket__item__info_data">
                      {{ userName }}<br>
                      {{ userEmail }}<br>
                      {{ userPhone }}
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__summ">
                      <div>
                        {{ $t('amount') }}:
                      </div>
                      <div>
                        {{ seats * certData.price }} ₽
                      </div>
                    </div>
                    <!--                    <div class="buy-ticket-form__basket__sail">
                                          Скидка по промо-коду 20%
                                        </div>-->
                  </div>
                  <div @click.prevent="payCert"
                       class="buy-ticket-form__basket__item buy-ticket-form__basket__item__last"
                       :class="{'disabled-link': !isRulesAccepted}">
                    <a class="uk-button uk-button-default button_ticket" href="">
                      <span>{{ $t('goto_payment') }}</span>
                      <svg-icon class="icon" name="ticket"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="buy-ticket-more-information">
          <div class="buy-ticket-more-information__cards">
            <div class="txt18">
              <b>{{ $t('payment_methods') }}</b>
            </div>
            <img data-src="~assets/img/inners/buy_visa.png" alt="" class="uk-visible@s"
                 src="~assets/img/inners/buy_visa.png">
            <img data-src="~assets/img/inners/buy_visa_small.png" alt="" class="uk-hidden@s"
                 src="~assets/img/inners/buy_visa_small.png">
          </div>
          <div class="buy-ticket-more-information__call">
            <svg-icon class="icon" name="blue-info"/>
            <div class="buy-ticket-more-information__call__p1">
              <b>
                {{$t('more_tel_info')}}:
              </b>
            </div>
            <div class="buy-ticket-more-information__call__p2">
              <a :href="`tel:${tel}`">{{ tel }}</a> {{ $t('call_range') }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import axios from "axios";
import {IMaskDirective} from "vue-imask";
import {mapActions, mapGetters} from 'vuex';
import querystring from "querystring";
import { phoneMaskConfig, toApiPhone } from "~/utils/phoneMask";

export default {
  name: "certificate-id",
  components: {Breadcrumbs, Header},
  directives: {
    imask: IMaskDirective
  },
  head() {
    return {
      title: this.seoData?.title ? this.seoData?.title : 'Купить сертификаты',
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
      certData: {},
      seats: 1,
      userEmail: "",
      userPhone: "",
      userName: "",
      tarif: null,
      agreed: false,
      onError: null,
      payUrl: null,
      maskTel: phoneMaskConfig,
      isAgreeCert: false,
      isAgreePolitic: false,
      seoData: {},
      certInfoTitle: '',
      certInfoList: '',
    };
  },
  computed: {
    ...mapGetters(['tel', 'email', 'certDoc']),
    isRulesAccepted() {
      return this.isAgreeCert && this.isAgreePolitic
    }
  },
  validate({params}) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  methods: {
    ...mapActions(['getCertDoc']),
    onAccept(e) {
      this.userPhone = e.detail.value
    },
    getCertPhone() {
      const input = this.$refs.phoneInput
      const fromMask = input && input.maskRef
        ? (input.maskRef.unmaskedValue || input.maskRef.value)
        : ''
      const fromInput = input && input.value ? input.value : ''
      return toApiPhone(this.userPhone || fromMask || fromInput)
    },
    removeSeat() {
      if (this.seats > 1) {
        this.seats--
      }
    },
    addSeat() {
      this.seats++
    },
    async payCert() {
      let payUrl
      let onError
      try {
        const response = await this.$axios({
          url: `${this.$config.baseURL}certorder?lang=${this.$i18n.locale}`,
          /*headers: { 'Content-Type': 'application/x-www-form-urlencoded' },*/
          method: 'POST',
          /*data: querystring.stringify({
            tarif: this.tarif,
            name: this.name,
            email: this.email,
            phone: this.phone,
            seats: this.seats,
            agree: this.isAgreeCert && this.isAgreePolitic
          })*/
          data: {
            tarif: this.tarif,
            name: this.userName,
            email: this.userEmail,
            phone: this.getCertPhone(),
            seats: this.seats,
            agree: this.isRulesAccepted
          },
        })

        const data = await response.data
        //console.log(data)
        payUrl = data.formUrl
        this.onError = null
        if (payUrl !== undefined) {
          window.location = payUrl
        }
      } catch (e) {
        onError = e.response.data.error
        this.onError = onError
        e ? this.founded = false : this.founded = true
      }
    }
  },
  mounted() {
    this.getCertDoc()
  },
  async fetch() {
    let seoDataResult = await this.$axios(
        `${this.$config.baseURL}pages?ref=/certificates/{id}/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    const response = await this.$axios(`${this.$config.baseURL}certificates?id=${this.$route.params.id}&lang=${this.$i18n.locale}`)
    const certData = await this.$axios(
        `${this.$config.baseURL}varyelements?code[]=gift_certificates&code[]=gift_certificates_2&lang=${this.$i18n.locale}`)
    this.certInfoTitle = certData.data.result.gift_certificates.content
    this.certInfoList = certData.data.result.gift_certificates_2.content
    this.certData = await response.data[0]
    this.tarif = response.data[0].id
  },
  fetchOnServer: true,
  fetchKey: 'cert-ticket',
}
</script>

<style scoped>
.disabled-link {
  opacity: 0.3;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
