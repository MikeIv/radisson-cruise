<template>
  <div>
<!--    <img uk-img src="~assets/img/main/not.png" data-src="~assets/img/main/not.png" alt="" class="img_cover not_found_back" >-->
    <div class="uk-container uk-position-relative not_found__header">
      <div class="not_found-block">
        <div class="not_found-block-left">
          <div class="headline_p1">
            страницы<br>
            не существует
          </div>
          <div class="not_found-block-p2">
            Запрашиваемая страница не существует или была удалена,
            для поиска нужной инофрмации перейдите на главную страницу
            или воспользуйтесь меню сайта.
          </div>
          <a href="/" class="uk-button uk-button-default transition" >
            <span>НА ГЛАВНУЮ</span>
          </a>
        </div>
        <div class="not_found_img-container">
          <svg class="not_found_img">
            <use xlink:href="#error"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {Header},
  props: ['error'],
  layout: 'error-layout' // you can set a custom layout for the error page
}
</script>
