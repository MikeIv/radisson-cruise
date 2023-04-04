<template>
<!--  <footer class="footer uk-flex">
    <div class="footer_left">
      <div
        class="uk-cover-container footer_left-img&#45;&#45;container uk-scrollspy-inview uk-animation-slide-bottom"
        uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400"
      >
        <img
          data-src="~/assets/img/main/vv.png"
          src="~/assets/img/main/vv.png"
          alt=""
          class="footer_img uk-scrollspy-inview uk-animation-slide-bottom"
          uk-scrollspy="cls: uk-animation-slide-bottom; delay: 1000"
        />
      </div>
    </div>
    <div class="footer_right">
      <div class="footer_right-title">
        <span class="footer_right-headline">Остались вопросы?</span>
        <span class="footer_right-headline">Оставьте заявку</span>
      </div>
      <span class="footer_questions">Наши специалисты ответят на интересующий вас вопрос</span>
      &lt;!&ndash;        <form action="" class="footer_right-form">
          <div class="footer_form-top">
            <input type="text" placeholder="ФИО">
            <input type="text" placeholder="Телефон">
          </div>
          <div class="footer_form-bottom">
            <input type="text" placeholder="Ваше сообщение">
          </div>
          <label for="">
            <input type="checkbox" name="" id="">
            <span>Согласие на обработку персональных данных</span>
          </label>
          <button type="submit">Отправить сообщшение</button>
        </form>&ndash;&gt;
      <form action="" class="footer_form uk-scrollspy-inview uk-animation-fade">
        <div class="uk-width-1-2@m footer__form_input">
            <input type="text" class="uk-input" placeholder="ФИО" required="" />
          </div>
        <div class="uk-width-1-2@m footer__form_input">
            <input
              type="text"
              class="uk-input f_phone"
              placeholder="Телефон"
              required=""
              inputmode="text"
            />
          </div>
        <div class="uk-width-1-1 footer__form_input">
            <input type="text" class="uk-input" placeholder="Ваше сообщение" />
          </div>
        <div class="uk-width-1-1 footer__form_polit">
            <div class="form_politic">
              <label>
                <input class="uk-checkbox" type="checkbox" @change="checkAgree" />
                <span class="">
                  Согласие на обработку
                  <a href="/politic.html" class="" target="_blank"
                    >персональных данных</a
                  >
                </span>
              </label>
            </div>
          </div>
        <div class="uk-width-1-2@m uk-width-expand@s footer__form_btn">
          <button type="submit" class="uk-button uk-button-default" id="submitv" disabled="">
            <span>ОТПРАВИТЬ СООБЩЕНИЕ</span>
          </button>
        </div>
      </form>
      <ul class="footer__nav uk-scrollspy-inview uk-animation-fade">
          <li class="footer__nav_item1">
            <a href="/schedule/yacht">
              Расписание
            </a>
            <a href="/rent">
              Аренда
            </a>
            <a href="/menu">
              Меню ресторанов
            </a>
            <a href="/tickets/trolley" class="uk-hidden@s">
              Купить билеты
            </a>
            <a href="/rules" class="uk-hidden@s">
              Осторожно мошенники
            </a>
          </li>
          <li class="footer__nav_item2">
            <a href="/news">
              Новости и акции
            </a>
            <a href="/about">
              О компании
            </a>
            <a href="/contacts">
              Контакты
            </a>
            <a href="/rules#health" class="uk-hidden@s">
              Безопасность
            </a>
          </li>
          <li class="footer__nav_item3 uk-visible@s">
            <a href="/tickets/trolley">
              Купить билеты
            </a>
            <a href="/rules">
              Осторожно мошенники
            </a>
            <a href="/rules#technical">
              Безопасность
            </a>
          </li>
        </ul>
      <div class="footer__information uk-scrollspy-inview uk-animation-fade" style="">
          <div class="footer__information_item1 uk-visible@s">
            <a href="" class="transition">

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
          </div>
        </div>
      <div class="footer__information_item3">
          <a class="header_call" href="tel:+7 (495) 228-55-55">
            <svg class="icon">
              <use xlink:href="#call"></use>
            </svg>
            <span>+7 (495) 228-55-55 </span>
          </a>
          <a
            class="footer__information_item3-mail"
            href="mailto: info@radisson-cruise.ru"
          >
            info@radisson-cruise.ru
          </a>
      </div>
      <div
        class="footer__bottom uk-scrollspy-inview uk-animation-fade"
        style=""
      >
        <div class="footer__bottom_item1">
          © 2021, Флотилия «Рэдиссон Ройал, Москва»
        </div>
        <div class="footer__bottom_item2">
          <a href="/politic.html" class="transition">
            Политика конфеденциальности
          </a>
        </div>
        <div class="footer__bottom_item3">
          <a class="footer__bottom_arr uk-visible@s" href="#" uk-scroll=""
            >12312
            <svg class="icon">
              <use xlink:href="#arrow5"></use>
            </svg>
          </a>
        </div>
      </div>
      &lt;!&ndash;        <div class="footer_links">
          <div class="footer_links-item">
            <a href="" class="footer_link">
              Расписание
            </a>
            <a href="" class="footer_link">
              Аренда
            </a>
            <a href="" class="footer_link">
              Меню ресторанов
            </a>
          </div>
          <div class="footer_links-item">
            <a href="" class="footer_link">
              Новости и акции
            </a>
            <a href="" class="footer_link">
              О компании
            </a>
            <a href="" class="footer_link">
              Контакты
            </a>
          </div>
          <div class="footer_links-item">
            <a href="" class="footer_link">
              Купить билеты
            </a>
            <a href="" class="footer_link">
              Осторожно мошенники
            </a>
            <a href="" class="footer_link">
              Безопасность
            </a>
          </div>
        </div>
        <div class="footer_social">
          <div class="footer_logo">123</div>
          <div class="footer_social-items">
            <span class="footer_social-head">Мы в соц.сетях</span>
            <div class="footer_social-item">1</div>
            <div class="footer_social-item">2</div>
            <div class="footer_social-item">3</div>
            <div class="footer_social-item">4</div>
          </div>
          <div class="footer_contact">
            <a class="" href="tel:74952285555">
              <span>somesvg</span>
              <span>+7 (495) 228-55-55</span>
            </a>
            <a class="" href="mailto:info@radisson-cruise.ru">
              <span>info@radisson-cruise.ru</span>
            </a>
          </div>
        </div>
        <div class="footer_credit">
          <div class="footer_copy">© 2021, Флотилия «Рэдиссон Ройал, Москва»</div>
          <div class="footer_politic">Политика конфеденциальности</div>
          <a href="#my-id" uk-scroll>toTOP</a>
        </div>&ndash;&gt;
    </div>
  </footer>-->
  <div>
    <footer class="uk-flex">
      <div class="uk-cover-container footer__left uk-visible@l">
        <div class="uk-cover-container footer__left_img-container uk-scrollspy-inview uk-animation-slide-bottom" uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400">
          <img data-src="~/assets/img/footer_yacht.png" src="~/assets/img/footer_yacht.png" alt="" class="img_cover uk-scrollspy-inview uk-animation-slide-bottom" uk-scrollspy="cls: uk-animation-slide-bottom; delay: 1000">
        </div>
      </div>
      <div class="footer__right" uk-scrollspy="target: > *; cls: uk-animation-fade; delay: 200">
