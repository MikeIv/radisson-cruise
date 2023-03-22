<template>
  <div>
    <Header fileName="inners/shedule1.png" :linkName="$t('pages.tickets.yacht.title')" class="buy-ticket-form__header"/>
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
          <div class="buy-ticket-info__headline">
            <div class="headline_p1">
              Ваш билет
            </div>
            <a class="uk-button uk-button-default button_download" href="">
              <svg-icon class="icon" name="download"/>
              <span>СКАЧАТЬ <span class="uk-visible@s">БИЛЕТ</span></span>
            </a>
          </div>

          <div class="buy-ticket-info__grid">
            <div class="buy-ticket-info__item1 uk-position-relative">
              <svg-icon class="buy-ticket-info__item1__icon" name="big-ticket"/>
              <svg-icon class="buy-ticket-info__item1__icon3" name="big-ticket1"/>
              <svg-icon class="buy-ticket-info__item1__icon4" name="big-ticket2"/>
              <img class="buy-ticket-info__item1__logo" data-src="~assets/img/inners/head-logo2@2x.png" alt="" src="~assets/img/inners/head-logo2@2x.png">
              <div class="buy-ticket-info__item1__icon2">
                <svg-icon class="icon" name="category-rotate"/>
                <svg-icon class="icon" name="category-days"/>
              </div>

              <div class="uk-position-relative">
                <div class="buy-ticket-info__line">
                  <div>
                    <b>Причал: </b>
                  </div>
                  <div>
                    «Гостиница «Украина»
                  </div>
                </div>
                <div class="buy-ticket-info__line">
                  <div>
                    <b>Время и дата: </b>
                  </div>
                  <div>
                    5 июня, 20:00 - 22:30
                  </div>
                </div>
                <div class="buy-ticket-info__line">
                  <div>
                    <b>Категория салона:</b>
                  </div>
                  <div>
                    Основной
                  </div>
                </div>
                <div class="buy-ticket-info__line">
                  <div>
                    <b>Пассажиры: </b>
                  </div>
                  <div>
                    1 взрослый, 2 детских
                  </div>
                </div>
                <div class="buy-ticket-info__line">
                  <div>
                    <b>ФИО: </b>
                  </div>
                  <div>
                    Алексей Владимирович Смирнов
                  </div>
                </div>
                <div class="buy-ticket-info__line">
                  <div>
                    <b> E-mail: </b>
                  </div>
                  <div>
                    smirnoff1996@mail.ru
                  </div>
                </div>
                <div class="buy-ticket-info__line">
                  <div>
                    <b>Телефон:</b>
                  </div>
                  <div>
                    +7(909) 652 93 58
                  </div>
                </div>
              </div>
            </div>
            <div class="buy-ticket-info__success">
              <div class="buy-ticket-info__success__head">
                <svg-icon class="icon" name="blue-wallet"/>
                <div class="headline_22 t_semibold uk-position-relative">
                  Оплата прошла<br>
                  успешно
                </div>
              </div>
              <div class="buy-ticket-info__success__main">
                <p>
                  Билет был отправлен на почту,
                  вы так же можете скачать его на этой
                  странице.
                </p>
                <p>
                  Для получения дополнительной информации, пожалуйста, обратитесь к сотрудникам по телефону:
                </p>
                <p>
                  <a href="tel: +7 495 228 55 55"> <b>+7 495 228 55 55</b></a>
                </p>
              </div>
              <div class="buy-ticket-form__basket__item">
                <div class="buy-ticket-form__basket__summ">
                  <div>
                    Итого:
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
            </div>
          </div>
        </div>

        <div class="buy-ticket-info__more__grid uk-flex uk-flex-wrap uk-grid-match">
          <div>
            <div class="buy-ticket-info__is-not-coming">
              <svg-icon class="icon" name="back-mail"/>
              <p class="txt18">
                <b>Почему не приходит билет на электронную почту?</b>
              </p>
              <div class="buy-ticket-info__is-not-coming__text1">
                <p>
                  Причин может быть несколько. Самые распространенные  - сбой почтового сервера, настройки
                  антиспама в корпоративной почте или же неправильно указанный почтовый адрес в графе e-mail.
                </p>
                <p><b>Что делать если мне на почту не пришел электронный билет.</b></p>
                <p>
                  Для этого вам следует связаться с техническими специалистами по телефону: +7 (495) 228-55-55,
                  озвучить, что вам не пришел билет, сказать последние 4 цифры Вашей карты, либо назвать номер
                  платежа и приблизительную дату и время покупки.
                </p>
              </div>
              <p>
                Если у вас нет возможности позвонить, Вы можете написать нам на почту <br>
                <a href="mailto:river-boxoffice@radisson-cruise.ru">river-boxoffice@radisson-cruise.ru</a>, оставив ту же информацию.
              </p>
            </div>
          </div>
          <div>
            <div class="buy-ticket-info__more__item">
              <svg-icon class="icon" name="blue-info"/>
              <p class="txt18">
                <b>Дополнительная информация</b>
              </p>
              <div class="buy-ticket-info__more__item__txt">
                <p>
                  После оплаты билета на сайте Вам на электронную
                  почту придёт подтверждение платежа и билет
                  в формате ".pdf", открывающийся с помощью
                  программы Acrobat Reader.
                </p>
                <p>
                  Проход на борт яхты осуществляется после
                  предъявления билета в распечатанном виде
                  или на мониторе электронного носителя.
                </p>
              </div>
              <p>
                <b>
                  Ознакомьтесь, пожалуйста, с правилами<br>
                  и условиями на <a href="" target="_blank"><b>предоставляемые услуги</b></a>
                </b>
              </p>
            </div>
          </div>
        </div>

        <div class="buy-ticket-important ">
          <div class="uk-flex uk-flex-top buy-ticket-important__grid">
            <div class="buy-ticket-important__info">
              <div class="headline_p4">Уважаемые Гости!</div>
              <p>
                <b>
                  Флотилия «Рэдиссон Ройал» , в соответствии с Указом Мэра г.Москвы от 16.07.2021г №42-УМ,
                  отменяет ограничения, связанные с введением QR-кодов.
                </b>
              </p>
              <p>
                Мы будем рады видеть Вас на борту яхт и речных трамвайчиков при условии соблюдения ранее
                установленных Роспотребнадзором требований по предупреждению распространения новой
                коронавирусной инфекции (COVID-19):
              </p>
              <ul class="list-number">
                <li>
                  Ношение маски и перчаток при нахождении на причале и в пункте продажи билетов
                </li>
                <li>
                  Соблюдение социальной дистанции 2 метра при покупке билетов и посадке на борт судов
                </li>
                <li>
                  Дезинфекция рук антисептиком перед входом на борт судов
                </li>
                <li>
                  Прохождение термометрии бесконтактным способом перед входом на борт судов
                </li>
              </ul>
              <p>
                <b>К сожалению, рейсы с детской анимацией временно приостановлены.</b>
              </p>
              <p>
                С 1 августа будет возобновлено живое музыкальное сопровождение в Ройал классе на яхте
                «Монтана» на вечерних рейсах с четверга по субботу.
              </p>
            </div>
            <div class="buy-ticket-important__warning">
              <svg-icon class="buy-ticket-important-warning__icon" name="warning"/>
              <div class="uk-position-relative buy-ticket-important-warning__head">
                <b>
                  Будьте осторожны и бдительны при покупке
                  билетов на сайтах-двойниках:
                </b>
              </div>
              <div class="buy-ticket-important-warning__sites uk-position-relative">
                <div>
                  radisson-cruise. moscow
                  radisson-tickets. com
                </div>
                <div>
                  radisson-cruise. moscow
                  radisson-tickets. com
                </div>
              </div>
              <div class="buy-ticket-important-warning__p1 uk-position-relative">
                Администраторы данных сайтов не имеют отношения
                к перевозкам, не являются агентами Флотилии по продаже
                билетов, привлекают клиентов ложной информацией о яхтах
                «Рэдиссон Ройал», действуют в собственных корыстных
                интересах.
              </div>
              <div class="buy-ticket-important-warning__p2 uk-position-relative">
                Администраторы данных сайтов не имеют отношения
                к перевозкам, не являются агентами Флотилии по продаже
                билетов, привлекают клиентов ложной информацией о яхтах
                «Рэдиссон Ройал», действуют в собственных корыстных
                интересах.
              </div>
            </div>
          </div>
          <div class="buy-ticket-important__bottom">
            <p>
              <b> Спасибо за понимание! Берегите себя и своих близких! Хорошего Вам рейса и приятного отдыха!</b>
            </p>
            <p>
              <b>С уважением, Администрация.</b>
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Ticket-info"
}
</script>

<style scoped>

</style>
