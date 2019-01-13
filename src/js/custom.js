'use strict';

// $(function () {
//     $.scrollUp({
//         scrollText: '',
//     });
// });

// Плавный скол с навигации

/* $(".scrollto > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
}); */

// Плавный скол с навигации

$('.result__slider').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
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
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:4
    }
  }
})
