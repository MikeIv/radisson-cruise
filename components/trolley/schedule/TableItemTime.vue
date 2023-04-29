<template>

  <div class="uk-width-1-1  ">
      <div class="uk-width-1-1">

       <div class="uk-flex uk-child-width-1-2 uk-width-1-1 ">
        <div class="inout-text">      
          <div v-if="start !== '-'">
            {{ start.slice(0, -3) }}
          </div>
          <div v-else>
            &#8212;
          </div>
        </div>
        <div class="inout-text">
          <div v-if="end !== '-'">
            {{ end.slice(0, -3)  }}
          </div>

          <div v-else>
            &#8212;
          </div>
        
        </div>
       </div>
      </div> 
    </div>

<!--   <div :class="end ? `buy-ticket-shedule_trams__table__item` : `buy-ticket-shedule_trams__table__item-last-1`">

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
  </div> -->
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
.inout-text{
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  color: #000000;
  text-align: center;
  padding: 10px 4px;
}
</style>
