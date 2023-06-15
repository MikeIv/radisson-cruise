<template>
  <li @click="$emit('pause')">
    <a href="#" class="rules-security-video__tab" aria-expanded="false">
      <div class="rules-security-video__tab__name1">
        <b> {{ title }}</b>
      </div>
      <div class="rules-security-video__tab__name2">
        {{ names }}
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "VideoNavItem",
  props: {
    title: String,
    names: String,
  }
}
</script>

<style scoped>

</style>
