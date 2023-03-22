<template>
  <div class="payment-wrapper">
    <img v-if="isSuccessful" src="~assets/img/success.png" alt="">
    <img v-if="isFailed" src="~assets/img/fail.png" alt="">
    <h1>
      {{ isSuccessful ? 'Оплата прошла успешно' : 'Оплата не прошла'}}
    </h1>
    <div v-if="isSuccessful" class="payment-text">
      <p>Благодарим за покупку! Ваш электронный билет на речную прогулку и подтверждение</p>
      <p>платежа были направлены на указанную электронную почту (e-mail).</p>
      <strong>Желаем вам приятной прогулки!</strong>
    </div>
    <div v-if="isFailed" class="payment-text">
      <p>К сожалению, оплата по Вашему заказу не прошла.</p>
    </div>
    <a href="/" class="uk-button uk-button-default transition" >
      <span>ВЕРНУТЬСЯ НА ГЛАВНУЮ</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "pay-status",
  layout: "payment",
  data() {
    return {
      isSuccessful: false,
      isFailed: false,
    }
  },
  mounted() {
    this.$route.query.payment === 'success' ? this.isSuccessful = true : this.isFailed = true;
  }
}
</script>

<style scoped>
.payment-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
}
h1 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #232323;
  margin-bottom: 40px;
  margin-top: 27px;
}
.payment-text {
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #0C0C0C;
  margin-bottom: 45px;
}
.payment-text p {
  margin: 0;
}
.payment-text strong {
  margin-top: 20px;
  display: block;
}

</style>