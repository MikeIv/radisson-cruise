<template>
  <div class="rules-about2__item" :class="cardStyleChoice">
    <svg-icon class="rules-about2__item1__icon" :name="cardIcon"/>
    <div v-if="cardType === 'list'" class="uk-position-relative">
      <div class="headline_22 t_semibold">
        {{ cardTitle }}
      </div>
      <ul>
        <li v-for="item in text" :key="item" class="rules-about2__item__txt">{{item}}</li>
      </ul>
    </div>
    <div v-else class="uk-position-relative">
      <div class="headline_22 t_semibold">
        {{ cardTitle }}
      </div>
      <div class="rules-about2__item__txt">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecurityCard",
  props: {
    cardStyle: String,
    cardTitle: String,
    cardType: String,
    cardContent: String,
    cardIcon: String,
  },

  computed: {
    cardStyleChoice() {
      if (this.cardStyle === 'dark') {
        return 'rules-about2__item1'
      } else if (this.cardStyle === 'light') {
        return 'rules-about2__item2'
      }
    },
    text() {
      return this.cardType === 'list' ? this.cardContent.split('\n') : this.cardContent
    }
  }
}
</script>

<style scoped>

</style>
