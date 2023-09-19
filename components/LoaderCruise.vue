<template>
  <div v-if="loading" id="preloader2" >
    <div class="preloader2_decor"></div>
    <div class="preloader2_center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 67" id="compass">
        <path d="M29.172 0h.426v9.937h-.426zm7.723 9.937L29.882 0h2.442l6.587 9.341V0h.426v9.937zm-2.684 56.637a9.656 9.656 0 001.036-.057 3.039 3.039 0 00.944-.248 1.752 1.752 0 00.688-.554 1.655 1.655 0 00.284-.972 1.27 1.27 0 00-.362-.972 2.846 2.846 0 00-.994-.618 7.5 7.5 0 00-1.412-.383l-1.619-.291q-.823-.149-1.625-.348a6.042 6.042 0 01-1.42-.532 3.027 3.027 0 01-1-.845 2.117 2.117 0 01-.383-1.306A2.081 2.081 0 0128.859 58a3.555 3.555 0 011.327-.9 7.417 7.417 0 011.853-.469 16.263 16.263 0 012.1-.135 10.924 10.924 0 011.6.128 9.53 9.53 0 011.689.412 7.222 7.222 0 011.555.746 4.007 4.007 0 011.178 1.129h-1.9a2.852 2.852 0 00-.66-.838 4.138 4.138 0 00-.951-.625 5.168 5.168 0 00-1.171-.39 6.447 6.447 0 00-1.335-.135 6.777 6.777 0 00-1.618.213 2.606 2.606 0 00-1.043.532 1.952 1.952 0 00-.561.866 3.894 3.894 0 00-.17 1.214 1.646 1.646 0 00.376 1.107 2.775 2.775 0 00.994.717 7.074 7.074 0 001.413.447q.8.17 1.619.3t1.618.27a8.828 8.828 0 011.412.362 2.868 2.868 0 011 .575 1.184 1.184 0 01.384.909 1.543 1.543 0 01-.277.916 2.512 2.512 0 01-.731.674 4.747 4.747 0 01-1.037.476 9.4 9.4 0 01-1.178.305 10.465 10.465 0 01-1.15.156q-.554.043-.979.043a9.663 9.663 0 01-1.533-.128 7.82 7.82 0 01-1.54-.411 6.492 6.492 0 01-1.405-.746 4.36 4.36 0 01-1.115-1.129h1.9a3.557 3.557 0 001.4 1.469 4.558 4.558 0 002.288.514zm24.852-38.106H69v8.134h-.426v-6h-4.543v3.577l-.426-.3V30.6h-4.117v6.857h-.426zM0 25.181h9.937v.426H0zm9.937 5.266v.426H6.544L0 35.486v-2.442l3.279-2.314H0v-.426h3.875l6.062-4.273v2.442l-2.8 1.973zM0 40.753v-2.442l9.937-7.013v2.442zm33.993 8.394v-.293a16 16 0 003.535-.4l.065.285a16.272 16.272 0 01-3.6.408zm-3.6-.4a16.091 16.091 0 01-3.423-1.193l.127-.264a15.816 15.816 0 003.361 1.171zm10.621-1.207l-.128-.264a15.913 15.913 0 003.009-1.9l.183.229a16.229 16.229 0 01-3.065 1.938zm-17.113-1.912a16.316 16.316 0 01-2.566-2.558l.229-.183a16 16 0 002.52 2.512zm22.739-2.583l-.229-.183a15.935 15.935 0 001.895-3.012l.264.127a16.234 16.234 0 01-1.932 3.07zM19.4 40.007a16.147 16.147 0 01-1.2-3.418l.286-.066a15.8 15.8 0 001.181 3.356zm30.366-3.451l-.285-.065a15.99 15.99 0 00.395-3.536v-.067h.293v.067a16.269 16.269 0 01-.405 3.604zm-31.685-3.567h-.293v-.03a16.327 16.327 0 01.394-3.572l.286.064a15.986 15.986 0 00-.387 3.5zm31.385-3.634a15.832 15.832 0 00-1.188-3.353l.263-.128a16.136 16.136 0 011.211 3.415zm-29.83-3.264l-.264-.127a16.22 16.22 0 011.924-3.071l.229.182a15.908 15.908 0 00-1.893 3.018zm26.735-3.092a16.03 16.03 0 00-2.525-2.507l.182-.229a16.309 16.309 0 012.571 2.553zm-22.337-2.447l-.184-.228a16.215 16.215 0 013.061-1.938l.128.263a15.926 15.926 0 00-3.007 1.905zm16.794-1.946a15.809 15.809 0 00-3.363-1.164l.064-.285a16.1 16.1 0 013.426 1.185zm-10.434-1.142l-.066-.285a16.281 16.281 0 013.6-.413v.293a16 16 0 00-3.536.407z" fill="#fff"></path>
        <circle cx="5.712" cy="5.712" r="5.712" transform="translate(28.264 27.241)" fill="#edeeef"></circle>
      </svg>
    </div>
    <div class="preloader2__slide">
    </div>
    <div class="preloader2_bottom">
      Загрузка
    </div>
    <div id="js-progressbar">
      <div class="uk-progress"></div>
    </div>
    <div class="klademug" >0%</div>
  </div>
</template>

<script>
export default {
  name: "LoaderCruise",
  data(){
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  },
}
</script>

