<template>
  <div>
    <Header about-page>
      <img src="~images/inners2/about1.webp" data-src="~images/inners2/about1.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ seoData?.header || 'О компании' }}
          </h1>
        </div>
      </div>
    </Header>
    <section v-if="mainBlock" class="about-main__section uk-cover-container">
      <div class="about-main__images" v-if="mainBlock.images">
        <img :data-src="`${$config.imageURL}?size=1060&format=webp&src=${$config.baseSiteURL}` + mainBlock?.images[0]"
             class="img_cover" alt=""
             :src="`${$config.imageURL}?size=1060&format=webp&src=${$config.baseSiteURL}` + mainBlock?.images[0]">
        <!-- <svg class="about-main__logo uk-hidden@l">
          <use xlink:href="#logo"></use>
        </svg> -->
      </div>

      <div class="uk-container uk-position-relative">
        <!-- <svg class="about-main__logo uk-visible@l">
          <use xlink:href="#logo"></use>
        </svg> -->
        <div class="about-main__block">
          <svg-icon class="about-main__block__svg" :name="mainBlockIcon"/>
          <div class="uk-position-relative">
            <div class="headline_22 t_semibold">
              {{ mainBlock.name }}
            </div>
            <div class="headline_line"></div>
            <div class="about-main__p1" v-html="mainBlock.content">
            </div>
            <BuyTicketBtn :link="mainBlockLink" />
          </div>
        </div>
      </div>
    </section>
    <div class="about__nav" id="about_tab">
      <div class="uk-container">
        <div class="tab_nav uk-sticky" uk-sticky="top: 100; animation: uk-animation-slide-top;">
          <div class="uk-position-relative uk-visible uk-slider uk-slider-container" uk-slider>
            <div class="tab_nav_cont">
              <ul class="uk-slider-items uk-child-width-auto  uk-tab">
                <li tabindex="-1" class="">
                  <a href="#sroll-about" uk-scroll>
                    <span>
                      {{ $t('nav.about') }}
                    </span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#cap" uk-scroll="offset: 75">
                    <span>{{ $t('company_people') }}</span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#video" uk-scroll="offset: 75">
                    <span>{{ $t('video') }}</span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#rewards" uk-scroll="offset: 75">
                    <span>{{ $t('rewards') }}</span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#job" uk-scroll="offset: 75">
                    <span>{{ $t('vacancies') }}</span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#document" uk-scroll="offset: 75">
                    <span>{{ $t('documents') }}</span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#partners" uk-scroll="offset: 75">
                    <span>{{ $t('partners') }}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tab_nav-arrows">
              <a class="uk-invisible" href="#" uk-slider-item="previous">
                <svg-icon class="icon" name="arr_lang"/>
              </a>
              <a class="" href="#" uk-slider-item="next">
                <svg-icon class="icon" name="arr_lang"/>
              </a>
            </div>
          </div>
          <div class="tab_nav_mobile  uk-hidden">
            <ul class="uk-nav uk-nav-parent-icon" uk-nav="">
              <li class="uk-parent">
                <a href="about.html">
                  <span>ВЫБРАТЬ</span>
                </a>
                <ul class="uk-nav-sub" hidden="">
                  <li>
                    <a href="#invest" uk-scroll="">
                      <span>Фуршеты</span>
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
        <div class="uk-sticky-placeholder" style="height: 76px; margin: 0px;" hidden=""></div>
      </div>
    </div>
    <div class="about__history" id="sroll-about">
      <!--      <div class="flight">
              <div class="trams__route__img uk-cover-container">
                <img  class="img_cover" data-src="/img/inners2/about4.png" alt="" src="~assets/img/inners2/about4.png">
              </div>
              <div class="flight__info">
                <svg-icon class="flight__info__icon" name="big-ancor"/>
                <div class="uk-position-relative">
                  <div class="headline_line"></div>
                  <div class="headline_22 t_semibold">
                    10 речных яхт ледового класса

                  </div>
                  <div class="flight__txt">
                    В составе Флотилии 10 речных яхт ледового класса с ресторанным сервисом на борту. Ежедневно и круглый год яхты совершают экскурсионно-развлекательные рейсы по Москве-реке, позволяя за 2,5 часа увидеть главные достопримечательности города. К услугам гостей представлены Основной зал, Первый класс, рыбный ресторан «Erwin. Река» и Ройал класс – для всех, кто умеет отдыхать.
                  </div>
                </div>
              </div>
            </div>

            <div class="flight">
              <div class="flight__info">
                <svg-icon class="instagram_decor1 uk-visible@m" name="decor4"/>
                <svg-icon class="flight__info__icon" name="wheel"/>
                <div class="uk-position-relative">
                  <div class="headline_line"></div>
                  <div class="headline_22 t_semibold">
                    Открой свою Москву с Флотилией «Рэдиссон Ройал»
                  </div>
                  <div class="flight__txt">
                    Флотилия «Рэдиссон Ройал» предлагает жителям и гостям столицы весь спектр услуг и впечатлений на Москве-реке - от экскурсионных прогулок на речных кабриолетах, до театральных круизов и организации крупных частных мероприятий на борту белоснежной яхты!
                  </div>
                </div>
              </div>
              <div class="trams__route__img uk-cover-container">
                <img  class="img_cover" data-src="~assets/img/inners2/about3.png" alt="" src="~assets/img/inners2/about3.png">
              </div>
            </div>

            <div class="flight">
              <div class="trams__route__img uk-cover-container">
                <img  class="img_cover" data-src="~assets/img/inners2/about5.png" alt="" src="~assets/img/inners2/about5.png">
              </div>
              <div class="flight__info">
                <svg-icon class="flight__info__icon" name="compass2"/>
                <div class="uk-position-relative">
                  <div class="headline_line"></div>
                  <div class="headline_22 t_semibold">
                    Круизы по Москве-реке 365 дней в году
                  </div>
                  <div class="flight__txt">
                    Уникальность Флотилии — круглогодичная навигация. Когда русская зима сковывает льдом воды Москвы-реки, за дело берутся яхты ледового класса Флотилии «Рэдиссон Ройал». Жителям и гостям столицы доступно увлекательное путешествие на яхте по заснеженной Москве-реке: хруст льда под мощным килем и усиленным корпусом добавляет острых ощущений.
                  </div>
                </div>
              </div>
            </div>

            <div class="flight">
              <div class="flight__info">
                <svg-icon class="instagram_decor1 uk-visible@m" name="decor4"/>
                <svg-icon class="flight__info__icon" name="wheel"/>
                <div class="uk-position-relative">
                  <div class="headline_line"></div>
                  <div class="headline_22 t_semibold">
                    10 современных Речных трамвайчиков

                  </div>
                  <div class="flight__txt">
                    В апреле 2019 был представлен новый проект – 10 современных Речных трамвайчиков, которые позволят оперативно и с комфортом осматривать главные достопримечательности столицы. Эффектные и современные суда подчеркнут стремительно развивающийся и энергичный облик Москвы. Телескопически сдвигаемое остекление салона обеспечит открытое пространство в теплое время года и комфорт закрытого салона в дождливую и пасмурную погоду.
                  </div>
                </div>
              </div>
              <div class="trams__route__img uk-cover-container">
                <img  class="img_cover" data-src="~assets/img/trams/_DSC4020_2.jpg" alt="" src="~assets/img/trams/_DSC4020_2.jpg">
              </div>
            </div>-->
      <!--
            <CruiseItem v-for="(cruise,index) in cruiseInfo" :key="`crs3` + index"
                        :title="cruise.title" :decor="cruise.decor"
                        :text="cruise.text" :svgName="cruise.svgName"
                        :fileNames="cruise.fileNames" :infoCard="cruise.infoCard"/>
      -->

      <CruiseItem v-for="(cruise,index) in blocks" :key="`crs2` + index"
                  :title="cruise.name"
                  :decor="cruise.decor"
                  :text="cruise.content"
                  :svgName="cruise.background"
                  :linkBuy="cruise.linkbuy"
                  :linkMore="cruise.linkmore"
                  :fileNames="cruise.images"/>

    </div>
    <section v-if="aboutHtmls" class="uk-cover-container about-advantages">
      <img data-src="~assets/img/inners2/about6.png" alt="" class="img_cover" src="~assets/img/inners2/about6.png">
      <div class="uk-container uk-position-relative">
        <div class="about-advantages__grid">
          <div class="about-advantages__headline uk-position-relative" v-html="aboutHtmls?.about_list_text?.content">
