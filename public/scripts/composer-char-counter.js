// count number of characters in textarea, change color counter if exceeding 140 limit
$(document).ready(function() {
  $('.new-tweet__textarea').on('input', function () {
    let count = 140 - $(this).val().length;
    $(this).siblings('.new-tweet__counter').text(count);
    if (count < 0){
      $(this).siblings('.new-tweet__counter').css('color', 'red')
    } else {
      $(this).siblings('.new-tweet__counter').css('color', '#244751')
    }
  })
});