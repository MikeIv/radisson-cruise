<template>
  <nuxt-link class="uk-button uk-button-default button_ticket  transition" :to="link">
    <span>{{ $t('buttons.buy_ticket') }}</span>
    <svg-icon class="icon" name="ticket"/>
  </nuxt-link>
</template>

<script>
export default {
  name: "BuyTicketBtn",
  props: {
    link: String,
  },
}
</script>

<style scoped>

</style>
