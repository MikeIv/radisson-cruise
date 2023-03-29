<template>
  <div class="">
    <Header class="buy-sertificat-header">
      <img src="~images/inners2/rules1.webp" data-src="~images/inners2/rules1.webp" class="img_cover" alt="">
    </Header>
    <div class="padding_bottom uk-container buy-sertificat__section">
      <div class="buy-sertificat__wrap">
        <ul class="uk-breadcrumb ">
          <li>
            <nuxt-link to="/" class="transition">
              <span>{{ $t('breadCrumb.index') }}</span>
            </nuxt-link>
          </li>
          <li>
          <span>
            {{ $t('pages.tickets.certificates.breadCrumb.link') }}
          </span>
          </li>
        </ul>
        <div class="buy-sertificat__head">
          <img  data-src="~assets/img/sertificat/sert1.png" alt="" class="buy-sertificat-head__back" src="~assets/img/sertificat/sert1.png">
          <div class="headline_p1 uk-position-relative">
            {{ $t('pages.tickets.certificates.title') }}
          </div>
          <div class="buy-sertificat-head__p2 uk-position-relative">
            {{ $t('pages.tickets.certificates.description') }}
          </div>
        </div>
        <div class="headline_22 buy-sertificat__headline_22">
          {{ $t('pages.tickets.certificates.subtitle') }}
        </div>
        <div class="buy-sertificat__grid uk-grid-match uk-flex uk-flex-wrap uk-child-width-1-2@m">
<!--          <div>
            <div class="buy-sertificat__card">
              <div class="uk-cover-container buy-sertificat-card__img">
                <img data-src="~assets/img/sertificat/sert2.png" class="img_cover" alt="" src="~assets/img/sertificat/sert2.png">
                <div class="buy-sertificat-card__badge">
                  <img data-src="~assets/img/sertificat/sert6.png" alt="" src="~assets/img/sertificat/sert6.png">
                </div>
              </div>
              <div class="buy-sertificat-card__main">
                <div class="txt18">
                  Сертификат в Основной зал
                </div>
                <div class="buy-sertificat-card__p1">
                  Что входит в стоимость?
                </div>
                <div class="buy-sertificat-card__p2">
                  2,5 часа прогулки по Москве-реке на белоснежной яхте в Основном зале
                </div>
              </div>
              <div class="buy-sertificat-card__bottom uk-flex uk-flex-between uk-flex-middle">
                <div class="headline_22">
                  1 800 ₽
                </div>
                <a class="uk-button uk-button-default" href="/buy_ticket_form_sertificat.html">
                  КУПИТЬ СЕРТИФИКАТ
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="buy-sertificat__card">
              <div class="uk-cover-container buy-sertificat-card__img">
                <img data-src="~assets/img/sertificat/sert3.png" class="img_cover" alt="" src="~assets/img/sertificat/sert2.png">
                <div class="buy-sertificat-card__badge">
                  <img data-src="~assets/img/sertificat/sert6.png" alt="" src="~assets/img/sertificat/sert6.png">
                </div>
              </div>
              <div class="buy-sertificat-card__main">
                <div class="txt18">
                  Сертификат в Ройал класс
                </div>
                <div class="buy-sertificat-card__p1">
                  Что входит в стоимость?
                </div>
                <div class="buy-sertificat-card__p2">
                  2,5 часа прогулки по Москве-реке на белоснежной яхте в Ройал классе
                </div>
              </div>
              <div class="buy-sertificat-card__bottom uk-flex uk-flex-between uk-flex-middle">
                <div class="headline_22">
                  2 100 ₽
                </div>
                <a class="uk-button uk-button-default" href="/buy_ticket_form_sertificat.html">
                  КУПИТЬ СЕРТИФИКАТ
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="buy-sertificat__card">
              <div class="uk-cover-container buy-sertificat-card__img">
                <img data-src="~assets/img/sertificat/sert4.png" class="img_cover" alt="" src="~assets/img/sertificat/sert2.png">
                <div class="buy-sertificat-card__badge">
                  <img data-src="~assets/img/sertificat/sert6.png" alt="" src="~assets/img/sertificat/sert6.png">
                </div>
              </div>
              <div class="buy-sertificat-card__main">
                <div class="txt18">
                  Сертификат с питанием в Основной зал
                </div>
                <div class="buy-sertificat-card__p1">
                  Что входит в стоимость?
                </div>
                <div class="buy-sertificat-card__p2">
                  <p>
                    2,5 часа прогулки по Москве-реке на белоснежной яхте в Основном зале
                  </p>
                  <p>
                    Блюда <a href="">меню а-ля карт</a> на выбор (холодная закуска, салат, суп, горячее
                    блюдо*)
                  </p>
                  <p class="txt12">
                    *Из представленных 4-х позиций можно выбрать 3
                  </p>
                </div>
              </div>
              <div class="buy-sertificat-card__bottom uk-flex uk-flex-between uk-flex-middle">
                <div class="headline_22">
                  4 600 ₽
                </div>
                <a class="uk-button uk-button-default" href="/buy_ticket_form_sertificat.html">
                  КУПИТЬ СЕРТИФИКАТ
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="buy-sertificat__card">
              <div class="uk-cover-container buy-sertificat-card__img">
                <img data-src="~assets/img/sertificat/sert4.png" class="img_cover" alt="" src="~assets/img/sertificat/sert2.png">
                <div class="buy-sertificat-card__badge">
                  <img data-src="~assets/img/sertificat/sert6.png" alt="" src="~assets/img/sertificat/sert6.png">
                </div>
              </div>
              <div class="buy-sertificat-card__main">
                <div class="txt18">
                  Сертификат с питанием в Ройал класс
                </div>
                <div class="buy-sertificat-card__p1">
                  Что входит в стоимость?
                </div>
                <div class="buy-sertificat-card__p2">
                  <p>
                    2,5 часа прогулки по Москве-реке на белоснежной яхте в Ройал классе
                  </p>
                  <p>
                    Блюда меню Ройал класса на выбор (холодная закуска, горячая закуска,
                    суп, горячее блюдо*)
                  </p>
                  <p class="txt12">
                    *Из представленных 4-х позиций можно выбрать 3
                  </p>
                </div>
              </div>
              <div class="buy-sertificat-card__bottom uk-flex uk-flex-between uk-flex-middle">
                <div class="headline_22">
                  4 600 ₽
                </div>
                <a class="uk-button uk-button-default" href="/buy_ticket_form_sertificat.html">
                  КУПИТЬ СЕРТИФИКАТ
                </a>
              </div>
            </div>
          </div>-->

