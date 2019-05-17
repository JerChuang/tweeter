"use strict";

let ObjectID = require('mongodb').ObjectID


// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insertOne(newTweet);
      callback(null, true);  
    },
    getTweets: function(callback) {
      db.collection('tweets').find().toArray((err, tweets) => {
        if (err) {
          return callback(err);
        }
        callback(null, tweets);
      });
    },
    updateTweet: function (data, callback){
      db.collection('tweets').updateOne({_id: ObjectID(data.postID)}, {$set: {liked: (data.liked=="true"), likes: data.likes}})
      
      callback(null, true);
    }
 
  };
}


 