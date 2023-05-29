<template>
  <div>
    <Header class="tenancy__header">
      <img src="~images/inners/rent1.webp" data-src="~images/inners/rent1.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ seoData?.header }}
          </h1>
          <div>
            <div class="headline_22" v-html="seoData?.content"></div>
            <!--             <a class="uk-button uk-button-default button_calcalutor" href="#modal-calculation" uk-toggle="target: #modal-calculation">
                          <svg-icon class="icon" name="calculator"/>
                          <span>{{$t('pages.rent.button')}}</span>
                        </a> -->
            <button class="uk-button uk-button-default button_calcalutor" @click="openModal">
              <svg-icon class="icon" name="calculator"/>
              <span>{{ $t('buttons.rent_calc') }}</span>
            </button>
            <div class="tab_nav uk-sticky" uk-sticky="top: 100; animation: uk-animation-slide-top;" id="rent_nav">
              <div class="uk-position-relative uk-visible uk-slider uk-slider-container" uk-slider="">
                <div class="tab_nav_cont">
                  <ul class="uk-slider-items uk-child-width-auto  uk-tab">
                    <li v-for="item in navList" tabindex="-1" class="uk-active">
                      <a :href="'#' + item.id" uk-scroll="">
                        <span>{{ item.title }}</span>
                      </a>
                    </li>
                    <!--                    <li tabindex="-1" class="uk-active">
                                          <a href="#tenancy__about" uk-scroll="">
                                            <span>Описание</span>
                                          </a>
                                        </li>
                                        <li tabindex="-1" class="uk-active">
                                          <a href="#organization" uk-scroll="offset: 80">
                                            <span>Дни рождения  </span>
                                          </a>
                                        </li>
                                        <li tabindex="-1" class="uk-active">
                                          <a href="#dynamics" uk-scroll="offset: 80">
                                            <span>Детские праздники</span>
                                          </a>
                                        </li>
                                        <li tabindex="-1" class="uk-active">
                                          <a href="#about" uk-scroll="offset: 80">
                                            <span>Романтический ужин</span>
                                          </a>
                                        </li>
                                        <li tabindex="-1" class="uk-active">
                                          <a href="#rules" uk-scroll="offset: 80">
                                            <span>Свадьба</span>
                                          </a>
                                        </li>
                                        <li tabindex="-1" class="uk-active">
                                          <a href="#rules" uk-scroll="offset: 80">
                                            <span>Встреча одноклассников</span>
                                          </a>
                                        </li>
                                        <li tabindex="-1" class="">
                                          <a href="#rules" uk-scroll="offset: 80">
                                            <span>Корпоративы</span>
                                          </a>
                                        </li>
                                        <li tabindex="-1" class="">
                                          <a href="#rules" uk-scroll="offset: 80">
                                            <span>Конференции</span>
                                          </a>
                                        </li>
                                        <li tabindex="-1">
                                          <a href="#rules" uk-scroll="offset: 80">
                                            <span> Бизнес семинары </span>
                                          </a>
                                        </li>
                                        <li tabindex="-1">
                                          <a href="#rules" uk-scroll="offset: 80">
                                            <span> Новый год</span>
                                          </a>
                                        </li>-->
                  </ul>
                </div>
                <div class="tab_nav-arrows">
                  <a class="" href="#" uk-slider-item="previous">
                    <svg-icon class="icon" name="arr_lang"/>
                  </a>
                  <a class="" href="#" uk-slider-item="next">
                    <svg-icon class="icon" name="arr_lang"/>
                  </a>
                </div>
              </div>
              <div class="tab_nav_mobile uk-hidden">
                <ul class="uk-nav uk-nav-parent-icon" uk-nav="">
                  <li class="uk-parent">
                    <a href="#">
                      <span>ВЫБРАТЬ</span>
                    </a>
                    <ul class="uk-nav-sub" hidden="">
                      <li>
                        <a href="#tenancy__about" uk-scroll="">
                          <span>Описание</span>
                        </a>
                      </li>
                      <li>
                        <a href="#organization" uk-scroll="offset: 80">
                          <span>Дни рождения  </span>
                        </a>
                      </li>
                      <li>
                        <a href="#dynamics" uk-scroll="offset: 80">
                          <span>Детские праздники</span>
                        </a>
                      </li>
                      <li>
                        <a href="#about" uk-scroll="offset: 80">
                          <span>Романтический ужин</span>
                        </a>
                      </li>
                      <li>
                        <a href="#rules" uk-scroll="offset: 80">
                          <span>Свадьба</span>
                        </a>
                      </li>
                      <li>
                        <a href="#rules" uk-scroll="offset: 80">
                          <span>Встреча одноклассников</span>
                        </a>
                      </li>
                      <li>
                        <a href="#rules" uk-scroll="offset: 80">
                          <span>Корпоративы</span>
                        </a>
                      </li>
                      <li>
                        <a href="#rules" uk-scroll="offset: 80">
                          <span>Конференции</span>
                        </a>
                      </li>
                      <li>
                        <a href="#rules" uk-scroll="offset: 80">
                          <span> Бизнес семинары </span>
                        </a>
                      </li>
                      <li>
                        <a href="#rules" uk-scroll="offset: 80">
                          <span> Новый год</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
    <section id="tenancy__about" class="tenancy__about uk-flex uk-flex-wrap uk-child-width-1-2@m">
      <div class="tenancy__about__info uk-position-relative">
        <svg-icon class="icon" name="compass2"/>
        <div class="uk-position-relative">
          <div class="headline_22">
            Флотилия «Рэдиссон Ройал» предлагает к вашим услугам
            10 речных яхт ледового класса с ресторанным сервисом
            наборту с различными классами комфортабельности
            и вместимости 365 дней в году.
          </div>
          <div class="headline_line"></div>
          <div class="tenancy__about_txt">
            Флотилия «Рэдиссон Ройал» рада предложить своим клиентам и партнерам
            услугу –аренду яхты для проведения свадеб, банкетов, праздничных мероприятий,
            пресс-конференций и корпоративных событий. Оригинальный формат – белоснежная
            яхта, которая проплывает мимо главных достопримечательностей столицы, - позволит
            сделать любое мероприятие запоминающимся.
          </div>
          <div class="tenancy__about_important">
            <svg-icon class="icon" name="dishes2"/>
            <span>
              <b>
                Команда профессиональной банкетной службы обслужат
                присутствующих на палубе гостей, порадовав их вежливым
                и внимательным отношением.
              </b>
            </span>
          </div>
        </div>
      </div>
      <div class="uk-cover-container tenancy__about__img">
        <img data-src="~assets/img/inners/rent2.png" alt="" class="img_cover" src="~assets/img/inners/rent2.png">
      </div>
    </section>
    <section id="tenancy-advantages" class="tenancy-advantages uk-cover-container">
      <svg-icon class="awards_decor1" name="decor4"/>
      <div class="uk-container uk-position-relative">
        <h2 class="headline_56">
          {{ $t('features') }}
        </h2>
        <div uk-slider="" class="tenancy-advantages__slider uk-slider">
          <div class="uk-position-relative">
            <div class="uk-slider-container slider_width150">
              <ul class="uk-slider-items  uk-grid-match">
                <!--                <li tabindex="-1" class="uk-active">
                                  <div class="uk-position-relative tenancy-advantages__item">
                                    <div class="tenancy-advantages__item__img uk-cover-container">
                                      <img  data-src="~assets/img/advantages/adv1.png" alt="" class="img_cover" src="~assets/img/advantages/adv1.png">
                                    </div>
                                    <div class="tenancy-advantages__item__info" uk-slider-parallax="x: 400,-400">
                                      <div class="headline_22">
                                        Конкурентоспособность
                                      </div>
                                      <div class="headline_line"></div>
                                      <div class="tenancy-advantages__item__p1">
                                        Белоснежные яхты ледового класса – единственные
                                        в Москве не прекращают своей навигации даже зимой.
                                        Проведение любых мероприятий 365 дней в году.
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li tabindex="-1" class="">
                                  <div class="uk-position-relative tenancy-advantages__item">
                                    <div class="tenancy-advantages__item__img uk-cover-container">
                                      <img  data-src="~assets/img/advantages/adv2.png" alt="" class="img_cover" src="~assets/img/advantages/adv2.png">
                                    </div>
                                    <div class="tenancy-advantages__item__info" uk-slider-parallax="x: 400,-400">
                                      <div class="headline_22">
                                        Удобство и комфорт
                                      </div>
                                      <div class="headline_line"></div>
                                      <div class="tenancy-advantages__item__p1">
                                        Вместительность в залах до 300 гостей. Салон первого
                                        класса с отдельным обеспечением и открытые палубы.
                                        Бесплатный wi-fi.
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li tabindex="-1">
                                  <div class="uk-position-relative tenancy-advantages__item">
                                    <div class="tenancy-advantages__item__img uk-cover-container">
                                      <img  data-src="~assets/img/advantages/adv3.png" alt="" class="img_cover" src="~assets/img/advantages/adv3.png">
                                    </div>
                                    <div class="tenancy-advantages__item__info" uk-slider-parallax="x: 400,-400" style="transform: translateX(400px);">
                                      <div class="headline_22">
                                        Красота
                                      </div>
                                      <div class="headline_line"></div>
                                      <div class="tenancy-advantages__item__p1">
                                        Современный дизайн. Салоны с панорамным остеклением.
                                        Незабываемые виды исторической Москвы 365 дней в году.
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li tabindex="-1">
                                  <div class="uk-position-relative tenancy-advantages__item">
                                    <div class="tenancy-advantages__item__img uk-cover-container">
                                      <img  data-src="~assets/img/advantages/adv4.png" alt="" class="img_cover" src="~assets/img/advantages/adv4.png">
                                    </div>
                                    <div class="tenancy-advantages__item__info" uk-slider-parallax="x: 400,-400" style="transform: translateX(400px);">
                                      <div class="headline_22">
                                        Современность
                                      </div>
                                      <div class="headline_line"></div>
                                      <div class="tenancy-advantages__item__p1">
                                        Яхты нового поколения. Оснащение и дизай
                                        соответствуют современным требованиям.
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li tabindex="-1">
                                  <div class="uk-position-relative tenancy-advantages__item">
                                    <div class="tenancy-advantages__item__img uk-cover-container">
                                      <img  data-src="~assets/img/advantages/adv5.png" alt="" class="img_cover" src="~assets/img/advantages/adv5.png">
                                    </div>
                                    <div class="tenancy-advantages__item__info" uk-slider-parallax="x: 400,-400" style="transform: translateX(400px);">
                                      <div class="headline_22">
                                        Ресторанный сервис
                                      </div>
                                      <div class="headline_line"></div>
                                      <div class="tenancy-advantages__item__p1">
                                        <p>
                                          Рыбный ресторан в линейке яхт флотиили «Рэдиссон»
                                          под руководством Александра  Раппопорта «ERWIN. Река».
                                        </p>
                                          Обширная карта бара, тематические недели и сезонный
                                          ассортимент в ресторанах флотилий.
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li tabindex="-1">
                                  <div class="uk-position-relative tenancy-advantages__item">
                                    <div class="tenancy-advantages__item__img uk-cover-container">
                                      <img  data-src="~assets/img/advantages/adv6.png" alt="" class="img_cover" src="~assets/img/advantages/adv6.png">
                                    </div>
                                    <div class="tenancy-advantages__item__info" uk-slider-parallax="x: 400,-400" style="transform: translateX(400px);">
                                      <div class="headline_22">
                                        Банкетная служба
                                      </div>
                                      <div class="headline_line"></div>
                                      <div class="tenancy-advantages__item__p1">
                                        Профессионалы высокой квалификации обслужат
                                        присутствующих на палубе гостей, порадовав их вежливым
                                        и внимательным отношением. Разнообразное меню,
                                        огромный выбор блюд европейской кухни великолепного
                                        исполнения от виртуозных шеф-поваров флотилии.
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li tabindex="-1">
                                  <div class="uk-position-relative tenancy-advantages__item">
                                    <div class="tenancy-advantages__item__img uk-cover-container">
                                      <img  data-src="~assets/img/advantages/adv7.png" alt="" class="img_cover" src="~assets/img/advantages/adv7.png">
                                    </div>
                                    <div class="tenancy-advantages__item__info" uk-slider-parallax="x: 400,-400" style="transform: translateX(400px);">
                                      <div class="headline_22">
                                        Оборудование под мероприятия
                                      </div>
                                      <div class="headline_line"></div>
                                      <div class="tenancy-advantages__item__p1">
                                        У нас есть необходимое для вашего мероприятия:
                                        профессиональная мультимедиа, клубная подсветка
                                        и караоке, плазменные панели.
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li tabindex="-1">
                                  <div class="uk-position-relative tenancy-advantages__item">
                                    <div class="tenancy-advantages__item__img uk-cover-container">
                                      <img  data-src="~assets/img/advantages/adv8.png" alt="" class="img_cover" src="~assets/img/advantages/adv8.png">
                                    </div>
                                    <div class="tenancy-advantages__item__info" uk-slider-parallax="x: 400,-400" style="transform: translateX(400px);">
                                      <div class="headline_22">
                                        Безопасность
                                      </div>
                                      <div class="headline_line"></div>
                                      <div class="tenancy-advantages__item__p1">
                                        Яхты соответствуют высшему классу безопасности
                                        и оснащены системой оповещения, плотами,
                                        индивидуальными спасательными средствами.
                                        Причалы флотилии приспособлены для лиц
                                        с ограниченными возможностями.
                                      </div>
                                    </div>
                                  </div>
                                </li>-->
                <!--                <li tabindex="-1" v-for="(slide,index) in rentSlides" :key="`rnt` + index">
                                  <RentSliderItem :title="slide.title" :description="slide.description" :fileName="slide.fileName"/>
                                </li>-->
                <li class="uk-active" tabindex="-1" v-for="(slide,index) in rentSlidersTest" :key="`rnt` + index">
                  <RentSliderItem :title="slide.name" :description="slide.content" :fileName="slide.image"/>
                </li>
              </ul>
            </div>
            <div class="slider_numbers">
              <div class="slider_number">1</div>
              <div class="slider_num_bread">/</div>
              <div class="slider_amount">{{ rentSlidersTest?.length }}</div>
            </div>
            <div class="slider_arrows slider_arrows-blue">
              <a class="uk-position-center-left-out" href="#" uk-slider-item="previous">
                <svg-icon class="icon" name="arr_lang"/>
              </a>
              <a class="uk-position-center-right-out" href="#" uk-slider-item="next">
                <svg-icon class="icon" name="arr_lang"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="tenancy-seating" class="uk-cover-container tenancy-seating">
      <img data-src="~assets/img/inners/rent5.png" alt="" class="img_cover" src="~assets/img/inners/rent5.png">
      <div class="uk-container uk-position-relative">
        <h2 class="headline_56">
          {{ $t('sits_table') }}
        </h2>
        <div class="tenancy-seating__grid uk-flex uk-flex-wrap uk-child-width-1-2@m uk-grid-match">
          <!--          <div>
                      <div class="tenancy-seating__item">
                        <div class="headline_22 t_semibold text-upper">
                          Яхты
                        </div>
                        <div class="tenancy-seating__names">
                          «Фердинанд», «Капелла», «Бон Вояж», «Селебрити», «Скарлет»
                        </div>
                        <div class="tenancy-seating__types">
                          <div class="tenancy-seating__type tenancy-seating__type_one">
                            <div class="tenancy-seating__type__icon">
                              <svg-icon class="icon" name="blue-dots"/>
                            </div>
                            <div class="tenancy-seating__type__info">
                              <div class="tenancy-seating__type__p1">
                                Театр
                              </div>
                              <div class="tenancy-seating__type__p2">
                                100 чел.
                              </div>
                            </div>
                          </div>
                          <div class="tenancy-seating__type tenancy-seating__type_second">
                            <div class="tenancy-seating__type__icon">
                              <svg-icon class="icon" name="blue-dots2"/>
                            </div>
                            <div class="tenancy-seating__type__info">
                              <div class="tenancy-seating__type__p1">
                                Класс
                              </div>
                              <div class="tenancy-seating__type__p2">
                                100 чел.
                              </div>
                            </div>
                          </div>
                          <div class="tenancy-seating__type tenancy-seating__type_third">
                            <div class="tenancy-seating__type__icon">
                              <svg-icon class="icon" name="blue-dots3"/>
                            </div>
                            <div class="tenancy-seating__type__info">
                              <div class="tenancy-seating__type__p1">
                                Банект
                              </div>
                              <div class="tenancy-seating__type__p2">
                                110-140 чел.*
                              </div>
                            </div>
                          </div>
                          <div class="tenancy-seating__type tenancy-seating__type_fourth">
                            <div class="tenancy-seating__type__icon">
                              <svg-icon class="icon" name="blue-dots4"/>
                            </div>
                            <div class="tenancy-seating__type__info">
                              <div class="tenancy-seating__type__p1">
                                U-образная
                              </div>
                              <div class="tenancy-seating__type__p2">
                                92 чел.
                              </div>
                            </div>
                          </div>
                          <div class="tenancy-seating__type tenancy-seating__type_forties">
                            <div class="tenancy-seating__type__icon">
                              <svg-icon class="icon" name="cocktail"/>
                            </div>
                            <div class="tenancy-seating__type__info">
                              <div class="tenancy-seating__type__p1">
                                Коктейль
                              </div>
                              <div class="tenancy-seating__type__p2">
                                200 чел.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="tenancy-seating__item">
                        <div class="headline_22 t_semibold text-upper">
                          Суперъяхты
                        </div>
                        <div class="tenancy-seating__names">
                          «Примавера», «Баттерфляй», «Бьюти», «Феличита», «Монтана»
                        </div>
                        <div class="tenancy-seating__types">
                          <div class="tenancy-seating__type tenancy-seating__type_one">
                            <div class="tenancy-seating__type__icon">
                              <svg-icon class="icon" name="blue-dots"/>
                            </div>
                            <div class="tenancy-seating__type__info">
                              <div class="tenancy-seating__type__p1">
                                Театр
                              </div>
                              <div class="tenancy-seating__type__p2">
                                120 чел.
                              </div>
                            </div>
                          </div>
                          <div class="tenancy-seating__type tenancy-seating__type_second">
                            <div class="tenancy-seating__type__icon">
                              <svg-icon class="icon" name="blue-dots2"/>
                            </div>
                            <div class="tenancy-seating__type__info">
                              <div class="tenancy-seating__type__p1">
                                Класс
                              </div>
                              <div class="tenancy-seating__type__p2">
                                120 чел.
                              </div>
                            </div>
                          </div>
                          <div class="tenancy-seating__type tenancy-seating__type_third">
                            <div class="tenancy-seating__type__icon">
                              <svg-icon class="icon" name="blue-dots3"/>
                            </div>
                            <div class="tenancy-seating__type__info">
                              <div class="tenancy-seating__type__p1">
                                Банект
                              </div>
                              <div class="tenancy-seating__type__p2">
                                150-200 чел.*
                              </div>
                            </div>
                          </div>
                          <div class="tenancy-seating__type tenancy-seating__type_fourth">
                            <div class="tenancy-seating__type__icon">
                              <svg-icon class="icon" name="blue-dots4"/>
                            </div>
                            <div class="tenancy-seating__type__info">
                              <div class="tenancy-seating__type__p1">
                                U-образная
                              </div>
                              <div class="tenancy-seating__type__p2">
                                120 чел.
                              </div>
                            </div>
                          </div>
                          <div class="tenancy-seating__type tenancy-seating__type_forties">
                            <div class="tenancy-seating__type__icon">
                              <svg-icon class="icon" name="cocktail"/>
                            </div>
                            <div class="tenancy-seating__type__info">
                              <div class="tenancy-seating__type__p1">
                                Коктейль
                              </div>
                              <div class="tenancy-seating__type__p2">
                                300 чел.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>-->
          <div v-for="(table, index) in classBlocks" :key="'table' + index">
            <SitsTableItem :yachtType="table.name" :yachtList="table.yachts"
                           :theatreCount="table.seat_theatre"
                           :classCount="table.seat_school"
                           :BanketCount="table.seat_banquet"
                           :uTableCount="table.seat_ushape"
                           :cocktailCount="table.seat_cocktail"
            />
          </div>
        </div>
        <div class="tenancy-seating__bottom uk-text-center">
          * в зависимости от столов (круглые или квадратные)
        </div>
      </div>
    </section>
    <div id="events" class="uk-flex uk-flex-wrap uk-grid-match"
         uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 400">
      <Event v-for="(event, index) in rentBlocks" :key="'evnt' + index"
             :title="event.name"
             :fileName="event.image"
             @select-title="selectTitle(event)"
      />
    </div>
    <section id="tenancy-managment" class="uk-cover-container tenancy-managment">
      <img data-src="~assets/img/inners/rent17.png" alt="" class="img_cover" src="~assets/img/inners/rent17.png">
      <div class="uk-container uk-position-relative">
        <div class="tenancy-managment__grid">
          <div class="tenancy-managment__headline uk-position-relative">
            <svg-icon class="tenancy-managment__headline__icon" name="wheel"/>
            <div class="uk-position-relative">
              <div class="tenancy-managment__headline__p1">
                ПРЕДОСТАВЛЯЕМЫЕ УСУГИ
              </div>
              <h2 class="headline_56">
                Организация<br>
                и оформления<br>
                мероприятия
              </h2>
              <button type="button" class="uk-button uk-button-default button_calcalutor" @click="openModal">
                <svg-icon class="icon" name="calculator"/>
                <span>{{ $t('buttons.rent_calc') }}</span>
              </button>
            </div>
          </div>
          <div class="tenancy-managment__info">
            <div class="headline_line"></div>
            <div class="headline_22 t_semibold">
              Мы поможем разработать уникальную концепцию
              мероприятия и сделать Ваш праздник неповторим
            </div>
            <div class="tenancy-managment__list">
              <div class="tenancy-managment__list__item">
                <svg-icon class="icon" name="svg-check"/>
                <span>
                  Диджеи, ведущие, живая музыка, по запросу -выступление
                    звезд российской  и западной эстрады
                </span>
              </div>
              <div class="tenancy-managment__list__item">
                <svg-icon class="icon" name="svg-check"/>
                <span>
                Фото и видео съемка
              </span>
              </div>
              <div class="tenancy-managment__list__item">
                <svg-icon class="icon" name="svg-check"/>
                <span>
                Караоке, проекторы, плазмы
              </span>
              </div>
              <div class="tenancy-managment__list__item">
                <svg-icon class="icon" name="svg-check"/>
                <span>
                Услуги оформителя и флориста
              </span>
              </div>
              <div class="tenancy-managment__list__item">
                <svg-icon class="icon" name="svg-check"/>
                <span>
                Музыкальное сопровождение: салонный или концертный
                джаз; классические дуэты и оркестр; инструментальные
                коллективы на время аперитива или сбора гостей; DJ-сеты;
              </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="tenancy-restaurant" class="uk-cover-container tenancy-restaurant">
      <div class="uk-container uk-position-relative">
        <div class="tenancy-restaurant__headline uk-position-relative">
          <svg-icon class="tenancy-restaurant__headline__icon" name="big-fish"/>
          <div class="uk-position-relative">
            <div class="tenancy-restaurant__headline__p1">
              ПРЕДОСТАВЛЯЕМЫЕ УСУГИ
            </div>
            <h2 class="headline_56">
              Ресторанный<br>
              сервис
            </h2>
            <div class="tenancy-restaurant__headline__p2">
              Гастрономическое удовольствие от кулинарных виртуозов Флотилии
              «Рэдиссон Ройал» во главе с шеф – поварами.
            </div>
            <button type="button" class="uk-button uk-button-default button_calcalutor" @click="openModal">
              <svg-icon class="icon" name="calculator"/>
              <span>{{ $t('buttons.rent_calc') }}</span>
            </button>
          </div>
        </div>
      </div>
      <div class="tenancy-restaurant__images" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 400">
        <div class="uk-cover-container uk-scrollspy-inview uk-animation-fade" style="">
          <img class="img_cover" data-src="~assets/img/inners/rent18.png" alt="" src="~assets/img/inners/rent18.png">
        </div>
        <div class="uk-cover-container uk-scrollspy-inview uk-animation-fade" style="">
          <img class="img_cover" data-src="~assets/img/inners/rent19.png" alt="" src="~assets/img/inners/rent19.png">
        </div>
        <div class="uk-cover-container uk-scrollspy-inview uk-animation-fade" style="">
          <img class="img_cover" data-src="~assets/img/inners/rent20.png" alt="" src="~assets/img/inners/rent20.png">
        </div>
        <div class="uk-cover-container uk-scrollspy-inview uk-animation-fade" style="">
          <img class="img_cover" data-src="~assets/img/inners/rent21.png" alt="" src="~assets/img/inners/rent21.png">
        </div>
      </div>
    </section>
    <ModalTenancy :event="selectedEvent"/>
    <!-- <ModalCalculation/> -->
    <ModalCalculationSimple/>
  </div>