<!--        <div class="headline uk-scrollspy-inview uk-animation-fade">
          <div class="headline_p2">
            Остались вопросы?
          </div>
          <div class="headline_p2">
            Оставьте заявку!
          </div>
        </div>
        <div class="footer_p1 uk-scrollspy-inview uk-animation-fade">
          Наши специалисты ответят на интересующий вас вопрос
        </div>
        <form action="" class="footer__form uk-scrollspy-inview uk-animation-fade">
          <div class="uk-width-1-2@m footer__form_input">
            <input type="text" class="uk-input" placeholder="ФИО" required="">
          </div>
          <div class="uk-width-1-2@m footer__form_input">
            <input v-imask="maskTel" type="text" class="uk-input f_phone" placeholder="Телефон" required="" inputmode="text">
          </div>
          <div class="uk-width-1-1 footer__form_input">
            <input type="text" class="uk-input" placeholder="Ваше сообщение">
          </div>
          <div class="uk-width-1-1 footer__form_polit">
            <div class="form_politic">
              <label>
                <input class="uk-checkbox" type="checkbox" @change="checkAgree">
                <span class="">
                Согласие на обработку <nuxt-link to="/politic" class="">персональных данных</nuxt-link>
              </span>
              </label>
            </div>
          </div>
          <div class="uk-width-1-2@m uk-width-auto footer__form_captcha">
