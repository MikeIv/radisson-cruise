<template>
  <div>
    <Header>
      <img src="~images/inners2/rules1.webp" data-src="~images/inners2/rules1.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ $t('pages.contacts.title') }}
          </h1>
        </div>
      </div>
    </Header>
    <div
      class="uk-flex uk-flex-wrap uk-child-width-1-2@l uk-grid-match contact__grid uk-scrollspy-inview uk-animation-fade"
      uk-scrollspy="cls: uk-animation-fade; delay: 400"
    >
      <div class="contact__grid__info">
        <div class="contact-info">
          <div class="buy-ticket-form__headline__item1">
            <svg-icon class="icon" name="ancor-in-circle" />
            <span class="headline_32 t_semibold">
              Причал «Гостиница «Украина»
            </span>
          </div>
          <div class="contact-info__items">
            <div class="contact-info__item">
              <div>
                <b>Адрес центрального офиса продаж:</b>
              </div>
              <div>
                Набережная Тараса Шевченко, причал «Гостиница «Украина».
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>Метро:</b>
              </div>
              <div class="trams__route__metro">
                <div
                  class="trams__route__metro__badge trams__route__metro__badge_brown"
                >
                  M
                </div>
                <div
                  class="trams__route__metro__badge trams__route__metro__badge_blue"
                >
                  M
                </div>
                <span> Киевска (Кольцевая и Филевская линии) </span>
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>Телефон:</b>
              </div>
              <div>
                <a :href="'tel:' + mapAboutInfo.parkPort.tel">
                  {{ mapAboutInfo.parkPort.tel }}
                </a>
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>Время работы:</b>
              </div>
              <div>
                {{ mapAboutInfo.hotelPort.worktime }}
              </div>
            </div>
          </div>
          <div class="contact-info__ramp">
            <svg-icon class="icon" name="chairman2" />
            <span>
              Для маломобильных групп населения для спуска на причал оборудован
              лифт и пандус.
            </span>
          </div>
          <div class="contact-info__payment">
            <div class="contact-info__payment__img uk-cover-container">
              <img
                data-src="~assets/img/inners2/contact2.png"
                class="img_cover"
                alt=""
                src="~assets/img/inners2/contact2.png"
              />
            </div>
            <div class="contact-info__payment__block">
              <div class="txt18"><b>Способы оплаты:</b></div>
              <div class="contact-info__payment__txt">
                {{ mapAboutInfo.hotelPort.paymentTypes }}
              </div>
              <div class="contact-info__payment__images">
                <svg-icon class="icon" name="wallet" />
                <svg-icon class="icon" name="credit-card" />
                <!-- <svg class="icon">
                  <use xlink:href="#svg-flight3"></use>
                </svg> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact__grid__map">
        <div class="guide_map" v-if="showMap">
          <!-- <no-ssr> -->
          <client-only placeholder="Loading...">
            <yandex-map
              ymap-class="map"
              :settings="settings"
              :coords="coords1"
              :zoom="zoom1"
              :scroll-zoom="scrollZoom"
              :options="settings"
              :controls="controls"
              ref="map1"
            >
            </yandex-map>
          </client-only>
          <!-- </no-ssr> -->
          <div class="guide_pop">
            <div
              uk-switcher="animation: uk-animation-fade; toggle: > *"
              class="guide_tabs"
            >
              <button
                class="guide_tab uk-active"
                type="button"
                aria-expanded="true"
              >
                <svg-icon class="icon" name="way-point" />
                <span> МАРШРУТ </span>
              </button>
              <button class="guide_tab" type="button" aria-expanded="false">
                <svg-icon class="icon" name="metro_logo" />
                <span> МЕТРО </span>
              </button>
              <button class="guide_tab" type="button" aria-expanded="false">
                <svg-icon class="icon" name="parking" />
                <span> ПАРКОВКА </span>
              </button>
            </div>
            <ul
              class="uk-switcher"
              id="switcher_gid"
              style="touch-action: pan-y pinch-zoom"
            >
              <li class="uk-active"></li>
              <li>
                <div id="guide_content3_m1" class="guide_content">
                  <div class="guide_content1_head">
                    На метро до станции «Киевская» Кольцевой, Филёвской или
                    Арбатско- Покровской линии. После выхода из метро, выйти на
                    Большую Дорогомиловскую улицу, далее можно проехать две
                    остановки на автобусах №№157 и 840 до остановки
                  </div>
                </div>
                <div
                  class="guide__link__toggle"
                  uk-toggle="target: #guide_content3_m1;"
                >
                  <svg-icon class="icon" name="arr_lang" />
                  <span>Свернуть</span>
                </div>
              </li>
              <li>
                <div id="guide_content1_m1" class="guide_content">
                  <div class="guide_content1_head">
                    <div class="txt12">
                      <b>Время работы:</b>
                    </div>
                    <div class="guide_content1_days">
                      <div>ПН</div>
                      <div>ВТ</div>
                      <div>СР</div>
                      <div>ЧТ</div>
                      <div>ПТ</div>
                      <div>СБ</div>
                      <div>ВС</div>
                    </div>
                  </div>
                  <div class="guide_content1_info">
                    <div class="guide_content1__info__txt">
                      Парковочный талон в выходные и праздничные дни:
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking" />
                      <div>
                        <div>
                          <b>380 руб./час.</b>
                        </div>
                        <div>с 9:00 до 23:59</div>
                      </div>
                    </div>
                    <div class="guide_content1__info__txt">
                      Подземная парковка (на -2 этаже Конгресс-парка)
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking" />
                      <div>
                        <div>
                          <b>300 руб./час. </b>
                        </div>
                        <div>ежедневно и круглосуточно</div>
                      </div>
                    </div>
                    <div class="guide_content1__info__txt">
                      Московский паркинг <br />
                      Набережная Тараса Шевченко
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking" />
                      <div>
                        <div>
                          <b>380 руб./час. </b>
                        </div>
                        <div>с 08:00 до 21:00</div>
                      </div>
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking" />
                      <div>
                        <div>
                          <b>200 руб./час. </b>
                        </div>
                        <div>с 21:00 до 08:00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="guide__link__toggle"
                  uk-toggle="target: #guide_content1_m1;"
                >
                  <svg-icon class="icon" name="arr_lang" />
                  <span>Свернуть</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="uk-flex uk-flex-wrap uk-child-width-1-2@l uk-grid-match contact__grid uk-scrollspy-inview uk-animation-fade"
      uk-scrollspy="cls: uk-animation-fade; delay: 400"
    >
      <div class="contact__grid__map">
        <div class="guide_map" v-if="showMap">
          <!-- <no-ssr> -->
          <client-only placeholder="Loading...">
            <yandex-map
              ymap-class="map"
              @map-was-initialized="onMapMounted"
              :settings="settings"
              :coords="coords2"
              :zoom="zoom2"
              :scroll-zoom="scrollZoom"
              :options="settings"
              :controls="controls"
              ref="map2"
            >
            </yandex-map>
          </client-only>
          <!-- </no-ssr> -->
          <div class="guide_pop">
            <div
              uk-switcher="animation: uk-animation-fade; toggle: > *"
              class="guide_tabs"
            >
              <button
                class="guide_tab uk-active"
                type="button"
                aria-expanded="true"
              >
                <svg-icon class="icon" name="way-point" />
                <span> МАРШРУТ </span>
              </button>
              <button class="guide_tab" type="button" aria-expanded="false">
                <svg-icon class="icon" name="metro_logo" />
                <span> МЕТРО </span>
              </button>
              <button class="guide_tab" type="button" aria-expanded="false">
                <svg-icon class="icon" name="parking" />
                <span> ПАРКОВКА </span>
              </button>
            </div>
            <ul
              class="uk-switcher"
              id="switcher_gid2"
              style="touch-action: pan-y pinch-zoom"
            >
              <li class="uk-active">
                <!-- <div id="guide_content2" class="guide_content">

                </div>
                <div class="vacancy_toggle" uk-toggle="target: #guide_content2;">
                  <svg class="icon">
                    <use xlink:href="#arrow_drop"></use>
                  </svg>
                  <span>Свернуть</span>
                </div> -->
              </li>
              <li>
                <!--
                <div id="guide_content3_m2" class="guide_content"></div>
                <div class="guide_content1_head">Бла-бла-бла</div>

                <div
                  class="guide__link__toggle"
                  uk-toggle="target: #guide_content3_m2;"
                >
                  <svg-icon class="icon" name="arr_lang" />
                  <span>Свернуть</span>
                </div> -->

                <div id="guide_content3_m2" class="guide_content">
                  <div class="guide_content1_head">
                    На метро до станции «Киевская» Кольцевой, Филёвской или
                    Арбатско- Покровской линии. После выхода из метро, выйти на
                    Большую Дорогомиловскую улицу, далее можно проехать две
                    остановки на автобусах №№157 и 840 до остановки
                  </div>
                </div>
                <div
                  class="guide__link__toggle"
                  uk-toggle="target: #guide_content3_m2;"
                >
                  <svg-icon class="icon" name="arr_lang" />
                  <span>Свернуть</span>
                </div>
              </li>
              <li>
                <div id="guide_content1_m2" class="guide_content">
                  <div class="guide_content1_head">
                    <div class="txt12">
                      <b>Время работы:</b>
                    </div>
                    <div class="guide_content1_days">
                      <div>ПН</div>
                      <div>ВТ</div>
                      <div>СР</div>
                      <div>ЧТ</div>
                      <div>ПТ</div>
                      <div>СБ</div>
                      <div>ВС</div>
                    </div>
                  </div>
                  <div class="guide_content1_info">
                    <div class="guide_content1__info__txt">
                      Парковочный талон в выходные и праздничные дни:
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking" />
                      <div>
                        <div>
                          <b>380 руб./час.</b>
                        </div>
                        <div>с 9:00 до 23:59</div>
                      </div>
                    </div>
                    <div class="guide_content1__info__txt">
                      Московский паркинг
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking" />
                      <div>
                        <div>
                          <b>380 руб./час. </b>
                        </div>
                        <div>с 08:00 до 21:00</div>
                      </div>
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking" />
                      <div>
                        <div>
                          <b>200 руб./час. </b>
                        </div>
                        <div>с 21:00 до 08:00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="guide__link__toggle"
                  uk-toggle="target: #guide_content1_m2;"
                >
                  <svg-icon class="icon" name="arr_lang" />
                  <span>Свернуть</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contact__grid__info">
        <div class="contact-info">
          <div class="buy-ticket-form__headline__item1">
            <svg-icon class="icon" name="ancor-in-circle" />
            <span class="headline_32 t_semibold"> Причал «Парк Горького» </span>
          </div>
          <div class="contact-info__items">
            <div class="contact-info__item contact-info__item_address">
              <div>
                <b>Адрес офиса продаж:</b>
              </div>
              <div>
                Причал «Парк Горького» ЦПКиО Им. М. Горького, Пушкинская наб.
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>Метро:</b>
              </div>
              <div class="trams__route__metro">
                <div
                  class="trams__route__metro__badge trams__route__metro__badge_brown"
                >
                  M
                </div>
                <span> Парк культуры </span>
              </div>
              <div class="trams__route__metro">
                <div
                  class="trams__route__metro__badge trams__route__metro__badge_brown"
                >
                  M
                </div>
                <span> Октябрьская </span>
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>Телефон:</b>
              </div>
              <div>
                <a :href="'tel:' + mapAboutInfo.parkPort.tel">
                  {{ mapAboutInfo.parkPort.tel }}
                </a>
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>Время работы:</b>
              </div>
              <div>
                {{ mapAboutInfo.parkPort.worktime }}
              </div>
            </div>
          </div>
          <!-- <div class="contact-info__ramp contact-info__ramp2">
            <svg class="icon">
              <use xlink:href="#cat_room"></use>
            </svg>
            <span>
              На причале базируются только теплоходы флотилии,
              подход другого флота невозможен.
            </span>
          </div> -->
          <div class="contact-info__payment">
            <div class="contact-info__payment__img uk-cover-container">
              <img
                data-src="~assets/img/inners2/contact3.png"
                class="img_cover"
                alt=""
                src="~assets/img/inners2/contact3.png"
              />
            </div>
            <div class="contact-info__payment__block">
              <div class="txt18"><b>Способы оплаты:</b></div>
              <div class="contact-info__payment__txt">
                {{ mapAboutInfo.parkPort.paymentTypes }}
              </div>
              <div class="contact-info__payment__images">
                <svg-icon class="icon" name="wallet"/>
                <svg-icon class="icon" name="credit-card"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="uk-flex uk-flex-wrap uk-child-width-1-2@l uk-grid-match uk-scrollspy-inview uk-animation-fade"
      uk-scrollspy="cls: uk-animation-fade; delay: 400"
    >
      <div>
        <div class="contact-info uk-position-relative contact-info_sales">
          <svg-icon name="big-ancor" class="contact-info__svg" />
          <div class="uk-position-relative">
            <div class="headline_32 t_semibold">Корпоративные продажи</div>
            <div class="contact-info__items">
              <div class="contact-info__item contact-info__item_address">
                <div>
                  <b
                    >Отдел корпоративных продаж, бронирования групповых
                    прогулочных рейсов и банкетных мероприятий: Причал
                    «Гостиница «Украина»</b
                  >
                </div>
              </div>
              <div class="contact-info__item">
                <div>
                  <b>Телефон:</b>
                </div>
                <div>
                  <div>{{ mapAboutInfo.sideInfo.tel }}</div>
                  <div>{{ mapAboutInfo.sideInfo.tel2 }}</div>
                </div>
              </div>
              <div class="contact-info__item">
                <div>
                  <b>Время работы:</b>
                </div>
                <div>
                  <div>{{ mapAboutInfo.sideInfo.worktime }}</div>
                </div>
              </div>
              <div class="contact-info__item">
                <div>
                  <b>E-mail:</b>
                </div>
                <div>
                  <a href="mailto:info@radisson-cruise.ru">
                    <div>{{ mapAboutInfo.sideInfo.email }}</div>
                  </a>
                </div>
              </div>
            </div>
            <a
              class="uk-button uk-button-default button_calcalutor"
              href="#modal-calculation"
              uk-toggle=""
            >
              <svg-icon class="icon" name="calculator" />
              <span>сделать расчет</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-cover-container contact-info_sales__img">
          <img
            data-src="~assets/img/inners2/contact4.png"
            class="img_cover"
            alt=""
            src="~assets/img/inners2/contact4.png"
          />
        </div>
      </div>
    </div>
    <ModalCalculation/>
  </div>
