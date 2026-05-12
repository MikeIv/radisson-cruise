<template>
  <header class="uk-position-relative  main-header component_header" id="header">

    <div class="header_top_back" id="sticky-fixed-header">
      <div class="uk-container">
        <div class="uk-grid uk-flex-between uk-child-width-auto uk-flex-middle uk-grid-small uk-flex-nowrap" uk-grid="">
          <div class="header_top-left">
            <div class="header__top_item1-container uk-first-column">
              <nuxt-link class="header__top_logo transition" :to="localePath('/')"  @click.native="closeNav">
                <!--              <img src="~assets/img/svg/logo.svg" alt="" uk-svg class="header__top_logo transition uk-svg">-->
                <svg-icon class="transition" name="logo_update"/>
              </nuxt-link>
            </div>
            <div class="header__top_item2-container uk-visible@l">
              <div class="header__top_item2">
                <div>
                  <nuxt-link to="/official/">
                    {{ $t('official_site') }}
                  </nuxt-link>
                </div>
                <!--              <div>
                                {{ $t('header.info.people') }}
                              </div>-->
              </div>
            </div>
          </div>
          <div class="header_top-center">
            <nuxt-link class="header_top-link transition" to="/yachts/schedule/"  @click.native="closeNav">
              <svg-icon class="header__top_logo transition" name="header/Time"/>
              <span class="desktop_text">{{ $t('header.yachts_schedule') }}</span>
              <span class="mobile_text">{{ $t('schedule') }}</span>
            </nuxt-link>
            <nuxt-link class="header_top-link transition" to="/rent/"  @click="closeNav">
              <svg-icon class="header__top_logo transition" name="header/Shturval"/>
              <span>{{ $t('header.rent') }}</span>
            </nuxt-link>
            <nuxt-link class="header_top-link transition" to="/certificates/"  @click.native="closeNav">
              <svg-icon class="header__top_logo transition" name="header/Gift"/>
              <span>{{ $t('nav.certificates') }}</span>
            </nuxt-link>
          </div>
          <div class="header_top-right">
            <div class="header__top_item5-container uk-visible@l">
              <a class="header_call uk-visible@s" :href="`tel:${headerTel}`">
                <svg-icon class="header__top_logo transition" name="call"/>
                <span>{{ headerTel }}</span>
              </a>
            </div>
            <LangAndBurgerMenu ref="burgerMenu"/>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
<!--    <HeaderInner :ticketYacht="ticketYacht"
                 :ticketTrolley="ticketTrolley"
                 :video="video"
                 :fileName="fileName"
                 :index="index"
                 :linkName="linkName"
                 :videoName="videoName"
                 :trams="trams"
                 :rent="rent"
    />-->
  </header>
</template>

<script>
  import SideNav from "./SideNav";
  import HeaderInner from "./HeaderInner";
  import LangAndBurgerMenu from "@/components/LangAndBurgerMenu";
  import {mapGetters} from "vuex";
  export default {
    name: 'Header',
    props:{
      video: Boolean,
      index: Boolean,
      trams: Boolean,
      rent: Boolean,
      ticketYacht: Boolean,
      ticketTrolley: Boolean,
      linkName: String,
      fileName: String,
      videoName: String,
      aboutPage: Boolean,
    },
    components: {HeaderInner, SideNav, LangAndBurgerMenu},
    data() {
      return {
        isActive: false,
        headerTel: '+7 (495) 228-55-55',
      }
    },
    computed: {
      ...mapGetters(['tramsDoc']),
      availableLocales() {
        return this.$i18n.locales.filter(i => i.active && i.code !== this.$i18n.locale);
      },

      currentLang() {
        return this.$i18n.localeProperties.name
      },
    },
    methods: {
      closeNav() {
      //console.log('close Nav')
        this.$store.commit('changeNavState', false)
        document.body.classList.remove('uk-offcanvas-page')
    },
      activateCalc() {
        this.$emit('active-calc')
      },
      menuOpen() {
        this.isActive = true
      },
      menuClose() {
        this.isActive = false
      },
      toggleOpen() {
        if (document.querySelector('body').classList.contains('uk-offcanvas-container')) {
            this.isActive = false
        } else {
          this.isActive = !this.isActive
        }
      },
    },
    mounted() {
      this.headerTel = this.$store.getters.tel
    }
  };

</script>

<style scoped>
/* media screen mobile iphone 5 */

