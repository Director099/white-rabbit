'use strict';

// $('.selectpicker').selectpicker({
//     dropupAuto: false
// });

$('input[type="range"]').rangeslider({
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

          $(".parameter__total span").eq(0).text(shine + "%");
          $(".parameter__total span").eq(1).text(time);
          $(".parameter__total").eq(2).text(price);
        }
      });
    }
});


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
  loop: true,
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

$('input[type=tel]').mask("+7 (000) 000 00 00");

// $(document).on("focus", 'input[type="tel"]', function() {
//   var value = $.trim($('input[type=tel]').val());
//   if(value.length > 0) {

//   } else {
//     $(this).val("+7 (")
//   }
// })


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

// Переключение в хедере

$(".main-block__toggle").on("click", function() {
  console.log($("[data-woman-teeth]"))
  $("#woman-teeth").toggleClass("fullpage__woman-img--none");
  $(".main-block__toggle").toggleClass("main-block__toggle--active");
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
