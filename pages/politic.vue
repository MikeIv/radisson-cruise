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
            {{ seoData?.header || 'Политика конфиденциальности' }}
          </h1>
        </div>
      </div>
    </Header>
    <section v-if="politic" class="padding_top padding_bottom rules-about__section">
      <div class="uk-container">
        <article class="tpl-text-default" v-html="politic">
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import axios from "axios";
export default {
  name: "Politic",
  components: {Breadcrumbs, Header},
  data(){
    return {
      politic: null,
      seoData: {}
    }
  },
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
  async fetch() {
    try {
      let seoDataResult = await axios.get(
          `${this.$config.baseURL}pages?ref=/politic/&lang=${this.$i18n.locale}`);
      this.seoData = seoDataResult.data.result
      const politicData = await axios.get(
          `${this.$config.baseURL}varyelements?code=privacy_policy&lang=${this.$i18n.locale}`)
      this.politic = politicData.data.result?.privacy_policy.content
    } catch(error) {
      this.$nuxt.error({ statusCode: 404, message: 'Data not found' })
    }
  },
  fetchOnServer: true,
  fetchKey: 'privat-politic'
}
</script>

<style scoped>

</style>
