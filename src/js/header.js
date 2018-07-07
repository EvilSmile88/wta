function toggleSearchMode() {
  $('.navbar').toggleClass('navbar--search');
}
function mobileToggleSearchMode() {
  $('.navbar').toggleClass('navbar--search');
  $('.navbar [aria-expanded=true]').click();
}

// $('nav .dropdown').hover(function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
// }, function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
// });