<!--          <div class="" v-for="card in cards">
            <CertificateCard :fileName="card.imgURL"
                             :title="card.title"
                             :description="card.description"
                             :to-eat="card.toEat"
                             :menu="card.menu"
                             :price="card.price"
            />
          </div>-->

          <div class="" v-for="card in cardsFetch">
            <CertificateCard :fileName="card.image"
                             :title="card.name"
                             :description="card.description"
                             :price="card.price"
                             :id="card.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  <div>
      <section class=" padding_bottom buy-sertificat__section">
        <div class="uk-container">
          <div class="buy-sertificat__wrap">
            <ul class="uk-breadcrumb ">
              <li>
                <nuxt-link to="/" class="transition">
                  <span>Главная</span>
                </nuxt-link>
              </li>
              <li>
                <span>
                  Подарочные сертификаты
                </span>
              </li>
            </ul>
            <div class="buy-sertificat__head">
              <img data-src="~assets/img/sertificat/sert1.png" alt="" class="buy-sertificat-head__back" src="~assets/img/sertificat/sert1.png">
              <div class="headline_p1 uk-position-relative">
                Подарочные
                сертификаты
              </div>
              <div class="buy-sertificat-head__p2 uk-position-relative">
                Сертификаты на круизы на белоснежных яхтах Флотилии «Рэдиссон Ройал» – универсальный
                подарок для близких, коллег и друзей. Впечатления, полученные от круиза, надолго останутся
                в памяти, а фотографии потрясающих видов исторического центра Москвы – в фотопленке.
              </div>
            </div>
            <div class="headline_22 buy-sertificat__headline_22">
              Выберите свой Подарочный сертификат Флотилии с открытой датой:
            </div>
            <div class="buy-sertificat__grid uk-grid-match uk-flex uk-flex-wrap uk-child-width-1-2@m">
              <div>
                <div class="buy-sertificat__card">
                  <div class="uk-cover-container buy-sertificat-card__img">
                    <img uk-img="" data-src="/img/sertificat/sert2.png" class="img_cover" alt="" src="~assets/img/sertificat/sert2.png">
                    <div class="buy-sertificat-card__badge"><img uk-img="" data-src="/img/sertificat/sert6.png" alt="" src="~assets/img/sertificat/sert6.png"></div>
                  </div>
                  <div class="buy-sertificat-card__main">
                    <div class="txt18">
                      Сертификат в Основной зал
                    </div>
                    <div class="buy-sertificat-card__p1">
                      Что входит в стоимость?
                    </div>
                    <div class="buy-sertificat-card__p2">
                      2,5 часа прогулки по Москве-реке на белоснежной яхте в Основном зале
                    </div>
                  </div>
                  <div class="buy-sertificat-card__bottom uk-flex uk-flex-between uk-flex-middle">
                    <div class="headline_22">
                      1 800 ₽
                    </div>
                    <a class="uk-button uk-button-default" href="/buy_ticket_form_sertificat.html">
                      КУПИТЬ СЕРТИФИКАТ
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="buy-sertificat__card">
                  <div class="uk-cover-container buy-sertificat-card__img">
                    <img uk-img="" data-src="/img/sertificat/sert3.png" class="img_cover" alt="" src="~assets/img/sertificat/sert3.png">
                    <div class="buy-sertificat-card__badge"><img uk-img="" data-src="/img/sertificat/sert6.png" alt="" src="~assets/img/sertificat/sert6.png"></div>
                  </div>
                  <div class="buy-sertificat-card__main">
                    <div class="txt18">
                      Сертификат в Ройал класс
                    </div>
                    <div class="buy-sertificat-card__p1">
                      Что входит в стоимость?
                    </div>
                    <div class="buy-sertificat-card__p2">
                      2,5 часа прогулки по Москве-реке на белоснежной яхте в Ройал классе
                    </div>
                  </div>
                  <div class="buy-sertificat-card__bottom uk-flex uk-flex-between uk-flex-middle">
                    <div class="headline_22">
                      2 100 ₽
                    </div>
                    <a class="uk-button uk-button-default" href="/buy_ticket_form_sertificat.html">
                      КУПИТЬ СЕРТИФИКАТ
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="buy-sertificat__card">
                  <div class="uk-cover-container buy-sertificat-card__img">
                    <img uk-img="" data-src="/img/sertificat/sert4.png" class="img_cover" alt="" src="~assets/img/sertificat/sert4.png">
                    <div class="buy-sertificat-card__badge"><img uk-img="" data-src="/img/sertificat/sert6.png" alt="" src="~assets/img/sertificat/sert6.png"></div>
                  </div>
                  <div class="buy-sertificat-card__main">
                    <div class="txt18">
                      Сертификат с питанием в Основной зал
                    </div>
                    <div class="buy-sertificat-card__p1">
                      Что входит в стоимость?
                    </div>
                    <div class="buy-sertificat-card__p2">
                      <p>
                        2,5 часа прогулки по Москве-реке на белоснежной яхте в Основном зале
                      </p>
                      <p>
                        Блюда <a href="">меню а-ля карт</a> на выбор (холодная закуска, салат, суп, горячее
                        блюдо*)
                      </p>
                      <p class="txt12">
                        *Из представленных 4-х позиций можно выбрать 3
                      </p>
                    </div>
                  </div>
                  <div class="buy-sertificat-card__bottom uk-flex uk-flex-between uk-flex-middle">
                    <div class="headline_22">
                      4 600 ₽
                    </div>
                    <a class="uk-button uk-button-default" href="/buy_ticket_form_sertificat.html">
                      КУПИТЬ СЕРТИФИКАТ
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="buy-sertificat__card">
                  <div class="uk-cover-container buy-sertificat-card__img">
                    <img uk-img="" data-src="/img/sertificat/sert5.png" class="img_cover" alt="" src="~assets/img/sertificat/sert5.png">
                    <div class="buy-sertificat-card__badge"><img uk-img="" data-src="/img/sertificat/sert6.png" alt="" src="~assets/img/sertificat/sert6.png"></div>
                  </div>
                  <div class="buy-sertificat-card__main">
                    <div class="txt18">
                      Сертификат с питанием в Ройал класс
                    </div>
                    <div class="buy-sertificat-card__p1">
                      Что входит в стоимость?
                    </div>
                    <div class="buy-sertificat-card__p2">
                      <p>
                        2,5 часа прогулки по Москве-реке на белоснежной яхте в Ройал классе
                      </p>
                      <p>
                        Блюда меню Ройал класса на выбор (холодная закуска, горячая закуска,
                        суп, горячее блюдо*)
                      </p>
                      <p class="txt12">
                        *Из представленных 4-х позиций можно выбрать 3
                      </p>
                    </div>
                  </div>
                  <div class="buy-sertificat-card__bottom uk-flex uk-flex-between uk-flex-middle">
                    <div class="headline_22">
                      4 600 ₽
                    </div>
                    <a class="uk-button uk-button-default" href="/buy_ticket_form_sertificat.html">
                      КУПИТЬ СЕРТИФИКАТ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>-->
