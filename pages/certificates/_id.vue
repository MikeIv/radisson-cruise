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
                  Подарочный сертификат на прогулку в Ройал классе действует только от причала «Гостиница «Украина».
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
                      <label class="uk-form-label">Ваше ФИО</label>
                      <input v-model="userName" class="uk-input buy-ticket__input" type="text" placeholder="Введите ФИО"
                             required="" name="">
                    </div>
                  </div>
                  <div class="uk-width-1-2@s">
                    <div class="uk-form-controls">
                      <label class="uk-form-label">Контактный телефон</label>
                      <input
                          :value="userPhone"
                          v-imask="maskTel"
                          @accept="onAccept"
                          @complete="onComplete"
                          class="uk-input buy-ticket__input f_phone"
                          type="text"
                          placeholder="+7 ("
                          required=""
                          name=""
                          inputmode="text">
                    </div>
                  </div>
                  <div class="uk-width-1-2@s">
                    <div class="uk-form-controls">
                      <label class="uk-form-label">Ваш e-mail</label>
                      <input v-model="userEmail" class="uk-input buy-ticket__input" type="text"
                             placeholder="Введите e-mail" required="" name="">
                    </div>
                  </div>
                </div>
              </div>

              <div class="buy-ticket-form__passengers">
                <div class="buy-ticket-form__passengers__head">
                  <b>Укажите количество</b>
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
                    Стоимость указана на одну персону, составляет {{ certData.price }} ₽
                  </div>

                </div>
              </div>

              <div class="buy-ticket-form__agreement">
                <div class="form_politic buy-ticket__politic">
                  <label>
                    <input v-model="isAgree" class="uk-checkbox" type="checkbox" name="check-personal">
                    <span class="">
                    Я принимаю условия приобритения билетов и даю согласие на обработку <a href="" target="_blank">персональных данных</a>
                  </span>
                  </label>
                  <label>
                    <input class="uk-checkbox" type="checkbox" name="check-info">
                    <span class="">
                    Согласие получать информацию о скидках, выгодных предложениях и <a href="" target="_blank">мероприятиях на яхтах </a>
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
                <div class="buy-ticket-form__sert-item__p1">
                  Обладателю Подарочного Сертификата необходимо позвонить по телефону +7 (495) 228-55-55 и уведомить о
                  своем визите на конкретный рейс.
                  Подарочные сертификаты действительны в течение 3 месяцев с момента покупки и не действуют на
                  спецрейсах. <br>
                  Действие сертификата распространяется только на указанный класс.
                </div>

                <a class="buy-ticket-form__sert-item__more-link"
                   uk-toggle="target: #toggle-animation-multiple; animation:  uk-animation-fade;">
                  {{ $t('buttons.more') }}
                </a>
                <div id="toggle-animation-multiple" hidden="" class="">
                  <ul class="buy-ticket-form__sert-item__list">
                    <li>Подарочный сертификат (далее – ПС или Сертификат) представляет собой фирменный бланк Компании,
                      содержащий штрих-код, слова «Подарочный сертификат», срок действия, с указанием количества персон
                      и даты приобретения. ПС является посадочным талоном и принимается к посадке на рейсовых теплоходах
                      – ресторанах Рэдиссон Ройал, эксплуатируемых Компанией (за исключением теплохода «Феличита»
                      (ресторан «Эрвин-река»).
                    </li>
                    <li>Подарочный сертификат на прогулку даёт право его держателю на посадку на теплоход и совершение
                      прогулочного круиза по Москве-реке в любую удобную дату на любой рейс (при наличии свободных мест)
                      в салоне Основного или Ройал-класса (класс салона указан в сертификате) в течение срока действия
                      Сертификата.
                    </li>
                    <li>Подарочный сертификат на прогулку с питанием даёт право его держателю на посадку на теплоход и
                      совершение прогулочного круиза по Москве-реке с предоставлением питания (комплекс из трех блюд на
                      выбор гостя по меню «А-ля карт») в любую удобную дату на любой рейс (при наличии свободных мест) в
                      салоне Основного или Ройал-класса (класс салона указан в Сертификате) в течение срока действия
                      Сертификата.
                    </li>
                    <li>Срок действия Сертификата – 3 месяца с даты приобретения.</li>
                    <li>Сертификаты не являются именными и выпускаются «на предъявителя». Предъявителем ПС может быть
                      только физическое лицо, получающее услуги Компании исключительно для личного, семейного, домашнего
                      использования, не связанного с предпринимательской деятельностью.
                    </li>
                    <li>ПС приобретается покупателем on-line на официальном сайте Компании, имеющем адрес
                      www.radisson-cruise.ru с использованием банковской карты для оплаты.
                    </li>
                    <li>В момент предъявления ПС при посадке Сертификат сканируется и изымается у потребителя.</li>
                    <li>В случае предъявления ПС с поврежденным штрих-кодом Сертификат к посадке не принимается.
                      Поврежденным считается штрих-код, который не может быть считан предназначенными для этого
                      сканерами. Наличие на подарочном сертификате механических и иных повреждений, не препятствующих
                      идентификации подарочного сертификата, не является основанием для отказа в принятии Сертификата.
                    </li>
                    <li>В случае утраты покупателем/держателем ПС не восстанавливается, денежные средства, равные его
                      стоимости не возвращаются.
                    </li>
                    <li>Покупатель имеет право вернуть ПС в период срока его действия в официальных пунктах продаж на
                      причалах Флотилии (причал «Гостиница Украина» и причал «ЦПКиО»).
                    </li>
                    <li>По истечении срока действия Сертификата, ПС не подлежит возврату, денежные средства равные его
                      стоимости не возвращаются. Пропуск срока использования ПС расценивается продавцом как просрочка
                      кредитора с наступлением последствий согласно п.1 ст.406 ГК РФ.
                    </li>
                    <li>С полной версией настоящих правил можно ознакомиться на официальном сайте Компании
                      www.radisson-cruise.ru. Незнание данных правил не является основанием для предъявления каких-либо
                      претензий со стороны покупателей/держателей ПС.
                    </li>
                  </ul>
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
                      Количесто
                      сертификатов
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
                       :class="{'disabled-link': !isAgree}">
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
                Получить дополнительную
                информацию можно по телефону:
              </b>
            </div>
            <div class="buy-ticket-more-information__call__p2">
              <a :href="`tel:${tel}`">{{ tel }}</a> с 10.00 до 21.00 час. ежедневно
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
import {mapGetters} from 'vuex';
import querystring from "querystring";

export default {
  name: "certificate-id",
  components: {Breadcrumbs, Header},
  directives: {
    imask: IMaskDirective
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
      certData: {},
      seats: 1,
      userEmail: "",
      userPhone: "",
      userName: "",
      tarif: null,
      agreed: false,
      onError: null,
      payUrl: null,
      maskTel: {
        mask: '{+7}(000)-000-00-00',
        lazy: true,
      },
      isAgree: false,
      seoData: {},
    };
  },
  computed: {
    ...mapGetters(['tel', 'email'])
  },
  validate({params}) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  methods: {
    onAccept(e) {
      const maskRef = e.detail;
      this.value = maskRef.value;
      //console.log('accept', maskRef.value);
    },
    onComplete(e) {
      const maskRef = e.detail;
      this.userPhone = maskRef.unmaskedValue
      //console.log('complete', maskRef.unmaskedValue);
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
        const response = await axios({
          url: `${this.$config.baseURL}certorder`,
          /*headers: { 'Content-Type': 'application/x-www-form-urlencoded' },*/
          method: 'POST',
          /*data: querystring.stringify({
            tarif: this.tarif,
            name: this.name,
            email: this.email,
            phone: this.phone,
            seats: this.seats,
            agree: this.isAgree
          })*/
          data: {
            tarif: this.tarif,
            name: this.userName,
            email: this.userEmail,
            phone: this.userPhone,
            seats: this.seats,
            agree: this.isAgree
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
  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/certificates/{id}/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    const response = await axios.get(`${this.$config.baseURL}certificates?id=${this.$route.params.id}&lang=${this.$i18n.locale}`)
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