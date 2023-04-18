import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
Vue.prototype.$uikit = UIkit
/*UIkit.util.on('.scheme__drop', 'show', function () {
  document.querySelectorAll('.scheme__map_path-container > .uk-inline').forEach(item =>  {
    item.addEventListener('click', function(e){
      e.target.closest('.uk-inline').style.zIndex = '6'
    })
    item.style.zIndex = '5'
  })
  /!*$(this).parents('.uk-inline').css('z-index', '6');*!/
});
UIkit.util.on('.scheme__drop', 'hide', function () {
  document.querySelectorAll('.scheme__map_path-container > .uk-inline').forEach(item =>  {
    item.style.zIndex = '5'
  })
  /!*$(this).parents('.uk-inline').css('z-index', '6');*!/
});*/
/*
let bubbles = document.querySelectorAll('.scheme__map_path-container .uk-inline')
let bubblesIcon = document.querySelectorAll('.scheme__map_path-container .uk-inline button')
let modal = document.querySelector('.test')
   for (let i = 0; i < bubbles.length; i++) {
      const clickedItem = bubbles[i];
      clickedItem.style.zIndex = '5'
      // Add an event listener to each item
      clickedItem.addEventListener("click", function(e) {
        // Remove class from all items
        for (let j = 0; j < bubbles.length; j++) {
          const item = bubbles[j];
          item.classList.remove('uk-open')
          modal.style.display = 'none'
          item.style.zIndex = '5'
        }

        // Add class to the clicked item
        clickedItem.style.zIndex = '6';
        modal.style.display = 'block'
        console.log(modal.offsetWidth )
        console.log(modal.getBoundingClientRect().right)
        console.log(window.innerWidth)
        console.log(clickedItem.getBoundingClientRect().right)
        console.log(modal.getBoundingClientRect().right)
        /!*modal.style.left = clickedItem.offsetLeft  + 'px'*!/
        if ((clickedItem.getBoundingClientRect().right + modal.offsetWidth) > window.innerWidth) {
          modal.style.right = 200 + 'px'
          modal.style.left = ''
        } else {
          modal.style.left = clickedItem.offsetLeft  + 'px'
          modal.style.right = ''
        }
        modal.style.top = clickedItem.offsetTop - 75  + 'px'
      });
    }
*/

/*
document.querySelectorAll('.scheme-switcher > li .scheme__bottom label').forEach(button  => {

})*/
const yachtSlider = document.querySelectorAll('.yacht__slider');
yachtSlider.forEach(element => {
/*  UIkit.util.on(element, 'itemshown', function(e) {
    // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
    element.querySelector('.slider_number').textContent = (('0' + (e.detail[0].index + 1)).slice(-2));
  });*/
});

UIkit.util.on('.tenancy-advantages__slider', 'itemshown', function(e) {
  // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
  let numbWrapper = document.querySelector('.tenancy-advantages__slider');
  numbWrapper.querySelector(`.slider_number`).textContent = (e.detail[0].index + 1);
});

/*UIkit.util.on('.tenancy-advantages__slider', 'itemshown', function(e) {
  // $('#yacht__slider1 .slider_number').text(e.detail[0].index + 1);
  $('.tenancy-advantages__slider').find('.slider_number').text(e.detail[0].index + 1);

});*/


// видео ютуб
/*let video = {
  init: function() {
    video.play();
  },
  play: function() {
    document.querySelector('body').addEventListener('click', '#play-video-btn', function(e) {
      video.setSrc(this);
    });
  },
  setSrc: function(el) {
    if (el) {
      var video_id = el.getAttribute('id');
      var url = '//www.youtube.com/embed/' + video_id + '?enablejsapi=1&version=3&showinfo=0&playerapiid=ytplayer&autoplay=1';
/!*      document.querySelector('img#embed-video-preview').hide();
      document.querySelector('img#embed-video-preview')('#play-video-btn').hide();
      document.querySelector('img#embed-video-preview')('iframe#embed-video-frame').attr('src', url).fadeIn();*!/
    }
  }
}
video.init();*/

