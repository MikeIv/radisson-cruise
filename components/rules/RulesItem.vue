<template>
  <div class="rules-about__item">
    <svg-icon class="rules-about__item__icon" :name="iconURL"/>
    <div class="uk-position-relative">
      <div class="headline_line"></div>
      <div class="headline_22 t_semibold">
        {{ description }}
      </div>
      <a class="uk-button uk-button-default button_download" :href="document" target="_blank">
        <svg-icon class="icon" name="download"/>
        <span>ПОСМОТРЕТЬ</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RulesItem",
  props: {
    description: String,
    iconURL: String,
    document: String,
  }
}
</script>

<style scoped>

</style>
