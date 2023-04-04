<template>
  <div class="social_links">
    <SocialItem v-for="(social, key, index) in socials" :key="'scl' + index" :link="social" :svgURL="key"/>
  </div>
</template>

<script>
import SocialItem from "./SocialItem";
import axios from "axios";
export default {
  name: "SocialBlock",
  components: {SocialItem},
  data() {
    return {
      socials: []
    };
  },
  async fetch() {
    try {
      const socialData = await axios.get(`${this.$config.baseURL}textelements?code[]=vk&code[]=telegram&code[]=youtube`);
      this.socials = socialData.data.result;
    } catch(e) {

    }
  },
  fetchOnServer: true,
  fetchKey: 'social-block',
}
</script>

<style scoped>

</style>
