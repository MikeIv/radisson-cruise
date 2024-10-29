<script>
import SecurityCard from "../../components/rules/SecurityCard.vue";
import Header from "../../components/Header.vue";
import PhotoCardTram from "../../components/PhotoCardTram.vue";
import VideoNavItem from "../../components/rules/VideoNavItem.vue";
import VideoItem from "../../components/rules/VideoItem.vue";
import DaysTable from "../../components/yachts/schedule/DaysTable.vue";
import MobileTable from "../../components/yachts/schedule/MobileTable.vue";
import UIkit from "uikit";
import ChildInfo from "../../components/modals/ChildInfo.vue";
import CategoryInfo from "../../components/modals/CategoryInfo.vue";
import PhotoCard from "../../components/PhotoCard.vue";
import YachtType from "../../components/rules/YachtType.vue";
import MenuCategoryCard from "../../components/menu/MenuCategoryCard.vue";
import CruiseItem from "../../components/tickets/CruiseItem.vue";
import Cabin from "../../components/yachts/cabin/Cabin.vue";
import CategoryInfoSmall from "~/components/modals/CategoryInfoSmall.vue";

export default {
  name: "category-landing",
  components: {
    CategoryInfoSmall,
    Cabin,
    CruiseItem,
    MenuCategoryCard,
    YachtType,
    PhotoCard,
    CategoryInfo,
    ChildInfo,
    MobileTable, DaysTable, VideoItem, VideoNavItem, PhotoCardTram, Header, SecurityCard
  },
  data() {
    return {
      seoData: {},
      video: {},
      descriptionBlock: {
        text: 'Знакомство с Флотилией «Рэдиссон Ройал» следует начать с круиза в Основном зале. ' +
            'Просторный и вместе с тем уютный салон располагает всеми средствами для вашего комфортного времяпрепровождения.' +
            ' При входе на борт, по желанию, верхнюю одежду можно оставить в гардеробе. ' +
            'Вежливый персонал проводит вас до любого понравившегося вам столика и предложит меню.' +
            ' В меню преобладает интернациональная кухня: большой выбор закусок и салатов, горячих блюд, авторских десертов и сезонных новинок.' +
            ' Панорамное остекление салона позволяет наслаждаться видами на главные достопримечательности центра столицы, ' +
            'расположенными по маршруту следования яхт.',
        prices: {
          adult: 1600,
          children: 1600,
        },
        list: [
          {
            icon: 'ship',
            text: `
              <span>Рейсовая посадка:</span>
              <span>до 150 персон</span>
            `,
          },
          {
            icon: 'ship',
            text: `
              <span>Рейсовая посадка:</span>
              <span>до 150 персон</span>
            `,
          },
          {
            icon: 'ship',
            text: `
              <span>Рейсовая посадка:</span>
              <span>до 150 персон</span>
            `,
          },
          {
            icon: 'ship',
            text: `
              <span>Рейсовая посадка:</span>
              <span>до 150 персон</span>
            `,
          }
        ]
      },
      menuCards: [],
      securityBlocks: [],
      categoryImages: [],
      routesError: 'Что то пошло не так...',
      showRoutes: [],
      isLoading: true,
      categoryInfo: null,
      techInfoFetch: [],
      startDate: null,
      endDate: null,
      blocks: [],
      yachts: [],
      categoryId: null,
      yachtsSlider: [],
    }
  },
  computed: {
    currentIcon() {
      switch (this.categoryInfo?.type_id) {
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
  },
  methods: {
    openChildModal() {
      UIkit.modal('#childInfo').show();
    },
    getCategory(id) {
      UIkit.modal('#categoryInfoSmall').show();
    },
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
      ],

    }
  },
  async fetch() {
    const categoryName = this.$route.params.name;
    let categoryNumber = null;
    let categoryTypeId = null;
    /*let categoryData = await this.$axios(`${this.$config.baseURL}categories?slug=${categoryName}&lang=${this.$i18n.locale}`);
    this.categoryInfo = categoryData.data.result;
    categoryNumber = this.categoryInfo?.id;
    categoryTypeId = this.categoryInfo?.type_id*/
    try {
      let categoryData = await this.$axios(`${this.$config.baseURL}categories?slug=${categoryName}&lang=${this.$i18n.locale}`);
      let seoDataResult = await this.$axios.get(
          `${this.$config.baseURL}pages?ref=/categories/${categoryName}/&lang=${this.$i18n.locale}`);
      this.seoData = seoDataResult.data.result
      this.categoryInfo = categoryData.data.result;
      categoryNumber = this.categoryInfo?.id;
      categoryTypeId = this.categoryInfo?.type_id
    } catch(error) {
      this.$nuxt.error({ statusCode: 404, message: 'Data not found' })
    }

    let safeListData = await this.$axios.get(
        `${this.$config.baseURL}safetylist?category_id=${categoryNumber}&lang=${this.$i18n.locale}`);
    let blocksData = await this.$axios.get(
        `${this.$config.baseURL}blocks?page=landing&category_id=${categoryNumber}&lang=${this.$i18n.locale}`);
    let yachtsData = await this.$axios.get(
        `${this.$config.baseURL}yachts?category_id=${categoryNumber}&lang=${this.$i18n.locale}`);
    let videoData = await this.$axios.get(
        `${this.$config.baseURL}yvideos?category_id=${categoryNumber}&lang=${this.$i18n.locale}`);
    let menus = await this.$axios.get(
        `${this.$config.baseURL}menus?category_id=${categoryNumber}&lang=${this.$i18n.locale}`);
    this.yachts = await yachtsData.data;
    this.yachtsSlider = this.yachts[0]?.yachts.concat(this.yachts[1]?.yachts)
    this.video = await videoData.data[0];
    this.blocks = blocksData.data;
    this.techInfoFetch = yachtsData.data
    this.securityBlocks =  safeListData.data;
    //console.log(menus.data)
    this.menuCards = menus.data
    try {
      let today = new Date()
      let now = today.toISOString().split('T')[0]
      let threeDays = new Date(today.setDate(today.getDate() + 2)).toISOString().split('T')[0]
      let sevenDays = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0]
      let allAvailableDays = new Date(today.setDate(today.getDate() + 90)).toISOString().split('T')[0]
      let tableRoutesDays
      this.startDate = now;
      if (this.categoryInfo.type_id == '1' ||
          this.categoryInfo.type_id == '7' ||
          this.categoryInfo.type_id == '6'
      ) {
        tableRoutesDays = allAvailableDays;
        this.endDate = allAvailableDays;
      } else if (this.categoryInfo.type_id == '3') {
        tableRoutesDays = sevenDays;
        this.endDate = sevenDays;
      } else {
        tableRoutesDays = threeDays;
        this.endDate = sevenDays;
      }
      let dayRoutes = await this.$axios.get(
          `${this.$config.baseURL}routes?date=${now}&end=${tableRoutesDays}&type_id[]=${categoryTypeId}&lang=${this.$i18n.locale}`);
      if(this.showRoutes.length === 0) {
        this.routesError = 'Нет доступных рейсов данной категории на ближайшие даты'
      }
      this.showRoutes = Object.entries(dayRoutes.data.routes).map(item => {
        return {
          date: item[0],
          routes: item[1]
        }
      })
      //console.log("fetch() showRoutes = ",this.showRoutes);

      this.isLoading = false;
    } catch {

    }
  },
  fetchOnServer: true,
  fetchKey: 'category-item',
}

