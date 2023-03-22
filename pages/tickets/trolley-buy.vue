<template>
  <div>
    <Header fileName="inners/shedule1.png" class="buy-ticket-form__header"/>
    <section class="buy-ticket-form__container">
      <div class="uk-container">
        <div class="buy-ticket-form">
          <ul class="uk-breadcrumb">
            <li>
              <a href="" class="transition">
                <span>Главная</span>
              </a>
            </li>
            <li><span>Название раздела на сайте</span></li>
          </ul>
          <div class="buy-ticket-form__grid">
            <form class="buy-ticket-form__info">
              <div class="headline_p1">
                КУПИТЬ БИЛЕТ
              </div>
              <div class="buy-ticket-form__headline uk-position-relative">
                <svg-icon class="buy-ticket-form__headline__icon" name="back-tickets"/>
                <div class="buy-ticket-form__headline__item1">
                  <svg-icon class="icon" name="ancor-in-circle"/>
                  <div>
                  <span class="headline_32 t_semibold">
                    Причал: «Гостиница «Украина»
                  </span>
                    <div class="buy-ticket-form__date uk-hidden@s">
                      <div>
                        Время и дата:
                      </div>
                      <div>
                        <b>5 июня</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buy-ticket-form__date">
                  <div class="uk-visible@s">
                    Время и дата:
                  </div>
                  <div class="uk-visible@s">
                    <b>5 июня</b>
                  </div>
                  <span class="buy-ticket-shedule__time__txt">
                  Билет действителен в течение 7 дней от выбранной даты
                </span>
                </div>
              </div>
              <div class="buy-ticket-form__data buy-ticket-form__data_trams">
                <div class="uk-flex uk-flex-wrap buy-ticket-form__data__grid">
                  <div class="uk-width-1-2">
                    <div class="uk-form-controls">
                      <label class="uk-form-label">Выбранная дата</label>
                      <div class=" buy-ticket__input_arr">
                        <input class="uk-input buy-ticket__input " id="datepicker-one" type="text" placeholder="Выбрать" required="" name="" value="12.05.2021">
                      </div>
                    </div>
                  </div>
                  <div class="uk-width-1-2">
                    <div class="uk-form-controls">
                      <label class="uk-form-label">Время поездки</label>
                      <div class=" buy-ticket__input_arr">
                        <input class="uk-input buy-ticket__input" id="datetimepicker-time" type="text" placeholder="Выбрать" required="" name="" value="14:00">
                        <div class="datetimepicker-time-container picker-container"><div class="picker picker-fixed" data-picker-action="hide" touch-action="none" tabindex="-1" role="dialog"><div class="picker-dialog" role="document"><div class="picker-header"><h4 class="picker-title">Pick a date and time</h4><button type="button" class="picker-close" data-picker-action="hide" aria-label="Close">×</button></div><div class="picker-body"><div class="picker-grid picker-multiple picker-controls"><div data-type="hour" data-token="HH" class="picker-cell picker-hours"><div class="picker-cell__control picker-cell__control--prev" data-picker-action="prev"></div><div class="picker-cell__body"><ul class="picker-list"><li data-name="hour" data-value="9" class="picker-item">9:00</li><li data-name="hour" data-value="10" class="picker-item">10:00</li><li data-name="hour" data-value="11" class="picker-item">11:00</li><li data-name="hour" data-value="12" class="picker-item picker-picked">12:00</li><li data-name="hour" data-value="13" class="picker-item">13:00</li><li data-name="hour" data-value="14" class="picker-item">14:00</li><li data-name="hour" data-value="15" class="picker-item">15:00</li></ul></div><div class="picker-cell__control picker-cell__control--next" data-picker-action="next"></div></div></div></div><div class="picker-footer"><button type="button" class="picker-cancel" data-picker-action="hide">Отмена</button><button type="button" class="picker-confirm" data-picker-action="pick">Принять</button></div></div></div></div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="buy-ticket-form__passengers">
                <p class="buy-ticket-form__passengers__head">
                  <b>Количество пассажиров</b>
                </p>
                <div class="buy-ticket-form__passengers__item buy-ticket-form__passengers__item__first">
                  <div class="buy-ticket-form__passengers__item__info">
                    <div class="buy-ticket-form__passengers__item__name">
                      <b>Взрослый билет</b>
                    </div>
                    <div class="buy-ticket-form__passengers__item__summ">
                      <b>700 ₽</b>
                    </div>
                  </div>
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
                <div class="buy-ticket-form__passengers__item">
                  <div class="buy-ticket-form__passengers__item__info">
                    <div class="buy-ticket-form__passengers__item__name">
                      <b>Детский билет</b>
                    </div>
                    <div class="buy-ticket-form__passengers__item__summ">
                      <b>400 ₽</b>
                    </div>
                  </div>
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
              <div class="buy-ticket-form__data">
                <div class="buy-ticket-form__data__head">
                  <b>Данные</b>
                </div>
                <div class="uk-flex uk-flex-wrap buy-ticket-form__data__grid">
                  <div class="uk-width-1-1">
                    <div class="uk-form-controls">
                      <label class="uk-form-label">Ваше ФИО</label>
                      <input class="uk-input buy-ticket__input" type="text" placeholder="Введите ФИО" required="" name="">
                    </div>
                  </div>
                  <div class="uk-width-1-2@s">
                    <div class="uk-form-controls">
                      <label class="uk-form-label">Контактный телефон</label>
                      <input class="uk-input buy-ticket__input f_phone" type="text" placeholder="+7 (" required="" name="" inputmode="text">
                    </div>
                  </div>
                  <div class="uk-width-1-2@s">
                    <div class="uk-form-controls">
                      <label class="uk-form-label">Ваш e-mail</label>
                      <input class="uk-input buy-ticket__input" type="text" placeholder="Введите e-mail" required="" name="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="buy-ticket-form__agreement">
                <div class="form_politic buy-ticket__politic">
                  <label>
                    <input class="uk-checkbox" type="checkbox" name="check-personal">
                    <span class="">
                    Я принимаю условия приобритения билетов и даю согласие на обработку <nuxt-link to="/politic" target="_blank">персональных данных</nuxt-link>
                  </span>
                  </label>
                  <label>
                    <input class="uk-checkbox" type="checkbox" name="check-info">
                    <span class="">
                    Согласие получать информацию о скидках, выгодных предложениях и <a href="" target="_blank">мероприятиях на яхтах  </a>
                  </span>
                  </label>
                </div>
              </div>
              <div class="buy-ticket-form__footer">
                <div class="buy-ticket-form__total">
                <span>
                  Итого:
                </span>
                  <span>
                  1 400 ₽
                </span>
                </div>
                <div class="buy-ticket-form__footer__item">
                  <input class="uk-input buy-ticket__input" type="text" placeholder="Промокод" required="" name="">
                  <button class="uk-button uk-button-default button_ticket" type="submit">
                    <span>ПЕРЕЙТИ К ОПЛАТЕ</span>
                    <svg-icon class="icon" name="ticket"/>
                  </button>
                </div>
              </div>
            </form>
            <div class="uk-width-auto">
              <div class="buy-ticket-form__basket">
                <div class="buy-ticket-form__basket__head">
                  <div class="headline_22 t_semibold">
                    Корзина
                  </div>
                  <svg-icon class="icon" name="cart"/>
                </div>
                <div class="buy-ticket-form__basket__main">
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      Причал:
                    </div>
                    <div class="buy-ticket-form__basket__item__info">
                      «Гостиница «Украина»
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      Время и дата:
                    </div>
                    <div class="buy-ticket-form__basket__item__info">
                      5 июня, 20:00 - 22:30
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      Трамвайчик
                    </div>
                    <div class="buy-ticket-form__basket__item__info">

                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      Количество пассажиров
                    </div>
                    <div class="buy-ticket-form__basket__item__passengers">
                      <div class="buy-ticket-form__basket__item__passenger">
                        <div>
                          Взрослый
                        </div>
                        <div>
                          4 шт.
                        </div>
                        <div>
                          <b>2 800 ₽</b>
                        </div>
                      </div>
                      <div class="buy-ticket-form__basket__item__passenger">
                        <div>
                          Детский
                        </div>
                        <div>
                          2 шт.
                        </div>
                        <div>
                          <b>1 000 ₽</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__item__name">
                      Данные
                    </div>
                    <div class="buy-ticket-form__basket__item__info buy-ticket-form__basket__item__info_data">
                      Алексей Владимирович Смирнов<br>
                      smirnoff1996@mail.ru <br>
                      +7(909) 652 93 58
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item">
                    <div class="buy-ticket-form__basket__summ">
                      <div>
                        Сумма:
                      </div>
                      <div>
                        1 120 ₽
                      </div>
                      <div>
                        1 400 ₽
                      </div>
                    </div>
                    <div class="buy-ticket-form__basket__sail">
                      Скидка по промо-коду 20%
                    </div>
                  </div>
                  <div class="buy-ticket-form__basket__item buy-ticket-form__basket__item__last">
                    <a class="uk-button uk-button-default button_ticket" href="#buy-ticket-shedule-info" uk-toggle="">
                      <span>ПЕРЕЙТИ К ОПЛАТЕ</span>
                      <svg-icon class="icon" name="ticket"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="buy-ticket-more-information">
          <div class="buy-ticket-more-information__cards">
            <div class="txt18">
              <b>
                К оплате принимаются
              </b>
            </div>
            <img  data-src="~assets/img/inners/buy_visa.png" alt="" class="uk-visible@s" src="~assets/img/inners/buy_visa.png">
            <img  data-src="~assets/img/inners/buy_visa_small.png" alt="" class="uk-hidden@s" src="~assets/img/inners/buy_visa_small.png">
          </div>
          <div class="buy-ticket-more-information__call">
            <svg-icon class="icon" name="blue-info"/>
            <div class="buy-ticket-more-information__call__p1">
              <b>
                Получить дополнительную
                информацию можно по телефону:
              </b>
            </div>
            <div class="buy-ticket-more-information__call__p2">
              +7 (495) 228-55-55 с 10.00 до 21.00 час. ежедневно
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "Trolley-buy",
  components: {Header}
}
</script>

<style scoped>

</style>
