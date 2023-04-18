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
          обратная связь
        </div>
        <div class="uk-modal-full__block">


          <div class="modal-calculation__slide modal-calculation__slide4 current" >
            <div class="uk-modal-full__block__top modal-calculation__slide-time__top">
              <div class=" t_semibold txt18">Заполните форму</div>
            </div>
            <div class="modal-calculation__middle">
<!--               <div class="t_semibold modal-calculation__slide4__p1">
                Заполните контактную форму для расчета мероприятия, наши менеджеры
                свяжутся с вами в ближайшее время для уточнения всех деталей
              </div> -->
              <div class="uk-flex uk-flex-wrap modal-calculation__data__grid__item">
                <div class="input-personal uk-width-1-3@m  uk-padding-small uk-padding-remove-vertical">
                  <div class="uk-form-controls">
                    <label class="uk-form-label">Ваше имя</label>
                    <input class="uk-input buy-ticket__input" @input="validateName" type="text" v-model="formData.name"
                      placeholder="Введите имя" required name="" id="modal-calculation__slide4-name">
                  </div>
                  <div class="uk-form-controls mt-3">
                    <label class="uk-form-label">Ваше e-mail</label>
                    <input class="uk-input buy-ticket__input" @input="validateEmail" type="text" v-model="formData.email"
                      placeholder="Введите e-mail" required name="" id="modal-calculation__slide4-email">
                  </div>
                  <div class="uk-form-controls mt-3">
                    <label class="uk-form-label">Контактный телефон</label>
                    <TheMask class="uk-input buy-ticket__input f_phone" placeholder="+7(___) ___-____" v-model="formData.phone" @input="validatePhone" id="modal-calculation__slide4-call" :mask="['+7(###) ###-####', '+7(###) ###-####']" />
                 </div>
                </div>
                <div class="input-personal uk-width-2-3@m uk-padding-small uk-padding-remove-vertical">
                  <div class="uk-form-controls">
                    <label class="uk-form-label">Сообщение</label>
                    <textarea class=" buy-ticket__input input_description uk-textarea "  
                          id="modal-calculation__slide4-description" 
                          v-model="formData.description" 
                          name="description"
                          rows="10" 
                          
                          >
                          Сообщение
                    </textarea>

                 </div>

                </div>
              </div>


              <div class="uk-flex-between uk-padding-small uk-grid">
                <div class="form_politic buy-ticket__politic">
              <label for="calculation__slide4-agree">
                <input class="uk-checkbox" type="checkbox" v-model="isPersonalInfoCheck" name="check-personal" id="calculation__slide4-agree">
                <span class="">
                  Согласие на обработку <a href="/" target="_blank">персональных данных</a>
                </span>
                  </label>
                </div>  
                  <div>                 
                    <button class="uk-button uk-button-default uk-position-relative" @click="submitFormRent">
                    <span>ОТПРАВИТЬ</span>
                  </button></div>
              </div>


            </div>

          </div>

<!--         <div class="modal-calculation__slide modal-calculation__slide5 current" v-show="currentStep === 4">
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

        </div> -->



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
      emailRegex: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
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
        email: "",
        description: "",

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
    validateEmail() {
      //console.log(" Name Change = ", this.formData.name)
      if (this.emailRegex.test(this.formData.email) && this.formData.name.length > 0) {
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
        email: "",
        description: "",
      };
      this.isPersonalInfoCheck = false;
      //this.lpickObjick.clearSelection();
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
      console.log('try submit Form');
      if(this.formData.name === ""){
        UIkit.notification({message: 'Укажите ваше имя', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      if(this.formData.email === ""){
        UIkit.notification({message: 'Укажите ваш e-mail', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      if(!this.validateEmail()){
        UIkit.notification({message: 'Укажите верный e-mail', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      if(this.formData.phone === ""){
        UIkit.notification({message: 'Укажите ваш телефон', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      if(this.formData.description === ""){
        UIkit.notification({message: 'Заполните поле "Сообщение"', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      if(!this.isPersonalInfoCheck){
        UIkit.notification({message: 'Подтвердите согласие на обработку персональных данных', status: 'danger', pos: 'top-center', timeout: 1500})
        return;
      }
      const fetchCalculation = async () => {
        const response = await fetch(`${this.$config.baseURL}feedback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });
        const data = await response.json();
        //console.log('data', data);
        if (data.status === 'success') {
          
          UIkit.notification({message: 'Ваша заявка принята', status: 'success', pos: 'top-center', timeout: 1500})
        }
        else {
          UIkit.notification({message: 'Ошибка отправки заявки', status: 'danger', pos: 'top-center', timeout: 1500})
        }
      };
      fetchCalculation();
     this.closeModal();

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
/*     this.lpickObjick = new Litepicker({
      lang: 'ru-RU',
      element: document.querySelector('#datepicker-inn'),
      inlineMode: true,
      singleMode: true,
      numberOfMonths: 3,
      numberOfColumns: 3,
      format: 'DD.MM.YYYY',
      delimiter: ' - ',
      minDate: new Date(Date.now() - 86400000),
      setup: (picker) => {
        picker.on('selected', (date) => {
          //console.log("select Date = ", date.dateInstance);
          this.formData.date = date.dateInstance.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          });
        });
      },
    }); */
    // console.log('LitePicker = ', this.lpickObjick);
    //console.log('refs = ', this.$refs);
    //console.log('UIKit modal  = ', UIkit.options);
    UIkit.util.on(this.$refs.modalcalc, 'beforehide', (e) => {
      //console.log('beforehide');
    });

    /*if (window.innerWidth <= 959) {
      document.querySelector('.modal-calculation__slide .form_politic').innerHTML = `<div class='modal-calculation__slide4__bottom'></div>`
      document.querySelector('#calculation__slide4-submit').innerHTML = "<div class='calculation__slide4-submit__cont'></div>"
      /!*document.querySelector('.calculation__slide4-submit__cont').appendTo('.modal-calculation__slide4__bottom');*!/
    }*/




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
/*     document.getElementById("modal-calculation__range-input__in").addEventListener("input", function (e) {
      var rng = document.getElementById('modal-calculation__range-input'); //rng - это ползунок
      var i1 = document.getElementById('modal-calculation__range-input__in'); // i1 - input
      e.currentTarget.value = e.currentTarget.value.replace(/\D/, '')

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
    }, false); */


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
.buy-ticket__item_5 {
  display: block;
}
.mt-3{
  margin-top: 3px;
}
.modal-calculation__data__grid__item {
/*     margin-left: -29px;
    margin-top: 25px; */
    align-items: flex-start;
    /* gap: 30px; */
}
</style>
