<template>
  <nuxt-link :class="checkMain" :to="uri">
  <!--:to="`/news/${id}-${formattedName}`"-->
  
    <img v-if="main == 1"
         :data-src="`${$config.imageURL}?size=830&format=webp&src=${$config.baseSiteURL}${fileName}`"
         class="img_cover"
         :src="`${$config.imageURL}?size=830&format=webp&src=${$config.baseSiteURL}${fileName}`"
         data-alt="Image"
         alt="news-important-img"
    />
    <div v-else class="uk-cover-container uk-card-default_media">
      <img :data-src="`${$config.imageURL}?size=270&format=webp&src=${$config.baseSiteURL}${fileName}`"
           class="img_cover"
           :src="`${$config.imageURL}?size=270&format=webp&src=${$config.baseSiteURL}${fileName}`"
           data-alt="Image"
           alt="news-small-img"
      />
      <div v-if="badge" class="uk-badge badge_sail">
        {{badgeText}}
      </div>
    </div>
    <div v-if="main == 1" class="uk-badge">
      Важное
    </div>
    <div v-if="main == 1" class="card-news_decor"></div>
    <div class="uk-card-body">
      <div class="card_time">
        <svg-icon name="clock2"/>
        <span>{{ dayFormat }}</span>
      </div>
      <h3 class="uk-card-title">
        {{topInfo}}
      </h3>
      <div class="card_text">
        {{bottomInfo}}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    badge: String,
    main: Number,
    date: String,
    topInfo: String,
    bottomInfo: String,
    fileName: String,
    name: String,
    page: Number,
    group: String,
    anons: String,
    id: Number,
    uri: String,
  },
  data() {
    return {
      formattedName: '',
    }
  },
  computed: {
    badgeText() {
      if(this.badge === `action`) {
        return 'Акции %'
      } else if (this.badge === `event`) {
        return 'Событие'
      } else {
        return 'Новость'
      }
    },

    checkMain() {
      if(this.main == '1') {
        return 'uk-card transition card-news_big'
      } else {
        return 'uk-card transition card-news__small'
      }
    },

    dayFormat() {
      return new Date(this.date).toLocaleDateString(`ru-RU`, {month: 'long', day: 'numeric', year: 'numeric'})
    },
  },
  methods: {
    translate(word, lang) {
      const converterEng = {
          'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
          'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
          'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
          'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
          'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
          'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
          'э': 'e',    'ю': 'yu',   'я': 'ya'
      }
      const converterRu = {
          'sch': 'щ',
          'yo': 'ё', 'zh': 'ж', 'ch': 'ч', 'sh': 'ш', 'yu': 'ю', 'ya': 'я',
          'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
          'e': 'е', 'z': 'з', 'и': 'i', 'y': 'й', 'k': 'к',
          'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
          'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
          'h': 'х', 'c': 'ц', 'y': 'ы',
      }
      word = word.toLowerCase();

      if(lang == 'eng') {
        for (let i = 0; i < word.length; ++i ) {
          if (converterEng[word[i]] == undefined){
            this.formattedName += word[i];
          } else {
            this.formattedName += converterEng[word[i]];
          }
        }
        this.formattedName = this.formattedName.replace(/[^-0-9a-z]/g, '-');
        this.formattedName = this.formattedName.replace(/[-]+/g, '-');
        this.formattedName = this.formattedName.replace(/^\-|-$/g, '');
        return this.formattedName;
      } else if (lang == 'ru') {
        for (const [key, value] of Object.entries(converterRu)) {
          word = word.replaceAll(key, value);
          this.formattedName = word
        }

        return this.formattedName;
      }
    },
  },

  mounted() {
    this.translate(this.name, 'eng', this.formattedName);
  }
}
</script>

<style scoped>

</style>