</template>

<script>
  import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps';
  import Header from '../components/Header';
  import Default from '../layouts/default';
  import UIkit from 'uikit';
  import Breadcrumbs from "../components/Breadcrumbs";
  import ModalCalculation from "../components/modals/Calculation";
  export default {
    name: 'Contacts',
    components: {ModalCalculation, Breadcrumbs, Header, Default, yandexMap, ymapMarker },
    data() {
      return {
        objMap1: null,
        objMap2: null,
        mapAboutInfo: {
          hotelPort: {
            tel: '+7 (495) 228-55-55',
            worktime: 'с 10:00 до 21:00 часа без выходных.',
            paymentTypes: 'Наличные, банковские карты',
          },
          parkPort: {
            tel: '+7 (495) 228-55-55',
            worktime: 'с 10:00 до 21:00 часа без выходных.',
            paymentTypes: 'Наличные, банковские карты',
          },
          sideInfo: {
            tel: '+7 (495) 228-55-55',
            tel2: '+7 (495) 411-03-04, доб. 39005, 39012, 39013, 39014;',
            worktime: 'с 10:00 до 21:00 часа без выходных.',
            email: 'info@radisson-cruise.ru',
            img: '',
          },
        },
        showMap: false,
        coords1: [55.744632, 37.566072],
        coords2: [55.72998, 37.597232],
        controls: ['routePanelControl'],
        scrollZoom: false,
        zoom1: 15,
        zoom2: 15,
        settings: {
          apiKey: '7fd77c97-6046-4745-bc55-b9257feb1d49',
          lang: 'ru_RU',
          coordorder: 'latlong',
          enterprise: false,
          version: '2.1',
        },
      };
    },
    methods: {
      /*    onClick(e) {
          this.coords = e.get('coords');
        },*/
      /*
        createMapButton(text, onClick) {
          const button = new ymaps.control.Button({
            data: {
              content: `<span class="button-text">${text}</span>`,
            },
            options: {
              selectOnClick: false,
            },
          });
          button.events.add('click', onClick);

          return button;
        },
        changeZoom(change) {
          this.zoom = Math.max(0, Math.min(20, this.zoom + change));
        },*/
      createMapButton(text, onClick) {
        const button = new ymaps.control.Button({
          data: {
            content: `<span class="button-text">${text}</span>`,
          },

          options: {
            selectOnClick: false,
          },
        });
        button.events.add('click', onClick);

        return button;
      },
      consoleLog() {
        //console.log('hello world');
      },
      async onMapMounted() {
        //const loadYmap = await loadYmap(this.settings);
        loadYmap(this.settings);
        const map1 = this.$refs.map1.myMap;
        const map2 = this.$refs.map2.myMap;

        if (window.innerWidth < 640) {
          /*       let ZoomLayout = ymaps.templateLayoutFactory.createClass("" +
         "<div class='map-controls'>" +
         "  <span class='crow'></span>" +
         "  <div id='zoom-in' class='btn'>" +
         "    <span class='icon-plus'>+</span>" +
         "  </div>" +
            "<div id='zoom-out' class='btn'>" +
              "<span class='icon-minus'>-</span>" +
            "</div>" +
         "</div>", {
         build: function() {
           ZoomLayout.superclass.build.call(this),
             this.zoomInCallback = ymaps.util.bind(this.zoomIn, this),
             this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this),
             document.querySelector("#zoom-in").bind("click", this.zoomInCallback),
             document.querySelector("#zoom-out").bind("click", this.zoomOutCallback)
         },
         clear: function() {
           document.querySelector("#zoom-in").unbind("click", this.zoomInCallback),
           document.querySelector("#zoom-out").unbind("click", this.zoomOutCallback),
           ZoomLayout.superclass.clear.call(this)
         },
         zoomIn: function() {
           let e = this.getData().control.getMap();
           this.zoom1 + 1
         },
         zoomOut: function() {
           let e = this.getData().control.getMap();
           this.zoom1 - 1
         }
       })
       let zoomControl = new ymaps.control.ZoomControl({
         options: {
           layout: ZoomLayout
         }
       });*/
          let control = map1.controls.get('routePanelControl');

          control.options.set({
            position: {
              left: '15px',
              top: '105px',
            },
            width: '288px',
            maxWidth: '288px',
            autofocus: false,
          });

          let loc1;
          ymaps.geolocation
            .get({
              // Зададим способ определения геолокации
              // на основе ip пользователя.
              provider: 'yandex',
              // Включим автоматическое геокодирование результата.
              autoReverseGeocode: true,
            })
            .then(function (result) {
              // Выведем результат геокодирования.
              loc1 = result.geoObjects.get(0).properties.get('metaDataProperty')
                .GeocoderMetaData.text;
            });
          //console.log('geo location =', loc1);
          // Зададим состояние панели для построения машрутов.
          control.routePanel.state.set({
            // Тип маршрутизации.
            type: 'auto',
            // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
            allowSwitch: false,
            // Включим определение адреса по координатам клика.
            // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
            reverseGeocoding: true,
            // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
            types: {
              auto: true,
              masstransit: true,
              pedestrian: true,
              bicycle: true,
              taxi: false,
            },
            // Выключим возможность задавать пункт отправления в поле ввода.
            fromEnabled: true,
            // Адрес или координаты пункта отправления.
            // from: location,
            from: control.routePanel.geolocate('from'),
            // Включим возможность задавать пункт назначения в поле ввода.
            toEnabled: true,
            adjustMapMargin: true,
            // Адрес или координаты пункта назначения.
            to: 'Москва, площадь Киевского вокзала, 2',
          });

          UIkit.util.on('#switcher_gid', 'shown', function (e) {
            if (e.detail[0].index() == 1) {
              control.options.set('visible', false);
              control.routePanel.state.set({
                from: '',
                to: '',
                // toEnabled: true
              });

              let multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.78149927706435, 37.6147065],
                    [55.75232856899768, 37.56677249999998],
                  ],
                  params: {
                    //Тип маршрутизации - пешеходная маршрутизация.
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#66A62E',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#66A62E',
                  wayPointVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  boundsAutoApply: false,
                }
              );
              let multiRoute3 = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.78149927706435, 37.6147065],
                    [55.75232856899768, 37.56677249999998],
                  ],
                  params: {
                    routingMode: 'pedestrian',
                  },
                },
                {
                  // Задаем собственную картинку для последней путевой точки.
                  wayPointStartIconLayout: 'default#image',
                  wayPointStartIconImageHref: 'pin.png',
                  wayPointStartIconImageSize: [30, 30],
                  wayPointStartIconImageOffset: [-15, -15],
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#4296EA',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#4296EA',
                  wayPointFinishVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );

              map1.geoObjects.removeAll(),
                map1.geoObjects.add(multiRoute),
                map1.geoObjects.add(multiRoute3),
                map1.geoObjects.add(myPlacemarkWithContent2);
              map1.setCenter([55.75232856899768, 37.56677249999998], 13, {
                checkZoomRange: true,
              });
            } else if (e.detail[0].index() == 0) {
              map1.geoObjects.removeAll();
              map1.geoObjects.add(myPlacemarkWithContent2);
              map1.setCenter([55.75232856899768, 37.56677249999998], 13, {
                checkZoomRange: true,
              });

              control.routePanel.state.set({
                from: loc1, //loc1
                to: 'Москва, площадь Киевского вокзала, 2',
              });
              control.options.set('visible', true);
            } else if (e.detail[0].index() == 2) {
              control.options.set('visible', false);
              control.routePanel.state.set({
                from: '',
                to: '',
                // toEnabled: true
              });

              let multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.74629632455781, 37.55858327243041],
                    [55.75232856899768, 37.56677249999998],
                  ],
                  params: {
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид путевых точек.
                  wayPointStartIconColor: '#fff',
                  wayPointStartIconFillColor: '#fff',
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#E61400',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#E61400',

                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Позволяет скрыть иконки транзитных точек маршрута.
                  wayPointVisible: false,
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );
              let multiRoute2 = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.7455761645423, 37.566619170639015],
                    [55.741710525158005, 37.55495679937017],
                    [55.75232856899768, 37.56677249999998],
                  ],
                  params: {
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#66A62E',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#66A62E',
                  wayPointVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );

              map1.geoObjects.removeAll(),
                map1.geoObjects.add(multiRoute),
                map1.geoObjects.add(multiRoute2),
                map1.geoObjects.add(myPlacemarkWithContent2);
              map1.setCenter([55.75232856899768, 37.56677249999998], 13, {
                checkZoomRange: true,
              });
            }
          });
          let ZoomLayout = ymaps.templateLayoutFactory.createClass(
            "<div class='map-controls'><span class='crow'></span><div id='zoom-in' class='btn'><span class='icon-plus'>+</span></div><div id='zoom-out' class='btn'><span class='icon-minus'>-</span></div></div>",
            {
              build: function () {
                // Вызываем родительский метод build.
                ZoomLayout.superclass.build.call(this);

                // Привязываем функции-обработчики к контексту и сохраняем ссылки
                // на них, чтобы потом отписаться от событий.
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                // Начинаем слушать клики на кнопках макета.
                document
                  .querySelector('#zoom-in')
                  .addEventListener('click', this.zoomInCallback);
                document
                  .querySelector('#zoom-out')
                  .addEventListener('click', this.zoomOutCallback);
              },

              clear: function () {
                // Снимаем обработчики кликов.
                document
                  .querySelector('#zoom-in')
                  .removeAttributeNS('click', this.zoomInCallback);
                document
                  .querySelector('#zoom-out')
                  .removeAttributeNS('click', this.zoomOutCallback);

                // Вызываем родительский метод clear.
                ZoomLayout.superclass.clear.call(this);
              },

              zoomIn: function (e) {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
              },

              zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
              },
            }
          );
          let zoomControl = new ymaps.control.ZoomControl({
            options: {
              layout: ZoomLayout,
            },
          });

          map1.controls.add(zoomControl, {
            float: 'none',
            position: {
              top: 450,
              right: 15,
            },
          });

          let mapEve = map1.panes.get('events');
          let mapElem = mapEve.getElement();
          map1.behaviors.disable('scrollZoom');
          map1.behaviors.disable('drag');
          ymaps.domEvent.manager.add(mapElem, 'touchmove', function (e) {
            1 === e.get('touches').length &&
              ((mapElem.style.transition = 'opacity .3s'),
              (mapElem.style.background = 'rgba(0, 0, 0, .45)'),
              (mapElem.style.alignItems = 'center'),
              (mapElem.style.boxSizing = 'border-box'),
              (mapElem.style.color = 'white'),
              (mapElem.style.display = 'flex'),
              (mapElem.style.justifyContent = 'center'),
              (mapElem.style.fontSize = '16px'),
              (mapElem.style.opacity = '0.0'),
              (mapElem.style.padding = '25px'),
              (mapElem.style.textAlign = 'center'),
              (mapElem.style.transition = 'opacity .3s'),
              (mapElem.style.touchAction = 'auto'),
              (mapElem.textContent =
                'Чтобы переместить карту проведите по ней двумя пальцами'),
              (mapElem.style.opacity = '1'));
          });
          ymaps.domEvent.manager.add(mapElem, 'touchend', function () {
            (mapElem.style.transition = 'opacity .8s'),
              (mapElem.style.opacity = '0');
          });
        } else {
          /*let ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='map-controls'><span class='crow'></span><div id='zoom-in' class='btn'><span class='icon-plus'>+</span></div><div id='zoom-out' class='btn'><span class='icon-minus'>-</span></div></div>", {
         build: function() {
           ZoomLayout.superclass.build.call(this),
             this.zoomInCallback = ymaps.util.bind(this.zoomIn, this),
             this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this),
             document.querySelector("#zoom-in").bind("click", this.zoomInCallback),
             document.querySelector("#zoom-out").bind("click", this.zoomOutCallback)

         },
         clear: function() {
           document.querySelector("#zoom-in").unbind("click", this.zoomInCallback),
           document.querySelector("#zoom-out").unbind("click", this.zoomOutCallback),
           ZoomLayout.superclass.clear.call(this)
         },
         zoomIn: function() {
           let e = this.getData().control.getMap();
           map1.setZoom(map.getZoom() + 1, {checkZoomRange: true});
         },1
         zoomOut: function() {
           let e = this.getData().control.getMap();
           e.setZoom(e.getZoom() - 1, {
             checkZoomRange: !0
           })
         }
       })
       let zoomControl = new ymaps.control.ZoomControl({
         options: {
           layout: ZoomLayout
         }
       });*/

          let control = map1.controls.get('routePanelControl');
          if (window.innerWidth < 959) {
            control.options.set({
              position: {
                left: '30px',
                top: '140px',
              },
              width: '348px',
              maxWidth: '348px',
              autofocus: false,
            });
          } else {
            control.options.set({
              position: {
                left: '70px',
                top: '159px',
              },
              width: '348px',
              maxWidth: '348px',
              autofocus: false,
            });
          }

          let loc1;
          ymaps.geolocation
            .get({
              // Зададим способ определения геолокации
              // на основе ip пользователя.
              provider: 'yandex',
              // Включим автоматическое геокодирование результата.
              autoReverseGeocode: true,
            })
            .then(function (result) {
              // Выведем результат геокодирования.
              loc1 = result.geoObjects.get(0).properties.get('metaDataProperty')
                .GeocoderMetaData.text;
              //console.log('geo location =', loc1);
            });

          // Зададим состояние панели для построения машрутов.
          control.routePanel.state.set({
            // Тип маршрутизации.
            type: 'auto',
            // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
            allowSwitch: false,
            // Включим определение адреса по координатам клика.
            // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
            reverseGeocoding: true,
            // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
            types: {
              auto: true,
              masstransit: true,
              pedestrian: true,
              bicycle: true,
              taxi: false,
            },
            // Выключим возможность задавать пункт отправления в поле ввода.
            fromEnabled: true,
            // Адрес или координаты пункта отправления.
            // from: location,
            from: control.routePanel.geolocate('from'),
            // Включим возможность задавать пункт назначения в поле ввода.
            toEnabled: true,
            adjustMapMargin: true,
            // Адрес или координаты пункта назначения.
            to: 'Москва, Кутузовский проспект, 2/1с6',
          });

          UIkit.util.on('#switcher_gid', 'shown', function (e) {
            if (e.detail[0].index() == 1) {
              control.options.set('visible', false);
              control.routePanel.state.set({
                from: '',
                to: '',
                // toEnabled: true
              });

              let multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.78149927706435, 37.6147065],
                    [55.75232856899768, 37.56677249999998],
                  ],
                  params: {
                    //Тип маршрутизации - пешеходная маршрутизация.
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#66A62E',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#66A62E',
                  wayPointVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  boundsAutoApply: false,
                }
              );
              let multiRoute3 = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.78149927706435, 37.6147065],
                    [55.75232856899768, 37.56677249999998],
                  ],
                  params: {
                    routingMode: 'pedestrian',
                  },
                },
                {
                  // Задаем собственную картинку для последней путевой точки.
                  wayPointStartIconLayout: 'default#image',
                  wayPointStartIconImageHref: 'metro.svg', // "/img/call/metro.png"
                  wayPointStartIconImageSize: [30, 30],
                  wayPointStartIconImageOffset: [-15, -15],
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#4296EA',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#4296EA',
                  wayPointFinishVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );

              map1.geoObjects.removeAll(),
                map1.geoObjects.add(multiRoute),
                map1.geoObjects.add(multiRoute3),
                map1.geoObjects.add(myPlacemarkWithContent2);
              map1.setCenter([55.75232856899768, 37.56677249999998], 13, {
                checkZoomRange: true,
              });
            } else if (e.detail[0].index() == 0) {
              map1.geoObjects.removeAll();
              map1.geoObjects.add(myPlacemarkWithContent2);
              map1.setCenter([55.75232856899768, 37.56677249999998], 13, {
                checkZoomRange: true,
              });

              control.routePanel.state.set({
                from: loc1, //loc1
                to: 'Москва, площадь Киевского вокзала, 2',
              });
              control.options.set('visible', true);
            } else if (e.detail[0].index() == 2) {
              control.options.set('visible', false);
              control.routePanel.state.set({
                from: '',
                to: '',
                // toEnabled: true
              });

              let multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.74629632455781, 37.55858327243041],
                    [55.75232856899768, 37.56677249999998],
                  ],
                  params: {
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид путевых точек.
                  wayPointStartIconColor: '#fff',
                  wayPointStartIconFillColor: '#fff',
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#E61400',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#E61400',

                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Позволяет скрыть иконки транзитных точек маршрута.
                  wayPointVisible: false,
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );
              let multiRoute2 = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.7455761645423, 37.566619170639015],
                    [55.741710525158005, 37.55495679937017],
                    [55.75232856899768, 37.56677249999998],
                  ],
                  params: {
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#66A62E',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#66A62E',
                  wayPointVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );

              map1.geoObjects.removeAll(),
                map1.geoObjects.add(multiRoute),
                map1.geoObjects.add(multiRoute2),
                map1.geoObjects.add(myPlacemarkWithContent2);
              map1.setCenter([55.75232856899768, 37.56677249999998], 13, {
                checkZoomRange: true,
              });
            }
          });

          let ZoomLayout = ymaps.templateLayoutFactory.createClass(
            "<div class='map-controls'><span class='crow'></span><div id='zoom-in' class='btn'><span class='icon-plus'>+</span></div><div id='zoom-out' class='btn'><span class='icon-minus'>-</span></div></div>",
            {
              build: function () {
                // Вызываем родительский метод build.
                ZoomLayout.superclass.build.call(this);

                // Привязываем функции-обработчики к контексту и сохраняем ссылки
                // на них, чтобы потом отписаться от событий.
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                // Начинаем слушать клики на кнопках макета.
                document
                  ?.querySelector('#zoom-in')
                  ?.addEventListener('click', this.zoomInCallback);
                document
                  ?.querySelector('#zoom-out')
                  ?.addEventListener('click', this.zoomOutCallback);
              },

              clear: function () {
                // Снимаем обработчики кликов.
                document
                  ?.querySelector('#zoom-in')
                  ?.removeAttributeNS('click', this.zoomInCallback);
                document
                  ?.querySelector('#zoom-out')
                  ?.removeAttributeNS('click', this.zoomOutCallback);

                // Вызываем родительский метод clear.
                ZoomLayout?.superclass?.clear.call(this);
              },

              zoomIn: function (e) {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
              },

              zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
              },
            }
          );
          let zoomControl = new ymaps.control.ZoomControl({
            options: {
              layout: ZoomLayout,
            },
          });

          map1.controls.add(zoomControl, {
            float: 'none',
            position: {
              top: 450,
              right: 15,
            },
          });

