<template>
  <section class="news-item__section">
    <div class="uk-container">
      <div class="news-item__container">
        <Breadcrumbs :last-crumb="title"/>
        <div class="news-item__grid uk-flex uk-flex-wrap">
          <div class="uk-width-expand@l uk-width-1-1 news-item__content">
            <h1 class="news-item__h1">
              {{ title }}
            </h1>
            <div class="news-item__shorts">
              <div>
                <div class="card_time">
                  <svg-icon class="icon" name="clock2"/>
                  <span>{{ dayFormat }}</span>
                </div>
              </div>
<!--              <div v-if="grp">
                <div class="sail-info">
                  <div class="uk-badge badge_sail">
                    <span class="uk-visible@l">АКЦИЯ</span> %
                  </div>
                  <span>
                    Акция действует с 23 марта-15 июля
                  </span>
                </div>
              </div>-->
              <div>
                <div class="type-yacht-short">
                  <svg-icon class="icon" name="cat_room"/>
                  <span>
                    Тип яхты:  Все яхты
                  </span>
                </div>
              </div>
            </div>
            <div v-if="isSlides" class="uk-position-relative yacht__slider uk-slider uk-slider-container" tabindex="-1" uk-slider="">
              <ul class="uk-slider-items uk-flex" uk-lightbox="">
                <li v-for="(slide, index) in slides" :key="'slrd' + index" tabindex="-1" class="uk-active">
                  <a :href="`${$config.baseSiteURL}${slide}`" class="gallery_card uk-position-relative">
                    <img :data-src="`${$config.imageURL}?size=915&format=webp&src=${$config.baseSiteURL}${slide}`"
                         class="img_cover"
                         :src="`${$config.imageURL}?size=915&format=webp&src=${$config.baseSiteURL}${slide}`"
                         data-alt="Image"/>
                  </a>
                </li>
              </ul>
              <div class="yacht__slider_navigation">
                <div class="slider_numbers">
                  <div class="slider_number">01</div>
                  <div class="slider_num_bread">/</div>
                  <div v-if="slides" class="slider_amount">{{slidesLength}}</div>
                </div>
                <div class="slider_arrows">
                  <a class="" href="#" uk-slider-item="previous">
                    <svg-icon name="arr_lang" class="icon"/>
                  </a>
                  <a class="" href="#" uk-slider-item="next">
                    <svg-icon name="arr_lang" class="icon"/>
                  </a>
                </div>
              </div>
            </div>
            <div v-if="isSlides" class="headline_line"></div>
            <div v-if="content" class="news-item__text" v-html="content"></div>

<!--            <div class="video_container uk-hidden">
              <div class="item video-item ">
                <div id="play-video-btn" data-id="IfB_K4RGtDo">
                  <div class="play-video-btn_back">
                    <svg-icon name="play-btn" class="icon"/>
                  </div>
                </div>
                <img id="embed-video-preview" src="~assets/img/inners2/video.png" alt="">
&lt;!&ndash;           возможный атрибут   frameborder="0"&ndash;&gt;
                <iframe id="embed-video-frame" src="" width="900" height="506" allowfullscreen="true" uk-responsive="" class="uk-responsive-width"></iframe>
              </div>
            </div>-->

<!--            <div class="uk-position-relative video_container">
              <video class="video" src="~assets/video/video.mp4">
                <source src="~assets/video/video.mp4" type="video/mp4">
              </video>
              <div class="playpause">
                <div class="play-video-btn_back">
                  <img src="~assets/img/svg/play-btn.svg" alt="" id="svg-new-play" uk-svg>
                </div>
              </div>
            </div>-->

            <div class="back-container">
              <nuxt-link to="/news/" class="link_back transition">
                <svg-icon name="arrow3"/>
                <span>{{ $t('back_to_news') }}</span>
              </nuxt-link>
            </div>

          </div>
          <div class="uk-width-auto uk-width-1-1 uk-visible@l">
            <div class="news-last">
              <div class="headline_22 t_semibold">
                {{$t('recent_news')}}
              </div>
              <ul class="uk-padding-remove uk-margin-remove">
                <li v-for="recentNew in recentNews">
                  <nuxt-link class="uk-card card-news__small transition" :to="recentNew.uri">
                    <div class="uk-cover-container uk-card-default_media">
                      <img :data-src="`${$config.imageURL}?size=300&format=webp&src=${$config.baseSiteURL}`+recentNew.banner"
                           alt=""
                           class="img_cover"
                           :src="`${$config.imageURL}?size=300&format=webp&src=${$config.baseSiteURL}`+recentNew.banner">
                    </div>
                    <div class="uk-card-body">
                      <div class="card_time">
                        <svg-icon class="icon" name="clock2"/>
                        <span>{{ new Date(recentNew.date).toLocaleDateString(`ru-RU`, {month: 'long', day: 'numeric', year: 'numeric'}) }}</span>
                      </div>
                      <h3 class="uk-card-title">
                        {{recentNew.name}}
                      </h3>
                      <div v-html="recentNew.anons" class="card_text">
                      </div>
                    </div>
                  </nuxt-link>
                </li>
