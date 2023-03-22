<template>
<!--  <div class="container">
    <div class="subscribe_form">
      <div class="subscribe_left">
        <span>M</span>

        <span>{{ $t('footer.titleNewsSubscribe') }}</span>
        &lt;!&ndash;         <span>РАССЫЛКА НОВОСТЕЙ</span> &ndash;&gt;
      </div>
      <form action="" class="subscribe_right">
        <input type="text" />
        <button type="submit">-&ndash;&gt;</button>
      </form>
    </div>
  </div>-->

  <div class="mailing">
    <div class="uk-container">
      <div class="mailing__block">
        <div class="mailing__left">
          <img src="~assets/img/svg/mail.svg" alt="" uk-svg>
          <div class="headline_p1">
            РАССЫЛКА НОВОСТЕЙ
          </div>
        </div>
        <form action="" class="mailing__form">
          <input type="text" class="uk-input" placeholder="Адрес вашей электронной почты">
          <button class="mailing__btn" type="submit">
            <img src="~assets/img/svg/arrow.svg" alt="" uk-svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SubscribeNews',
  };
</script>

<style scoped>
  /*.subscribe_form {
    display: flex;
    justify-content: space-between;
    padding: 120px 0;
  }
  .subscribe_left {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 44px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.2;
    margin-top: 15px;
  }

  .subscribe_right {
    width: 50%;
    position: relative;
  }

  .subscribe_right input {
    width: 100%;
    border-bottom: 1px solid black;
    padding: 20px 0;
  }

  .subscribe_mail {
    width: 48px;
    height: 36px;
    min-width: 48px;
    margin-right: 47px;
  }

  .submit_arrow {
    width: 26px;
    height: 18px;
  }*/

  .mailing__form .uk-input {
    color: #1D2240;
    font-weight: 400;
    border-color: #000;
    font-size: 16px;
    height: 60px;
    border-width: 2px;
  }
</style>
