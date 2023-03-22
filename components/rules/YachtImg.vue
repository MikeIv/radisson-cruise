<template>
  <div class="rules-ship__item">
    <div class="rules-ship__item__img">
      <img :src="require(`~/assets/img/${yachtImg}`)" style="color:#000" alt="" class="uk-preserve" uk-svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "YachtImg",
  props: {
    yachtImg: String,
  },
}
</script>

<style scoped>

</style>
