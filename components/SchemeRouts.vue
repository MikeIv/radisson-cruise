<template>
    <section class="scheme uk-cover-container" id="scheme" @click="cickSheme">
        <img data-src="~assets/img/main/back3.png" class="img_cover" alt="" src="~assets/img/main/back3.png">
        <svg-icon class="scheme_decor1" name="decor2"/>
<!--        <img src="~assets/img/svg/decor3.svg" alt="" class="scheme_decor2" uk-svg>-->
        <svg-icon class="scheme_decor2" name="decor3"/>
        <div class="scheme__scroll">
            <svg-icon name="scroll"/>
            <span>
              Используйте<br>
              прокрутку
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

            <div class="scheme__block uk-scrollspy-inview uk-animation-fade" uk-scrollspy="cls: uk-animation-fade; delay: 500">
<!--                <div class="scheme-switch">
                    <div class="switch-container">
                        <div class="switch-name" :class="{'active': !isActive}">Маршрут яхт</div>
&lt;!&ndash;                        <label class="switch-round">
                            <input type="checkbox" @click="switchRoutes">
                            <span class="switch-slider"></span>
                        </label>
                        <div class="switch-name" :class="{'active': isActive}">Маршрут трамвайчиков</div>&ndash;&gt;
                    </div>
                </div>-->
                <ul class="uk-switcher scheme-switcher">
                    <li :class="{'active_map': !isActive}">
                        <div class="scheme__map">
                            <div class="scheme__map_path-container">
                                <img data-src="~assets/img/main/map.png" alt="" class="scheme__map_path" src="~assets/img/main/map.png">

                                <div class="scheme_item18">
                                    <svg-icon name='svg-return' class="icon"/>
                                    <span>
                                     {{ $t('reversal') }}
                                    </span>
                                </div>

<!--                                 <div v-if="activeRoute === 2" class="scheme_item19">
                                    <svg-icon name='svg-return' class="icon"/>
                                    <span>
                                      Разворот2
                                    </span>
                                </div> -->

                                <SchemeCircle v-for="(circle, index) in arrDataPoints"
                                              :idNum="'crcl-'+ circle.customClass"
                                              :key="'crclr'+ index"
                                              :custom-class="circle.customClass"
                                              :port="circle.port"
                                              :title="circle.title"
                                              :location="circle.location"
                                              :info="circle.info"
                                              :img="circle.img"
                                              :activeRoute="activeRoute"
                                              :isActiveCircle="circle.isActive"
                                             
                                              
                                />
                                <SchemePopup 
                                  :info="selectInfoModal.info"
                                  :location="selectInfoModal.location"
                                  :idNum="'scheme_item'+ selectInfoModal.customClass"
                                  :img="selectInfoModal.img"
                                  v-if="isModalActive"
                                />
        
                                <!-- @onToggle="onToggle(index)" -->
                            </div>

                        </div>
                        <div class="scheme__bottom scheme__block__buttons">
                          <div class="uk-width-1-1" v-for="(itemRoutButton, idxir) in dataRoutes" :key="'idxir-'+idxir">
                                <input type="radio" name="scheme-moor" value="Причал «Гостиница «Украина»" id="scheme-moor1" checked>
                                <label class="width-100 height-100 scheme__bottom_item " for="scheme-moor1">
                                    <div class="scheme__bottom_item_left">
                                        <div class="scheme__bottom_head">
                                            {{ itemRoutButton.title }}
                                        </div>
                                        <div class="scheme__bottom_info">
                                            <svg-icon name='metro' class="icon"/>
                                            <span>
                                              {{ itemRoutButton.subtitle}}
                                            </span>
                                        </div>
                                    </div>
                                    <svg-icon name='arrow3' class="icon"/>
                                </label >                                
                            </div>