&lt;!&ndash;            <script src="https://www.google.com/recaptcha/api.min.js"></script>&ndash;&gt;
            <div class="captcha modal-call_captcha">
              <b class="text-danger red recaptchaError2" id="recaptchaError2"></b>
              <div class="g-recaptcha" data-sitekey="6LcfxsAZAAAAABWYUWwGXhgN0ipealBdXburfZ0z" data-theme="dark"></div>
            </div>
          </div>
          <div class="uk-width-1-2@m uk-width-expand@s footer__form_btn">
            <button type="submit" class="uk-button uk-button-default" id="submitv" disabled="">
              <span>ОТПРАВИТЬ СООБЩЕНИЕ</span>
            </button>
          </div>
        </form>-->
        <div class="mailing__block uk-scrollspy-inview uk-animation-fade" style="">
          <div class="mailing__left">
            <img src="~assets/img/svg/mail.svg" alt="" uk-svg>
            <div class="headline_p1">
              РАССЫЛКА НОВОСТЕЙ
            </div>
          </div>
          <form class="mailing__form" action="" id="mailing__form" autocomplete="off">
            <input v-model="newsEmail" type="email" required="" name="f_mail" class="uk-input" placeholder="Адрес вашей электронной почты">
            <button @click.prevent="subscribeEmail" class="mailing__btn" type="submit">