<!--            <div class="headline_line"></div>
            <div class="headline_32">
              <b>
                Флотилия «Рэдиссон Ройал»
              </b>
            </div>
            <div class="txt18">
              это ультрасовременные речные яхты с ресторанным
              сервисом на борту, предназначенные для экскурсионно-
              развлекательных прогулок по Москве-реке для горожан
              и гостей столицы.
            </div>
            <BuyTicketBtn link="/yachts/schedule/"/>-->
          </div>
          <div class="about-advantages__info">
            <img src="~assets/img/svg/half-circle.svg" alt="" class="advantages__info__decor" uk-svg>
            <div class="about-advantages__info__item about-advantages__info__item1">
              <div class="about-advantages__info__item__svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85">
                  <defs>
                    <linearGradient id="svg-about5-a" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#00c1f3"></stop>
                      <stop offset="1" stop-color="#fff"></stop>
                    </linearGradient>
                  </defs>
                  <g transform="translate(-905 -3433)">
                    <circle cx="42.5" cy="42.5" r="42.5" transform="translate(905 3433)" fill="url(#svg-about5-a)"></circle>
                    <path d="M947.054 3467.21a5.105 5.105 0 10-5.105-5.105 5.107 5.107 0 005.105 5.105zm0-8.168a3.063 3.063 0 11-3.063 3.063 3.068 3.068 0 013.063-3.063zM963 3492l-3.789-15.521-7.98-1.3-1.363-7.288h-5.24l.241 4.014a10.086 10.086 0 001.49 20.1 10.317 10.317 0 009.584-6.281l2.419 6.281zm-14.8-22.154l1.31 7.044 8.06 1.31 2.89 11.845h-.708l-3.99-10.373-8.454-.639-.555-9.187zm-1.838 20.2A8.263 8.263 0 01938 3481.9a8.176 8.176 0 016.984-8.028l.421 6.985 8.922.671.354.919a8.242 8.242 0 01-8.322 7.598z" fill="#1d2240">
                    </path>
                  </g>
                </svg>
              </div>
              <div class="about-advantages__info__item__txt" v-html="aboutHtmls?.about_list_item_1?.content">
              </div>
            </div>
            <div class="about-advantages__info__item about-advantages__info__item2">
              <div class="about-advantages__info__item__svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85">
                  <defs>
                    <linearGradient id="svg-about6-a" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#00c1f3"></stop>
                      <stop offset="1" stop-color="#fff"></stop>
                    </linearGradient>
                  </defs>
                  <g transform="translate(-887 -3608)">
                    <circle cx="42.5" cy="42.5" r="42.5" transform="translate(887 3608)" fill="url(#svg-about6-a)"></circle>
                    <g fill="#1d2240">
                      <path d="M924.55 3662.248c-1.777.934-3.273-.151-2.934-2.131l.726-4.23a4.1 4.1 0 00-1.022-3.148l-3.073-3c-1.438-1.4-.868-3.16 1.12-3.449l4.247-.617a4.1 4.1 0 002.675-1.934l1.9-3.848c.889-1.8 2.737-1.8 3.626 0l1.9 3.848a4.1 4.1 0 002.675 1.943l4.247.617c1.987.289 2.559 2.047 1.12 3.449l-3.073 3a4.1 4.1 0 00-1.021 3.145l.726 4.23c.339 1.979-1.156 3.066-2.934 2.131l-3.8-2a4.1 4.1 0 00-3.306 0zm7.918-3.543l3.8 2c.5.26.493.262.4-.29l-.726-4.23a5.82 5.82 0 011.524-4.691l3.073-3c.4-.391.4-.389-.153-.469l-4.247-.617a5.817 5.817 0 01-3.99-2.9l-1.9-3.848c-.248-.5-.245-.5-.493 0l-1.9 3.848a5.819 5.819 0 01-3.99 2.9l-4.247.617c-.554.08-.553.078-.152.469l3.073 3a5.817 5.817 0 011.524 4.691l-.726 4.23c-.095.552-.1.55.4.29l3.8-2a5.817 5.817 0 014.929 0z"></path>
                      <path d="M930 3674a23 23 0 1123-23 23 23 0 01-23 23zm0-1.747A21.253 21.253 0 10908.747 3651 21.253 21.253 0 00930 3672.253z"></path>
                    </g>
                  </g>
                </svg>

              </div>
              <div class="about-advantages__info__item__txt" v-html="aboutHtmls?.about_list_item_2?.content">
              </div>
            </div>
            <div class="about-advantages__info__item about-advantages__info__item3">
              <div class="about-advantages__info__item__svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85" id="">
                  <defs>
                    <linearGradient id="svg-about7-a" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#00c1f3"></stop>
                      <stop offset="1" stop-color="#fff"></stop>
                    </linearGradient>
                  </defs>
                  <g transform="translate(-905 -3765)">
                    <circle cx="42.5" cy="42.5" r="42.5" transform="translate(905 3765)" fill="url(#svg-about7-a)"></circle>
                    <path d="M954.402 3804.373a1.086 1.086 0 010 1.551l-7.877 7.877a1.144 1.144 0 01-.744.31h-.186a1.268 1.268 0 01-.558-.31l-3.349-3.349a1.1 1.1 0 011.551-1.551l2.543 2.543 7.07-7.07a1.086 1.086 0 011.55-.001zm11.6-1.426v.31l-.062 5.644v.062a18.038 18.038 0 01-.062 1.861 14.446 14.446 0 01-3.1 8.125 27.025 27.025 0 01-9.3 7.691c-1.24.62-2.481 1.178-3.721 1.737-.31.124-.62.248-.868.372a2.489 2.489 0 01-.93.186 3.113 3.113 0 01-.744-.124 32.667 32.667 0 01-12.094-7.5 16.681 16.681 0 01-4.652-8 15.106 15.106 0 01-.434-3.659c-.062-3.411 0-6.822 0-10.171v-3.6a1.873 1.873 0 012.047-2.171c4.83-.316 9.42-2.116 14.506-5.586 1.178-.806 1.675-.806 2.915 0a30.494 30.494 0 0010.854 5.086c.93.186 1.861.31 2.853.434.31.062.682.062.992.124a1.834 1.834 0 011.8 1.985v7.194zm-2.171-1.985v-5.334c-.31-.062-.558-.062-.868-.124a29.185 29.185 0 01-3.1-.5 33.22 33.22 0 01-11.66-5.4c-.062-.062-.124-.124-.186-.124-.062.062-.124.124-.186.124-5.458 3.721-10.419 5.644-15.629 6.016v13.774a13.886 13.886 0 004.465 10.233 30.179 30.179 0 0011.288 7.008h.062c.31-.124.62-.248.868-.372a63.385 63.385 0 003.535-1.613 25.153 25.153 0 008.559-7.008 12.8 12.8 0 002.666-6.943c0-.558.062-1.116.062-1.8v-.186l.062-5.52v-2.231z" fill="#1d2240"></path>
                  </g>
                </svg>
              </div>
              <div class="about-advantages__info__item__txt" v-html="aboutHtmls?.about_list_item_3?.content">
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section class="uk-position-relative about-capitans__section">
      <div class="about-capitans__decor1"></div>
      <svg-icon class="awards_decor1 uk-visible@l" name="decor5"/>
      <div id="gallery" class="uk-container uk-position-relative">
        <div class="uk-position-relative yacht__slider uk-slider uk-slider-container" tabindex="-1" uk-slider="">
          <ul class="uk-slider-items uk-flex" uk-lightbox="">
            <li class="uk-active" tabindex="-1" v-for="(slide, index) in photosSlide" :key="'sld' + index">
              <PhotoCard :fileName="slide.image"/>
            </li>
          </ul>
          <div class="yacht__slider_navigation">
            <div class="slider_numbers">
              <div class="slider_number">01</div>
              <div class="slider_num_bread">/</div>
              <div class="slider_amount">{{ photosSlide?.length }}</div>
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

        <div class="about-capitans__block" id="cap">
          <h2 class="headline_56 uk-text-center">{{ $t('yacht_caps') }}</h2>
          <!--          <div class="about-capitans__grid uk-hidden">
                      <div>
                        <div class="yacht__capitan">
                          <div class="yacht__capitan_img uk-cover-container">
                            <img  data-src="~assets/img/capitans/_DSC0022.jpg" alt="" class="img_cover" src="~assets/img/capitans/_DSC0022.jpg">
                          </div>
                          <div class="yacht__capitan_info">
                            <a href="" class="transition yacht__capitan__ship">
                              Монтана
                            </a>
                            <div class="yacht__capitan_name">
                              Акимов Денис Викторович
                            </div>
                            <div class="yacht__capitan_job">
                              Капитан-механик
                            </div>
                            <div class="yacht__capitan_experience_new">
                              <svg-icon class="icon" name="calendar"/>
                              <span>
                                Стаж работы <br class="uk-hidden@s"> во Флотилии: <b>11 лет</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="yacht__capitan">
                          <div class="yacht__capitan_img uk-cover-container">
                            <img  data-src="~assets/img/capitans/_DSC9819.jpg" alt="" class="img_cover" src="~assets/img/capitans/_DSC9819.jpg">
                          </div>
                          <div class="yacht__capitan_info">
                            <a href="" class="transition yacht__capitan__ship">
                              Феличита
                            </a>
                            <div class="yacht__capitan_name">
                              Буйнов Валерий Анатольевич
                            </div>
                            <div class="yacht__capitan_job">
                              Капитан-механик
                            </div>
                            <div class="yacht__capitan_experience_new">
                              <svg-icon class="icon" name="calendar"/>
                              <span>
                                Стаж работы <br class="uk-hidden@s"> во Флотилии: <b>8 лет</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="yacht__capitan">
                          <div class="yacht__capitan_img uk-cover-container">
                            <img  data-src="~assets/img/capitans/_DSC0039.jpg" alt="" class="img_cover" src="~assets/img/capitans/_DSC0039.jpg">
                          </div>
                          <div class="yacht__capitan_info">
                            <a href="" class="transition yacht__capitan__ship">
                              Примавера
                            </a>
                            <div class="yacht__capitan_name">
                              Выгодин Вячеслав Юрьевич
                            </div>
                            <div class="yacht__capitan_job">
                              Капитан-механик
                            </div>
                            <div class="yacht__capitan_experience_new">
                              <svg-icon class="icon" name="calendar"/>
                              <span>
                                Стаж работы <br class="uk-hidden@s"> во Флотилии: <b>12 лет</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="yacht__capitan">
                          <div class="yacht__capitan_img uk-cover-container">
                            <img data-src="~assets/img/capitans/_DSC0043.jpg" alt="" class="img_cover" src="~assets/img/capitans/_DSC0043.jpg">
                          </div>
                          <div class="yacht__capitan_info">
                            <a href="" class="transition yacht__capitan__ship">
                              Баттерфляй
                            </a>
                            <div class="yacht__capitan_name">
                              Круц Валерий  Евгеньевич
                            </div>
                            <div class="yacht__capitan_job">
                              Капитан-механик
                            </div>
                            <div class="yacht__capitan_experience_new">
                              <svg-icon class="icon" name="calendar"/>
                              <span>
                                Стаж работы <br class="uk-hidden@s"> во Флотилии: <b>11 лет</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="yacht__capitan">
                          <div class="yacht__capitan_img uk-cover-container">
                            <img  data-src="~assets/img/capitans/_DSC0062.jpg" alt="" class="img_cover" src="~assets/img/capitans/_DSC0062.jpg">
                          </div>
                          <div class="yacht__capitan_info">
                            <a href="" class="transition yacht__capitan__ship">
                              Бон Вояж
                            </a>
                            <div class="yacht__capitan_name">
                              Луковников Артем Михайлович
                            </div>
                            <div class="yacht__capitan_job">
                              Капитан-механик
                            </div>
                            <div class="yacht__capitan_experience_new">
                              <svg-icon class="icon" name="calendar"/>
                              <span>
                                Стаж работы <br class="uk-hidden@s"> во Флотилии: <b>9 лет</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="yacht__capitan">
                          <div class="yacht__capitan_img uk-cover-container">
                            <img  data-src="~assets/img/capitans/_DSC0063.jpg" alt="" class="img_cover" src="~assets/img/capitans/_DSC0063.jpg">
                          </div>
                          <div class="yacht__capitan_info">
                            <a href="" class="transition yacht__capitan__ship">
                              Капелла
                            </a>
                            <div class="yacht__capitan_name">
                              Милованов Евгений Андреевич
                            </div>
                            <div class="yacht__capitan_job">
                              Капитан-механик
                            </div>
                            <div class="yacht__capitan_experience_new">
                              <svg-icon class="icon" name="calendar"/>
                              <span>
                                Стаж работы <br class="uk-hidden@s"> во Флотилии: <b>11 лет</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="yacht__capitan">
                          <div class="yacht__capitan_img uk-cover-container">
                            <img  data-src="~assets/img/capitans/_DSC9677.jpg" alt="" class="img_cover" src="~assets/img/capitans/_DSC9677.jpg">
                          </div>
                          <div class="yacht__capitan_info">
                            <a href="" class="transition yacht__capitan__ship">
                              Селебрити
                            </a>
                            <div class="yacht__capitan_name">
                              Полунеев Виктор Александрович.
                            </div>
                            <div class="yacht__capitan_job">
                              Капитан-механик
                            </div>
                            <div class="yacht__capitan_experience_new">
                              <svg-icon class="icon" name="calendar"/>
                              <span>
                                Стаж работы <br class="uk-hidden@s"> во Флотилии: <b>12 лет</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="yacht__capitan">
                          <div class="yacht__capitan_img uk-cover-container">
                            <img  data-src="~assets/img/capitans/_DSC8411.jpg" alt="" class="img_cover" src="~assets/img/capitans/_DSC8411.jpg">
                          </div>
                          <div class="yacht__capitan_info">
                            <a href="" class="transition yacht__capitan__ship">
                              Фердинанд
                            </a>
                            <div class="yacht__capitan_name">
                              Степаков Николай Витальевич
                            </div>
                            <div class="yacht__capitan_job">
                              Капитан-механик
                            </div>
                            <div class="yacht__capitan_experience_new">
                              <svg-icon class="icon" name="calendar"/>
                              <span>
                                Стаж работы <br class="uk-hidden@s"> во Флотилии: <b>12 лет</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="yacht__capitan">
                          <div class="yacht__capitan_img uk-cover-container">
                            <img  data-src="~assets/img/capitans/_DSC0078.jpg" alt="" class="img_cover" src="~assets/img/capitans/_DSC0078.jpg">
                          </div>
                          <div class="yacht__capitan_info">
                            <a href="" class="transition yacht__capitan__ship">
                              Скарлет
                            </a>
                            <div class="yacht__capitan_name">
                              Серегин Денис Сергеевич
                            </div>
                            <div class="yacht__capitan_job">
                              Капитан-механик
                            </div>
                            <div class="yacht__capitan_experience_new">
                              <svg-icon class="icon" name="calendar"/>
                              <span>
                                Стаж работы <br class="uk-hidden@s"> во Флотилии: <b>11 лет</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="yacht__capitan">
                          <div class="yacht__capitan_img uk-cover-container">
                            <img  data-src="~assets/img/capitans/_DSC0016.jpg" alt="" class="img_cover" src="~assets/img/capitans/_DSC0016.jpg">
                          </div>
                          <div class="yacht__capitan_info">
                            <a href="" class="transition yacht__capitan__ship">
                              Бьюти
                            </a>
                            <div class="yacht__capitan_name">
                              Смирнов Алексей Павлович
                            </div>
                            <div class="yacht__capitan_job">
                              Капитан-механик
                            </div>
                            <div class="yacht__capitan_experience_new">
                              <svg-icon class="icon" name="calendar"/>
                              <span>
                                Стаж работы <br class="uk-hidden@s"> во Флотилии: <b>11 лет</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>-->
          <div uk-slider="" class="default-slider uk-slider">
            <div class="uk-position-relative">
              <div class="uk-slider-container ">
                <ul class="uk-slider-items uk-child-width-1-3@xl uk-child-width-1-2@m uk-child-width-1-1 uk-grid-match"
                    uk-scrollspy="target: > li > .about-partner__card ; cls: uk-animation-slide-bottom-medium; delay: 500">
                  <li v-for="capitan in testCaps" class="uk-active">
                    <PersonalCard
                        :personaImg="capitan.image"
                        :yachtName="capitan.place"
                        :personaName="capitan.name"
                        :position="capitan.position"
                        :experience="capitan.experience"
                        :capitans="true"/>
                  </li>
                </ul>
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

          <div class="about-capitans__grid uk-hidden">
            <div v-for="capitan in testCaps">
              <PersonalCard
                  :personaImg="capitan.image"
                  :yachtName="capitan.place"
                  :personaName="capitan.name"
                  :position="capitan.position"
                  :experience="capitan.experience"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    <section class="uk-position-relative about-manager__section" id="manager">
          <div class="about-capitans__decor1"></div>
          <svg-icon name="decor5" class="awards_decor1 uk-visible@l"/>

          <div class="uk-container uk-position-relative">
            <div class="about-capitans__block">
              <div class="headline_56 uk-text-center">
                Менеджеры яхт
              </div>

              <div uk-slider="" class="default-slider uk-slider">
                <div class="uk-position-relative">
                  <div class="uk-slider-container ">
                    <ul class="uk-slider-items uk-child-width-1-3@xl uk-child-width-1-2@m uk-child-width-1-1 uk-grid-match" uk-scrollspy="target: > li > .about-partner__card ; cls: uk-animation-slide-bottom-medium; delay: 500" style="transform: translate3d(0px, 0px, 0px);">
                      <li v-for="manager in testManagers" tabindex="-1" class="uk-active">
                        <PersonalCard
                          :personaName="manager.name"
                          :personaImg="manager.image"
                          :position="manager.position"
                          :experience="manager.experience"
                          :managers="true"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="slider_arrows slider_arrows-blue">
                    <a class="uk-position-center-left-out" href="#" uk-slider-item="previous">
                      <svg-icon name="arr_lang" class="icon"/>
                    </a>
                    <a class="uk-position-center-right-out" href="#" uk-slider-item="next">
                      <svg-icon name="arr_lang" class="icon"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="uk-position-relative about-employee__section" id="employee">
          <div class="about-capitans__decor1"></div>
          <svg-icon name="decor5" class="awards_decor1 uk-visible@l"/>
          <div class="uk-container uk-position-relative">
            <div class="about-capitans__block">
              <div class="headline_56 uk-text-center">
                Отдел продаж
              </div>
              <div uk-slider="" class="default-slider uk-slider">
                <div class="uk-position-relative">
                  <div class="uk-slider-container ">
                    <ul class="uk-slider-items uk-child-width-1-3@xl uk-child-width-1-2@m uk-child-width-1-1 uk-grid-match" uk-scrollspy="target: > li > .about-partner__card ; cls: uk-animation-slide-bottom-medium; delay: 500" style="transform: translate3d(0px, 0px, 0px);">
                      <li v-for="seller in testSellers" tabindex="-1" class="uk-active">
                        <PersonalCard :personaName="seller.name" :personaImg="seller.image" :position="seller.position" :experience="seller.experience" :sellers="true"/>
                      </li>
                    </ul>
                  </div>
                  <div class="slider_arrows slider_arrows-blue">
                    <a class="uk-position-center-left-out" href="#" uk-slider-item="previous">
                      <svg-icon name="arr_lang" class="icon"/>
                    </a>
                    <a class="uk-position-center-right-out" href="#" uk-slider-item="next">
                      <svg-icon name="arr_lang" class="icon"/>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>-->
    <div class="uk-position-relative about__video_container" id="video">
      <!--      <video src="~assets/video/video.mp4" muted class="video">
              <source src="~assets/video/video.mp4" type="video/mp4">
            </video>-->
