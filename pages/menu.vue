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
            {{ seoData?.header || 'Меню' }}
          </h1>
        </div>
      </div>
    </Header>
    <div class="">
      <div class="menu-cafe">
        <MenuCard v-for='(card, index) in menuFetch'
                  :key="'crd' + index"
                  :title="card.name"
                  :fileName="card.image"
                  :fileNameSmall="card.imagesmall"
                  :description="card.description"
                  :customClass="card.cardclass"
                  :pdf="card.pdf"
        />
      </div>
    </div>
  </div>

</template>

<script>
import Header from "../components/Header";
import MenuCard from "../components/menu/MenuCard";
import Breadcrumbs from "../components/Breadcrumbs";
import axios from "axios";
export default {
  name: "Menu",
  components: {Breadcrumbs, MenuCard, Header},
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
      menuCard: [
        {
          customClass: 'menu-cafe__item1',
          fileName: 'inners/rest2.png',
          fileNameSmall: "",
          title: 'pages.menu.places.cart.title',
          description: `pages.menu.places.cart.description`
        },
        {
          customClass: 'menu-cafe__item2',
          fileName: 'inners/rest3.png',
          fileNameSmall: 'inners/rest3-small.png',
          title: 'pages.menu.places.vine.title',
          description: `pages.menu.places.vine.description`
        },
        {
          customClass: 'menu-cafe__item3',
          fileName: 'inners/rest4.png',
          fileNameSmall: '',
          title: 'pages.menu.places.pub',
          description: ``
        },
        {
          customClass: 'menu-cafe__item4',
          fileName: 'inners/rest5.png',
          fileNameSmall: '',
          title: 'pages.menu.places.royal.title',
          description: `pages.menu.places.royal.description`
        },
        {
          customClass: 'menu-cafe__item5',
          fileName: 'inners/rest6.png',
          fileNameSmall: '',
          title: 'pages.menu.places.erwin.title',
          description: `pages.menu.places.royal.description`
        },
        {
          customClass: 'menu-cafe__item6',
          fileName: 'inners/rest7.png',
          fileNameSmall: '',
          title: 'pages.menu.places.cocktail',
          description: ``
        },
        {
          customClass: 'menu-cafe__item7',
          fileName: 'inners/rest8.png',
          fileNameSmall: '',
          title: 'pages.menu.places.child',
          description: ``
        },
        {
          customClass: 'menu-cafe__item8',
          fileName: 'inners/rest9.png',
          fileNameSmall: '',
          title: 'pages.menu.places.season',
          description: ``
        },
        {
          customClass: 'menu-cafe__item9',
          fileName: 'inners/rest10.png',
          fileNameSmall: '',
          title: 'pages.menu.places.desert',
          description: ``
        },
      ],
      menuFetch: [],
      seoData: {}
    }
  },
  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/menu/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let menus = await axios.get(
      `${this.$config.baseURL}menus?lang=${this.$i18n.locale}`);
    //console.log(menus.data)
    this.menuFetch = menus.data
  },
  fetchOnServer: true,
  fetchKey: 'menu',
}
</script>

<style scoped>
.component_header {
  padding:0;
}

/*
.menu-cafe {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.menu-cafe__item {
  padding: 76px 80px;
  min-height: 375px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
}
.menu-cafe__item1 {
  grid-area: 1/1/2/3;
}
.menu-cafe__item2 {
  grid-area: 1/3/3/4;
}
.menu-cafe__item3 {
  grid-area: 1/4/2/5;
}

.menu-cafe__item4 {
  grid-area: 2/1/3/2;
}
.menu-cafe__item5 {
  grid-area: 2/2/3/3;
}

.menu-cafe__item6 {
  grid-area: 2/4/3/5;
}

.menu-cafe__item7 {
  grid-area: 3/1/4/2;
}

.menu-cafe__item8 {
  grid-area: 3/2/4/3;
}

.menu-cafe__item9 {
  grid-area: 3/3/4/5;
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

.button_menu-cafe {
  font-size: 10px;
  width: 210px;
}

.headline_26 {
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 700;
}

.menu-cafe__item_txt {
  max-width: 254px;
  margin-top: 30px;
  font-size: 14px;
  line-height: 1.8;
}

.uk-button-secondary {
  background: 0 0;
  border-color: #fff;
  color: #fff;
  margin-top: 29px;
  font-weight: 700;
}
*/

</style>
