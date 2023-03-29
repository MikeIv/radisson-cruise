<template>
  <div>
    <Header fileName="inners2/flight0.png" :linkName="$t('pages.tickets.flights.title')">
      <img src="~images/inners2/flight0.webp" data-src="~images/inners2/flight0.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ $t('pages.theatrical') }}
          </h1>
        </div>
      </div>
    </Header>
    <!--    <div class="flight">
          <div class="trams__route__img uk-cover-container">
            <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
              <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox="">
                <li tabindex="-1" class="uk-active">
                  <a href="" class="uk-position-relative">
                    <img class="img_cover" data-src="~assets/img/thematic/thematic1.png" alt="" src="~assets/img/thematic/thematic1.png">
                  </a>
                </li>
              </ul>
              <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-hidden">
                <li uk-slider-item="0" class="uk-hidden uk-active">
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flight__info">

            <div class="uk-position-relative">
              <div class="headline_line"></div>
              <div class="headline_22 t_semibold">
                Ужин с классиком. К. Гольдони «Лжец»
              </div>
              <div class="flight__txt">
                В репертуаре нашего театра — итальянская постановка! На этот раз
                в рамках проекта “Ужин с классиком” гости смогут перенестись в Венецию
                с ее карнавалами, буйством красок, интригами и настоящей страстью.
              </div>
              <div class="flight-info__btns">
                <a class="uk-button uk-button-default button_ticket " href="">
                  <span>Купить билет</span>
                </a>
                <a class="uk-button uk-button-more transition" href="">
                  <span>ПОДРОБНЕЕ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flight">
          <div class="flight__info">
            <div class="uk-position-relative">
              <div class="headline_line"></div>
              <div class="headline_22 t_semibold">
                «Ужин с классиком. А.П.Чехов»
              </div>
              <div class="flight__txt">
                <p>
                  Классика, круиз, комедия, кухня. <br>
                  Уникальный, совершенно новый театральный формат.
                </p>

                Больше чем спектакль, больше чем круиз, больше чем ужин — это доступная роскошь.

              </div>
              <div class="flight-info__btns">
                <a class="uk-button uk-button-default button_ticket " href="">
                  <span>Купить билет</span>
                </a>
                <a class="uk-button uk-button-more transition">
                  <span>ПОДРОБНЕЕ</span>
                </a>
              </div>
            </div>
          </div>
          <div class="trams__route__img uk-cover-container">
            <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
              <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox="" style="transform: translate3d(0px, 0px, 0px);">
                <li tabindex="-1" class="uk-active">
                  <a href="" class="uk-position-relative">
                    <img class="img_cover" data-src="~assets/img/thematic/thematic2.png" alt="" src="http://flotilia.r-b-m.ru/img/thematic/thematic2.png">
                  </a>
                </li>
              </ul>
              <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-hidden"><li uk-slider-item="0" class="uk-hidden uk-active"><a href=""></a></li></ul>
            </div>

          </div>
        </div>
        <div class="flight">
          <div class="trams__route__img uk-cover-container">

            <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
              <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox="" style="transform: translate3d(0px, 0px, 0px);">
                <li tabindex="-1" class="uk-active">
                  <a href="" class="uk-position-relative">
                    <img  class="img_cover" data-src="~assets/img/thematic/thematic3.png" alt="" src="http://flotilia.r-b-m.ru/img/thematic/thematic3.png">
                  </a>
                </li>
              </ul>
              <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-hidden"><li uk-slider-item="0" class="uk-hidden uk-active"><a href=""></a></li></ul>
            </div>

          </div>
          <div class="flight__info">

            <div class="uk-position-relative">
              <div class="headline_line"></div>
              <div class="headline_22 t_semibold">
                «Тридцать миллионов Гладиатора»
              </div>
              <div class="flight__txt">
                Уникальный театральный формат. <br>
                Продолжая традиции бренда «Ужин с классиком», предлагаем вашему вниманию
                французскую постановку!

              </div>
              <div class="flight-info__btns">
                <a class="uk-button uk-button-default button_ticket " href="">
                  <span>Купить билет</span>
                </a>
                <a class="uk-button uk-button-more transition" href="">
                  <span>ПОДРОБНЕЕ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flight" id="flight-teatr">
          <div class="flight__info">

            <div class="uk-position-relative">
              <div class="headline_line"></div>
              <div class="headline_22 t_semibold">
                Спектакль «Загадочная женщина» по пьесе
                Оскара Уайльда «Веер леди Уиндермир»
              </div>
              <div class="flight__txt">
                Ужин с классиком» приглашает вас стать частью элитного английского общества.
                Газеты, сигары, светские разговоры в лондонской гостиной – за всем этим скрывается
                история, полная тайн и интриг.
              </div>
              <div class="flight-info__btns">
                <a class="uk-button uk-button-default button_ticket " href="">
                  <span>Купить билет</span>
                </a>
                <a class="uk-button uk-button-more transition" href="">
                  <span>ПОДРОБНЕЕ</span>
                </a>
              </div>
            </div>
          </div>
          <div class="trams__route__img uk-cover-container">

            <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
              <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox="" style="transform: translate3d(0px, 0px, 0px);">
                <li tabindex="-1" class="uk-active">
                  <a href="" class="uk-position-relative">
                    <img class="img_cover" data-src="~assets/img/thematic/thematic4.png" alt="" src="http://flotilia.r-b-m.ru/img/thematic/thematic4.png">
                  </a>
                </li>
              </ul>
              <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-hidden"><li uk-slider-item="0" class="uk-hidden uk-active"><a href=""></a></li></ul>
            </div>

          </div>
        </div>-->
    <CruiseItem v-for="(cruise,index) in theatricalBlocks" :key="'crs' + index"
                :fileNames="cruise.images"
                :title="cruise.name"
                :text="cruise.content"
                :theatrical="true"
                :link-buy="cruise.linkbuy"
                :link-more="cruise.linkmore"
    />
  </div>
