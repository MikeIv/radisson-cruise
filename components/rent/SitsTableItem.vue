<template>
  <div class="tenancy-seating__item">
    <div class="headline_22 t_semibold text-upper">
      {{ yachtType }}
    </div>
    <div class="tenancy-seating__names">
      {{ yachtList }}
    </div>
    <div class="tenancy-seating__types">
      <div class="tenancy-seating__type tenancy-seating__type_one">
        <div class="tenancy-seating__type__icon">
          <svg-icon class="icon" name="blue-dots"/>
        </div>
        <div class="tenancy-seating__type__info">
          <div class="tenancy-seating__type__p1">
            {{$t('seat_theatre')}}
          </div>
          <div class="tenancy-seating__type__p2">
            {{ theatreCount }}
          </div>
        </div>
      </div>
      <div class="tenancy-seating__type tenancy-seating__type_second">
        <div class="tenancy-seating__type__icon">
          <svg-icon class="icon" name="blue-dots2"/>
        </div>
        <div class="tenancy-seating__type__info">
          <div class="tenancy-seating__type__p1">
            {{$t('seat_school')}}
          </div>
          <div class="tenancy-seating__type__p2">
            {{ classCount }}
          </div>
        </div>
      </div>
      <div class="tenancy-seating__type tenancy-seating__type_third">
        <div class="tenancy-seating__type__icon">
          <svg-icon class="icon" name="blue-dots3"/>
        </div>
        <div class="tenancy-seating__type__info">
          <div class="tenancy-seating__type__p1">
            {{$t('banquet')}}
          </div>
          <div class="tenancy-seating__type__p2">
            {{ BanketCount }}
          </div>
        </div>
      </div>
      <div class="tenancy-seating__type tenancy-seating__type_fourth">
        <div class="tenancy-seating__type__icon">
          <svg-icon class="icon" name="blue-dots4"/>
        </div>
        <div class="tenancy-seating__type__info">
          <div class="tenancy-seating__type__p1">
            {{$t('seat_ushape')}}
          </div>
          <div class="tenancy-seating__type__p2">
            {{ uTableCount }}
          </div>
        </div>
      </div>
      <div class="tenancy-seating__type tenancy-seating__type_forties">
        <div class="tenancy-seating__type__icon">
          <svg-icon class="icon" name="cocktail"/>
        </div>
        <div class="tenancy-seating__type__info">
          <div class="tenancy-seating__type__p1">
            {{$t('seat_cocktail')}}
          </div>
          <div class="tenancy-seating__type__p2">
            {{cocktailCount}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SitsTableItem",
  props:{
    yachtType:String,
    yachtList: String,
    theatreCount: String,
    classCount: String,
    cocktailCount: String,
    uTableCount: String,
    BanketCount: String,
  },
}
</script>

<style scoped>

</style>