<!--              <svg-icon src="~assets/img/svg/arrow2.svg" alt="" uk-svg>-->
              <svg-icon name="arrow"/>
            </button>
          </form>
          <div v-if="onError" class="text-error uk-margin-top">{{onError}}</div>
        </div>
        <ul class="footer__nav uk-scrollspy-inview uk-animation-fade">
          <li class="footer__nav_item1">
            <nuxt-link to="/yachts/schedule/">
              Расписание
            </nuxt-link>
            <nuxt-link to="/rent/">
              Аренда
            </nuxt-link>
            <nuxt-link to="/menu/">
              Меню ресторанов
            </nuxt-link>
            <nuxt-link to="/yachts/schedule/" class="uk-hidden@s">
              Купить билеты
            </nuxt-link>
            <nuxt-link to="/news/388/" class="uk-hidden@s">
              Осторожно, мошенники
            </nuxt-link>
          </li>
          <li class="footer__nav_item2">
            <nuxt-link to="/news/">
              Новости и акции
            </nuxt-link>
            <nuxt-link to="/about/">
              О компании
            </nuxt-link>
            <nuxt-link to="/contacts/">
              Контакты
            </nuxt-link>
            <nuxt-link :to="{path: '/rules', hash: '#rules-security'}" replace class="uk-hidden@s">
              Безопасность
            </nuxt-link>
            <nuxt-link to="/refund/" class="uk-hidden@s">
              Возврат билетов
            </nuxt-link>
          </li>
          <li class="footer__nav_item3 uk-visible@s">
            <nuxt-link to="/yachts/schedule/">
              Купить билеты
            </nuxt-link>
            <nuxt-link to="/news/388/">
              Осторожно, мошенники
            </nuxt-link>
            <nuxt-link :to="{path: '/rules', hash: '#rules-security'}" replace>
              Безопасность
            </nuxt-link>
            <nuxt-link to="/refund/">
              Возврат билетов
            </nuxt-link>
          </li>
        </ul>
        <div class="footer__information uk-scrollspy-inview uk-animation-fade">
          <div class="footer__information_item1 uk-visible@s">
            <nuxt-link to="/" class="transition">
              <img src="~assets/img/svg/logo.svg" alt="" class="" uk-svg>
            </nuxt-link>
          </div>
          <div class="footer__information_item2">
            <div class="footer__information_item2-txt">Мы в соц.сетях</div>
            <SocialBlock/>
          </div>
          <div class="footer__information_item3">
            <a class="header_call " :href="`tel:${footerSocial.tel}`">
              <img src="~assets/img/svg/call.svg" alt="" class="" uk-svg>
              <span>{{ footerSocial.tel }}</span>
            </a>
            <a class="footer__information_item3-mail" :href="`mailto: ${footerSocial.email}`">
              {{ footerSocial.email }}
            </a>
          </div>
        </div>
        <div class="footer__bottom uk-scrollspy-inview uk-animation-fade">
          <div class="footer__bottom_item1">
            © 2023, Флотилия “Рэдиссон Ройал”
          </div>
          <div class="footer__bottom_item2">
            <nuxt-link to="/politic" class="transition">
              Политика конфеденциальности
            </nuxt-link>
          </div>
          <div class="footer__bottom_item3">
            <a href="//o-d.one/" target="_blank" class="develop_rbm"><img src="//rb-media.ru/img/svg/od-white.svg" width="63" alt="OD"></a>
            <a class="footer__bottom_arr uk-visible@s" href="#" uk-scroll="">
              <img src="~assets/img/svg/arrow5.svg" alt="" class="" uk-svg>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <div id="success" class="uk-flex-top success uk-modal" uk-modal>
      <div class="uk-modal-dialog uk-margin-auto-vertical">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-body uk-position-relative">
          <h2 class="uk-modal-title">
            Сообщение отправлено
          </h2>
          <p>
            Спасибо! Актуальные акции и предложения будут направляться на указанный e-mail.
          </p>
          <div class="success_bottom">
            <a class="uk-modal-close uk-button uk-button-default">Закрыть</a>
            <svg class="icon">
              <use xlink:href="#img-logo"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div id="modal-call" class="uk-modal-full " uk-modal>
      <div class="uk-modal-dialog">
        <div class="modal_decor"></div>
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-container modal-full_container">
          <h2 class="headline_64 text-upper">
            <b>Обратная связь</b>
          </h2>
          <p class="txt18">
            Заполните поля ниже и наши менеджеры свяжутся с вами в ближайшее время
          </p>
          <div class="modal_form">
            <form class="zay_form uk-flex-between " id="zay_form" uk-grid>
              <div class="uk-width-1-2@s modal_form_block-input">
                <div class="uk-form-controls with-placeholder">
                  <input class="uk-input" type="text" placeholder="Ваше ФИО" required>
                  <span class="form_placeholder">Представтесь</span>
                </div>
              </div>
              <div class="uk-width-1-2@s modal_form_block-input">
                <div class="uk-form-controls with-placeholder">
                  <input class="uk-input " type="text" placeholder="Укажите контакт" required>
                  <span class="form_placeholder">Телефон или e-mail</span>
                </div>
              </div>
              <div class="uk-width-1-1 modal_form_block-input">
                <div class="uk-form-controls with-placeholder">
                  <textarea class="uk-textarea" type="text" placeholder="Введите сообщение"></textarea>
                  <span class="form_placeholder">Текст сообщения</span>
                </div>
              </div>
              <div class="uk-width-auto@s">
<!--                <script src="https://www.google.com/recaptcha/api.js"></script>-->
                <div class="captcha modal-call_captcha">
                  <b class="text-danger red recaptchaError2" id="recaptchaError2"></b>
                  <div class="g-recaptcha"  data-sitekey="6LcfxsAZAAAAABWYUWwGXhgN0ipealBdXburfZ0z" data-theme="dark"></div>
                </div>
              </div>
              <div class="uk-width-auto@s">
                <div class="modal_form_bottom">
                  <button type="submit" class="uk-button uk-button-default">
                    <span>ОТПРАВИТЬ</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
