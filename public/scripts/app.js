/* eslint-disable no-console */
/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  // --- our code goes here ---

  function renderTweets(Data) {
    for (object of Data) {
      $('.tweets').prepend(createTweetElement(object))
    }
  }
  //new function added to fetch only the last entry in Data
  function renderNewTweet(Data) {   
    for (index in Data) {
      if (Number(index) === (Data.length - 1)){
        $('.tweets').prepend(createTweetElement(Data[index]))
      }
    }
    
  }

  // function to figure out how long since tweet created
  function getTimeSince(timecreated){
    let time = new Date().valueOf() - timecreated;
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

  function createTweetElement(Object){
    let $output = $('<article>');
    let $header = $('<header>');
    let $image = $(`<img class="avatar" src=${Object.user.avatars.regular} /> `)
    let $handle = $('<span>').addClass('handle').text(Object.user.handle);
    let $content = $('<div>').addClass('content').text(Object.content.text);
    let $footer = $('<footer>').text(getTimeSince(Object.created_at)).append(`<img class="like" src="/images/heart.png" />`);
    
    $header = $header.append($image).append(Object.user.name, $handle)
    $output = $output.append($header).append($content).append($footer);

    return $output
  }
  
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
      return;
    }

    //posting content to /tweets
    $.post('/tweets', content, function(){  // on post success, send get request to /tweets to fetch latest object using renderNewTweet
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
    this.reset();
  });
  
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
