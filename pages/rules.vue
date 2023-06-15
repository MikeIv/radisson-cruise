<template>
  <div>
    <Header>
      <img src="~images/inners2/rules1.webp" data-src="~images/inners2/rules1.webp" class="img_cover" alt="">
      <div class="uk-container uk-position-relative">
        <div class="heading_white">
          <Breadcrumbs/>
        </div>
        <div class="heading">
          <h1 class="headline_p1">
            {{ seoData?.header || 'Правила и условия' }}
          </h1>
        </div>
      </div>
    </Header>
    <section class="padding_top padding_bottom rules-about__section">
      <div class="uk-container">
        <div class="uk-flex uk-flex-wrap uk-child-width-1-2@l uk-grid-match rules-about__grid">
          <div v-for="rule in rulesBlocks" :key="'rlsitem' + rule.id">
            <RulesItem :description="rule.name" :iconURL="rule.icon" :document="rule.doc"/>
          </div>
        </div>
      </div>
    </section>
    <section class="uk-cover-container rules-performance__section" id="rules-performance">
      <div class="rules-performance__decor1 uk-cover-container">
        <img  data-src="/img/inners2/rules2.png" alt="" class="img_cover" src="~assets/img/inners2/rules2.png">
      </div>
      <svg-icon class="rules-performance__icon" name="wheel"/>
      <div class="uk-container uk-position-relative">
        <h2 class="headline_56">
          {{ $t('tech_specs') }}
        </h2>
        <div class="uk-flex uk-flex-wrap uk-child-width-1-2@m rules-performance__grid uk-grid-match">
<!--          <div>
            <div class="rules-performance__item">
              <div class="headline_22 t_semibold">
                Характеристики яхт Флотилии «Рэдиссон Ройал»
                "Фердинанд", "Бон Вояж", "Селебрити", "Капелла", "Скарлет":
              </div>
              <div class="rules-performance__item__txt">
                <p><b>Год выпуска:</b> 2009</p>
                <p><b>Параметры:</b> длина — 50 м., ширина — 9.5 м., водоизмещение — 212 тонн</p>
                <p> <b>Круизная скорость:</b> 10 узлов</p>
                <p><b>Двигатели:</b> Volvo Penta</p>
                <p>
                  <b>Характеристики салона:</b> площадь – 300 кв.м., всепогодное панорамное остекление, климат-контроль,
                  профессиональные свет и звук, плазменные экраны, передовое наружное освещение, подводные
                  светильники.
                </p>
              </div>
              <div class="rules-performance__item__img">
                <img data-src="~assets/img/inners2/rules3.png" alt="" src="~assets/img/inners2/rules3.png">
              </div>
            </div>
          </div>-->
