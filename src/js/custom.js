'use strict';

// $(function () {
//     $.scrollUp({
//         scrollText: '',
//     });
// });




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
        vertical: false,
        slidesToShow: 4
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
        items: 3,
        autoWidth: true,
        center: true
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
  nav: false,
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

$('input[type=tel]').mask("+7 (000) 000 00 00");

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
