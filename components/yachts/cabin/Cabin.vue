<template>
  <div :ref="name" class="cabin" :id="name">
    <CabinTop :name="name"
              :fileName="fileName"
              :capImg="capImg"
              :capName="capName"
              :experience="experience"
              :year="year"
              :params="params"
              :speed="speed"
              :engine="engine"
    />
    <CabinDropdown v-if="decks"
                   :decks="decks"
                   :params="params"
                   :speed="speed"
                   :engine="engine"
                   :options="options"
    />
  </div>
</template>

<script>
import CabinTop from "./CabinTop";
import CabinDropdown from "./CabinDropdown";
export default {
  name: "Cabin",
  components: {CabinDropdown, CabinTop},
  props:{
    decks: Array,
    name: String,
    fileName: String,
    capImg: String,
    capName: String,
    experience: String,
    year: String,
    params:String,
    speed: String,
    engine: String,
    options: Array,
  }
}
</script>

<style scoped>

</style>
