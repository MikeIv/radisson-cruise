<template>
    <div ref="modalshow" class="scheme__drop position-modal-info" :class="idNum">
      <div class="scheme__drop_grid">
        <div class="scheme__drop_img uk-cover-container">
          <img 
          :data-src="`${$config.imageURL}?size=650&format=webp&src=${$config.baseSiteURL}`+img"
          alt="" 
          :src="`${$config.imageURL}?size=650&format=webp&src=${$config.baseSiteURL}`+img"

          class="img_cover">
         <!--  <img :data-src="require(`~/assets/img/scheme/${img}`)" alt="" :src="require(`~/assets/img/scheme/${img}`)" class="img_cover"> -->
        </div>
        <div class="scheme__drop_info">
          <svg-icon name='info_notice'  class="scheme__drop_info-svg"/>
          <div class="scheme__drop_headline">
            {{ location }}
          </div>
          <div class="scheme__drop_text">
            {{ info }}
          </div>
<!--          <a class="link_more transition" href="">
            <span>Подробнее</span>
            <svg-icon name='right-arrow-blue' class="icon"/>
          </a>-->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "SchemePopup",
  props: {
    idNum: String,
    info: String,
    location: String,
    img: String
  },
  data() {
    return {
      active: false,
      isModalShow: false,
    }
  },
  methods: {
    hideOutside(e) {
      if(e.target != document.querySelector('.test')) {
        //console.log('true')
      } else {
        //console.log('false')
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.hideOutside)
    console.log("mounted IMG: ", this.img);
  },
  }

</script>

<style scoped>
.test .scheme__drop_info-svg {
  right: 34px;
  top: 0;
}
.test {
  display: none;
  position: absolute;
  z-index: 1020;
  width:450px;
  padding: 25px;
  color: #666;
}
.position-modal-info{
  position: absolute;
  transform: translateY(50%);
  z-index: 100;
}
</style>
