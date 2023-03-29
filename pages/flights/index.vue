<template>
  <div>
    <Header>
      <img src="~images/inners2/flight0.webp" data-src="~images/inners2/flight0.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ $t('pages.thematic') }}
          </h1>
        </div>
      </div>
    </Header>
    <div class="flights">
      <!--      <div class="flight">
              <div class="trams__route__img uk-cover-container">
                <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
                  <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox>
                    <li tabindex="-1" class="uk-active">
                      <a href="assets/img/inners2/flight1.png" class="uk-position-relative" data-alt="Image">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight1.png" alt="" src="~assets/img/inners2/flight1.png">
                      </a>
                    </li>
                    <li tabindex="-1" class="">
                      <a href="assets/img/inners2/flight1.png" class="uk-position-relative" data-alt="Image">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight1.png" alt="" src="~assets/img/inners2/flight1.png">
                      </a>
                    </li>
                    <li tabindex="-1">
                      <a href="assets/img/inners2/flight1.png" class="uk-position-relative" data-alt="Image">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight1.png" alt="" src="~assets/img/inners2/flight1.png">
                      </a>
                    </li>
                  </ul>
                  <ul class="uk-slider-nav uk-dotnav uk-flex-center ">
                    <li uk-slider-item="0" class="uk-active">
                      <a href="">
                      </a>
                    </li>
                    <li uk-slider-item="1">
                      <a href="">
                      </a>
                    </li>
                    <li uk-slider-item="2">
                      <a href="">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flight__info">
                <svg-icon class="flight__info__icon" name="spyglass"/>
                <div class="uk-position-relative">
                  <div class="headline_line"></div>
                  <div class="headline_22 t_semibold">
                    Экскурсионные
                  </div>
                  <div class="flight__txt">
                    Прекрасная возможность для жителей и гостей столицы увидеть
                    все основные достопримечательности города с непривычного ракурса,
                    погрузившись в историю города и гастрономические открытия.
                  </div>
                  <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/yacht">
                    <span>Купить билет</span>
                    <svg-icon class="icon" name="ticket"/>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="flight">
              <div class="flight__info">
                <svg-icon class="instagram_decor1" name="decor4"/>
                <svg-icon class="flight__info__icon" name="family"/>
                <div class="uk-position-relative">
                  <div class="headline_line"></div>
                  <div class="headline_22 t_semibold">
                    Семейные
                  </div>
                  <div class="flight__txt">
                    Теперь, вместе с яхтами нового поколения, флотилия насчитывает
                    10 белоснежных красавиц-яхт, предназначенных для круглогодичных
                    экскурсионно-развлекательных рейсов по Москве-реке, а также для пышных
                    банкетов, многолюдных конференций и счастливых свадеб.
                  </div>
                  <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/yacht">
                    <span>Купить билет</span>
                    <svg-icon class="icon" name="ticket"/>
                  </nuxt-link>
                </div>
              </div>
              <div class="trams__route__img uk-cover-container">
                <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
                  <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox="" style="transform: translate3d(0px, 0px, 0px);">
                    <li tabindex="-1" class="uk-active">
                      <a href="/img/inners2/flight2.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight2.png" alt="" src="~assets/img/inners2/flight2.png">
                      </a>
                    </li>
                    <li tabindex="-1" class="">
                      <a href="/img/inners2/flight2.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="/img/inners2/flight2.png" alt="" src="~assets/img/inners2/flight2.png">
                      </a>
                    </li>
                    <li tabindex="-1">
                      <a href="/img/inners2/flight2.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="/img/inners2/flight2.png" alt="" src="~assets/img/inners2/flight2.png">
                      </a>
                    </li>
                  </ul>
                  <ul class="uk-slider-nav uk-dotnav uk-flex-center ">
                    <li uk-slider-item="0" class="uk-active">
                      <a href="">

                      </a>
                    </li>
                    <li uk-slider-item="1">
                      <a href="">

                      </a>
                    </li>
                    <li uk-slider-item="2">
                      <a href="">

                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flight">
              <div class="trams__route__img uk-cover-container">

                <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
                  <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox="" style="transform: translate3d(0px, 0px, 0px);">
                    <li tabindex="-1" class="uk-active">
                      <a href="~assets/img/inners2/flight3.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="assets/img/inners2/flight3.png" alt="" src="~assets/img/inners2/flight3.png">
                      </a>
                    </li>
                    <li tabindex="-1" class="">
                      <a href="/img/inners2/flight3.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="assets/img/inners2/flight3.png" alt="" src="~assets/img/inners2/flight3.png">
                      </a>
                    </li>
                    <li tabindex="-1">
                      <a href="/img/inners2/flight3.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="assets/img/inners2/flight3.png" alt="" src="~assets/img/inners2/flight3.png">
                      </a>
                    </li>
                  </ul>
                  <ul class="uk-slider-nav uk-dotnav uk-flex-center ">
                    <li uk-slider-item="0" class="uk-active">
                      <a href=""></a>
                    </li>
                    <li uk-slider-item="1">
                      <a href=""></a>
                    </li>
                    <li uk-slider-item="2">
                      <a href=""></a>
                    </li>
                  </ul>
                </div>

              </div>
              <div class="flight__info">
                <svg-icon class="flight__info__icon" name="heart"/>
                <div class="uk-position-relative">
                  <div class="headline_line"></div>
                  <div class="headline_22 t_semibold">
                    Романтические
                  </div>
                  <div class="flight__txt">
                    Речная романтика для истинно влюбленных, когда только
                    вы вдвоем и все для вас.
                  </div>
                  <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/yacht">
                    <span>Купить билет</span>
                    <svg-icon class="icon" name="ticket"/>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="flight" id="flight-teatr">
              <div class="flight__info">
                <svg-icon class="flight__info__icon" name="masks"/>
                <div class="uk-position-relative">
                  <div class="headline_line"></div>
                  <div class="headline_22 t_semibold">
                    Театральные
                  </div>
                  <div class="flight__txt">
                    Интерактивное шоу. Культура, еда и прекрасные виды – неотъемлемая
                    часть развлекательной программы для любого туриста, желающего
                    действительно проникнуться духом Столицы.
                  </div>
                  <nuxt-link class="uk-button uk-button-default button_ticket transition" to="/tickets/theatrical">
                    <span>Купить билет</span>
                    <svg-icon class="icon" name="ticket"/>
                  </nuxt-link>
                </div>
              </div>
              <div class="trams__route__img uk-cover-container">

                <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
                  <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox="" style="transform: translate3d(0px, 0px, 0px);">
                    <li tabindex="-1" class="uk-active">
                      <a href="/img/inners2/flight4.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight4.png" alt="" src="~assets/img/inners2/flight4.png">
                      </a>
                    </li>
                    <li tabindex="-1" class="">
                      <a href="/img/inners2/flight4.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight4.png" alt="">
                      </a>
                    </li>
                    <li tabindex="-1">
                      <a href="/img/inners2/flight4.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight4.png" alt="">
                      </a>
                    </li>
                  </ul>
                  <ul class="uk-slider-nav uk-dotnav uk-flex-center">
                    <li uk-slider-item="0" class="uk-active">
                      <a href=""></a>
                    </li>
                    <li uk-slider-item="1">
                      <a href=""></a>
                    </li>
                    <li uk-slider-item="2">
                      <a href=""></a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div class="flight">
              <div class="trams__route__img uk-cover-container">

                <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
                  <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox="" style="transform: translate3d(0px, 0px, 0px);">
                    <li tabindex="-1" class="uk-active">
                      <a href="/img/inners2/flight5.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight5.png" alt="" src="~assets/img/inners2/flight5.png">
                      </a>
                    </li>
                    <li tabindex="-1" class="">
                      <a href="/img/inners2/flight5.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight5.png" alt="" src="~assets/img/inners2/flight5.png">
                      </a>
                    </li>
                    <li tabindex="-1">
                      <a href="/img/inners2/flight5.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight5.png" alt="" src="~assets/img/inners2/flight5.png">
                      </a>
                    </li>
                  </ul>
                  <ul class="uk-slider-nav uk-dotnav uk-flex-center ">
                    <li uk-slider-item="0" class="uk-active">
                      <a href=""></a>
                    </li>
                    <li uk-slider-item="1">
                      <a href=""></a>
                    </li>
                    <li uk-slider-item="2">
                      <a href=""></a>
                    </li>
                  </ul>
                </div>

              </div>
              <div class="flight__info">
                <svg-icon class="flight__info__icon" name="book"/>
                <div class="uk-position-relative">
                  <div class="headline_line"></div>
                  <div class="headline_22 t_semibold">
                    Литературно-поэтические
                  </div>
                  <div class="flight__txt">
                    Перенеситесь в мир звучащей̆ поэзии на борту белоснежной̆ яхты.
                    Познакомиться с новинками книжного рынка, обсудить со знатоками
                    и лауреатами литературных премий все злободневные проблемы, вопросы,
                    да и просто побыть зрителями бенефисов и литературных чтений произведений
                    собственного сочинения молодых авторов.
                  </div>
                  <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets">
                    <span>Купить билет</span>
                    <svg-icon class="icon" name="ticket"/>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="flight">
              <div class="flight__info">
                <svg-icon class="instagram_decor1" name="decor4"/>
                <svg-icon class="flight__info__icon" name="crab"/>
                <div class="uk-position-relative">
                  <div class="headline_line"></div>
                  <div class="headline_22 t_semibold">
                    Гастрономические
                  </div>
                  <div class="flight__txt">
                    Возможность окунуться в историю города через
                    гастрономические традиции разных эпох.
                  </div>
                  <a class="uk-button uk-button-default button_ticket" href="">
                    <span>Купить билет</span>
                    <svg-icon class="icon" name="ticket"/>
                  </a>
                </div>
              </div>
              <div class="trams__route__img uk-cover-container">

                <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
                  <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox="" style="transform: translate3d(0px, 0px, 0px);">
                    <li tabindex="-1" class="uk-active">
                      <a href="/img/inners2/flight6.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight6.png" alt="" src="~assets/img/inners2/flight6.png">
                      </a>
                    </li>
                    <li tabindex="-1" class="">
                      <a href="/img/inners2/flight6.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight6.png" alt="" src="~assets/img/inners2/flight6.png">
                      </a>
                    </li>
                    <li tabindex="-1">
                      <a href="/img/inners2/flight6.png" class="uk-position-relative">
                        <img  class="img_cover" data-src="~assets/img/inners2/flight6.png" alt="" src="~assets/img/inners2/flight6.png">
                      </a>
                    </li>
                  </ul>
                  <ul class="uk-slider-nav uk-dotnav uk-flex-center">
                    <li uk-slider-item="0" class="uk-active">
                      <a href=""></a>
                    </li>
                    <li uk-slider-item="1">
                      <a href=""></a>
                    </li>
                    <li uk-slider-item="2">
                      <a href=""></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>-->
      <CruiseItem v-for="(cruise, index) in flightBlocks" :key="'crs1' + index"
                  :fileNames="cruise.images"
                  :title="cruise.name"
                  :text="cruise.content"
                  :svgName="cruise.background"
                  :decor="cruise.decor"
                  :link-buy="cruise.linkbuy"
      />
    </div>
    <Scheme/>
  </div>
