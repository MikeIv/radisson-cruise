<template>
  <div id="modal-category-cabin-filter" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-container modal-full_container">
        <div class="headline_56 text-upper">
          Фильтр
        </div>
        <div class="modal-news-filter__body" uk-filter="target: .js-filter">
          <ul class="news__navigatiom__tabs uk-padding-remove">
            <li class="uk-button button_switcher-second" uk-filter-control="">
              <button class="uk-text-uppercase">{{$t('pages.categories.tabs.all')}}</button>
            </li>
            <li class="uk-button button_switcher-second" v-for="(tab,index) in categories"
                :key="'tab1' + index" :uk-filter-control="`[data-color='${tab.name}']`">
              <button>{{ tab.name }}</button>
            </li>
          </ul>

        </div>
        <div class="modal-news-filter__footer">
          <a class="uk-button uk-button-default uk-modal-close" href="">
            <span>ПРИМЕНИТЬ</span>
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCabinFilter",
  props: {
    categories: Array,
  }
}
</script>

<style scoped>
#modal-category-cabin-filter {
  display: none;
}
</style>