</template>

<script>
import Header from "../../components/Header";
import CruiseItem from "../../components/tickets/CruiseItem";
import Breadcrumbs from "../../components/Breadcrumbs";
import axios from "axios";
export default {
  name: "Theatrical",
  components: {Breadcrumbs, CruiseItem, Header},
  head() {
    return {
      title: `Флотилия Radisson Royal Moscow -  Театральные круизы на теплоходе  по Москва реке`,
    }
  },
  data() {
    return {
      theatricalInfo:[
        {
          fileNames: [
            `thematic/thematic1.png`,
            `thematic/thematic2.png`,
          ],
          title: `Ужин с классиком. К. Гольдони «Лжец»`,
          text: `В репертуаре нашего театра — итальянская постановка! На этот раз в рамках проекта
          “Ужин с классиком” гости смогут перенестись в Венецию с ее карнавалами, буйством красок,
           интригами и настоящей страстью.`,
          thematicLink: `/tickets/thematic-item`
        },
        {
          fileNames: [`thematic/thematic2.png`],
          title: `«Ужин с классиком. А.П.Чехов»`,
          text: `Классика, круиз, комедия, кухня. Уникальный, совершенно новый театральный формат. Больше чем спектакль,
          больше чем круиз, больше чем ужин — это доступная роскошь.`,
          thematicLink: `/tickets/thematic-item`
        },
        {
          fileNames: [`thematic/thematic3.png`],
          title: `«Тридцать миллионов Гладиатора»`,
          text: `Уникальный театральный формат.
            Продолжая традиции бренда «Ужин с классиком», предлагаем вашему вниманию
            французскую постановку!`,
          thematicLink: `/tickets/thematic-item`
        },
        {
          fileNames: [`thematic/thematic4.png`],
          title: `Спектакль «Загадочная женщина» по пьесе
            Оскара Уайльда «Веер леди Уиндермир»`,
          text: `Ужин с классиком» приглашает вас стать частью элитного английского общества.
            Газеты, сигары, светские разговоры в лондонской гостиной – за всем этим скрывается
            история, полная тайн и интриг.`,
          thematicLink: `/tickets/thematic-item`
        }
      ],
      theatricalBlocks: [],
    }
  },
  async fetch() {
    let blocks = await axios.get(
        `${this.$config.baseURL}blocks?page=theatre`);
    this.theatricalBlocks = blocks.data
  },
  fetchOnServer: true,
  fetchKey: 'theatrical',

}
</script>

<style scoped>
.flight:nth-child(odd){
  flex-direction: row-reverse;
}
@media screen and (max-width: 959px) {
  .flight:nth-child(odd) {
    flex-direction: column;
  }
}
</style>