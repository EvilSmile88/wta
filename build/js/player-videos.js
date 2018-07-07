var swiper = new Swiper('.swiper-container--videos', {
  slidesPerView: 4,
  spaceBetween: 15,
  pagination: {
    clickable: true,
    el: '.swiper-pagination'
  },
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
});