<!--    <div id="modal-buy-ticket-filter" class="uk-modal-full " uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-container modal-full_container">
          <div class="headline_56 text-upper">
            Фильтр
          </div>
          <div class="modal-news-filter__body">
            <form class="buy-ticket " autocomplete="off">
              <div class="buy-ticket__item">
                <svg-icon name="date" class="icon buy-ticket__item_icon1"/>
                <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
                <input class=" select-styled  litepicker" id="modal-buy-ticket-filter-datepicker" type="text" value="" placeholder="Выбрать дату">
              </div>
              <div class="buy-ticket__item">
                <svg-icon name="cat_room" class="icon buy-ticket__item_icon3"/>
                <button class="select-styled pass-btn" type="button">Выбрать причал</button>

                <div uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="pass-quantity__drop">
                  <div class="pass-quantity">
                    <div class="form_politic buy-ticket__politic">
                      <label>
                        <input class="uk-checkbox" type="checkbox" name="category__moorage">
                        <span class="">
                          Гостиница «Украина»
                        </span>
                      </label>
                      <label>
                        <input class="uk-checkbox" type="checkbox" name="category__moorage">
                        <span class="">
                          Парк Горького
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="buy-ticket__item">
                <svg-icon name="cat_room" class="icon buy-ticket__item_icon3"/>
                <button class="select-styled pass-btn" type="button">Категория салона</button>

                <div uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="pass-quantity__drop">
                  <div class="pass-quantity">
                    <div class="form_politic buy-ticket__politic">
                      <label>
                        <input class="uk-checkbox" type="checkbox" name="category__salon">
                        <span class="">
                          Основной зал
                        </span>
                      </label>
                      <label>
                        <input class="uk-checkbox" type="checkbox" name="category__salon">
                        <span class="">
                          Ройал класс
                        </span>
                      </label>
                      <label>
                        <input class="uk-checkbox" type="checkbox" name="category__salon">
                        <span class="">
                          Первый класс
                        </span>
                      </label>
                      <label>
                        <input class="uk-checkbox" type="checkbox" name="category__salon">
                        <span class="">
                          Erwin.Река
                        </span>
                      </label>
                      &lt;!&ndash; <label>
                        <input class="uk-checkbox" type="checkbox" name="category__salon">
                        <span class="">
                          Mercedes Benz
                        </span>
                      </label>
                      <label>
                        <input class="uk-checkbox" type="checkbox" name="category__salon">
                        <span class="">
                          Театарльный круиз
                        </span>
                      </label>
                      <label>
                        <input class="uk-checkbox" type="checkbox" name="category__salon">
                        <span class="">
                          Спецрейс
                        </span>
                      </label> &ndash;&gt;
                    </div>
                  </div>
                </div>
              </div>
              <div class="buy-ticket__item">
                <svg-icon name="passengers" class="icon buy-ticket__item_icon4"/>
                <button class="select-styled pass-btn" type="button">Кол-во пассажиров</button>

                <div uk-dropdown="animation: uk-animation-fade; pos: bottom-left;mode:click;" class="pass-quantity__drop">
                  <div class="pass-quantity">
                    <div class="pass-quantity__item">
                      <div class="pass-quantity__item_name">
                        Взрослый
                      </div>
                      &lt;!&ndash; Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons&ndash;&gt;
                      <div class="input-group plus-minus-input">
                        <div class="input-group-button">
                          <button type="button" class="button " data-quantity="minus" data-field="quantity">
                            -
                          </button>
                        </div>
                        <input class="input-group-field" type="number" name="quantity" value="1">
                        <div class="input-group-button">
                          <button type="button" class="button" data-quantity="plus" data-field="quantity">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="pass-quantity__item">
                      <div class="pass-quantity__item_name">
                        Детский
                      </div>
                      &lt;!&ndash; Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons&ndash;&gt;
                      <div class="input-group plus-minus-input">
                        <div class="input-group-button">
                          <button type="button" class="button " data-quantity="minus" data-field="quantity2">
                            -
                          </button>
                        </div>
                        <input class="input-group-field" type="number" name="quantity2" value="0">
                        <div class="input-group-button">
                          <button type="button" class="button " data-quantity="plus" data-field="quantity2">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="buy-ticket__item buy-ticket__item_5">
                <svg-icon name="clock3" class="icon buy-ticket__item_icon1"/>
                <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
                <input class=" select-styled  datetimepicker" id="datetimepicker-time2" type="text" value="" placeholder="Время посадки">
                <div class="datetimepicker-time2-container picker-container"></div>
              </div>
            </form>

          </div>
          <div class="modal-news-filter__footer">
            <a class="uk-button uk-button-default button_ticket uk-modal-close" href="">
              <span>НАЙТИ РЕЙС</span>
              <svg-icon name="looking_glass" class="icon"/>
            </a>
          </div>

        </div>
      </div>
    </div>-->
    <div id="modal-news-filter" class="uk-modal-full " uk-modal>
      <div class="uk-modal-dialog">

        <button class="uk-modal-close-default" type="button" uk-close></button>

        <div class="uk-container modal-full_container">
          <div class="headline_56 text-upper">
            Фильтр
          </div>
          <div class="modal-news-filter__body">
            <div class="news__navigatiom__date">
              <div class="input_archive input_archive_month">
                <div class="select">
                  <div class="select-styled">
                    Месяц
                  </div>
                  <ul class="select-options" data-filter-group>
                    <li data-filter=".mall">Все месяцы</li>
                    <li data-filter=".m1">Январь</li>
                    <li data-filter=".m2">Февраль</li>
                    <li data-filter=".m3">Март</li>
                    <li data-filter=".m4">Апрель</li>
                    <li data-filter=".m5">Май</li>
                    <li data-filter=".m6">Июнь</li>
                    <li data-filter=".m7">Июль</li>
                    <li data-filter=".m8">Август</li>
                    <li data-filter=".m9">Сентябрь</li>
                    <li data-filter=".m10">Октябрь</li>
                    <li data-filter=".m11">Ноябрь</li>
                    <li data-filter=".m12">Декабрь</li>
                  </ul>
                </div>
              </div>
              <div class="input_archive input_archive_year">
                <div class="select">
                  <div class="select-styled">
                    Год
                  </div>
                  <ul class="select-options" data-filter-group>
                    <li data-filter=".gall">Все года</li>
                    <li data-filter=".g2020">2020 год</li>
                    <li data-filter=".g2019">2019 год</li>
                    <li data-filter=".g2018">2018 год</li>
                    <li data-filter=".g2017">2017 год</li>
                    <li data-filter=".g2016">2016 год</li>
                    <li data-filter=".g2015">2015 год</li>
                    <li data-filter=".g2014">2014 год</li>
                    <li data-filter=".g2013">2013 год</li>
                    <li data-filter=".g2012">2012 год</li>
                    <li data-filter=".g2011">2011 год</li>
                    <li data-filter=".g2010">2010 год</li>
                    <li data-filter=".g2009">2009 год</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="news__navigatiom__tabs">
              <a class="uk-button button_switcher-second active" href="">ВСЕ </a>
              <a class="uk-button button_switcher-second" href="">НОВОСТИ</a>
              <a class="uk-button button_switcher-second" href="">АКЦИИ</a>
              <a class="uk-button button_switcher-second" href="">СОБЫТИЯ</a>
            </div>

          </div>
          <div class="modal-news-filter__footer">
            <a class="uk-button uk-button-default uk-modal-close" href="">
              <span>ПРИМЕНИТЬ</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { IMaskDirective } from "vue-imask";
