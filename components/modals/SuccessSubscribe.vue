<template>
  <div id="success" class="uk-flex-top success uk-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-modal-body uk-position-relative">
        <h2 class="uk-modal-title">
          {{ $t('subscribe_modal.title') }}
        </h2>
        <p>
          {{ $t('subscribe_modal.message') }}
        </p>
        <div class="success_bottom">
          <a class="uk-modal-close uk-button uk-button-default">{{$t('buttons.close_window')}}</a>
          <svg class="icon">
            <use xlink:href="#img-logo"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessSubscribe"
}
</script>

<style scoped>
#success .uk-modal-body {
  padding: 35px;
}
</style>