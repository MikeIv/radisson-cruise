<script>
export default {
  name: "DefaultModal",
  props: {
    text: String,
  },
}
</script>

<template>
  <div ref="defaultModal" id="defaultModal" class="uk-flex-top success uk-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
      <div class="uk-modal-body uk-position-relative">
        <div v-html="text"></div>
        <div class="success_bottom">
          <a class="uk-modal-close uk-button uk-button-default">{{$t('buttons.close_window')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>