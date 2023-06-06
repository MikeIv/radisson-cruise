<template>
  <div class="header__top_item4-container">
    <div class="header__top_item4">
      <div class="language-container">
<!--        <a href="#" class="language" aria-expanded="false">
          <span>{{ currentLang }}</span>
          <svg-icon name="arr_lang" class="icon header__top_logo transition"/>
        </a>-->
        <div uk-dropdown="mode: click;offset: 5;" class="language_drop uk-dropdown">
          <ul class="">
            <li v-for="locale in availableLocales"
                :key="locale.code">
              <a :href="switchLocalePath(locale.code)">
                {{ locale.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button class="header_top_menu" :class="{'open' : isActive}" @click="switchMenu">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import SideNav from "./SideNav";
// import HeaderInner from "./HeaderInner";
import UIkit from "uikit";
export default {
  name: 'Header',
  props: {},
  components: {SideNav},
  data() {
    return {
      // isActive: false,
    }
  },

  computed: {

    isActive() {
      return this.$store.state.showNav
    },

    availableLocales () {
      return this.$i18n.locales.filter(i => i.active && i.code !== this.$i18n.locale)
    },

    currentLang() {
      return this.$i18n.localeProperties.name
    },
  },
  methods: {
    switchMenu() {
      this.$store.commit('changeNavState', !this.isActive)
      if (this.isActive) {
        document.body.classList.add('uk-offcanvas-page')
        //UIkit.alert('.old-site').close();
      } else {
        document.body.classList.remove('uk-offcanvas-page')
      }
    },
  },
};

</script>
<style scoped>
.header_top_back.uk-sticky-fixed {
  background: #1d2240;
}

.language_drop a:hover {
  background: #00c1f3;
  color: #fff;
  text-decoration: none;
}
</style>
