<template>
  <div>
    <Header class="main_header main-header-index">
      <img src="~images/main_img.webp" data-src="~images/main_img.webp" class="img_cover" alt="">
      <video src="~/assets/video/video-main-2.webm" autoplay="" loop="" muted="" playsinline="" class="img_cover uk-visible@s"></video>
      <div class="uk-overlay-default uk-position-cover header__overlay-default"></div>
      <div class="uk-position-relative header-container">
        <div class="uk-container uk-position-relative">
          <div class="header__middle">
            <div class="header__middle_left">
              <h1>
                <span class="header__p2">{{ $t('main_h1_white') }}</span>
                <br>
                <span class="header__p1">{{ $t('main_h1_blue') }}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-position-relative uk-margin-remove-left">
        <div class="uk-container header-tickets-grid uk-flex uk-flex-wrap">
          <div class="uk-width-auto@s block-tikets">
            <nuxt-link :to="localePath('/yachts/schedule')" class="header-ticket transition">
              <div class="font-29 text-upper">
                <b>{{$t('ticket_yacht')}}</b>
              </div>
              <div class="uk-flex uk-flex-middle">
                <div class="txt16">
                  {{ $t('buttons.buy_ticket') }}
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <nuxt-link to="/official/" class="header-compass uk-visible@l">
        <svg-icon name="main-logo"/>
      </nuxt-link>
    </Header>
    <div class="wrapper">
      <CategoriesCards/>
      <NewsBar :news="currentNews"
               :actions="currentActions"
      />
      <Scheme button-link="/yachts/schedule/"
              :points="schemePiers"
              :active-routes="schemeRoutes"
              :active-route-prop="activeRouteProp"
              :active-id="1"
      />
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.min.css';
import Slider from '../components/Slider';
import RewardSlider from '../components/rewards-slider/RewardSlider';
import NewsBar from '../components/NewsBar';
import Scheme from '../components/Scheme';
import Header from '../components/Header';
import PhotoCard from '../components/PhotoCard';
import SalonCategoryIndex from '../components/SalonCategoryIndex';
import BuyTicketBtn from '../components/BuyTicketBtn';
import CategoriesCards from "../components/categories/CategoriesCards.vue";
import {mapActions} from "vuex";

