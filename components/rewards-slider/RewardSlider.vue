<template>
  <section id="rewards" class="awards uk-cover-container">
    <img src="~assets/img/svg/decor5.svg" alt="" class="awards_decor1">
    <div class="uk-cover-container awards_decor2">
      <img data-src="~assets/img/main/img7.png" alt="" class="img_cover" src="~assets/img/main/img7.png">
    </div>
    <div class="uk-container uk-position-relative">
      <div class="headline uk-text-center">
        <h2 class="headline_p1">
          НАГРАДЫ
        </h2>
      </div>
      <p v-if="$fetchState.pending">Loading....</p>
      <div v-else uk-slider="" class="awards__slider uk-slider">
        <div class="uk-position-relative">
          <div class="uk-slider-container ">
            <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-match" uk-scrollspy="target: > li > .awards__card ; cls: uk-animation-slide-bottom-medium; delay: 500" style="transform: translate3d(0px, 0px, 0px);">
              <li tabindex="-1" class="uk-active" v-for="(card, index) in testCards" :key="'rwrd' + index">
                <RewardCard :date="card.title" :file-name="card.image" :subText="card.description" :imgText="card.imgtitle" :cardName="card.name"/>
              </li>
            </ul>
          </div>

          <div class="slider_arrows slider_arrows-blue">
            <a class="uk-position-center-left-out" href="#" uk-slider-item="previous">
              <svg-icon name="arr_lang"/>
            </a>
            <a class="uk-position-center-right-out" href="#" uk-slider-item="next">
              <svg-icon name="arr_lang"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RewardCard from "./RewardCard";
import axios from "axios";
export default {
  name: "RewardSlider",
  components: {RewardCard},
  data() {
    return{
      cards: [
        {
          date: '2019',
          fileName: 'main/award1.png',
          cardName: `Russian Business Travel
                     & MICE Awards`,
          subText: 'Лучшая альтернативная площадка для деловых мероприятий',
          imgText: ``,
        },
        {
          date: '2019',
          fileName: 'main/award2.png',
          cardName: `Prime Traveller
                     Awards`,
          subText: 'Лучший городской маршрут',
          imgText: `Prime
                    Traveller
                    Awards`
        },
        {
          date: '2017, 2018',
          fileName: 'main/award3.png',
          cardName: `Prime Traveller
                     Awards`,
          subText: 'Лучшее место для проведения переговоров в формате делового обеда',
          imgText: ``,
        },
        {
          date: '2016',
          fileName: 'awards/award4.png',
          cardName: `Премия Мэра
                     г.Москва`,
          subText: 'За вклад в развитие туризма',
          imgText: ``,
        },
        {
          date: '2013',
          fileName: 'awards/award5.png',
          cardName: `Путеводная звезда`,
          subText: 'Транспортные предприятия',
          imgText: ``,
        },
        {
          date: '2013, 2015',
          fileName: 'awards/award6.png',
          cardName: `World's Leading River Cruise Company`,
          imgText: ``,
        },
        {
          date: '2013, 2015',
          fileName: 'awards/award7.png',
          cardName: `World Travel Awards`,
          subText: 'Лучшая в Европе компания,осуществляющая речные круизы',
          imgText: ``,
        },
      ],
      testCards: [],
    }
  },
  async fetch() {
    let data = await axios.get(`${this.$config.baseURL}awards`)
    this.testCards = data.data
    /*console.log(this.testCards)*/
  },
  fetchOnServer: true,
  // multiple components can return the same `fetchKey` and Nuxt will track them both separately
  fetchKey: 'reward-slider',
}
</script>

<style scoped>

.slider_arrows-blue a {
  background: #00c1f3;
}

.slider_arrows-blue a:hover {
  background: #1d2240;
  border-color: #1d2240;
}
/*
.slider-arrow {
  text-decoration: none;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: 0 0;
  transition: .2s;
  box-shadow: none;
  z-index: 2;
  overflow: hidden;
  position: relative;
  border-radius: 0;
  border: 1px solid #fff;
  box-sizing: border-box;
  fill: #fff;
  background: #00c1f3;
}
.arrow-next {
  right: -30px;
}
.arrow-prev {
  left: -30px;
}


.reward_title {
  font-size: 66px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 0;
  line-height: 1.2;
  font-family: cowor,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}
.uk-slider-container{
  padding: 50px 0;
}
.reward_slider {
  position: relative;
}

.awards__card {
  padding: 92px 69px 65px;
  background: #fff;
  transition: .3s;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  flex: auto;
}

.awards__card_back {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  opacity: 0;
  transition: .3s;
  background: #3c4892;
  background: linear-gradient(
    0deg,#3c4892 0,#1d2241 100%);
}

.awards__card_info {
  max-width: 255px;
  position: relative;
  z-index: 1;
}

.awards__card_img {
  position: absolute;
  right: 45px;
  top: 25px;
}

.awards__card_img img {
  position: relative;
}

.awards__card_date {
  font-family: cowor,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  font-size: 32px;
  color: #00c1f3;
}

.awards__card_name {
  margin-top: 62px;
  transition: .2s;
  font-size: 18px;
  text-decoration: underline;
  font-weight: 600;
  line-height: 1.8;
  color: #1d2240;
}

.awards__card_txt {
  margin-top: 28px;
  font-size: 14px;
  line-height: 1.6;
}

.awards__card_img-circle {
  width: 180px;
  height: 180px;
  background: #e7f0f7;
  transition: .3s;
  position: absolute;
  right: 0;
  top: 49px;
  border-radius: 50%;
}

.awards__card:hover,
.awards__card:hover .awards__card_name {
  color: #fff;
}
.awards__card:hover .awards__card_back {
  opacity: 1;
  height: 110%;
}

.uk-slider-items>* {
  padding-left: 57px;
}

.uk-slider-items {
  margin-left: -57px;
}*/
</style>
