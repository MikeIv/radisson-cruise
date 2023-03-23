<template>
  <div id="modal-calculation" class="uk-modal-full modal-calculation" uk-modal bg-close="false" ref="modalcalc">
    <div class="uk-modal-dialog">

      <div class="modal_decor"></div>
      <button class="uk-modal-close-full uk-close-large" type="button" @click="closeModal" uk-close-off>
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <line fill="none" stroke="#fff" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"></line>
          <line fill="none" stroke="#fff" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"></line>
        </svg>
      </button>

      <img class="img_cover" src="~assets/img/inners/calc1.png" data-src="~assets/img/inners/calc1.png" alt="">

      <svg-icon class="instagram_decor1" name="decor4" />

      <div class="container-modal modal-full_container uk-position-relative">
        <div class="headline_p2">
          расчет стоимости<br>
          мероприятия
        </div>
        <div class="uk-modal-full__block">

          <!-- <form class="modal-calculation__slider" action="" id="quest_form" autocomplete="off"> -->
          <div class="modal-calculation__slide current" v-show="currentStep === 0">
            
            <div class="uk-modal-full__block__top modal-calculation__slide-time__top">
              <span class=" t_semibold txt18">Выберите тип мероприятия</span>
            </div>

            <div class="modal-calculation__middle">
              <div class="modal-calculation__middle__types uk-child-width-1-4@m uk-child-width-1-3@s">
                <div v-for="(typeItem, idxt) in listType" :key="'t-' + idxt">
                  <input class="uk-radio" type="radio" :id="'radiot-' + typeItem.id" name="modal-calculation_type"
                    :value="typeItem.id" v-model="formData.type">
                  <label class="modal-calculation__label" :for="typeItem.id" @click="selectType(typeItem.id)">{{
                    typeItem.name }}</label>
                </div>
              </div>
            </div>


          </div>
          <div class="modal-calculation__slide current" v-show="currentStep === 1">
            <div class="uk-modal-full__block__top modal-calculation__slide-time__top">
              <div class=" t_semibold txt18">Когда планируете мероприятие</div>
              <div class="card_time">
                <svg-icon class="icon" name="clock2" />
                <span>Выбрать время:</span>
              </div>

              <div class="buy-ticket__item buy-ticket__item_5">
                <!-- <svg-icon name="clock3" class="icon buy-ticket__item_icon1"/> 
              <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr">-->
                <button @click.prevent="openSelect" class="select-styled timeSelect ">
                  {{ formData.time }}
                </button>
                <!-- <svg-icon name="clock3" class="icon buy-ticket__item_icon1" /> -->
                <img src="~assets/img/main/arr_dow.png" alt="" class="buy-ticket__item1_arr" />
                <div class="testW" v-show="isTimeSelected">

                  <select @focusout="clickOutside" @change="clickOutside" size="10" name="" id="" class="test"
                    v-model="formData.time">
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                  </select>

                </div>
              </div>
            </div>
            <div class="modal-calculation__middle modal-calculation__middle_months">
              <input class=" select-styled  litepicker" id="datepicker-inn" type="text" placeholder=""
                v-model.lazy="formData.date" @change="changeDate">
            </div>

          </div>
          <div class="modal-calculation__slide current" v-show="currentStep === 2">
            <div class="uk-modal-full__block__top modal-calculation__slide-time__top">
              <div class=" t_semibold txt18">Количество гостей</div>
            </div>
            <div class="modal-calculation__middle">
              <div class="modal-calculation__guests">
                <div class="modal-calculation__guests__name">
                  Указать количество:
                </div>
                <div class="uk-form-controls">
                  <svg width="80" height="80" style="width: 25px; height: 25px;" viewBox="0 0 24 24" stroke="#00c1f3" stroke-width="1.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z"  stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.6824 14H9.31765C8.83513 14 8.59387 14 8.37806 14.0461C7.63116 14.2056 6.9853 14.7661 6.62346 15.569C6.51891 15.8009 6.44262 16.0765 6.29003 16.6278C6.10668 17.2901 6.01501 17.6213 6.00261 17.8884C5.95888 18.8308 6.46818 19.6817 7.22441 19.9297C7.43875 20 7.72864 20 8.30844 20H15.6916C16.2714 20 16.5613 20 16.7756 19.9297C17.5318 19.6817 18.0411 18.8308 17.9974 17.8884C17.985 17.6213 17.8933 17.2901 17.71 16.6278C17.5574 16.0765 17.4811 15.8009 17.3765 15.569C17.0147 14.7661 16.3688 14.2056 15.6219 14.0461C15.4061 14 15.1649 14 14.6824 14Z"  stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
