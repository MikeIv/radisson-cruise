<script>
export default {
  name: "ChildInfo"
}
</script>


<template>
  <div id="childInfo" class="uk-flex-top success uk-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
      <div class="uk-modal-body uk-position-relative">
        <p>
          Право бесплатного проезда предоставляется детям до 5 лет, если ребенок не занимает отдельного пассажирского места.
          На детей в возрасте от 6 до 12 лет необходимо приобретать отдельный билет по тарифу выбранного вами салона или типа рейса.
          Детские тарифы не распространяются на прогулку в салоне Первого класса за исключением детей до 1 (одного) года.
          Дети до 14 лет включительно на борт допускаются только в сопровождении взрослых.
        </p>
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