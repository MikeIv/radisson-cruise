<template>
  <section class="scheme uk-cover-container" id="scheme" @click="clickScheme">
    <img data-src="~assets/img/main/back3.png" class="img_cover" alt="" src="~assets/img/main/back3.png">
    <svg-icon class="scheme_decor1" name="decor2"/>
    <svg-icon class="scheme_decor2" name="decor3"/>
    <div class="scheme__scroll">
      <svg-icon name="scroll"/>
      <span class="scheme_scroll-text">
       {{ $t('use_scroll') }}
      </span>
    </div>
    <div class="uk-container uk-position-relative">
      <div class="headline uk-scrollspy-inview uk-animation-fade" uk-scrollspy="cls: uk-animation-fade; delay: 300">
        <div class="headline_p1">
          {{ schemeTitle[0] }}
        </div>
        <div class="headline_p1">
          {{ schemeTitle[1] }}
        </div>
      </div>

      <div class="scheme__block uk-scrollspy-inview uk-animation-fade"
           uk-scrollspy="cls: uk-animation-fade; delay: 500">
        <div class="scheme-switch">
          <div class="switch-container">
            <div class="switch-name" :class="{'active': !isActive}">{{ $t('yachts_route') }}</div>
          </div>
        </div>
        <ul class="uk-switcher scheme-switcher">
          <li :class="{'active_map': !isActive}">
            <div class="scheme__map">
              <div class="scheme__map_path-container">
                <img data-src="~assets/img/main/map.png" alt="" class="scheme__map_path" src="~assets/img/main/map.png">
                <SchemeCircle v-for="(circle, index) in activeRoutePirses"
                                  :circle="circle"
                                  :idNum="'crcl-'+ circle.customClass"
                                  :key="'crcl'+ index"
                                  :custom-class="circle.customClass"
                                  :port="circle.port"
                                  :title="circle.title"
                                  :location="circle.location"
                                  :info="circle.info"
                                  :img="circle.img"
                                  :activeRoute="activeRoute"
                                  :active-modal="selectInfoModal.id"
                                  :isActiveCircle="circle.isActive"
                                  :type="circle.type"
                                  @show-modal="showModal"
                />

                <SchemePopup
                    :info="selectInfoModal.info"
                    :location="selectInfoModal.location"
                    :idNum="'scheme_item'+ selectInfoModal.id"
                    :img="selectInfoModal.img"
                    v-if="isModalActive"
                />
              </div>

            </div>
            <div class="scheme__bottom scheme__block__buttons">
              <div v-for="(route,index) in activeRoutes" class="uk-width-1-1 scheme_route-button" :key="'schmrt' + index">
                <input v-model.number="activeRoute" type="radio" name="scheme-moor" :value="route.id"
                       :id="`scheme-moor${route.id}`">
                <label class="width-100 height-100 scheme__bottom_item" :for="`scheme-moor${route.id}`">
                  <div class="scheme__bottom_item_left">
                    <div class="scheme__bottom_head">
                      {{ route.name }}
                    </div>
                    <div class="scheme__bottom_info">
                      <svg-icon name='metro' class="icon"/>
                      <span>
                        {{ route.description }}
                      </span>
                    </div>
                  </div>
                  <svg-icon name='arrow3' class="icon"/>
                </label>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<script>
import SchemeCircle from "./SchemeCircle";
import SchemePopup from "./SchemePopup";
import SchemeCircleMain from "./SchemeCircleMain.vue";

