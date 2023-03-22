<template>
  <div class="text_item">
    <b>
      {{ textItem.headText }}
    </b>
    <p>
      {{ textItem.text }}
    </p>
    <p> &nbsp; </p>
  </div>
</template>

<script>
export default {
  name: "EquipmentItemText",
  props: {
    textItem: Object,
  }
}
</script>

<style scoped>
.text_item{
  display: flex;
  flex-direction: column;
}

.text_item:last-child p:last-child {
  display: none;
}

</style>
