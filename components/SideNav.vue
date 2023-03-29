<template>
 <!-- <transition :name="homeTransition"> -->
<!--  <div id="offcanvas-nav" uk-offcanvas="overlay: true;" class="offcanvas offcanvas-menu uk-offcanvas">
    <div class="uk-offcanvas-bar">
      <div class="offcanvas_menu">

        <div class="offcanvas_main">
          <div class="headline_p1 offcanvas_main__head">
            МЕНЮ
          </div>
          <div class="uk-flex-between uk-grid-small uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2 offcanvas_main__grid uk-grid uk-grid-stack" uk-grid="">
            <div class="uk-first-column">
              <nuxt-link class="txt18 " to="/yachts">
                Яхты Флотилии
              </nuxt-link>
              <nuxt-link class="txt18 transition" to="/schedule/yacht">
                Расписание яхт
              </nuxt-link>
              <nuxt-link class="txt18 transition" to="/categories">
                Категории салонов
              </nuxt-link>
              <nuxt-link class="txt18 transition" to="/menu">
                Меню ресторанов
              </nuxt-link>
              <nuxt-link class="txt18 transition" to="/trams">
                Речные трамвайчики
              </nuxt-link>
              <nuxt-link class="txt18 transition" to="/schedule/trolley">
                Расписание трамвайчиков
              </nuxt-link>





              <div class="offcanvas_main__grid__item1__buy__tickets">
                <nuxt-link class="txt18 transition uk-hidden@m" to="/tickets/">
                  Покупка билетов
                </nuxt-link>
                <ul class="footer_nav uk-hidden@m">
                  <li>
                    <nuxt-link to="/tickets/yacht" class="transition">
                      Билеты на яхты
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/tickets/trolley" class="transition">
                      Билеты на трамвайчики
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/tickets/certificates" class="transition">
                      Подарочные сертификаты
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/" class="transition">
                      Театральные круизы
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="transition" to="/">
                      Тематические рейсы
                    </nuxt-link>
                  </li>
                </ul>
              </div>

              <nuxt-link class="txt18 transition uk-hidden@m uk-hidden@s" to="/rent">
                Аренда
              </nuxt-link>

              <nuxt-link class="txt18 transition uk-hidden@s " to="/rules">
                Правила и условия
              </nuxt-link>
              <ul class="footer_nav uk-hidden@s ">
                <li>
                  <nuxt-link to="/rules#technical" class="transition">
                    Технические характеристики
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/rules#security" class="transition">
                    Безопасноcть
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/rules#video_security" class="transition">
                    Ролики о безопасности
                  </nuxt-link>
                </li>
              </ul>

            </div>
            <div class=" uk-visible@m">
              <div class="txt18 ">
                Покупка билетов
              </div>
              <ul class="footer_nav">
                <li>
                  <nuxt-link to="/tickets/yacht" class="transition">
                    Билеты на яхты
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/tickets/trolley" class="transition">
                    Билеты на трамвайчики
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/tickets/certificates" class="transition">
                    Подарочные сертификаты
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/" class="transition">
                    Театральные круизы
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="transition" to="/">
                    Тематические рейсы
                  </nuxt-link>
                </li>
              </ul>
              <nuxt-link class="txt18 transition offcanvas_menu__link1" to="/rent">
                Аренда
              </nuxt-link>

            </div>
            <div>

              &lt;!&ndash; <a class="txt18 transition uk-hidden@m uk-visible@s" href="/rules.html">
                Правила и условия
              </a>
              <ul class="footer_nav uk-hidden@m uk-visible@s">
                <li>
                  <a href="/rules.html" class="transition">
                    Технические характеристики
                  </a>
                </li>
                <li>
                  <a href="/rules.html" class="transition">
                    Безопасноcть
                  </a>
                </li>
                <li>
                  <a href="/rules.html" class="transition">
                    Ролики о безопасности
                  </a>
                </li>
              </ul>
               &ndash;&gt;
              <nuxt-link class="txt18 transition" to="/news">
                Новости и акции
              </nuxt-link>
              <ul class="footer_nav">
                <li>
                  <nuxt-link to="/news" class="transition">
                    Все
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/news" class="transition">
                    Новости
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/news" class="transition">
                    Акции
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/news"  class="transition">
                    События
                  </nuxt-link>
                </li>
              </ul>
              <nuxt-link class="txt18 transition uk-hidden@m uk-visible@s" to="/rent" >
                Аренда
              </nuxt-link>
              <nuxt-link class="txt18 transition uk-visible@s" to="/rules" >
                Правила и условия
              </nuxt-link>
              <ul class="footer_nav uk-visible@s">
                <li>
                  <nuxt-link to="/rules#technical"  class="transition">
                    Технические характеристики
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/rules#security"  class="transition">
                    Безопасноcть
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/rules#video_security" class="transition">
                    Ролики о безопасности
                  </nuxt-link>
                </li>
              </ul>

              <nuxt-link class="txt18 transition uk-hidden@s" to="/about">
                О компании
              </nuxt-link>
              <ul class="footer_nav uk-hidden@s">
                &lt;!&ndash; <li>
                  <a href="/about.html#sroll-about;119" class="transition">
                    О нас
                  </a>
                </li> &ndash;&gt;

                <li>
                  <nuxt-link to="/about#people" class="transition">
                    Сотрудники компании
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#photo" class="transition">
                    Фотогалерея&nbsp;
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/about#video" class="transition">
                    Видео
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#rewards" class="transition">
                    Награды
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#vacancy" class="transition">
                    Вакансии
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#document" class="transition">
                    Документы
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link  to="/about#partners" class="transition">
                    Партнеры
                  </nuxt-link>
                </li>
              </ul>
              <nuxt-link class="txt18 transition uk-hidden@s" to="/contacts">
                Контакты
              </nuxt-link>

            </div>
            <div class="uk-visible@s">
              <nuxt-link class="txt18 transition" to="/about">
                О компании
              </nuxt-link>
              <ul class="footer_nav">
                &lt;!&ndash; <li>
                  <a href="/about.html#sroll-about;119" class="transition">
                    О нас
                  </a>
                </li> &ndash;&gt;

                <li>
                  <nuxt-link to="/about#people" class="">
                    Сотрудники компании
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#photo" class="">
                    Фотогалерея&nbsp;
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#video" class="">
                    Видео
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#rewards" class="">
                    Награды
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#vacancy" class="">
                    Вакансии
                  </nuxt-link>
                </li>
                &lt;!&ndash; <li>
                  <a href="/about.html#document;119" class="transition">
                    Документы
                  </a>
                </li>
                <li>
                  <a href="/about.html#partners;119" class="transition">
                    Партнеры
                  </a>
                </li> &ndash;&gt;
              </ul>
              <nuxt-link class="txt18 transition offcanvas_menu__link2 uk-offcanvas-close" to="/contacts">
                Контакты
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="offcanvas_bottom">
          <div class="footer__bottom ">
            <div class="uk-grid-small uk-flex-middle uk-grid uk-grid-stack" uk-grid="">
              <div class="footer__bottom_item1 uk-width-1-4@m uk-width-auto@s uk-width-1-1 uk-first-column">
                <div>© 2021, Флотилия «Рэдиссон Ройал, Москва»</div>
                <a href="/politic.html" class="transition footer__bottom_item2__link uk-hidden@m">
                  Политика конфеденциальности
                </a>
              </div>
              <div class="footer__bottom_item2  uk-width-1-4 uk-visible@m">
                <a href="/politic.html" class="transition">
                  Политика конфеденциальности
                </a>
              </div>
              <div class="footer__bottom_item4  uk-width-auto@s">
