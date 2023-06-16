<template>
  <div>
<!--    <img :src="require(`~/assets/img/${fileName}`)" :data-src="require(`~/assets/img/${fileName}`)" class="img_cover" alt="">-->
<!--    <video v-if="video" :src="require(`~/assets/video/${videoName}`)" autoplay="" loop="" muted="" playsinline="" class="img_cover"></video>-->
<!--    <div v-if="video" class="uk-overlay-default uk-position-cover video-overlay"></div>-->
    <div class="uk-container uk-position-relative">
      <div class="heading_white">
        <Breadcrumbs :linkName="linkName"/>
      </div>
      <div class="heading">
        <h1 class="headline_p1">
          {{ linkName }}
        </h1>
        <form v-if="ticketTrolley" class="buy-ticket">
          <div class="buy-ticket__item">
            <svg-icon name="date" class="icon buy-ticket__item_icon1"></svg-icon>
            <input class="select-styled litepicker" id="ticket_trolley" type="text"  placeholder="Выбрать дату" >
            <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">
          </div>
          <!--          <div class="buy-ticket__item buy-ticket__item_switch-trams">
            <div class="switch-container">
              <div class="switch-name" :class="{'active': !isActive}">На 24 часа</div>
              <label class="switch-round">
                <input type="checkbox" @click="isActive = !isActive">
                <span class="switch-slider"></span>
              </label>
              <div class="switch-name" :class="{'active': isActive}">На 48 часов</div>
            </div>
          </div>-->
          <!-- <div class="buy-ticket__item">
            <svg class="icon buy-ticket__item_icon2">
              <use xlink:href="#passengers"></use>
            </svg>
            <div class="input input-js ">
              <select class="select-hidden" select_name="Выбрать причал">
                <option value=""></option>
                <option value="Гостиница украина">Гостиница «Украина»</option>
                <option value="Воробьевы горы">Воробьевы горы</option>
                <option value="Лужники">Лужники</option>
                <option value="Парк Горького">Парк Горького</option>
                <option value="Зарядье">Зарядье</option>
              </select>
            </div>
          </div> -->
          <BuyTicketBtn link="/upload/docs/20230616_160103_648c5d0f0fc4b.pdf"/>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import BuyTicket from "./BuyTicketBtn";
import BuyTicketBtn from "./BuyTicketBtn";
import Breadcrumbs from "./Breadcrumbs";
export default {
  name: "HeaderInner",
  components: {Breadcrumbs, BuyTicketBtn, BuyTicket},
  props:{
    video: Boolean,
    index: Boolean,
    trams: Boolean,
    rent: Boolean,
    ticketYacht: Boolean,
    ticketTrolley: Boolean,
    linkName: String,
    fileName: String,
    someClass: String,
    videoName: String,

  },
  data() {
    return{
      isActive: false,
      choisenTime: null,
    }
  },
  methods: {
    activeCalc(){
      this.$emit('active-calc')
    },

    switchTicket() {
      this.isActive = !this.isActive
    },
    openSelect(e) {
      document.querySelector('.testW').style.display = 'block'
      document.querySelector('.test').focus()
    },
    clickOutside() {
      document.querySelector('.testW').style.display = 'none'
    }
  },

  computed:{
    choiseTime() {
      if (this.choisenTime === null) {
        return 'Время посадки'
      } else {
        return this.choisenTime
      }
    }
  },

  mounted() {
    if(this.ticketYacht) {
      let lpick = new Litepicker({
        lang: 'ru-RU',
        element: document.getElementById('tickets_yachts'),
        singleMode: false,
        numberOfMonths: 2,
        numberOfColumns: 2,
        tooltipText: {
          one: 'flight',
          other: 'flights'
        },
      });
    }

    if(this.ticketTrolley) {
      let lpick = new Litepicker({
        lang: 'ru-RU',
        element: document.getElementById('ticket_trolley'),
        singleMode: false,
        numberOfMonths: 2,
        numberOfColumns: 2,
        tooltipText: {
          one: 'flight',
          other: 'flights'
        },
      });
    }
  },
}
</script>

<style scoped>
.buy-ticket-shedule__header .heading {
  text-align: center;
}

.trams__header .heading {
  text-align: center;
  padding: 163px 0 240px;
}

.video-overlay {
  z-index: auto;
  opacity: 1;
  background: rgba(0,0,0,.5);
}

.timeSelect:after {
  display: none;
}

.testW {
  display: none;
}
.testW select{
  position: absolute;
  top:70px;
  left:0;
  width: 100%;
  background: #fff;
  height: 150px;
}

.testW select option{
  text-align: center;
  padding: 10px 0;
}

.testW select option:hover{
  color:#00c1f3;;
  transform: scale(1.5);
}

.picker-footer {
  display: flex;
  position: absolute;
  width: 100%;
  left:0;
  top: 215px;
}
.picker-cancel, .picker-confirm {
  background-color: #fff;
  border-top:1px solid #858585;
  cursor: pointer;
  display: table-cell;
  padding: 0.75rem 1rem;
  width: 50%;
  font-size: .8rem;
  color: #000;
}

.buy-ticket-trams__header .buy-ticket {
  justify-content: center;
}

</style>