</template>

<script>
import Header from "../components/Header";
import RentSliderItem from "../components/rent/RentSliderItem";
import Event from "../components/rent/Event";
import EquipmentItem from "../components/rent/EquipmentItem";
import UIkit from "uikit";
import axios from "axios";
import SitsTableItem from "../components/rent/SitsTableItem";
//import ModalCalculation from "../components/modals/Calculation";
import ModalCalculationSimple from "../components/modals/CalculationSimple";
import ModalTenancy from "../components/modals/Tenancy";
import Breadcrumbs from "../components/Breadcrumbs";

export default {
  name: "Rent",
  components: {
    Breadcrumbs,
    ModalTenancy,
    ModalCalculationSimple,
    SitsTableItem,
    EquipmentItem,
    Event,
    RentSliderItem,
    Header
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
      ]
    }
  },
  data() {
    return {
      selectedEvent: {},
      equipmentInfo: [
        {
          name: `Свет над танцевальной площадкой`,
          textInfo: [
            {
              headText: `ROBE ClubScan 250 / 4 шт.`,
              text: `Сканирующий прожектор (сканер) на газоразрядной лампе 250/2,
             цвет К1 - 15+ открытый, ротогобо 9 + открытый, ручной фокус,
             стробо 1-10 в/сек, угол 19 град, DMX-512`,
            },
            {
              headText: `SILVER STAR YG-LED307 miniPAR 2040 Lux/2m/15° / 12 шт.`,
              text: `Светодиодный прожектор, 18LED, RGB смешение цветов,
             6R+ 6G + 6B х 1Вт Luxeon LED диодов, опциональная оптика 10°/15°/30°,
             управление DMX-512 - 3/4/9 каналов, ID адресация, авто режим`,
            },
          ],
        },
        {
          name: `Распределенная система озвучки ресторанной зоны`,
          textInfo: [
            {
              headText: `ROBE ClubScan 250 / 4 шт.`,
              text: `Сканирующий прожектор (сканер) на газоразрядной лампе 250/2,
             цвет К1 - 15+ открытый, ротогобо 9 + открытый, ручной фокус,
             стробо 1-10 в/сек, угол 19 град, DMX-512`,
            },
            {
              headText: `SILVER STAR YG-LED307 miniPAR 2040 Lux/2m/15° / 12 шт.`,
              text: `Светодиодный прожектор, 18LED, RGB смешение цветов,
             6R+ 6G + 6B х 1Вт Luxeon LED диодов, опциональная оптика 10°/15°/30°,
             управление DMX-512 - 3/4/9 каналов, ID адресация, авто режим`,
            },
          ],
        },
        {
          name: `Видео оборудование`,
          textInfo: [
            {
              headText: `ROBE ClubScan 250 / 4 шт.`,
              text: `Сканирующий прожектор (сканер) на газоразрядной лампе 250/2,
             цвет К1 - 15+ открытый, ротогобо 9 + открытый, ручной фокус,
             стробо 1-10 в/сек, угол 19 град, DMX-512`,
            },
            {
              headText: `SILVER STAR YG-LED307 miniPAR 2040 Lux/2m/15° / 12 шт.`,
              text: `Светодиодный прожектор, 18LED, RGB смешение цветов,
             6R+ 6G + 6B х 1Вт Luxeon LED диодов, опциональная оптика 10°/15°/30°,
             управление DMX-512 - 3/4/9 каналов, ID адресация, авто режим`,
            },
          ],
        }
      ],
      rentSlides: [
        {
          fileName: `advantages/adv1.png`,
          title: `Конкурентоспособность`,
          description: `Белоснежные яхты ледового класса – единственные
                      в Москве не прекращают своей навигации даже зимой.
                      Проведение любых мероприятий 365 дней в году.`,
        },
        {
          fileName: `advantages/adv2.png`,
          title: `Удобство и комфорт`,
          description: `Вместительность в залах до 300 гостей. Салон первого
                        класса с отдельным обеспечением и открытые палубы.
                        Бесплатный wi-fi.`,
        },
        {
          fileName: `advantages/adv3.png`,
          title: `Красота`,
          description: `Современный дизайн. Салоны с панорамным остеклением.
                        Незабываемые виды исторической Москвы 365 дней в году.`,
        },
        {
          fileName: `advantages/adv4.png`,
          title: ` Современность`,
          description: `Яхты нового поколения. Оснащение и дизай
                        соответствуют современным требованиям.`,
        },
        {
          fileName: `advantages/adv5.png`,
          title: `Ресторанный сервис`,
          description: ` Рыбный ресторан в линейке яхт флотиили «Рэдиссон»
                          под руководством Александра  Раппопорта «ERWIN. Река».
                          Обширная карта бара, тематические недели и сезонный
                          ассортимент в ресторанах флотилий.`,
        },
        {
          fileName: `advantages/adv6.png`,
          title: `Банкетная служба`,
          description: `Профессионалы высокой квалификации обслужат
                        присутствующих на палубе гостей, порадовав их вежливым
                        и внимательным отношением. Разнообразное меню,
                        огромный выбор блюд европейской кухни великолепного
                        исполнения от виртуозных шеф-поваров флотилии.`,
        },
        {
          fileName: `advantages/adv7.png`,
          title: `Оборудование под мероприятия`,
          description: `У нас есть необходимое для вашего мероприятия:
                        профессиональная мультимедиа, клубная подсветка
                        и караоке, плазменные панели.`,
        },
        {
          fileName: `advantages/adv8.png`,
          title: ` Безопасность`,
          description: `Яхты соответствуют высшему классу безопасности
                        и оснащены системой оповещения, плотами,
                        индивидуальными спасательными средствами.
                        Причалы флотилии приспособлены для лиц
                        с ограниченными возможностями.`,
        },
      ],
      events: [
        {
          title: `Банкет`,
          fileName: `inners/rent7.png`,
          bottoms: false,
          sliders: [],
          text: '',
        },
        {
          title: `Фуршеты`,
          fileName: `inners/rent8.png`,
          bottoms: false,
        },
        {
          title: `Дни рождения`,
          fileName: `inners/rent9.png`,
          bottoms: false,
        },
        {
          title: `Детские праздники`,
          fileName: `inners/rent10.png`,
          bottoms: false,
        },
        {
          title: `Романтический ужин`,
          fileName: `inners/rent11.png`,
          bottoms: false,
        },
        {
          title: `Свадьба`,
          fileName: `inners/rent12.png`,
          bottoms: false,
        },
        {
          title: `Встреча одноклассников`,
          fileName: `inners/rent13.png`,
          bottoms: false,
        },
        {
          title: `Корпоративы`,
          fileName: `inners/rent-1.png`,
          bottoms: false,
        },
        {
          title: `Конференции`,
          fileName: `inners/rent14.png`,
          bottoms: false,
        },
        {
          title: `Бизнес Семинары`,
          fileName: `inners/rent15.png`,
          bottoms: true,
        },
        {
          title: `Новый год`,
          fileName: `inners/rent16.png`,
          bottoms: true,
        }
      ],
      rentSlidersTest: [],
      rentBlocks: [],
      tablesSits: [
        {
          yachtType: `Яхты`,
          yachtList: `«Фердинанд», «Капелла», «Бон Вояж», «Селебрити», «Скарлет»`,
          theatreCount: 100,
          classCount: 100,
          BanketCount: `110-140`,
          uTableCount: 92,
          cocktailCount: 200,

        },
        {
          yachtType: `Суперяхты`,
          yachtList: `«Примавера», «Баттерфляй», «Бьюти», «Феличита», «Монтана»`,
          theatreCount: 120,
          classCount: 120,
          BanketCount: `150-200`,
          uTableCount: 120,
          cocktailCount: 300,
        },

      ],
      classBlocks: [],
      navList: [
        {
          id: 'tenancy__about',
          title: 'Описание'
        },
        {
          id: 'tenancy-advantages',
          title: 'Наши преимущества'
        },
        {
          id: 'tenancy-seating',
          title: 'Таблица рассадки яхт и суперъяхт'
        },
        {
          id: 'events',
          title: 'Предоставляемые мероприятия и услуги'
        },
        {
          id: 'tenancy-managment',
          title: 'Организация и оформление мероприятий'
        },
        {
          id: 'tenancy-restaurant',
          title: 'Ресторанный сервис'
        },
      ],
      seoData: {},
    }
  },
  methods: {
    selectTitle(title) {
      this.selectedEvent = title
    },
    openModal() {
      //console.log('openModal');
      UIkit.modal('#modal-calculation').show();
    },
    closeModal() {
      //console.log('closeModal');
      //UIkit.modal('#modal-calculation').hide();
    },
  },
  mounted() {
    UIkit.util.on('.tenancy-advantages__slider', 'itemshown', function (e) {
      // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
      let numbWrapper = document.querySelector('.tenancy-advantages__slider');
      numbWrapper.querySelector(`.slider_number`).textContent = (e.detail[0].index + 1);
    });
    UIkit.util.on('.yacht__slider', 'itemshown', function (e) {
      // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
      let numbWrapper = document.querySelector('.yacht__slider');
      numbWrapper.querySelector(`.slider_number`).textContent = (e.detail[0].index + 1);
    });
  },
  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/rent/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let slides = await axios.get(`${this.$config.baseURL}radvantages?lang=${this.$i18n.locale}`)
    let rentBlocks = await axios.get(`${this.$config.baseURL}rents?lang=${this.$i18n.locale}`)
    this.rentSlidersTest = slides.data.radvantages
    this.rentBlocks = rentBlocks.data.rents;
    this.classBlocks = rentBlocks.data.classes;
  },
  fetchOnServer: true,
  fetchKey: 'rent',
}
</script>

<style scoped>
.tenancy__header {
  /*height: 100vh;*/
}

.slider_arrows-blue a {
  background: #00c1f3;
}

.slider_arrows-blue a:hover {
  background: #1d2240;
  border-color: #1d2240;
}

/*.tenancy-equipment {
  background-color: blue;
  background-image: url("~assets/img/inners/rent22.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}*/

#modal-tenancy {
  display: none;
}
</style>
