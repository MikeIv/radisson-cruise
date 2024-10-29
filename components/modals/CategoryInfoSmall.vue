<template>
  <div id="categoryInfoSmall" class="uk-flex-top uk-modal" uk-modal>
    <div v-if="info"  class="uk-modal-dialog category_modal-wrapper uk-margin-auto-vertical">
      <div class="uk-position-relative">
        <button type="button" uk-close class="modal_close-button uk-modal-close"></button>
        <img v-if="info.images.length > 0" :src="$config.baseSiteURL + info.images[0]" :data-src="$config.baseSiteURL + info.images[0]" alt="" class="">
        <div class="modal_content">
          <div class="modal_content-name">
            <svg-icon width='35'
                      height="35"
                      fill="#00C1F3"
                      class="category_icon"
                      :name="currentIcon"
            />
            {{ info.name }}
          </div>
          <div class="modal_content-text" v-html="info.description"></div>
          <div class="modal_content-button">
            <nuxt-link :to="`/categories/${info.slug}/`" class="uk-modal-close uk-button uk-button-more">{{$t('buttons.more')}}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UIkit from "uikit";
import axios from "axios";

export default {
  name: "CategoryInfoSmall",
  props: {
    info: {
      type: Object,
    }
  },
  data() {
    return {
      category: {},
    };
  },
  computed: {
    currentIcon() {
      switch (this.info.type_id) {
        case 0:
          return 'categories/Osnovnoy';
        case 1:
          return 'categories/Teatr';
        case 2:
          return 'categories/Royal';
        case 3:
          return 'categories/Erwin';
        case 4:
          return 'categories/Royal';
        case 5:
          return 'categories/1class';
        case 6:
          return 'categories/Jazz';
        case 7:
          return 'categories/Degust';
        default: {
          return 'categories/Osnovnoy'
        }
      }
    },
  },
}
</script>

<style scoped>
.category_modal-wrapper {
  max-width: 520px !important;
  width: 100%;
}
.modal_content {
  padding: 24px 30px;
}
.modal_content-name {
  margin-bottom: 14px;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  color:#00C1F3;
  display: flex;
  align-items: center;
  gap: 20px;
}
.modal_content-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #232323;
}
.modal_content-button{
  display: flex;
  justify-content: center;
  margin: 20px auto 0;
}
.modal_close-button {
  position: absolute;
  top:10px;
  right: 10px;
  display: block;
  color: #232323;
  background: #00C1F3;
  width: 25px;
  height: 25px;
}
</style>
