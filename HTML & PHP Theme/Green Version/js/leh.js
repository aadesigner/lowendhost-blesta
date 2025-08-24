$(document).ready(function() {

$(window).scroll(function () {
    console.log($(window).scrollTop())
  if ($(window).scrollTop() > 48) {
    $('#scroll').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 49) {
    $('#scroll').removeClass('navbar-fixed');
  }
});
});
