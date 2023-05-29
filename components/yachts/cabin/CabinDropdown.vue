<template>
  <div class="cabin__parts">
    <div class="uk-container">
      <ul uk-accordion="multiple: false" class="accordion_default uk-accordion">
        <CabinDropdownItem v-for="(item, index) of decks"
                           :key="'cbn' + index"
                           :name="item.name"
                           :description="item.description"
                           :yachtClass="item.class"
                           :count="index + 1"
                           :serving="item.serving"
                           :maxSits="item.boarding"
                           :maxFeast="item.banquet"
                           :maxServing="item.buffet"
                           :squareInfo="item.hallarea"
                           :slides="item.images"
        />
        <li v-if="options">
          <a class="uk-accordion-title" href="">
            <span class="accordion_default__num">0{{ decks.length + 1 }}.</span>
            <div class="accordion_default__name">
              {{ $t('yacht_specs') }}
            </div>
          </a>
          <div class="uk-accordion-content" hidden="">
            <div class="yacht__information_capacity_cabin__parts yacht__information_capacity">
              <div v-if="params !== ''" class="yacht__information_capacity-item6">
                <svg-icon name="svg-area" class="icon"/>
                <span>
                  <b>Параметры:</b>
                  <br>
                  {{ params }}
                </span>
              </div>
              <div v-if="speed !== ''" class="yacht__information_capacity-item4">
                <svg-icon name="Skorost" class="icon"/>
                <span>
                    <b>Круизная скорость:</b>
                    <br>
                    {{ speed }} узлов
                </span>
              </div>
              <div v-if="engine !== ''" class="yacht__information_capacity-item5">
                <svg-icon name="Dvigatel" class="icon"/>
                <span>
                  <b>Двигатели:</b>
                  <br>
                  {{ engine }}
                </span>
              </div>
            </div>
            <div class="cabin__parts__charact">
              <b>{{ $t('saloon_spec') }}:</b>
              <ul>
                <li v-for="(item, index) of options" :key="'opt' + index">
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CabinDropdownItem from "./CabinDropdownItem";
export default {
  name: "CabinDropdown",
  components: {CabinDropdownItem},
  props: {
    decks: Array,
    params: String,
    speed: String,
    engine: String,
    options: Array,
  },
  data() {
    return {
      dropInfo: [
        {
          name: 'Открытая палуба',
          description: 'Ресторанная зона «под открытым небом».',
          maxSits: '50 чел.'
        },
        {
          name: 'Верхняя палуба',
          yachtClass: 'Первый класс',
          description: 'Ресторанная зона «под открытым небом».',
          feast: true,
          serving: true,
          maxSits: '50 чел.',
          maxFeast: '24 персоны',
          maxServing: '30-40 персон',
          slides: [
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
          ]
        },
        {
          name: 'Нижняя палуба',
          yachtClass: 'Ройал класс',
          description: 'Авторская кухня, комфортабельные диванные группы, живая музыка на вечерних рейсах с четверга по субботу на яхте «Монтана».',
          feast: false,
          serving: true,
          maxSits: '100 чел.',
          squareInfo: '410 м2',
          maxServing: 'до 150 персон',
          slides: [
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
            'main/_MG_1373.png',
          ]
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
