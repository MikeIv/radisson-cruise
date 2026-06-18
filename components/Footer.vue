<template>
  <div>
    <footer class="uk-flex">
      <div class="uk-cover-container footer__left uk-visible@l">
        <div class="uk-cover-container footer__left_img-container uk-scrollspy-inview uk-animation-slide-bottom"
             uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400">
          <img data-src="~/assets/img/yacht.jpg"
               src="~/assets/img/yacht.jpg" alt=""
               class="img_cover uk-scrollspy-inview uk-animation-slide-bottom"
               uk-scrollspy="cls: uk-animation-slide-bottom; delay: 1000">
        </div>
      </div>
      <div class="footer__right" uk-scrollspy="target: > *; cls: uk-animation-fade; delay: 200">
        <div class="mailing__block uk-scrollspy-inview uk-animation-fade" style="">
          <div class="mailing__left">
            <img src="~assets/img/svg/mail.svg" alt="" uk-svg>
            <div class="headline_p1">
              {{ $t('footer.title') }}
            </div>
          </div>
          <form class="mailing__form" action="" id="mailing__form" autocomplete="off">
            <div class="mailing__input-block">
              <input v-model="newsEmail" type="email" required="" name="f_mail" class="uk-input"
                     :placeholder="$t('footer.placeholder')">
              <button @click.prevent="subscribeEmail" class="mailing__btn" type="submit">
                <!--              <svg-icon src="~assets/img/svg/arrow2.svg" alt="" uk-svg>-->
                <svg-icon name="arrow"/>
              </button>
            </div>
            <div class="mailing__politic" style="margin-top: 20px">
              <label>
                <input class="uk-checkbox"
                       type="checkbox"
                       name="check-info"
                       v-model="agrees.politic"
                       :class="{'uk-form-danger': errors.politic.isError}"
                >
                <span class="">
                        {{ $t('im_accept') }} <nuxt-link to="/politic/">{{ $t('links.politic') }}</nuxt-link>
                      </span>
              </label>
              <span class="uk-form-danger uk-margin-top uk-display-block"
                    v-if="errors.politic.isError">{{ $t(errors.politic.msg) }}</span>
            </div>
          </form>
          <div v-if="onError" class="text-error uk-margin-top">{{ onError }}</div>
        </div>
        <ul class="footer__nav uk-scrollspy-inview uk-animation-fade">
          <li class="footer__nav_item1">
            <nuxt-link to="/yachts/schedule/">
              {{ $t('schedule') }}
            </nuxt-link>
            <nuxt-link to="/rent/">
              {{ $t('nav.rent') }}
            </nuxt-link>
            <nuxt-link to="/trams/schedule/">
              {{ $t('nav.trams_schedule') }}
            </nuxt-link>
            <nuxt-link to="/menu/">
              {{ $t('nav.menu') }}
            </nuxt-link>
            <nuxt-link to="/yachts/schedule/" class="uk-hidden@s">
              {{ $t('nav.buy_tickets') }}
            </nuxt-link>
            <nuxt-link to="/news/388/" :prefetch="false" class="uk-hidden@s">
              {{ $t('thiefs') }}
            </nuxt-link>
            <nuxt-link to="/news/403/" :prefetch="false">
              {{ $t('erwin') }}
            </nuxt-link>
          </li>
          <li class="footer__nav_item2">
            <nuxt-link to="/news/">
              {{ $t('nav.news') }}
            </nuxt-link>
            <nuxt-link to="/about/">
              {{ $t('nav.about') }}
            </nuxt-link>
            <nuxt-link to="/contacts/">
              {{ $t('nav.contacts') }}
            </nuxt-link>
            <nuxt-link :to="{path: '/rules', hash: '#rules-security'}" replace class="uk-hidden@s">
              {{ $t('security') }}
            </nuxt-link>
            <nuxt-link to="/refund/" class="uk-hidden@s">
              {{ $t('refund.head') }}
            </nuxt-link>
          </li>
          <li class="footer__nav_item3 uk-visible@s">
            <nuxt-link to="/yachts/schedule/">
              {{ $t('nav.buy_tickets') }}
            </nuxt-link>
            <nuxt-link to="/news/388/" :prefetch="false">
              {{ $t('thiefs') }}
            </nuxt-link>
            <nuxt-link :to="{path: '/rules', hash: '#rules-security'}" replace>
              {{ $t('security') }}
            </nuxt-link>
            <nuxt-link to="/refund/">
              {{ $t('refund.head') }}
            </nuxt-link>
          </li>
        </ul>
        <div class="footer__information uk-scrollspy-inview uk-animation-fade">
          <div class="footer__information_item1 uk-visible@s">
            <nuxt-link to="/" class="transition">
              <svg-icon class="transition" name="logo_update"/>
            </nuxt-link>
          </div>
          <div class="footer__information_item2">
            <div class="footer__information_item2-txt">{{ $t('footer.social') }}</div>
            <SocialBlock/>
          </div>
          <div class="footer__information_item3">
            <a class="header_call " :href="`tel:${tel}`">
              <img src="~assets/img/svg/call.svg" alt="" class="" uk-svg>
              <span>{{ tel }}</span>
            </a>
            <a class="footer__information_item3-mail" :href="`mailto: ${email}`">
              {{ email }}
            </a>
          </div>
        </div>
        <div class="footer__bottom uk-scrollspy-inview uk-animation-fade">
          <div class="footer__bottom_item1">
            © {{ new Date().getFullYear() }}, {{ $t('footer.credits') }}
          </div>
          <div class="footer__bottom_item2">
            <nuxt-link to="/politic" class="transition">
              {{ $t('footer.politic') }}
            </nuxt-link>
          </div>
          <div class="footer__bottom_item3">
            <a class="footer__bottom_arr uk-visible@s" href="#" uk-scroll="">
              <img src="~assets/img/svg/arrow5.svg" alt="" class="" uk-svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    <SuccessSubscribe/>
    <div id="modal-news-filter" class="uk-modal-full " uk-modal>
      <div class="uk-modal-dialog">

        <button class="uk-modal-close-default" type="button" uk-close></button>

        <div class="uk-container modal-full_container">
          <div class="headline_56 text-upper">
            Фильтр
          </div>
          <div class="modal-news-filter__body">
            <div class="news__navigatiom__date">
              <div class="input_archive input_archive_month">
                <div class="select">
                  <div class="select-styled">
                    Месяц
                  </div>
                  <ul class="select-options" data-filter-group>
                    <li data-filter=".mall">Все месяцы</li>
                    <li data-filter=".m1">Январь</li>
                    <li data-filter=".m2">Февраль</li>
                    <li data-filter=".m3">Март</li>
                    <li data-filter=".m4">Апрель</li>
                    <li data-filter=".m5">Май</li>
                    <li data-filter=".m6">Июнь</li>
                    <li data-filter=".m7">Июль</li>
                    <li data-filter=".m8">Август</li>
                    <li data-filter=".m9">Сентябрь</li>
                    <li data-filter=".m10">Октябрь</li>
                    <li data-filter=".m11">Ноябрь</li>
                    <li data-filter=".m12">Декабрь</li>
                  </ul>
                </div>
              </div>
              <div class="input_archive input_archive_year">
                <div class="select">
                  <div class="select-styled">
                    Год
                  </div>
                  <ul class="select-options" data-filter-group>
                    <li data-filter=".gall">Все года</li>
                    <li data-filter=".g2020">2020 год</li>
                    <li data-filter=".g2019">2019 год</li>
                    <li data-filter=".g2018">2018 год</li>
                    <li data-filter=".g2017">2017 год</li>
                    <li data-filter=".g2016">2016 год</li>
                    <li data-filter=".g2015">2015 год</li>
                    <li data-filter=".g2014">2014 год</li>
                    <li data-filter=".g2013">2013 год</li>
                    <li data-filter=".g2012">2012 год</li>
                    <li data-filter=".g2011">2011 год</li>
                    <li data-filter=".g2010">2010 год</li>
                    <li data-filter=".g2009">2009 год</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="news__navigatiom__tabs">
              <a class="uk-button button_switcher-second active" href="">ВСЕ </a>
              <a class="uk-button button_switcher-second" href="">НОВОСТИ</a>
              <a class="uk-button button_switcher-second" href="">АКЦИИ</a>
              <a class="uk-button button_switcher-second" href="">СОБЫТИЯ</a>
            </div>

          </div>
          <div class="modal-news-filter__footer">
            <a class="uk-button uk-button-default uk-modal-close" href="">
              <span>ПРИМЕНИТЬ</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {IMaskDirective} from "vue-imask";
