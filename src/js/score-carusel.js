var swiper = new Swiper('.swiper-container--score', {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
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