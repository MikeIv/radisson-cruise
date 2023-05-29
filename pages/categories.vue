<template>
  <div>
    <Header>
      <img src="~images/inners/rest1.webp" data-src="~images/inners/rest1.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ seoData?.header || 'Категории салонов' }}
          </h1>
        </div>
      </div>
    </Header>
    <div uk-filter="target: .js-filter">
      <div class="category-cabin__top">
        <div class="uk-container">
          <ul class="uk-nav uk-flex category-cabin__navigation uk-visible@s">
            <li class="uk-button button_switcher-second" uk-filter-control="">
              <button>{{ $t('all') }}</button>
            </li>
            <li class="uk-button button_switcher-second"
                v-for="(tab,index) in categoriesFetch"
                :key="'tab1' + index" :uk-filter-control="`[data-color='${tab.name}']`"
            >
              <button>{{ tab.name }}</button>
            </li>
          </ul>

          <a href="#modal-category-cabin-filter" class="uk-button btn-news-filter uk-hidden@s" uk-toggle="">
            <span>{{ $t('buttons.open_filter') }}</span>
            <svg-icon class="icon" name="svg-flight4"/>
          </a>
        </div>
      </div>

      <ul class="js-filter">
<!--        <li v-for="(salon, index) in categories" :key="'salon' + index" :data-color="$t(salon.title)">
          <SalonCategory :title="$t(salon.title)" :yachts="salon.yachts" :price="salon.price"/>
        </li>-->
        <li class="category-item" v-for="(salon, index) in categoriesFetch" :id="'category-'+(index+1)" :key="'salon' + index" :data-color="$t(salon.name)">
          <SalonCategory :title="salon.name"
                         :boarding="salon.boarding"
                         :banquet="salon.banquet"
                         :buffet="salon.buffet"
                         :hallarea="salon.hallarea"
                         :content="salon.content"
                         :yachts="salon.yachts"
                         :images="salon.slides"
                         :price="salon.price"/>
        </li>
      </ul>
    </div>
    <FilterMobile
        :is-tabs-filter="true"
        :categories="categoriesFetch"
        ref="filterModal"
        @checked-tabs="checkedFilter"
    />
    <!-- <category-cabin-filter :categories="categoriesFetch"/> -->
  </div>
</template>

<script>
import SalonCategory from "../components/SalonCategory";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import axios from "axios";
import FilterMobile from "../components/modals/Filter";
import CategoryCabinFilter from "../components/modals/CategoryCabinFilter";
export default {
  name: "Categories",
  components: {CategoryCabinFilter, Breadcrumbs, Header, SalonCategory,FilterMobile},
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
      categories: [
        {
          title: `pages.categories.tabs.main`,
          price: '1 500 ₽',
          yachts: [
            {
              name: 'Монтана',
              fileName: 'inners/cat2.png',
              year: '2012',
              params: 'длина – 60,8 м., ширина – 12 м., водоизмещение – 618 тонн',
              speed: '10 узлов',
              engine: 'Volvo Penta',
            },
            {
              name: 'Примавера',
              fileName: 'inners/cat3.png',
              year: '2012',
              params: 'длина – 60,8 м., ширина – 12 м., водоизмещение – 618 тонн',
              speed: '10 узлов',
              engine: 'Volvo Penta',
            }
          ],
        },
        {
          title: `pages.categories.tabs.royal`,
          price: '1 500 ₽',
          yachts: [
            {
              name: 'Монтана',
              fileName: 'inners/cat2.png',
              year: '2012',
              params: 'длина – 60,8 м., ширина – 12 м., водоизмещение – 618 тонн',
              speed: '10 узлов',
              engine: 'Volvo Penta',
            },
            {
              name: 'Примавера',
              fileName: 'inners/cat3.png',
              year: '2012',
              params: 'длина – 60,8 м., ширина – 12 м., водоизмещение – 618 тонн',
              speed: '10 узлов',
              engine: 'Volvo Penta',
            }
          ],
        },
        {
          title: `pages.categories.tabs.first`,
          price: '1 500 ₽',
          yachts: [
            {
              name: 'Монтана',
              fileName: 'inners/cat2.png',
              year: '2012',
              params: 'длина – 60,8 м., ширина – 12 м., водоизмещение – 618 тонн',
              speed: '10 узлов',
              engine: 'Volvo Penta',
            },
            {
              name: 'Примавера',
              fileName: 'inners/cat3.png',
              year: '2012',
              params: 'длина – 60,8 м., ширина – 12 м., водоизмещение – 618 тонн',
              speed: '10 узлов',
              engine: 'Volvo Penta',
            }
          ],
        },
        {
          title: `pages.categories.tabs.erwin`,
          price: '3600 ₽',
          yachts: [
            {
              name: 'Монтана',
              fileName: 'inners/cat2.png',
              year: '2012',
              params: 'длина – 60,8 м., ширина – 12 м., водоизмещение – 618 тонн',
              speed: '10 узлов',
              engine: 'Volvo Penta',
            },
            {
              name: 'Примавера',
              fileName: 'inners/cat3.png',
              year: '2012',
              params: 'длина – 60,8 м., ширина – 12 м., водоизмещение – 618 тонн',
              speed: '10 узлов',
              engine: 'Volvo Penta',
            }
          ],
        }
      ],
      categoriesFetch: [],
      currentSelectedCategory: 0,
      seoData: {}
    }
  },
  watch: {
    currentSelectedCategory(newVal, oldVal){
      if(newVal === 0) {
        this.showAllFilters();
        return;
      }
      this.hideAllFilters();
      document.querySelector(`#category-${newVal}`).classList.remove('hide');
    }
  },
  methods: {
    showAllFilters(){
      const allCategoriesBloks = document.querySelectorAll('.category-item');
      allCategoriesBloks.forEach((item) => {
        item.classList.remove('hide');
      })
    },
    hideAllFilters(){
      const allCategoriesBloks = document.querySelectorAll('.category-item');
      allCategoriesBloks.forEach((item) => {
        item.classList.add('hide');
      })
    },
    checkedFilter(emitFilterPrameters){
      //console.log("PARENT CHECKED emitParam = ", emitFilterPrameters)
      this.currentSelectedCategory = emitFilterPrameters.activeTab;
      //this.filterRoutes();
      
    
    },
  },
  beforeDestroy() {
    console.log("DESTROY Yachts Index =", this.$refs.filterModal);
    this.$refs.filterModal.destroyModal();
  },
  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/categories/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let blocks = await axios.get(
        `${this.$config.baseURL}salons?lang=${this.$i18n.locale}`);
    this.categoriesFetch = blocks.data
  },
  fetchOnServer: true,
  fetchKey: 'categories',
}
</script>

<style scoped>
.hide{
  display: none;
}
.button_switcher-second.active, .button_switcher-second:hover {
  background: #00c1f3;
  border-color: #00c1f3;
}

.button_switcher-second.active button, .button_switcher-second:hover button{
  color:#fff;
}

.button_switcher-second button {
  line-height: normal;
  z-index: 99;
  font-size: 12px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-transform: uppercase;
}
ul{
  padding:0;
  margin:0;
  list-style: none;
}

.category-cabin__navigation .uk-active {
  background: #00c1f3;
  border-color: #00c1f3;
  color:#fff;
}
</style>
