<template>
  <div class="uk-width-1-2@s uk-scrollspy-inview uk-animation-fade" :class="!bottoms ? `uk-width-1-3@m` : ``">
    <div class="tenancy-event__item uk-cover-container">
      <img :data-src="`${$config.imageURL}?size=670&format=webp&src=${$config.baseSiteURL}${fileName}`"
           class="img_cover"
           alt=""
           :src="`${$config.imageURL}?size=670&format=webp&src=${$config.baseSiteURL}${fileName}`">
      <div class="uk-position-relative">
        <div class="headline_26 text-upper">
          <b> {{title}} </b>
        </div>
        <MoreBtn @select-title="selectTitle" :title="title"/>
      </div>
    </div>
  </div>
</template>

<script>
import MoreBtn from "./MoreBtn";
export default {
  name: "Event",
  components: {MoreBtn},
  props: {
    title: String,
    bottoms: Boolean,
    fileName: String,
  },
  methods: {
    selectTitle() {
      this.$emit('select-title')
    }
  }
}
</script>

<style scoped>

</style>
