$('a[id="match-h2h-tab"]').on('shown.bs.tab', function (e) {
  $('#nav-match-h2h-stats-pannel').toggleClass('active');
})
$('a[id="match-h2h-tab"]').on('hide.bs.tab', function (e) {
  $('#nav-match-h2h-stats-pannel').toggleClass('active');
})