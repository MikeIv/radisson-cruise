<template>
  <div>
    <Header>
      <img src="~images/inners/rest1.webp" data-src="~images/inners/rest1.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ $t('pages.yachts.title') }}
          </h1>
        </div>
      </div>
    </Header>
    <div uk-filter="target: .js-filter">
      <div class="category-cabin__top">
        <div class="uk-container">
          <div class="uk-flex category-cabin__navigation uk-visible@s">
            <a class="uk-button button_switcher-second" href="" uk-filter-control>ВСЕ</a>
            <a class="uk-button button_switcher-second" href="" uk-filter-control="[data-type='yacht']">
              <img data-src="~assets/img/yachts/1_1.png" alt="" src="~assets/img/yachts/1_1.png">
              <span>ЯХТЫ</span>
            </a >
            <a class="uk-button button_switcher-second" href="" uk-filter-control="[data-type='superyacht']">
              <img data-src="~assets/img/yachts/1_2.png" alt="" src="~assets/img/yachts/1_2.png">
              <span>СУПЕР-ЯХТЫ</span>
            </a>
          </div>

          <a href="#modal-category-cabin-filter" class="uk-button btn-news-filter uk-hidden@s" uk-toggle="">
          <span>
            ОТКРЫТЬ ФИЛЬТР
          </span>
            <svg-icon name="svg-flight4" class="icon"/>
          </a>
        </div>
      </div>

      <ul class="js-filter">
        <li data-type="yacht" ref="yachts">
          <div class="category-cabin__headline">
            <div class="uk-container">
              <div class="headline_52">
                яхты
              </div>
            </div>
          </div>
          <Cabin v-for="(cabin, index) in yachtsFetch[0]?.yachts"
                 :key="'cbn1' + index"
                 :name="cabin.name"
                 :fileName="cabin.image"
                 :capImg="cabin.captain_image"
                 :capName="cabin.captain"
                 :experience="cabin.captain_experience"
                 :year="cabin.year"
                 :params="cabin.param"
                 :speed="cabin.speed"
                 :engine="cabin.engine"
                 :decks="cabin.decks"
                 :options="cabin.options"

          />
        </li>
        <li data-type="superyacht" ref="superyachts">
          <div class="category-cabin__headline">
            <div class="uk-container">
              <div class="headline_52">
                СУПЕР-яхты
              </div>
            </div>
          </div>
          <Cabin v-for="(cabin, index) in yachtsFetch[1]?.yachts"
                 :key="'cbn' + index"
                 :name="cabin.name"
                 :fileName="cabin.image"
                 :capImg="cabin.captain_image"
                 :capName="cabin.captain"
                 :experience="cabin.captain_experience"
                 :year="cabin.year"
                 :params="cabin.param"
                 :speed="cabin.speed"
                 :engine="cabin.engine"
                 :decks="cabin.decks"
                 :options="cabin.options"
          />
        </li>
      </ul>
    </div>
        <FilterMobile
        :is-tabs-filter="true"
        :categories="yachtsFetch"
        ref="filterModal"
        @checked-tabs="checkedFilter"
    />
  </div>
</template>

