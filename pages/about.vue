<template>
  <div>
    <Header :about-page="true">
      <img src="~images/inners2/about1.webp" data-src="~images/inners2/about1.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ $t('pages.about.title') }}
          </h1>
        </div>
      </div>
    </Header>
    <section class="about-main__section uk-cover-container">
      <div class="about-main__images">
        <img data-src="~images/inners2/about2.webp" class="img_cover" alt="" src="~images/inners2/about2.webp">
        <!-- <svg class="about-main__logo uk-hidden@l">
          <use xlink:href="#logo"></use>
        </svg> -->
      </div>

      <div class="uk-container uk-position-relative">
        <!-- <svg class="about-main__logo uk-visible@l">
          <use xlink:href="#logo"></use>
        </svg> -->
        <div class="about-main__block">
          <svg-icon class="about-main__block__svg" name="spyglass"/>
          <div class="uk-position-relative">
            <div class="headline_22 t_semibold">
              {{ mainBlock.title }}
            </div>
            <div class="headline_line"></div>
            <div class="about-main__p1">
              {{ mainBlock.description }}
            </div>
            <BuyTicketBtn link="/yachts/schedule/"/>
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
                      О нас
                    </span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#cap" uk-scroll="offset: 75">
                    <span>Сотрудники компании</span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#video" uk-scroll="offset: 75">
                    <span>Видео</span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#awards" uk-scroll="offset: 75">
                    <span>Награды</span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#job" uk-scroll="offset: 75">
                    <span>Вакансии</span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#document" uk-scroll="offset: 75">
                    <span>Документы</span>
                  </a>
                </li>
                <li tabindex="-1" class="">
                  <a href="#partners" uk-scroll="offset: 75">
                    <span>Партнеры</span>
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
        </div><div class="uk-sticky-placeholder" style="height: 76px; margin: 0px;" hidden=""></div>
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
    <section class="uk-cover-container about-advantages">
      <img  data-src="~assets/img/inners2/about6.png" alt="" class="img_cover" src="~assets/img/inners2/about6.png">
      <div class="uk-container uk-position-relative">
        <div class="about-advantages__grid">
          <div class="about-advantages__headline uk-position-relative">
            <div class="headline_line"></div>
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
            <BuyTicketBtn link="/yachts/schedule/"/>
          </div>
          <div class="about-advantages__info">
            <img src="~assets/img/svg/half-circle.svg" alt="" class="advantages__info__decor" uk-svg>
            <div class="about-advantages__info__item about-advantages__info__item1">
              <div class="about-advantages__info__item__svg">
                <img src="~assets/img/svg/chairman.svg" alt="" class="" uk-svg>
              </div>
              <div class="about-advantages__info__item__txt">
                Яхты и причал Флотилии приспособлены для лиц
                с ограниченными возможностями: один звонок о предстоящем
                визите, и на причале будет запущен специальный подъемник,
                а члены команды с радостью помогут подняться на борт пассажиру
                в инвалидной коляске.
              </div>
            </div>
            <div class="about-advantages__info__item about-advantages__info__item2">
              <div class="about-advantages__info__item__svg">
                <img src="~assets/img/svg/gradient-star.svg" alt="" class="uk-preserve" uk-svg>
              </div>
              <div class="about-advantages__info__item__txt">
                Регулярные рейсы с фиксированным расписанием;
                туристические пакеты, семейные уик-энды, дегустации и сезонные
                акции; возможность аренды; опытная банкетная служба; бесплатный
                доступ в Интернет (wi-fi).
              </div>
            </div>
            <div class="about-advantages__info__item about-advantages__info__item3">
              <div class="about-advantages__info__item__svg">
                <img src="~assets/img/svg/gradient-protect.svg" alt="" class="uk-preserve" uk-svg>
              </div>
              <div class="about-advantages__info__item__txt">
                Яхты соответствуют самому высокому уровню безопасности,
                в том числе, и в отношении окружающей среды. Позволяют совершать прогулки по Москве-реке 365 дней в году, в том числе и в салоне Первого класса.
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
<!--            <li tabindex="-1" class="uk-active">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover" src="~assets/img/main/_MG_1373.png">
              </a>
            </li>
            <li tabindex="-1" class="">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1415.png" alt="" class="img_cover" src="~assets/img/main/_MG_1415.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1458-2.png" alt="" class="img_cover" src="~assets/img/main/_MG_1458-2.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover" src="~assets/img/main/_MG_1373.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover" src="~assets/img/main/_MG_1373.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover" src="~assets/img/main/_MG_1373.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1415.png" alt="" class="img_cover"  src="~assets/img/main/_MG_1415.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1458-2.png" alt="" class="img_cover" src="~assets/img/main/_MG_1458-2.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover" src="~assets/img/main/_MG_1373.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover" src="~assets/img/main/_MG_1373.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover" src="~assets/img/main/_MG_1373.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1415.png" alt="" class="img_cover" src="~assets/img/main/_MG_1415.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1458-2.png" alt="" class="img_cover" src="~assets/img/main/_MG_1458-2.png" >
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover"  src="~assets/img/main/_MG_1373.png">
              </a>
            </li>
            <li tabindex="-1">
              <a href="/img/main/_MG_1373.png" class="gallery_card uk-position-relative">
                <img  data-src="~assets/img/main/_MG_1373.png" alt="" class="img_cover" src="~assets/img/main/_MG_1373.png">
              </a>
            </li>-->
            <li class="uk-active" tabindex="-1" v-for="(slide, index) in photosSlide" :key="'sld' + index">
              <PhotoCard :fileName="slide.image"/>
            </li>
          </ul>
          <div class="yacht__slider_navigation">
            <div class="slider_numbers">
              <div class="slider_number">01</div>
              <div class="slider_num_bread">/</div>
              <div class="slider_amount">{{photosSlide?.length}}</div>
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
          <div class="headline_56 uk-text-center">
            Капитаны яхт
          </div>
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
                <ul class="uk-slider-items uk-child-width-1-3@xl uk-child-width-1-2@m uk-child-width-1-1 uk-grid-match" uk-scrollspy="target: > li > .about-partner__card ; cls: uk-animation-slide-bottom-medium; delay: 500" style="transform: translate3d(0px, 0px, 0px);">
                  <li v-for="capitan in testCaps" tabindex="-1" class="uk-active">
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
<!--            <div v-for="capitan in chiefs">
              <PersonalCard
                       :personaImg="capitan.capImg"
                       :yachtName="capitan.yachtName"
                       :personaName="capitan.capName"
                       :position="capitan.position"
                       :experience="capitan.experience"/>
            </div>-->
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
      <video ref="video" src="~assets/video/about_page.mp4" uk-video="autoplay: inview" playsinline muted class="video" poster="/about10.png"></video>
      <div class="playpause">
        <div class="play-video-btn_back">
          <img src="~assets/img/svg/play-btn.svg" alt="" class="" id="svg-new-play" uk-svg>
        </div>
      </div>
    </div>
    <RewardSlider/>
    <section class="about-job__section" id="job">
      <div class="uk-container">
        <div class="about-job__grid uk-flex uk-flex-wrap">
          <div class="uk-width-auto">
            <div class="about-job__info">
              <div class="uk-flex uk-flex-between uk-flex-bottom about-job__info__headline">
                <div class="headline_56">
                  вакансии
                </div>
