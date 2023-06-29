<template>
  <div>
    <Header>
      <img src="~images/inners2/flight0.webp" data-src="~images/inners2/flight0.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ seoData?.header }}
          </h1>
        </div>
      </div>
    </Header>
    <div class="flights">
      <CruiseItem v-for="(cruise, index) in flightBlocks" :key="'crs1' + index"
                  :fileNames="cruise.images"
                  :title="cruise.name"
                  :text="cruise.content"
                  :svgName="cruise.background"
                  :decor="cruise.decor"
                  :link-buy="cruise.linkbuy"
      />
    </div>
  </div>
</template>

<script>
import Scheme from "../../components/Scheme";
import Header from "../../components/Header";
import CruiseItem from "../../components/tickets/CruiseItem";
import Breadcrumbs from "../../components/Breadcrumbs";
import axios from "axios";
export default {
  name: "index",
  components: {Breadcrumbs, CruiseItem, Header, Scheme},
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
      thematicInfo:[
        {
          fileNames: [
            `inners2/flight1.png`,
            `inners2/flight1.png`,
            `inners2/flight1.png`,
          ],
          decor: false,
          svgName: 'spyglass',
          title: `Экскурсионные`,
          text: `Прекрасная возможность для жителей и гостей столицы увидеть все основные достопримечательности
          города с непривычного ракурса, погрузившись в историю города и гастрономические открытия.`,
        },
        {
          fileNames: [
            `inners2/flight2.png`,
            `inners2/flight2.png`,
            `inners2/flight2.png`
          ],
          decor: true,
          svgName: 'family',
          title: `Семейные`,
          text: `Теперь, вместе с яхтами нового поколения, флотилия насчитывает
              10 белоснежных красавиц-яхт, предназначенных для круглогодичных
              экскурсионно-развлекательных рейсов по Москве-реке, а также для пышных
              банкетов, многолюдных конференций и счастливых свадеб.`,
        },
        {
          fileNames: [
            `inners2/flight3.png`,
            `inners2/flight3.png`,
            `inners2/flight3.png`
          ],
          decor: false,
          svgName: `heart`,
          title: `Романтические`,
          text: ` Речная романтика для истинно влюбленных, когда только
              вы вдвоем и все для вас.`,
        },
        {
          fileNames: [
            `inners2/flight4.png`,
            `inners2/flight4.png`,
            `inners2/flight4.png`
          ],
          decor: false,
          svgName: `masks`,
          title: `Театральные`,
          text: `Интерактивное шоу. Культура, еда и прекрасные виды – неотъемлемая
              часть развлекательной программы для любого туриста, желающего
              действительно проникнуться духом Столицы.`,
        },
        {
          fileNames: [
            `inners2/flight5.png`,
            `inners2/flight5.png`,
            `inners2/flight5.png`
          ],
          decor: false,
          svgName: `book`,
          title: `Литературно-поэтические`,
          text: `Перенеситесь в мир звучащей̆ поэзии на борту белоснежной̆ яхты.
              Познакомиться с новинками книжного рынка, обсудить со знатоками
              и лауреатами литературных премий все злободневные проблемы, вопросы,
              да и просто побыть зрителями бенефисов и литературных чтений произведений
              собственного сочинения молодых авторов.`,
        },
        {
          fileNames: [
            `inners2/flight6.png`,
            `inners2/flight6.png`,
            `inners2/flight6.png`
          ],
          decor: true,
          svgName: `crab`,
          title: ` Гастрономические`,
          text: ` Возможность окунуться в историю города через
              гастрономические традиции разных эпох.`,
        },
      ],
      flightBlocks: [],
      seoData: {},
    }
  },
  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/flights/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let blocks = await axios.get(
        `${this.$config.baseURL}blocks?page=themes&lang=${this.$i18n.locale}`);
    this.flightBlocks = blocks.data
  },
  fetchOnServer: true,
  fetchKey: 'theatrical',
}
</script>

<style scoped>
.flight:nth-child(even){
  flex-direction: row-reverse;
}
.uk-cover-container {
  z-index: 3;
}
@media screen and (max-width: 959px) {
  .flight:nth-child(even) {
    flex-direction: column;
  }
}
</style>
