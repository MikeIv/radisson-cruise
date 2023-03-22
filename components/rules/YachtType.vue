<template>
  <section class="uk-cover-container rules-ship__section">
    <div class="rules-ship__decor1 uk-cover-container">
      <img  :data-src="require(`~/assets/img/${fileName}`)" alt="" class="img_cover" :src="require(`~/assets/img/${fileName}`)">
    </div>
    <div class="uk-container uk-position-relative">
      <div class="headline_22 t_semibold">
        {{ title }}
      </div>
      <div class="headline_line"></div>
      <div class="uk-flex uk-flex-wrap uk-child-width-1-2 rules-ship__grid uk-grid-match">
        <div>
          <div class="rules-ship__item">
            <div class="rules-ship__item__txt">
              <div class="rules-ship__item__p1 t_semibold">
                Краткое описание яхт
              </div>
              <div class="rules-ship__item__p2 ">
                {{ description }}
              </div>
              <div class="rules-ship__item__p1 t_semibold">
                Класс яхты
              </div>
              <div class="rules-ship__item__p2 ">
                {{ yachtClass }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="rules-ship__item">
            <div class="rules-ship__item__txt">
              <div class="rules-ship__item__p1 t_semibold">
                На каждой яхте предусмотрены:
              </div>
              <ul>
                <li v-for="(infoItem, index) in infoItems" :key="'inf' + index">{{ infoItem }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-flex uk-flex-wrap uk-child-width-1-2 rules-ship__grid2 uk-grid-match">
        <div v-for="(yachtImg, index) in yachtImgs" :key="'yachtImg' + index">
          <YachtImg :yachtImg="yachtImg"/>
        </div>
      </div>
      <div class="rules-ship__site">
        <div class="headline_22 t_semibold">
          Расположение помещений на яхтах
        </div>
        <div class="rules-ship__site__items uk-flex uk-flex-wrap uk-child-width-1-3">
          <div class="rules-ship__site__item">
            <div class="rules-ship__site__item__head">
              <div class="rules-ship__site__item__num">
                01.
              </div>
              <div class="rules-ship__site__item__name">
                Главная палуба
              </div>
            </div>
            <div class="rules-ship__site__item__txt">
              {{ mainCabin }}
            </div>
          </div>
          <div class="rules-ship__site__item">
            <div class="rules-ship__site__item__head">
              <div class="rules-ship__site__item__num">
                02.
              </div>
              <div class="rules-ship__site__item__name">
                Верхняя палуба
              </div>
            </div>
            <div class="rules-ship__site__item__txt">
              {{topCabin}}
            </div>
          </div>
          <div class="rules-ship__site__item">
            <div class="rules-ship__site__item__head">
              <div class="rules-ship__site__item__num">
                03.
              </div>
              <div class="rules-ship__site__item__name">
                Нижняя палуба
              </div>
            </div>
            <div class="rules-ship__site__item__txt">
              {{ bottomCabin }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import YachtImg from "./YachtImg";
export default {
  name: "YachtType",
  components: {YachtImg},
  props: {
    fileName: String,
    title: String,
    description: String,
    yachtClass: String,
    infoItems: Array,
    mainCabin: String,
    topCabin: String,
    bottomCabin: String,
    yachtImgs: Array,
  }
}
</script>

<style scoped>

</style>