<!--                   <svg class="icon">
                    <use xlink:href="#metro"></use>
                  </svg> -->
                  <!-- <svg-icon class="icon" name="#metro_logo"/> -->
                  <input class="uk-input buy-ticket__input" type="text" placeholder="" required name=""
                    v-model="formData.guests" id="modal-calculation__range-input__in">
                </div>
              </div>
              <div class="modal-calculation__range">
                <div class="modal-calculation__range__numbers">
                  <div>0</div>
                  <div>50</div>
                  <div>100</div>
                  <div>150</div>
                  <div>200</div>
                  <div>250</div>
                  <div>300</div>
                  <div>350</div>
                  <div>400</div>
                </div>
                <input class="uk-range" type="range" v-model="formData.guests" min="0" max="400" step="1"
                  id="modal-calculation__range-input">
              </div>
            </div>

          </div>
          <div class="modal-calculation__slide modal-calculation__slide4 current" v-show="currentStep === 3">
            <div class="uk-modal-full__block__top modal-calculation__slide-time__top">
              <div class=" t_semibold txt18">Заполните форму</div>
            </div>
            <div class="modal-calculation__middle">
              <div class="t_semibold modal-calculation__slide4__p1">
                Заполните контактную форму для расчета мероприятия, наши менеджеры
                свяжутся с вами в ближайшее время для уточнения всех деталей
              </div>
              <div class="uk-flex uk-flex-wrap modal-calculation__data__grid ">
                <div class="input-personal">
                  <div class="uk-form-controls">
                    <label class="uk-form-label">Ваше имя</label>
                    <input class="uk-input buy-ticket__input" @input="validateName" type="text" v-model="formData.name"
                      placeholder="Введите имя" required name="" id="modal-calculation__slide4-name">
                    <!-- <div v-show="!nameRegex.test(formData.name) && formData.name.length > 0"
                      class="uk-form-danger error-validation">Некорректное имя. Содержит знаки или цифры помимо букв</div> -->
                  </div>
                </div>
                <div class="input-personal">
                  <div class="uk-form-controls">
                    <label class="uk-form-label">Контактный телефон</label>
                    <TheMask class="uk-input buy-ticket__input f_phone" placeholder="+7(___) ___-____" v-model="formData.phone" @input="validatePhone" id="modal-calculation__slide4-call" :mask="['+7(###) ###-####', '+7(###) ###-####']" />
                    <!-- <input class="uk-input buy-ticket__input f_phone" type="text" @input="validatePhone" v-model="formData.phone"
                      placeholder="+7 (" required name="" id="modal-calculation__slide4-call" v-mask="'(###) ####-##-##'"> -->
                    <!-- <div v-show="!phoneRegex.test(formData.phone) && formData.phone.length > 0"
                      class="uk-form-danger error-validation">Некорректный номер телефона. Не хватает цифр</div> -->
                  </div>
                </div>
              </div>
<!--               <div class=" uk-visible@s">
                <button class="uk-button uk-button-default" @click="submitFormRent"   id="calculation__slide4-submit">
                  <span>ОТПРАВИТЬ</span>
                </button>
              </div> -->
              <div class="form_politic buy-ticket__politic">
              <label for="calculation__slide4-agree">
                <input class="uk-checkbox" type="checkbox" v-model="isPersonalInfoCheck" name="check-personal" id="calculation__slide4-agree">
                <span class="">
                  Согласие на обработку <a href="/" target="_blank">персональных данных</a>
                </span>
              </label>
            </div>  
            </div>

          </div>

        <div class="modal-calculation__slide modal-calculation__slide5 current" v-show="currentStep === 4">
          <div class="modal-calculation__middle">
            <svg-icon class="modal-calculation__slide5__svg" name="fancy-wheel" />
            <div class="headline_32 t_semibold uk-position-relative">
              Запрос отправлен
            </div>
            <div class="headline_line uk-position-relative"></div>

            <div class="t_semibold modal-calculation__slide5__p1 uk-position-relative">
              Спасибо, ваш запрос отправлен. В ближайшее время наши менеджеры свяжутся с вами для уточнения деталей.
            </div>
            <button class="uk-button uk-button-default uk-modal-close uk-position-relative" @click="closeModal">
              <span>ЗАКРЫТЬ</span>
            </button>

          </div>

        </div>
        <!-- </form> -->

        <div class="modal-calculation__bottom" id="modal-calculation__bottom1" v-show="currentStep < 4">
          <div class="modal-calculation__progress" >
            <div class="modal-calculation__progress__head">
              <span>Процесс:</span>
              <span id="modal-calculation__progress__procent">{{ progress }}%</span>
            </div>
            <progress id="modal-calculation__progressbar" class="uk-progress" :value="progress" max="100"></progress>
            
          </div>