// видео обычное
let videoContainer = document.querySelectorAll('#video');
videoContainer.forEach(video => {
  video.addEventListener('click', function (e) {
    if(video.querySelector('.video').paused){
      video.querySelector('.playpause').style.display = 'none'
      video.querySelector('.video').play()
    } else {
      video.querySelector('.playpause').style.display = 'flex'
      video.querySelector('.video').pause()
    }
  })
})
/*
$('.video').parent().click(function () {
  if($(this).children(".video").get(0).paused){
    $(this).children(".video").get(0).play();
    $(this).children(".playpause").hide();
  }else{
    $(this).children(".video").get(0).pause();
    $(this).children(".playpause").show();
  }
});
*/
/*function menuCheck() {
  let menu_attr = document.querySelector("#offcanvas-nav").classList.contains("uk-open");
  if (menu_attr) {
    document.querySelector('.header_top_menu').classList.add('open');
  } else {
    document.querySelector('.header_top_menu').classList.remove('open');
  }
}

UIkit.util.on('#offcanvas-nav', 'shown', function () {
  menuCheck();
});
UIkit.util.on('#offcanvas-nav', 'hidden', function () {
  menuCheck();
});*/

/*
// инпут года
$('.input_archive .select').each(function(){
  var $this = $(this)
  var $styledSelect = $(this).find('.select-styled');
  var $listItems = $(this).find('li');
  $styledSelect.click(function(e) {
    e.stopPropagation();
    $('div.select-styled.active').not(this).each(function(){
      $(this).removeClass('active').next('ul.select-options').fadeOut('fast');
    });
    $(this).toggleClass('active').next('ul.select-options').fadeToggle('fast');
  });
  $listItems.click(function(e) {
    $styledSelect.text($(this).text()).removeClass('active');
    $('.select-options').fadeOut('fast');
  });
  $(document).click(function() {
    $styledSelect.removeClass('active');
    $('.select-options').fadeOut('fast');
  });
});
*/


/*
let img = document.createElement('img');
img.src = "preload.png"; // (*)
*/


// preloader on loading for every page
// document.querySelector('.preloader2__slide').style.opacity = '1'


// preloader on loading for every page


/*if(document.querySelector('#preloader2')) {
  document.querySelector('.preloader2__slide').style.opacity = '1'

  function counter(ms, className){
    let counter = 0;
    let interval = setInterval(() => {
      document.querySelector(className).textContent = `${++counter}%`;
      counter === 100 ? clearInterval(interval) : false;
    }, ms)
  }
  counter(10, '.klademug')



  setTimeout(() => {
    let preloaderEl2 = document.querySelector('#preloader2');
    preloaderEl2.classList.add('hidden');
    setTimeout(() => {
      let preloaderEl2 = document.querySelector('#preloader2');
      preloaderEl2.classList.add('hiddenBlock');
    }, 2100);
  }, 2000);
}*/