</script>


<template>
  <div>
    <Header сlass="category_item-header">
      <img :src="`${$config.imageURL}?size=1920&format=webp&src=${$config.baseSiteURL}`+categoryInfo?.image"
           :data-src="`${$config.imageURL}?size=1920&format=webp&src=${$config.baseSiteURL}`+categoryInfo?.image"
           class="img_cover"
           alt=""
           v-if="categoryInfo?.image"
      >
      <img v-else src="~images/main/back1.webp" data-src="~images/main/back1.webp" class="img_cover" alt="">
      <div class="category_item-title uk-container uk-position-relative">
        <svg-icon :name="`categories/${categoryInfo?.icon}`"/>
        <h1>{{categoryInfo?.name}}</h1>
      </div>
    </Header>
    <section class="uk-cover-container category_item-gallery">
      <div class="uk-position-relative">
        <h5 class="category_item-section--title uk-container">
          {{ $t('photo_gallery') }}
        </h5>
        <div class="uk-position-relative yacht__slider uk-slider uk-slider-container" uk-slider="">
          <ul class="uk-slider-items uk-flex" uk-lightbox="">
            <li class="uk-active" tabindex="-1" v-for="(slide, index) in categoryInfo?.slides" :key="'sld' + index">
              <PhotoCard :fileName="slide"/>
            </li>
          </ul>
          <div class="yacht__slider_navigation">
            <div class="slider_numbers">
              <div class="slider_number">01</div>
              <div class="slider_num_bread">/</div>
              <div class="slider_amount">{{ categoryInfo?.slides?.length }}</div>
            </div>
            <div class="slider_arrows">
              <a class="" href="#" uk-slider-item="previous">
                <svg-icon name="arr_lang" class="icon"/>
              </a>
              <a class="" href="#" uk-slider-item="next">
                <svg-icon name="arr_lang" class="icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="category_item-description">
      <img :src="`${$config.imageURL}?size=1920&format=webp&src=${$config.baseSiteURL}`+categoryInfo?.background"
           :data-src="`${$config.imageURL}?size=1920&format=webp&src=${$config.baseSiteURL}`+categoryInfo?.background"
           class="img_cover"
           alt=""
           v-if="categoryInfo?.background"
      >
      <img v-else data-src="~assets/img/inners2/about6.png" alt="" class="img_cover" src="~assets/img/inners2/about6.png">
      <div class="uk-container uk-position-relative">
        <div class="about-advantages__grid">
          <div class="about-advantages__headline uk-position-relative">
            <h5 class="category_item-description--title">{{categoryInfo?.title}}</h5>
            <p class="category_item-description--text">
              {{ categoryInfo?.content }}
            </p>
            <div class="category_item-description--tickets">
              <div class="category_item-description-price">
                <svg-icon name="categories/Cena"/>
                <div class="category_item-description-price--item">
                  <span>{{ $t('adult') }}</span>
                  <span class="category_item-description-price--number">{{ categoryInfo?.price_adult }} ₽</span>
                </div>
                <div v-if="categoryInfo?.price_child != 0" class="category_item-description-price--item">
                  <span>{{ $t('children') }}</span>
                  <span class="category_item-description-price--number">{{ categoryInfo?.price_child }} ₽</span>
                </div>
              </div>
              <nuxt-link :to="`/yachts/schedule/?start=${startDate}&end=${endDate}&category=${categoryInfo?.type_id}`"
                         class="category_item-description--button uk-button"
                         v-if="categoryInfo.type_id !== null"
              >
                {{$t('buttons.buy_ticket')}}
              </nuxt-link>
            </div>
          </div>
          <div class="about-advantages__info">
            <img src="~assets/img/svg/half-circle.svg" alt="" class="advantages__info__decor" uk-svg>
            <div class="about-advantages__info__item" v-for="(item, index) in categoryInfo?.blockicons" :key="'dscr'+ index">
              <div class="about-advantages__info__item--icon">
                <svg-icon :name="`description/${item.icon}`"/>
              </div>
              <div v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="categoryInfo.type_id !== null" class="uk-container category_item-schedule">
      <h5 class="category_item-section--title uk-container">
        {{ $t('cruise_list') }}
      </h5>
      <div v-if="!showRoutes.length" class="no-routes">
        {{ routesError }}
      </div>
      <div v-else>
        <DaysTable
            v-for="(dayRoute, index) in showRoutes"
            :key="'tbl' + index"
            :aboutDays="dayRoute.routes"
            :day="dayRoute.date"
            @get-category="getCategory"
            @open-child-modal="openChildModal"
        />
        <MobileTable
            v-for="(dayRoute, index) in showRoutes"
            :key="'tblMob' + index"
            :day-route="dayRoute"
            @get-category="getCategory"
            @open-child-modal="openChildModal"
        />
      </div>
      <nuxt-link :to="`/yachts/schedule/?start=${startDate}&end=${endDate}&category=${categoryInfo?.type_id}`"
                 class="category_item-schedule--more">
        {{$t('routes_all')}}
      </nuxt-link>
    </section>
    <section ref="DocBlock" id="DocumentBlocks">
      <CruiseItem v-for="(cruise,index) in blocks" :key="`crs3` + index"
                  :title="cruise.name"
                  :decor="cruise.decor"
                  :text="cruise.content"
                  :svgName="cruise.background"
                  :linkBuy="cruise.linkbuy"
                  :linkMore="cruise.linkmore"
                  :fileNames="cruise.images"/>
    </section>
    <section v-if="menuCards.length > 0" class="category_item-menu">
      <div class="category_item-menu--wrapper uk-container">
        <h5 class="category_item-section--title uk-container">
          {{ $t('menu') }}
        </h5>
        <div class="category_item-menu--items">
          <MenuCategoryCard
              v-for="(item,index) in menuCards"
              :key="'mnu'+ index"
              :card="item"
          />
        </div>
      </div>
    </section>
    <section v-if="yachtsSlider.length > 0" class="category_item-yachts">
      <div class="category_item-yachts--wrapper">
        <h5 class="category_item-section--title uk-container">
          {{ $t('yachts') }}
        </h5>
        <div class="uk-position-relative yacht__slider uk-slider uk-slider-container category_item-yachts--items"
             uk-slider="">
          <ul class="uk-slider-items uk-flex">
            <li class="category_item-yachts--slide" v-for="(cabin, index) in yachtsSlider" :key="'sld2' + index">
              <Cabin :name="cabin.name"
                     :fileName="cabin.image"
                     :capImg="cabin.captain_image"
                     :capName="cabin.captain"
                     :experience="cabin.captain_experience"
                     :year="cabin.year"
              />
            </li>
          </ul>
          <div class="yacht__slider_navigation">
            <div class="slider_numbers">
              <div class="slider_number">01</div>
              <div class="slider_num_bread">/</div>
              <div class="slider_amount">{{ yachtsSlider?.length }}</div>
            </div>
            <div class="slider_arrows">
              <a class="" href="#" uk-slider-item="previous">
                <svg-icon name="arr_lang" class="icon"/>
              </a>
              <a class="" href="#" uk-slider-item="next">
                <svg-icon name="arr_lang" class="icon"/>
              </a>
            </div>
          </div>
        </div>
        <h5 class="category_item-section--title uk-container">
          {{ $t('security') }}
        </h5>
      </div>
    </section>
    <section>
      <YachtType v-for="(yacht, index) in techInfoFetch" :key="'ycht' + index"
                 :title="yacht.listyachts"
                 :description="yacht.description"
                 :yachtClass="yacht.caption"
                 :yachtUp="yacht.svg1"
                 :yachtLow="yacht.svg2"
                 :topCabin="yacht.upperdeck"
                 :infoItems="yacht.equipment"
                 :mainCabin="yacht.opendeck"
                 :bottomCabin="yacht.lowerdeck"
      />
    </section>
    <section v-if="video" class="uk-cover-container rules-security-video__section" id="rules-security-video">
      <img data-src="~assets/img/inners2/rules8.png" alt="" class="img_cover" src="~assets/img/inners2/rules8.png">
      <div class="uk-container uk-position-relative">
        <h5 class="headline_56">
          {{ $t('security_videos') }}
        </h5>
        <h6>
          {{ video?.yachts }}
        </h6>
        <div class="uk-position-relative rules-security-video__container video" id="video" data-container="video">
          <iframe class="video_item" :id="'video'" width="100%" height="100%" style="aspect-ratio: 16/9"
                  :src="video?.youtube + '?enablejsapi=1'">
          </iframe>
        </div>
      </div>
    </section>
    <section class="padding_top padding_bottom rules-about2__section">
      <div class="uk-container">
        <div class="uk-flex uk-flex-wrap uk-child-width-1-2@l uk-grid-match rules-about2__grid">
          <div class="margin-bot10" v-for="(card, index) in securityBlocks" :key="'scrty' + index">
            <SecurityCard :card-title="card.name"
                          :card-type="card.type"
                          :card-content="card.content"
                          :card-icon="card.icon"
                          :card-style="card.style"
            />
          </div>
        </div>
      </div>
    </section>
    <ChildInfo/>
    <CategoryInfo :info="categoryInfo"/>
    <CategoryInfoSmall :info="categoryInfo"/>
  </div>