import SocialBlock from "./SocialBlock";
import axios from "axios";
import UIkit from "uikit";
import querystring from "querystring";
import {mapGetters, mapActions} from "vuex";
import SuccessSubscribe from "./modals/SuccessSubscribe.vue";

export default {
  name: 'Footer',
  components: {SuccessSubscribe, SocialBlock},
  directives: {
    imask: IMaskDirective
  },
  ssr: false,
  data() {
    return {
      emailRegex: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
      maskTel: {
        mask: '{+7}(000)-000-00-00',
        lazy: true,
      },
      topScroll: 0,
      newsEmail: '',
      onError: null,

      agrees: {
        politic: false,
        rules: false,
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
    }
  },
  computed: {
    ...mapGetters(['tel', 'email'])
  },
  methods: {
    ...mapActions(['getActualDoc']),
    async subscribeEmail() {
      let onError
      if (!this.validateEmail()) return;
      try {
        const response = await this.$axios({
          url: `${this.$config.baseURL}subscribe?lang=${this.$i18n.locale}`,
          /*headers: { 'Content-Type': 'application/x-www-form-urlencoded' },*/
          method: 'POST',
          /*data: querystring.stringify({
            email:this.newsEmail
          })*/
          data: {
            email: this.newsEmail
          },
        })

        const data = await response.data.success
        //console.log(data)
        UIkit.modal('#success').show();
        this.newsEmail = null
        this.onError = null
      } catch (e) {
        onError = e.response.data?.error
        console.log(onError)
        this.onError = onError
      }
    },
    validateEmail() {
      //console.log(" Name Change = ", this.formData.name)
      if (this.emailRegex.test(this.newsEmail) && this.newsEmail.length > 0) {
        return true;
      } else {
        UIkit.notification({message: 'Укажите верный e-mail', status: 'danger', pos: 'top-center', timeout: 1500})
        return false;
      }
    },
    checkAgree(e) {
      document.querySelector('.footer__form_btn button').disabled =
          !e.currentTarget.checked;
    },
    checkToTop() {
      if (window.pageYOffset > 400) {
        document.querySelector('.footer__bottom_arr').style.display = 'flex'
      } else {
        document.querySelector('.footer__bottom_arr').style.display = 'none'
      }
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.checkToTop);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkToTop);
  },
  async fetch() {
    try {
      await this.getActualDoc();
      if (this.$store.state.tel) {
        const infoData = await this.$axios(`${this.$config.baseURL}textelements?code[]=phone&code[]=email`);
        await this.$store.dispatch('setUtilInfo', {email: infoData.data.result.email, tel: infoData.data.result.phone});
      }
    } catch (e) {

    }
  },
  fetchOnServer: true,
  fetchKey: 'utils-info',
};
</script>

