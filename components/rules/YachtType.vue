<template>
  <section class="uk-cover-container rules-ship__section">
    <div class="rules-ship__decor1 uk-cover-container">
      <img data-src="~/assets/img/inners2/rules6.png"
           alt="" class="img_cover"
           src="~/assets/img/inners2/rules6.png">

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
                {{ $t('yachts_short_desc') }}
              </div>
              <div class="rules-ship__item__p2 ">
                {{ description }}
              </div>
              <div class="rules-ship__item__p1 t_semibold">
                {{ $t('yachts_classes') }}
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
                {{ $t('yachts_list_title') }}:
              </div>
              <ul>
                <li v-for="(infoItem, index) in text" :key="'inf' + index">{{ infoItem }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-flex uk-flex-wrap uk-child-width-1-2 rules-ship__grid2 uk-grid-match">
<!--        <div v-for="(yachtImg, index) in yachtImgs" :key="'yachtImg' + index">
          <YachtImg :yachtImg="yachtImg"/>
        </div>-->
        <div class="rules-ship__item">
          <div class="rules-ship__item__img">
            <img :src="`${this.$config.baseSiteURL}`+yachtUp" style="color:#000" alt="" class="uk-preserve" uk-svg>
          </div>
        </div>
        <div class="rules-ship__item">
          <div class="rules-ship__item__img">
            <img :src="`${this.$config.baseSiteURL}`+yachtLow" style="color:#000" alt="" class="uk-preserve" uk-svg>
          </div>
        </div>
      </div>
      <div class="rules-ship__site">
        <div class="headline_22 t_semibold">
          {{ $t('yachts_placemenets') }}
        </div>
        <div class="rules-ship__site__items uk-flex uk-flex-wrap uk-child-width-1-3">
          <div class="rules-ship__site__item">
            <div class="rules-ship__site__item__head">
              <div class="rules-ship__site__item__num">
                01.
              </div>
              <div class="rules-ship__site__item__name">
                {{ $t('maindeck') }}
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
                {{ $t('upperdeck') }}
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
                {{ $t('lowerdeck') }}
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
    infoItems: String,
    mainCabin: String,
    topCabin: String,
    bottomCabin: String,
    yachtImgs: Array,
    yachtUp: String,
    yachtLow: String,
  },
  computed: {
    text() {
      return this.infoItems.split('\n')
    }
  }
}
</script>

<style scoped>

</style>