if(document.querySelector('.modal-calculation')) {
  /*if (window.innerWidth <= 959) {
    document.querySelector('.modal-calculation__slide .form_politic').innerHTML = `<div class='modal-calculation__slide4__bottom'></div>`
    document.querySelector('#calculation__slide4-submit').innerHTML = "<div class='calculation__slide4-submit__cont'></div>"
    /!*document.querySelector('.calculation__slide4-submit__cont').appendTo('.modal-calculation__slide4__bottom');*!/
  }*/



//функция которая меняет слайды расчетов
/*   function move(direction) {
    let bar = document.querySelector('#modal-calculation__progressbar');
    let procent = document.querySelector('#modal-calculation__progress__procent')
    let current = document.querySelector('.current')

    if(direction) {
      current.classList.remove('current')
      current.style.display = 'none'
      current.nextElementSibling.style.display = 'block'
      current.nextElementSibling.classList.add('current');
      bar.value += 30;
      procent.textContent = bar.value + '%';
    } else {
      current.classList.remove('current')
      current.style.display = 'none'
      current.previousElementSibling.style.display = 'block'
      current.previousElementSibling.classList.add('current');
      bar.value -= 30;
      procent.textContent = bar.value + '%';
      // bar.value = bar.value - 30;
    }

    //если больше 90 скрываем первый футер у расчетов и ставим прогресс бар в 0
    if(bar.value > 90) {
      bar.value = 0;
      procent.textContent = bar.value + '%';
      document.querySelector('#modal-calculation__bottom1').style.display = 'none'
      document.querySelector('#modal-calculation__bottom2').style.display = 'block'
    }

    // direction ? $('.current').removeClass('current').hide().next().fadeIn().addClass('current') : $('.current').removeClass('current').hide().prev().fadeIn().addClass('current');
  } */


/*   document.querySelector('.modal-calculation__arr_next').addEventListener('click',function (e) {
    if(e.currentTarget.classList.contains('active')) {
      let last = Array.from(document.querySelectorAll('.modal-calculation__slide')).pop();
      //console.log('yes')
      if (!last.classList.contains('current')) {
        move(true)
      } */
      /*    if (!document.querySelector('.modal-calculation__slide').last().hasClass('current')) move(true);
          if($('.modal-calculation__slide.current').index() == 1) {
            checkedCalculationDates();
          }
          if($('.modal-calculation__slide.current').index() == 2) {
            $(this).addClass('active');
          }

          if($('.modal-calculation__slide.current').index() == 3) {
            checkedCalculationNameAndCall();
          }*/

/*     }
  }); */

/*   document.querySelector('.modal-calculation__arr_prev').addEventListener('click',function () {
    if (!document.querySelector('.modal-calculation__slider').firstElementChild.classList.contains('current')) {
      move(false)
    } */
/*    if($('.modal-calculation__slide.current').index() != 3) {
      document.getElementById('calculation__slide4-submit').disabled = true;
      $('.modal-calculation__arr_next').removeClass('modal-calculation__arr_next-fin');
    }
    if($('.modal-calculation__slide.current').index() == 2) {
      $('.modal-calculation__arr_next').addClass('active');
    }*/
 // });


//отслеживаем измениние инпута range для расчетов
/*   document.getElementById("modal-calculation__range-input__in").addEventListener("input", function(e) {
    var rng = document.getElementById('modal-calculation__range-input'); //rng - это ползунок
    var i1= document.getElementById('modal-calculation__range-input__in'); // i1 - input
    e.currentTarget.value = e.currentTarget.value.replace(/\D/, '')

    if(i1.value >= 400) {
      i1.value = 400;
      rng.value = 400;
    }
    if( i1.value.length >= 1) {
      rng.value=i1.value;
    }
  }, false);

  document.getElementById("modal-calculation__range-input__in").addEventListener("change", function() {
    var rng=document.getElementById('modal-calculation__range-input'); //rng - это ползунок
    var i1=document.getElementById('modal-calculation__range-input__in'); // i1 - input
    if( i1.value.length == 0) {
      i1.value = 0;
      rng.value = 0;
    }
  }, false);

  document.getElementById("modal-calculation__range-input").addEventListener("input", function() {
    var rng=document.getElementById('modal-calculation__range-input'); //rng - это ползунок
    var i1=document.getElementById('modal-calculation__range-input__in'); // i1 - input
    i1.value=rng.value;
  }, false); */


//проверка на выбор radio в расчете стоимости мероприятия
/*   document.querySelectorAll('.modal-calculation__middle__types .modal-calculation__label').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.modal-calculation__arr_next').classList.add('active');
    })
  }); */


//прячем финальный футер у расчетов
  //document.querySelector('#modal-calculation__bottom2').style.display = 'none';
//рестарт расчетов
/*   document.querySelector('#modal-calculation__link-restart').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.modal-calculation__slide.current').style.display = 'none'
    document.querySelector('.modal-calculation__slide.current').classList.remove('current');
    document.querySelector('.modal-calculation__slider').firstElementChild.classList.add('current')
    document.querySelector('.modal-calculation__slider').firstElementChild.style.display = 'block'
    document.querySelector('#modal-calculation__bottom2').style.display = 'none'
    document.querySelector('#modal-calculation__bottom1').style.display = 'flex'
  }); */

}