&lt;!&ndash;                <div class="social_links ">
                  <a href="" target="_blank">
                    <svg class="icon">
                      <use xlink:href="#facebook"></use>
                    </svg>
                  </a>
                  <a href="" target="_blank">
                    <svg class="icon">
                      <use xlink:href="#ticket"></use>
                    </svg>
                  </a>
                  <a href="" target="_blank">
                    <svg class="icon">
                      <use xlink:href="#grid"></use>
                    </svg>
                  </a>
                  <a href="" target="_blank">
                    <svg class="icon">
                      <use xlink:href="#you"></use>
                    </svg>
                  </a>
                </div>&ndash;&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>-->
  <div id="offcanvas-nav" uk-offcanvas="overlay: true;" class="offcanvas offcanvas-menu uk-offcanvas display-block" :class="[{' uk-offcanvas-overlay uk-open display-block-on ':isActive},{' display-block-off':!isActive}]" v>
    <div class="uk-offcanvas-bar side-slide" :class="[{'slide-on ':isActive},{'slide-off uk-offcanvas-bar-animation uk-offcanvas-slide':!isActive}]">
      <div class="offcanvas_menu">

<!--        <div class="offcanvas_main">
          &lt;!&ndash;          <div class="headline_p1 offcanvas_main__head">
            МЕНЮ
          </div>&ndash;&gt;
          <div class="uk-flex-between uk-grid-small uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2 offcanvas_main__grid uk-grid uk-grid-stack" uk-grid="">
            <div class="uk-first-column">
              <nuxt-link class="txt18 " to="/yachts/">
                Яхты Флотилии
              </nuxt-link>
              <nuxt-link class="txt18 " to="/yachts/schedule/">
                Расписание яхт
              </nuxt-link>
              <nuxt-link class="txt18 " to="/categories/">
                Категории салонов
              </nuxt-link>
              <nuxt-link class="txt18 " to="/menu/">
                Меню ресторанов
              </nuxt-link>