<!--                             <div class="uk-width-1-1">
                                <input type="radio" name="scheme-moor" value="Причал «Гостиница «Украина»" id="scheme-moor1" checked>
                                <label class="width-100 height-100 scheme__bottom_item " for="scheme-moor1" @click="activeRoute = 1">
                                    <div class="scheme__bottom_item_left">
                                        <div class="scheme__bottom_head">
                                            Причал «Гостиница «Украина»
                                        </div>
                                        <div class="scheme__bottom_info">
                                            <svg-icon name='metro' class="icon"/>
                                            <span>
                                            Киевская, набережная Тараса Шевченко.
                                            </span>
                                        </div>
                                    </div>
                                    <svg-icon name='arrow3' class="icon"/>
                                </label >                                
                            </div> 
                            <div class="uk-width-1-1 ">
                                <input type="radio" name="scheme-moor" value="Причал «Гостиница «Украина»" id="scheme-moor2">
                                <label class="width-100 height-100 scheme__bottom_item" for="scheme-moor2" @click="activeRoute = 2">
                                    <div class="scheme__bottom_item_left">
                                        <div class="scheme__bottom_head">
                                            Причал «Парк Горького»
                                        </div>
                                        <div class="scheme__bottom_info">
                                        <svg-icon name='metro' class="icon"/>
                                        <span>
                                            Парк Культуры/Октябрьская, Пушкинская набережная.
                                        </span>
                                        </div>
                                    </div>
                                    <svg-icon name='arrow3' class="icon"/>
                                </label>                                
                            </div>-->

                            <div class="width-100 ">
                                <a :href="tramsDoc" class="width-100 height-100 uk-button uk-button-default button_ticket">
                                    <span>{{ $t('schedule') }}</span>
                                    <svg-icon name='clock' class="icon"/>
                                </a>
                            </div>
                        </div>
                    </li>
<!--                    <li  :class="{'active_map': isActive}">
                        <div class="scheme__map">
                            <div class="scheme__map_path-container">
                                <img  data-src="~assets/img/main/map.png" alt="" class="scheme__map_path" src="~assets/img/main/map.png">
                                <SchemeCircle v-for="(circle, index) in schemeTrolley"
                                              :idNum="'crcl1-'+ circle.customClass"
                                              :key="'crcl1'+ index"
                                              :custom-class="circle.customClass"
                                              :port="circle.port"
                                              :title="circle.title"
                                              :location="circle.location"
                                              :info="circle.info"
                                              :isActive="isActive"
                                              :activeRoute="activeRouteTram"
                                              :isActiveCircle="circle.isActive"

                                />

                                <div class="scheme_item18">
                                    <svg-icon name='svg-return' class="icon"/>
                                    <span>
                                      Разворот
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div class="scheme__bottom">
                            <input type="radio" name="scheme-moor2" value="Причал «Гостиница «Украина»" id="scheme-moor3" checked="">
                            <label class="scheme__bottom_item" for="scheme-moor3" @click="activeRouteTram = 1">
                                <div class="scheme__bottom_item_left">
                                    <div class="scheme__bottom_head">
                                        Маршрут 1
                                    </div>
                                    <div class="scheme__bottom_info">
                                        <svg-icon name='svg-port' class="icon"/>
                                        <span>
                                          От причала «Гостиница «Украина»
                                          продолжительность 2 часа 45 минут
                                        </span>
                                    </div>
                                </div>
                                <svg-icon name='arrow3' class="icon"/>
                            </label>
                            <input type="radio" name="scheme-moor2" value="Причал «Гостиница «Украина»" id="scheme-moor4">
                            <label class="scheme__bottom_item" for="scheme-moor4" @click="activeRouteTram = 2">
                                <div class="scheme__bottom_item_left">
                                    <div class="scheme__bottom_head">
                                        Маршрут 2
                                    </div>
                                    <div class="scheme__bottom_info">
                                      <svg-icon name='svg-port' class="icon"/>
                                        <span>
                                          Круговой маршрут от причала «Парк
                                          Горького»без остановок 50 минут
                                        </span>
                                    </div>
                                </div>
                                <svg-icon name='arrow3' class="icon"/>
                            </label>

                            <nuxt-link to="tickets/trolley" class="uk-button uk-button-default button_ticket" type="submit">
                                <span>Купить билет</span>
                                <svg-icon name='ticket' class="icon"/>
                            </nuxt-link>
                        </div>
                    </li>-->
                </ul>

            </div>
            </div>
    </section>
