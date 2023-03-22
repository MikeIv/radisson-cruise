<template>
  <div class="about-documents__item" style="display: block;">
    <a target="_blank" :href="link" class="about-document uk-scrollspy-inview uk-animation-fade">
      <svg-icon class="about-document__icon" name="document"/>
      <div>
        <div class="about-document__name t_semibold">
          {{ name }}
        </div>
        <div class="about-document__size">
          Файл: {{ format }}, {{ weight }}
        </div>
        <div class="about-document__down">
          <svg-icon class="icon" name="blue-download"/>
          <span>
              Скачать
          </span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "DocumentCard",
  props: {
    name: String,
    weight: String,
    format: String,
    link: String,
  }
}
</script>

<style scoped>

</style>