<!--                <a class="uk-button uk-button-default " href="">
                  <span>АНКЕТА СОИСКАТЕЛЯ</span>
                </a>-->
              </div>
              <div class="about-job__info__p1">
                По всем вопросам трудоустройства Вы можете
                обратиться по телефонам:
              </div>
              <div class="about-job__info__call">
                <svg-icon class="icon" name="call"/>
                <span>
              <a href="tel:8(495) 228 55 55">+7(495)228-55-55</a>
            </span>
              </div>
              <div class="about-job__info__mail">
                <svg-icon class="icon" name="mail"/>
                <span>
                  или по e-mail: <a href="mailto:info@radisson-cruise.ru">info@radisson-cruise.ru</a>
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
    <section class="uk-cover-container about-documents__section" id="document">
      <img  class="img_cover" data-src="~assets/img/inners2/about11.png" alt="" src="~assets/img/inners2/about11.png">
      <div class="uk-container uk-position-relative">
        <div class="headline uk-flex uk-flex-between uk-flex-middle">
          <div class="headline_56">
            документы
          </div>
          <a class="uk-button uk-button-default button_download uk-visible@m" href="">
            <svg-icon class="icon" name="download"/>
            <span>СКАЧАТЬ ВСЕ</span>
          </a>
        </div>
        <div class="about-documents__items uk-grid-match uk-flex uk-flex-wrap uk-child-width-1-2@m" uk-scrollspy="target: > div > a; cls: uk-animation-fade; delay: 500">

          <DocumentCard v-for="(document,index) in companiesLoaded"
                        :key="index"
                        :name="document.name"
                        :link="document.doc"
                        :weight="document.size"
                        :format="document.type" />

        </div>
        <div v-if="documents.documentsCurrentItems < 3" class="uk-text-center more_container more_container_white" id="about-document__btn">
          <div class="uk-visible@s"></div>
          <button class="btn_more" @click="loadMore">
            <span>ПОКАЗАТЬ ЕЩЕ</span>
          </button>
          <div class="uk-visible@s"></div>
        </div>
      </div>
    </section>
    <section class="about-partners__section uk-cover-container" id="partners">
      <div class="about-capitans__decor1"></div>
      <div class="uk-container uk-position-relative">
        <div class="headline uk-text-center">
          <div class="headline_56">
            ПАРТНЕРЫ
          </div>
        </div>
        <div uk-slider="" class="about-partners__slider uk-slider">
          <div class="uk-position-relative">
            <div class="uk-slider-container ">
              <ul class="uk-slider-items uk-child-width-1-5@xl uk-child-width-1-3@s uk-child-width-1-2 uk-grid-match" uk-scrollspy="target: > li > .about-partner__card ; cls: uk-animation-slide-bottom-medium; delay: 500">
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
export default {
  name: "About",
  components: {
    Breadcrumbs,
    VacancyItem,
    PhotoCard,
    BuyTicketBtn, Header, CruiseItem, PartnerItem, DocumentCard, PersonalCard, Capitan, RewardSlider},
  methods: {
    loadMore() {
      if (this.documents.documentsCurrentItems > this.documents.documentsList.length) return;
      this.documents.documentsCurrentItems  = this.documents.documentsCurrentItems  + 1;
    },
  },
  computed: {
    companiesLoaded() {
      return this.documents.documentsList.slice(0, this.documents.documentsCurrentItems);
    },
  },
  data() {
    return {
      header: {
        filename: 'inners2/about1.png',
      },
      mainBlock: {
        img: '~/assets/img/inners2/about2.png',
        title: 'Флотилия «Рэдиссон Ройал»',
        description: 'Флотилия «Рэдиссон Ройал» на протяжении тринадцати лет развивает туристские возможности и потенциал города Москвы, стараясь привлечь внимание жителей и туристов к новому виду досуга и времяпрепровождению на Москве-реке. Флотилия выросла в знаковый московский проект, демонстрирующий потенциал города, динамичность его развития, способствуя развитию отрасли и городской инфраструктуры. Без преувеличения – служит украшением столицы.'
      },
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
          fileNames:['inners2/about4.png'],
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
          fileNames:['inners2/about3.png'],
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
          fileNames:['inners2/about5.png'],
          title: ' Круизы по Москве-реке 365 дней в году',
          svgName: 'compass2',
          infoCard: true,
          decor:false,
          text: "Уникальность Флотилии — круглогодичная навигация. " +
            "Когда русская зима сковывает льдом воды Москвы-реки, " +
            "за дело берутся яхты ледового класса Флотилии «Рэдиссон Ройал»." +
            " Жителям и гостям столицы доступно увлекательное путешествие" +
            " на яхте по заснеженной Москве-реке: хруст льда под мощным килем " +
            "и усиленным корпусом добавляет острых ощущений.",
        },
        {
          fileNames:['trams/_DSC4020_2.jpg'],
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
          name:'Батькова Юлия Дмитриевна',
          position: 'Менеджер яхт',
          experience: 2010
        },
        {
          img: 'manager/_DSC9713.png',
          name:'Грушина Анжела Александровна',
          position: 'Менеджер яхт',
          experience: 2014
        },
        {
          img: 'manager/_DSC8523.png',
          name:'Ерохина Нина Валерьевна',
          position: 'Менеджер яхт',
          experience: 2011
        },
        {
          img: 'manager/_DSC9789.png',
          name:'Муртазина Эльвира Маратовна',
          position: 'Менеджер яхт',
          experience: 2018
        },
        {
          img: 'manager/_DSC8440_1.png',
          name:'Набиева Эльмира Равильевна',
          position: 'Менеджер яхт',
          experience: 2010
        },
        {
          img: 'manager/_DSC8531.png',
          name:'Пинчукова Ольга Сергеевна',
          position: 'Менеджер яхт',
          experience: 2019
        },
        {
          img: 'manager/_DSC9690.png',
          name:'Прокина Елена Павловна',
          position: 'Менеджер яхт',
          experience: 2019
        },
        {
          img: 'manager/manager2.png',
          name:'Симонова Анастасия Александровна',
          position: 'Менеджер яхт',
          experience: 2014
        },
        {
          img: 'manager/_DSC9752.png',
          name:'Соколов Игорь Валерьевич',
          position: 'Менеджер яхт',
          experience: 2011
        },
        {
          img: 'manager/_DSC9722.png',
          name:'Чередниченко Иван Григорьевич',
          position: 'Менеджер яхт',
          experience: 2009
        },
        {
          img: 'manager/_DSC8460.png',
          name:'Чиркина Наталья Игоревна',
          position: 'Менеджер яхт',
          experience: 2015
        },
      ],
      sellers: [
        {
          img: 'manager/_DSC0171.png',
          name:'Тарушкин Андрей Александрович',
          position: 'Отдел продаж',
          experience: 2020
        },
        {
          img: 'manager/_DSC0191.png',
          name:'Фомичев Владимир Викторович',
          position: 'Отдел продаж',
          experience: 2010
        },
        {
          img: 'manager/_DSC0238.png',
          name:'Антонова Мария Алексеевна',
          position: 'Отдел продаж',
          experience: 2009
        },
        {
          img: 'manager/_DSC0203.png',
          name:'Шабалина Ульяна Закиевна',
          position: 'Отдел продаж',
          experience: 2012
        },
      ],
      documents: {
        documentsCurrentItems: 3,
        documentsList: [
          {
            name:'Юридическая информация',
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
      testCaps:[],
      testSellers:[],
      testManagers:[],
      blocks: null,
      photosSlide: []
    }
  },

  async fetch() {
    let partners = await axios.get(
        `${this.$config.baseURL}partners`);
    let blocks = await axios.get(
      `${this.$config.baseURL}blocks?page=about`);
    let captainData = await axios.get(
      `${this.$config.baseURL}personals?grp=captain`);
    let sellerData = await axios.get(
      `${this.$config.baseURL}personals?grp=seller`);
    let managerData = await axios.get(
      `${this.$config.baseURL}personals?grp=manager`);
    let vacanciesData = await axios.get(
        `${this.$config.baseURL}vacancies`);
    let documentsData = await axios.get(
        `${this.$config.baseURL}docs`);
    let photosData = await axios.get(
        `${this.$config.baseURL}photos`);
    this.testCaps = captainData.data;
    this.testSellers = sellerData.data;
    this.testManagers = managerData.data;
    this.blocks = blocks.data;
    this.partnersFetch = partners.data;
    this.vacanciesData = vacanciesData.data;
    this.documents.documentsList = documentsData.data;
    this.photosSlide = photosData.data.result
    /*this.documents.documentsCurrentItems = documentsData.data.length;*/
  },
  fetchOnServer: false,
  fetchKey: 'site-sidebar',
  updated() {
    let videoContainer = document.querySelector('#video');
    let element = document.querySelector('.yacht__slider')
    let video = videoContainer.querySelector('.video');
  },
  mounted() {
    let videoContainer = document.querySelector('#video');
    let element = document.querySelector('.yacht__slider')
    let video = videoContainer.querySelector('.video');
    let playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Automatic playback started!
        // Show playing UI.
      })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
          });
    }
    video.addEventListener('click', function (e) {
      if (video.paused) {
        console.log('play')
        videoContainer.querySelector('.playpause').style.display = 'none'
        this.$refs.video.play();
      } else {
        videoContainer.querySelector('.playpause').style.display = 'flex'
        console.log('paused')
        let playPromise = this.$refs.video.play();

        if (playPromise !== undefined) {
          playPromise.then(_ => {
            // Automatic playback started!
            // Show playing UI.
            this.$refs.video.pause();
          })
              .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
              });
        }
      }
    })
    UIkit.util.on(element, 'itemshown', function(e) {
      element.querySelector('.slider_number').textContent = (('0' + (e.detail[0].index + 1)).slice(-2));
    });
  },
}
</script>

<style scoped>
.about-advantages__info__item__svg img {
  width: 85px;
  height: 85px;
}
.play-video-btn_back img {
  width: 100px;
  height: 100px;
}
.flight:nth-child(even){
  flex-direction: row-reverse;
}
@media screen and (max-width: 959px) {
  .flight:nth-child(even) {
    flex-direction: column;
  }
}
</style>
