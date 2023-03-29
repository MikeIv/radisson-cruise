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
            {{ $t('pages.menu.title') }}
          </h1>
        </div>
      </div>
    </Header>
    <div class="">
      <!--    <div class="container">
            <ul class="uk-breadcrumb">
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Linked Category</a></li>
              <li class="uk-disabled"><a>Disabled Category</a></li>
              <li><span>{{title}}</span></li>
            </ul>
            <div class="headline_p1">МЕНЮ РЕСТОРАНОВ</div>
          </div>-->
      <!--    <div class="menu-cafe">
            <div class="menu-cafe__item menu-cafe__item1">
              <img class="img_cover" data-src="~assets/img/menu/fish.png" alt="" src="~assets/img/menu/fish.png">
              <div class="uk-position-relative">
                <div class="headline_26 text-upper">
                  Меню а-ля-карт
                </div>
                <div class="menu-cafe__item_txt">
                  Гастрономические круизы – новый уровень
                  удовольствия 365 дней в году.
                </div>
                <a class="uk-button uk-button-secondary button_menu-cafe" href="">
                  <span>ПОСМОТРЕТЬ МЕНЮ</span>
                </a>
              </div>
            </div>
            <div class="menu-cafe__item menu-cafe__item2">
              <picture>
                <source srcset="/img/inners/rest3-small.png" media="(max-width: 1310px)">
                <source srcset="~assets/img/menu/rest3.png">
                <img class="img_cover" data-src="~assets/img/menu/rest3.png" alt="" src="~assets/img/menu/rest3.png">
              </picture>
              &lt;!&ndash; <img uk-img class="img_cover" data-src="/img/inners/rest3.png" alt=""> &ndash;&gt;
              <div class="uk-position-relative">
                <div class="headline_26 text-upper">
                  Винная карта
                </div>
                <div class="menu-cafe__item_txt">
                  Для Вас мы подобрали напитки
                  на любой вкус – легкие и сложные,
                  свежие и согревающие, молодые
                  и выдержанные
                </div>
                <a class="uk-button uk-button-secondary button_menu-cafe" href="">
                  <span>ПОСМОТРЕТЬ МЕНЮ</span>
                </a>
              </div>
            </div>
            <div class="menu-cafe__item menu-cafe__item3">
              <img class="img_cover" data-src="~assets/img/menu/rest4.png" alt="" src="~assetsimg/inners/rest4.png">
              <div class="uk-position-relative">
                <div class="headline_26 text-upper">
                  Карта<br>
                  Бара
                </div>
                <a class="uk-button uk-button-secondary button_menu-cafe" href="">
                  <span>ПОСМОТРЕТЬ МЕНЮ</span>
                </a>
              </div>
            </div>
            <div class="menu-cafe__item menu-cafe__item4">
              <img class="img_cover" data-src="~assets/img/menu/rest5.png" alt="" src="~assetsimg/inners/rest5.png">
              <div class="uk-position-relative">
                <div class="headline_26 text-upper">
                  Ройал класс
                </div>
                <div class="menu-cafe__item_txt">
                  Гастрономическое удовольствие.
                </div>
                <a class="uk-button uk-button-secondary button_menu-cafe" href="">
                  <span>ПОСМОТРЕТЬ МЕНЮ</span>
                </a>
              </div>
            </div>
            <div class="menu-cafe__item menu-cafe__item5">
              <img class="img_cover" data-src="~assets/img/menu/rest6.png" alt="" src="~assetsimg/inners/rest6.png">
              <div class="uk-position-relative">
                <div class="headline_26 text-upper">
                  Erwin.Река
                </div>
                <div class="menu-cafe__item_txt">
                  Ресторан морепродуктов
                </div>
                <a class="uk-button uk-button-secondary button_menu-cafe" href="">
                  <span>ПОСМОТРЕТЬ МЕНЮ</span>
                </a>
              </div>
            </div>
            <div class="menu-cafe__item menu-cafe__item6">
              <img class="img_cover" data-src="~assets/img/menu/rest7.png" alt="" src="~assetsimg/inners/rest7.png">
              <div class="uk-position-relative">
                <div class="headline_26 text-upper">
                  Коктейльное<br>
                  меню
                </div>
                <a class="uk-button uk-button-secondary button_menu-cafe" href="">
                  <span>ПОСМОТРЕТЬ МЕНЮ</span>
                </a>
              </div>
            </div>
            <div class="menu-cafe__item menu-cafe__item7">
              <img class="img_cover" data-src="~assets/img/menu/rest8.png" alt="" src="~assetsimg/inners/rest8.png">
              <div class="uk-position-relative">
                <div class="headline_26 text-upper">
                  Детское<br>
                  меню
                </div>
                <a class="uk-button uk-button-secondary button_menu-cafe" href="">
                  <span>ПОСМОТРЕТЬ МЕНЮ</span>
                </a>
              </div>
            </div>
            <div class="menu-cafe__item menu-cafe__item8">
              <img class="img_cover" data-src="~assets/img/menu/rest9.png" alt="" src="~assetsimg/inners/rest9.png">
              <div class="uk-position-relative">
                <div class="headline_26 text-upper">
                  Сезонное<br>
                  меню
                </div>
                <a class="uk-button uk-button-secondary button_menu-cafe" href="">
                  <span>ПОСМОТРЕТЬ МЕНЮ</span>
                </a>
              </div>
            </div>
            <div class="menu-cafe__item menu-cafe__item9">
              <img class="img_cover" data-src="~assets/img/menu/rest10.png" alt="" src="~assetsimg/inners/rest10.png">
              <div class="uk-position-relative">
                <div class="headline_26 text-upper">
                  Десертное<br>
                  меню
                </div>
                <a class="uk-button uk-button-secondary button_menu-cafe" href="">
                  <span>ПОСМОТРЕТЬ МЕНЮ</span>
                </a>
              </div>
            </div>
          </div>-->
      <div class="menu-cafe">
