<template>
  <div class="trams__route__img uk-cover-container">
    <div class="uk-position-relative slider-gallery-2 uk-slider uk-slider-container" tabindex="-1" uk-slider="">
      <ul class="uk-slider-items uk-flex uk-child-width-1-1" uk-lightbox="">
        <li class="uk-active" v-for="(fileName, index) in fileNames" :key="'fl' + index">
<!--          <PhotoCard :fileName="fileName"/>-->

          <a :href="$config.baseSiteURL + fileName"  class="gallery_card uk-position-relative">
            <!--    style="visibility: hidden for link if needed -->
            <img :data-src="$config.baseSiteURL + fileName" class="img_cover" :src="$config.baseSiteURL + fileName" data-alt="Image"/>
          </a>
        </li>
      </ul>
      <ul class="uk-slider-nav uk-dotnav uk-flex-center">
        <li :uk-slider-item="index" class="uk-active" v-for="(fileName, index) in fileNames" :key="'fl1' + index">
          <a href=""></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PhotoCard from "../PhotoCard";
export default {
  name: "CruiseItemImg",
  components: {PhotoCard},
  props: {
    fileNames: Array,
  }
}
</script>

<style scoped>

</style>
