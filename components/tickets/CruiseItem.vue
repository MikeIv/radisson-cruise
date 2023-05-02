<template>
  <div class="flight">
    <CruiseItemImg :fileNames="fileNames"/>
    <CruiseItemInfo
        :linkThematic="link"
        :decor="decor"
        :svgName="svgName"
        :title="title"
        :text="text"
        :theatrical="theatrical"
        :link-buy="linkBuy"
        :link-more="linkMore"
        :link-free="linkFree"
        :button="button"
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
    linkFree: String,
    button: String,
  }
}
</script>

<style scoped>

</style>
