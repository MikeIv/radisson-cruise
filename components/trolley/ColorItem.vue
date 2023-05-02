<template>
  <div class="trams-colors__item uk-position-relative">
    <div class="trams-colors__item__img">
      <!--      <img  data-src="~assets/img/inners/trams-color1.png" alt="" src="~assets/img/inners/trams-color1.png">
            <img  data-src="~assets/img/inners2/adv_color1.png" alt="" src="~assets/img/inners2/adv_color1.png">-->
      <svg-icon name='tram_icon' class="icon"/>
    </div>
    <div class="trams-colors__item__name">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorItem",
  props: {
    name: String,
    color: {
      type: String,
      default: '#ff0000',
    }
  }
}
</script>

<style scoped>
.trams-colors__item__img .icon {
  width: 41px;
  height: 24px;
  fill: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.2s;
}
@media screen and (max-width: 639px) {
  .trams-colors__item__img .icon {
    width: 27px;
  }
}

.trams-colors__item__img{
  background-color: v-bind(color);
}
.trams-colors__item:hover {
  background-color: v-bind(color);
}
.trams-colors__item:hover .trams-colors__item__img{
  background-color: #ffffff;
}
.trams-colors__item:hover .trams-colors__item__img .icon{
  fill: v-bind(color);
}
</style>