</template>

<script>
import Scheme from "../../components/Scheme";
import Header from "../../components/Header";
import CruiseItem from "../../components/tickets/CruiseItem";
import Breadcrumbs from "../../components/Breadcrumbs";
import axios from "axios";
export default {
  name: "index",
  components: {Breadcrumbs, CruiseItem, Header, Scheme},
  head() {
    return {
      title: 'Флотилия Radisson Royal Moscow -  прогулки и экскурсии на теплоходе  по Москва реке',
    }
  },
  data() {
    return {
      thematicInfo:[
        {
          fileNames: [
            `inners2/flight1.png`,
            `inners2/flight1.png`,
            `inners2/flight1.png`,
          ],
          decor: false,
          svgName: 'spyglass',
          title: `Экскурсионные`,
          text: `Прекрасная возможность для жителей и гостей столицы увидеть все основные достопримечательности
          города с непривычного ракурса, погрузившись в историю города и гастрономические открытия.`,
        },
        {
          fileNames: [
            `inners2/flight2.png`,
            `inners2/flight2.png`,
            `inners2/flight2.png`
          ],
          decor: true,
          svgName: 'family',
          title: `Семейные`,
          text: `Теперь, вместе с яхтами нового поколения, флотилия насчитывает
              10 белоснежных красавиц-яхт, предназначенных для круглогодичных
              экскурсионно-развлекательных рейсов по Москве-реке, а также для пышных
              банкетов, многолюдных конференций и счастливых свадеб.`,
        },
        {
          fileNames: [
            `inners2/flight3.png`,
            `inners2/flight3.png`,
            `inners2/flight3.png`
          ],
          decor: false,
          svgName: `heart`,
          title: `Романтические`,
          text: ` Речная романтика для истинно влюбленных, когда только
              вы вдвоем и все для вас.`,
        },
        {
          fileNames: [
            `inners2/flight4.png`,
            `inners2/flight4.png`,
            `inners2/flight4.png`
          ],
          decor: false,
          svgName: `masks`,
          title: `Театральные`,
          text: `Интерактивное шоу. Культура, еда и прекрасные виды – неотъемлемая
              часть развлекательной программы для любого туриста, желающего
              действительно проникнуться духом Столицы.`,
        },
        {
          fileNames: [
            `inners2/flight5.png`,
            `inners2/flight5.png`,
            `inners2/flight5.png`
          ],
          decor: false,
          svgName: `book`,
          title: `Литературно-поэтические`,
          text: `Перенеситесь в мир звучащей̆ поэзии на борту белоснежной̆ яхты.
              Познакомиться с новинками книжного рынка, обсудить со знатоками
              и лауреатами литературных премий все злободневные проблемы, вопросы,
              да и просто побыть зрителями бенефисов и литературных чтений произведений
              собственного сочинения молодых авторов.`,
        },
        {
          fileNames: [
            `inners2/flight6.png`,
            `inners2/flight6.png`,
            `inners2/flight6.png`
          ],
          decor: true,
          svgName: `crab`,
          title: ` Гастрономические`,
          text: ` Возможность окунуться в историю города через
              гастрономические традиции разных эпох.`,
        },
      ],
      flightBlocks: [],
    }
  },
  async fetch() {
    let blocks = await axios.get(
        `${this.$config.baseURL}blocks?page=themes`);
    this.flightBlocks = blocks.data
  },
  fetchOnServer: true,
  fetchKey: 'theatrical',
}
</script>

<style scoped>
.flight:nth-child(even){
  flex-direction: row-reverse;
}
.uk-cover-container {
  z-index: 3;
}
@media screen and (max-width: 959px) {
  .flight:nth-child(even) {
    flex-direction: column;
  }
}
</style>