</template>

<script>
import Header from "../../components/Header";
import CertificateCard from "../../components/tickets/CertificateCard";
import axios from "axios";
export default {
  name: "index",
  components: {CertificateCard, Header},
  head() {
    return {
      title: `Флотилия Radisson Royal Moscow -  Подарочные сертификаты`,
    }
  },
  data() {
    return{
      cards:[
        {
          imgURL: 'sertificat/sert2.png',
          title: 'Сертификат в Основной зал',
          description: `2,5 часа прогулки по Москве-реке на белоснежной яхте в Основном зале`,
          toEat: false,
          menu: 'а-ля карт',
          price: '1 800',
        },
        {
          imgURL: 'sertificat/sert2.png',
          title: 'Сертификат с питанием в Ройал класс',
          description: `2,5 часа прогулки по Москве-реке на белоснежной яхте в Ройал классе`,
          toEat: true,
          menu: 'Ройал класса',
          price: '4 600',
        },
      ],
      cardsFetch: null,
    }
  },
  async fetch() {
    let blocks = await axios.get(
      `${this.$config.baseURL}certificates`);
    this.cardsFetch = blocks.data
  },
  fetchOnServer: true,
  fetchKey: 'certificates',
}
</script>

<style scoped>
/*
.buy-sertificat__wrap {
  background: #fff;
  !*margin-top: -300px;*!
  position: relative;
  padding: 22px 150px 115px;
}

.buy-sertificat__head {
  border-bottom: 1px solid #a1c2e5;
  padding-bottom: 60px;
  padding-top: 40px;
  position: relative;
  padding-right: 650px;
}

.buy-sertificat-head__back {
  bottom: 0;
  right: -100px;
  position: absolute;
}
.headline_p1 {
  font-size: 66px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 0;
  line-height: 1.2;
  font-family: cowor,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}
.buy-sertificat-head__p2 {
  margin-top: 45px;
  font-size: 14px;
}

.buy-sertificat__headline_22 {
  font-weight: 600;
  margin-top: 94px;
}

.buy-sertificat__grid {
  margin-left: -60px;
}

.buy-sertificat__grid>div {
  padding-left: 60px;
  margin-top: 60px;
}

.buy-sertificat__card {
  display: flex;
  border: 1px solid #a1c2e5;
  flex-direction: column;
}

.buy-sertificat-card__img {
  height: 315px;
  position: relative;
}

.buy-sertificat-card__badge {
  width: 80px;
  height: 77px;
  border-radius: 0 0 40px 40px;
  background: #fff;
  display: flex;
  align-items: flex-start;
  position: absolute;
  right: 39px;
  top: 0;
  justify-content: center;
  padding-top: 6px;
}

.img_cover {
  position: absolute;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  transition: 1s;
}

.buy-sertificat-card__main {
  padding: 38px 50px 40.5px;
  margin-bottom: auto;
}

.buy-sertificat-card__main .txt18 {
  color: #00c1f3;
  font-weight: 600;
}

.buy-sertificat-card__p1 {
  margin-top: 18px;
  font-size: 14px;
  font-weight: 600;
}

.buy-sertificat-card__p2 {
  margin-top: 9.5px;
  font-size: 14px;
}

.buy-sertificat-card__bottom {
  padding: 24px 50px;
  border-top: 1px solid #a1c2e5;
}

.buy-sertificat-card__bottom .headline_22 {
  font-weight: 600;
}

.buy-sertificat-card__bottom .uk-button {
  width: 235px;
}
*/

</style>
