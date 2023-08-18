<template>
  <div class="payment-wrapper">
    <img v-if="isSuccessful" src="~assets/img/success.png" alt="">
    <img v-if="isFailed" src="~assets/img/fail.png" alt="">
    <h1>
      {{ isSuccessful ? $t('payment_status_success') : $t('payment_status_fail')}}
    </h1>
    <div v-if="isSuccessful" class="payment-text">
      <p>{{ $t('payment_success') }}</p>
      <p>{{ $t('payment_email') }}</p>
      <strong>{{ $t('payment_happy') }}</strong>
    </div>
    <div v-if="isFailed" class="payment-text">
      <p>{{ $t('payment_fail') }}</p>
    </div>
    <a href="/" class="uk-button uk-button-default transition" >
      <span>{{$t('buttons.back_to_root')}}</span>
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