<template>
  <li>
    <div class="uk-position-relative rules-security-video__container video" id="video">
      <video class="video" :poster="poster">
        <source :src="`${$config.baseSiteURL}${video}`" type="video/mp4">
      </video>
      <div class="playpause">
        <div class="play-video-btn_back">
          <img src="~assets/img/svg/play-btn.svg" alt="" id="svg-new-play" uk-svg/>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    poster: String,
    video: String,
  }
}
</script>

<style scoped>

</style>
