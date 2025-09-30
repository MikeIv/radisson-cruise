<template>
  <div id="offcanvas-nav" uk-offcanvas="overlay: true;" class="offcanvas offcanvas-menu uk-offcanvas display-block" :class="[{' uk-offcanvas-overlay uk-open display-block-on ':isActive},{' display-block-off':!isActive}]" >
    <div class="uk-offcanvas-bar side-slide" :class="[{'slide-on ':isActive},{'slide-off uk-offcanvas-bar-animation uk-offcanvas-slide':!isActive}]">
      <div class="offcanvas_menu">
        <div class="offcanvas_main">
          <div class="headline_p1 offcanvas_main__head">

          </div>
          <div class="uk-flex-between uk-grid-small uk-child-width-1-2 offcanvas_main__grid uk-hidden@m uk-grid" uk-grid="">
            <div class="uk-first-column">
              <nuxt-link class="txt18 " to="/yachts/" @click.native="closeNav">
                {{ $t('nav.yachts') }}
              </nuxt-link>
<!--              <nuxt-link class="txt18 " to="/trams/" @click.native="closeNav">-->
<!--                {{ $t('nav.trams') }}-->
<!--              </nuxt-link>-->
              <nuxt-link class="txt18 " to="/categories/" @click.native="closeNav">
                {{ $t('nav.categories') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/yachts/schedule/" @click.native="closeNav">
                {{ $t('nav.yachts_tickets') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/theatrical/" @click.native="closeNav">
                {{ $t('nav.theatrical') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/flights/" @click.native="closeNav">
                {{ $t('nav.flights') }}
              </nuxt-link>


              <nuxt-link class="txt18 " to="/about/" @click.native="closeNav">
                {{ $t('nav.about') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/rules/" @click.native="closeNav">
                {{ $t('nav.rules') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/refund/"  @click.native="closeNav">
                {{ $t('refund.head') }}
              </nuxt-link>
            </div>
            <div>
              <nuxt-link class="txt18 " to="/yachts/schedule/" @click.native="closeNav">
                {{ $t('nav.yachts_schedule') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/trams/schedule/" @click.native="closeNav">
                {{ $t('nav.trams_schedule') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/menu/" @click.native="closeNav">
                {{ $t('nav.menu') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/certificates/" @click.native="closeNav">
                {{ $t('nav.certificates') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/rent/" @click.native="closeNav">
                {{ $t('nav.rent') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/news/" @click.native="closeNav">
                {{ $t('nav.news') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/contacts/" @click.native="closeNav">
                {{ $t('nav.contacts') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/news/403/" :prefetch="false" @click.native="closeNav">
                {{ $t('erwin') }}
              </nuxt-link>
            </div>
          </div>
          <div class="uk-flex-between uk-grid-small uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2 offcanvas_main__grid uk-visible@m uk-grid uk-grid-stack" uk-grid="">
            <div class="uk-first-column">
              <nuxt-link class="txt18 " to="/yachts/" @click.native="closeNav">
                {{ $t('nav.yachts') }}
              </nuxt-link>
<!--              <nuxt-link class="txt18 " to="/trams/" @click.native="closeNav">-->
<!--                {{ $t('nav.trams') }}-->
<!--              </nuxt-link>-->
              <nuxt-link class="txt18 " to="/yachts/schedule/" @click.native="closeNav">
                {{ $t('nav.yachts_schedule') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/categories/" @click.native="closeNav">
                {{ $t('nav.categories') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/menu/" @click.native="closeNav">
                {{ $t('nav.menu') }}
              </nuxt-link>
              <nuxt-link class="txt18 " to="/news/403/" :prefetch="false" @click.native="closeNav">
                {{ $t('erwin') }}
              </nuxt-link>




              <div class="offcanvas_main__grid__item1__buy__tickets">

              </div>





            </div>
            <div class=" ">
              <div class="txt18 ">
                {{ $t('nav.buy_tickets') }}
              </div>
              <ul class="footer_nav">
                <li>
                  <nuxt-link class="" to="/yachts/schedule/" @click.native="closeNav">
                    {{ $t('nav.yachts_tickets') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/trams/schedule/" @click.native="closeNav">
                    {{ $t('nav.trams_schedule') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/certificates/" @click.native="closeNav">
                    {{ $t('nav.certificates') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/theatrical/" @click.native="closeNav">
                    {{ $t('nav.theatrical') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/flights/" @click.native="closeNav">
                    {{ $t('nav.flights') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/refund/" @click.native="closeNav">
                    {{ $t('refund.head') }}
                  </nuxt-link>
                </li>
              </ul>
              <nuxt-link class="txt18 " to="/rent/" @click.native="closeNav">
                {{ $t('nav.rent') }}
              </nuxt-link>
            </div>
            <div>
              <nuxt-link class="txt18 " to="/news/" @click.native="closeNav">
                {{ $t('nav.news') }}
              </nuxt-link>
              <ul class="footer_nav">

                <li>
                  <nuxt-link class="" to="/news/?grp=article" @click.native="closeNav">
                    {{ $t('news') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/news/?grp=action" @click.native="closeNav">
                    {{ $t('action') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/news/?grp=event" @click.native="closeNav">
                    {{ $t('event') }}
                  </nuxt-link>
                </li>
              </ul>
              <nuxt-link class="txt18  uk-visible@s" to="/rules/" @click.native="closeNav">
                {{ $t('nav.rules') }}
              </nuxt-link>
              <ul class="footer_nav uk-visible@s">
                <li>
                  <nuxt-link :to="{ path: '/rules', hash: '#rules-performance'}" replace class="" @click.native="closeNav">
                    {{ $t('tech_specs') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/rules', hash: '#rules-security'}" replace  class="" @click.native="closeNav">
                    {{ $t('security') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/rules', hash: '#rules-security-video'}" replace class="" @click.native="closeNav">
                    {{ $t('security_videos') }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="uk-visible@s">
              <nuxt-link class="txt18 " to="/about/" @click.native="closeNav">
                {{ $t('nav.about') }}
              </nuxt-link>
              <ul class="footer_nav">
                <!-- <li>
                  <a href="/about.html#sroll-about;119" class="transition">
                    О нас
                  </a>
                </li> -->

                <li>
                  <nuxt-link :to="{ path: '/about', hash: '#cap'}" replace class="" @click.native="closeNav">
                    {{ $t('company_people') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/about', hash: '#gallery'}" replace class="" @click.native="closeNav">
                    {{ $t('photo_gallery') }}&nbsp;
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/about', hash: '#video'}" replace class="" @click.native="closeNav">
                    {{ $t('video') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/about', hash: '#rewards'}" replace class="" @click.native="closeNav">
                    {{ $t('rewards') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/about', hash: '#job'}" replace class="" @click.native="closeNav">
                    {{ $t('vacancies') }}
                  </nuxt-link>
                </li>
                <!-- <li>
                  <a href="/about.html#document;119" class="transition">
                    Документы
                  </a>
                </li>
                <li>
                  <a href="/about.html#partners;119" class="transition">
                    Партнеры
                  </a>
                </li> -->
              </ul>
              <nuxt-link class="txt18 transition offcanvas_menu__link2 uk-offcanvas-close" to="/contacts/" @click.native="closeNav">
                {{ $t('nav.contacts') }}
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="offcanvas_bottom">
          <div class="footer__bottom ">
            <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div class="footer__bottom_item1 uk-width-1-4@m uk-width-auto@s uk-width-1-1 uk-first-column">
                <div> © {{ new Date().getFullYear() }}, {{ $t('footer.credits') }}</div>
                <nuxt-link to="/politic/" class="transition footer__bottom_item2__link uk-hidden@m uk-offcanvas-close"  @click.native="closeNav">
                  {{ $t('footer.politic') }}
                </nuxt-link>
              </div>
              <div class="footer__bottom_item2  uk-width-1-4 uk-visible@m">
                <nuxt-link to="/politic/" class=""  @click.native="closeNav">
                  {{ $t('footer.politic') }}
                </nuxt-link>
              </div>
              <div class="footer__bottom_item4  uk-width-auto@s">
<!--                <div class="social_links">
                  <a href="" target="_blank" class="uk-offcanvas-close">
                    <svg-icon name="facebook" class="icon"/>
                  </a>
                  <a href="" target="_blank"  class="uk-offcanvas-close">
                    <svg-icon name="vkontakte" class="icon"/>
                  </a>
                  <a href="" target="_blank"  class="uk-offcanvas-close">
                    <svg-icon name="inst_soc" class="icon"/>
                  </a>
                  <a href="" target="_blank"  class="uk-offcanvas-close">
                    <svg-icon name="you" class="icon"/>
                  </a>
                </div>-->
                <SocialBlock/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- </transition> -->
</template>

<script>
import SocialBlock from "./SocialBlock";
import {mapGetters} from "vuex";
export default {
  name: "SideNav",
  components: {SocialBlock},
  computed: {
    ...mapGetters(['tramsDoc']),
    isActive () {
      return this.$store.state.showNav
    },
  },
  watch: {
    isActive (val) {
      if (val) {
        
          //console.log('home-right')
          this.homeTransition = 'home-right'
        
      } else {
        
          //console.log('home-left')
          this.homeTransition = 'home-left'
        
      
    }
  },
  },
  methods: {
    closeNav() {
      this.$store.commit('changeNavState', false)
      document.body.classList.remove('uk-offcanvas-page')
    },
  },
  transition: {
    name: 'home-right',
    mode: 'out-in'
  },
  data() {
    return {
      homeTransition: 'home-right',
    }
  },
  async fetch() {
    await this.$store.dispatch('getActualDoc')
  },
  fetchOnServer: true,
  fetchKey: 'sideNav'
}
</script>

<style scoped>
.uk-offcanvas-close:hover {
  color: #00c1f3;
}
/*
.uk-offcanvas-bar {
  background: url('~assets/img/inners/back_menu.png') center center/cover no-repeat,#1d2240;
  width: 100%;
  padding: 0;
}

.offcanvas_menu {
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 150px 40px 65px;
}

.offcanvas_main {
  margin-bottom: 60px;
}
.offcanvas_main {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-top: none;
}

.offcanvas_bottom {
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
}

.offcanvas_bottom .footer__bottom {
  padding-top: 60px;
  border-top: 1px solid rgba(255,255,255,.25);
  color: #fff;
  display: block;
}

.footer__bottom {
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  align-items: center;
  color: rgba(255,255,255,.5);
  border-top: 1px solid #5c66a5;
}

.offcanvas_main__head {
  border-bottom: 1px solid rgba(255,255,255,.25);
  padding-bottom: 50px;
  margin-bottom: 90px;
}
.headline_p1 {
  font-size: 66px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.2;
  font-family: cowor,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}

.offcanvas_main__grid .txt18 {
  display: block;
  font-weight: 700;
}

.offcanvas_main__grid .txt18+.txt18 {
  margin-top: 35px;
}

.footer_nav {
  list-style: none;
  margin: 20px 0 51px;
  padding: 0;
  font-size: 12px;
}

.footer_nav li {
  margin-top: 13px;
}
.offcanvas_main__grid>div:nth-child(2)>:last-child {
  margin-top: 121px;
}*/
.display-block{
  display: block;
  transition: width 0.4s ease-out;
}
.display-block-on {
  
  width: 100%;
}
.display-block-off {
  width: 0%;
  
}
.side-slide{
  width: 100%;
  transition: left 0.3s ease-out;
}
.slide-on{
  left:0;
}
.slide-off{
  left:-100vw;
}
.uk-offcanvas-close {
  position: static;
}

.home-enter-active, 
.home-leave-active { 
  transition: opacity .5s; 
}
/* we will explain what these classes do next! */
.home-left-leave-active,
.home-left-enter-active,
.home-right-leave-active,
.home-right-enter-active {
  transition: all 15.3s;
}


.home-left-enter {
  transform: translate(100vw, 0);
}
.home-left-enter-to {
  transform: translate(-100vw, 0);
}

.home-left-leave-to {
  transform: translate(-100vw, 0);
}

.home-right-enter {
  transform: translate(-100vw, 0);
}
.home-right-enter-to {
  transform: translate(0, 0);
}

.home-right-leave-to {
  transform: translate(100vw, 0);
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* .nav-menu-off{
  transform: translate(-100vw, 0);
}
.nav-menu-on{
  transform: translate(0, 0);
} */

</style>
