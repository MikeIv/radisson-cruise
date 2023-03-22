<template>
  <div class="social_links">
<!--    <SocialItem :svgURL="'facebook'"/>-->
    <SocialItem link="https://vk.com/radissoncruise" svgURL="vkontakte"/>
<!--    <SocialItem :svgURL="'inst_soc'"/>-->
    <SocialItem link="https://www.youtube.com/channel/UColsxBwcNl1WwVq6wbYyUcw/featured" svgURL="you"/>
    <SocialItem link="https://t.me/radisson_cruise" svgURL="teleg"/>
  </div>
</template>

<script>
import SocialItem from "./SocialItem";
export default {
  name: "SocialBlock",
  components: {SocialItem},
}
</script>

<style scoped>

</style>
