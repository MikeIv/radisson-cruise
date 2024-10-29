<template>
  <div>
    <Header class="buy-ticket-form__header">
      <img src="~images/inners2/rules1.webp" data-src="~images/inners2/rules1.webp" class="img_cover" alt="">
    </Header>
    <section class="buy-ticket-form__container">
      <div class="uk-container">
        <div class="buy-ticket-form">
          <h1 class="headline_p1">
            {{ seoData?.header || 'Часто задаваемые вопросы' }}
          </h1>
          <ul class="uk-accordion accordion_vacantion" uk-accordion="multiple: true;">
            <li v-for="(option, index) in options" :key="index">
              <a class="uk-accordion-title" href="#">
                <div class="accordion_vacantion__title__info">
                  <div class="accordion_vacantion__name">
                    {{ option.title }}
                  </div>
                </div>
                <div class="accordion_vacantion__title__arr"></div>
              </a>
              <div class="uk-accordion-content" >
                {{option.content}}
              </div>
            </li>
          </ul>
        </div>
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
      seoData: {},
      options: [],
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
      let seoDataResult = await this.$axios(
          `${this.$config.baseURL}pages?ref=/frequently-asked-questions/&lang=${this.$i18n.locale}`);
      this.seoData = seoDataResult.data.result
      let optionsData = await this.$axios(
          `${this.$config.baseURL}faq?grp=faq&lang=${this.$i18n.locale}`);
      this.options = optionsData.data.result
    } catch(error) {
      this.$nuxt.error({ statusCode: 404, message: 'Data not found' })
    }
  },
  fetchOnServer: false,
  fetchKey: 'FAQ-page'
}
</script>

<style scoped>
.buy-ticket-form {
  padding-top: 56px;
}
.headline_p1 {
  margin-bottom: 70px;
}
.buy_ticket-questions {
  background: #FFFFFF;
  width: 100%;
  padding-bottom: 75px;
}
.uk-accordion-content {
  white-space: pre-line;
}
</style>
