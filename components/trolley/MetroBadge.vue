<template>
  <div class="trams__metro-wrapper">
    <div v-for="(color, index) in colors" class="trams__route__metro__badge" :class="checkColor(index)">M</div>
  </div>
</template>

<script>
export default {
  name: "MetroBadge",
  props: {
    colors: Array,
  },
  methods: {
    checkColor(index) {
      let a,
      currentColor = this.colors[index]
      switch(currentColor) {
        case 'blue':
          a = `trams__route__metro__badge_blue`
          break
        case 'brown':
          a = `trams__route__metro__badge_brown`
          break
        case 'red':
          a = `trams__route__metro__badge_red`
          break
        case 'orange':
          a = `trams__route__metro__badge_orange`
          break
        default:
          break
      }
      return a
    }
  },
}
</script>

<style scoped>
.trams__metro-wrapper {
  display: flex;
}

</style>
