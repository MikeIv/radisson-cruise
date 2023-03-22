<template>
  <div :class="end ? `buy-ticket-shedule_trams__table__item` : `buy-ticket-shedule_trams__table__item-last-1`">
    <div>
      <div v-if="start !== '-'">
        {{ start.slice(0, -3) }}
      </div>

      <div v-else>
        -
      </div>
      <div v-if="end !== '-'">
        {{ end.slice(0, -3)  }}
      </div>

      <div v-else>
        -
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableItemTime",
  props: {
    start: String,
    end: String,
  },
}
</script>

<style scoped>

</style>
