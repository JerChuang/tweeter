// file for manipulating like function
// check data attribute 'liked' - if true - do not update data, return to false state - green heart
//                                if false - update data, switch to true state - red heart
$(document).ready(function() {
  
  $('.tweets').on('click','.like', function(){
    if(!$(this).data().liked){
      $(this).attr('src','/images/redHeart.png');
      $(this).data('liked',true);
    } else if ($(this).data().liked){
      $(this).attr('src','/images/heart.png');
      $(this).data('liked',false);
    }


   })
});