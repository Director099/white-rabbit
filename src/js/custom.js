'use strict';

if($(window).width() >= 768) {
  $('.selectpickers').selectpicker({
      dropupAuto: false
  });
}

$('#alt-input').rangeslider({
    polyfill : false,

    onSlide: function(position, value) {
      var altInput = $('#alt-input');
      var newValue  = this.max - this.value + this.min;
      altInput.val(newValue);

      $(".whitening__desk").removeClass("whitening__desk--active");
      $(".bleach__woman-img").removeClass("bleach__woman-img--active");

      $(".bleach__woman-img").each(function(index, elem) {
        if(newValue === index) {
          // console.log(index)
          $(this).addClass("bleach__woman-img--active");
        }
      });

      $(".whitening__desk").each(function(index, elem) {
        if(newValue === index) {
          $(this).addClass("whitening__desk--active");
          var shine = $(this).data("shine");
          var time = $(this).data("time");
          var price = $(this).data("price");
          var nameService = $(this).data("service");

          $(".parameter__total span").eq(0).text(shine + "%");
          $(".parameter__total span").eq(1).text(time);
          $(".parameter__total").eq(2).text(price);
          $(".parameter__title").text(nameService)
        }
      });

    }
});

$('#toggle').rangeslider({
  polyfill : false,

  rangeClass: 'toggle-sliders',
  disabledClass: 'toggle-sliders--disabled',
  horizontalClass: 'toggle-sliders--horizontal',
  verticalClass: 'toggle-sliders--vertical',
  fillClass: 'toggle-sliders__fill',
  handleClass: 'toggle-sliders__handle',

  onSlideEnd: function(position, value) {

    if (value === 0) {
      $(".toggle-sliders").removeClass("toggle-sliders--active");
      $("#woman-teeth").addClass("fullpage__woman-img--none");
    } else {
      $(".toggle-sliders").addClass("toggle-sliders--active");
      $("#woman-teeth").removeClass("fullpage__woman-img--none");
    }
  }
});

// Переключение в хедере

$(".toggle-sliders__handle").html("<span aria-label=\"Переключатель\"></span>");


$(".whitening__desk").on("click", function(e) {
  var $inputRange = $('input[type="range"]');
  var value = $(this).data("number");

  $inputRange.val(value).change();
  $inputRange.rangeslider('update', true);
});

var videoSlider = $(".slide-video__slides");

function setSlideCount(slideCount) {
  var $el = $('.slide-video__total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.slide-video__current');
  $el.text(currentSlide + 1);
}

videoSlider.on('init', function(event, slick) {
  setSlideCount(slick.slideCount);
})

videoSlider.slick({
  dots: false,
  vertical: true,
  arrows: false,
  draggable: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        draggable: true,
        vertical: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        draggable: true,
        slidesToShow: 3,
        vertical: false
      }
    },
    {
      breakpoint: 450,
      settings: {
        draggable: true,
        slidesToShow: 2,
        vertical: false
      }
    }
  ]
});


videoSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});

$('.slide-video__arrow--prev').on('click', function() {
  videoSlider.slick('slickPrev');
});

$('.slide-video__arrow--next').on('click', function() {
  videoSlider.slick('slickNext');
});


// фото слайдер

$('.result__slider').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  responsive:{
    0:{
        items: 1,
        center: true
    },
    400:{
      // items: 3,
      items: 2
    },
    768:{
        items:3
    },
    1200:{
        items:5
    }
  }
})

var stageSlider = $(".stages__slider");

stageSlider.owlCarousel({
  loop: false,
  margin: 95,
  nav: true,
  dots: false,
  autoHeight: true,
  URLhashListener: false,
  responsive: {
    0: {
      items: 1,
      autoWidth: false,
    },
    992: {
      autoWidth: true,
    }
  }
})


stageSlider.on('changed.owl.carousel', function(evt) {
  var current = evt.item.index;
  $(".stages__dot").removeClass("stages__dot--active");
  $(".stages__dot").eq(current).addClass("stages__dot--active");
})

$('.catalog__slider').owlCarousel({
  // loop: true,
  margin: 30,
  nav: true,
  dots: true,
  responsive:{
    0: {
      items:1
    },
    768: {
      items:2
    },
    992: {
      items:3
    },
    1200: {
      items:4
    }
  }
})

$(".service__question").hover(
  function() {
    var current = $(this).parents(".service").find(".service__answer");
    current.addClass("service__answer--active");
  },
  function() {
    var current = $(this).parents(".service").find(".service__answer");
    current.removeClass("service__answer--active");
  }
)

$(".service__question").on('click', function() {
  if($(window).width() < 1200) {
    $(".service__question").fadeOut();
  }
})

$(".service__close").on("click", function() {
  $(".service__answer").removeClass("service__answer--active");
  $(".service__question").fadeIn();
});

// $('input[type=tel]').mask("+7 (000) 000 00 00");

[].forEach.call( document.querySelectorAll('input[type=tel]'), function(input) {
var keyCode;
function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    var pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function(a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
    i = new_value.indexOf("_");
    if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
    }
    var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function(a) {
            return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
    if (event.type == "blur" && this.value.length < 5)  this.value = ""
}

input.addEventListener("input", mask, false);
input.addEventListener("focus", mask, false);
input.addEventListener("blur", mask, false);
input.addEventListener("keydown", mask, false)

});

// Друпдаун котегории товара

$(".view-tovar__btn").on("click", function() {
  $(".view-tovar__btn").toggleClass("view-tovar__btn--active");
  $(".view-tovar__nav").toggleClass("view-tovar__nav--active");
})

$(".nav__link").on("click", function() {
  var textCategory = $(this).text();
  $(".view-tovar__btn").text(textCategory);
  $(".view-tovar__btn").removeClass("view-tovar__btn--active");
  $(".view-tovar__nav").removeClass("view-tovar__nav--active");
})



$('[data-toggle="datepicker"]').mask("00/00/0000");

$('[data-toggle="datepicker"]').datepicker({
  format: 'dd/mm/yyyy',
  days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  weekStart: 1,
  startView: 0,
  autoHide: true,
  zIndex: 99999999,
  disabledClass: "disabled",
  startDate: new Date(),
  yearFirst: false
});

// Плавный скол с навигации

$("[data-scroll]").click(function () {
  $(".page-header__toggle").toggleClass("page-header__toggle--active");
  $(".page-header__toggle-btn").removeClass("page-header__toggle-btn--active");
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  $("data-fancybox='menu'").close($("[data-scroll]"));
  return false;
});

$(".page-header__toggle-btn").on("click", function() {
  $(".page-header__toggle").toggleClass("page-header__toggle--active");
  $(".page-header__toggle-btn").toggleClass("page-header__toggle-btn--active");
})

$("[data-fancybox='menu']").fancybox({
  touch: false,
  beforeClose : function( instance, slide ) {
    $(".page-header__toggle").removeClass("page-header__toggle--active");
    $(".page-header__toggle-btn").removeClass("page-header__toggle-btn--active");
  }
});

$("form").submit(function(e) {
  if ($(this).find('.js-field').val().length > 0) {
    console.log($('.js-field').val().length);
    e.preventDefault();
    return false
  }
});