<!--          <div>
            <div class="rules-performance__item">
              <div class="headline_22 t_semibold">
                Характеристики суперъяхт Флотилии «Рэдиссон Ройал»
                «Примавера», «Баттерфляй», «Бьюти», «Феличита», «Монтана»:
              </div>
              <div class="rules-performance__item__txt">
                <p><b>Год выпуска:</b> 2002</p>
                <p><b>Параметры:</b> длина — 60,8 м., ширина — 12 м., водоизмещение — 618 тонн </p>
                <p> <b>Круизная скорость:</b> 10 узлов</p>
                <p><b>Двигатели:</b> Volvo Penta</p>
                <p>
                  <b>Характеристики салона:</b> главная палуба (410 кв.м.) и Первый класс (78 кв.м.), всепогодное
                  панорамное
                  остекление, климат-контроль, профессиональные свет и звук, плазменные экраны, передовое наружное
                  освещение, подводные светильники, гидравлическая мачта, салон Первого класса декорирован
                  натуральным деревом (орех, корень ореха, африканское дерево бубинга).
                </p>
              </div>
              <div class="rules-performance__item__img">
                <img  data-src="~assets/img/inners2/rules4.png" alt="" src="~assets/img/inners2/rules4.png">
              </div>
            </div>
          </div>-->
          <div v-for="(tech, index) in techInfo" :key="'tch' + index">
            <TechnicalItem :title="tech.title" :fileName="tech.fileName"
                           :params="tech.params" :speed="tech.speed" :year="tech.year"
                           :cabinParams="tech.cabinParams" :engine="tech.engine"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="uk-cover-container rules-security__section" id="rules-security">
      <svg-icon class="instagram_decor1" name="decor4"/>
      <div class="rules-security__img">
        <img  data-src="~assets/img/inners2/rules5.png" class="img_cover" alt="" src="~assets/img/inners2/rules5.png">
      </div>
      <div class="uk-container uk-position-relative">
        <h2 class="headline_56">
          {{ $t('security') }}
        </h2>
        <div class="rules-security__block uk-position-relative">
          <svg-icon class="rules-security__block__icon" name="safe-ring"/>
          <div class="uk-position-relative">
            <div class="headline_22 t_semibold">
              Меры по обеспечению безопасности
              на борту яхт Флотилии «Рэдиссон Ройал»
            </div>
            <div class="headline_line"></div>
            <div class="rules-security__txt">
              Яхты Флотилии «Рэдиссон Ройал» соответствуют всем необходимым стандартам
              безопасности и оснащены спасательными средствами, кроме того, пассажиры
              обязаны следовать правилам внутреннего судового распорядка, техники безопасности
              и пожарной безопасности на борту.
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    <section class="uk-cover-container rules-ship__section">
      <div class="rules-ship__decor1 uk-cover-container">
        <img  data-src="~assets/img/inners2/rules7.png" alt="" class="img_cover" src="~assets/img/inners2/rules7.png">
      </div>
      <div class="uk-container uk-position-relative">
        <div class="headline_22 t_semibold">
          «Баттерфляй», «Бьюти», «Монтана», «Примавера», «Феличита»
        </div>
        <div class="headline_line"></div>
        <div class="uk-flex uk-flex-wrap uk-child-width-1-2 rules-ship__grid uk-grid-match">
          <div>
            <div class="rules-ship__item">
              <div class="rules-ship__item__txt">
                <div class="rules-ship__item__p1 t_semibold">
                  Краткое описание яхт
                </div>
                <div class="rules-ship__item__p2 ">
                  Всепогодное панорамное остекление салона выполнено из высокотехнологичного материала.
                  В подводную часть корпуса встроены прожекторы, подсвечивающие воду. Салоны оснащены
                  аудиотехникой, видеомониторами и современными устройствами для создания световых эффектов.
                  Салон первого класса оснащен климат-контролем и независимой мультимедийной системой.
                  Декорирован натуральным деревом (орех, корень ореха, африканское дерево бубинго)
                </div>
                <div class="rules-ship__item__p1 t_semibold">
                  Класс яхты
                </div>
                <div class="rules-ship__item__p2 ">
                  Класс яхты российского речного регистра Р 1,2 (лед 20)А, указанный в характеристиках яхты,
                  гарантирует, что яхта с легкостью преодолеет битый лед до 20 см .
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="rules-ship__item">
              <div class="rules-ship__item__txt">
                <div class="rules-ship__item__p1 t_semibold">
                  На каждой яхте предусмотрены:
                </div>
                <ul>
                  <li>4 спасательных плота</li>
                  <li>8 спасательных кругов</li>
                  <li>
                    Индивидуальные спасательные средства для взрослых и детей – находятся
                    под каждым посадочным местом и, дополнительно, у персонала яхт
                  </li>
                  <li>Медицинская аптечка</li>
                  <li>Огнетушители и противопожарная сигнализация</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-flex uk-flex-wrap uk-child-width-1-2 rules-ship__grid2 uk-grid-match">
          <div>
            <div class="rules-ship__item">
              <div class="rules-ship__item__img">
                <img src="~assets/img/svg/ship3.svg" style="color:#000" alt="" class="uk-preserve" uk-svg>
              </div>
            </div>
          </div>
          <div>
            <div class="rules-ship__item">
              <div class="rules-ship__item__img">
                <img src="~assets/img/svg/ship4.svg" style="color:#000" alt="" class="uk-preserve" uk-svg>
              </div>
            </div>
          </div>
        </div>
        <div class="rules-ship__site">
          <div class="headline_22 t_semibold">
            Расположение помещений на яхтах
          </div>
          <div class="rules-ship__site__items uk-flex uk-flex-wrap uk-child-width-1-3">
            <div class="rules-ship__site__item">
              <div class="rules-ship__site__item__head">
                <div class="rules-ship__site__item__num">
                  01.
                </div>
                <div class="rules-ship__site__item__name">
                  Главная палуба
                </div>
              </div>
              <div class="rules-ship__site__item__txt">
                Салон вместимостью 196 посадочных мест, с климат-
                контролем и всепогодным панорамным остеклением, с баром,
                танцполом и современной мультимедийной оснасткой;
                открытая носовая и кормовая части; туалетная комната для лиц
                с ограниченными физическими возможностями; гардероб;
                лестницы вниз и наверх.
              </div>
            </div>
            <div class="rules-ship__site__item">
              <div class="rules-ship__site__item__head">
                <div class="rules-ship__site__item__num">
                  02.
                </div>
                <div class="rules-ship__site__item__name">
                  Верхняя палуба
                </div>
              </div>
              <div class="rules-ship__site__item__txt">
                Капитанская рубка; оборудованная столиками отрытая
                кормовая часть; Салон первого класса с отдельным
                техническим обеспечением и спец.обслуживанием;
                4 спасательных плота; лестница вниз.
              </div>
            </div>
            <div class="rules-ship__site__item">
              <div class="rules-ship__site__item__head">
                <div class="rules-ship__site__item__num">
                  03.
                </div>
                <div class="rules-ship__site__item__name">
                  Нижняя палуба
                </div>
              </div>
              <div class="rules-ship__site__item__txt">
                5 туалетных комнат, 2 гримерные комнаты;
                технический отсек; лестница вниз.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <YachtType v-for="(yacht, index) in yachtsInfo" :key="'ycht' + index" :fileName="yacht.fileName"
               :title="yacht.title" :description="yacht.description" :yachtClass="yacht.yachtClass"
               :yachtImgs="yacht.yachtImgs" :topCabin="yacht.topCabin" :infoItems="yacht.infoItems"
               :mainCabin="yacht.mainCabin" :bottomCabin="yacht.bottomCabin"

    />
    <section class="uk-cover-container rules-security-video__section" id="rules-security-video">
      <img  data-src="~assets/img/inners2/rules8.png" alt="" class="img_cover" src="~assets/img/inners2/rules8.png">

      <div class="uk-container uk-position-relative">
        <h2 class="headline_56">
          {{ $t('security_videos') }}
        </h2>
        <div class="rules-security-video__grid uk-flex uk-flex-wrap uk-grid-match ">
          <div class="uk-width-auto@m">
            <ul class="rules-security-video__tabs uk-visible@s uk-tab" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
              <VideoNavItem @pause="pauseVideo"
                            v-for="(nav, index) in yVideos"
                            :key="`nav` + index"
                            :title="nav.name" :names="nav.yachts"
              />
            </ul>
            <div class="input_rules uk-hidden@s">
              <div class="select">
                <div @click="showVideos = !showVideos" class="select-styled">
                  <div class="rules-security-video__tab" aria-expanded="false">
                    <div class="rules-security-video__tab__name1">
                      <b>{{ selectedVideo.name }}</b>
                    </div>
                    <div class="rules-security-video__tab__name2">
                      {{ selectedVideo.yachts }}
                    </div>
                  </div>
                </div>
                <ul v-show="showVideos" class="select-options rules-security-video__tabs uk-tab" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                  <li @click="showVideos = !showVideos; selectVideo(video);" ref="video" v-for="video in yVideos" class="uk-active">
                    <div class="rules-security-video__tab" aria-expanded="false">
                      <div class="rules-security-video__tab__name1">
                        <b>{{ video.name }}</b>
                      </div>
                      <div class="rules-security-video__tab__name2">
                        {{ video.yachts }}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="uk-width-expand@m">
            <ul id="component-tab-left" class="uk-switcher" style="touch-action: pan-y pinch-zoom;">
              <VideoItem v-for="(video, index) in yVideos"
                         ref="videoItem"
                         :key="`video` + index"
                        :video="video.video"
                         :poster="video.poster"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="padding_top padding_bottom rules-about2__section">
      <div class="uk-container">
        <div class="uk-flex uk-flex-wrap uk-child-width-1-2@l uk-grid-match rules-about2__grid">
          <div class="margin-bot10" v-for="(card, index) in securityBlocks" :key="'scrty' + index">
            <SecurityCard :card-title="card.name"
                          :card-type="card.type"
                          :card-content="card.content"
                          :card-icon="card.icon"
                          :card-style="card.style"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header";