/*           console.log(map1);
          console.log(ymaps); */

          map1.behaviors.disable('scrollZoom');
        }

        let myPlacemarkWithContent2 = new ymaps.Placemark(
          [55.75232856899768, 37.56677249999998],
          {
            //  hintContent: 'Посмотреть адрес',
            //  balloonContent: 'Московская обл. г. Подольск, Т.Ц. Красные ряды'
          },
          {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'pin.png',
            // Размеры метки.
            iconImageSize: [54.79, 54.79],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -27],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [115, 115],
          }
        );

        map1.geoObjects.add(myPlacemarkWithContent2); // помещаем флажок на карту

        if (window.innerWidth < 640) {
          let ZoomLayout2 = ymaps.templateLayoutFactory.createClass(
            "<div class='map-controls'><span class='crow'></span><div id='zoom-in2' class='btn'><span class='icon-plus'>+</span></div><div id='zoom-out2' class='btn'><span class='icon-minus'>-</span></div></div>",
            {
              build: function () {
                ZoomLayout2.superclass.build.call(this);
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);
                document
                  .querySelector('#zoom-in2')
                  .addEventListener('click', this.zoomInCallback);
                document
                  .querySelector('#zoom-out2')
                  .addEventListener('click', this.zoomOutCallback);
              },
              clear: function () {
                document
                  .querySelector('#zoom-in2')
                  .removeEventListener('click', this.zoomInCallback);
                document
                  .querySelector('#zoom-out2')
                  .removeEventListener('click', this.zoomOutCallback);
                ZoomLayout2.superclass.clear.call(this);
              },
              zoomIn: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
              },
              zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
              },
            }
          );
          let zoomControl2 = new ymaps.control.ZoomControl({
            options: {
              layout: ZoomLayout2,
            },
          });
          var control2 = map2.controls.get('routePanelControl');

          control2.options.set({
            position: {
              left: '15px',
              top: '105px',
            },
            autofocus: false,
            width: '288px',
            maxWidth: '288px',
          });

          let loc2;
          ymaps.geolocation
            .get({
              // Зададим способ определения геолокации
              // на основе ip пользователя.
              provider: 'yandex',
              // Включим автоматическое геокодирование результата.
              autoReverseGeocode: true,
            })
            .then(function (result) {
              // Выведем результат геокодирования.
              loc2 = result.geoObjects.get(0).properties.get('metaDataProperty')
                .GeocoderMetaData.text;
            });

          // Зададим состояние панели для построения машрутов.
          control2.routePanel.state.set({
            // Тип маршрутизации.
            type: 'auto',
            // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
            allowSwitch: false,
            // Включим определение адреса по координатам клика.
            // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
            reverseGeocoding: true,
            // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
            types: {
              auto: true,
              masstransit: true,
              pedestrian: true,
              bicycle: true,
              taxi: false,
            },
            // Выключим возможность задавать пункт отправления в поле ввода.
            fromEnabled: true,
            // Адрес или координаты пункта отправления.
            // from: location,
            from: control2.routePanel.geolocate('from'), //control2.routePanel.geolocate('from')
            // Включим возможность задавать пункт назначения в поле ввода.
            toEnabled: true,
            adjustMapMargin: true,
            // Адрес или координаты пункта назначения.
            to: 'Россия, Москва, причал ЦПКиО',
          });

          UIkit.util.on('#switcher_gid2', 'shown', function (e) {
            if (e.detail[0].index() == 1) {
              control2.options.set('visible', false);
              control2.routePanel.state.set({
                from: '',
                to: '',
                // toEnabled: true
              });

              var multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.78149927706435, 37.6147065],
                    [55.72244094480988, 37.59080249999998],
                  ],
                  params: {
                    //Тип маршрутизации - пешеходная маршрутизация.
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#66A62E',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#66A62E',
                  wayPointVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  boundsAutoApply: false,
                }
              );
              var multiRoute3 = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.78149927706435, 37.6147065],
                    [55.72244094480988, 37.59080249999998],
                  ],
                  params: {
                    routingMode: 'pedestrian',
                  },
                },
                {
                  // Задаем собственную картинку для последней путевой точки.
                  wayPointStartIconLayout: 'default#image',
                  wayPointStartIconImageHref: 'metro.svg',
                  wayPointStartIconImageSize: [30, 30],
                  wayPointStartIconImageOffset: [-15, -15],
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#4296EA',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#4296EA',
                  wayPointFinishVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );

              map2.geoObjects.removeAll(),
                map2.geoObjects.add(multiRoute),
                map2.geoObjects.add(multiRoute3),
                map2.geoObjects.add(myPlacemarkWithContent2);
              map2.setCenter([55.72244094480988, 37.59080249999998], 13, {
                checkZoomRange: true,
              });
            } else if (e.detail[0].index() == 0) {
              map2.geoObjects.removeAll();
              map2.geoObjects.add(myPlacemarkWithContent2);
              map2.setCenter([55.72244094480988, 37.59080249999998], 13, {
                checkZoomRange: true,
              });

              control2.routePanel.state.set({
                from: loc2, //loc2
                to: 'Москва, площадь Киевского вокзала, 2',
              });
              control2.options.set('visible', true);
            } else if (e.detail[0].index() == 2) {
              control2.options.set('visible', false);
              control2.routePanel.state.set({
                from: '',
                to: '',
                // toEnabled: true
              });

              let multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.74629632455781, 37.55858327243041],
                    [55.72244094480988, 37.59080249999998],
                  ],
                  params: {
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид путевых точек.
                  wayPointStartIconColor: '#fff',
                  wayPointStartIconFillColor: '#fff',
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#E61400',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#E61400',

                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Позволяет скрыть иконки транзитных точек маршрута.
                  wayPointVisible: false,
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );
              let multiRoute2 = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.7455761645423, 37.566619170639015],
                    [55.741710525158005, 37.55495679937017],
                    [55.72244094480988, 37.59080249999998],
                  ],
                  params: {
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#66A62E',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#66A62E',
                  wayPointVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );

              map2.geoObjects.removeAll(),
                map2.geoObjects.add(multiRoute),
                map2.geoObjects.add(multiRoute2),
                map2.geoObjects.add(myPlacemarkWithContent2);
              map2.setCenter([55.72244094480988, 37.59080249999998], 13, {
                checkZoomRange: true,
              });
            }
          });
          map2.controls.add(zoomControl2, {
            float: 'none',
            position: {
              top: 250,
              right: 15,
            },
          });

          var mapEve = map2.panes.get('events');
          var mapElem = mapEve.getElement();
          map2.behaviors.disable('scrollZoom');
          map2.behaviors.disable('drag');
          ymaps.domEvent.manager.add(mapElem, 'touchmove', function (e) {
            1 === e.get('touches').length &&
              ((mapElem.style.transition = 'opacity .3s'),
              (mapElem.style.background = 'rgba(0, 0, 0, .45)'),
              (mapElem.style.alignItems = 'center'),
              (mapElem.style.boxSizing = 'border-box'),
              (mapElem.style.color = 'white'),
              (mapElem.style.display = 'flex'),
              (mapElem.style.justifyContent = 'center'),
              (mapElem.style.fontSize = '16px'),
              (mapElem.style.opacity = '0.0'),
              (mapElem.style.padding = '25px'),
              (mapElem.style.textAlign = 'center'),
              (mapElem.style.transition = 'opacity .3s'),
              (mapElem.style.touchAction = 'auto'),
              (mapElem.textContent =
                'Чтобы переместить карту проведите по ней двумя пальцами'),
              (mapElem.style.opacity = '1'));
          });
          ymaps.domEvent.manager.add(mapElem, 'touchend', function () {
            (mapElem.style.transition = 'opacity .8s'),
              (mapElem.style.opacity = '0');
          });
        } else {
          let ZoomLayout2 = ymaps.templateLayoutFactory.createClass(
            "<div class='map-controls'><span class='crow'></span><div id='zoom-in2' class='btn'><span class='icon-plus'>+</span></div><div id='zoom-out2' class='btn'><span class='icon-minus'>-</span></div></div>",
            {
              build: function () {
/*                 console.log('ymaps CreateClass Map', ymaps);
                console.log('map1 CreateClass Map', map1);
                console.log('THIS CreateClass Map', this); */
                ZoomLayout2.superclass.build.call(this);
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);
                document
                  ?.querySelector('#zoom-in2')
                  ?.addEventListener('click', this.zoomInCallback);
                document
                  ?.querySelector('#zoom-out2')
                  ?.addEventListener('click', this.zoomOutCallback);
              },
              clear: function () {
                document
                  ?.querySelector('#zoom-in2')
                  ?.removeEventListener('click', this.zoomInCallback);
                document
                  ?.querySelector('#zoom-out2')
                  ?.removeEventListener('click', this.zoomOutCallback);
                ZoomLayout2.superclass.clear.call(this);
              },
              zoomIn: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
              },
              zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
              },
            }
          );
          let zoomControl2 = new ymaps.control.ZoomControl({
            options: {
              layout: ZoomLayout2,
            },
          });

          let control2 = map2.controls.get('routePanelControl');
          if (window.innerWidth < 959) {
            control2.options.set({
              position: {
                left: '30px',
                top: '140px',
              },
              width: '348px',
              maxWidth: '348px',
              autofocus: false,
            });
          } else {
            control2.options.set({
              position: {
                left: '70px',
                top: '159px',
              },
              width: '348px',
              maxWidth: '348px',
              autofocus: false,
            });
          }

          let loc2;
          ymaps.geolocation
            .get({
              // Зададим способ определения геолокации
              // на основе ip пользователя.
              provider: 'yandex',
              // Включим автоматическое геокодирование результата.
              autoReverseGeocode: true,
            })
            .then(function (result) {
              // Выведем результат геокодирования.
              loc2 = result.geoObjects.get(0).properties.get('metaDataProperty')
                .GeocoderMetaData.text;
            });

          // Зададим состояние панели для построения машрутов.
          control2.routePanel.state.set({
            // Тип маршрутизации.
            type: 'auto',
            // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
            allowSwitch: false,
            // Включим определение адреса по координатам клика.
            // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
            reverseGeocoding: true,
            // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
            types: {
              auto: true,
              masstransit: true,
              pedestrian: true,
              bicycle: true,
              taxi: false,
            },
            // Выключим возможность задавать пункт отправления в поле ввода.
            fromEnabled: true,
            // Адрес или координаты пункта отправления.
            // from: location,
            from: control2.routePanel.geolocate('from'), //control2.routePanel.geolocate('from')
            // Включим возможность задавать пункт назначения в поле ввода.
            toEnabled: true,
            adjustMapMargin: true,
            // Адрес или координаты пункта назначения.
            to: 'Москва, причал Парк Горького',
          });

          UIkit.util.on('#switcher_gid2', 'shown', function (e) {
            if (e.detail[0].index() === 1) {
              control2.options.set('visible', false);
              control2.routePanel.state.set({
                from: '',
                to: '',
                // toEnabled: true
              });

              let multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.78149927706435, 37.6147065],
                    [55.72244094480988, 37.59080249999998],
                  ],
                  params: {
                    //Тип маршрутизации - пешеходная маршрутизация.
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#66A62E',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#66A62E',
                  wayPointVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  boundsAutoApply: false,
                }
              );
              let multiRoute3 = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.78149927706435, 37.6147065],
                    [55.72244094480988, 37.59080249999998],
                  ],
                  params: {
                    routingMode: 'pedestrian',
                  },
                },
                {
                  // Задаем собственную картинку для последней путевой точки.
                  wayPointStartIconLayout: 'default#image',
                  wayPointStartIconImageHref: 'metro.svg',
                  wayPointStartIconImageSize: [30, 30],
                  wayPointStartIconImageOffset: [-15, -15],
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#4296EA',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#4296EA',
                  wayPointFinishVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );

              map2.geoObjects.removeAll(),
                map2.geoObjects.add(multiRoute),
                map2.geoObjects.add(multiRoute3),
                map2.geoObjects.add(myPlacemarkWithContent2);
              map2.setCenter([55.72244094480988, 37.59080249999998], 13, {
                checkZoomRange: true,
              });
            } else if (e.detail[0].index() == 0) {
              map2.geoObjects.removeAll();
              map2.geoObjects.add(myPlacemarkWithContent2);
              map2.setCenter([55.72244094480988, 37.59080249999998], 13, {
                checkZoomRange: true,
              });

              control2.routePanel.state.set({
                from: loc2, //loc2
                to: 'Москва, причал Парк Горького',
              });
              control2.options.set('visible', true);
            } else if (e.detail[0].index() == 2) {
              control2.options.set('visible', false);
              control2.routePanel.state.set({
                from: '',
                to: '',
                // toEnabled: true
              });

              var multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.74629632455781, 37.55858327243041],
                    [55.72244094480988, 37.59080249999998],
                  ],
                  params: {
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид путевых точек.
                  wayPointStartIconColor: '#fff',
                  wayPointStartIconFillColor: '#fff',
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#E61400',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#E61400',

                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Позволяет скрыть иконки транзитных точек маршрута.
                  wayPointVisible: false,
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );
              let multiRoute2 = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.7455761645423, 37.566619170639015],
                    [55.741710525158005, 37.55495679937017],
                    [55.72244094480988, 37.59080249999998],
                  ],
                  params: {
                    routingMode: 'auto',
                  },
                },
                {
                  // Внешний вид линии маршрута.
                  routeStrokeWidth: 2,
                  routeStrokeColor: '#66A62E',
                  routeActiveStrokeWidth: 6,
                  routeActiveStrokeColor: '#66A62E',
                  wayPointVisible: false,
                  // Внешний вид точечных маркеров под путевыми точками.
                  pinIconFillColor: 'rgba(255,255,255,0)',
                  pinActiveIconFillColor: 'rgba(255,255,255,0)',
                  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                  boundsAutoApply: false,
                }
              );

              map2.geoObjects.removeAll(),
                map2.geoObjects.add(multiRoute),
                map2.geoObjects.add(multiRoute2),
                map2.geoObjects.add(myPlacemarkWithContent2);
              map2.setCenter([55.72244094480988, 37.59080249999998], 13, {
                checkZoomRange: true,
              });
            }
          });

          map2.controls.add(zoomControl2, {
            float: 'none',
            position: {
              top: 450,
              right: 15,
            },
          });
          map2.behaviors.disable('scrollZoom');
        }

        let myPlacemarkWithContent3 = new ymaps.Placemark(
          [55.72244094480988, 37.59080249999998],
          {
            //  hintContent: 'Посмотреть адрес',
            //  balloonContent: 'Московская обл. г. Подольск, Т.Ц. Красные ряды'
          },
          {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'pin.png',
            // Размеры метки.
            iconImageSize: [54.79, 54.79],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -27],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [115, 115],
          }
        );

        map2.geoObjects.add(myPlacemarkWithContent3); // помещаем флажок на карту
      },
    },

    mounted() {
      this.showMap = true;
    },
    beforeDestroy() {
      this.$refs.map1?.myMap?.destroy();
      this.$refs.map2?.myMap?.destroy();
      /*       this.$refs.map1.myMap.geoObjects.removeAll();
      this.$refs.map2.myMap.geoObjects.removeAll();

      console.log('map1 => ', this.$refs.map1);*/
      /*       this.$refs.map1.myMap.destroy();*/
      //this.$refs.map1.myMap = null;
    },
  };
</script>

<style lang="scss">
  .map {
    width: 100%;
    height: 100%;
  }
</style>