export default {
  name: 'index',
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
    CategoriesCards,
    BuyTicketBtn,
    SalonCategoryIndex,
    PhotoCard,
    Header,
    Scheme,
    NewsBar,
    RewardSlider,
    Slider,
  },
  props: {},
  data() {
    return {
      isActive: false,
      sliderItems: [
        {
          title: 'Заголовок картинки 1',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 2',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 3',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 4',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 5',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 6',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 7',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 8',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 9',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 10',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 11',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 12',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 13',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 14',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 15',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 16',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 17',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 18',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 19',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 20',
          srcImg: 'home-image-1.jpg',
        },
        {
          title: 'Заголовок картинки 21',
          srcImg: 'home-image-1.jpg',
        },
      ],
      CabinsInfos: [
        {
          category: `Основной зал`,
          price: `от 1 100 ₽`,
          text: `
            <p>Белоснежная яхта с ресторанным сервисом на борту, которая
            совершает круизы по Москве-реке круглый год. Это не просто
            речная прогулка по историческому центру столицы, а целое
            гастрономическое приключение! Во время 2,5-часового круиза
            в Основном зале гости смогут насладиться не только видами
            на главные достопримечательности Москвы, но и попробовать
            блюда интернациональной кухни от бренд-шефа Сергея
            Маслова.</p>

             <p>Салоны класса Основной зал предполагают размещение на
            главной палубе одной из яхт Флотилии. Панорамные окна,
            интернациональная кухня и удобные стулья гарантируют отдых
            от столичной рутины. На открытой палубе яхты Основного
            зала есть тент, который защитит от солнца в жаркую погоду.</p>
            `,
          allPeople: `до 150 персон `,
          restPeople: ` до 220 персон`,
          restSmallPeople: `до 300 персон`,
          slides: [
            {
              fileName: 'yachts/main/3536.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_1128-Pano.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_4468.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/no12.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/royal/DSC02426.jpg',
              text: 'Подпись',
            },
          ],
          royal: false,
          salonInfoItems: [],
        },
        {
          price: `1 500 ₽ `,
          text: `Специально для любителей живой музыки, расслабленной
                   атмосферы и авторской кухни! По будням и по выходным дням от
                   причала «Гостиница «Украина» яхты «Монтана» и «Примавера»
                   отправляются в круизы по Москве-реке, а ее пассажиры, удобно
                   разместившись на диванах, из столичной суеты переносятся в
                   мир неспешного наслаждения жизнью. Теперь достаточно взять
                   билет на рейс Ройал класса, чтобы ощутить всю прелесть и
                   романтику путешествия по Москве-реке, любуясь видами
                   исторического центра Москвы.
            `,
          allPeople: ` 100 персон `,
          restPeople: ` до 150 персон`,
          restSmallPeople: ``,
          slides: [
            {
              fileName: 'yachts/main/3536.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_1128-Pano.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_4468.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/no12.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/royal/DSC02426.jpg',
              text: 'Подпись',
            },
          ],
          royal: true,
          salonInfoItems: [
            `Авторская кухня`,
            `Комфортабельные диванные группы`,
            `Профессиональные свет и звук`,
            ` Живая музыка на вечерних рейсах с четверга по субботу на
              яхте «Монтана»`,
          ],
        },
        {
          price: `2 400 ₽ `,
          text: `
            Проведите уютное мероприятие в камерной атмосфере. Салон
                      Первого класса расположен на верхней палубе суперъяхт
                      «Примавера», «Бьюти», «Феличита», «Монтана» и «Баттерфляй».
                      Из панорамных окон открывается вид на достопримечательности
                      городских пейзажей с наиболее выгодного ракурса. Рядом
                      капитанская рубка, открытая палуба и отдельный санузел. Мы
                      позаботились об эстетике, поэтому выбрали мебель и текстиль,
                      посуду и столовые приборы от премиальных марок
                      Великобритании и Италии – Robert Welch, Churchill, Piazza.
                      Декор и наполнение интерьера не уступает оснащению личных
                      яхт: например, характерная отделка африканским розовым
                      деревом (бубинго) — любимый сорт древесины у Lexus, BMW и
                      Cartier. Первый класс оснащён автономной системой
                      климат-контроля и мультимедийным оборудованием.
            `,
          allPeople: `до 32 персоны  `,
          restPeople: ` до 32 персоны `,
          restSmallPeople: `до 40 персон`,
          slides: [
            {
              fileName: 'yachts/main/3536.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_1128-Pano.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_4468.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/no12.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/royal/DSC02426.jpg',
              text: 'Подпись',
            },
          ],
          royal: false,
          salonInfoItems: [],
        },
        {
          price: `от 1 100 ₽ `,
          text: `
            Филиал популярного рыбного ресторана «Erwin.РекаМореОкеан»
                      расположен прямо на борту роскошной яхты Флотилии «Рэдиссон
                      Ройал», которая ежедневно совершает круизы по Москве-реке.Во
                      время речной прогулки гости могут наслаждаться не только
                      первоклассными блюдами из рыбы и морепродуктов, выловленных
                      из российских 25 рек и морей, но и живописными видами на
                      главные достопримечательности столицы. Во время стоянки на
                      причале «Erwin.Река» функционирует в привычном режиме работы
                      ресторана, регистрация на рейс не нужна.
            `,
          allPeople: `до 150 персон  `,
          restPeople: ` до 250 персон`,
          restSmallPeople: `до 250 персон`,
          slides: [
            {
              fileName: 'yachts/main/3536.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_1128-Pano.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/IMG_4468.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/main/no12.jpg',
              text: 'Подпись',
            },
            {
              fileName: 'yachts/royal/DSC02426.jpg',
              text: 'Подпись',
            },
          ],
        },
      ],
      mainHallSlider: [
        {
          fileName: 'yachts/main/3536.jpg',
          text: 'Подпись',
        },
        {
          fileName: 'yachts/main/IMG_1128-Pano.jpg',
          text: 'Подпись',
        },
        {
          fileName: 'yachts/main/IMG_4468.jpg',
          text: 'Подпись',
        },
        {
          fileName: 'yachts/main/no12.jpg',
          text: 'Подпись',
        },
        {
          fileName: 'yachts/royal/DSC02426.jpg',
          text: 'Подпись',
        },
      ],
      categoriesFetch: [],
      currentNews: [],
      currentActions: [],
      seoData: {},
      pageHeader: [],
      pageHeaderSubtitle: '',
      seoHeaderSplitted: [],
      schemeYacht: [
        {
          customClass: '1',
          title: `Гостиница Radisson <br> Collection, Moscow <br> (Гостиница “Украина”)`,
          location: `Причал «Гостиница «Украина»`,
          info: `Легендарный отель соединил в себе имперский масштаб и эстетику социализма с современным «умным комфортом» и традициями 5* сервиса`,
          img: 'hotel.png',
          port: `Причал <br> «Гостиница «Украина» <br> Начало / конец маршрута `,
          isActive: false,
        },
        {
          customClass: '2',
          title: `Дом Правительства РФ`,
          location: `Дом Правительства РФ`,
          info: `Здание, окутанное легендами, с интересной архитектурой и потрясающей историей.`,
          img: 'goverment.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '4',
          title: `Киевский <br> вокзал`,
          location: `Киевский вокзал`,
          info: `Здание в стиле неоклассицизма с высокой башней с арочными окнами, куполом и скульптурами.`,
          img: 'kiev.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '5',
          title: `Новодевичий <br> монастырь`,
          location: `Новодевичий монастырь`,
          info: `Один из старейших московских монастырей, лучше всего сохранившийся по своему архитектурному облику.`,
          img: 'church4.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '6',
          title: `Стадион «Лужники»`,
          location: `Стадион «Лужники»`,
          info: `Главная футбольная арена страны, построенная в 1956 году. Вместимость – 81 000 чел.`,
          img: 'luzhniki.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '7',
          title: `МГУ им. М.В. Ломоносова`,
          location: `МГУ им. М.В. Ломоносова`,
          info: `Главный корпус, увенчанный шпилем со звездой, гигантскими уступами поднимается на высоту 235,7 м.`,
          img: 'mgu.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '8',
          title: `Здание Президиума РАН`,
          location: `Здание Президиума РАН`,
          info: `22-этажное здание с узнаваемым металлическим декором на кровле под названием «Золотые мозги».`,
          img: 'RAN.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '9',
          title: `ЦПКиО им. М. Горького`,
          location: `ЦПКиО им. М. Горького`,
          info: `Многофункциональное место отдыха и один из любимых парков москвичей и гостей города.`,
          img: 'park.png',
          port: `Причал «Парк Горького» <br> Начало / конец маршрута`,
          isActive: false,
        },
        {
          customClass: '10',
          title: `Новая Третьяковка (ЦДХ)`,
          location: `Новая Третьяковка (ЦДХ)`,
          info: `Основан в 1979 году, ежегодно проводит более 300 выставок и других мероприятий.`,
          img: 'CDX.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '11',
          title: `Памятник Петру I`,
          location: `Памятник Петру I`,
          info: `98-метровая конструкция из нержавеющей стали, бронзы, меди с фигурой Первого русского императора.`,
          img: 'Peter.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '12',
          title: `Храм <br> Христа <br> Спасителя`,
          location: `Храм Христа Спасителя`,
          info: `Самый большой православный храм России с комплексом зданий религиозного и светского назначения.`,
          img: 'church2.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '13',
          title: `Дом на набережной`,
          location: `Дом на набережной`,
          info: `Жилой комплекс 1931 года постройки с интересной историей, известный как место жительства советской элиты.`,
          img: 'house.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '14',
          title: `Московский <br> Кремль`,
          location: `Московский Кремль`,
          info: `Крепость в центре Москвы, главный общественно-политический и историко-художественный комплекс города, официальная резиденция Президента РФ.`,
          img: 'kreml.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '15',
          title: `Собор <br> Василия <br> Блаженного`,
          location: `Собор Василия Блаженного`,
          info: `Величественный древний храм, построенный в XVI веке, пережил множество войн, пожаров и других невзгод, сохранившись до наших дней.`,
          img: 'church3.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '16',
          title: `Высотка на <br> Котельнической набережной`,
          location: `Высотка на Котельнической набережной`,
          info: `32-этажное здание насчитывает 700 квартир, в которых проживало большое количество известных людей.`,
          img: 'high-tower.png',
          port: null,
          isActive: false,
        },
        {
          customClass: '17',
          title: `Новоспасский <br> монастырь`,
          location: `Новоспасский монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          img: 'church.jpg',
          port: null,
          isActive: false,
        },
      ],
      schemeData: {},
      schemePiers: [],
      schemeRoutes: [],
      activeRouteProp: {},
      selectedDates: ``,
      dateInputValue: '',
    };
  },
  methods: {
    ...mapActions(['changeCalendarState']),
    switchTicket() {
      this.isActive = !this.isActive
    },
    sendYandexMetrikaEvent(eventName) {
      this.$yandexMetrika.reachGoal(eventName);
    },
  },
  mounted() {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.changeCalendarState(false)
        } else {
          this.changeCalendarState(true)
        }
      });
    });

    observer.observe(document.querySelector(".main-filter"));

    let today = new Date()
    let now = today.toISOString().split('T')[0]
    let end = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0]
    this.selectedDates = `/yachts/schedule/?start=${now}&end=${end}`
    /*this.checkedCategories = this.$route.query.class.split(',')*/
    const elements = document.querySelectorAll('.litepicker')
    const options = {
      lang: this.$i18n.localeProperties.iso,
      element: document.querySelector('#datepickerTest'),
      singleMode: false,
      numberOfMonths: 2,
      numberOfColumns: 2,
      minDate: new Date().setDate(new Date().getDate() - 0),
      maxDate: new Date().setDate(new Date().getDate() + 60),
      showTooltip: false,
    }
    // console.log("Elements = ",elements);
    this.litePickers = new Litepicker({
      ...options,

      setup: (picker) => {
        picker.on('selected', async (date1, date2) => {
          this.sendYandexMetrikaEvent('filtr_data_2023')
          picker.getDate()

          //console.log(picker.gotoDate())

          function addDays(date, days) {
            let result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
          }

          let dateFirst = addDays(date1.dateInstance, 1).toISOString().split('T')[0]
          let dateEnd = addDays(date2.dateInstance, 1).toISOString().split('T')[0]
          if( date1.getTime() === date2.getTime() ) {
            this.dateInputValue = `${dateFirst}`
            this.selectedDates = `/yachts/schedule/?start=${dateFirst}`
          } else {
            this.dateInputValue = `${dateFirst} - ${dateEnd}`
            this.selectedDates = `/yachts/schedule/?start=${dateFirst}&end=${dateEnd}`
          }
          //console.log("picker selected showRoutes = ",this.showRoutes);
        });
      },
    });
  },
  async fetch() {
    try {
      let seoDataResult = await this.$axios(
          `${this.$config.baseURL}pages?ref=/&lang=${this.$i18n.locale}`);
      this.seoData = seoDataResult.data.result
      let seoHeaderSplitted = seoDataResult.data.result.header.split(' ')
      this.pageHeader = seoHeaderSplitted[0]
      seoHeaderSplitted.shift()
      this.pageHeaderSubtitle = seoHeaderSplitted.join(' ')

      /*this.pageHeaderSubtitle = seoHeaderSplitted.shift().join()*/
    } catch (error) {
      this.$nuxt.error({statusCode: 404, message: 'Data not found'})
    }
    let getDataRoutes = await this.$axios(
        `${this.$config.baseURL}maproutes?type=yachts&lang=${this.$i18n.locale}`);
    this.schemeRoutes = getDataRoutes.data.routes
    this.activeRouteProp = getDataRoutes.data.routes[0]
    this.schemePiers = getDataRoutes.data.piers
  },
  fetchOnServer: true,
  fetchKey: 'main-page',
};
</script>

<style scoped>
.home-insta-slider-wrap {
  /*   width: 100%;
    padding: 10px;
       display: flex;
    justify-content: center; */
}

.swiper-slide img {
  /*     display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; */
}

.title-img-insta {
  position: absolute;
  bottom: 5px;
  left: 35%;
  color: #fff;
}

.swiper-slide.img-insta {
  padding: 2px;
}

.slider-nav-local {
  padding: 0px;
}

.swiper-slide.img-insta img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transition: 1s;
}

.yacht {
  padding-top: 40px;
}

.yacht__informations_switcher {
  margin-top: 30px;
}

.yacht__information_btns {
  margin-top: 30px;
}

.reward-slider {
  padding: 110px 0 95px;
}

.salon_buy-btn {
  border: 1px solid #fff;
}

.section_img {
  width: 100%;
  height: auto;
  padding-top: 110px;
}

.button_switcher {
  width: 180px;
  height: 45px;
  background: 0 0;
  border: 1px solid #fff;
  color: #a1c2e5;
  font-size: 12px;
  font-weight: 700;
  text-transform: none;
}

.button_switcher.uk-active {
  background: #fff;
  color: #1d2240;
}

.yacht__information__list {
  list-style: disc;
}

.instagram .headline .headline_p1:nth-child(3) {
  -webkit-text-stroke: 1px #5f82aa;
  margin-left: 0;
}

.instagram .headline .headline_p1:nth-child(4) {
  margin-left: 216px;
}

.block-tikets {
  border: 1px solid #fff;
  padding: 5px 20px;
}

@media screen and (max-width: 1199px) {
  .block-tikets {
    border: none;
    padding: 0;
  }
  .header-tickets-grid {
    margin-top: 10px;
    margin-left: 0;
  }

}

/*.header-ticket:hover {
  color: #fff;
}*/

.main-filter {
  display: flex;
  width: 100%;
}
.litepicker {
  text-transform: none;
  padding-left: 34px;
}
.buy-ticket__item .icon{
  left: 10px;
}
.buy-ticket__item {
  width: 100%;
  max-width: 180px;
  height: 50px;
}
.main_header {
  padding-top: 0;
}
.main-header-index {
  min-height: 70dvh;
  padding-bottom: 10vh;

}
.header-container {
  margin-top: 0;
}
.header__p1, .header__p2 {
  font-size: clamp(30px, 5vw, 64px)
}
.header-compass {
  right: 125px;
  bottom: 86px
}
@media screen and (max-width: 639px) {
  .uk-button {
    font-size: 10px;
    width: 100%;
    max-width: 180px;
    height: 50px;
  }
}
@media screen and (max-width: 428px) {
  .main-header-index {
    padding-bottom: 11px;
  }
  .main-filter {
    width: auto;
    padding: 0 10px;
  }
}
</style>