import RulesItem from "../components/rules/RulesItem";
import TechnicalItem from "../components/rules/TechnicalItem";
import Yachts from "./yachts";
import YachtType from "../components/rules/YachtType";
import VideoNavItem from "../components/rules/VideoNavItem";
import VideoItem from "../components/rules/VideoItem";
import UIkit from "uikit";
import SecurityCard from "../components/rules/SecurityCard";
import Breadcrumbs from "../components/Breadcrumbs";
import axios from "axios";
export default {
  name: "Rules",
  components: {Breadcrumbs, SecurityCard, VideoItem, VideoNavItem, YachtType, Yachts, TechnicalItem, RulesItem, Header},
  head() {
    return {
      title: this.seoData?.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.seoData?.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.seoData?.keywords,
        },
      ]
    }
  },
  data() {
    return {
      videoTabs: {
        nav: [
          {
            title: `Яхты`,
            names: `«Фердинанд», «Капелла», «Селебрити»,
                    «Скарлет», «Бон Вояж»`,
          },
          {
            title: `Суперяхты`,
            names: `«Баттерфляй», «Бьюти», «Феличита»`,
          },
          {
            title: `Суперяхта`,
            names: `«Монтана»`,
          },
          {
            title: `Суперяхта`,
            names: `«Примавера»`,
          },
          {
            title: `Трамвайчики`,
            names: ``,
          },
        ],
        videos: [
          {
            name: 'Суперъяхты',
            yachtName: '«Баттерфляй», «Бьюти», «Феличита»',
            file: `video.mp4`,
            poster: `about10.png`,
          },
          {
            file: `video.mp4`,
            poster: `about10.png`,
          },
          {
            file: `video.mp4`,
            poster: `about10.png`,
          },
          {
            file: `video.mp4`,
            poster: `about10.png`,
          },
          {
            file: `video.mp4`,
            poster: `about10.png`,
          }
        ],
      },
      yachtsInfo: [
        {
          fileName: `inners2/rules6.png`,
          title: `«Фердинанд», «Бон Вояж», «Селебрити», «Капелла», «Скарлет»`,
          description: `Всепогодное панорамное остекление салона выполнено из высокотехнологичного материала.
          В подводную часть корпуса встроены прожекторы, подсвечивающие воду. Салоны оснащены аудиотехникой,
          видеомониторами и современными устройствами для создания световых эффектов.`,
          yachtClass: `Класс яхты российского речного регистра Р 1,2 (лед 10)А,
          указанный в характеристиках яхты, гарантирует, что это яхта с легкостью преодолеет битый лед до 10 см`,
          infoItems: [
            `4 спасательных плота`,
            `8 спасательных кругов`,
            `Индивидуальные спасательные средства для взрослых и детей – находятся под каждым посадочным местом и, дополнительно, у персонала яхт`,
            `Медицинская аптечка`,
            `Огнетушители и противопожарная сигнализация`
          ],
          yachtImgs: [
            `svg/ship1.svg`,
            `svg/ship2.svg`,
          ],
          mainCabin: `Салон вместимостью 140 посадочных мест, с климат-
              контролеми всепогодным панорамным остеклением,
              с баром, танцполом и современной мультимедийной
              оснасткой; открытая носовая и кормовая части; гардероб;
              лестницы вниз и наверх.`,
          topCabin: `Капитанская рубка; открытая носовая часть и кормовая часть под тентом,
          в летнее время оснащенные столиками; 4 спасательных плота; лестница вниз.`,
          bottomCabin: `2 туалетные комнаты по 2 кабины; технический отсек,
              лестница наверх.`,
        },
        {
          fileName: `inners2/rules7.png`,
          title: `«Баттерфляй», «Бьюти», «Монтана», «Примавера», «Феличита»`,
          description: `Всепогодное панорамное остекление салона выполнено из высокотехнологичного материала.
           В подводную часть корпуса встроены прожекторы, подсвечивающие воду. Салоны оснащены аудиотехникой,
           видеомониторами и современными устройствами для создания световых эффектов.
           Салон первого класса оснащен климат-контролем и независимой мультимедийной системой.
           Декорирован натуральным деревом (орех, корень ореха, африканское дерево бубинго)`,
          yachtClass: `Класс яхты российского речного регистра Р 1,2 (лед 20)А,
          указанный в характеристиках яхты, гарантирует, что яхта с легкостью преодолеет битый лед до 20 см .`,
          infoItems: [
            `4 спасательных плота`,
            `8 спасательных кругов`,
            `Индивидуальные спасательные средства для взрослых и детей – находятся под каждым посадочным местом и, дополнительно, у персонала яхт`,
            `Медицинская аптечка`,
            `Огнетушители и противопожарная сигнализация`
          ],
          yachtImgs: [
            `svg/ship3.svg`,
            `svg/ship4.svg`,
          ],
          mainCabin: `Салон вместимостью 196 посадочных мест, с климат- контролем и всепогодным панорамным остеклением,
           с баром, танцполом и современной мультимедийной оснасткой; открытая носовая и кормовая части;
            туалетная комната для лиц с ограниченными физическими возможностями; гардероб; лестницы вниз и наверх.`,
          topCabin: `Капитанская рубка; оборудованная столиками отрытая кормовая часть;
           Салон первого класса с отдельным техническим обеспечением и спец.обслуживанием; 4 спасательных плота; лестница вниз.`,
          bottomCabin: `5 туалетных комнат, 2 гримерные комнаты; технический отсек; лестница вниз.`,
        }
      ],
      techInfo: [
        {
          fileName: `inners2/rules3.png`,
          title: `Характеристики яхт Флотилии «Рэдиссон Ройал»
                "Фердинанд", "Бон Вояж", "Селебрити", "Капелла", "Скарлет":`,
          year: `2009`,
          params: `длина — 50 м., ширина — 9.5 м., водоизмещение — 212 тонн`,
          speed: `10 узлов`,
          engine: `Volvo Penta`,
          cabinParams: `площадь – 300 кв.м., всепогодное панорамное остекление, климат-контроль,
            профессиональные свет и звук, плазменные экраны, передовое наружное освещение, подводные
            светильники.`
        },
        {
          fileName: `inners2/rules4.png`,
          title: `Характеристики суперъяхт Флотилии «Рэдиссон Ройал»
                «Примавера», «Баттерфляй», «Бьюти», «Феличита», «Монтана»:`,
          year: `2002`,
          params: `длина — 60,8 м., ширина — 12 м., водоизмещение — 618 тонн`,
          speed: `10 узлов`,
          engine: `Volvo Penta`,
          cabinParams: ` главная палуба (410 кв.м.) и Первый класс (78 кв.м.),
          всепогодное панорамное остекление, климат-контроль, профессиональные свет и звук,
          плазменные экраны, передовое наружное освещение, подводные светильники, гидравлическая мачта,
          салон Первого класса декорирован натуральным деревом (орех, корень ореха, африканское дерево бубинга).`
        }
      ],
      rulesItems: [
        {
          description: `ПРАВИЛА обращения подарочных сертификатов Флотилии «Рэдиссон Ройал, Москва»`,
          iconURL: 'reward',
          documentLink: 'https://www.google.com',
        },
        {
          description: `Правила и условия оказания услуг круизной компанией Флотилией «Рэдиссон Ройал, Москва»`,
          iconURL: 'reward',
        },
        {
          description: `some random stuff`,
          iconURL: 'reward',
        },
      ],
      rulesBlocks: [],
      securityCards: [
        {
          cardStyle: 'dark',
          cardTitle: `Дополнительные меры по обеспечению безопасности:`,
          cardType: 'list',
          cardIcon: 'blue-info',
          cardContent: 'Перед каждым рейсом на плазмах транслируется видеоролик с субтитрами и звуковым сопровождением о применении средств безопасности на борту яхт.\n' +
            'Персонал проходит инструктаж перед каждым рейсом.\n' +
            'Команда своевременно посещает курсы повышения квалификации.'
        },
        {
          cardStyle: 'light',
          cardTitle: `Помните, что Ваша безопасность находится, прежде всего, в Ваших собственных руках.`,
          cardType: 'text',
          cardIcon: 'blue-protect',
          cardContent: 'На протяжении маршрута пассажиры обязаны соблюдать правила безопасности и выполнять все распоряжения экипажа яхты – это одно из важнейших условий безопасности для Вас и других пассажиров.'
        },
      ],
      securityBlocks: [],
      yVideos: [],
      showVideos: false,
      selectedVideo: {
        name: 'Яхты',
        yachts: '«Фердинанд», «Капелла», «Бон Вояж», «Селебрити », «Скарлет»'
      },
      seoData: {},
      services: {
        title: 'Услуги',
        subtitle: 'text',
        servicesList: ['массив строк'],
        servicesImgs: ['массив картинок'],
      }
    }
  },
  methods: {
    selectVideo(item) {
     this.selectedVideo = item;
    },
    pauseVideo() {
      let videoContainer = document.querySelectorAll('[data-container="video"]');
      videoContainer.forEach(film => {
        if(!film.querySelector('.video').paused){
          film.querySelector('.playpause').style.display = 'flex'
          film.querySelector('.video').pause()
        }
      })
    }
  },
  async fetch() {
    let seoDataResult = await axios.get(
        `${this.$config.baseURL}pages?ref=/rules/&lang=${this.$i18n.locale}`);
    this.seoData = seoDataResult.data.result
    let rulesBlocks = await axios.get(`${this.$config.baseURL}rules?lang=${this.$i18n.locale}`)
    let securityBlock = await axios.get(`${this.$config.baseURL}safetylist?lang=${this.$i18n.locale}`)
    let videoBlock = await axios.get(`${this.$config.baseURL}yvideos?lang=${this.$i18n.locale}`)
    this.rulesBlocks = rulesBlocks.data
    this.securityBlocks = securityBlock.data
    this.yVideos = videoBlock.data

  },
  fetchOnServer: true,
  fetchKey: 'rules',
}
</script>

<style scoped>
.rules-security-video__container .play-video-btn_back img {
  width: 145px;
  height: 145px;
}

.rules-about__item {
  margin-bottom: 20px;
}

</style>