import SocialBlock from "./SocialBlock";
import axios from "axios";
import UIkit from "uikit";
import querystring from "querystring";
export default {
  name: 'Footer',
  components: {SocialBlock},
  directives: {
    imask: IMaskDirective
  },
  ssr: false,
  data() {
    return {
      maskTel: {
        mask: '{+7}(000)-000-00-00',
        lazy: true,
      },
      topScroll: 0,
      footerSocial: {
        tel: '',
        email: '',
      },
      newsEmail: '',
      onError: null,
    }
  },
  methods: {
    async subscribeEmail() {
      let onError
      try {
        const response = await axios({
          url:`${this.$config.baseURL}subscribe`,
          /*headers: { 'Content-Type': 'application/x-www-form-urlencoded' },*/
          method: 'POST',
          /*data: querystring.stringify({
            email:this.newsEmail
          })*/
          data: {
            email:this.newsEmail
          },
        })

        const data = await response.data
        //console.log(data)
        UIkit.modal('#success').show();
        this.newsEmail = null
        this.onError = null
      } catch(e) {
        onError = e.response.data.error
        console.log(onError)
        this.onError = onError
      }
    },
    checkAgree(e) {
        document.querySelector('.footer__form_btn button').disabled =
          !e.currentTarget.checked;
      },
    checkToTop() {
        if (window.pageYOffset > 400) {
          document.querySelector('.footer__bottom_arr').style.display = 'flex'
        } else {
          document.querySelector('.footer__bottom_arr').style.display = 'none'
        }
      },
  },
  beforeMount () {
    window.addEventListener('scroll', this.checkToTop);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkToTop);
  },
  async fetch() {
    try {
      const infoData = await axios.get(`${this.$config.baseURL}textelements?code[]=phone&code[]=email`);
      this.footerSocial.tel = infoData.data.result.phone;
      this.footerSocial.email = infoData.data.result.email;
    } catch(e) {

    }
  },
  fetchOnServer: false,
  fetchKey: 'utils-info',
};
</script>