/*
//проверка на имя и телефон расчете стоимости меропрития
function checkedCalculationNameAndCall() {
  if(document.getElementById('modal-calculation__slide4-name').value.length > 0 && document.getElementById('modal-calculation__slide4-call').value.length && $("#calculation__slide4-agree").prop('checked')) {
    $('.modal-calculation__arr_next').addClass('active');
    document.getElementById('calculation__slide4-submit').disabled = false;
    $('.modal-calculation__arr_next').addClass('modal-calculation__arr_next-fin');
  } else {
    document.getElementById('calculation__slide4-submit').disabled = true;
    $('.modal-calculation__arr_next').removeClass('active');
    $('.modal-calculation__arr_next').removeClass('modal-calculation__arr_next-fin');
  }
}
document.getElementById('modal-calculation__slide4-name').addEventListener('input', function() {
  checkedCalculationNameAndCall();
});
document.getElementById('modal-calculation__slide4-call').addEventListener('change', function() {
  checkedCalculationNameAndCall();
});
document.querySelector('.modal-calculation__slide4 .form_politic label').addEventListener('click', function() {
  checkedCalculationNameAndCall();
});

document.querySelector('.modal-calculation__arr_next').addEventListener('click', function() {
  if(this.classList.contains('modal-calculation__arr_next-fin')) {
    $('form#quest_form').submit();
  }
});



//проверка на время и дату в расчете стоимости меропрития
function checkedCalculationDates() {
  if(datetimepickerTimeVal.length > 0 && document.getElementById('datepicker-inn').value.length > 0) {
    $('.modal-calculation__arr_next').addClass('active');
  } else {
    $('.modal-calculation__arr_next').removeClass('active');
  }
}



//переключатели слайдов у расчетов
$('.modal-calculation__arr_next').click(function () {
  if($(this).hasClass('active')) {
    if (!$('.modal-calculation__slide').last().hasClass('current')) move(true);
    if($('.modal-calculation__slide.current').index() == 1) {
      checkedCalculationDates();
    }
    if($('.modal-calculation__slide.current').index() == 2) {
      $(this).addClass('active');
    }

    if($('.modal-calculation__slide.current').index() == 3) {
      checkedCalculationNameAndCall();
    }

  }
});

$('.modal-calculation__arr_prev').click(function () {
  if (!$('.modal-calculation__slide').first().hasClass('current')) move(false)
  if($('.modal-calculation__slide.current').index() != 3) {
    document.getElementById('calculation__slide4-submit').disabled = true;
    $('.modal-calculation__arr_next').removeClass('modal-calculation__arr_next-fin');
  }
  if($('.modal-calculation__slide.current').index() == 2) {
    $('.modal-calculation__arr_next').addClass('active');
  }
});

//функция которая меняет слайды расчетов
function move(direction) {
  var bar = document.getElementById('modal-calculation__progressbar');

  if(direction) {
    $('.current').removeClass('current').hide().next().fadeIn().addClass('current');
    bar.value += 30;
    $('#modal-calculation__progress__procent').text(bar.value + '%');
  } else {
    $('.current').removeClass('current').hide().prev().fadeIn().addClass('current');
    bar.value -= 30;
    $('#modal-calculation__progress__procent').text(bar.value + '%');
    // bar.value = bar.value - 30;
  }

  //если больше 90 скрываем первый футер у расчетов и ставим прогресс бар в 0
  if(bar.value > 90) {
    bar.value = 0;
    $('#modal-calculation__progress__procent').text(bar.value + '%');
    $('#modal-calculation__bottom1').hide();
    $('#modal-calculation__bottom2').fadeIn();
  }

  // direction ? $('.current').removeClass('current').hide().next().fadeIn().addClass('current') : $('.current').removeClass('current').hide().prev().fadeIn().addClass('current');
}

//прячем финальный футер у расчетов
$('#modal-calculation__bottom2').hide();
//рестарт расчетов
$('#modal-calculation__link-restart').click(function(e) {
  e.preventDefault();
  $('.modal-calculation__slide.current').removeClass('current').hide();
  $('.modal-calculation__slide').first().addClass('current').fadeIn();
  $('#modal-calculation__bottom2').hide();
  $('#modal-calculation__bottom1').fadeIn();
});
*/
