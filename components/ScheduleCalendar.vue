<template>
  <div v-show="isMobile" class="schedule_filter uk-container"
  >
    <div ref="calendarButtons"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
         class="schedule_filter-buttons"
         :class="{ hidden: isCalendarHidden }"
         :style="{ transform: `translateX(${translateX}px)` }"
    >
      <button class="litepicker_button"

      >
        <svg-icon class="icon buy-ticket__item_icon2" name="date"/>
        <img
            src="~assets/img/main/arr_dow.png"
            alt=""
            class="buy-ticket__item2_arr"
        />
        {{dateInputValue}}
      </button>
      <nuxt-link
          class="uk-button uk-button-default button_ticket calendar_link"
          type="submit"
          :to="selectedDates"
      >
        <span>{{ $t('buttons.find_route') }}</span>
        <svg-icon name="looking_glass" class="icon"/>
      </nuxt-link>
    </div>

    <svg-icon @click="isCalendarHidden = false; translateX = 0" v-show="isCalendarHidden" class="icon calendar_hidden" name="schedule/calendar_hidden"/>
  </div>
</template>

<script>
import UIkit from "uikit";

export default {
  name: "ScheduleCalendar",
  props: {
    link: String,
  },
  data() {
    return {
      dateInputValue: this.$i18n.t('select_date'),
      selectedDates: '',
      isCalendarHidden: false,
      xDown: null,
      yDown: null,
      translateX: 0, // Added to control horizontal translation
      isMobile: this.$viewport.isLessThan('mobileWide'),
    }
  },
  watch: {
    '$viewport.breakpoint'() {
      this.isMobile = this.$viewport.isLessThan('mobileWide')
    },
  },
  methods: {
    getTouches(evt) {
      return evt.touches // browser API
    },
    handleTouchStart(evt) {
      const firstTouch = this.getTouches(evt)[0];
      this.xDown = firstTouch.clientX;
      this.yDown = firstTouch.clientY;
    },
    handleTouchMove(evt) {
      if (!this.xDown) {
        return;
      }

      let xUp = evt.touches[0].clientX;
      let xDiff = xUp - this.xDown;

      // Prevent overscroll to the right
      if (xDiff < 0) {
        xDiff = 0;
      }

      // Update translateX based on swipe
      this.translateX = xDiff;
    },
    handleTouchEnd() {
      const hideThreshold = 100;

      if (this.translateX >= hideThreshold) {
        // Hide the buttons by setting translateX to the width of the element
        this.translateX = this.$refs.calendarButtons.offsetWidth;
        this.isCalendarHidden = true
      } else {
        // Reset translateX to 0 if not swiped far enough
        this.translateX = 0;
        this.isCalendarHidden = false
      }
    },
  },
  mounted() {
    const options = {
      lang: this.$i18n.localeProperties.iso,
      element: document.querySelector('.litepicker_button'),
      singleMode: false,
      numberOfMonths: 2,
      numberOfColumns: 2,
      minDate: new Date().setDate(new Date().getDate() - 0),
      maxDate: new Date().setDate(new Date().getDate() + 60),
      showTooltip: false,
      plugins: ['mobilefriendly'],
    }
    // console.log("Elements = ",elements);
    this.litePickers = new Litepicker({
      ...options,

      setup: (picker) => {
        picker.on('selected', async (date1, date2) => {
          picker.getDate()

          //console.log(picker.gotoDate())

          function addDays(date, days) {
            let result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
          }

          let dateFirst = addDays(date1.dateInstance, 1).toISOString().split('T')[0]
          let dateEnd = addDays(date2.dateInstance, 1).toISOString().split('T')[0]
          if( date1.getTime() === date2.getTime() ) {
            this.dateInputValue = `${dateFirst}`
            this.selectedDates = `/yachts/schedule/?start=${dateFirst}`
          } else {
            this.dateInputValue = `${dateFirst} - ${dateEnd}`
            this.selectedDates = `/yachts/schedule/?start=${dateFirst}&end=${dateEnd}`
          }
          //console.log("picker selected showRoutes = ",this.showRoutes);
        });
      },
    });
  }
}
</script>

<style scoped>
.schedule_filter {
  position: fixed;
  display: flex;
  bottom:0;
  z-index: 1020;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.schedule_filter-buttons {
  display: flex;
  justify-content: center;
  width: 100%;
  transition: transform 0.3s ease-in-out;
}
.schedule_filter-buttons.hidden {
  transform: translateX(200%); /* Slide out to the left */
}
.litepicker_button {
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.litepicker_button .buy-ticket__item_icon2{
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16.052px;
  height: 19px;
}
.litepicker_button .buy-ticket__item2_arr{
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
}
.calendar_link {
  height: 60px;
  width: 100%;
  max-width: 180px;
}
.calendar_hidden {
  width: 70px;
  height: 50px;
  flex-shrink: 0;
  margin-left: auto;
}
</style>
