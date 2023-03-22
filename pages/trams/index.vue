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
          <nuxt-link class="uk-button uk-button-default button_ticket  transition" to="/trams/schedule/">
            <span>Купить билет</span>
            <svg-icon class="icon" name="ticket"/>
          </nuxt-link>
        </div>
      </div>
    </Header>
    <div class="uk-flex uk-child-width-1-2@l uk-grid-match uk-flex-wrap">
      <!--      <div class="trams_cost-wrapper">
              <div class="trams__cost">
                <div class="headline_32 t_semibold">
                  Стоимость проездного
                </div>
                <div class="trams__cost__main uk-position-relative">
                  <svg-icon class="trams__cost__svg" name="back-tickets"/>
                  <div class="trams__cost__p1">
                    При покупке онлайн
                  </div>
                  <div class="trams__cost__items">
                    <div class="trams__cost__item">
                      <div class="trams__cost__item__p1">
                        На 24 часа
                      </div>
                      <div class="trams__cost__item__type">
                        <div>
                          Взрослый
                        </div>
                        <div>
                          1 500 руб.
                        </div>
                      </div>
                      <div class="trams__cost__item__type">
                        <div>
                          Детский
                        </div>
                        <div>
                          1 100 руб.
                        </div>
                      </div>
                    </div>
                    <div class="trams__cost__item">
                      <div class="trams__cost__item__p1">
                        На 48 часов
                      </div>
                      <div class="trams__cost__item__type">
                        <div>
                          Взрослый
                        </div>
                        <div>
                          2 000 руб.
                        </div>
                      </div>
                      <div class="trams__cost__item__type">
                        <div>
                          Детский
                        </div>
                        <div>
                          1 500 руб.
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/trolley">
                  <span>Купить билет</span>
                  <svg-icon class="icon" name="ticket"/>
                </nuxt-link>
              </div>
            </div>
            <div class="trams_cost-wrapper">
              <div class="trams__cost trams__cost_one-off">
                <div class="headline_32 t_semibold">
                  Стоимость разового билета
                </div>
                <div class="trams__cost__main uk-position-relative">
                  <svg-icon class="trams__cost__svg" name="back-tickets"/>
                  <div class="trams__cost__p1">
                    При покупке на борту трамвайчика
                  </div>
                  <div class="trams__cost__items">
                    <div class="trams__cost__item">
                      <div class="trams__cost__item__p1">
                        Маршрут 2.45 мин
                      </div>
                      <div class="trams__cost__item__type">
                        <div>
                          Взрослый
                        </div>
                        <div>
                          800 руб.
                        </div>
                      </div>
                      <div class="trams__cost__item__type">
                        <div>
                          Детский
                        </div>
                        <div>
                          600 руб.
                        </div>
                      </div>
                    </div>
                    <div class="trams__cost__item">
                      <div class="trams__cost__item__p1">
                        Маршрут 50 мин
                      </div>
                      <div class="trams__cost__item__type">
                        <div>
                          Взрослый
                        </div>
                        <div>
                          600 руб.
                        </div>
                      </div>
                      <div class="trams__cost__item__type">
                        <div>
                          Детский
                        </div>
                        <div>
                          400 руб.
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                &lt;!&ndash; <div class="trams__cost_one-off__bottom">
                  <img uk-img data-src="/img/inners/one-off.png" alt="">
                  <div class="trams__cost_one-off__bottom__info">
                    <div class="trams__cost_one-off__bottom__p1"><b>При оплате по карте «Тройка»</b></div>
                    <div class="trams__cost_one-off__bottom__items">
                      <div class="trams__cost__item__type">
                        <div>
                          Взрослый
                        </div>
                        <div>
                          640 руб.
                        </div>
                      </div>
                      <div class="trams__cost__item__type">
                        <div>
                          Детский
                        </div>
                        <div>
                          400 руб.
                        </div>
                      </div>
                    </div>
                  </div>
                </div> &ndash;&gt;
              </div>
            </div>-->
      <div class="trams_cost-wrapper" v-for="(ticket, index) in ticketsInfo" :key="'tkt' + index"
      >
        <TicketCost :online="ticket.online" :title="ticket.title" :subtitle="ticket.subtitle" :variants="ticket.variants"/>
      </div>
    </div>
    <section class="tenancy__about trams__about uk-flex uk-flex-wrap uk-child-width-1-2@m">
      <div class="tenancy__about__info uk-position-relative">
        <svg-icon class="icon" name="wheel"/>
        <div class="uk-position-relative">
          <div class="headline_22">
            Уже третий сезон речные «кабриолеты» Флотилии
            радуют москвичей и гостей столицы, ведь с ними
            знакомство с главными достопримечательностями
            города стало быстрым и небанальным.
          </div>
          <div class="headline_line"></div>
          <div class="tenancy__about_txt">
            Речные трамвайчики Флотилии «Рэдиссон Ройал» развивают туристические возможности и потенциал города Москвы, стараясь
            привлечь внимание жителей и туристов к новому виду досуга
            и времяпрепровождению на Москва-реке.
          </div>
          <a class="uk-button uk-button-default" href="#scheme">
            <span>МАРШРУТЫ И ПРИЧАЛЫ</span>
          </a>
        </div>
      </div>
      <div class="uk-cover-container tenancy__about__img">
        <img data-src="~assets/img/inners/tram2.png" alt="" class="img_cover" src="~assets/img/inners/tram2.png">
      </div>
    </section>
    <Scheme/>
    <div class="trams__headline">
      <div class="uk-container">
        <div class="headline_56">
          Маршрут и причалы
        </div>
      </div>
    </div>
    <!--    <div class="trams__route">
          <div class="trams__route__img uk-cover-container">
            <img  class="img_cover" data-src="~assets/img/inners/tram8.png" alt="" src="~assets/img/inners/tram8.png">
          </div>
          <div class="trams__route__info">
            <div class="trams__route__num">
              01.
            </div>
            <div class="headline_line"></div>
            <div class="headline_22 t_semibold">
              Причал «Гостиница «Украина»
            </div>
            <div class="trams__route__metro">
              <div class="trams__route__metro__badge trams__route__metro__badge_brown">M</div>
              <div class="trams__route__metro__badge trams__route__metro__badge_blue">M</div>
              <span>
              Киевска (Кольцевая и Филевская линии) ~ 20 мин.
            </span>
            </div>
            <div class="trams__route__txt">
              <p>
                Выход из метро на ул. Большая Дорогомиловская. Перейти на противоположную сторону
                (ориентир McDonald’s). Далее через Украинский бульвар выйти на Кутузовский проспект,
                перейти на сторону Гостиницы Radisson Collection Hotel, Moscow и спуститься к реке на причал
                «Гостиница «Украина».
              </p>
              <p>
                Координаты для навигатора: <b>55.753155, 37.567423</b>
              </p>
            </div>
          </div>
        </div>
        <div class="trams__route">

          <div class="trams__route__info">
            <div class="trams__route__num">
              02.
            </div>
            <div class="headline_line"></div>
            <div class="headline_22 t_semibold">
              Причал «Киевский Вокзал»
            </div>
            <div class="trams__route__metro">
              <div class="trams__route__metro__badge trams__route__metro__badge_blue">M</div>
              <span>
              м. Киевская ~ 5 мин.
            </span>
            </div>
            <div class="trams__route__txt">
              <p>
                Выход из метро к Киевскому вокзалу. Далее через площадь Европы выйти
                на Бережковскую набережную Москвы-реки. Обращаем ваше внимание,
                что у причала «Киевский вокзал» парковка для а/м отсутствует.
              </p>

              <p>Координаты для навигатора: <b>55.743841, 37.571682</b></p>
            </div>
          </div>
          <div class="trams__route__img uk-cover-container">
            <img  class="img_cover" data-src="~assets/img/inners/tram-2.png" alt="" src="~assets/img/inners/tram-2.png">
          </div>
        </div>
        <div class="trams__route">
          <div class="trams__route__img uk-cover-container">
            <img  class="img_cover" data-src="~assets/img/inners/tram9.png" alt="" src="~assets/img/inners/tram9.png">
          </div>
          <div class="trams__route__info">
            <div class="trams__route__num">
              03.
            </div>
            <div class="headline_line"></div>
            <div class="headline_22 t_semibold">
              Причал «Воробьевы горы»


            </div>
            <div class="trams__route__metro">
              <div class="trams__route__metro__badge trams__route__metro__badge_red">M</div>
              <span>
              Воробьёвы Горы ~ 10 -15 мин.
            </span>
            </div>
            <div class="trams__route__txt">
              <p>
                Выход из метро к Москве-реке на Воробьёвскую набережную в сторону стадиона Лужники.
                Обращаем ваше внимание, что у причала «Воробьевы горы» парковка для а/м отсутствует.
              </p>

              <p>Координаты для навигатора: <b>55.708459, 37.545670</b></p>
            </div>
          </div>
        </div>
        <div class="trams__route">

          <div class="trams__route__info">
            <div class="trams__route__num">
              04.
            </div>
            <div class="headline_line"></div>
            <div class="headline_22 t_semibold">
              Причал «Парк Горького»
            </div>
            <div class="trams__route__metro">
              <div class="trams__route__metro__badge trams__route__metro__badge_red">M</div>
              <div class="trams__route__metro__badge trams__route__metro__badge_orange">M</div>
              <span>
              Октябрьская/ Парк Культуры ~ 15 мин.
            </span>
            </div>
            <div class="trams__route__txt">
              <p>
                Выход к ЦПКиО им. Горького. Главный вход в ЦПКИО им. М. Горького.
                Далее правее через аллеи выйти на Пушкинскую набережную и двигаться
                около 3 минут в сторону Воробьевых гор до причала «Парк Горького».
                Есть платная парковка у главного входа в ЦПКИО им. М. Горького.
              </p>

              <p>Координаты для навигатора: <b>55.730145, 37.597191</b></p>
            </div>
          </div>
          <div class="trams__route__img uk-cover-container">
            <img  class="img_cover" data-src="~assets/img/inners/tram10.png" alt="" src="~assets/img/inners/tram10.png">
          </div>
        </div>
        <div class="trams__route">
          <div class="trams__route__img uk-cover-container">
            <img  class="img_cover" data-src="~assets/img/inners/tram11.png" alt="" src="~assets/img/inners/tram11.png">
          </div>
          <div class="trams__route__info">
            <div class="trams__route__num">
              05.
            </div>
            <div class="headline_line"></div>
            <div class="headline_22 t_semibold">
              Причал «Зарядье»
            </div>
            <div class="trams__route__metro">
              <div class="trams__route__metro__badge trams__route__metro__badge_orange">M</div>
              <span>
              Китай Город ~ 10 мин.
            </span>
            </div>
            <div class="trams__route__txt">
              <p>
                Выход к Москве-реке на Москворецкую набережную. Причал находится
                на территории парка «Зарядье», под парящим мостом. Вход в парк бесплатный.
                Подземная парковка – Моспаркинг.
              </p>

              <p>Координаты для навигатора: <b>55.751563, 37.625729</b></p>
            </div>
          </div>
        </div>-->
    <Route v-for="(route, index) in routesInfo" :key="'rt' + index"
           :counter="index + 1"
           :fileName="route.fileName" :portName="route.portName"
           :coordinates="route.coordinates" :metro="route.metro"
           :how-to-go="route.howToGo" :metroColor="route.metroColors"
    />
    <section class="uk-cover-container trams-shutdown">
      <img  data-src="~assets/img/inners/tram3.png" alt="" class="img_cover" src="~assets/img/inners/tram3.png">
      <div class="uk-container uk-position-relative">
        <div class="headline_32 t_semibold">
          Интервал в движении судов — 30 минут <br class="uk-visible@m">
          с остановками на следующих причалах:
        </div>
        <div class="trams-shutdown__items">
          <div class="trams-shutdown__decor"></div>
          <div class="trams-shutdown__decor trams-shutdown__decor2"></div>

          <PortItem portName="Гостиница «Украина»"/>
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
          </div>

          <PortItem portName="Парк Горького"/>
          <div class="trams-shutdown__arr">
            <svg-icon class="icon" name="arrow"/>
          </div>

          <PortItem portName="Зарядье"/>


        </div>
        <div class="trams-shutdown__bottom">
          <a class="uk-button uk-button-default" href="">
            <span>ПОДРОБНОЕ РАСПИСАНИЕ</span>
          </a>
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
    <section class="uk-cover-container trams-colors">
      <img  class="img_cover" data-src="~assets/img/inners/tram4.png" alt="" src="~assets/img/inners/tram4.png">
      <div class="uk-container uk-position-relative">
        <div class="headline_56 uk-text-center">
          Цветовые вариации
        </div>
        <div class="trams-colors__items uk-flex-wrap uk-flex uk-child-width-1-5@s uk-child-width-1-2 uk-grid-match">
          <div>
            <div class="trams-colors__item trams-colors__item_1 uk-position-relative">
              <div class="trams-colors__item__img">
                <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
                <img  data-src="~assets/img/inners2/adv_color1.png" alt="" src="~assets/img/inners2/adv_color1.png">
              </div>
              <div class="trams-colors__item__name">
                Подсолнух
              </div>
            </div>
          </div>
          <div>
            <div class="trams-colors__item trams-colors__item_2 uk-position-relative">
              <div class="trams-colors__item__img">
                <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
                <img  data-src="~assets/img/inners2/adv_color2.png" alt="" src="~assets/img/inners2/adv_color2.png">

              </div>
              <div class="trams-colors__item__name">
                Тюльпан
              </div>
            </div>
          </div>
          <div>
            <div class="trams-colors__item trams-colors__item_3 uk-position-relative">
              <div class="trams-colors__item__img">
                <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
                <img  data-src="~assets/img/inners2/adv_color3.png" alt="" src="~assets/img/inners2/adv_color3.png">
              </div>
              <div class="trams-colors__item__name">
                Фуксия

              </div>
            </div>
          </div>
          <div>
            <div class="trams-colors__item trams-colors__item_4 uk-position-relative">
              <div class="trams-colors__item__img">
                <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
                <img  data-src="~assets/img/inners2/adv_color4.png" alt="" src="~assets/img/inners2/adv_color4.png">
              </div>
              <div class="trams-colors__item__name">
                Астра

              </div>
            </div>
          </div>
          <div>
            <div class="trams-colors__item trams-colors__item_5 uk-position-relative">
              <div class="trams-colors__item__img">
                <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
                <img  data-src="~assets/img/inners2/adv_color5.png" alt="" src="~assets/img/inners2/adv_color5.png">
              </div>
              <div class="trams-colors__item__name">
                Лаванда

              </div>
            </div>
          </div>

          <div>
            <div class="trams-colors__item trams-colors__item_6 uk-position-relative">
              <div class="trams-colors__item__img">
                <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
                <img  data-src="~assets/img/inners2/adv_color6.png" alt="" src="~assets/img/inners2/adv_color6.png">
              </div>
              <div class="trams-colors__item__name">
                Незабудка

              </div>
            </div>
          </div>
          <div>
            <div class="trams-colors__item trams-colors__item_7 uk-position-relative">
              <div class="trams-colors__item__img">
                <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
                <img  data-src="~assets/img/inners2/adv_color7.png" alt="" src="~assets/img/inners2/adv_color7.png">
              </div>
              <div class="trams-colors__item__name">
                Василек

              </div>
            </div>
          </div>
          <div>
            <div class="trams-colors__item trams-colors__item_8 uk-position-relative">
              <div class="trams-colors__item__img">
                <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
                <img  data-src="~assets/img/inners2/adv_color8.png" alt="" src="~assets/img/inners2/adv_color8.png">
              </div>
              <div class="trams-colors__item__name">
                Орхидея

              </div>
            </div>
          </div>
          <div>
            <div class="trams-colors__item trams-colors__item_9 uk-position-relative">
              <div class="trams-colors__item__img">
                <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
                <img  data-src="~assets/img/inners2/adv_color9.png" alt="" src="~assets/img/inners2/adv_color9.png">
              </div>
              <div class="trams-colors__item__name">
                Роза

              </div>
            </div>
          </div>
          <div>
            <div class="trams-colors__item trams-colors__item_10 uk-position-relative">
              <div class="trams-colors__item__img">
                <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
                <img  data-src="~assets/img/inners2/adv_color10.png" alt="" src="~assets/img/inners2/adv_color10.png">
              </div>
              <div class="trams-colors__item__name">
                Гвоздика

              </div>
            </div>
          </div>
          <!--          <div>
                      <ColorItem/>
                    </div>-->
        </div>
      </div>
    </section>
    <section class="uk-cover-container trams-gallery">

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
            <li tabindex="-1" v-for="(slide,index) in slides" :key="'sld' + index">
              <PhotoCard :fileName="slide.fileName"/>
            </li>
          </ul>
          <div class="yacht__slider_navigation">
            <div class="slider_numbers">
              <div class="slider_number">01</div>
              <div class="slider_num_bread">/</div>
              <div class="slider_amount">17</div>
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
import Scheme from "../../components/Scheme";
import Header from "../../components/Header";
import FeaturesItem from "../../components/trolley/FeaturesItem";
import TicketCost from "../../components/trolley/TicketCost";
import Route from "../../components/trolley/Route";
import ColorItem from "../../components/trolley/ColorItem";
import PhotoCard from "../../components/PhotoCard";
import PortItem from "../../components/trolley/PortItem";
import Breadcrumbs from "../../components/Breadcrumbs";
import UIkit from "uikit";
import axios from "axios";
export default {
  name: "index",
  components: {Breadcrumbs, PortItem, PhotoCard, ColorItem, Route, TicketCost, Header, FeaturesItem, Scheme},
  data() {
    return {
      mountains: [
        {
          iconName: '',
          title: ''
        }
      ],
      ticketsInfo: [
        {
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
        },
        {
          title: 'Стоимость разового билета',
          subtitle: 'При покупке на борту трамвайчика',
          online: false,
          variants: [
            {
              time: `Маршрут 2.45 мин`,
              adultPrice: `800 руб.`,
              childPrice: `600 руб.`,
            },
            {
              time: `Маршрут 50 мин`,
              adultPrice: `600 руб.`,
              childPrice: `400 руб.`,
            }
          ],
        }
      ],
      routesInfo: [
        {
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
        },
        {
          fileName: `inners/tram10.png`,
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
        {
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
        },
      ],
      slides: [
        {fileName: `trams/_DSC0064.jpg`},
        {fileName: `trams/_DSC0066.jpg`},
        {fileName: `trams/_DSC0074(1).jpg`},
        {fileName: `trams/_DSC0088.jpg`},
        {fileName: `trams/_DSC0130.jpg`},
        {fileName: `trams/_DSC0146(1).jpg`},
        {fileName: `trams/_DSC0204.jpg`},
        {fileName: `trams/_DSC0247.jpg`},
        {fileName: `trams/_DSC0264(1).jpg`},
        {fileName: `trams/_DSC0276.jpg`},
        {fileName: `trams/_DSC0591.jpg`},
        {fileName: `trams/_DSC4020_2.jpg`},
        {fileName: `trams/DSC00177.jpg`},
        {fileName: `trams/DSC00181.jpg`},
        {fileName: `trams/DSC00187.jpg`},
        {fileName: `trams/DSC00194.jpg`},
        {fileName: `trams/DSC00261.jpg`},
      ],
      features: [],
    }
  },
  async fetch() {
    let features = await axios.get(
        `${this.$config.baseURL}advantages`);
    this.features = features.data
  },
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
.trams__header {
  height: 100vh;
}

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
