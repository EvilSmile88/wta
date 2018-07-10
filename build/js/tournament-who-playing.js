var swiper = new Swiper('.swiper-container--who-playing', {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    clickable: true,
    el: '.swiper-pagination'
  },
  breakpoints: {
    1199.98: {
      slidesPerView: 3,
    },
    991.98: {
      centeredSlides: false,
      slidesPerView: 2,
    },
    576: {
      centeredSlides: true,
      slidesPerView: 1,
    },
  },
});

function setNumberFontSize(id) {
  var $quote = $(id);
  for (i = 0; i < $quote.length; i++) {
    var $numChar = $($quote[i]).text().length;
    var $size;
    if($numChar < 3) {
      $size = '6.5em'
    } else {
      $size = 6.5/(0.4*$numChar) +'em';
    }
    $($quote[i]).css("font-size", $size)
  }
};

setNumberFontSize('.ranking-number');