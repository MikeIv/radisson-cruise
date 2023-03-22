import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'
import UIkit from "uikit";
import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'

const settings = {
  apiKey: '7fd77c97-6046-4745-bc55-b9257feb1d49',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

Vue.use(YmapPlugin, settings);
