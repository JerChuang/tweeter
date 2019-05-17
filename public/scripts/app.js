// Main JS file for creating tweets
// Making sure all DOM manipulation happens after DOM is ready
$(document).ready(function() {
  //function to fetch all tweets in database and add inside the .tweets container
  function renderTweets(Data) {
    for (let object of Data) {
      $('.tweets').prepend(createTweetElement(object))
    }
  }
  //function to fetch only the last entry in database and add to top of the contents inside .tweets container
  function renderNewTweet(Data) {   
    for (let index in Data) {
      if (Number(index) === (Data.length - 1)){
        $('.tweets').prepend(createTweetElement(Data[index]))
      }
    }
  }

  // function to figure out how long since tweet created
  function getTimeSince(timecreated){
    let time = 0; //clear variable in case of pollution;
    time = new Date().valueOf() - timecreated;
    if (time / (1000 * 60 * 60 * 24 * 365) > 1){
      return `${Math.floor(time / (1000 * 60 * 60 * 24 * 365))} years ago`
    } else if (time / (1000 * 60 * 60 * 24 * 7) > 1){
      return `${Math.floor(time / (1000 * 60 * 60 * 24 * 7))} weeks ago`
    } else if (time / (1000 * 60 * 60 * 24) > 1){
      return `${Math.floor(time / (1000 * 60 * 60 * 24))} days ago`
    } else if (time / (1000 * 60 * 60) > 1){
      return `${Math.floor(time / (1000 * 60 * 60))} hours ago`
    } else if (time / (1000 * 60) > 1){
      return `${Math.floor(time / (1000 * 60))} minutes ago`
    } else if (time / (1000) > 1){
      return `${Math.floor(time / 1000)} seconds ago`
    } else {
      return 'just now'
    }
  }

  //function to assemble a tweet's html structure, calling getTimeSince for elapsed time
  function createTweetElement(Object){
    let $image = $(`<img class='avatar' src=${Object.user.avatars.regular} /> `)
    let $handle = $('<span>').addClass('handle').text(Object.user.handle);
    let $content = $('<div>').addClass('content').text(Object.content.text);
    //image for like button is dependent on Object.liked
    let $like = $('')
    if (!Object.liked){
      $like = $(`<img class='like' src='/images/heart.png' />`);
    } else if(Object.liked){
      $like = $(`<img class='like' src='/images/redHeart.png' />`);
    }
    let $flag = $(`<img class='flag' src='/images/flag.png' />`);
    let $time = $('<span>').text(getTimeSince(Object.created_at));

    let $footer = $('<footer>').append($time).append($flag).append($like);
    let $header = $('<header>').append($image).append(Object.user.name, $handle)

    let $output = $('<article>').append($header).append($content).append($footer);

    let dataAttr = { //Object for data attribute 
      liked: Object.liked,
      likes: Object.likes,
      postID: Object._id,
      userHandle: Object.user.handle
    }
    $output.data(dataAttr); //setting data attribute
    return $output
  }

  //Posting tweet on submit
  $('section.new-tweet form').on('submit', function(event){
    event.preventDefault();
    let content = $(this).serialize();
    // Check for errors and display error messages for empty field or over char limit
    let count = Number($('section.new-tweet span.counter').text());
    
    $('.new-tweet span.error').slideUp(function(){   //Displaying error messages inside callback function for slideup to make sure animation finish before new animation starts.
      if (!content.slice(5)){
        $('.new-tweet span.error').slideDown().text('Please enter a message!')
      }
      if ( count < 0) {
        $('.new-tweet span.error').slideDown().text(`You've exceeded the limit of 140 characters`)
      }  
    });
      
    if (!content.slice(5) || count <0){  //return the submit callback function if error, so tweet doesn't get posted
      return
    }

    //posting content to /tweets
    $.post('/tweets', content, function(){  // on post success, call renderNewTweet to fetch latest tweet
      $.ajax({
        url: '/tweets',
        method: 'GET',
        dataType: 'json',
        success: renderNewTweet,
        failure: function() {
          console.log("error");
        }
      });
    });
    this.reset(); //clears form
  });
  
  // function to load all tweets in database on page load, call renderTweets on success to fetch all tweets
  function loadTweets(){
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: renderTweets,
      failure: function() {
        console.log("error");
      }
    });
  }

  loadTweets();
  
});
