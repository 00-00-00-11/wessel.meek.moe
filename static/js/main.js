$(function() {
  $('.code-icons i').tooltip();

  toggle_things = function(first, second) {
    $('.' + first).slideUp('fast', function() {
      $('.' + second).slideDown('fast');
    });
  };
});