&lt;!&ndash;              <nuxt-link class="txt18 " to="/trams/">
                Речные трамвайчики
              </nuxt-link>
              <nuxt-link class="txt18 " to="/trams/schedule/">
                Расписание трамвайчиков
              </nuxt-link>&ndash;&gt;
              <div class="offcanvas_main__grid__item1__buy__tickets">
                <nuxt-link class="txt18 transition uk-hidden@m" to="/tickets/">
                  Покупка билетов
                </nuxt-link>
                <ul class="footer_nav uk-hidden@m">
                  <li>
                    <nuxt-link to="/yachts/schedule/" class="">
                      Билеты на яхты
                    </nuxt-link>
                  </li>
&lt;!&ndash;                  <li>
                    <nuxt-link to="/trams/tickets/" class="">
                      Билеты на трамвайчики
                    </nuxt-link>
                  </li>&ndash;&gt;
                  <li>
                    <nuxt-link to="/certificates/" class="">
                      Подарочные сертификаты
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/theatrical/" class="">
                      Театральные круизы
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="" to="/flights/">
                      Тематические рейсы
                    </nuxt-link>
                  </li>
                </ul>
              </div>

              <nuxt-link class="txt18 transition uk-hidden@m uk-hidden@s uk-offcanvas-close" to="/rent/">
                Аренда
              </nuxt-link>

              <nuxt-link class="txt18 transition uk-hidden@s uk-offcanvas-close" to="/rules/">
                Правила и условия
              </nuxt-link>
              <ul class="footer_nav uk-hidden@s ">
                <li>
                  <nuxt-link to="/rules#technical" class="">
                    Технические характеристики
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/rules#security" class="">
                    Безопасноcть
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/rules#video_security" class="">
                    Ролики о безопасности
                  </nuxt-link>
                </li>
              </ul>

            </div>
            <div class=" uk-visible@m">
              <div class="txt18 ">
                Покупка билетов
              </div>
              <ul class="footer_nav">
                <li>
                  <nuxt-link to="/yachts/schedule/" class="">
                    Билеты на яхты
                  </nuxt-link>
                </li>
