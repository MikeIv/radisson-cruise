<template>
  <div>
    <!--    <h1>Расписание трамвайчиков</h1>
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching mountains</p>
        <ul v-else>
          <li v-for="(mountain, index) in mountains" :key="index" @click="checkLog">
            {{ mountain.title }}
          </li>
        </ul>-->

    <!--    <section class="table-section">
          <div class="uk-overflow-auto buy-ticket-shedule_trams__overflow">
            <table>
              <tr class="buy-ticket-shedule_trams__headline__p1">
                <td  colspan="2">Гостиница «Украина»</td>
                <td  colspan="2">Киевский вокзал</td>
                <td  colspan="2">Воробъевы горы</td>
                <td  colspan="2">Парк Горького</td>
                <td  colspan="2">Зарядье</td>
                <td  colspan="2">Парк горьгоко</td>
                <td  colspan="2">Гостиница «Украина»</td>
              </tr>
              <tr class="buy-ticket-shedule_trams__headline__p2-items">
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
                <td>
                  Отправление
                </td>
                <td>
                  Прибытие
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-white">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-gray">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-white">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-gray">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-white">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-gray">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-white">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
              <tr class="buy-ticket-shedule_trams__info bg-gray">
                <td>-</td>
                <td>11:00</td>
                <td>11 : 05</td>
                <td>11 : 05</td>
                <td>11 : 35</td>
                <td>11 : 40</td>
                <td>12 : 00</td>
                <td>12 : 10</td>
                <td>12 : 25</td>
                <td>12 : 35</td>
                <td>12 : 50</td>
                <td>12 : 55</td>
                <td>13 : 45</td>
                <td>
                  <a class="uk-button uk-button-default button_ticket" href="/buy_ticket_form_trams.html">
                    <span>Купить билет</span>
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </section>-->
    <Header class="buy-ticket-shedule__header">
      <img src="~images/inners/shedule2.webp" data-src="~images/inners/shedule2.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ $t('pages.schedule.trolley.title') }}
          </h1>
        </div>
      </div>
    </Header>
    <section class="buy-ticket-shedule__container_trams">
      <div class="uk-container">
        <!--        <form class="buy-ticket " autocomplete="off">
                  &lt;!&ndash; <div class="buy-ticket__item">
                    <svg class="icon buy-ticket__item_icon3">
                      <use xlink:href="#svg-prichal"></use>
                    </svg>
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
                  </div> &ndash;&gt;
                  <div class="buy-ticket__item buy-ticket__item_switch-trams">
                    <div class="switch-container">
                      <div class="switch-name" :class="{'active': isActive}">На 24 часа</div>
                      <label class="switch-round">
                        <input type="checkbox" @click="switchRoutes">
                        <span class="switch-slider"></span>
                      </label>
                      <div class="switch-name" :class="{'active': !isActive}">На 48 часов</div>
                    </div>
                  </div>
                  <button class="uk-button uk-button-default button_ticket" type="submit">
                    <span>НАЙТИ РЕЙС</span>
                    <svg-icon class="icon" name="looking_glass"/>
                  </button>
                </form>-->
        <BuyTicketBtn class="buy-ticket " link="/tickets/trolley-buy"/>
        <div class="uk-overflow-auto buy-ticket-shedule_trams__overflow">
          <div class="buy-ticket-shedule_trams__headlines ">
            <div class="buy-ticket-shedule_trams__headline">
              <div class="buy-ticket-shedule_trams__headline__p1">Гостиница «Украина»</div>
              <div class="buy-ticket-shedule_trams__headline__p2-items">
                <div>Прибытие </div>
                <div>Отправление</div>
              </div>
            </div>
            <div class="buy-ticket-shedule_trams__headline">
              <div class="buy-ticket-shedule_trams__headline__p1">Киевский вокзал</div>
              <div class="buy-ticket-shedule_trams__headline__p2-items">
                <div>Прибытие </div>
                <div>Отправление</div>
              </div>
            </div>
            <div class="buy-ticket-shedule_trams__headline">
              <div class="buy-ticket-shedule_trams__headline__p1">Воробъевы горы</div>
              <div class="buy-ticket-shedule_trams__headline__p2-items">
                <div>Прибытие </div>
                <div>Отправление</div>
              </div>
            </div>
            <div class="buy-ticket-shedule_trams__headline">
              <div class="buy-ticket-shedule_trams__headline__p1">Парк Горького</div>
              <div class="buy-ticket-shedule_trams__headline__p2-items">
                <div>Прибытие </div>
                <div>Отправление</div>
              </div>
            </div>
            <div class="buy-ticket-shedule_trams__headline">
              <div class="buy-ticket-shedule_trams__headline__p1">Зарядье</div>
              <div class="buy-ticket-shedule_trams__headline__p2-items">
                <div>Прибытие </div>
                <div>Отправление</div>
              </div>
            </div>
            <div class="buy-ticket-shedule_trams__headline">
              <div class="buy-ticket-shedule_trams__headline__p1">Парк горьгоко</div>
              <div class="buy-ticket-shedule_trams__headline__p2-items">
                <div>Прибытие </div>
                <div>Отправление</div>
              </div>
            </div>
            <div class="buy-ticket-shedule_trams__headline_last-1">
              <div class="buy-ticket-shedule_trams__headline__p1">Гостиница «Украина»</div>
              <div class="buy-ticket-shedule_trams__headline__p2-items">
                <div>Прибытие </div>
              </div>
            </div>
          </div>
          <div class="buy-ticket-shedule_trams__table-wrap">
            <p v-if="$fetchState.pending">Loading....</p>
            <p v-else-if="$fetchState.error">Error while fetching info</p>
            <!--            <div class="buy-ticket-shedule_trams__table ">
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                —
                              </div>
                              <div>
                                11:00
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 05
                              </div>
                              <div>
                                11 : 15
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 35
                              </div>
                              <div>
                                11 : 40
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 00
                              </div>
                              <div>
                                12 : 10
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 25
                              </div>
                              <div>
                                12 : 35
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 50
                              </div>
                              <div>
                                12 : 55
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last-1">
                            <div>
                              <div>
                                13 : 45
                              </div>
                            </div>

                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last">
                            <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/trolley">
                              <span>Купить билет</span>
                              <svg-icon class="icon" name="ticket"/>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="buy-ticket-shedule_trams__table ">
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                —
                              </div>
                              <div>
                                11:00
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 05
                              </div>
                              <div>
                                11 : 15
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 35
                              </div>
                              <div>
                                11 : 40
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 00
                              </div>
                              <div>
                                12 : 10
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 25
                              </div>
                              <div>
                                12 : 35
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 50
                              </div>
                              <div>
                                12 : 55
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last-1">
                            <div>
                              <div>
                                13 : 45
                              </div>
                            </div>

                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last">
                            <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/trolley">
                              <span>Купить билет</span>
                              <svg-icon class="icon" name="ticket"/>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="buy-ticket-shedule_trams__table ">
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                —
                              </div>
                              <div>
                                11:00
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 05
                              </div>
                              <div>
                                11 : 15
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 35
                              </div>
                              <div>
                                11 : 40
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 00
                              </div>
                              <div>
                                12 : 10
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 25
                              </div>
                              <div>
                                12 : 35
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 50
                              </div>
                              <div>
                                12 : 55
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last-1">
                            <div>
                              <div>
                                13 : 45
                              </div>
                            </div>

                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last">
                            <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/trolley">
                              <span>Купить билет</span>
                              <svg-icon class="icon" name="ticket"/>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="buy-ticket-shedule_trams__table ">
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                —
                              </div>
                              <div>
                                11:00
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 05
                              </div>
                              <div>
                                11 : 15
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 35
                              </div>
                              <div>
                                11 : 40
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 00
                              </div>
                              <div>
                                12 : 10
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 25
                              </div>
                              <div>
                                12 : 35
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 50
                              </div>
                              <div>
                                12 : 55
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last-1">
                            <div>
                              <div>
                                13 : 45
                              </div>
                            </div>

                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last">
                            <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/trolley">
                              <span>Купить билет</span>
                              <svg-icon class="icon" name="ticket"/>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="buy-ticket-shedule_trams__table ">
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                —
                              </div>
                              <div>
                                11:00
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 05
                              </div>
                              <div>
                                11 : 15
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 35
                              </div>
                              <div>
                                11 : 40
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 00
                              </div>
                              <div>
                                12 : 10
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 25
                              </div>
                              <div>
                                12 : 35
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 50
                              </div>
                              <div>
                                12 : 55
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last-1">
                            <div>
                              <div>
                                13 : 45
                              </div>
                            </div>

                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last">
                            <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/trolley">
                              <span>Купить билет</span>
                              <svg-icon class="icon" name="ticket"/>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="buy-ticket-shedule_trams__table ">
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                —
                              </div>
                              <div>
                                11:00
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 05
                              </div>
                              <div>
                                11 : 15
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 35
                              </div>
                              <div>
                                11 : 40
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 00
                              </div>
                              <div>
                                12 : 10
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 25
                              </div>
                              <div>
                                12 : 35
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 50
                              </div>
                              <div>
                                12 : 55
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last-1">
                            <div>
                              <div>
                                13 : 45
                              </div>
                            </div>

                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last">
                            <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/trolley">
                              <span>Купить билет</span>
                              <svg-icon class="icon" name="ticket"/>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="buy-ticket-shedule_trams__table ">
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                —
                              </div>
                              <div>
                                11:00
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 05
                              </div>
                              <div>
                                11 : 15
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 35
                              </div>
                              <div>
                                11 : 40
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 00
                              </div>
                              <div>
                                12 : 10
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 25
                              </div>
                              <div>
                                12 : 35
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 50
                              </div>
                              <div>
                                12 : 55
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last-1">
                            <div>
                              <div>
                                13 : 45
                              </div>
                            </div>

                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last">
                            <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/trolley">
                              <span>Купить билет</span>
                              <svg-icon class="icon" name="ticket"/>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="buy-ticket-shedule_trams__table ">
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                —
                              </div>
                              <div>
                                11:00
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 05
                              </div>
                              <div>
                                11 : 15
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                11 : 35
                              </div>
                              <div>
                                11 : 40
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 00
                              </div>
                              <div>
                                12 : 10
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 25
                              </div>
                              <div>
                                12 : 35
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item">
                            <div>
                              <div>
                                12 : 50
                              </div>
                              <div>
                                12 : 55
                              </div>
                            </div>
                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last-1">
                            <div>
                              <div>
                                13 : 45
                              </div>
                            </div>

                          </div>
                          <div class="buy-ticket-shedule_trams__table__item-last">
                            <nuxt-link class="uk-button uk-button-default button_ticket" to="/tickets/trolley">
                              <span>Купить билет</span>
                              <svg-icon class="icon" name="ticket"/>
                            </nuxt-link>
                          </div>
                        </div>-->
            <!--            <TableItem v-for="(tableDay, index) in tableInfo" :key="'tbl' + index" :tableDay="tableDay"/>-->
            <!--            <TableItem v-if="isActive" v-for="(tableDay, index) in tableInfos.route1" :key="'tblSmall' + index" :tableDay="tableDay.route"/>-->
            <div  v-if="isActive" >
              <TableItem v-for="(tableDay, index) in tableInfos.route1" :key="'tblSmall' + index" :tableDay="tableDay.route"/>
            </div>
            <div v-else-if="!isActive">
              <TableItem v-for="(tableDay, index) in tableInfos.route4" :key="'tblLarge' + index" :tableDay="tableDay.route"/>
            </div>
            <!--            <TableItem v-else-if="!isActive" v-for="(tableDay, index) in tableInfos" :key="'hers' + index" :tableDay="tableDay"/>-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header";
