'use strict';

// $(function () {
//     $.scrollUp({
//         scrollText: '',
//     });
// });

// Плавный скол с навигации

 $("[data-scroll]").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
});

$(".page-header__toggle-btn").on("click", function() {
  $("body").toggleClass("overflow");
  $(".page-header__toggle").toggleClass("page-header__toggle--active");
  $(".page-header__toggle-btn").toggleClass("page-header__toggle-btn--active");
  $(".menu").toggleClass("menu--active");
})

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
  slidesToScroll: 1
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
        items:1
    },
    450:{
        items:2
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
  autoWidth: true,
  URLhashListener: false,
  items: 1
})


// $(".modal-dialog__arrow--prev").click(function() {
//     modalSlider.trigger('prev.owl.carousel');
// })

// $(".modal-dialog__arrow--next").click(function() {
//     modalSlider.trigger('next.owl.carousel');
// })

stageSlider.on('changed.owl.carousel', function(evt) {
  var current = evt.item.index;
  $(".stages__dot").removeClass("stages__dot--active");
  $(".stages__dot").eq(current).addClass("stages__dot--active");
})

$('.catalog__slider').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
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