&lt;!&ndash;                <li>
                  <nuxt-link to="/trams/tickets/" class="">
                    Билеты на трамвайчики
                  </nuxt-link>
                </li>&ndash;&gt;
                <li>
                  <nuxt-link to="/certificates/" class="">
                    Подарочные сертификаты
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/theatrical/" class="">
                    Театральные круизы
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/flights/">
                    Тематические рейсы
                  </nuxt-link>
                </li>
              </ul>
              <nuxt-link class="txt18 transition offcanvas_menu__link1 uk-offcanvas-close" to="/rent/">
                Аренда
              </nuxt-link>

            </div>
            <div>

              &lt;!&ndash; <a class="txt18 transition uk-hidden@m uk-visible@s" href="/rules.html">
                Правила и условия
              </a>
              <ul class="footer_nav uk-hidden@m uk-visible@s">
                <li>
                  <a href="/rules.html" class="transition">
                    Технические характеристики
                  </a>
                </li>
                <li>
                  <a href="/rules.html" class="transition">
                    Безопасноcть
                  </a>
                </li>
                <li>
                  <a href="/rules.html" class="transition">
                    Ролики о безопасности
                  </a>
                </li>
              </ul>
               &ndash;&gt;
              <nuxt-link class="txt18 " to="/news/">
                Новости и акции
              </nuxt-link>
              <ul class="footer_nav">
