<template>
  <div>
    <Header fileName="inners2/flight0.png">
      <img src="~images/inners2/flight0.webp" data-src="~images/inners2/flight0.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ seoData?.header || 'Театральные круизы' }}
          </h1>
        </div>
      </div>
    </Header>
    <CruiseItem v-for="(cruise,index) in theatricalBlocks" :key="'crs' + index"
                :fileNames="cruise.images"
                :title="cruise.name"
                :text="cruise.content"
                :theatrical="true"
                :link-buy="cruise.linkbuy"
                :link-more="cruise.linkmore"
    />
  </div>
</template>

<script>
import Header from "../../components/Header";
import CruiseItem from "../../components/tickets/CruiseItem";
import Breadcrumbs from "../../components/Breadcrumbs";
import axios from "axios";
export default {
  name: "Theatrical",
  components: {Breadcrumbs, CruiseItem, Header},
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
  data() {
    return {
      theatricalInfo:[
        {
          fileNames: [
            `thematic/thematic1.png`,
            `thematic/thematic2.png`,
          ],
          title: `Ужин с классиком. К. Гольдони «Лжец»`,
          text: `В репертуаре нашего театра — итальянская постановка! На этот раз в рамках проекта
          “Ужин с классиком” гости смогут перенестись в Венецию с ее карнавалами, буйством красок,
           интригами и настоящей страстью.`,
          thematicLink: `/tickets/thematic-item`
        },
        {
          fileNames: [`thematic/thematic2.png`],
          title: `«Ужин с классиком. А.П.Чехов»`,
          text: `Классика, круиз, комедия, кухня. Уникальный, совершенно новый театральный формат. Больше чем спектакль,
          больше чем круиз, больше чем ужин — это доступная роскошь.`,
          thematicLink: `/tickets/thematic-item`
        },
        {
          fileNames: [`thematic/thematic3.png`],
          title: `«Тридцать миллионов Гладиатора»`,
          text: `Уникальный театральный формат.
            Продолжая традиции бренда «Ужин с классиком», предлагаем вашему вниманию
            французскую постановку!`,
          thematicLink: `/tickets/thematic-item`
        },
        {
          fileNames: [`thematic/thematic4.png`],
          title: `Спектакль «Загадочная женщина» по пьесе
            Оскара Уайльда «Веер леди Уиндермир»`,
          text: `Ужин с классиком» приглашает вас стать частью элитного английского общества.
            Газеты, сигары, светские разговоры в лондонской гостиной – за всем этим скрывается
            история, полная тайн и интриг.`,
          thematicLink: `/tickets/thematic-item`
        }
      ],
      theatricalBlocks: [],
      seoData: {},
    }
  },
  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/theatrical/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let blocks = await axios.get(
        `${this.$config.baseURL}blocks?page=theatre&lang=${this.$i18n.locale}`);
    this.theatricalBlocks = blocks.data
  },
  fetchOnServer: true,
  fetchKey: 'theatrical',

}
</script>

<style scoped>
.flight:nth-child(odd){
  flex-direction: row-reverse;
}
@media screen and (max-width: 959px) {
  .flight:nth-child(odd) {
    flex-direction: column;
  }
}
</style>