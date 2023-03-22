<template>
  <a @click="selectTitle(title)" class="uk-button uk-button-primary" href="#modal-tenancy" uk-toggle="">
    <span>Подробнее</span>
  </a>
</template>

<script>
export default {
  name: "MoreBtn",
  props: {
    title: String,
  },
  methods: {
    selectTitle(title) {
      this.$emit('select-title', title)
    }
  }
}
</script>

<style scoped>

</style>
