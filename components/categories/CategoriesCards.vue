<script>
import CategoriesCard from "./CategoriesCard.vue";
import axios from "axios";
import { isTramCategory } from "~/config/tramsSeason";

export default {
  name: "CategoriesCards",
  components: {CategoriesCard},
  props: {},
  data() {
    return {
      cardsMock: [
        {
          id: 1,
          title: 'Основной зал',
          description: 'Салоны первого класса на верхних палубах суперъяхт Флотилии «Рэдиссон Ройал» — это сочетание комфорта, роскошного интерьера, камерной обстановки и первоклассного обслуживания.',
          icon: 'Osnovnoy.svg',
          images: ['test1.png', 'test2.png', 'test3.png','test4.png', 'test5.png'],
          price: {
            adult: 2000,
            child: 1000,
          },
          linkBuy: '/yachts/schedule/?category=0',
          linkMore: '/categories/main-hall/',
          active: true,
        },
        {
          id: 2,
          title: 'ройал класс',
          description: 'Яхты “Монтана” и “Примавера”: стильный интерьер и комфортная мебель располагают к общению, наслаждению вкусными блюдами и видами столицы. А на яхте “Монтана” на вечерних рейсах с четверга по субботу отдельный шарм круизам добавляет живая музыка.',
          icon: 'Royal.svg',
          images: ['test1.png', 'test2.png', 'test3.png'],
          price: {
            adult: 2000,
            child: 1000,
          },
          linkBuy: '/yachts/schedule/?category=2',
          linkMore: '/somelandingwouldbehere/',
          active: true,
        },
        {
          id: 3,
          title: 'первый класс',
          description: 'Камерные салоны на верхних палубах суперъяхт: идеальны для проведения банкетов, юбилеев, деловых конференций, бизнес-встреч и других мероприятий. Элегантный интерьер, уют и комфорт.',
          icon: '1class.svg',
          images: ['test1.png', 'test2.png', 'test3.png','test4.png', 'test5.png'],
          price: {
            adult: 2000,
            child: 1000,
          },
          linkBuy: '/yachts/schedule/?category=4,5',
          linkMore: '/somelandingwouldbehere/',
          active: true,
        },
        {
          id: 4,
          title: 'erwin.река',
          description: 'Филиал рыбного ресторана "Erwin.Река.Море.Океан" на яхте "Феличита": во время стоянки функционирует в обычном режиме ресторана. Бронирование столов по телефону: +7(985)441-68-44',
          icon: 'Erwin.svg',
          images: ['test1.png', 'test2.png', 'test3.png','test4.png', 'test5.png'],
          price: {
            adult: 2000,
            child: 1000,
          },
          linkBuy: '/yachts/schedule/?category=3',
          linkMore: '/somelandingwouldbehere/',
          active: true,
        },
        {
          id: 5,
          title: 'театральные',
          description: 'Для поклонников театра Флотилия организовала уникальные театральные круизы. А чтобы гости еще больше прониклись атмосферой спектакля, каждый театральный круиз сопровождается сет-меню из блюд эпохи произведения. ',
          icon: 'Teatr.svg',
          images: ['test1.png', 'test2.png', 'test3.png','test4.png', 'test5.png'],
          price: {
            adult: 2000,
            child: 1000,
          },
          linkBuy: '/yachts/schedule/?category=1',
          linkMore: '/somelandingwouldbehere/',
          active: true,
        },
        {
          id: 6,
          title: 'трамвайчики',
          description: 'Ежегодно с мая по октябрь Москву-реку украшают 10 ярких "речных кабриолетов" с цветочными названиями. Речные трамвайчики Флотилии – это отличная альтернатива прогулке по сердцу города, которая позволит насладиться прохладой и плавным течением реки вдали от городских улиц. ',
          icon: 'Tramvay.svg',
          images: ['test1.png', 'test2.png', 'test3.png','test4.png', 'test5.png'],
          price: {
            adult: 2000,
            child: 1000,
          },
          linkBuy: '/yachts/schedule/?category=',
          linkMore: '/somelandingwouldbehere/',
          isTram: true,
          active: false,
        }
      ],
      cards: [],
    }
  },
  async fetch() {
    try {
      const cardsData = await this.$axios(`${this.$config.baseURL}categories?lang=${this.$i18n.locale}`);
      this.cards = cardsData.data.result.filter((card) => {
        return this.$config.tramsSeasonOpen || !isTramCategory(card)
      })
    } catch (e) {
      console.log(e)
    }
  },
  fetchOnServer: true,
  fetchKey: 'categoriesCards',
}
</script>

<template>
  <section class="categories_cards-wrapper">
    <div class="uk-container">
      <h2 class="categories_cards-title">{{ $t('cruise_categories') }}</h2>
      <div class="categories_cards-items">
        <CategoriesCard
            v-for="card in cards"
            :key="card.id"
            :card="card"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories_cards-wrapper {
  background: #F3F7FB;
  padding: 70px 0;
}

.categories_cards-title {
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 50px;
}
.categories_cards-items {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
@media screen and (max-width: 1024px) {
  .categories_cards-title {
    font-size: 45px;
    margin-bottom: 56px;
  }
}
@media screen and (max-width: 767px) {
  .categories_cards-wrapper {
    padding: 30px 0;
  }
  .categories_cards-title {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .categories_cards-items {
    gap: 20px;
  }
}
@media screen and (max-width: 567px) {
  .categories_cards-items {
    gap: 15px;
  }
}
@media screen and (max-width: 420px) {
  .categories_cards-title {
    font-size: 17px;
  }

  .categories_cards-wrapper .uk-container{
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
