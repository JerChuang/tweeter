/* eslint-disable no-console */
/* eslint-disable no-undef */
$(document).ready(function() {
  // --- our code goes here ---
  $('.new-tweet textarea[name = "text"]').on('input', function () {
    let count = 140 - $(this).val().length;
    $(this).siblings('.counter').text(count);
    if (count < 0){
      $(this).siblings('.counter').css("color", "red")
    } else {
      $(this).siblings('.counter').css("color", "#244751")
    }
  })
});