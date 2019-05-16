/* eslint-disable no-console */
/* eslint-disable no-undef */

$(document).ready(function() {
  // --- our code goes here ---

  let displayingForm = true; //checking if we're hiding the form or showing the form
  $('#nav-bar .compose').on('click', function () {
    $( ".new-tweet" ).slideToggle( "slow");
    displayingForm = !displayingForm;
    if(displayingForm){   //if we're showing the form, we want to focus on the textarea
      $(".new-tweet textarea").focus();  
    }
    
  })
});

