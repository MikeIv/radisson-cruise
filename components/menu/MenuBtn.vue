<template>
  <a class="uk-button uk-button-secondary button_menu-cafe" :href="pdf">
    <svg-icon class="icon" name="menu"/>
    <span>{{$t('pages.menu.button')}}</span>
  </a>
</template>

<script>
export default {
  name: "MenuBtn",
  props: {
    pdf: String,
  }
}
</script>

<style scoped>

</style>