<!--      <video ref="video" src="~assets/video/about_page.mp4" uk-video="autoplay: inview" playsinline muted class="video"
             poster="/about10.png"></video>
      <div class="playpause">
        <div class="play-video-btn_back">
          <img src="~assets/img/svg/play-btn.svg" alt="" class="" id="svg-new-play" uk-svg>
        </div>
      </div>-->
      <iframe class="video_item" width="100%" height="100%" :src="video + '?enablejsapi=1'">
      </iframe>
    </div>
    <RewardSlider/>
    <section v-if="$i18n.locale === 'ru'" class="about-job__section" id="job">
      <div class="uk-container">
        <div class="about-job__grid uk-flex uk-flex-wrap">
          <div class="uk-width-auto">
            <div class="about-job__info">
              <div class="uk-flex uk-flex-between uk-flex-bottom about-job__info__headline">
                <h2 class="headline_56">
                  {{ $t('vacancies')}}
                </h2>
                <!--                <a class="uk-button uk-button-default " href="">
                                  <span>АНКЕТА СОИСКАТЕЛЯ</span>
                                </a>-->
              </div>
              <div class="about-job__info__p1">
                {{$t('vacancies_info')}}:
              </div>
              <div class="about-job__info__call">
                <svg-icon class="icon" name="call"/>
                <span>
              <a :href="`tel:${tel}`">{{ tel }}</a>
            </span>
              </div>
              <div class="about-job__info__mail">
                <svg-icon class="icon" name="mail"/>
                <span>
                  {{ $t('vacancies_email') }}: <a :href="`mailto:${email}`">{{ email }}</a>
                </span>
              </div>
            </div>
          </div>
          <div class="uk-width-expand">
            <ul uk-accordion="multiple: true;" class="accordion_vacantion uk-accordion">
              <VacancyItem v-for="(vacancy, index) in vacanciesData" :key="`vcnsy` + index"
                           :vacancy="vacancy"/>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section ref="DocBlock" id="DocumentBlocks">
      <CruiseItem v-for="(cruise,index) in docBlocks" :key="`crs3` + index"
                  :title="cruise.name"
                  :decor="cruise.decor"
                  :text="cruise.content"
                  :svgName="cruise.background"
                  :linkBuy="cruise.linkbuy"
                  :linkMore="cruise.linkmore"
                  :fileNames="cruise.images"/>
    </section>
    <section class="uk-cover-container about-documents__section" id="document">
      <img class="img_cover" data-src="~assets/img/inners2/about11.png" alt="" src="~assets/img/inners2/about11.png">
      <div class="uk-container uk-position-relative">
        <div class="headline uk-flex uk-flex-between uk-flex-middle">
          <h2 class="headline_56">
            {{ $t('documents') }}
          </h2>
          <a class="uk-button uk-button-default button_download uk-visible@m" href="">
            <svg-icon class="icon" name="download"/>
            <span>{{ $t('download_all') }}</span>
          </a>
        </div>
        <div class="about-documents__items uk-grid-match uk-flex uk-flex-wrap uk-child-width-1-2@m"
             uk-scrollspy="target: > div > a; cls: uk-animation-fade; delay: 500">
          <DocumentCard v-for="(document,index) in documents.documentsList"
                        :key="index"
                        :name="document.name"
                        :link="document.doc"
                        :weight="document.size"
                        :format="document.type"/>

        </div>
        <div v-if="documents.documentsCurrentItems < 3" class="uk-text-center more_container more_container_white"
             id="about-document__btn">
          <div class="uk-visible@s"></div>
          <button class="btn_more" @click="loadMore">
            <span>{{ $t('buttons.show_more') }}</span>
          </button>
          <div class="uk-visible@s"></div>
        </div>
      </div>
    </section>
    <section class="about-partners__section uk-cover-container" id="partners">
      <div class="about-capitans__decor1"></div>
      <div class="uk-container uk-position-relative">
        <div class="headline uk-text-center">
          <h2 class="headline_56">
            {{ $t('partners') }}
          </h2>
        </div>
        <div uk-slider="" class="about-partners__slider uk-slider">
          <div class="uk-position-relative">
            <div class="uk-slider-container ">
              <ul class="uk-slider-items uk-child-width-1-5@xl uk-child-width-1-3@s uk-child-width-1-2 uk-grid-match"
                  uk-scrollspy="target: > li > .about-partner__card ; cls: uk-animation-slide-bottom-medium; delay: 500">
                <li tabindex="-1" class="uk-active" v-for="(partner, index) in partnersFetch">
                  <PartnerItem :key="'prtnr' + index" :fileName="partner.image" :link="partner.link"/>
                </li>
              </ul>
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
  </div>