<style scoped>
.footer__bottom_arr img {
  width: 13px;
  height: 11px;
}

/*.footer__bottom_arr {
  position: fixed;
  right: 10px;
  bottom: 10px;
  background-color: #000;
  border: 2px solid #bbb;
  z-index: 300;
  display: none;
}*/

.footer__bottom_arr:hover {
  background-color: #fff;
}


.footer__information_item1 a:hover {
  color: #ffffff;
}


.mailing__input-block {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.mailing__politic {
  font-size: 12px;
  color: #fff;
}

.mailing__politic .uk-checkbox {
  margin-right: 4px;
  border: 2px solid #fff;
}

.mailing__btn {
  top: 30%;
}



/*  .footer {
    display: flex;
  }
  .footer_left {
    flex: auto;
  }

  .footer_left-img--container {
    width: 100%;
    height: 100%;
    background: #00c1f3;
  }

  .footer_img {
    position: absolute;
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    transition: 1s;
  }

  .footer_right {
    width: 960px;
    padding: 67px 147px 28px 93px;
    background: #3c4892;
    color: #fff;
    background: linear-gradient(0deg, #3c4892 0, #1d2241 100%);
  }

  .footer_right-title {
    text-transform: uppercase;
    font-size: 44px;
    font-weight: 400;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    margin-bottom: 63px;
  }

  .footer_right-headline:last-child {
    color: transparent;
    margin-top: 10px;
    -webkit-text-stroke: 1px #00c1f3;
  }

  .footer_right-form {
    display: flex;
    flex-direction: column;
  }

  .footer_form {
    display: flex;
    flex-wrap: wrap;
    margin-left: -50px;
    margin-top: 15px;
  }

  .footer_form > div {
    padding-left: 50px;
  }

  .footer__form_input {
    margin-top: 25px;
  }

  .footer__form_polit {
    margin-top: 49px;
  }

  .form_politic {
    margin-top: 0;
  }

  .form_politic .uk-checkbox {
    margin-right: 26px;
    margin-top: 0;
    border: 2px solid #fff;
    background: 0 0;
    border-radius: 3px;
    position: relative;
  }

  .form_politic label {
    display: flex;
    font-size: 12px;
    color: #fff;
    font-weight: 400;
    align-items: center;
    transition: 0.2s;
  }


  .form_politic .uk-checkbox {
    margin-right: 26px;
    margin-top: 0;
    border: 2px solid #fff;
    background: 0 0;
    border-radius: 3px;
  }


  .uk-checkbox:checked:before {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 5.99px;
    border-radius: 0;
    background: url('~assets/img/main/check1.png') center center no-repeat;
    background-size: contain;
    opacity: 1;
    content: "";
    transform: translate(-50%,-50%);
  }

  .uk-input {
    padding: 0;
    font-size: 14px;
    color: #fff;
    background: 0 0;
    font-weight: 700;
    border: none;
    border-bottom: 1px solid #fff;
  }

  .footer__form_btn .uk-button:disabled {
    opacity: 0.5;
  }
  .footer__form_btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 34px;
    padding-left: 50px;
  }
  .footer__form_btn .uk-button {
    padding: 0 10px;
    background: #00c1f3;
    box-sizing: border-box;
    border-radius: 0;
    line-height: normal;
    height: 50px;
    z-index: 99;
    font-size: 12px;
    font-family: mont, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-transform: uppercase;
    border: 1px solid #00c1f3;
    min-width: 180px;
    width: 50%;
    transition: 0.2s;
  }

  .footer__nav {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 70px 0 0;
    padding: 30px 0 67px;
    font-size: 13px;
    text-decoration: underline;
    border-top: 1px solid #5c66a5;
    border-bottom: 1px solid #5c66a5;
  }*/
</style>