<!--           <div class="modal-calculation__bottom modal-calculation__bottom_last" id="modal-calculation__bottom2" v-show="currentStep === 4">
          <a href=""  @click="resetCalculation">
            СДЕЛАТЬ НОВЫЙ РАСЧЕТ
          </a>

        </div> -->
          <div class="modal-calculation__arrows" >
            <div class="modal-calculation__arr_prev" @click="clickPrev" v-show="currentStep < 4">
              <svg-icon class="icon" name="arrow3" />
            </div>
            <button class="modal-calculation__arr_next"  @click="clickNext" v-show="currentStep < 4">
              <span>Далее</span>
              <svg-icon class="icon" name="arrow3" />
            </button>
<!--             <img src="~assets/img/inners/head-logo2@2x.png" data-src="~assets/img/inners/head-logo2@2x.png" alt=""
            class="uk-visible@s" v-show="currentStep === 4"> -->
          </div>
          
        </div>
        <div class="modal-calculation__bottom modal-calculation__bottom_last" id="modal-calculation__bottom2" v-show="currentStep === 4">
          <div  class="link_close new-calculation"  @click="resetCalculation">
            СДЕЛАТЬ НОВЫЙ РАСЧЕТ
          </div>
          <img src="~assets/img/inners/head-logo2@2x.png" data-src="~assets/img/inners/head-logo2@2x.png" alt=""
            class="uk-visible@s">
        </div>

      </div>
    </div>
  </div>
</div></template>

<script>

