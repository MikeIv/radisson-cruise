<template>
  <div>
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
        return this.$i18n.t('select_time')
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
