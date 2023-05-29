<template>
  <div id="success" class="uk-flex-top success uk-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-modal-body uk-position-relative">
        <h2 class="uk-modal-title">
          Сообщение отправлено
        </h2>
        <p>
          Спасибо! Актуальные акции и предложения будут направляться на указанный e-mail.
        </p>
        <div class="success_bottom">
          <a class="uk-modal-close uk-button uk-button-default">Закрыть</a>
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