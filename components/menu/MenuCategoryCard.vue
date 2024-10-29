<script>
export default {
  name: "MenuCategoryCard",
  props: {
    link: String,
    card: Object,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}

</script>


<template>
  <article class="category_menu-card">
    <img :data-src="`${$config.imageURL}?size=1920&format=webp&src=${$config.baseSiteURL}`+card.image"
         class="category_menu-card--img"
         :src="`${$config.imageURL}?size=1920&format=webp&src=${$config.baseSiteURL}`+card.image"
         data-alt="Image" alt="img"
    />
    <span class="category_menu-card--title">{{card.name}}</span>
    <p class="category_menu-card--description">{{card.description}}</p>
    <a class="category_menu-card--link" target="_blank" :href="`${$config.baseSiteURL}` + card.pdf">
      <svg-icon class="icon" name="menu"/>
      {{$t('buttons.show_menu')}}
    </a>
  </article>
</template>

<style scoped>
.category_menu-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
}
.category_menu-card--img {
  width: 525px;
  height: 340px;
  object-fit: cover;
}
.category_menu-card--title {
  color: #000;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 146.154% */
  text-transform: uppercase;
  margin-top: 23.5px;
  margin-bottom: 21.5px;
  display: inline-block;
}
.category_menu-card--description {
  color: #232323;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  display: inline-block;
  margin-top: 0;
  margin-bottom: 10px;
}
.category_menu-card--link {
  border: 1px solid #00C1F3;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  width: 210px;
  height: 50px;
  text-transform: uppercase;
  margin-top: auto;
}
.category_menu-card--link svg {
  width: 21px;
  height: 24px;
}
@media screen and (max-width: 768px) {
  .category_menu-card--img {
    width: 100%;
    height: 110px;
  }
  .category_menu-card--title {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1;
  }
  .category_menu-card--link {
    font-size: 8px;
    gap:5px;
    width: 100%;
    height: 26px;
  }
  .category_menu-card--description {
    font-size: 10px;
    display: none;
  }
  .category_menu-card--link svg {
    width: 11px;
    height: 12.784px;
  }
}
</style>