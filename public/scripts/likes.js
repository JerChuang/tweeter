// file for manipulating like function
// check data attribute 'liked' - if true - do not update data, return to false state - green heart
//                                if false - update data, switch to true state - red heart
$(document).ready(function() {
  $('.tweets').on('click','.like', function(){
    let info = $(this).parent().parent().data();
    if(!info.liked){
      $(this).attr('src','/images/redHeart.png');
      info.liked = true;
      info.likes ++;
    } else if (info.liked){
      $(this).attr('src','/images/heart.png');
      info.liked  = false;
      info.likes --;
    }
    $(this).siblings('span.likeCount').text(info.likes);

    $.post(`/tweets/${info.postID}`, { postID: info.postID, liked: info.liked, likes: info.likes });

  })
});



