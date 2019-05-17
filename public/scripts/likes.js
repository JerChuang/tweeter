// file for manipulating like function
// check data attribute 'liked' - if true - do not update data, return to false state - green heart
//                                if false - update data, switch to true state - red heart
$(document).ready(function() {
    
  $('.tweets').on('click','.like', function(){
    let info = $(this).parent().parent().data();
    console.log(info);
    if(!info.liked){
      $(this).attr('src','/images/redHeart.png');
      info.liked = true;
    } else if (info.liked){
      $(this).attr('src','/images/heart.png');
      info.liked  = false;
    }
   })
});