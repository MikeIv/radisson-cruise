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
            {{ seoData?.header || 'Контакты' }}
          </h1>
        </div>
      </div>
    </Header>
<!--    <div
        class="contact-item uk-flex uk-flex-wrap uk-child-width-1-2@l uk-grid-match contact__grid uk-scrollspy-inview uk-animation-fade"
        uk-scrollspy="cls: uk-animation-fade; delay: 400"
        v-for="(port, index) in portsInfo"
        :key="'ctctport' + index"
    >
      <div class="contact__grid__info">
        <div class="contact-info">
          <div class="buy-ticket-form__headline__item1">
            <svg-icon class="icon" name="ancor-in-circle"/>
            <span class="headline_32 t_semibold">
              {{ port.name }}
            </span>
          </div>
          <div class="contact-info__items">
            <div class="contact-info__item">
              <div>
                <b>{{ $t('contact.payment_address') }}:</b>
              </div>
              <div>
                {{ port.address }}
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>{{ $t('metro') }}:</b>
              </div>
              <div class="trams__route__metro">
&lt;!&ndash;                <div
                    class="trams__route__metro__badge trams__route__metro__badge_brown"
                >
                  M
                </div>
                <div
                    class="trams__route__metro__badge trams__route__metro__badge_blue"
                >
                  M
                </div>&ndash;&gt;
                <span> {{ port.metro }} </span>
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>{{$t('telephone')}}:</b>
              </div>
              <div>
                <a :href="'tel:' + port.phone">
                  {{ port.phone }}
                </a>
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>{{ $t('workhours') }}:</b>
              </div>
              <div>
                {{ port.workhours }}
              </div>
            </div>
          </div>
          <div v-if="port.ramp" class="contact-info__ramp">
            <svg-icon class="icon" name="chairman2"/>
            <span>
              {{ $t('contact.disabled_person') }}
            </span>
          </div>
          <div class="contact-info__payment">
            <div class="contact-info__payment__img uk-cover-container">
              <img
                  :data-src="`${$config.imageURL}?size=360&format=webp&src=${$config.baseSiteURL}` + port.image"
                  class="img_cover"
                  alt=""
                  :src="`${$config.imageURL}?size=360&format=webp&src=${$config.baseSiteURL}` + port.image"
              />
            </div>
            <div class="contact-info__payment__block">
              <div class="txt18"><b>{{ $t('payment_methods') }}:</b></div>
              <div class="contact-info__payment__txt">
                {{ $t('contact.payment_types') }}
              </div>
              <div class="contact-info__payment__images">
                <svg-icon class="icon" name="wallet"/>
                <svg-icon class="icon" name="credit-card"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact__grid__map" >
        <div :id="'map' + port.id" class="guide_map" v-if="showMap">
          &lt;!&ndash; <no-ssr> &ndash;&gt;
          <client-only placeholder="Loading...">
            <yandex-map
                ymap-class="map"
                :settings="settings"
                :coords="coords1"
                :zoom="zoom1"
                :scroll-zoom="scrollZoom"
                :options="settings"
                :controls="controls"
                :ref="'map' + port.id"
            >
            </yandex-map>
          </client-only>
          &lt;!&ndash; </no-ssr> &ndash;&gt;
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
                <svg-icon class="icon" name="way-point"/>
                <span> {{$t('contact.route')}} </span>
              </button>
              <button class="guide_tab" type="button" aria-expanded="false">
                <svg-icon class="icon" name="metro_logo"/>
                <span> {{ $t('metro') }} </span>
              </button>
              <button class="guide_tab" type="button" aria-expanded="false">
                <svg-icon class="icon" name="parking"/>
                <span> {{$t('parking')}} </span>
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
                  <svg-icon class="icon" name="arr_lang"/>
                  <span>{{ $t('buttons.collapse') }}</span>
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
                      <svg-icon class="icon" name="blue-parking"/>
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
                      <svg-icon class="icon" name="blue-parking"/>
                      <div>
                        <div>
                          <b>300 руб./час. </b>
                        </div>
                        <div>ежедневно и круглосуточно</div>
                      </div>
                    </div>
                    <div class="guide_content1__info__txt">
                      Московский паркинг <br/>
                      Набережная Тараса Шевченко
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking"/>
                      <div>
                        <div>
                          <b>380 руб./час. </b>
                        </div>
                        <div>с 08:00 до 21:00</div>
                      </div>
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking"/>
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
                  <svg-icon class="icon" name="arr_lang"/>
                  <span>{{ $t('buttons.collapse') }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>-->
    <div
        class="uk-flex uk-flex-wrap uk-child-width-1-2@l uk-grid-match contact__grid uk-scrollspy-inview uk-animation-fade"
        uk-scrollspy="cls: uk-animation-fade; delay: 400"
        v-if="portsInfo[0]"
    >
      <div class="contact__grid__info">
        <div class="contact-info">
          <div class="buy-ticket-form__headline__item1">
            <svg-icon class="icon" name="ancor-in-circle"/>
            <span class="headline_32 t_semibold">
              {{ portsInfo[0]?.name }}
            </span>
          </div>
          <div class="contact-info__items" v-html="portsInfo[0]?.content">
<!--            <div class="contact-info__item">
              <div>
                <b>{{ $t('contact.payment_address') }}:</b>
              </div>
              <div>
                {{ portsInfo[0]?.address }}
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>{{ $t('metro') }}:</b>
              </div>
              <div class="trams__route__metro">
&lt;!&ndash;                <div
                    class="trams__route__metro__badge trams__route__metro__badge_brown"
                >
                  M
                </div>
                <div
                    class="trams__route__metro__badge trams__route__metro__badge_blue"
                >
                  M
                </div>&ndash;&gt;
                <span>  {{ portsInfo[0]?.metro }} </span>
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>{{$t('telephone')}}:</b>
              </div>
              <div>
                <a :href="'tel:' + portsInfo[0]?.phone">
                  {{ portsInfo[0]?.phone }}
                </a>
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>{{ $t('workhours') }}:</b>
              </div>
              <div>
                {{ portsInfo[0]?.workhours }}
              </div>
            </div>-->
          </div>
          <div v-if="portsInfo[0]?.ramp" class="contact-info__ramp">
            <svg-icon class="icon" name="chairman2"/>
            <span>
              {{ $t('contact.disabled_person') }}
            </span>
          </div>
          <div class="contact-info__payment">
            <div class="contact-info__payment__img uk-cover-container">
              <img
                  :data-src="`${$config.imageURL}?size=360&format=webp&src=${$config.baseSiteURL}` + portsInfo[0]?.image"
                  class="img_cover"
                  alt=""
                  :src="`${$config.imageURL}?size=360&format=webp&src=${$config.baseSiteURL}` + portsInfo[0]?.image"
              />
            </div>
            <div class="contact-info__payment__block">
              <div class="txt18"><b>{{ $t('payment_methods') }}:</b></div>
              <div class="contact-info__payment__txt">
                {{ $t('contact.payment_types') }}
              </div>
              <div class="contact-info__payment__images">
                <svg-icon class="icon" name="wallet"/>
                <svg-icon class="icon" name="credit-card"/>
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
              @map-was-initialized="onMapMounted"
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
                <svg-icon class="icon" name="way-point"/>
                <span> {{$t('contact.route')}} </span>
              </button>
              <button class="guide_tab" type="button" aria-expanded="false">
                <svg-icon class="icon" name="metro_logo"/>
                <span> {{ $t('metro') }} </span>
              </button>
              <button class="guide_tab" type="button" aria-expanded="false">
                <svg-icon class="icon" name="parking"/>
                <span> {{$t('parking')}} </span>
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
                    {{ portsInfo[0]?.metro_tab }}
                  </div>
                </div>
                <div
                    class="guide__link__toggle"
                    uk-toggle="target: #guide_content3_m1;"
                >
                  <svg-icon class="icon" name="arr_lang"/>
                  <span>{{ $t('buttons.collapse') }}</span>
                </div>
              </li>
              <li>
                <div id="guide_content1_m1" class="guide_content">
                  <div class="guide_content1_head">
                    <div class="txt12">
                      <b>{{$t('workhours')}}:</b>
                    </div>
                    <div class="guide_content1_days">
                      <div v-for="day in calendarBLocks">{{day}}</div>
                    </div>
                  </div>
                  <div class="guide_content1_info" v-html="portsInfo[0]?.parking">
<!--                    <div class="guide_content1__info__txt">
                      Парковочный талон в выходные и праздничные дни:
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking"/>
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
                      <svg-icon class="icon" name="blue-parking"/>
                      <div>
                        <div>
                          <b>300 руб./час. </b>
                        </div>
                        <div>ежедневно и круглосуточно</div>
                      </div>
                    </div>
                    <div class="guide_content1__info__txt">
                      Московский паркинг <br/>
                      Набережная Тараса Шевченко
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking"/>
                      <div>
                        <div>
                          <b>380 руб./час. </b>
                        </div>
                        <div>с 08:00 до 21:00</div>
                      </div>
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking"/>
                      <div>
                        <div>
                          <b>200 руб./час. </b>
                        </div>
                        <div>с 21:00 до 08:00</div>
                      </div>
                    </div>-->

                  </div>
                </div>
                <div
                    class="guide__link__toggle"
                    uk-toggle="target: #guide_content1_m1;"
                >
                  <svg-icon class="icon" name="arr_lang"/>
                  <span>{{ $t('buttons.collapse') }}</span>
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
        v-if="portsInfo[1]"
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
                <svg-icon class="icon" name="way-point"/>
                <span> {{$t('contact.route')}} </span>
              </button>
              <button class="guide_tab" type="button" aria-expanded="false">
                <svg-icon class="icon" name="metro_logo"/>
                <span> {{ $t('metro') }} </span>
              </button>
              <button class="guide_tab" type="button" aria-expanded="false">
                <svg-icon class="icon" name="parking"/>
                <span> {{$t('parking')}} </span>
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
                    {{ portsInfo[1]?.metro_tab }}
                  </div>
                </div>
                <div
                    class="guide__link__toggle"
                    uk-toggle="target: #guide_content3_m2;"
                >
                  <svg-icon class="icon" name="arr_lang"/>
                  <span>{{ $t('buttons.collapse') }}</span>
                </div>
              </li>
              <li>
                <div id="guide_content1_m2" class="guide_content">
                  <div class="guide_content1_head">
                    <div class="txt12">
                      <b>{{ $t('workhours') }}:</b>
                    </div>
                    <div class="guide_content1_days">
                      <div v-for="day in calendarBLocks">{{day}}</div>
                    </div>
                  </div>
                  <div class="guide_content1_info" v-html="portsInfo[1]?.parking">
<!--                    <div class="guide_content1__info__txt">
                      Парковочный талон в выходные и праздничные дни:
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking"/>
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
                      <svg-icon class="icon" name="blue-parking"/>
                      <div>
                        <div>
                          <b>380 руб./час. </b>
                        </div>
                        <div>с 08:00 до 21:00</div>
                      </div>
                    </div>
                    <div class="guide_content1_item">
                      <svg-icon class="icon" name="blue-parking"/>
                      <div>
                        <div>
                          <b>200 руб./час. </b>
                        </div>
                        <div>с 21:00 до 08:00</div>
                      </div>
                    </div>-->
                  </div>
                </div>
                <div
                    class="guide__link__toggle"
                    uk-toggle="target: #guide_content1_m2;"
                >
                  <svg-icon class="icon" name="arr_lang"/>
                  <span>{{ $t('buttons.collapse') }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contact__grid__info">
        <div class="contact-info">
          <div class="buy-ticket-form__headline__item1">
            <svg-icon class="icon" name="ancor-in-circle"/>
            <span class="headline_32 t_semibold"> {{ portsInfo[1]?.name }} </span>
          </div>
          <div class="contact-info__items" v-html="portsInfo[1]?.content">
<!--            <div class="contact-info__item contact-info__item_address">
              <div>
                <b>{{ $t('contact.payment_address') }}:</b>
              </div>
              <div>
                {{ portsInfo[1]?.address }}
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>{{$t('metro')}}:</b>
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
                <b>{{$t('telephone')}}:</b>
              </div>
              <div>
                <a :href="'tel:' + portsInfo[1]?.phone">
                  {{ portsInfo[1]?.phone }}
                </a>
              </div>
            </div>
            <div class="contact-info__item">
              <div>
                <b>{{ $t('workhours') }}:</b>
              </div>
              <div>
                {{ portsInfo[1]?.workhours }}
              </div>
            </div>-->
          </div>
          <div v-if="portsInfo[1]?.ramp" class="contact-info__ramp">
            <svg-icon class="icon" name="chairman2"/>
            <span>
              {{ $t('contact.disabled_person') }}
            </span>
          </div>
          <div class="contact-info__payment">
            <div class="contact-info__payment__img uk-cover-container">
              <img
                  :data-src="`${$config.imageURL}?size=360&format=webp&src=${$config.baseSiteURL}` + portsInfo[1]?.image"
                  class="img_cover"
                  alt=""
                  :src="`${$config.imageURL}?size=360&format=webp&src=${$config.baseSiteURL}` + portsInfo[1]?.image"
              />
            </div>
            <div class="contact-info__payment__block">
              <div class="txt18"><b>{{ $t('payment_methods') }}:</b></div>
              <div class="contact-info__payment__txt">
                {{ $t('contact.payment_types') }}
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
        class="contact-item uk-flex uk-flex-wrap uk-child-width-1-2@l uk-grid-match uk-scrollspy-inview uk-animation-fade"
        uk-scrollspy="cls: uk-animation-fade; delay: 400"
        v-for="(block, index) in blockContact" :key="'blc' + index"
    >
      <div>
        <div class="contact-info uk-position-relative contact-info_sales">
          <svg-icon :name="block.background" class="contact-info__svg"/>
          <div class="uk-position-relative">
            <div class="headline_32 t_semibold">{{ block.name }}</div>
            <div class="contact-info__items" v-html="block.content">
<!--              <div class="contact-info__item contact-info__item_address" v-html="block.content">
              </div>-->
              <!--              <div class="contact-info__item">
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
                            </div>-->
            </div>
            <a
                class="uk-button uk-button-default button_calcalutor"
                href="#modal-calculation"
                uk-toggle=""
            >
              <svg-icon class="icon" name="calculator"/>
              <span>{{ block.button }}</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-cover-container contact-info_sales__img">
          <img
              :data-src="`${$config.imageURL}?size=1060&format=webp&src=${$config.baseSiteURL}` + block?.images[0]"
              class="img_cover"
              alt=""
              :src="`${$config.imageURL}?size=1060&format=webp&src=${$config.baseSiteURL}` + block?.images[0]"
          />
        </div>
      </div>
    </div>
    <ModalCalculationSimple/>
  </div>
</template>

<script>
import {yandexMap, ymapMarker, loadYmap} from 'vue-yandex-maps';
import Header from '../components/Header';
import Default from '../layouts/default';
import UIkit from 'uikit';
import Breadcrumbs from "../components/Breadcrumbs";
//import ModalCalculation from "../components/modals/Calculation";
import ModalCalculationSimple from "../components/modals/CalculationSimple";
import axios from "axios";

export default {
  name: 'Contacts',
  components: {ModalCalculationSimple, Breadcrumbs, Header, Default, yandexMap, ymapMarker},
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
        lang: this.$i18n.locale !== 'ru' ? 'en_US' : 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1',
      },
      seoData: {},
      blockContact: {},
      portsInfo: [],
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
      let map1
      let map2
      if(this.$refs.map1) {
        map1 = this.$refs.map1.myMap;
      }
      if(this.$refs.map2) {
        map2 = this.$refs.map2.myMap;
      }

      if (window.innerWidth < 640) {
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
          to: 'Москва, Украина пристань',
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
                    [55.752805,37.565954],
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
                    [55.752805,37.565954],
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
            map1.setCenter([55.752805,37.565954], 13, {
              checkZoomRange: true,
            });
          }
          else if (e.detail[0].index() == 0) {
            map1.geoObjects.removeAll();
            map1.geoObjects.add(myPlacemarkWithContent2);
            map1.setCenter([55.752805,37.565954], 13, {
              checkZoomRange: true,
            });

            control.routePanel.state.set({
              from: loc1, //loc1
              to: 'Москва,  Украина пристань',
            });
            control.options.set('visible', true);
          }
          else if (e.detail[0].index() == 2) {
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
                    [55.752805,37.565954],
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
                    [55.752805,37.565954],
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

            let parkingPin = new ymaps.Placemark(
                [55.752805,37.565954],
                {
                  //  hintContent: 'Посмотреть адрес',
                  //  balloonContent: 'Московская обл. г. Подольск, Т.Ц. Красные ряды'
                },
                {
                  // Опции.
                  // Необходимо указать данный тип макета.
                  iconLayout: 'default#imageWithContent',
                  // Размеры метки.
                  iconImageSize: [54.79, 54.79],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-27, -27],
                  // Смещение слоя с содержимым относительно слоя с картинкой.
                  iconContentOffset: [115, 115],
                }
            );

            map1.geoObjects.removeAll(),
                map1.geoObjects.add(parkingPin);
            map1.setCenter([55.752805,37.565954], 13, {
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
                map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
              },

              zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
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
          to: 'Москва, Украина пристань',
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
                    [55.74466610341751, 37.56524455187834],
                    [55.752805,37.565954],
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
                    [55.74466610341751, 37.56524455187834],
                    [55.752805,37.565954],
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
            map1.setCenter([55.752805,37.565954], 13, {
              checkZoomRange: true,
            });
          }
          else if (e.detail[0].index() == 0) {
            map1.geoObjects.removeAll();
            map1.geoObjects.add(myPlacemarkWithContent2);
            map1.setCenter([55.752805,37.565954], 13, {
              checkZoomRange: true,
            });

            control.routePanel.state.set({
              from: loc1, //loc1
              to: 'Москва, Украина пристань',
            });
            control.options.set('visible', true);
          }
          else if (e.detail[0].index() == 2) {
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
                    [55.752805,37.565954],
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
                    [55.752805,37.565954],
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
            let parkingPin = new ymaps.Placemark(
                [55.752805,37.565954],
                {
                  //  hintContent: 'Посмотреть адрес',
                  //  balloonContent: 'Московская обл. г. Подольск, Т.Ц. Красные ряды'
                },
                {
                  // Опции.
                  // Необходимо указать данный тип макета.
                  iconLayout: 'default#imageWithContent',
                  // Размеры метки.
                  iconImageSize: [54.79, 54.79],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-27, -27],
                  // Смещение слоя с содержимым относительно слоя с картинкой.
                  iconContentOffset: [115, 115],
                }
            );

            map1.geoObjects.removeAll(),
                map1.geoObjects.add(parkingPin);
            map1.setCenter([55.752805,37.565954], 13, {
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
                map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
              },

              zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
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
          [55.752805,37.565954],
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
                map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
              },
              zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
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
          to: '55.731870, 37.604107',
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
                    [55.735159,37.593397],
                    [55.729956, 37.597184],
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
                    [55.735159,37.593397],
                    [55.729956, 37.597184],
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
            map2.setCenter([55.729956, 37.597184], 13, {
              checkZoomRange: true,
            });
          }
          else if (e.detail[0].index() == 0) {
            map2.geoObjects.removeAll();
            map2.geoObjects.add(myPlacemarkWithContent2);
            map2.setCenter([55.729956, 37.597184], 13, {
              checkZoomRange: true,
            });

            control2.routePanel.state.set({
              from: loc2, //loc2
              to: '55.731870, 37.604107',
            });
            control2.options.set('visible', true);
          }
          else if (e.detail[0].index() == 2) {
            control2.options.set('visible', false);
            control2.routePanel.state.set({
              from: '',
              to: '',
              // toEnabled: true
            });

            let multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.735159,37.593397],
                    [55.729956, 37.597184],
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
                    [55.729956, 37.597184],
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
            let parkingPin = new ymaps.Placemark(
                [55.731870, 37.604107],
                {
                  //  hintContent: 'Посмотреть адрес',
                  //  balloonContent: 'Московская обл. г. Подольск, Т.Ц. Красные ряды'
                },
                {
                  // Опции.
                  // Необходимо указать данный тип макета.
                  iconLayout: 'default#imageWithContent',
                  // Размеры метки.
                  iconImageSize: [54.79, 54.79],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-27, -27],
                  // Смещение слоя с содержимым относительно слоя с картинкой.
                  iconContentOffset: [115, 115],
                }
            );

            map2.geoObjects.removeAll(),
            map2.geoObjects.add(parkingPin);
            map2.setCenter([55.729956, 37.597184], 13, {
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
                map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
              },
              zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
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
          to: '55.731870, 37.604107',
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
                    [55.735159,37.593397],
                    [55.731499, 37.605785],
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
                    [55.735159,37.593397],
                    [55.729956, 37.597184],
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
            map2.setCenter([55.729956, 37.597184], 13, {
              checkZoomRange: true,
            });
          }
          else if (e.detail[0].index() == 0) {
            map2.geoObjects.removeAll();
            map2.geoObjects.add(myPlacemarkWithContent2);
            map2.setCenter([55.729956, 37.597184], 13, {
              checkZoomRange: true,
            });

            control2.routePanel.state.set({
              from: loc2, //loc2
              to: '55.731870, 37.604107',
            });
            control2.options.set('visible', true);
          }
          else if (e.detail[0].index() == 2) {
            control2.options.set('visible', false);
            control2.routePanel.state.set({
              from: '',
              to: '',
              // toEnabled: true
            });

            var multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                  referencePoints: [
                    [55.735159,37.593397],
                    [55.731499, 37.605785],
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
                    [55.731499, 37.605785],
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
            let parkingPin = new ymaps.Placemark(
                [55.731870, 37.604107],
                {
                  //  hintContent: 'Посмотреть адрес',
                  //  balloonContent: 'Московская обл. г. Подольск, Т.Ц. Красные ряды'
                },
                {
                  // Опции.
                  // Необходимо указать данный тип макета.
                  iconLayout: 'default#imageWithContent',
                  // Размеры метки.
                  iconImageSize: [54.79, 54.79],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-27, -27],
                  // Смещение слоя с содержимым относительно слоя с картинкой.
                  iconContentOffset: [115, 115],
                }
            );

            map2.geoObjects.removeAll(),
                map2.geoObjects.add(parkingPin);
            map2.setCenter([55.729956, 37.597184], 13, {
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
          [55.729956, 37.597184],
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
  computed: {
    calendarBLocks() {
      let arr = [];
      for (let i = 0; i < 7; i++) {
        let date = new Date();
        let dateItem = []
        date.setDate(date.getDate() + i);
        dateItem = new Date(date).toLocaleDateString(`${this.$i18n.localeProperties.iso}`, {
          timeZone: 'Europe/Moscow',
          weekday: 'short'
        })
        arr.push(dateItem)
      }
      return arr
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
  async fetch() {
    let seoDataResult = await this.$axios(
        `${this.$config.baseURL}pages?ref=/contacts/&lang=${this.$i18n.locale}`);
    let contactsInfos = await this.$axios(
        `${this.$config.baseURL}contacts?lang=${this.$i18n.locale}`);
    let contactsBlock = await this.$axios(
        `${this.$config.baseURL}blocks?page=contact&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    this.blockContact = contactsBlock.data
    this.portsInfo = contactsInfos.data
  },
  fetchOnServer: true,
  fetchKey: 'contacts'
};
</script>

<style lang="scss">
.map {
  width: 100%;
  height: 100%;
}

.contact-item {
  flex-direction: row;
}

.contact-item:nth-child(odd) {
  flex-direction: row-reverse;
}
</style>