.testBtn {
  display: block;
  width: 500px;
  height: 50px;
  background: red;
  position: absolute;
  top:10%;
  left:10%;
}

.header__overlay-default {
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: auto;
  background: rgba(0, 0, 0, 0.5);
}

.header__top_logo svg path:nth-child(2){
  color: #00c1f3;;
}

.news-item__header .uk-position-relative,
.buy-sertificat-header .uk-position-relative,
.buy-ticket-form__header .uk-position-relative {
  display: none;
}
/*
header {
  color: #fff;
  background: #fff;
  padding-top: 50px;
  padding-bottom: 114px;
}


.header_top_back {
  position: relative;
  transition: .2s;
  background: 0 0;
  z-index: 1001;
  padding: 20px 0;
}

.header__top_logo svg{
  color:#fff;
  width: 174px;
  height: 75px;
}

.header__top_logo svg path:nth-child(2){
  color: #00c1f3;;
}

  .nav {
    padding: 20px 40px;
    max-width: 1660px;
    width: 100%;
    margin: 0 auto;
  }
  .nav_items {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }

  .header_top_menu>div {
    width: 25px;
    min-width: 25px;
    height: 13px;
    position: relative;
  }

  .header_top_menu>div>div {
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    top: 0;
    background: #000;
    transform: rotate(0);
    transition: .2s;
  }

  .header_top_menu>div>div:nth-child(2) {
    top: 6px;
  }

  .header_top_menu>div>div:nth-child(3) {
    top: 12px;
    width: 15px;
    left: 0;
  }



.img_cover {
  position: absolute;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  transition: 1s;
}

.uk-overlay-default {
  background: rgba(0,0,0,.6);
  transition: .3s;
  z-index: 2;
  opacity: 0;
}

.header__overlay-default {
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: auto;
}

.header-compass {
  position: absolute;
  right: 30px;
  bottom: 184px;
}

.header-compass>div:nth-child(1) {
  width: 40px;
  height: 1px;
  position: absolute;
  left: -70px;
  background: #707070;
  top: 33px;
}

.header-compass>div:nth-child(2) {
  width: 40px;
  height: 1px;
  position: absolute;
  right: -70px;
  top: 33px;
  background: #707070;
}

.header-compass>div:nth-child(3) {
  width: 1px;
  height: 72px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 109px;
  background: #707070;
}

.header-compass svg {
  width: 69px;
  height: 67px;
}

.header__middle {
  padding-top: 140px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
}

.header__middle_left {
  padding-bottom: 32px;
  white-space: nowrap;
}

.header__p1 {
  font-size: 119px;
  line-height: 1.05;
  text-transform: uppercase;
  background: #0bc3f3;
  background: linear-gradient(
    180deg,#0bc3f3 20%,#fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: cowor,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}
.header__p2 {
  font-size: 99px;
  margin-top: 25px;
  line-height: 1;
  text-transform: uppercase;
  font-family: cowor,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}

.header__middle_right {
  position: absolute;
  right: 0;
  top: 45px;
}

.header__middle_right svg {
  width: 384px;
}



.buy-ticket {
  display: flex;
  margin-top: 130px;
}

.buy-ticket__item {
  width: 502px;
  height: 70px;
  display: flex;
  position: relative;
  align-items: center;
  background: #fff;
}

.buy-ticket__item>div {
  width: 100%;
}
.switch-container {
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.switch-name.active {
  color: #00c1f3;
  opacity: 1;
}

.switch-name {
  color: #000;
  opacity: .5;
  font-weight: 700;
  font-size: 14px;
  transition: .2s;
  cursor: pointer;
}

.switch-round {
  position: relative;
  display: block;
  width: 60px;
  margin: 0 25px;
  height: 25px;
}

.switch-round input {
  display: none;
}

.switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  transition: .4s;
  border-radius: 12.5px;
  border: 1px solid #000;
}

.switch-slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 5px;
  bottom: 3px;
  border-radius: 50%;
  background-color: #000;
  transition: .4s;
}

.buy-ticket .button_ticket {
  width: 17%;
  height: 70px;
}

.uk-button:not(:disabled) {
  cursor: pointer;
}

.uk-grid-small>* {
  padding-left: 15px!important;
}
.uk-child-width-auto>* {
  width: auto;
}

.header__top_item2 {
  font-size: 14px;
  font-weight: 700;
  display: flex;
  border-bottom: 1px solid #fff;
  white-space: nowrap;
  text-transform: uppercase;
}

.header__top_item2>div:nth-child(1) {
  border-right: 1px solid #fff;
  padding: 15.5px 31px 15.5px 0;
}

.header__top_item2 a {
  font-weight: 700;
  color: #00c1f3;
}

.header__top_item2>div:nth-child(2) {
  padding: 15.5px 0 15.5px 31px;
}

.header__top_item3 {
  display: flex;
  align-items: center;
}

.header__top_item3 a:first-child {
  margin-right: 17px;
}

.button-shedule {
  padding: 0 20px;
  font-size: 10px;
}

.button-shedule img {
  margin-left: 11px;
}

.header_call{
  font-size: 16px;
  fill: #fff;
  color:#fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.header_call svg {
  width: 20px;
  height: 20px;
  opacity: .5;
  min-width: 20px;
  margin-right: 22px;
  color: #fff;
}

.header__top_item4 {
  display: flex;
}

.language-container {
  position: relative;
}

.language {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 12px;
  font-weight: 700;
  box-sizing: border-box;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  fill: #fff;
  color:#fff;
  border-bottom: 1px solid #fff;
}

.language svg {
  width: 8px;
  height: 4px;
  margin-left: 5px;
}

.language_drop {
  min-width: 50px;
  background: 0 0;
  padding: 0;
  color: #fff;
  border: none;
  box-sizing: border-box;
  width: 50px;
  font-size: 12px;
  top: calc(100% - 1px)!important;
  left: 0!important;
}

.language_drop ul {
  list-style: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.language_drop a {
  border: 1px solid #fff;
  padding: 16px 11px;
  display: block;
  font-weight: 700;
  box-sizing: border-box;
}

.header_top_menu {
  font-weight: 500;
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  transition: .2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-sizing: border-box;
  background: #fff;
}
*/