</template>

<script>
import SchemeCircle from "./SchemeCircle";
import SchemePopup from "./SchemePopup";
import {mapGetters} from "vuex";
export default {
  name: "SchemeRouts",
  props: {
    idTypeMap: {
       type: Number,
       default: 1
    },
    arrDataPoints: Array,
    

  },
  components: {SchemePopup, SchemeCircle},
  data(){
    return{
      isActive: false,
      isModalActive: false,
      activeRoute: 2,
      activeRouteTram: 1,
      isActiveCircle: true,
      currInfo: '9',
      dataRoutes: [
        {
          title: 'Маршрут «Сердце столицы»',
          subtitle: 'Круговой маршрут от причала «Парк Горького» без остановок 50 минут',
        }

      ],
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
    }
  },
  computed: {
    ...mapGetters(['tramsDoc']),
    selectInfoModal() {
      return this.arrDataPoints.find((item) => item.customClass === this.currInfo);
    },
    schemeTitle() {
      return this.$t('route_scheme').split(' ')
    },
  },
  methods: {
    clearActive()  {
        const activeRoute = !this.isActive ? this.schemeYacht : this.schemeTrolley
        for (const customClass in activeRoute) {
            if (Object.hasOwnProperty.call(activeRoute, customClass)) {
                const elPathPoint = activeRoute[customClass];
                    elPathPoint.isActive = false;

            }
        }        
    },
    cickSheme(e){
        console.log('Click on Map = ', e.target);
        if(e.target.tagName == 'BUTTON'){
          this.isModalActive = true;
         const activeRoute = !this.isActive ? this.schemeYacht : this.schemeTrolley   
        /*console.log('activeRoute = ',activeRoute);*/
        console.log('Click on BUTTON TARGET= ', e.target);
        console.log('Click on BUTTON = ', e.target.tagName);
        console.log('Click on index = ', e.target.id.split('-')[1]);
        console.log('Click on arrDataPoints = ', this.arrDataPoints);
        
        this.currInfo = e.target.id.split('-')[1];
        this.clearActive();
        for (const customClass in activeRoute) {
            if (Object.hasOwnProperty.call(activeRoute, customClass)) {
                const elPathPoint = activeRoute[customClass];
                
                if(elPathPoint.customClass === e.target.id.split('-')[1]){
                    elPathPoint.isActive = true;
                    //console.log('Element = ', elPathPoint)
                }
            }
        }


        }
        else{
          this.isModalActive = false;
            this.clearActive();
            //console.log('Click on Map = ', e.target);
        }

    },
    switchRoutes() {
      this.isActive = !this.isActive
    },

    currCircle(index) {
      console.log("call currCircle", index);
      this.currInfo = index;
    },
    onToggleRoute(index) {
      console.log("call onToggleRoute");
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
      document.querySelector('.test').addEventListener('click', function (e){
        //console.log(e.target)
        if(e.target !== document.querySelector('.test')) {
          //console.log('true')
        } else {
          //console.log('false')
        }
      })
    }
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
  }
}
</script>

<style scoped>
.scheme {
  min-height: 1100px;
}

.active_map {
  display: list-item;
}

.uk-inline.uk-open .scheme__item_circle{
  box-shadow: 0px 0px 8px 3px rgb(251 19 1 / 90%);
  background: #fff;
  border-color: #FB1301;
}

.test {
  display: none;
  position: absolute;
  z-index: 1020;
  width:450px;
  padding: 0;
  color: #666;
}
.width-100 {
  width: 100%;
}
.height-100 {
  height: 100%;
}
@media screen and (max-width: 1199px) {
  .height-100 {
    height: 85px;
  }
}
.scheme__block__buttons{
    height: 130px;
}

</style>
