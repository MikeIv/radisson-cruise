<template>
  <div class="header__top_item4-container">
    <div class="header__top_item4">
      <div class="language-container">
        <a v-if="allAvailableLocales.length > 1" href="#" class="language" aria-expanded="false">
          <span>{{ currentLang }}</span>
          <svg-icon name="arr_lang" class="icon header__top_logo transition"/>
        </a>
        <div uk-dropdown="mode: click;offset: 5;" class="language_drop uk-dropdown">
          <ul class="">
            <li v-for="locale in availableLocales"
                :key="locale.code">
              <a :href="switchLocalePath(locale.code).replace('?', '/?')">
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
    routeQuery() {
      if(!this.$route.query) return ''
      return Object.keys(this.$route.query)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(this.$route.query[key])}`)
          .join('&')
    },
    isActive() {
      return this.$store.state.showNav
    },

    allAvailableLocales () {
      return this.$i18n.locales.filter(i => i.active)
    },

    availableLocales () {
      return this.$i18n.locales.filter(i =>  i.code !== this.$i18n.locale)
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
.language_drop {
  background: #1d2240;
}
.language_drop a:hover {
  background: #00c1f3;
  color: #fff;
  text-decoration: none;
}

.language {
  flex-direction: column;
}

.language svg {
  margin-left: 0;
}

@media screen and (max-width: 639px) {
  .header__top_item4-container, .language-container, .header_top_menu {
    width: 100%;
  }
  .language-container, .header_top_menu {
    width: 50px;
    height: 50px;
  }
  .language {
    height: 50px;
  }
  .language svg {
    margin-left: 5px;
  }
}
@media screen and (max-width: 428px) {
  .language-container, .header_top_menu, .language{
    width: 40px;
    height: 40px;
  }
  .language svg {
    margin-left: 2px;
  }
  .language_drop {
    min-width: auto;
    width: 40px;
  }
  .language_drop a {
    padding: 0;
    height: 40px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