<script>
import Header from "../../components/Header";
import Cabin from "../../components/yachts/cabin/Cabin";
import Breadcrumbs from "../../components/Breadcrumbs";
import axios from "axios";
import UIkit from "uikit";
import FilterMobile from "@/components/modals/Filter";
import CategoryCabinFilter from "../../components/modals/CategoryCabinFilter";
export default {
  name: 'index',
  components: {CategoryCabinFilter, Breadcrumbs, Cabin, Header,FilterMobile},
  data() {
    return{
      yachts: {
        yachtsSuper: [
          {
            name: 'Монтана',
            fileName: 'inners/cat2.png',
            capImg: 'capitans/_DSC0022.png',
            capName: 'Акимов Денис Викторович',
            experience: 11,
            year: 2012,
            params: 'длина – 60,8 м.,\n' +
              '          ширина – 12 м.,\n' +
              '          водоизмещение – 618 тонн',
            speed: 10,
            engine: 'Volvo Penta',
          },
          {
            name: 'Примавера',
            fileName: 'inners/cat3.png',
            capImg: 'capitans/_DSC0039.png',
            capName: 'Выгодин Вячеслав Юрьевич',
            experience: 12,
            year: 2012,
            params: 'длина – 60,8 м.,\n' +
              '          ширина – 12 м.,\n' +
              '          водоизмещение – 618 тонн',
            speed: 10,
            engine: 'Volvo Penta',
          },
          {
            name: 'Бьюти',
            fileName: 'inners/cat4.png',
            capImg: 'capitans/_DSC0016.png',
            capName: 'Смирнов Алексей Павлович',
            experience: 11,
            year: 2012,
            params: 'длина – 60,8 м.,\n' +
              '          ширина – 12 м.,\n' +
              '          водоизмещение – 618 тонн',
            speed: 10,
            engine: 'Volvo Penta',
          },
          {
            name: 'Феличита',
            fileName: 'inners/cat5.png',
            capImg: 'capitans/_DSC9819.png',
            capName: 'Буйнов Валерий Анатольевич',
            experience: 8,
            year: 2012,
            params: 'длина – 60,8 м.,\n' +
              '          ширина – 12 м.,\n' +
              '          водоизмещение – 618 тонн',
            speed: 10,
            engine: 'Volvo Penta',
          },
          {
            name: 'Баттерфляй',
            fileName: 'inners/cat6.png',
            capImg: 'capitans/_DSC0043.png',
            capName: 'Круц Валерий Евгеньевич',
            experience: 11,
            year: 2012,
            params: 'длина – 60,8 м.,\n' +
              '          ширина – 12 м.,\n' +
              '          водоизмещение – 618 тонн',
            speed: 10,
            engine: 'Volvo Penta',
          },
        ],
        yachtsCasual: [
          {
            name: 'Фердинанд',
            fileName: 'inners/cat7.png',
            capImg: 'capitans/_DSC8411.png',
            capName: 'Степаков Николай Витальевич',
            experience: 12,
            year: 2012,
            params: 'длина – 60,8 м.,\n' +
              '          ширина – 12 м.,\n' +
              '          водоизмещение – 618 тонн',
            speed: 10,
            engine: 'Volvo Penta',
            dropInfo: [
              {
                name: 'Открытая палуба',
                description: 'Ресторанная зона «под открытым небом».',
                maxSits: '50 чел.'
              },
              {
                name: 'Верхняя палуба',
                yachtClass: 'Первый класс',
                description: 'Ресторанная зона «под открытым небом».',
                feast: true,
                serving: true,
                maxSits: '50 чел.',
                maxFeast: '24 персоны',
                maxServing: '30-40 персон',
                slides: [
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                ]
              },
              {
                name: 'Нижняя палуба',
                yachtClass: 'Ройал класс',
                description: 'Авторская кухня, комфортабельные диванные группы, живая музыка на вечерних рейсах с четверга по субботу на яхте «Монтана».',
                feast: false,
                serving: true,
                maxSits: '100 чел.',
                squareInfo: '410 м2',
                maxServing: 'до 150 персон',
                slides: [
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                  'main/_MG_1373.png',
                ]
              },
            ],
          },
          {
            name: 'Капелла',
            fileName: 'inners/cat8.png',
            capImg: 'capitans/_DSC0063.png',
            capName: 'Милованов Евгений Андреевич',
            experience: 11,
            year: 2012,
            params: 'длина – 60,8 м.,\n' +
              '          ширина – 12 м.,\n' +
              '          водоизмещение – 618 тонн',
            speed: 10,
            engine: 'Volvo Penta',
          },
          {
            name: 'Бон Вояж',
            fileName: 'inners/cat9.png',
            capImg: 'capitans/_DSC0062.png',
            capName: 'Луковников Артем Михайлович',
            experience: 9,
            year: 2012,
            params: 'длина – 60,8 м.,\n' +
              '          ширина – 12 м.,\n' +
              '          водоизмещение – 618 тонн',
            speed: 10,
            engine: 'Volvo Penta',
          },
          {
            name: 'Селебрити',
            fileName: 'inners/cat10.png',
            capImg: 'capitans/_DSC9677.png',
            capName: 'Полунеев Виктор Александрович',
            experience: 12,
            year: 2012,
            params: 'длина – 60,8 м.,\n' +
              '          ширина – 12 м.,\n' +
              '          водоизмещение – 618 тонн',
            speed: 10,
            engine: 'Volvo Penta',
          },
          {
            name: 'Скарлет',
            fileName: 'inners/cat11.png',
            capImg: 'capitans/_DSC0078.png',
            capName: 'Серегин Денис Сергеевич',
            experience: 11,
            year: 2012,
            params: 'длина – 60,8 м.,\n' +
              '          ширина – 12 м.,\n' +
              '          водоизмещение – 618 тонн',
            speed: 10,
            engine: 'Volvo Penta',
          },
        ],
      },
      yachtsFetch: [],
      currentSelectedCategory: 0,
    }
  },
  methods: {
    showAllFilters(){
      this.$refs.superyachts.classList.remove('hide');
      this.$refs.yachts.classList.remove('hide');
/*       const allCategoriesBloks = document.querySelectorAll('.category-item');
      allCategoriesBloks.forEach((item) => {
        item.classList.remove('hide');
      }) */
    },
    hideAllFilters(){
      this.$refs.superyachts.classList.add('hide');
      this.$refs.yachts.classList.add('hide');
    },
    checkedFilter(emitFilterPrameters){
      //console.log("PARENT CHECKED Yachts Index emitParam = ", emitFilterPrameters)
      //console.log("REFS = ", this.$refs)
      this.currentSelectedCategory = emitFilterPrameters.activeTab;
      switch (this.currentSelectedCategory) {
        case 0:
        this.hideAllFilters();
        this.showAllFilters();
          break;
        case 1:
        this.hideAllFilters();
        //"REFS Class List = ", this.$refs.yachts.classList)
        this.$refs.yachts.classList.remove('hide');
          break;
        case 2:
        this.hideAllFilters();
        this.$refs.superyachts.classList.remove('hide');
          break;
      
        default:
        this.hideAllFilters();
        this.showAllFilters();
          break;
      }
      //this.filterRoutes();
      
    
    },
  },
  beforeDestroy() {
    //console.log("DESTROY Yachts Index =", this.$refs.filterModal);
    this.$refs.filterModal.destroyModal();
    
  },
  mounted() {
    const yachtSlider = document.querySelectorAll('.yacht__slider');
    yachtSlider.forEach(element => {
      //Счетчик слайда яхт
      UIkit.util.on(element, 'itemshown', function(e) {
        // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
        element.querySelector('.slider_number').textContent = (('0' + (e.detail[0].index + 1)).slice(-2));
      });
    });
  },

  async fetch() {
    let blocks = await axios.get(
        `${this.$config.baseURL}yachts`);
    this.yachtsFetch = await blocks.data;

    if (this.yachtsFetch) {
      this.$children.forEach(child => {
        //console.log(child)
      })
    }
    this.$nextTick(() => {
      this.$children.forEach(child => {
        //console.log(child.$el.id)
        if (this.$route.hash === `#${child.$el.id}`) {
          child.$el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
      })
    }, 100)
  },
  fetchOnServer: true,
  fetchKey: 'yachts',
};
</script>

<style scoped>
.hide{
  display: none;
}
.button_switcher-second {
  min-width: 210px;
  padding: 0 46px;
  height: 55px;
  background: #3a468e;
  border: 1px solid #fff;
  color: #a1c2e5;
  margin-right: -1px;
}
.button_switcher-second.active,
.button_switcher-second:hover{
  background: #00c1f3;
  color: #fff;
  border-color: #00c1f3;
}
ul {
  list-style:none;
  padding-left: 0;
  margin: 0;
}

.category-cabin__navigation .uk-active {
  background: #00c1f3;
  color: #fff;
  border-color: #00c1f3;
}


</style>