</template>
<!--<style>
@media screen and (max-width: 639px) {
  .cabin__header__info {
    display: none;
  }
}
</style>-->
<style scoped>
header {
  padding-top: 0;
  min-height: 70dvh;
  padding-bottom: 10vh;
  max-height: 660px;
  display: grid;
  grid-auto-rows: 1fr 1fr;
}

.category_item-title {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 17px;
  align-self: self-start;
}

.category_item-title svg {
  fill: #00C1F3;
  width: 90px;
  height: 90px;
}

.category_item-title h1 {
  font-size: clamp(24px, 5vw, 64px);
  font-weight: 700;
  text-transform: uppercase;
}

.category_item-section--title {
  font-size: clamp(18px, 5vw, 50px);
  font-weight: 700;
  text-transform: uppercase;
}

.category_item-gallery .category_item-section--title {
  margin-top: 73px;
  margin-bottom: 51px;
}

.category_item-gallery .uk-slider {
  height: 575px;
  color: #fff;
}

.category_item-schedule .category_item-section--title {
  margin-top: 73px;
  margin-bottom: 23px;
}

.category_item-schedule {
  padding-bottom: 46px;
}

.category_item-schedule--more {
  border: 2px solid #1D2240;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #1D2240;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-align: center;
  width: 100%;
  max-width: 160px;
  height: 40px;
  margin: 46px auto 0;
}