<!--        <div class="menu-cafe__item menu-cafe__item1">
          <img class="img_cover" data-src="~assets/img/inners/rest2.png" alt="" src="~assets/img/inners/rest2.png">
          <div class="uk-position-relative">
            <div class="headline_26 text-upper">
              Меню а-ля-карт
            </div>
            <div class="menu-cafe__item_txt">
              Гастрономические круизы – новый уровень
              удовольствия 365 дней в году.
            </div>
            <a class="uk-button uk-button-secondary button_menu-cafe" href="">
              <svg-icon class="icon" name="menu"/>
              <span>ПОСМОТРЕТЬ МЕНЮ</span>
            </a>
          </div>
        </div>
        <div class="menu-cafe__item menu-cafe__item2">
          <picture>
            <source srcset="~assets/img/inners/rest3-small.png" media="(max-width: 1310px)">
            <source srcset="~assets/img/inners/rest3.png">
            <img class="img_cover" data-src="/img/inners/rest3.png" alt="" src="~assets/img/inners/rest3.png">
          </picture>
          &lt;!&ndash; <img uk-img class="img_cover" data-src="/img/inners/rest3.png" alt=""> &ndash;&gt;
          <div class="uk-position-relative">
            <div class="headline_26 text-upper">
              Винная карта
            </div>
            <div class="menu-cafe__item_txt">
              Для Вас мы подобрали напитки
              на любой вкус – легкие и сложные,
              свежие и согревающие, молодые
              и выдержанные
            </div>
            <a class="uk-button uk-button-secondary button_menu-cafe" href="">
              <svg-icon class="icon" name="menu"/>
              <span>ПОСМОТРЕТЬ МЕНЮ</span>
            </a>
          </div>
        </div>
        <div class="menu-cafe__item menu-cafe__item3">
          <img class="img_cover" data-src="~assets/img/inners/rest4.png" alt="" src="~assets/img/inners/rest4.png">
          <div class="uk-position-relative">
            <div class="headline_26 text-upper">
              Карта<br>
              Бара
            </div>
            <a class="uk-button uk-button-secondary button_menu-cafe" href="">
              <svg-icon class="icon" name="menu"/>
              <span>ПОСМОТРЕТЬ МЕНЮ</span>
            </a>
          </div>
        </div>
        <div class="menu-cafe__item menu-cafe__item4">
          <img class="img_cover" data-src="~assets/img/inners/rest5.png" alt="" src="~assets/img/inners/rest5.png">
          <div class="uk-position-relative">
            <div class="headline_26 text-upper">
              Ройал класс
            </div>
            <div class="menu-cafe__item_txt">
              Гастрономическое удовольствие.
            </div>
            <a class="uk-button uk-button-secondary button_menu-cafe" href="">
              <svg-icon class="icon" name="menu"/>
              <span>ПОСМОТРЕТЬ МЕНЮ</span>
            </a>
          </div>
        </div>
        <div class="menu-cafe__item menu-cafe__item5">
          <img class="img_cover" data-src="~assets/img/inners/rest6.png" alt="" src="~assets/img/inners/rest6.png">
          <div class="uk-position-relative">
            <div class="headline_26 text-upper">
              Erwin.Река
            </div>
            <div class="menu-cafe__item_txt">
              Ресторан морепродуктов
            </div>
            <a class="uk-button uk-button-secondary button_menu-cafe" href="">
              <svg-icon class="icon" name="menu"/>
              <span>ПОСМОТРЕТЬ МЕНЮ</span>
            </a>
          </div>
        </div>
        <div class="menu-cafe__item menu-cafe__item6">
          <img class="img_cover" data-src="assets/img/inners/rest7.png" alt="" src="~assets/img/inners/rest7.png">
          <div class="uk-position-relative">
            <div class="headline_26 text-upper">
              Коктейльное<br>
              меню
            </div>
            <a class="uk-button uk-button-secondary button_menu-cafe" href="">
              <svg-icon class="icon" name="menu"/>
              <span>ПОСМОТРЕТЬ МЕНЮ</span>
            </a>
          </div>
        </div>
        <div class="menu-cafe__item menu-cafe__item7">
          <img class="img_cover" data-src="~assets/img/inners/rest8.png" alt="" src="~assets/img/inners/rest8.png">
          <div class="uk-position-relative">
            <div class="headline_26 text-upper">
              Детское<br>
              меню
            </div>
            <a class="uk-button uk-button-secondary button_menu-cafe" href="">
              <svg-icon class="icon" name="menu"/>
              <span>ПОСМОТРЕТЬ МЕНЮ</span>
            </a>
          </div>
        </div>
        <div class="menu-cafe__item menu-cafe__item8">
          <img class="img_cover" data-src="~assets/img/inners/rest9.png" alt="" src="~assets/img/inners/rest9.png">
          <div class="uk-position-relative">
            <div class="headline_26 text-upper">
              Сезонное<br>
              меню
            </div>
            <a class="uk-button uk-button-secondary button_menu-cafe" href="">
              <svg-icon class="icon" name="menu"/>
              <span>ПОСМОТРЕТЬ МЕНЮ</span>
            </a>
          </div>
        </div>
        <div class="menu-cafe__item menu-cafe__item9">
          <img class="img_cover" data-src="~assets/img/inners/rest10.png" alt="" src="~assets/img/inners/rest10.png">
          <div class="uk-position-relative">
            <div class="headline_26 text-upper">
              Десертное<br>
              меню
            </div>
            <a class="uk-button uk-button-secondary button_menu-cafe" href="">
              <svg-icon class="icon" name="menu"/>
              <span>ПОСМОТРЕТЬ МЕНЮ</span>
            </a>
          </div>
        </div>-->
<!--        <MenuCard v-for='(card, index) in menuCard'
                   :key="'crd' + index"
                   :title="card.title"
                   :fileName="card.fileName"
                   :fileNameSmall="card.fileNameSmall"
                   :description="card.description"
                   :customClass="card.customClass"/>-->
<!--        <p v-if="$fetchState.pending">
          Loading....
        </p>
        <p v-else-if="$fetchState.error">Error while fetching info</p>-->
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
      title: `Флотилия Radisson Royal Moscow - меню ресторанов Рэдиссон Флотилии`,
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
    }
  },
  async fetch() {
    let menus = await axios.get(
      `${this.$config.baseURL}menus`);
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
