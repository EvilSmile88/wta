var swiper = new Swiper('.swiper-container--videos', {
  slidesPerView: 4,
  spaceBetween: 15,
  slidesPerGroup: 4,
  pagination: {
    clickable: true,
    el: '.swiper-pagination'
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});