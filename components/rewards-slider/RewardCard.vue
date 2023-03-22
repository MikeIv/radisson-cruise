<template>
  <div class="awards__card uk-position-relative uk-scrollspy-inview uk-animation-slide-bottom-medium">
    <div class="awards__card_back"></div>
    <div class="awards__card_info">
      <div class="awards__card_date">
        {{ date }}
      </div>
      <div class="awards__card_name">
        {{ cardName }}
      </div>
      <div class="awards__card_txt">
        {{ subText }}
      </div>
    </div>
    <div class="awards__card_img">
      <div class="awards__card_img-circle"></div>
      <div v-if="imgText" class="awards__card_img-txt">
        {{ imgText }}
      </div>
      <div class="awards_card-container">
        <img alt="" :src="$config.baseSiteURL + fileName">
      </div>
<!--      <img :data-src="require(`@/assets/img/${fileName}`)" alt="" :src="require(`@/assets/img/${fileName}`)">-->
    </div>
  </div>
</template>

<script>
export default {
  name: "RewardCard",
  props: {
    date: String,
    subText: String,
    fileName: String,
    imgText: String,
    cardName: String,
  }
}
</script>

<style scoped>
.awards_card-container {
  height: 150px;
  width: 200px;
  position: relative;
}

.awards_card-container img{
  position: absolute;
  -o-object-fit: cover;
  object-fit: contain;
  height: 100%;
  width: 100%;
  left: 30px;
  top: 60px;
}

</style>
