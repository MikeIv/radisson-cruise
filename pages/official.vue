<script>
import DocumentCard from "../components/About/DocumentCard.vue";
import axios from "axios";
import Header from "../components/Header.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import CruiseItem from "../components/tickets/CruiseItem.vue";

export default {
  name: 'Official',
  components: {CruiseItem, Breadcrumbs, Header, DocumentCard},
  data(){
    return {
      docs: null,
      seoData: null,
      docBlocks: {

      },
    }
  },
  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/official/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let documentsData = await axios.get(
        `${this.$config.baseURL}docs?lang=${this.$i18n.locale}`);
    let blocks = await axios.get(
        `${this.$config.baseURL}blocks?page=official&lang=${this.$i18n.locale}`);
    this.docs = documentsData.data
    this.docBlocks = blocks.data;
  },
  fetchOnServer: true,
  fetchKey: 'official-site-page',
}
</script>

<template>
  <div>
    <Header>
      <img src="~images/inners2/rules1.webp" data-src="~images/inners2/rules1.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ seoData?.header || 'Официальный сайт' }}
          </h1>
        </div>
      </div>
    </Header>
    <section ref="DocBlock" id="DocumentBlocks">
      <CruiseItem v-for="(cruise,index) in docBlocks" :key="`crs3` + index"
                  :title="cruise.name"
                  :decor="cruise.decor"
                  :text="cruise.content"
                  :svgName="cruise.background"
                  :linkBuy="cruise.linkbuy"
                  :linkMore="cruise.linkmore"
                  :fileNames="cruise.images"/>
    </section>
    <section class="uk-cover-container about-documents__section" id="document">
      <img class="img_cover" data-src="~assets/img/inners2/about11.png" alt="" src="~assets/img/inners2/about11.png">
      <div class="uk-container uk-position-relative">
        <div class="headline uk-flex uk-flex-between uk-flex-middle">
          <h2 class="headline_56">
            {{ $t('documents') }}
          </h2>
          <a class="uk-button uk-button-default button_download uk-visible@m" href="">
            <svg-icon class="icon" name="download"/>
            <span>{{ $t('download_all') }}</span>
          </a>
        </div>
        <div class="about-documents__items uk-grid-match uk-flex uk-flex-wrap uk-child-width-1-2@m"
             uk-scrollspy="target: > div > a; cls: uk-animation-fade; delay: 500">
          <DocumentCard v-for="(document,index) in docs"
                        :key="index"
                        :name="document.name"
                        :link="document.doc"
                        :weight="document.size"
                        :format="document.type"/>

        </div>
      </div>
    </section>
  </div>

</template>

<style scoped>

</style>