<style scoped>
#preloader2 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1003;
  width: 100%;
  height: 100%;
  overflow: visible;
  background: #1D2240;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}

#preloader2.hidden {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: op2;
}
#preloader2.hiddenBlock {
  display: none;
}

.preloader2_center {
  text-align: center;
  margin: auto;
  position: absolute;
  top: 12%;
  right: 13%;
  z-index: 11;
  fill: #fff;
  opacity: 0;
  animation: op1 15s linear;
  animation-fill-mode: both;
}

@keyframes op1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes op2 {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.preloader2_center * {
  position: relative;
  z-index: 12;
}

.preloader2_center svg {
  width: 235px;
  height: 228px;
}

#js-progressbar {
  position: absolute;
  top: 81%;
  left: 10%;
  width: 50%;
  z-index: 9;
}

#js-progressbar .uk-progress {
  background: #00C1F3;
  height: 5px;
  width: 0px;
  animation: w100 2.5s linear;
  animation-fill-mode: both;
  margin-bottom: 0;
  border-radius: 0;
}

#js-progressbar2 {
  position: absolute;
  top: 70%;
  right: 0%;
  width: 50%;
  z-index: 9;
}

#js-progressbar2 .uk-progress {
  background: #00C1F3;
  height: 5px;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-name: w100;
  animation-fill-mode: both;
  width: 0px;
}

@keyframes w100 {
  0% {
    width: 0%;
  }

  10% {
    width: 10%;
  }

  20% {
    width: 20%;
  }

  30% {
    width: 30%;
  }

  40% {
    width: 40%;
  }

  50% {
    width: 50%;
  }

  60% {
    width: 60%;
  }

  70% {
    width: 70%;
  }

  80% {
    width: 80%;
  }

  90% {
    width: 90%;
  }

  100% {
    width: 100%;
  }
}

.uk-progress::-webkit-progress-bar {
  background-color: #F2C200;
}

.uk-progress::-webkit-progress-value {
  background-color: #F2C200;
}

.uk-progress::-moz-progress-bar {
  background-color: #F2C200;
}

.uk-progress::-ms-fill {
  background-color: #F2C200;
}

.preloader-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background: rgba(0, 0, 0, 0.5);
  animation-delay: 0s;
  opacity: 1;
  animation-duration: 2s;
  animation-name: preloader2backgroundanimate;
  animation-fill-mode: both;
}

@keyframes preloader2backgroundanimate {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}

.preloader2-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1.5s;
}

.preloader2-decor {
  position: absolute;
  bottom: 0;
  width: 100%;
  right: 0;
}

.preloader2_bottom {
  //font-family: cowor, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #fff;
  position: absolute;
  top: 21%;
  left: 7%;
  font-size: 72px;
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 0px;
  animation: blink 1.5s linear infinite;
}

.preloader2_decor {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #00C1F3;
}

.klademug {
  font-family: mont;
  font-size: 300px;
  font-weight: 700;
  color: #fff;
  animation: op1 1s linear;
  line-height: 1;
  margin-top: 0px;
  animation-fill-mode: both;
  position: absolute;
  right: 0;
  bottom: 14%;
}

.preloader2__slide {
  background: url('/preload.png') center center / auto;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 400px;
  opacity: 0;
  transition: 1s;
  width: 100%;
  animation: animatedBackground 30s linear infinite;
}

@-webkit-keyframes animatedBackground {
  0% {
    background-position: 0 0
  }

  100% {
    background-position: -2979px 0px
    /* анимируем свойство background-position */
  }
}

@keyframes animatedBackground {
  0% {
    background-position: 0 0
  }

  100% {
    background-position: -2979px 0px
    /* анимируем свойство background-position */
  }
}

@keyframes blink {
  0% {
    opacity: .5;
  }

  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 1600px) {
  .klademug {
    font-size: 175px;
    z-index: 10;
  }
}

@media screen and (max-width: 959px) {
  #js-progressbar {
    left: 20px;
  }

  .preloader2_center svg {
    width: 125px;
    height: 128px;
  }

  .preloader2_center {
    right: 20px;
  }

  .preloader2_bottom {
    font-size: 35px;
    left: 20px;
  }

  .klademug {
    font-size: 105px;
  }
}

@media screen and (max-width: 640px) {
  @-webkit-keyframes animatedBackground {
    0% {
      background-position: 0 0
    }

    100% {
      background-position: -1000px 0px
      /* анимируем свойство background-position */
    }
  }

  @keyframes animatedBackground {
    0% {
      background-position: 0 0
    }

    100% {
      background-position: -1000px 0px
      /* анимируем свойство background-position */
    }
  }

  .preloader2__slide {
    background-size: 1000px !important;
    background-repeat: no-repeat !important;
    height: 200px;
  }

  #js-progressbar .uk-progress {
    height: 3px;
  }

  #js-progressbar {
    left: 15px;
    top: 60%;
  }

  .klademug {
    font-size: 55px;
    bottom: 39%;

  }

  .preloader2_bottom {
    font-size: 22px;
    top: 35%;
    left: 15px;
  }

  .preloader2_center svg {
    width: 55px;
    height: 55px;
  }

  .preloader2_center {
    top: 32%;
    right: 15px;
  }
}
</style>