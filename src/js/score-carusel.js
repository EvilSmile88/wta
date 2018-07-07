var swiper = new Swiper('.swiper-container--score', {
  slidesPerView: 4,
  spaceBetween: 0,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$('.swiper-container--score .swiper-button-prev').attr('tabindex', -1);
$('.swiper-container--score .swiper-button-next').attr('tabindex', -1);