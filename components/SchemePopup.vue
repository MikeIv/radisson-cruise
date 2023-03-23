<template>
  <div v-show="active" class="scheme__drop test">
    <div class="scheme__drop_grid">
      <div class="scheme__drop_img uk-cover-container">
        <img data-src="~assets/img/main/img4.png" class="img_cover" alt="" src="~assets/img/main/img4.png">
      </div>
      <div class="scheme__drop_info">
        <svg-icon name='info_notice'  class="scheme__drop_info-svg"/>
        <div class="scheme__drop_headline">
          Новодевичий
          монастырь
        </div>
        <div class="scheme__drop_text">
          Включен в список всемирного
          наследия ЮНЕСКО.
        </div>
        <a class="link_more transition" href="">
          <span>Подробнее</span>
          <svg-icon name='right-arrow-blue' class="icon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchemePopup",
  data() {
    return {
      active: false,
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
    /*let bubbles = document.querySelectorAll('.scheme__map_path-container .uk-inline')
    let modal = document.querySelector('.test')
    for (let i = 0; i < bubbles.length; i++) {
      const clickedItem = bubbles[i];
      clickedItem.style.zIndex = '5'
      // Add an event listener to each item
      clickedItem.addEventListener("click", function(e) {
        // Remove class from all items
        for (let j = 0; j < bubbles.length; j++) {
          const item = bubbles[j];
          //item.classList.remove('uk-test')
          modal.style.display = 'none'
          item.style.zIndex = '5'
        }

        // Add class to the clicked item
        clickedItem.style.zIndex = '6';
        modal.style.display = 'block'
        modal.style.left = clickedItem.getBoundingClientRect().x - window.innerWidth / 6  + 'px'
        modal.style.top = clickedItem.getBoundingClientRect().y - window.innerHeight / 2.5  + 'px'
      });
    }*/
  }
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
</style>
