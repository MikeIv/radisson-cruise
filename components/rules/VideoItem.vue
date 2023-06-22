<template>
  <li>
    <div class="uk-position-relative rules-security-video__container video" id="video" data-container="video">
<!--      <video class="video" :poster="poster" controls>
        <source :src="`${$config.baseSiteURL}${video}`" type="video/mp4">
      </video>-->
      <iframe class="video_item" :id="'video'+index" width="100%" height="100%" :src="video.youtube + '?enablejsapi=1'">
      </iframe>
<!--      <div class="playpause">
        <div class="play-video-btn_back">
          <img src="~assets/img/svg/play-btn.svg" alt="" id="svg-new-play" uk-svg/>
        </div>
      </div>-->
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    video: Object,
    index: Number,
  }
}
</script>

<style scoped>
@media screen and (max-width: 959px) {
  #video {
    height: 400px;
  }
}
</style>
