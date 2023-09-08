<script>
import axios from "axios";

export default {
  name: "ChildInfo",
  props: {
    text: String,
  },
  data() {
    return {
      kidsPopup: '',
    }
  },
  async fetch() {
    try {
      const kidsPopupData = await axios.get(
          `${this.$config.baseURL}varyelements?code=kids_popup&lang=${this.$i18n.locale}`)
      this.kidsPopup = kidsPopupData.data?.result?.kids_popup?.content
    } catch(error) {
      this.$nuxt.error({ statusCode: 404, message: 'Data not found' })
    }
  },
  fetchOnServer: false,
  fetchKey: 'yacht-ticket-popup',
}
</script>


<template>
  <div id="childInfo" class="uk-flex-top success uk-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
      <div class="uk-modal-body uk-position-relative">
        <div v-html="kidsPopup"></div>
        <div class="success_bottom">
          <a class="uk-modal-close uk-button uk-button-default">{{$t('buttons.close_window')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 639px) {
  .uk-modal .uk-close {
    right: 5px;
    width: 15px;
    height: 15px;
    padding: 0;
    top: 5px;
  }
}

</style>