import UIkit from "uikit";
import {TheMask} from 'vue-the-mask'
export default {
  name: "ModalCalculation",
  components: {TheMask,},
  data() {
    return {
      steps: 5,
      currentStep: 0,
      isNextDisable: true,
      isTimeSelected: false,
      isPersonalInfoCheck: false,
      selectDateTime: {
        date: false,
        time: false,
      },
      nameRegex: /^[A-Za-zА-Яа-яЁё\s]+$/,
      //phoneRegex: /^(\+7|7|8)\d{10}$/,
      phoneRegex: /^\d{10}$/,
      phoneRegex2: /^(\d{3})\D*(\d{3})\D*(\d{2})\D*(\d{2})$/,
      listType: [
        {
          id: 1,
          name: 'Фуршет',
          checked: false,
        },
        {
          id: 2,
          name: 'Дни рождения',
          checked: false,
        },
        {
          id: 3,
          name: 'Детские праздники',
          checked: false,
        },
        {
          id: 4,
          name: 'Корпоративы',
          checked: false,
        },
        {
          id: 5,
          name: 'Встреча однокласников',
          checked: false,
        },
        {
          id: 6,
          name: 'Романтический ужин',
          checked: false,
        },
        {
          id: 7,
          name: 'Бизнес семинары',
          checked: false,
        },
        {
          id: 8,
          name: 'Свадьба',
          checked: false,
        },
        {
          id: 9,
          name: 'Конференция',
          checked: false,
        },
        {
          id: 10,
          name: 'Новый год',
          checked: false,
        },


      ],
      piktype: 1,
      pickdate: null,
      picktime: "",
      lpickObjick: null,
      formData: {
        name: "",
        phone: "",
        type: 0,
        date: "",
        time: "",
        guests: 1,
      },
    };
  },
  computed: {

    progress() {
      switch (this.currentStep) {
        case 0:
          return 0;
        case 1:
          return 30;
        case 2:
          return 60;
        case 3:
          return 90;
          
      
        default:
          break;
      }
      //"currentStep = ", this.currentStep);
      //return (this.currentStep / (this.steps - 1)) * 100;
    },
  },
  methods: {
    validateName() {
      //console.log(" Name Change = ", this.formData.name)
      if (this.nameRegex.test(this.formData.name) && this.formData.name.length > 0) {
        return true;
      } else {
        return false;
      }
    },

    validatePhone() {
      //console.log(" Phone Change = ", this.formData.phone)
      let inputValue = this.formData.phone;
      // Remove all non-numeric characters from the input
      //inputValue = inputValue.replace(/\D/g, '');
      // Apply the phone number format
      if(inputValue.length === 10) {
        //inputValue = inputValue.replace(this.phoneRegex2, '($1) $2-$3-$4');

      }
      else if( inputValue.length < 10 && inputValue.length > 0) {
        //inputValue = inputValue.replace(this.phoneRegex2, '($1) $2-$3');
      }
      
      
      // Set the formatted value as the input value
      this.formData.phone = inputValue;
    },
    clickOutside() {
      this.isTimeSelected = false;
      //document.querySelector('.testW').style.display = 'none'
    },
    openSelect(e) {
      this.isTimeSelected = true;
      /* document.querySelector('.testW').style.display = 'block'
      document.querySelector('.test').focus() */
    },
    resetCalculation(){
      //console.log('resetCalculetion');
      this.currentStep = 0;
      this.formData = {
        name: "",
        phone: "",
        type: 0,
        date: "",
        time: "",
        guests: 1,
      };
      this.isPersonalInfoCheck = false;
      this.lpickObjick.clearSelection();
    },
    openModal() {
      UIkit.modal('#modal-calculation').show();
    },
    closeModal() {
      //console.log('closeModal');
      this.currentStep = 0;
      this.formData = {
        name: "",
        phone: "",
        type: 0,
        date: "",
        time: "",
        guests: 1,
      };
      this.isPersonalInfoCheck = false;
      this.lpickObjick.clearSelection();
      //console.log("this.lpickObjick  = ",this.lpickObjick )
      UIkit.modal('#modal-calculation').hide();
    },
    selectType(id) {
      //console.log('selectType', id);
      this.formData.type = id;
      this.listType.forEach((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
      });
    },
    changeDate() {
      //console.log('changeDate', this.pikdate);
    },
    clickNext() {
      //console.log('clickNext');
      if(this.currentStep === 3) {
        this.submitFormRent();
        return;
      }
      if(this.currentStep === 0 && this.formData.type === 0){
        UIkit.notification({message: 'Выберите тип мероприятия', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      if(this.currentStep === 1 && (this.formData.date === "" || this.formData.time === "")){
        UIkit.notification({message: 'Выберите дату и время мероприятия', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      this.currentStep++;
      if (this.currentStep > this.steps) {
        this.currentStep = this.steps;
      }
    },
    submitFormRent() {
      //console.log('submit Form');
      if(this.formData.name === ""){
        UIkit.notification({message: 'Укажите ваше имя', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      if(this.formData.phone === ""){
        UIkit.notification({message: 'Укажите ваш телефон', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      if(!this.isPersonalInfoCheck){
        UIkit.notification({message: 'Подтвердите согласие на обработку персональных данных', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      const fetchCalculation = async () => {
        const response = await fetch(`${this.$config.baseURL}api/v1/sendform`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });
        const data = await response.json();
        //console.log('data', data);
        if (data.status === 'success') {
          this.closeModal();
          UIkit.notification({message: 'Ваша заявка принята', status: 'success', pos: 'top-center', timeout: 1500})
        }
        else {
          UIkit.notification({message: 'Ошибка отправки заявки', status: 'danger', pos: 'top-center', timeout: 1500})
        }
      };
      fetchCalculation();
      this.currentStep++;
      if (this.currentStep > this.steps) {
        this.currentStep = this.steps;
      }
    },
    clickPrev() {
      //console.log('clickPrev');
      this.currentStep--;
      this.isNextDisable = false;
      if (this.currentStep < 1) {
        this.currentStep = 1;
      }
      //this.changeStep();
    },
  },
  mounted() {
    this.lpickObjick = new Litepicker({
      lang: 'ru-RU',
      element: document.querySelector('#datepicker-inn'),
      inlineMode: true,
      singleMode: true,
      numberOfMonths: 3,
      numberOfColumns: 3,
      format: 'DD.MM.YYYY',
      delimiter: ' - ',
      /* tooltipText: {
        one: 'flight',
        other: 'flights',
      }, */
      minDate: new Date(Date.now() - 86400000),
      setup: (picker) => {
        picker.on('selected', (date) => {
          //console.log("select Date = ", date.dateInstance);
          this.formData.date = date.dateInstance;
          //console.log('LitePicker = ', this.lpickObjick);
          // checkedCalculationDates();
        });
      },
    });
    // console.log('LitePicker = ', this.lpickObjick);
    //console.log('refs = ', this.$refs);
    //console.log('UIKit modal  = ', UIkit.options);
    UIkit.util.on(this.$refs.modalcalc, 'beforehide', (e) => {
      //console.log('beforehide');
    });

    if (window.innerWidth <= 959) {
      document.querySelector('.modal-calculation__slide .form_politic').innerHTML = `<div class='modal-calculation__slide4__bottom'></div>`
      document.querySelector('#calculation__slide4-submit').innerHTML = "<div class='calculation__slide4-submit__cont'></div>"
      /*document.querySelector('.calculation__slide4-submit__cont').appendTo('.modal-calculation__slide4__bottom');*/
    }




/*     function indexInParent(node) {
      let children = node.parentNode.childNodes;
      let num = 0;
      for (var i = 0; i < children.length; i++) {
        if (children[i] == node) return num;
        if (children[i].nodeType == 1) num++;
      }
      return -1;
    } */




    //отслеживаем измениние инпута range для расчетов
    document.getElementById("modal-calculation__range-input__in").addEventListener("input", function (e) {
      var rng = document.getElementById('modal-calculation__range-input'); //rng - это ползунок
      var i1 = document.getElementById('modal-calculation__range-input__in'); // i1 - input
      e.currentTarget.value = e.currentTarget.value.replace(/\D/, '')
      /*$(this).val($(this).val().replace (/\D/, ''));*/

      if (i1.value >= 400) {
        i1.value = 400;
        rng.value = 400;
      }
      if (i1.value.length >= 1) {
        rng.value = i1.value;
      }
    }, false);

    document.getElementById("modal-calculation__range-input__in").addEventListener("change", function () {
      var rng = document.getElementById('modal-calculation__range-input'); //rng - это ползунок
      var i1 = document.getElementById('modal-calculation__range-input__in'); // i1 - input
      if (i1.value.length == 0) {
        i1.value = 0;
        rng.value = 0;
      }
    }, false);

    document.getElementById("modal-calculation__range-input").addEventListener("input", function () {
      var rng = document.getElementById('modal-calculation__range-input'); //rng - это ползунок
      var i1 = document.getElementById('modal-calculation__range-input__in'); // i1 - input
      i1.value = rng.value;
    }, false);


    //проверка на имя и телефон расчете стоимости меропрития
/*     function checkedCalculationNameAndCall() {
      if (document.getElementById('modal-calculation__slide4-name').value.length > 0
        && document.getElementById('modal-calculation__slide4-call').value.length
        && document.getElementById("#calculation__slide4-agree").getAttribute('checked')) {
        document.querySelector('.modal-calculation__arr_next').classList.add('active');
        document.getElementById('calculation__slide4-submit').disabled = false;
        document.querySelector('.modal-calculation__arr_next').classList.add('modal-calculation__arr_next-fin');
      } else {
        document.getElementById('calculation__slide4-submit').disabled = true;
        document.querySelector('.modal-calculation__arr_next').classList.remove('active');
        document.querySelector('.modal-calculation__arr_next').classList.remove('modal-calculation__arr_next-fin');
      }
    } */

    //document.getElementById('datetimepicker-time').addEventListener('keyup', checkedCalculationDates)

/*     function checkedCalculationDates() {
      console.log("TIME select input =", document.getElementById('datetimepicker-time').value)
      //console.log("Date picker = ",this.lpickObjick)
      console.log("Date calculate = ", document.getElementById('datepicker-inn').value)
      if (document.getElementById('datetimepicker-time').value.length > 0
        && document.getElementById('datepicker-inn').value.length > 0) {
        document.querySelector('.modal-calculation__arr_next').classList.add('active');
      } else {
        document.querySelector('.modal-calculation__arr_next').classList.remove('active');
      }
    } */




    //прячем финальный футер у расчетов
    //document.querySelector('#modal-calculation__bottom2').style.display = 'none';

  },
  beforeDestroy() {
    console.log('beforeDestroy LitePicker = ', this.lpickObjick);
    this.lpickObjick.destroy();
  },
}
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 100vh;
}

.buy-ticket-yacht__header {
  height: 100%;
}



.timeSelect:after {
  /* display: none; */
  content: '';
  background: none;
}

.timeSelect {
  /* display: none; */
  border-left: none;
}
.new-calculation:hover{
  cursor: pointer;
}

.testW {
  /* display: none; */
}

.testW select {
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background: #fff;
  height: 150px;
  z-index: 1000;
}

.testW select option {
  text-align: center;
  padding: 10px 0;
}

.test option:checked {
  color: #000000;
  background: #00c1f3;
}

.testW select option:hover {
  color: #00c1f3;
  ;
  transform: scale(1.5);
}

.error-validation {
  height: 18px;
  font-size: 12px;
}

.input-personal {
  min-height: 140px;
}
.container-modal {
  width: 100%;
    z-index: 2;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
}
</style>