<style scoped>
.footer__bottom_arr img{
  width: 13px;
  height: 11px;
}

/*.footer__bottom_arr {
  position: fixed;
  right: 10px;
  bottom: 10px;
  background-color: #000;
  border: 2px solid #bbb;
  z-index: 300;
  display: none;
}*/

.footer__bottom_arr:hover {
  background-color: #fff;
}


.footer__information_item1 a:hover {
  color: #ffffff;
}
/*  .footer {
    display: flex;
  }
  .footer_left {
    flex: auto;
  }

  .footer_left-img--container {
    width: 100%;
    height: 100%;
    background: #00c1f3;
  }

  .footer_img {
    position: absolute;
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    transition: 1s;
  }

  .footer_right {
    width: 960px;
    padding: 67px 147px 28px 93px;
    background: #3c4892;
    color: #fff;
    background: linear-gradient(0deg, #3c4892 0, #1d2241 100%);
  }

  .footer_right-title {
    text-transform: uppercase;
    font-size: 44px;
    font-weight: 400;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    margin-bottom: 63px;
  }

  .footer_right-headline:last-child {
    color: transparent;
    margin-top: 10px;
    -webkit-text-stroke: 1px #00c1f3;
  }

  .footer_right-form {
    display: flex;
    flex-direction: column;
  }

  .footer_form {
    display: flex;
    flex-wrap: wrap;
    margin-left: -50px;
    margin-top: 15px;
  }

  .footer_form > div {
    padding-left: 50px;
  }

  .footer__form_input {
    margin-top: 25px;
  }

  .footer__form_polit {
    margin-top: 49px;
  }

  .form_politic {
    margin-top: 0;
  }

  .form_politic .uk-checkbox {
    margin-right: 26px;
    margin-top: 0;
    border: 2px solid #fff;
    background: 0 0;
    border-radius: 3px;
    position: relative;
  }

  .form_politic label {
    display: flex;
    font-size: 12px;
    color: #fff;
    font-weight: 400;
    align-items: center;
    transition: 0.2s;
  }


  .form_politic .uk-checkbox {
    margin-right: 26px;
    margin-top: 0;
    border: 2px solid #fff;
    background: 0 0;
    border-radius: 3px;
  }


  .uk-checkbox:checked:before {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 5.99px;
    border-radius: 0;
    background: url('~assets/img/main/check1.png') center center no-repeat;
    background-size: contain;
    opacity: 1;
    content: "";
    transform: translate(-50%,-50%);
  }

  .uk-input {
    padding: 0;
    font-size: 14px;
    color: #fff;
    background: 0 0;
    font-weight: 700;
    border: none;
    border-bottom: 1px solid #fff;
  }

  .footer__form_btn .uk-button:disabled {
    opacity: 0.5;
  }
  .footer__form_btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 34px;
    padding-left: 50px;
  }
  .footer__form_btn .uk-button {
    padding: 0 10px;
    background: #00c1f3;
    box-sizing: border-box;
    border-radius: 0;
    line-height: normal;
    height: 50px;
    z-index: 99;
    font-size: 12px;
    font-family: mont, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-transform: uppercase;
    border: 1px solid #00c1f3;
    min-width: 180px;
    width: 50%;
    transition: 0.2s;
  }

  .footer__nav {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 70px 0 0;
    padding: 30px 0 67px;
    font-size: 13px;
    text-decoration: underline;
    border-top: 1px solid #5c66a5;
    border-bottom: 1px solid #5c66a5;
  }*/
</style>
