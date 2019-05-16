/* eslint-disable no-console */
/* eslint-disable no-undef */

$(document).ready(function() {
  // --- our code goes here ---
  $('#nav-bar .compose').on('click', function () {
    $( ".new-tweet" ).slideToggle( "slow", function() {
      // Animation complete.
    });
  })
});

