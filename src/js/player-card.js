function setSinglesRanking() {
  $('button[id="singles-ranking__btn"]').css("visibility","hidden");
  $('button[id="doubles-ranking__btn"]').css("visibility","visible");
  $('.player_ranking .singles-ranking').removeClass("singles-ranking--hide")
  $('.player_ranking .doubles-ranking').addClass("doubles-ranking--hide")
}
function setDoublesRanking() {
  $('button[id="doubles-ranking__btn"]').css("visibility","hidden");
  $('button[id="singles-ranking__btn"]').css("visibility","visible");
  $('.player_ranking .singles-ranking').addClass("singles-ranking--hide")
  $('.player_ranking .doubles-ranking').removeClass("doubles-ranking--hide")
}

function setNumberFontSize(id) {
  var $quote = $(id);

  var $numChar = $quote.text().length;
  var $size;
  if($numChar === 1) {
    $size = '6.5em'
  } else {
    $size = 6.5/(0.7*$numChar) +'em';
  }
  $quote.css("font-size", $size)
};

setNumberFontSize('#ranking-number--doubles');
setNumberFontSize('#tab-ranking-number--doubles');
setNumberFontSize('#ranking-number--singles');
setNumberFontSize('#tab-ranking-number--singles');