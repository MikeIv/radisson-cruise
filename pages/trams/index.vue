<template>
  <div>
    <Header class="trams__header">
      <img src="~images/inners/tram1.webp" data-src="~images/inners/tram1.webp" class="img_cover" alt="">
      <video src="~/assets/video/trams3.mp4" autoplay="" loop="" muted="" playsinline="" class="img_cover"></video>
      <div class="uk-overlay-default uk-position-cover video-overlay"></div>
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ $t('pages.trams.title') }}
          </h1>
<!--           <nuxt-link class="uk-button uk-button-default button_ticket  transition" to="/trams/schedule/">
            <span>Купить билет</span>
            <svg-icon class="icon" name="ticket"/>
          </nuxt-link>-->
        </div> 
      </div>
    </Header>
<!--    <div class="uk-flex uk-child-width-1-2@l uk-grid-match uk-flex-wrap">-->
    <div class="">
      <TicketCost
          v-for="(ticket, index) in dataRoutes"
          :key="'tkt' + index"
          :route="ticket"
      />
    </div>

<!--    <section class="tenancy__about trams__about uk-flex uk-flex-wrap uk-child-width-1-2@m">
      <div class="tenancy__about__info uk-position-relative">
        <svg-icon class="icon" name="wheel"/>
        <div class="uk-position-relative">
          <div class="headline_22">
            Уже пятый сезон речные «кабриолеты» Флотилии радуют жителей и гостей столицы, 
            ведь с ними прогулки по Москве-реке и знакомство 
            с главными достопримечательностями города становится быстрым и небанальным.
          </div>
          <div class="headline_line"></div>
          <div class="tenancy__about_txt">
            Речные трамвайчики Флотилии «Рэдиссон Ройал» развивают туристические возможности и потенциал города Москвы, 
            стараясь привлечь внимание жителей и гостей столицы к новому виду досуга и времяпрепровождению на Москве-реке.
          </div>
          <a class="uk-button uk-button-default" href="#scheme">
            <span>МАРШРУТЫ И ПРИЧАЛЫ</span>
          </a>
        </div>
      </div>
      <div class="uk-cover-container tenancy__about__img">
        <img data-src="~assets/img/inners/tram2.png" alt="" class="img_cover" src="~assets/img/inners/tram2.png">
      </div>
    </section>-->
    <CruiseItem
        :fileNames="tramBlocks?.images"
        :title="tramBlocks?.name"
        :text="tramBlocks?.content"
        :svgName="tramBlocks?.background"
        :link-buy="tramBlocks?.linkbuy"
        :link-more="tramBlocks?.linkmore"
        :link-free="tramBlocks?.linkfree"
        :button="tramBlocks?.button"
    />

    <SchemeRouts 
      :idTypeMap="3"
      :arrDataPoints="dataPiers"

      v-if="viewSections.scheme && dataPiers.length > 0"
    />

    <div class="trams__headline">
      <div class="uk-container">
        <div class="headline_56">
          ПРИЧАЛ ОТПРАВЛЕНИЯ
        </div>
      </div>
    </div>

<!--    <Route v-for="(route, index) in portBlocks" :key="'rt' + index"
           :counter="index + 1"
           :fileName="route.fileName" :portName="route.portName"
           :coordinates="route.coordinates" :metro="route.metro"
           :how-to-go="route.howToGo" :metroColor="route.metroColors"
    />-->
    <CruiseItem
        v-for="(block,index) in portBlocks" :key="'prtBlock'+ index"
        :fileNames="block?.images"
        :title="block?.name"
        :text="block?.content"
        :svgName="block?.background"
        :link-buy="block?.linkbuy"
        :link-more="block?.linkmore"
        :link-free="block?.linkfree"
    />
    <section class="uk-cover-container trams-shutdown" v-if="viewSections.route">
      <img  data-src="~assets/img/inners/tram3.png" alt="" class="img_cover" src="~assets/img/inners/tram3.png">
      <div class="uk-container uk-position-relative">
        <div class="headline_32 t_semibold">
          {{ dataRoutes[0]?.upname }} <br class="uk-visible@m">
        </div>
        <div class="trams-shutdown__items">
          <div class="trams-shutdown__decor"></div>
          <div class="trams-shutdown__decor trams-shutdown__decor2"></div>