.category_item-menu {
  background: #FFFFFF;
  padding: 77px 0 100px;
}

.category_item-menu .category_item-section--title {
  margin-bottom: 50px;
}

.category_item-menu--items {
  display: grid;
  gap: 43px;
  grid-template-columns: 1fr 1fr 1fr;
}

.category_item-yachts {
  background: linear-gradient(280deg, #3c4892 0%, #1d2241 100%);
}

.category_item-yachts .category_item-section--title {
  color: #ffffff;
  padding-top: 70px;
  padding-bottom: 56px;
}

.category_item-yachts .yacht__slider_navigation {
  color: #fff;
}

.category_item-yachts--slide {
  width: 100%;
}

.rules-security-video__section h5 {
  padding-left: 4%;
  font-size: max(18px, min(5vw, 50px));
}

.rules-security-video__section h6 {
  margin-bottom: 15px;
  margin-top: 50px;
  font-weight: 500;
  font-size: max(12px, min(2vw, 20px));
  padding-left: 4%;
}

.category_item-description {
  position: relative;
  padding: 115px 0 120px;
}

.about-advantages__grid {
  justify-content: space-between;
  max-width: 100%;
}

.about-advantages__info {
  width: 45%;
  max-width: 100%;
}

.advantages__info__decor {
  height: 105%;
  left: 35px;
}

.about-advantages__headline {
  max-width: 710px;
  width: 50%;
}

.category_item-description--title {
  color: #fff;
  font-size: max(24px, min(5vw, 32px));
  font-weight: 700;
  display: inline-block;
  margin-bottom: 10px;
}

.category_item-description--title::before {
  content: '';
  width: 100%;
  height: 2px;
  display: block;
  background: #00C1F3;
  margin-bottom: 40px;
}

.category_item-description--text {
  color: #fff;
  font-size: 16px;
  width: 100%;
  max-width: 670px;
  margin-bottom: 70px;
  line-height: 1.6;
}

.category_item-description--tickets {
  background: #FFFFFF;
  padding: 31px 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap:wrap;
  gap: 10px;
}

.category_item-description-price svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.category_item-description-price {
  display: flex;
  gap: 15px;
  align-items: center;
}

.category_item-description-price--item {
  color: #232323;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.category_item-description-price--number {
  font-weight: 700;
  font-size: 18px;
}

.about-advantages__info__item--icon {
  margin-top: 0;
  width: 85px;
  height: 85px;
  flex:none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #00C1F3, white);
}

.about-advantages__info__item--icon svg {
  width: 45px;
  height: 45px;
}

.about-advantages__info__item {
  display: flex;
  gap: 35px;
  align-items: center;
  color: #FFF;
  margin-top: 0;
  margin-bottom: 46px;
}
.about-advantages__info__item:first-of-type {
  padding-left: 45px;
  margin-top: 60px;
}
.about-advantages__info__item:last-child {
  padding-left: 45px;
}

.flight:nth-child(even) {
  flex-direction: row-reverse;
}

@media screen and (max-width: 1200px) {
  .category_item-menu--items {
    grid-template-columns: 1fr 1fr;
  }
  .about-advantages__info {
    margin-top: 0;
    width: 40%;
  }
  .about-advantages__headline {
    width: 60%;
  }
}


@media screen and (max-width: 959px) {
  .flight:nth-child(even) {
    flex-direction: column;
  }

  .category_item-yachts--items {
    height: auto;
  }
  .about-advantages__info {
    margin-top: 100px;
    width: 100%;
    max-width: 100%;
    margin-left: 10%;
  }
  .about-advantages__headline {
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .category_item-menu--items {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
}

@media screen and (max-width: 639px) {
  /*>>> .cabin__header__info {
    display: none;
  }*/
  .advantages__info__decor {
    display: block;
  }
  .about-advantages__info {
    margin-left: 0;
  }
  .category_item-description--text {
    font-size: 12px;
  }
  .category_item-description-price {
    gap: 5px;
  }
}

@media screen and (max-width: 525px) {
  .category_item-menu--wrapper {
    padding: 0 10px;
  }

  .category_item-menu--items {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  .category_item-description--tickets {
    padding: 15px 5px;
  }
  .category_item-description {
    padding: 30px 0;
  }
}

/*@media screen and (max-width: 639px) {
  .category_item-menu--items {
    grid-template-columns: 1fr;
  }
}*/


.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>