import TableItem from "../../components/trolley/schedule/TableItem";
import axios from 'axios'
import Breadcrumbs from "../../components/Breadcrumbs";
import BuyTicketBtn from "../../components/BuyTicketBtn";
export default {
  name: "schedule",
  components: {BuyTicketBtn, Breadcrumbs, TableItem, Header},
  data() {
    return {
      isActive: true,
      tableInfos: [],
      tableInfo: [
        [
          {
            start: `-`,
            end: '11:00'
          },
          {
            start: `11:05`,
            end: '11:15'
          },
          {
            start: `11:35`,
            end: '11:40'
          },
          {
            start: `12:00`,
            end: '12:10'
          },
          {
            start: `12:25`,
            end: '12:35'
          },
          {
            start: `12:50`,
            end: '12:55'
          },
          {
            start: `13:45`,
            end: ``
          },
        ],
        [
          {
            start: `-`,
            end: '11:00'
          },
          {
            start: `11:05`,
            end: '11:15'
          },
          {
            start: `11:35`,
            end: '11:40'
          },
          {
            start: `12:00`,
            end: '12:10'
          },
          {
            start: `12:25`,
            end: '12:35'
          },
          {
            start: `12:50`,
            end: '12:55'
          },
          {
            start: `13:45`,
            end: ``
          },
        ],
        [
          {
            start: `-`,
            end: '11:00'
          },
          {
            start: `11:05`,
            end: '11:15'
          },
          {
            start: `11:35`,
            end: '11:40'
          },
          {
            start: `12:00`,
            end: '12:10'
          },
          {
            start: `12:25`,
            end: '12:35'
          },
          {
            start: `12:50`,
            end: '12:55'
          },
          {
            start: `13:45`,
            end: ``
          },
        ],
        [
          {
            start: `-`,
            end: '11:00'
          },
          {
            start: `11:05`,
            end: '11:15'
          },
          {
            start: `11:35`,
            end: '11:40'
          },
          {
            start: `12:00`,
            end: '12:10'
          },
          {
            start: `12:25`,
            end: '12:35'
          },
          {
            start: `12:50`,
            end: '12:55'
          },
          {
            start: `13:45`,
            end: ``
          },
        ],
        [
          {
            start: `-`,
            end: '11:00'
          },
          {
            start: `11:05`,
            end: '11:15'
          },
          {
            start: `11:35`,
            end: '11:40'
          },
          {
            start: `12:00`,
            end: '12:10'
          },
          {
            start: `12:25`,
            end: '12:35'
          },
          {
            start: `12:50`,
            end: '12:55'
          },
          {
            start: `13:45`,
            end: ``
          },
        ],
        [
          {
            start: `-`,
            end: '11:00'
          },
          {
            start: `11:05`,
            end: '11:15'
          },
          {
            start: `11:35`,
            end: '11:40'
          },
          {
            start: `12:00`,
            end: '12:10'
          },
          {
            start: `12:25`,
            end: '12:35'
          },
          {
            start: `12:50`,
            end: '12:55'
          },
          {
            start: `13:45`,
            end: ``
          },
        ],
        [
          {
            start: `-`,
            end: '11:00'
          },
          {
            start: `11:05`,
            end: '11:15'
          },
          {
            start: `11:35`,
            end: '11:40'
          },
          {
            start: `12:00`,
            end: '12:10'
          },
          {
            start: `12:25`,
            end: '12:35'
          },
          {
            start: `12:50`,
            end: '12:55'
          },
          {
            start: `13:45`,
            end: ``
          },
        ],
        [
          {
            start: `-`,
            end: '11:00'
          },
          {
            start: `11:05`,
            end: '11:15'
          },
          {
            start: `11:35`,
            end: '11:40'
          },
          {
            start: `12:00`,
            end: '12:10'
          },
          {
            start: `12:25`,
            end: '12:35'
          },
          {
            start: `12:50`,
            end: '12:55'
          },
          {
            start: `13:45`,
            end: ``
          },
        ],
        [
          {
            start: `-`,
            end: '11:00'
          },
          {
            start: `11:05`,
            end: '11:15'
          },
          {
            start: `11:35`,
            end: '11:40'
          },
          {
            start: `12:00`,
            end: '12:10'
          },
          {
            start: `12:25`,
            end: '12:35'
          },
          {
            start: `12:50`,
            end: '12:55'
          },
          {
            start: `13:45`,
            end: ``
          },
        ],
      ]
    }
  },

  methods: {
    checkLog() {
      console.log(this.mountains)
    },
    switchRoutes() {
      this.isActive = !this.isActive
    },
  },

  async fetch() {
    let trolleyRoutes = await axios.get(
      `${this.$config.baseURL}walkschedule`,
    )
    this.tableInfos = (trolleyRoutes.data)
    //console.log(this.tableInfos)
  },
  fetchOnServer: false,
  fetchKey: 'site-sidebar',
}
</script>

