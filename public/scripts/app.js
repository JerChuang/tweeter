/* eslint-disable no-console */
/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  // --- our code goes here ---
 // Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
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
  "created_at": 1461116232227
}

function createTweetElement(Object){
  // Object.user.name = name in header
  // Object.user.avatars.regular = avatar image in header
  // Object.user.handle = handle in header
  // Object.content.text = main text
  // Object.created_at = created time
  let $output = $('<article></article>');
  let $header = $('<header></header>');
  let $image = $(`<img class="avatar" src=${Object.user.avatars.regular} /> `)
  let $handle = $('<span></span').addClass('handle').text(Object.user.handle);
  let $content = $('<div></div>').addClass('content').text(Object.content.text);
  let $footer = $('<footer></footer>').text(Object.created_at).append(`<img class="like" src="/images/heart.png" />`);

  $output = $output.append($header.append($image).append(Object.user.name, $handle)).append($content).append($footer);

return $output
}

/* <article>
      <header>
        <img class="avatar" src="/images/bird.png" /> Bill Reid
        <span class="handle"> @ReidB </span>
      </header>
      <div class = "content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliquaasdfhb d d f f 140
      </div>         
      <footer>
        10 days ago <img class="like" src="/images/heart.png" /> 
      </footer>
  </article> */


var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  
 
});