&lt;!&ndash;                <li>
                  <nuxt-link to="/news/" class="">
                    Все
                  </nuxt-link>
                </li>&ndash;&gt;
                <li>
                  <nuxt-link to="/news/" class="">
                    Новости
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/news/" class="">
                    Акции
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/news/"  class="">
                    События
                  </nuxt-link>
                </li>
              </ul>
              <nuxt-link class="txt18 transition uk-hidden@m uk-visible@ uk-offcanvas-close" to="/rent/" >
                Аренда
              </nuxt-link>
              <nuxt-link class="txt18 transition uk-visible@s uk-offcanvas-close" to="/rules/" >
                Правила и условия
              </nuxt-link>
              <ul class="footer_nav uk-visible@s uk-offcanvas-close">
                <li>
                  <nuxt-link to="/rules#technical"  class="">
                    Технические характеристики
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/rules#security"  class="">
                    Безопасноcть
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/rules#video_security" class="">
                    Ролики о безопасности
                  </nuxt-link>
                </li>
              </ul>

              <nuxt-link class="txt18 transition uk-hidden@s uk-offcanvas-close" to="/about/">
                О компании
              </nuxt-link>
              <ul class="footer_nav uk-hidden@s">
                &lt;!&ndash; <li>
                  <a href="/about.html#sroll-about;119" class="transition">
                    О нас
                  </a>
                </li> &ndash;&gt;

                <li>
                  <nuxt-link to="/about#people" class="">
                    Сотрудники компании
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#photo" class="">
                    Фотогалерея&nbsp;
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/about#video" class="">
                    Видео
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#rewards" class="">
                    Награды
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#vacancy" class="">
                    Вакансии
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#document" class="">
                    Документы
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link  to="/about#partners" class="">
                    Партнеры
                  </nuxt-link>
                </li>
              </ul>
              <nuxt-link class="txt18 transition uk-hidden@s uk-offcanvas-close" to="/contacts/">
                Контакты
              </nuxt-link>

            </div>
            <div class="uk-visible@s">
              <nuxt-link class="txt18 " to="/about/" @click.native="closeNav">
                О компании
              </nuxt-link>
              <ul class="footer_nav">
                &lt;!&ndash; <li>
                  <a href="/about.html#sroll-about;119" class="transition">
                    О нас
                  </a>
                </li> &ndash;&gt;

                <li>
                  <nuxt-link to="/about#people" class="">
                    Сотрудники компании
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#photo" class="">
                    Фотогалерея&nbsp;
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#video" class="">
                    Видео
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#rewards" class="">
                    Награды
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#vacancy" class="">
                    Вакансии
                  </nuxt-link>
                </li>
                &lt;!&ndash; <li>
                  <a href="/about.html#document;119" class="transition">
                    Документы
                  </a>
                </li>
                <li>
                  <a href="/about.html#partners;119" class="transition">
                    Партнеры
                  </a>
                </li> &ndash;&gt;
              </ul>
              <nuxt-link class="txt18 transition offcanvas_menu__link2 uk-offcanvas-close" to="/contacts/">
                Контакты
              </nuxt-link>
            </div>
          </div>
        </div>-->
        <div class="offcanvas_main">
          <div class="headline_p1 offcanvas_main__head">

          </div>
          <div class="uk-flex-between uk-grid-small uk-child-width-1-2 offcanvas_main__grid uk-hidden@m uk-grid" uk-grid="">
            <div class="uk-first-column">
              <nuxt-link class="txt18 " to="/yachts/" @click.native="closeNav">
                Яхты Флотилии
              </nuxt-link>
              <nuxt-link class="txt18 " to="/categories/" @click.native="closeNav">
                Категории салонов
              </nuxt-link>
              <nuxt-link class="txt18 " to="/yachts/schedule/" @click.native="closeNav">
                Билеты на яхты
              </nuxt-link>
              <nuxt-link class="txt18 " to="/theatrical/" @click.native="closeNav">
                Театральные круизы
              </nuxt-link>
              <nuxt-link class="txt18 " to="/flights/" @click.native="closeNav">
                Тематические рейсы
              </nuxt-link>
              <nuxt-link class="txt18 " to="/about/" @click.native="closeNav">
                О компании
              </nuxt-link>
              <nuxt-link class="txt18 " to="/rules/" @click.native="closeNav">
                Правила и условия
              </nuxt-link>
            </div>
            <div>
              <nuxt-link class="txt18 " to="/yachts/schedule/" @click.native="closeNav">
                Расписание яхт
              </nuxt-link>
              <nuxt-link class="txt18 " to="/menu/" @click.native="closeNav">
                 Меню ресторанов
              </nuxt-link>
              <nuxt-link class="txt18 " to="/certificates/" @click.native="closeNav">
                Подарочные сертификаты
              </nuxt-link>
              <nuxt-link class="txt18 " to="/rent/" @click.native="closeNav">
                Аренда
              </nuxt-link>
              <nuxt-link class="txt18 " to="/news/" @click.native="closeNav">
                Новости и акции
              </nuxt-link>
              <nuxt-link class="txt18 " to="/contacts/" @click.native="closeNav">
                Контакты
              </nuxt-link>
            </div>
          </div>
          <div class="uk-flex-between uk-grid-small uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2 offcanvas_main__grid uk-visible@m uk-grid uk-grid-stack" uk-grid="">
            <div class="uk-first-column">
              <nuxt-link class="txt18 " to="/yachts/" @click.native="closeNav">
                Яхты Флотилии
              </nuxt-link>
              <nuxt-link class="txt18 " to="/yachts/schedule/" @click.native="closeNav">
                Расписание яхт
              </nuxt-link>
              <nuxt-link class="txt18 " to="/categories/" @click.native="closeNav">
                Категории салонов
              </nuxt-link>
              <nuxt-link class="txt18 " to="/menu/" @click.native="closeNav">
                Меню ресторанов
              </nuxt-link>




              <div class="offcanvas_main__grid__item1__buy__tickets">

              </div>





            </div>
            <div class=" ">
              <div class="txt18 ">
                Покупка билетов
              </div>
              <ul class="footer_nav">
                <li>
                  <nuxt-link class="" to="/yachts/schedule/" @click.native="closeNav">
                    Билеты на яхты
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/certificates/" @click.native="closeNav">
                    Подарочные сертификаты
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/theatrical/" @click.native="closeNav">
                    Театральные круизы
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/flights/" @click.native="closeNav">
                    Тематические рейсы
                  </nuxt-link>
                </li>
              </ul>
              <nuxt-link class="txt18 " to="/rent/" @click.native="closeNav">
                Аренда
              </nuxt-link>
            </div>
            <div>
              <nuxt-link class="txt18 " to="/news/" @click.native="closeNav">
                Новости и акции
              </nuxt-link>
              <ul class="footer_nav">

                <li>
                  <nuxt-link class="" to="/news/?grp=article" @click.native="closeNav">
                    Новости
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/news/?grp=action" @click.native="closeNav">
                    Акции
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="" to="/news/?grp=event" @click.native="closeNav">
                    События
                  </nuxt-link>
                </li>
              </ul>
              <nuxt-link class="txt18  uk-visible@s" to="/rules/" @click.native="closeNav">
                Правила и условия
              </nuxt-link>
              <ul class="footer_nav uk-visible@s">
                <li>
                  <nuxt-link :to="{ path: '/rules', hash: '#rules-performance'}" replace class="" @click.native="closeNav">
                    Технические характеристики
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/rules', hash: '#rules-security'}" replace  class="" @click.native="closeNav">
                    Безопасноcть
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/rules', hash: '#rules-security-video'}" replace class="" @click.native="closeNav">
                    Ролики о безопасности
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="uk-visible@s">
              <nuxt-link class="txt18 " to="/about/" @click.native="closeNav">
                О компании
              </nuxt-link>
              <ul class="footer_nav">
                <!-- <li>
                  <a href="/about.html#sroll-about;119" class="transition">
                    О нас
                  </a>
                </li> -->

                <li>
                  <nuxt-link :to="{ path: '/about', hash: '#cap'}" replace class="" @click.native="closeNav">
                    Сотрудники компании
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/about', hash: '#gallery'}" replace class="" @click.native="closeNav">
                    Фотогалерея&nbsp;
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/about', hash: '#video'}" replace class="" @click.native="closeNav">
                    Видео
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/about', hash: '#rewards'}" replace class="" @click.native="closeNav">
                    Награды
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/about', hash: '#job'}" replace class="" @click.native="closeNav">
                    Вакансии
                  </nuxt-link>
                </li>
                <!-- <li>
                  <a href="/about.html#document;119" class="transition">
                    Документы
                  </a>
                </li>
                <li>
                  <a href="/about.html#partners;119" class="transition">
                    Партнеры
                  </a>
                </li> -->
              </ul>
              <nuxt-link class="txt18 transition offcanvas_menu__link2 uk-offcanvas-close" to="/contacts/" @click.native="closeNav">
                Контакты
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="offcanvas_bottom">
          <div class="footer__bottom ">
            <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div class="footer__bottom_item1 uk-width-1-4@m uk-width-auto@s uk-width-1-1 uk-first-column">
                <div> © 2023, Флотилия “Рэдиссон Ройал”</div>
                <nuxt-link to="/politic/" class="transition footer__bottom_item2__link uk-hidden@m uk-offcanvas-close"  @click.native="closeNav">
                  Политика конфеденциальности
                </nuxt-link>
              </div>
              <div class="footer__bottom_item2  uk-width-1-4 uk-visible@m">
                <nuxt-link to="/politic/" class=""  @click.native="closeNav">
                  Политика конфиденциальности
                </nuxt-link>
              </div>
              <div class="footer__bottom_item4  uk-width-auto@s">
