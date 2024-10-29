<template>
  <div class="">
    <Header class="buy-sertificat-header">
      <img src="~images/inners2/rules1.webp" data-src="~images/inners2/rules1.webp" class="img_cover" alt="">
    </Header>
    <div class="padding_bottom uk-container buy-sertificat__section">
      <div class="buy-sertificat__wrap">
        <Breadcrumbs />
        <div class="buy-sertificat__head">
          <h1 class="headline_p1 uk-position-relative">
            {{ seoData?.header || 'Сертификаты' }}
          </h1>
          <div class="buy-sertificat-head__p2 uk-position-relative" v-html="seoData?.content"></div>
        </div>
        <div class="headline_22 buy-sertificat__headline_22">
          {{ $t('certificates_subtitle') }}
        </div>
        <div class="buy-sertificat__grid uk-grid-match uk-flex uk-flex-wrap uk-child-width-1-2@m">
          <div class="" v-for="card in cardsFetch">
            <CertificateCard :fileName="card.image"
                             :title="card.name"
                             :description="card.description"
                             :price="card.price"
                             :id="card.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import CertificateCard from "../../components/tickets/CertificateCard";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
export default {
  name: "index",
  components: {Breadcrumbs, CertificateCard, Header},
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
    return{
      cards:[
        {
          imgURL: 'sertificat/sert2.png',
          title: 'Сертификат в Основной зал',
          description: `2,5 часа прогулки по Москве-реке на белоснежной яхте в Основном зале`,
          toEat: false,
          menu: 'а-ля карт',
          price: '1 800',
        },
        {
          imgURL: 'sertificat/sert2.png',
          title: 'Сертификат с питанием в Ройал класс',
          description: `2,5 часа прогулки по Москве-реке на белоснежной яхте в Ройал классе`,
          toEat: true,
          menu: 'Ройал класса',
          price: '4 600',
        },
      ],
      cardsFetch: null,
      seoData: {}
    }
  },
  async fetch() {
    try {
      let seoDataResult = await this.$axios(
          `${this.$config.baseURL}pages?ref=/certificates/&lang=${this.$i18n.locale}`);
      this.seoData = seoDataResult.data.result
      let blocks = await this.$axios(
          `${this.$config.baseURL}certificates?lang=${this.$i18n.locale}`);
      this.cardsFetch = blocks.data
    } catch(error) {
      this.$nuxt.error({ statusCode: 404, message: 'Data not found' })
    }
  },
  fetchOnServer: true,
  fetchKey: 'certificates',
}
</script>

<style scoped>
/*
.buy-sertificat__wrap {
  background: #fff;
  !*margin-top: -300px;*!
  position: relative;
  padding: 22px 150px 115px;
}

.buy-sertificat__head {
  border-bottom: 1px solid #a1c2e5;
  padding-bottom: 60px;
  padding-top: 40px;
  position: relative;
  padding-right: 650px;
}

.buy-sertificat-head__back {
  bottom: 0;
  right: -100px;
  position: absolute;
}
.headline_p1 {
  font-size: 66px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 0;
  line-height: 1.2;
  font-family: cowor,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}
.buy-sertificat-head__p2 {
  margin-top: 45px;
  font-size: 14px;
}

.buy-sertificat__headline_22 {
  font-weight: 600;
  margin-top: 94px;
}

.buy-sertificat__grid {
  margin-left: -60px;
}

.buy-sertificat__grid>div {
  padding-left: 60px;
  margin-top: 60px;
}

.buy-sertificat__card {
  display: flex;
  border: 1px solid #a1c2e5;
  flex-direction: column;
}

.buy-sertificat-card__img {
  height: 315px;
  position: relative;
}

.buy-sertificat-card__badge {
  width: 80px;
  height: 77px;
  border-radius: 0 0 40px 40px;
  background: #fff;
  display: flex;
  align-items: flex-start;
  position: absolute;
  right: 39px;
  top: 0;
  justify-content: center;
  padding-top: 6px;
}

.img_cover {
  position: absolute;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  transition: 1s;
}

.buy-sertificat-card__main {
  padding: 38px 50px 40.5px;
  margin-bottom: auto;
}

.buy-sertificat-card__main .txt18 {
  color: #00c1f3;
  font-weight: 600;
}

.buy-sertificat-card__p1 {
  margin-top: 18px;
  font-size: 14px;
  font-weight: 600;
}

.buy-sertificat-card__p2 {
  margin-top: 9.5px;
  font-size: 14px;
}

.buy-sertificat-card__bottom {
  padding: 24px 50px;
  border-top: 1px solid #a1c2e5;
}

.buy-sertificat-card__bottom .headline_22 {
  font-weight: 600;
}

.buy-sertificat-card__bottom .uk-button {
  width: 235px;
}
*/

</style>