<style scoped>
/*.buy-ticket-shedule_trams__headline__p1 {
  font-size: 12px;
  font-weight: 600;
}
.buy-ticket-shedule_trams__headline__p1 td{
  width: 12.5%;
  min-width: 12.5%;
}

.buy-ticket-shedule_trams__headline__p2-items {
  font-size: 10px;
  font-weight: 600;
  color: #858585;
}
.buy-ticket-shedule_trams__headline__p2-items td {
  padding-top:20px;
  padding-bottom: 35px;
}

.buy-ticket-shedule_trams__headline__p2-items td:nth-child(odd) {
  padding-left:0;
}

.buy-ticket-shedule_trams__headline__p2-items td:nth-child(even) {
  padding-left:13px;
}


.buy-ticket-shedule_trams__info td{
  padding: 11px 0 11px;
  font-size: 12px;
  font-weight: 600;
}

.buy-ticket-shedule_trams__info td:nth-child(even){
  padding: 11px 0 11px 13px;
}

.buy-ticket-shedule_trams__info td:first-child{
  padding: 11px 0 11px 13px;
}

.buy-ticket-shedule_trams__info td:last-child{
  padding-left: 50px;
}

.button_ticket {
  height: 35px;
  font-size: 10px;
  min-width: 166px;
  padding: 0;
}

.bg-gray {
  background: #f4f5f6;
}
.bg-white {
  background-color: #fff;
}

table {
  border-collapse: collapse;
}
.table-section {
  margin: 100px 0 130px;
}*/

.buy-ticket-shedule__container_trams .buy-ticket {
  max-width: 250px;
}
</style>

