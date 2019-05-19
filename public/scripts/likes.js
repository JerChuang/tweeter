// file for manipulating like function
// check data attribute 'liked' - if true - do not update data, return to false state - green heart
//                                if false - update data, switch to true state - red heart
$(document).ready(function() {
  $('.tweets').on('click','.like', function(){
    let info = $(this).parent().parent().data();
    if(!info.liked){
      $(this).attr('src','/images/redHeart.png');
      info.liked = true;
      info.likes += 1;
    } else if (info.liked){
      $(this).attr('src','/images/heart.png');
      info.liked  = false;
      info.likes -= 1;
    }
    $(this).siblings('span.likeCount').text(info.likes);

    $.post(`/tweets/${info.postID}`, { postID: info.postID, liked: info.liked, likes: info.likes });

  })
});



