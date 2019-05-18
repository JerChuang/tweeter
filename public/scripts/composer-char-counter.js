// count number of characters in textarea, change color counter if exceeding 140 limit
$(document).ready(function() {
  $(`.new-tweet textarea[name = 'text']`).on('keyup', function () {
    let count = 140 - $(this).val().length;
    $(this).siblings('.counter').text(count);
    if (count < 0){
      $(this).siblings('.counter').css('color', 'red')
    } else {
      $(this).siblings('.counter').css('color', '#244751')
    }
  })
});