</template>

<script>
import RewardSlider from "../components/rewards-slider/RewardSlider";
import Capitan from "../components/About/PersonalCard";
import PersonalCard from "../components/About/PersonalCard";
import DocumentCard from "../components/About/DocumentCard";
import PartnerItem from "../components/About/PartnerItem";
import CruiseItem from "../components/tickets/CruiseItem";
import Header from "../components/Header";
import BuyTicketBtn from "../components/BuyTicketBtn";
import PhotoCard from "../components/PhotoCard";
import VacancyItem from "../components/About/VacancyItem";
import UIkit from 'uikit';
import axios from "axios";
import Breadcrumbs from "../components/Breadcrumbs";
import { mapGetters } from "vuex";

export default {
  name: "About",
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
  components: {
    Breadcrumbs,
    VacancyItem,
    PhotoCard,
    BuyTicketBtn, Header, CruiseItem, PartnerItem, DocumentCard, PersonalCard, Capitan, RewardSlider
  },
  methods: {
    loadMore() {
      if (this.documents.documentsCurrentItems > this.documents.documentsList.length) return;
      this.documents.documentsCurrentItems = this.documents.documentsCurrentItems + 1;
    },
    async scrollToHash() {
      const hash = this.$route.hash;
      if (hash === '#DocumentBlocks') {
        await this.$nextTick();
        await this.delay(2000); // Adjust the delay time as needed (e.g., 200ms)
        const element = this.$refs.DocBlock;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      }
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
  },
  computed: {
    ...mapGetters(['tel', 'email']),
    companiesLoaded() {
      return this.documents.documentsList.slice(0, this.documents.documentsCurrentItems);
    },
  },
  data() {
    return {
      header: {
        filename: 'inners2/about1.png',
      },
      mainBlock: {},
      mainBlockLink: '',
      mainBlockIcon: '',
      vacancies: [
        {
          vacancyName: `Название вакансии`,
        },
        {
          vacancyName: `Название вакансии`,
          otherCategory: `Другая категория`
        },
        {
          vacancyName: `Название вакансии`,
          otherCategory: `Другая категория`
        },
      ],
      slides: [
        `main/_MG_1373.png`,
        `main/_MG_1415.png`,
        `main/_MG_1458-2.png`,
        `main/_MG_1415.png`,
        `main/_MG_1373.png`,
        `main/_MG_1415.png`,
        `main/_MG_1373.png`,
        `main/_MG_1415.png`,
        `main/_MG_1373.png`,
        `main/_MG_1415.png`,
        `main/_MG_1373.png`,
        `main/_MG_1415.png`,
        `main/_MG_1373.png`,
        `main/_MG_1415.png`,
        `main/_MG_1373.png`,
      ],
      cruiseInfo: [
        {
          fileNames: ['inners2/about4.png'],
          title: '10 речных яхт ледового класса',
          infoCard: true,
          decor: false,
          svgName: 'big-ancor',
          text: "В составе Флотилии 10 речных яхт ледового класса с ресторанным сервисом на борту. " +
              "Ежедневно и круглый год яхты совершают экскурсионно-развлекательные рейсы по Москве-реке, " +
              "позволяя за 2,5 часа увидеть главные достопримечательности города. К услугам гостей представлены Основной зал," +
              " Первый класс, рыбный ресторан «Erwin. Река» и Ройал класс – для всех, кто умеет отдыхать.",
        },
        {
          fileNames: ['inners2/about3.png'],
          title: 'Открой свою Москву с Флотилией «Рэдиссон Ройал»',
          svgName: 'wheel',
          decor: true,
          infoCard: true,
          text: "Флотилия «Рэдиссон Ройал» предлагает жителям и " +
              "гостям столицы весь спектр услуг и впечатлений на Москве-реке - " +
              "от экскурсионных прогулок на речных кабриолетах, до театральных " +
              "круизов и организации крупных частных мероприятий на борту белоснежной яхты!",
        },
        {
          fileNames: ['inners2/about5.png'],
          title: ' Круизы по Москве-реке 365 дней в году',
          svgName: 'compass2',
          infoCard: true,
          decor: false,
          text: "Уникальность Флотилии — круглогодичная навигация. " +
              "Когда русская зима сковывает льдом воды Москвы-реки, " +
              "за дело берутся яхты ледового класса Флотилии «Рэдиссон Ройал»." +
              " Жителям и гостям столицы доступно увлекательное путешествие" +
              " на яхте по заснеженной Москве-реке: хруст льда под мощным килем " +
              "и усиленным корпусом добавляет острых ощущений.",
        },
        {
          fileNames: ['trams/_DSC4020_2.jpg'],
          title: '10 современных Речных трамвайчиков',
          svgName: 'wheel',
          decor: true,
          infoCard: true,
          text: "В апреле 2019 был представлен новый проект – 10 современных Речных трамвайчиков, " +
              "которые позволят оперативно и с комфортом осматривать главные достопримечательности столицы. " +
              "Эффектные и современные суда подчеркнут стремительно развивающийся и энергичный облик Москвы. " +
              "Телескопически сдвигаемое остекление салона обеспечит открытое пространство в теплое время года " +
              "и комфорт закрытого салона в дождливую и пасмурную погоду.",
        }
      ],
      chiefs: [
        {
          capImg: "capitans/_DSC0022.png",
          yachtName: 'Монтана',
          capName: 'Акимов Денис Викторович',
          position: 'Капитан-механик',
          experience: 11
        },
        {
          capImg: "capitans/_DSC9819.png",
          yachtName: 'Феличита',
          capName: 'Буйнов Валерий Анатольевич',
          position: 'Капитан-механик',
          experience: 8
        },
        {
          capImg: "capitans/_DSC0039.png",
          yachtName: 'Примавера',
          capName: 'Выгодин Вячеслав Юрьевич',
          position: 'Капитан-механик',
          experience: 12
        },
        {
          capImg: "capitans/_DSC0043.png",
          yachtName: 'Баттерфляй',
          capName: 'Круц Валерий Евгеньевич',
          position: 'Капитан-механик',
          experience: 11
        },
        {
          capImg: "capitans/_DSC0062.png",
          yachtName: 'Бон Вояж',
          capName: 'Луковников Артем Михайлович',
          position: 'Капитан-механик',
          experience: 9
        },
        {
          capImg: "capitans/_DSC0063.png",
          yachtName: 'Капелла',
          capName: 'Милованов Евгений Андреевич',
          position: 'Капитан-механик',
          experience: 11
        },
        {
          capImg: "capitans/_DSC9677.png",
          yachtName: 'Селебрити',
          capName: 'Полунеев Виктор Александрович',
          position: 'Капитан-механик',
          experience: 12
        },
        {
          capImg: "capitans/_DSC8411.png",
          yachtName: 'Фердинанд',
          capName: 'Степаков Николай Витальевич',
          position: 'Капитан-механик',
          experience: 12
        },
        {
          capImg: "capitans/_DSC0078.png",
          yachtName: 'Скарлет',
          capName: 'Серегин Денис Сергеевич',
          position: 'Капитан-механик',
          experience: 11
        },
        {
          capImg: "capitans/_DSC0016.png",
          yachtName: 'Бьюти',
          capName: 'Смирнов Алексей Павлович',
          position: 'Капитан-механик',
          experience: 11
        },
      ],
      managers: [
        {
          img: 'manager/manager1.png',
          name: 'Батькова Юлия Дмитриевна',
          position: 'Менеджер яхт',
          experience: 2010
        },
        {
          img: 'manager/_DSC9713.png',
          name: 'Грушина Анжела Александровна',
          position: 'Менеджер яхт',
          experience: 2014
        },
        {
          img: 'manager/_DSC8523.png',
          name: 'Ерохина Нина Валерьевна',
          position: 'Менеджер яхт',
          experience: 2011
        },
        {
          img: 'manager/_DSC9789.png',
          name: 'Муртазина Эльвира Маратовна',
          position: 'Менеджер яхт',
          experience: 2018
        },
        {
          img: 'manager/_DSC8440_1.png',
          name: 'Набиева Эльмира Равильевна',
          position: 'Менеджер яхт',
          experience: 2010
        },
        {
          img: 'manager/_DSC8531.png',
          name: 'Пинчукова Ольга Сергеевна',
          position: 'Менеджер яхт',
          experience: 2019
        },
        {
          img: 'manager/_DSC9690.png',
          name: 'Прокина Елена Павловна',
          position: 'Менеджер яхт',
          experience: 2019
        },
        {
          img: 'manager/manager2.png',
          name: 'Симонова Анастасия Александровна',
          position: 'Менеджер яхт',
          experience: 2014
        },
        {
          img: 'manager/_DSC9752.png',
          name: 'Соколов Игорь Валерьевич',
          position: 'Менеджер яхт',
          experience: 2011
        },
        {
          img: 'manager/_DSC9722.png',
          name: 'Чередниченко Иван Григорьевич',
          position: 'Менеджер яхт',
          experience: 2009
        },
        {
          img: 'manager/_DSC8460.png',
          name: 'Чиркина Наталья Игоревна',
          position: 'Менеджер яхт',
          experience: 2015
        },
      ],
      sellers: [
        {
          img: 'manager/_DSC0171.png',
          name: 'Тарушкин Андрей Александрович',
          position: 'Отдел продаж',
          experience: 2020
        },
        {
          img: 'manager/_DSC0191.png',
          name: 'Фомичев Владимир Викторович',
          position: 'Отдел продаж',
          experience: 2010
        },
        {
          img: 'manager/_DSC0238.png',
          name: 'Антонова Мария Алексеевна',
          position: 'Отдел продаж',
          experience: 2009
        },
        {
          img: 'manager/_DSC0203.png',
          name: 'Шабалина Ульяна Закиевна',
          position: 'Отдел продаж',
          experience: 2012
        },
      ],
      documents: {
        documentsCurrentItems: 3,
        documentsList: [
          {
            name: 'Юридическая информация',
            format: 'PDF',
            weight: 2.6,
            link: ''
          },
        ],
      },
      partners: [
        {
          img: 'inners2/about12.png'
        },
        {
          img: 'inners2/about13.png'
        },
        {
          img: 'inners2/about14.png'
        },
        {
          img: 'inners2/about15.png'
        },
        {
          img: 'inners2/about16.png'
        },
        {
          img: 'inners2/about12.png'
        },
        {
          img: 'inners2/about13.png'
        },
        {
          img: 'inners2/about14.png'
        },
        {
          img: 'inners2/about15.png'
        },
        {
          img: 'inners2/about16.png'
        },
      ],
      partnersFetch: [],
      vacanciesData: [],
      testCaps: [],
      testSellers: [],
      testManagers: [],
      blocks: null,
      docBlocks: {

      },
      photosSlide: [],
      seoData: {},
      video: null,
      aboutHtmls: {}
    }
  },
  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/about/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let partners = await axios.get(
        `${this.$config.baseURL}partners?lang=${this.$i18n.locale}`);
    let blocks = await axios.get(
        `${this.$config.baseURL}blocks?page=about&lang=${this.$i18n.locale}`);
    let captainData = await axios.get(
        `${this.$config.baseURL}personals?grp=captain&lang=${this.$i18n.locale}`);
    let sellerData = await axios.get(
        `${this.$config.baseURL}personals?grp=seller&lang=${this.$i18n.locale}`);
    let managerData = await axios.get(
        `${this.$config.baseURL}personals?grp=manager&lang=${this.$i18n.locale}`);
    let vacanciesData = await axios.get(
        `${this.$config.baseURL}vacancies?lang=${this.$i18n.locale}`);
    let documentsData = await axios.get(
        `${this.$config.baseURL}docs?lang=${this.$i18n.locale}`);
    let photosData = await axios.get(
        `${this.$config.baseURL}photos?lang=${this.$i18n.locale}`);
    let youtubeVideo = await axios.get(
        `${this.$config.baseURL}textelements?code[]=youtube_about&lang=${this.$i18n.locale}`);
    const htmls = await axios.get(
        `${this.$config.baseURL}varyelements?code[]=about_list_text&code[]=about_list_item_1&code[]=about_list_item_2&code[]=about_list_item_3&lang=${this.$i18n.locale}`)
    this.aboutHtmls = htmls.data.result
    this.testCaps = captainData.data;
    this.testSellers = sellerData.data;
    this.testManagers = managerData.data;
    this.docBlocks = blocks.data.slice(-1)
    this.mainBlock = blocks.data.at(0)
    this.mainBlockLink = this.mainBlock.linkbuy
    this.mainBlockIcon = this.mainBlock.background
    this.blocks = blocks.data;
    this.blocks.shift()
    this.blocks.pop()
    this.partnersFetch = partners.data;
    this.vacanciesData = vacanciesData.data;
    this.documents.documentsList = documentsData.data;
    this.photosSlide = photosData.data.result
    this.video = youtubeVideo.data.result.youtube_about
  },
  fetchOnServer: true,
  fetchKey: 'about-page',
  updated() {
    let videoContainer = document.querySelector('#video');
    let element = document.querySelector('.yacht__slider')
    let video = videoContainer.querySelector('.video');
  },
  mounted() {
    this.scrollToHash();
    let element = document.querySelector('.yacht__slider')
    UIkit.util.on(element, 'itemshown', function (e) {
      element.querySelector('.slider_number').textContent = (('0' + (e.detail[0].index + 1)).slice(-2));
    });
  },
}
</script>

<style scoped>
#DocumentBlocks {
  min-height: 400px;
}
/*
.about-advantages__info__item__svg img {
  width: 85px;
  height: 85px;
}
*/

.play-video-btn_back img {
  width: 100px;
  height: 100px;
}

.flight:nth-child(even) {
  flex-direction: row-reverse;
}

@media screen and (max-width: 959px) {
  .flight:nth-child(even) {
    flex-direction: column;
  }
}

.about__video_container iframe {
  aspect-ratio: 16/9;
}

</style>