.language_drop a:hover {
  background: #00c1f3;
  color: #fff;
  text-decoration: none;
}
.header_top_back {
  padding: 15px 0 10px;
}
.header__top_item1-container {
  flex: none
}

.header__top_logo svg {
  width: 100%;
  max-width: 150px;
}

.header_top-right, .header_top-left {
  display: flex;
  align-items: center;
  gap:55px;
}
.header_top-center {
  display: flex;
  width: 100%;
  max-width: 570px;
  justify-content: space-between;
}
.header_top-link {
  width: 100%;
  max-width: 160px;
  gap: 10px;
  display: flex;
  align-items: center;
  padding: 8px 0 8px 10px;
  border: 2px solid #FFF;
  background: transparent;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #fff;
  line-height: 15px;
  max-height: 45px;
}
.header_top-link .mobile_text {
  display: none;
}
.header_top-link:hover {
  border: 2px solid #00C1F3;
  background: #00C1F3;
  text-decoration: none;
}
.header__top_logo {
  width: 20px;
  height: 20px;
  flex:none;
}
@media screen and (max-width: 1400px) {
  .header__top_item2-container, .header__top_item5-container  {
    display: none;
  }
}
@media screen and (max-width: 1366px) {
  .main-news__items {
    .uk-card {
      width: calc(50% - 25px);
    }
  }
  .header_top-center {
    max-width: 510px;
  }
}

@media screen and (max-width: 1023px) {
  .header_top-center {
    justify-content: center;
  }
  .header_top-link:not(:first-child) {
    display: none;
  }
}

@media screen and (max-width: 639px) {
  .uk-grid-small > * {
    padding-left: 0;
  }
  .header__top_item1-container {
    width: 100px;
  }
  .header__top_item4-container, .language-container, .header_top_menu {
    width: 100%;
  }
}

@media screen and (max-width: 639px) {
  .uk-grid-small > * {
    padding-left: 0;
  }
  .header__top_item1-container {
    width: 100px;
  }
  .header__top_item4-container, .language-container, .header_top_menu {
    width: 100%;
  }
}
@media screen and (max-width: 428px) {
  .uk-container {
    padding: 0 10px;
  }
  .header_top-center, .header_top-right {
    padding-left: 10px !important;
  }
  .header__top_item1-container {
    width: 78px;
  }
  .header_top-center .header_top-link{
    height: 40px;
    gap: 5px;
    padding: 0;
    border: 1px solid #FFF;
    justify-content: center;
  }
  .header_top-center .header_top-link:hover{
    border: 1px solid #00C1F3;
  }
  .header_top-link .mobile_text {
    display: block;
    font-size: 11px;
  }
  .header_top-link .desktop_text {
    display: none;
  }
}


</style>
