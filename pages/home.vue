<template>
  <div id="app">
    <h1>Post:</h1>
    <div>
      <button @click="filterPosts(''); setPages();">RESET</button>
      <label v-for="filter in catFilter" :for="filter">{{filter}}
        <button :id="filter" type="button" name="catfilter" :value="filter" @click="filterPosts($event); setPages();"/>
      </label>
    </div>
    <ol>
      <li :key="post.id" v-for="post in displayedPosts" :id="post.userId">
        <h3>{{post.title}}</h3>
        <h3>{{post.userId}}</h3>
        <div>{{post.body}}</div><br />
      </li>
    </ol>


    <div class="clearfix btn-group col-md-2 offset-md-5">
      <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> << </button>
      <button type="button" class="btn btn-sm btn-outline-secondary" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}}</button>
      <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button>
    </div>

    <ul class="mixitup-page-list uk-pagination uk-flex-center uk-flex-middle">
      <li class="mixitup-control mixitup-control-prev uk-margin-auto-right pagination_back" @click="listPagesPrev">
        <div>
          <svg-icon class="icon" name="arr_lang"/>
        </div>
      </li>

      <li class="mixitup-control " v-for="pageNumber in pages" @click="page = pageNumber">
        <div>{{pageNumber}}</div>
      </li>

      <li class="mixitup-control mixitup-control-next uk-margin-auto-left pagination_next" @click="listPagesNext">
        <div>
          <svg-icon class="icon" name="arr_lang"/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'
import Header from "../components/Header";
import Default from "../layouts/default";
import UIkit from 'uikit';
export default {
  name: 'Home',
  data() {
    return{
      posts: [],
      filteredPosts: [],
      page: 1,
      perPage: 5,
      pages: [],
    }
  },
  computed: {
    catFilter() {
      return Array.from(new Set(this.posts.map(e => e.userId)))
    },

    displayedPosts () {
      return this.paginate(this.filteredPosts);
    }
  },
  methods: {
    listPagesPrev() {
      if(this.page != 1) {
        return this.page--
      } else {
        return this.page
      }
    },
    listPagesNext() {
      if(this.page < this.page.length) {
        return this.page++
      } else {
        return this.page
      }
    },

    fetchPosts() {
      // return fetch('https://jsonplaceholder.typicode.com/posts/')
      return fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(json => {
          // console.log(json)
          return json
        })
    },

    filterPosts(event) {
      if (event === '') {
        this.pages = []
        this.filteredPosts = this.posts
      } else {
        this.filteredPosts = this.posts.filter(post => {
          this.pages = []
          return post.userId == event.target.value
        })
      }
    },
    paginate (posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  posts.slice(from, to);
    },

    setPages () {
      let numberOfPages = Math.ceil(this.filteredPosts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
  },
  async mounted() {
    this.posts = await this.fetchPosts()
    this.filteredPosts = this.posts
  },

  watch: {
    posts () {
      this.setPages();
    }
  }
}
</script>

<style lang="scss">
.map {
  width: 100%;
  height: 100%;
}
</style>
