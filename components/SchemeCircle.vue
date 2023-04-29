<template>
  <div class='uk-inline' :class="['scheme_item' + customClass, {'uk-open' : isActiveCircle},{'uk-open' : isModalShow}, {'active' : activeClassToCircle}]">
    <div v-if="port !== null && !isActive">
      <div v-if="activeRoute === 1 && customClass != 1" class="scheme__item-container">
        <button type="button" class="scheme__item_circle" aria-expanded="false" :class="{'uk-open' : isActiveCircle}" @click.prevent="toggleActive" :id="idNum"></button>
        <div class="scheme__item_txt" v-html="title"></div>
      </div>

      <div v-else-if="activeRoute === 1 && customClass == 1" class="scheme__item-container">
        <button type="button" class="scheme__item_first" aria-expanded="false" :id="idNum">
          <svg-icon name='ancor' class="icon"/>
        </button>
        <div>
          <span v-html="port"></span>
          <svg-icon name='flag' class="icon"/>
        </div>
      </div>

      <div v-else-if="activeRoute === 2 && customClass != 1" class="scheme__item-container">
        <button type="button" class="scheme__item_first" aria-expanded="false" :id="idNum">
          <svg-icon name='ancor' class="icon"/>
        </button>
        <div>
          <span v-html="port"></span>
          <svg-icon name='flag' class="icon"/>
        </div>
      </div>

      <div v-else-if="activeRoute === 2 && customClass == 1" class="scheme__item-container">
        <button type="button" class="scheme__item_circle" aria-expanded="false" :class="{'uk-open' : isActiveCircle}" @click="toggleActive($event)" :id="idNum"></button>
        <!-- <div class="scheme__item_txt" v-html="title"></div> -->
      </div>
    </div>

    <div v-else-if="port !== null && isActive && customClass == 9">
      <div v-if="activeRoute === 1" class="scheme__item-container">
        <button type="button" class="scheme__item_first" aria-expanded="false" :class="{'uk-open' : isActiveCircle}" @click.prevent="toggleActive" :id="idNum">
          <svg-icon name='ancor' class="icon"/>
        </button>
        <div>
          <span v-html="port"></span>
        </div>
      </div>

      <div v-if="activeRoute === 2" class="scheme__item-container">
        <button type="button" class="scheme__item_first" aria-expanded="false" :class="{'uk-open' : isActiveCircle}" @click.prevent="toggleActive" :id="idNum">
          <svg-icon name='ancor' class="icon"/>
        </button>
        <div>
          <span v-html="port"></span>
          <span>Начало маршрута</span>
          <svg-icon name='flag' class="icon"/>
        </div>
      </div>
    </div>

    <div v-else-if="port !== null && isActive">
      <div v-if="activeRoute === 1 && customClass != 1" class="scheme__item-container">
        <button type="button" class="scheme__item_first" aria-expanded="false" :class="{'uk-open' : isActiveCircle}" @click.prevent="toggleActive" :id="idNum">
          <svg-icon name='ancor' class="icon"/>
        </button>
        <div>
          <span v-html="port"></span>
        </div>
      </div>

      <div v-else-if="activeRoute === 1 && customClass == 1" class="scheme__item-container">
        <button type="button" class="scheme__item_first" aria-expanded="false" :id="idNum">
          <svg-icon name='ancor' class="icon"/>
        </button>
        <div>
          <span v-html="port"></span>
          <svg-icon name='flag' class="icon"/>
        </div>
      </div>

      <div v-else-if="activeRoute === 2 && customClass != 1" class="scheme__item-container">
        <button type="button" class="scheme__item_circle" aria-expanded="false" :class="{'uk-open' : isActiveCircle}" @click="toggleActive($event)" :id="idNum"></button>
        <div class="scheme__item_txt" v-html="title"></div>
      </div>

      <div v-else-if="activeRoute === 2 && customClass == 1" class="scheme__item-container">
        <button type="button" class="scheme__item_circle" aria-expanded="false" :class="{'uk-open' : isActiveCircle}" @click="toggleActive($event)" :id="idNum"></button>
        <div class="scheme__item_txt" v-html="title"></div>
      </div>
    </div>

    <div v-else class="scheme__item-container">
      <button type="button" class="scheme__item_circle" :class="{'uk-open' : isActiveCircle}" aria-expanded="false" @click.prevent="toggleActive" :id="idNum"></button>
      <div class="scheme__item_txt" v-html="title"></div>
    </div>

    <div v-if="isActiveCircle" ref="modal" class="scheme__drop test">
      <div class="scheme__drop_grid">
        <div class="scheme__drop_img uk-cover-container">
          <img :data-src="require(`~/assets/img/scheme/${img}`)" alt="" :src="require(`~/assets/img/scheme/${img}`)" class="img_cover">
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