export default {
  name: "Scheme",
  components: {SchemeCircleMain, SchemePopup, SchemeCircle},
  props: {
    buttonLink: String,
    points: {
      type: Array,
      required: false,
    },
    activeRoutes: {
      type: Array,
      required: true,
    },
    activeRouteProp: {
      type: Object,
      required: true,
    },
    activeId: Number,
    isTram: Boolean,
  },
  data() {
    return {
      isActive: false,
      activeRoute: this.activeId,
      activeRouteTram: 1,
      isActiveCircle: false,
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
      schemeTrolley: [
        {
          customClass: '3',
          title: `Мэрия Москвы`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '1',
          title: `Парк «Гостиница «Украина»`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: `Причал <br> «Гостиница «Украина» <br> Начало маршрута`,
          isActive: false,
        },
        {
          customClass: '2',
          title: `Дом Правительства РФ`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '4',
          title: `Киевский <br> вокзал`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: `Причал <br> Киевский вокзал`,
          isActive: false,
        },
        {
          customClass: '5',
          title: `Новодевичий <br> монастырь`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '6',
          title: `Стадион «Лужники»`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: `Причал <br> «Воробъевы горы»`,
          isActive: false,
        },
        {
          customClass: '7',
          title: `МГУ им. М.В. Ломоносова`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '8',
          title: `Академия наук РФ`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '9',
          title: `Парк культуры и отдыха <br> им. Горького`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: `Причал «Парк Горького»`,
          isActive: false,
        },
        {
          customClass: '10',
          title: `Центральный <br> Дом Художника`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '11',
          title: `Памятник Петру I`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '12',
          title: `Храм <br> Христа <br> Спасителя`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '13',
          title: `«Дом на набережной»`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '14',
          title: `Кремль`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '15',
          title: `Собор <br> Василия <br> Блаженного`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
        {
          customClass: '16',
          title: `Дом <br> на Котельнической <br> набережной`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: `Причал «Зарядье»`,
          isActive: false,
        },
        {
          customClass: '17',
          title: `Новоспасский <br> монастырь`,
          location: `Новодевичий монастырь`,
          info: `Включен в список всемирного наследия ЮНЕСКО.`,
          port: null,
          isActive: false,
        },
      ],
      tableIdCSStoIdPier: [
        {
          classId: 'none',
          id: 1
        },
        {
          classId: "1",
          id: 2
        },
        {
          classId: "2",
          id: 3
        },
        {
          classId: '3',
          id: 4
        },
        {
          classId: "4",
          id: 5
        },
        {
          classId: "5",
          id: 6
        },
        {
          classId: 'none',
          id: 7
        },
        {
          classId: "6",
          id: 8
        },
        {
          classId: "7",
          id: 9
        },
        {
          classId: 'none',
          id: 10
        },
        {
          classId: "8",
          id: 11
        },
        {
          classId: "9",
          id: 12
        },
        {
          classId: 'none',
          id: 13
        },
        {
          classId: "10",
          id: 14
        },
        {
          classId: "11",
          id: 15
        },
        {
          classId: "13",
          id: 16
        },
        {
          classId: 'none',
          id: 17
        },
        {
          classId: "12",
          id: 18
        },
        {
          classId: "14",
          id: 19
        },
        {
          classId: "15",
          id: 20
        },
        {
          classId: "16",
          id: 21
        },
        {
          classId: "17",
          id: 22
        },
        {
          classId: "18",
          id: 23
        },

      ],
      dataRoutes: [],
      dataPiers: [],
      dataRoute: {},
      schemeData: {},
      selectedPiers: [],
      activeRouteData: Object.assign(this.activeRouteProp),
      isModalActive: false,
      selectInfoModal: {},
    }
  },
  methods: {
    showModal(circle) {
      this.isModalActive = true;
      this.selectInfoModal = circle;
    },
    clearActive() {
      const activeRoute = !this.isActive ? this.schemeYacht : this.schemeTrolley
      for (const customClass in activeRoute) {
        if (Object.hasOwnProperty.call(activeRoute, customClass)) {
          const elPathPoint = activeRoute[customClass];
          elPathPoint.isActive = false;

        }
      }
    },
    clickScheme(e) {
      console.log(e.target.tagName)
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'svg' || e.target.tagName === 'use') {
        const activeRoute = !this.isActive ? this.schemeYacht : this.schemeTrolley
        /*         console.log('activeRoute = ',activeRoute);
                console.log('Click on BUTTON TARGET= ', e.target);
                console.log('Click on BUTTON = ', e.target.tagName); */
        this.clearActive();
        for (const customClass in activeRoute) {
          if (Object.hasOwnProperty.call(activeRoute, customClass)) {
            const elPathPoint = activeRoute[customClass];

            if (elPathPoint.customClass === e.target.id.split('-')[1]) {
              elPathPoint.isActive = true;
              //console.log('Element = ', elPathPoint)
            }
          }
        }


      } else {
        this.isModalActive = false;
        this.clearActive();
        //console.log('Click on Map = ', e.target);
      }

    },
    switchRoutes() {
      this.isActive = !this.isActive
    },

    onToggle(index) {
      if (this.isActiveCircle === index) {
        this.isActiveCircle = null;
      } else {
        this.isActiveCircle = index;
      }
    },

    /*    checkState(e) {
          if(e.currentTarget.classList.contains('uk-test')){
            e.currentTarget.classList.remove('uk-test')
          }
        },*/

    hideOutside() {
      document.querySelector('.test').addEventListener('click', function (e) {
        //console.log(e.target)
        if (e.target !== document.querySelector('.test')) {
          //console.log('true')
        } else {
          //console.log('false')
        }
      })
    },

    filterPierses(id) {
      this.activeRouteData = this.activeRoutes.find((item) => {
        return item.id === id;
      });

      /*piersData = piersData.filter((item) => {
        return item.seq >=  this.dataRoute.seqmin && item.seq <= this.dataRoute.seqmax && item.type == 'object';
      });
      const addStartPier = this.schemeData.piers.find((item) => {
        return item.id ===  this.dataRoute.seqmin;
      });
      const addReturnPier = this.schemeData.piers.find((item) => {
        return item.id ===  this.dataRoute.seqmax;
      });
      piersData.push(addStartPier);
      //piersData.push(addReturnPier);
      const mapPiersData = piersData.map((item) => {
        return {
          customClass: this.tableIdCSStoIdPier.find((el) => el.id === item.id).classId,
          //id: item.id,
          title: item.name,
          location: item.name,
          info: item.description,
          img: item.image,
          port: item.type === 'pier' ? item.name + '<br> Начало / конец маршрута' : null,
          isActive: false,
        }
      });

      this.selectedPiers = mapPiersData;*/
    },
  },
  computed: {
    schemeTitle() {
      return this.$t('route_scheme').split(' ')
    },
    activePierses() {
      return this.points
          .filter((item, index, self) => {
            const matchingPort = this.activeRouteData?.points.find((port) => port.id === item.id);
            const matchingPier = self.find((pier) => pier.type === 'pier' && pier.seq === item.seq && pier.id !== item.id);
            const matchingObject = self.find((obj) => obj.type === 'object' && obj.seq === item.seq && obj.id !== item.id);
            const isDuplicateSeq = self.filter((obj) => obj.seq === item.seq).length > 1;
            const hasMatchingSeqInPoints = this.activeRouteData?.points.some((point) => point.seq === item.seq);
            const isObject = item.type === 'object';
            const isPier = item.type === 'pier';
            const isMatchingPier = matchingPier && !hasMatchingSeqInPoints;
            const isMatchingPort = matchingPort;
            const isMatchingObject = !matchingPort && !matchingObject && !hasMatchingSeqInPoints;
            const isDuplicateSeqPier = isDuplicateSeq && matchingPort;
            const isWithinSeqRange = item.seq >= this.activeRouteData?.seqmin && item.seq <= this.activeRouteData?.seqmax;
            const isActive = item.active === 1;

            return (
                (isObject && isMatchingPier) ||
                (!isObject && isMatchingPort) ||
                (isObject && isMatchingObject) ||
                (isPier && isDuplicateSeqPier)
            ) && isWithinSeqRange && isActive;
          })
          .map((item) => {
            return {
              customClass: item.id,
              id: item.id,
              title: item.name,
              location: item.name,
              info: item.description,
              img: item.image,
              port: this.activeRouteData?.points.find((port) => port.id === item.id) ? item.name + '<br> Начало / конец маршрута' : null,
              type: item.type,
              isActive: !!this.activeRouteData?.points.find((port) => port.id === item.id),
            }
          })
    },
    activeRoutePirses() {
      const points = Object.values(this.activeRouteData?.objects || {})
      const pointsWithPiers = points.concat(this.activeRouteData?.points);
      return pointsWithPiers.map((item) => {
        return {
          customClass: item?.id,
          id: item?.id,
          title: item?.name,
          location: item?.name,
          info: item?.description,
          img: item?.image,
          port: item?.type === 'pier' ? item?.name + '<br>' + `${this.$i18n.t('port_subtitle')}` : null,
          type: item?.type,
          isActive: false,
        }
      })
    },
  },
  watch: {
    activeRoute: function (val) {
      this.filterPierses(val)
    },
  },
  updated() {
    this.activeRouteData = this.activeRoutes.find((item) => {
      return item.id === this.activeRoute;
    });
  },
  mounted() {
    let bubbles = document.querySelectorAll('.scheme__map_path-container .uk-inline')
    let bubblesIcon = document.querySelectorAll('.scheme__map_path-container .uk-inline button')
    let modal = document.querySelector('.test')
    /*    for (let i = 0; i < bubbles.length; i++) {
          const clickedItem = bubbles[i];
          clickedItem.style.zIndex = '5'
          // Add an event listener to each item
          clickedItem.addEventListener("click", function(e) {
            // Remove class from all items
            for (let j = 0; j < bubbles.length; j++) {
              const item = bubbles[j];
              item.classList.remove('uk-open')
              modal.style.display = 'none'
              item.style.zIndex = '5'
            }

            // Add class to the clicked item
            clickedItem.style.zIndex = '6';
            modal.style.display = 'block'
            console.log(modal.offsetWidth )
            console.log(modal.getBoundingClientRect().right)
            console.log(window.innerWidth)
            console.log(clickedItem.getBoundingClientRect().right)
            console.log(modal.getBoundingClientRect().right)
            /!*modal.style.left = clickedItem.offsetLeft  + 'px'*!/
            if ((clickedItem.getBoundingClientRect().right + modal.offsetWidth) > window.innerWidth) {
              modal.style.right = 200 + 'px'
              modal.style.left = ''
            } else {
              modal.style.left = clickedItem.offsetLeft  + 'px'
              modal.style.right = ''
            }
            modal.style.top = clickedItem.offsetTop - 75  + 'px'
          });
        }*/
    this.activeRouteData = this.activeRoutes.find((item) => {
      return item.id === this.activeRoute;
    });
  },
  /*async fetch() {
    try {
      let getDataRoutes = await axios.get(
          `${this.$config.baseURL}maproutes?type=yachts&lang=${this.$i18n.locale}`);
      this.schemeData = getDataRoutes.data
      this.dataRoutes = this.schemeData.routes
      this.dataRoute = this.schemeData.routes[0];
      this.dataPiers = this.schemeData.piers;
      this.filterPierses(1);
    } catch (e) {
      console.log(e)
    }
  },
  fetchOnServer: false,
  fetchKey: 'Scheme-yachts',*/
}
</script>

<style scoped>
.scheme {
  min-height: 1100px;
}

.active_map {
  display: list-item;
}

.uk-inline.uk-open .scheme__item_circle {
  box-shadow: 0px 0px 8px 3px rgb(251 19 1 / 90%);
  background: #fff;
  border-color: #FB1301;
}

.test {
  display: none;
  position: absolute;
  z-index: 1020;
  width: 450px;
  padding: 0;
  color: #666;
}

.width-100 {
  width: 100%;
}

.height-100 {
  height: 100%;
}

.scheme_scroll-text {
  width: 100%;
  max-width: 100px;
}
</style>
