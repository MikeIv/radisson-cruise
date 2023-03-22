<template>
  <li>
    <a class="uk-accordion-title" href="#">
      <div class="accordion_vacantion__title__info">
        <svg-icon class="accordion_vacantion__title__icon" name="bag"/>
        <div class="accordion_vacantion__name">
          {{ vacancy.name }}
        </div>
      </div>
      <div class="accordion_vacantion__title__arr"></div>
    </a>
    <div class="uk-accordion-content">
      <div class="accordion_vacantion__info__grid">
        <div v-if="vacancy.requirements && vacancy.requirements.length > 0">
          <div class="accordion_vacantion__info__p1">
            Требования
          </div>
          <ul>
            <li v-for="(request, index) in vacancy.requirements" :key="'rqst' + index">
              {{ request }}
            </li>
          </ul>
        </div>
        <div v-if="vacancy.conditions && vacancy.conditions.length > 0">
          <div class="accordion_vacantion__info__p1">
            Условия
          </div>
          <ul>
            <li v-for="(condition, index) in vacancy.conditions" :key="'cdtn' + index">
              {{ condition }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="vacancy.responsibilities && vacancy.responsibilities.length > 0" class="accordion_vacantion__info__border">
        <div class="accordion_vacantion__info__p1">
          Обязанности
        </div>
        <ul>
          <li v-for="(duty, index) in vacancy.responsibilities" :key="'duty' + index">
            {{ duty }}
          </li>
        </ul>
      </div>
      <div class="accordion_vacantion__bottom">
<!--        <a class="uk-button uk-button-default" href="#">
          <span>Откликнуться</span>
        </a>-->
        <a href="" class="accordion_vacantion__back" @click.prevent="closeVacancy">
          Свернуть
        </a>
      </div>
    </div>
  </li>
</template>

<script>
import UIkit from 'uikit';
export default {
  name: "VacancyItem",
  props: {
    vacancy: Object,
  },
  data() {
    return {
      isVacancyActive: false,
      requests: [
        'Гражданство РФ; Белоруссии; Казахстана',
        `Опыт работы в московских ресторанах от 1 года;`,
        `Знание английского языка приветствуется;`,
        `Порядочность;`,
        `Пунктуальность;`,
        `Чистоплотность;`,
        `Желание работать и развиваться в команде`
      ],
      conditions: [
        `График работы - 2/2;`,
        `Бесплатное обучение в процессе стажировки;`,
        `Бесплатное питание;`,
        `Испытательный срок -1 месяц`,
        `Возможность карьерного роста;`,
      ],
      dutes: [
        `Осуществление работы по эффективному и культурному обслуживанию гостей ресторана;`,
        `Знание ассортимента, состава блюд и напитков;`,
        `Знание стандартов сервиса‚ стандартов подачи;`,
        `Знание стандартов сервиса‚ стандартов подачи;`,
        `Умение поддерживать хорошие отношения с гостями и коллегами по работе.`
      ],
    }
  },
  methods: {
    closeVacancy(e) {
      e.target.closest('li').classList.remove('uk-open')
      e.target.closest('.uk-accordion-content').setAttribute('hidden', '')
    },
  },
}
</script>

<style scoped>

</style>