<!--     <div v-if="isModalShow" ref="modalshow" class="scheme__drop test">
      <div class="scheme__drop_grid">
        <div class="scheme__drop_img uk-cover-container">
          <img :data-src="require(`~/assets/img/scheme/${img}`)" alt="" :src="require(`~/assets/img/scheme/${img}`)" class="img_cover">
        </div>
        <div class="scheme__drop_info">
          <svg-icon name='info_notice'  class="scheme__drop_info-svg"/>
          <div class="scheme__drop_headline">
            {{ location }}
          </div>
          <div class="scheme__drop_text">
            {{ info }}
          </div>

        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "SchemeCircle",
  props: {
    idNum: String,
    customClass: String,
    title: String,
    info: String,
    location: String,
    activeRoute: Number,
    port: String,
    isActive: Boolean,
    isActiveCircle: Boolean,
    img: {
      type: String,
      default: 'img4.webp'
    },
  },
  data() {
    return{
      isModalShow: false,
      active: false,
    }
  },
  computed: {
    activeClassToCircle() {
      if((this.customClass == 4 || this.customClass == 6 || this.customClass == 16) && this.isActive && this.activeRoute == 1) {
        return `active`
      }
    },
  },
  methods: {
    toggleActive(event) {
      console.log("toggleActive", event);
      console.log("toggleActive props", this.$props);
      console.log("toggleActive info = ", this.info);
      console.log("toggleActive title = ", this.title);
      //this.$emit('onToggle')
      this.isModalShow = !this.isModalShow
      this.$emit('on-toggle-route')
    },
    getCoords(event){
      //console.log(event)
    }
  },
  updated() {
    this.$nextTick(() => {
      let modal = this.$refs.modal;
      //console.log(modal)
    })
  },
  beforeDestroy() {

  }
  ,
  mounted(){
    console.log("data mount =", this.$props);
  }
  /*  mounted() {
      let bubbles = document.querySelectorAll('.scheme__map_path-container .uk-inline')
      let bubblesIcon = document.querySelectorAll('.scheme__map_path-container .uk-inline button')
      let modal = document.querySelector('.test')
          for (let i = 0; i < bubbles.length; i++) {
            const clickedItem = bubbles[i];
            clickedItem.style.zIndex = '5'
            // Add an event listener to each item
            clickedItem.addEventListener("click", function(e) {
              // Remove class from all items
              for (let j = 0; j < bubbles.length; j++) {
                const item = bubbles[j];
                item.classList.remove('uk-open')
                modal.style.display = 'none'
                item.style.zIndex = '5'
              }

              // Add class to the clicked item
              clickedItem.style.zIndex = '6';
              modal.style.display = 'block'
              console.log(modal.offsetWidth )
              console.log(modal.getBoundingClientRect().right)
              console.log(window.innerWidth)
              console.log(clickedItem.getBoundingClientRect().right)
              console.log(modal.getBoundingClientRect().right)
              /!*modal.style.left = clickedItem.offsetLeft  + 'px'*!/
              if ((clickedItem.getBoundingClientRect().right + modal.offsetWidth) > window.innerWidth) {
                modal.style.right = 200 + 'px'
                modal.style.left = ''
              } else {
                modal.style.left = clickedItem.offsetLeft  + 'px'
                modal.style.right = ''
              }
              modal.style.top = clickedItem.offsetTop - 75  + 'px'
            });
          }
    }*/
}
</script>

<style scoped>
.uk-inline.uk-open {
  z-index: 6;
}

.scheme__item_circle.uk-open{
  box-shadow: 0px 0px 8px 3px rgb(251 19 1 / 90%);
  background: #fff;
  border-color: #FB1301;
}
.test .scheme__drop_info-svg {
  right: 34px;
  top: 0;
}

.test {
  position: absolute;
  z-index: 1020;
  box-sizing: border-box;
  min-width: 200px;
  padding: 0;
  color: #666;
  box-shadow: 0 5px 12px rgb(0 0 0 / 15%);
}

</style>
