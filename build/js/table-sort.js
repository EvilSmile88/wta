$(document).ready(function() {
  $('#stats-table').on('click', '.table-sort', function() {
    $(this).toggleClass("table-sort--desc");
  })
})