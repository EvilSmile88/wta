function toggleSearchMode() {
  $('.navbar').toggleClass('navbar--search');
}
function mobileToggleSearchMode() {
  $('.navbar').toggleClass('navbar--search');
  $('.navbar [aria-expanded=true]').click();
}
