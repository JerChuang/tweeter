/* eslint-disable no-console */
/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  // --- our code goes here ---
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1557935797394
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  
  function renderTweets(Data) {
    for (object of Data) {
      $('.tweets').append(createTweetElement(object))
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
      return `${Math.floor(time / (1000 * 60))} seconds ago`
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

  renderTweets(data);


  // $('.newTweet form').submit(function(event){
  //   event.preventDefault();

  // });

  // $(function() {
  //   var $button = $('#load-more-posts');
  //   $button.on('click', function () {
  //     console.log('Button clicked, performing ajax call...');
  //     $.ajax('more-posts.html', { method: 'GET' })
  //     .then(function (morePostsHtml) {
  //       console.log('Success: ', morePostsHtml);
  //       $button.replaceWith(morePostsHtml);
  //     });
  //   });
  // });





});