<!--                <div class="social_links">
                  <a href="" target="_blank" class="uk-offcanvas-close">
                    <svg-icon name="facebook" class="icon"/>
                  </a>
                  <a href="" target="_blank"  class="uk-offcanvas-close">
                    <svg-icon name="vkontakte" class="icon"/>
                  </a>
                  <a href="" target="_blank"  class="uk-offcanvas-close">
                    <svg-icon name="inst_soc" class="icon"/>
                  </a>
                  <a href="" target="_blank"  class="uk-offcanvas-close">
                    <svg-icon name="you" class="icon"/>
                  </a>
                </div>-->
                <SocialBlock/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- </transition> -->
</template>

<script>
import SocialBlock from "./SocialBlock";
export default {
  name: "SideNav",
  components: {SocialBlock},
  computed: {
    isActive () {
      return this.$store.state.showNav
    },
  },
  watch: {
    isActive (val) {
      if (val) {
        
          //console.log('home-right')
          this.homeTransition = 'home-right'
        
      } else {
        
          //console.log('home-left')
          this.homeTransition = 'home-left'
        
      
    }
  },
  },
  methods: {
    closeNav() {
      console.log('yes')
      this.$store.commit('changeNavState', false)
      document.body.classList.remove('uk-offcanvas-page')
    },
  },
  transition: {
    name: 'home-right',
    mode: 'out-in'
  },
  data() {
    return {
      homeTransition: 'home-right',
    }
  }
}
</script>

