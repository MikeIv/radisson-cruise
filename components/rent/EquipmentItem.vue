<template>
  <li>
    <a class="uk-accordion-title" href="#">
      <div class="accordion_default__name">
        {{ name }}
      </div>
    </a>
    <div class="uk-accordion-content" hidden="">
      <EquipmentItemText v-for="(textItem, index) in textInfo" :key="'txt' + index"
                         :textItem="textItem"
      />
    </div>
  </li>
</template>

<script>
import EquipmentItemText from "./EquipmentItemText";
export default {
  name: "EquipmentItem",
  components: {EquipmentItemText},
  props: {
    name: String,
    textInfo: Array,
  }
}
</script>

<style scoped>
</style>
