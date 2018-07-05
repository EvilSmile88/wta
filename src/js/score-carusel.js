var swiper = new Swiper('.swiper-container', {
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
var items = $(".swiper-container .score-cell__group" );
for (i = 0; i < items.length; i++) {
  var playersCount = $(items[i]).find('.score-cell__player').length;
  if(playersCount === 4 ) {
    $(items[i]).css("font-size","11px")
    $(items[i]).find("img").css("width","13px")
  }

}