<!--           <PortItem portName="Гостиница «Украина»"/>
          <div class="trams-shutdown__arr">
            <svg-icon class="icon" name="arrow"/>
          </div>

          <PortItem portName="Киевский вокзал"/>
          <div class="trams-shutdown__arr">
            <svg-icon class="icon" name="arrow"/>
          </div>

          <PortItem portName="Воробьевы горы"/>
          <div class="trams-shutdown__arr">
            <svg-icon class="icon" name="arrow"/>
          </div> -->
          <div class="uk-flex uk-flex-center" v-for="(itemPort,idxport) in dataRoutes[0]?.points" :key="'idxpt-'+idxport">

                    <PortItem :portName="itemPort.name"/>
                    <span class="trams-shutdown__arr" v-if="idxport < dataRoutes[0]?.points?.length-1">
                      <svg-icon class="icon" name="arrow"/>
                    </span>

          </div>
<!--           <PortItem portName="Зарядье"/>
          <div class="trams-shutdown__arr">
            <svg-icon class="icon" name="arrow"/>
          </div>

          <PortItem portName="Парк Горького"/> -->


        </div>
        <div class="trams-shutdown__bottom">
          <nuxt-link class="uk-button uk-button-default " to="/trams/schedule/">

            <span>ПОДРОБНОЕ РАСПИСАНИЕ</span>
          </nuxt-link>

        </div>
      </div>
    </section>
    <section class="uk-cover-container trams-advantages">
      <div class="trams-advantages__decor"></div>
      <div class="uk-container uk-position-relative">
        <div class="headline_56 uk-text-center">
          Преимущества
        </div>
        <div class="trams-advantages__items uk-flex-wrap uk-flex uk-child-width-1-4@m uk-child-width-1-2@s uk-grid-match">
          <div  v-for="(feature, index) in features" :key="'ftr' + index">
            <FeaturesItem :icon="feature.icon" :name="feature.name" class="trams-advantage__item trams-advantage__item_8 uk-position-relative"/>
          </div>
        </div>
      </div>
    </section>
    <section class="uk-cover-container trams-colors" v-if="viewSections.colors">
      <img  class="img_cover" data-src="~assets/img/inners/tram4.png" alt="" src="~assets/img/inners/tram4.png">
      <div class="uk-container uk-position-relative">
        <div class="headline_56 uk-text-center">
          Цветовые вариации
        </div>
        <div class="trams-colors__items uk-flex-wrap uk-flex uk-child-width-1-5@s uk-child-width-1-2 uk-grid-match">
          <div v-for="variant in tramsVariants">
            <ColorItem :name="variant.name" :color="variant.style"/>
          </div>
        </div>
      </div>
    </section>
    <section class="uk-cover-container trams-gallery" v-if="viewSections.photos">

      <div class="uk-container uk-position-relative">
        <div class="headline_56 uk-text-center">
          Фотогалерея
        </div>
        <div class="uk-position-relative yacht__slider uk-slider uk-slider-container" tabindex="-1" uk-slider="">
          <ul class="uk-slider-items uk-flex" uk-lightbox>
            <!--            <li tabindex="-1" class="uk-active">
                          <a data-type="image" href="assets/img/trams/_DSC0064.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0064.jpg" alt="" class="img_cover" src="~assets/img/trams/_DSC0064.jpg" data-alt="Image">
                          </a>
                        </li>
                        <li tabindex="-1" class="uk-active">
                          <a href="assets/img/trams/_DSC0066.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0066.jpg" alt="" class="img_cover" src="~assets/img/trams/_DSC0066.jpg">
                          </a>
                        </li>
                        <li tabindex="-1" class="">
                          <a href="~assets/img/trams/_DSC0074(1).jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0074(1).jpg" alt="" class="img_cover" src="~assets/img/trams/_DSC0074(1).jpg">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/_DSC0088.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0088.jpg" alt="" class="img_cover" src="~assets/img/trams/_DSC0088.jpg">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/_DSC0130.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0130.jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/_DSC0146(1).jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0146(1).jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/_DSC0204.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0204.jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/_DSC0247.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0247.jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/_DSC0264(1).jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0264(1).jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/_DSC0276.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0276.jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/_DSC0591.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC0591.jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/_DSC4020_2.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/_DSC4020_2.jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/DSC00177.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/DSC00177.jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/DSC00181.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/DSC00181.jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/DSC00187.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/DSC00187.jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/DSC00194.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/DSC00194.jpg" alt="" class="img_cover">
                          </a>
                        </li>
                        <li tabindex="-1">
                          <a href="~assets/img/trams/DSC00261.jpg" class="gallery_card uk-position-relative">
                            <img  data-src="~assets/img/trams/DSC00261.jpg" alt="" class="img_cover">
                          </a>
                        </li>-->
            <li tabindex="-1" v-for="(slide,index) in tramsVariants" :key="'sld' + index">
              <PhotoCardTram :fileName="slide.image"/>
            </li>
          </ul>
          <div class="yacht__slider_navigation">
            <div class="slider_numbers">
              <div class="slider_number">01</div>
              <div class="slider_num_bread">/</div>
              <div class="slider_amount">{{ tramsVariants?.length }}</div>
            </div>
            <div class="slider_arrows">
              <a class="" href="#" uk-slider-item="previous">
                <svg-icon class="icon" name="arr_lang"/>
              </a>
              <a class="" href="#" uk-slider-item="next">
                <svg-icon class="icon" name="arr_lang"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//import Scheme from "../../components/Scheme";