<style scoped>
.uk-offcanvas-close:hover {
  color: #00c1f3;
}
/*
.uk-offcanvas-bar {
  background: url('~assets/img/inners/back_menu.png') center center/cover no-repeat,#1d2240;
  width: 100%;
  padding: 0;
}

.offcanvas_menu {
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 150px 40px 65px;
}

.offcanvas_main {
  margin-bottom: 60px;
}
.offcanvas_main {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-top: none;
}

.offcanvas_bottom {
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
}

.offcanvas_bottom .footer__bottom {
  padding-top: 60px;
  border-top: 1px solid rgba(255,255,255,.25);
  color: #fff;
  display: block;
}

.footer__bottom {
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  align-items: center;
  color: rgba(255,255,255,.5);
  border-top: 1px solid #5c66a5;
}

.offcanvas_main__head {
  border-bottom: 1px solid rgba(255,255,255,.25);
  padding-bottom: 50px;
  margin-bottom: 90px;
}
.headline_p1 {
  font-size: 66px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.2;
  font-family: cowor,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}

.offcanvas_main__grid .txt18 {
  display: block;
  font-weight: 700;
}

.offcanvas_main__grid .txt18+.txt18 {
  margin-top: 35px;
}

.footer_nav {
  list-style: none;
  margin: 20px 0 51px;
  padding: 0;
  font-size: 12px;
}

.footer_nav li {
  margin-top: 13px;
}
.offcanvas_main__grid>div:nth-child(2)>:last-child {
  margin-top: 121px;
}*/
.display-block{
  display: block;
  transition: width 0.4s ease-out;
}
.display-block-on {
  
  width: 100%;
}
.display-block-off {
  width: 0%;
  
}
.side-slide{
  width: 100%;
  transition: left 0.3s ease-out;
}
.slide-on{
  left:0;
}
.slide-off{
  left:-100vw;
}
.uk-offcanvas-close {
  position: static;
}

.home-enter-active, 
.home-leave-active { 
  transition: opacity .5s; 
}
/* we will explain what these classes do next! */
.home-left-leave-active,
.home-left-enter-active,
.home-right-leave-active,
.home-right-enter-active {
  transition: all 15.3s;
}


.home-left-enter {
  transform: translate(100vw, 0);
}
.home-left-enter-to {
  transform: translate(-100vw, 0);
}

.home-left-leave-to {
  transform: translate(-100vw, 0);
}

.home-right-enter {
  transform: translate(-100vw, 0);
}
.home-right-enter-to {
  transform: translate(0, 0);
}

.home-right-leave-to {
  transform: translate(100vw, 0);
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* .nav-menu-off{
  transform: translate(-100vw, 0);
}
.nav-menu-on{
  transform: translate(0, 0);
} */

</style>
