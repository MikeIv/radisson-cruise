<template>
  <div class="trams-shutdown__item">
    <img src="~assets/img/svg/ancor-in-blue.svg" alt="" class="uk-preserve ancor-black" uk-svg>
    <span>
       {{ portName }}
    </span>
  </div>
</template>

<script>
export default {
  name: "PortItem",
  props: {
    portName: String,
  }
}
</script>

<style scoped>

</style>
