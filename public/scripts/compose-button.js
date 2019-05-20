$(document).ready(function() {
  //hiding the form on page load as per requirement
  $('.new-tweet').hide();
  let displayingForm = false; //checking if we're hiding the form or showing the form
  $('.nav-bar__compose').on('click', function () {
    $( '.new-tweet' ).slideToggle();
    displayingForm = !displayingForm;
    if(displayingForm){   //if we're showing the form, we want to focus on the textarea
      $('.new-tweet__textarea').focus();  
    }   
  })
});