<!--                <li>
                  <nuxt-link class="uk-card card-news__small transition" to="/news-post">
                    <div class="uk-cover-container uk-card-default_media">
                      <img data-src="~assets/img/main/img2.png" alt="" class="img_cover" src="~assets/img/main/img2.png">
                    </div>
                    <div class="uk-card-body">
                      <div class="card_time">
                        <svg-icon class="icon" name="clock2"/>
                        <span>15 ноября 2019 г.</span>
                      </div>
                      <h3 class="uk-card-title">
                        ЕЩЕ БОЛЬШЕ КРУИЗОВ
                        ПО МОСКВЕ-РЕКЕ С ФЛОТИЛИЕЙ
                        «РЭДИССОН РОЙАЛ»»
                      </h3>
                      <div class="card_text">
                        Краткий описательный текст на сайте в несколько строк
                        для пояснения ситуации
                      </div>
                    </div>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="uk-card card-news__small transition" to="/news-post">
                    <div class="uk-cover-container uk-card-default_media">
                      <img data-src="~assets/img/main/img2.png" alt="" class="img_cover" src="~assets/img/main/img2.png">
                    </div>
                    <div class="uk-card-body">
                      <div class="card_time">
                        <svg-icon class="icon" name="clock2"/>
                        <span>15 ноября 2019 г.</span>
                      </div>
                      <h3 class="uk-card-title">
                        ЕЩЕ БОЛЬШЕ КРУИЗОВ
                        ПО МОСКВЕ-РЕКЕ С ФЛОТИЛИЕЙ
                        «РЭДИССОН РОЙАЛ»»
                      </h3>
                      <div class="card_text">
                        Краткий описательный текст на сайте в несколько строк
                        для пояснения ситуации
                      </div>
                    </div>
                  </nuxt-link>
                </li>-->
              </ul>
              <div class="link_archive__container">
                <nuxt-link to="/news" class="link_archive">
                  {{$t('archive_news')}}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="news-item__container2 uk-hidden@l">
        <div class="news-last">
          <div class="headline_22 t_semibold">
            {{$t('recent_news')}}
          </div>
          <div class="uk-position-relative news-last__slider uk-slider uk-slider-container" tabindex="-1" uk-slider="">
            <ul class="uk-slider-items uk-child-width-1-2@s">
              <li v-for="news in recentNews" tabindex="-1" class="uk-active">
                <nuxt-link class="uk-card card-news__small transition" :to="news.uri">
                  <div class="uk-cover-container uk-card-default_media">
                    <img :data-src="`${$config.imageURL}?size=300&format=webp&src=${$config.baseSiteURL}`+news.banner"
                         alt=""
                         class="img_cover"
                         :src="`${$config.imageURL}?size=300&format=webp&src=${$config.baseSiteURL}`+news.banner">
                  </div>
                  <div class="uk-card-body">
                    <div class="card_time">
                      <svg-icon class="icon" name="ticket"/>
                      <span>{{ new Date(news.date).toLocaleDateString(`ru-RU`, {month: 'long', day: 'numeric', year: 'numeric'}) }}</span>
                    </div>
                    <h3 class="uk-card-title">
                      {{news.name}}
                    </h3>
                    <div class="card_text">
                      {{news.anons}}
                    </div>
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="link_archive__container">
            <nuxt-link to="/news/" class="link_archive">
              {{$t('archive_news')}}
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../Breadcrumbs";
import UIkit from "uikit";
export default {
  name: "NewsItem",
  components: {Breadcrumbs},
  props: {
    title: String,
    date: String,
    grp: String,
    content: String,
    slides: Array,
    isSlides: Boolean,
    slidesLength: Number,
    recentNews: Array,
  },
  data(){
    return{

    }
  },
  computed: {
    dayFormat() {
      return new Date(this.date).toLocaleDateString(`${this.$i18n.localeProperties.iso}`, {month: 'long', day: 'numeric', year: 'numeric'})
    },
  },
}
</script>

<style scoped>
.play-video-btn_back img {
  width: 100px;
  height: 100px;
}
</style>