import SchemeRouts from "../../components/SchemeRouts";
import Header from "../../components/Header";
import FeaturesItem from "../../components/trolley/FeaturesItem";
import TicketCost from "../../components/trolley/TicketCost";
import Route from "../../components/trolley/Route";
import ColorItem from "../../components/trolley/ColorItem";
import PhotoCardTram from "../../components/PhotoCardTram";
import PortItem from "../../components/trolley/PortItem";
import Breadcrumbs from "../../components/Breadcrumbs";
import UIkit from "uikit";
import axios from "axios";
import CruiseItem from "@/components/tickets/CruiseItem.vue";
export default {
  name: "index",
  components: {
    CruiseItem,
    Breadcrumbs,
    PortItem,
    PhotoCardTram,
    ColorItem,
    Route,
    TicketCost,
    Header,
    FeaturesItem,
    SchemeRouts
  },
  data() {
    return {
      viewSections:{
        scheme: true,
        route: true,
        tickets: true,
        ports: true,
        colors: true,
        photos: true,
      },
      dataRoutes: [],
      dataPiers: [],
      tramsVariants: [],
      mountains: [
        {
          iconName: '',
          title: ''
        }
      ],
      ticketsInfo: [
/*         {
          title: 'Стоимость проездного',
          subtitle: 'При покупке онлайн',
          online: true,
          variants: [
            {
              time: `на 24 часа`,
              adultPrice: `1 500 руб.`,
              childPrice: `1 100 руб.`,
            },
            {
              time: `на 48 часов`,
              adultPrice: `2 000 руб.`,
              childPrice: `1 500 руб.`,
            }
          ],
        }, */
        {
          title: 'Маршрут «Сердце столицы»',
          subtitle: 'Причал «Парк Горького» - Зарядье – причал «Парк Горького»',
          online: false,
          variants: [
            {
              time: `Стоимость билетов`,
              adultPrice: `800 руб.`,
              childPrice: `600 руб.`,
            },

          ],
        }
      ],
      routesInfo: [
/*         {
          fileName: `inners/tram8.png`,
          portName: 'Причал «Гостиница «Украина»',
          metroColors: [
            `brown`,
            `blue`,
          ],
          metro: `Киевска (Кольцевая и Филевская линии) ~ 20 мин.`,
          howToGo: `Выход из метро на ул. Большая Дорогомиловская. Перейти на противоположную сторону
            (ориентир McDonald’s). Далее через Украинский бульвар выйти на Кутузовский проспект,
            перейти на сторону Гостиницы Radisson Collection Hotel, Moscow и спуститься к реке на причал
            «Гостиница «Украина».`,
          coordinates: `55.753155, 37.567423`,
        },
        {
          fileName: `inners/tram-2.png`,
          portName: ' Причал «Киевский Вокзал»',
          metroColors: [
            `blue`
          ],
          metro: `м. Киевская ~ 5 мин.`,
          howToGo: `Выход из метро к Киевскому вокзалу. Далее через площадь Европы выйти
            на Бережковскую набережную Москвы-реки. Обращаем ваше внимание,
            что у причала «Киевский вокзал» парковка для а/м отсутствует.`,
          coordinates: `55.743841, 37.571682`,
        },
        {
          fileName: `inners/tram9.png`,
          portName: 'Причал «Воробьевы горы»',
          metroColors: [
            `red`
          ],
          metro: `Воробьёвы Горы ~ 10 -15 мин.`,
          howToGo: ` Выход из метро к Москве-реке на Воробьёвскую набережную в сторону стадиона Лужники.
            Обращаем ваше внимание, что у причала «Воробьевы горы» парковка для а/м отсутствует.`,
          coordinates: `55.708459, 37.545670`,
        }, */
        {
          fileName: `inners/piers_gorkiy.jpg`,
          portName: ' Причал «Парк Горького»',
          metroColors: [
            `red`,
            `orange`,
          ],
          metro: `Октябрьская/ Парк Культуры ~ 15 мин.`,
          howToGo: `Выход к ЦПКиО им. Горького. Главный вход в ЦПКИО им. М. Горького.
            Далее правее через аллеи выйти на Пушкинскую набережную и двигаться
            около 3 минут в сторону Воробьевых гор до причала «Парк Горького».
            Есть платная парковка у главного входа в ЦПКИО им. М. Горького.`,
          coordinates: `55.730145, 37.597191`,
        },
/*         {
          fileName: `inners/tram11.png`,
          portName: 'Причал «Зарядье»',
          metroColors: [
            `orange`
          ],
          metro: `Китай Город ~ 10 мин.`,
          howToGo: `Выход к Москве-реке на Москворецкую набережную. Причал находится
            на территории парка «Зарядье», под парящим мостом. Вход в парк бесплатный.
            Подземная парковка – Моспаркинг.`,
          coordinates: `55.751563, 37.625729`,
        }, */
      ],

      features: [],
      featuresLocal: [
      {
        "icon": "blue-rhombuses.svg",
        "name": "Яркий цветной экстерьер "
    },
    {
        "icon": "blue-dishes.svg",
        "name": "Аппараты со снеками и прохладительными напитками"
    },
    {
        "icon": "blue-paycard.svg",
        "name": "Возможность приобрести билеты прямо на борту"
    },
    {
        "icon": "blue-ancor.svg",
        "name": "Регулярные рейсы с коротким интервалом"
    },
    {
        "icon": "blue-clock.svg",
        "name": "Отправление с 11:50 до 21:30"
    },
    {
        "icon": "blue-headset.svg",
        "name": "Аренда под ваше мероприятие "
    },
    {
        "icon": "blue-sits.svg",
        "name": "Сдвигаемая крыша "
    },
    {
        "icon": "passengers.svg",
        "name": "Вместимость трамвайчика - 44 пассажироместа "
    }
      ],
      arrDataPoints: [
/*       {
          customClass: '1',
          title: `Гостиница Radisson <br> Collection, Moscow <br> (Гостиница “Украина”)`,
          location: `Причал «Гостиница «Украина»`,
          info: `Легендарный отель соединил в себе имперский масштаб и эстетику социализма с современным «умным комфортом» и традициями 5* сервиса`,
          img: 'hotel.png',
          port: `Причал <br> «Гостиница «Украина» <br> Начало / конец маршрута `,
          isActive: false,
        },
        {
          customClass: '2',
          title: `Дом Правительства РФ`,
          location: `Дом Правительства РФ`,
          info: `Здание, окутанное легендами, с интересной архитектурой и потрясающей историей.`,
          img: 'goverment.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '4',
          title: `Киевский <br> вокзал`,
          location: `Киевский вокзал`,
          info: `Здание в стиле неоклассицизма с высокой башней с арочными окнами, куполом и скульптурами.`,
          img: 'kiev.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '5',
          title: `Новодевичий <br> монастырь`,
          location: `Новодевичий монастырь`,
          info: `Один из старейших московских монастырей, лучше всего сохранившийся по своему архитектурному облику.`,
          img: 'church4.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '6',
          title: `Стадион «Лужники»`,
          location: `Стадион «Лужники»`,
          info: `Главная футбольная арена страны, построенная в 1956 году. Вместимость – 81 000 чел.`,
          img: 'luzhniki.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '7',
          title: `МГУ им. М.В. Ломоносова`,
          location: `МГУ им. М.В. Ломоносова`,
          info: `Главный корпус, увенчанный шпилем со звездой, гигантскими уступами поднимается на высоту 235,7 м.`,
          img: 'mgu.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '8',
          title: `Здание Президиума РАН`,
          location: `Здание Президиума РАН`,
          info: `22-этажное здание с узнаваемым металлическим декором на кровле под названием «Золотые мозги».`,
          img: 'RAN.png',
          port: null,
          isActive: false,
        }, */
        {
          customClass: '9',
          title: `ЦПКиО им. М. Горького`,
          location: `ЦПКиО им. М. Горького`,
          info: `Многофункциональное место отдыха и один из любимых парков москвичей и гостей города.`,
          img: 'park.png',
          port: `Причал «Парк Горького» <br> Начало / конец маршрута`,
          isActive: false,
        },
        {
          customClass: '10',
          title: `Новая Третьяковка (ЦДХ)`,
          location: `Новая Третьяковка (ЦДХ)`,
          info: `Основан в 1979 году, ежегодно проводит более 300 выставок и других мероприятий.`,
          img: 'CDX.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '11',
          title: `Памятник Петру I`,
          location: `Памятник Петру I`,
          info: `98-метровая конструкция из нержавеющей стали, бронзы, меди с фигурой Первого русского императора.`,
          img: 'Peter.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '12',
          title: `Храм <br> Христа <br> Спасителя`,
          location: `Храм Христа Спасителя`,
          info: `Самый большой православный храм России с комплексом зданий религиозного и светского назначения.`,
          img: 'church2.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '13',
          title: `Дом на набережной`,
          location: `Дом на набережной`,
          info: `Жилой комплекс 1931 года постройки с интересной историей, известный как место жительства советской элиты.`,
          img: 'house.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '14',
          title: `Московский <br> Кремль`,
          location: `Московский Кремль`,
          info: `Крепость в центре Москвы, главный общественно-политический и историко-художественный комплекс города, официальная резиденция Президента РФ.`,
          img: 'kreml.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '15',
          title: `Собор <br> Василия <br> Блаженного`,
          location: `Собор Василия Блаженного`,
          info: `Величественный древний храм, построенный в XVI веке, пережил множество войн, пожаров и других невзгод, сохранившись до наших дней.`,
          img: 'church3.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '16',
          title: `Высотка на <br> Котельнической набережной`,
          location: `Высотка на Котельнической набережной`,
          info: `32-этажное здание насчитывает 700 квартир, в которых проживало большое количество известных людей.`,
          img: 'high-tower.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '17',
          title: `Новоспасский <br> монастырь`,
          location: `Новоспасский монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          img: 'church.png',
          port: null,
          isActive: false,
        },
      ],
      tableIdCSStoIdPier:[
        {
        classId:"1",
        id:2
        },
        {
        classId:"2",
        id:3
        },
        {
        classId:"4",
        id:5
        },
        {
        classId:"5",
        id:6
        },
        {
        classId:"6",
        id:8
        },
        {
        classId:"7",
        id:9
        },
        {
        classId:"8",
        id:11
        },
        {
        classId:"9",
        id:12
        },
        {
        classId:"10",
        id:14
        },
        {
        classId:"11",
        id:15
        },
        {
        classId:"12",
        id:18
        },
        {
        classId:"13",
        id:16
        },
        {
        classId:"14",
        id:19
        },
        {
        classId:"15",
        id:20
        },
        {
        classId:"16",
        id:21
        },
        {
        classId:"17",
        id:22
        },
        {
        classId:"18",
        id:23
        },
        
      ],
      tramBlocks: null,
      portBlocks: [],
    }
  },
  async fetch() {
    let tramBlockData = await axios.get(
        `${this.$config.baseURL}blocks?page=riverbus`);
    this.tramBlocks = tramBlockData.data.shift()
    this.portBlocks = tramBlockData.data
    let features = await axios.get(
        `${this.$config.baseURL}advantages`);
    this.features = features.data
    /*this.features = this.featuresLocal*/
    let getDataRoutes = await axios.get(
        `${this.$config.baseURL}maproutes?type=trams`);
        
    this.dataRoutes = getDataRoutes.data.routes
    let piersData = getDataRoutes.data.piers;
    console.log("this.dataRoutes ", this.dataRoutes[0]);
    
    piersData = piersData.filter((item) => {
      return item.seq >= this.dataRoutes[0].seqmin && item.seq <= this.dataRoutes[0].seqmax && item.type == 'object';
    });
    const addStartPier = getDataRoutes.data.piers.find((item) => {
      return item.id == this.dataRoutes[0].seqmin;
    });
    const addReturnPier = getDataRoutes.data.piers.find((item) => {
      return item.id == this.dataRoutes[0].seqmax;
    });
    piersData.push(addStartPier);
    //piersData.push(addReturnPier);

    this.dataPiers = piersData;

    const mapPiersData = this.dataPiers.map((item) => {
      return {
        customClass: this.tableIdCSStoIdPier.find((itmid) => {
          return itmid.id == item.id;
        }).classId,
        //id: item.id,
        title: item.name,
        location: item.name,
        info: item.description,
        img: item.image,
        port: item.type === 'pier' ? item.name + '<br> Начало / конец маршрута' : null,
        isActive: false,
      }
    });

    this.dataPiers = mapPiersData;
    let tramsVariantsData = await axios.get(
        `${this.$config.baseURL}riverbus`);
        
    this.tramsVariants = tramsVariantsData.data.result;
    //this.features = this.featuresLocal
  },
  fetchOnServer: true,
  fetchKey: 'trams-main',
  mounted() {
    const yachtSlider = document.querySelectorAll('.yacht__slider');
    yachtSlider.forEach(element => {
      //Счетчик слайда яхт
      UIkit.util.on(element, 'itemshown', function(e) {
        // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
        element.querySelector('.slider_number').textContent = (('0' + (e.detail[0].index + 1)).slice(-2));
      });
    });
  }
}
</script>

<style>
.trams-colors__items>div {
    border-left: 1px solid #a1c2e5;
    border-top: 1px solid #a1c2e5;
}
/*
.trams__header {
  height: 100vh;
}
*/

.trams_cost-wrapper:first-child .trams__cost{
  background: rgba(255, 255, 255, 0.5);
}
.trams__route:nth-child(even) {
  flex-direction: row-reverse;
}

.trams-shutdown__item svg {
  fill:black;
}
@media screen and (max-width: 959px) {
  .trams__route:nth-child(even) {
    flex-direction: column;
  }
}
</style>
