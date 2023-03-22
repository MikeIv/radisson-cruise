<template>
  <div class="flight">
    <CruiseItemImg :fileNames="fileNames"/>
    <CruiseItemInfo :linkThematic="link"
                    :decor="decor"
                    :svgName="svgName"
                    :title="title"
                    :text="text"
                    :theatrical="theatrical"
                    :linkBuy="linkBuy"
                    :linkMore="linkMore"
    />
  </div>
</template>

<script>
import CruiseItemImg from "./CruiseItemImg";
import CruiseItemInfo from "./CruiseItemInfo";
export default {
  name: "CruiseItem",
  components: {CruiseItemInfo, CruiseItemImg},
  props: {
    fileNames:Array,
    title: String,
    text: String,
    svgName: String,
    theatrical: Boolean,
    decor: Boolean,
    link:String,
    linkMore: String,
    linkBuy: String,
  }
}
</script>

<style scoped>

</style>
