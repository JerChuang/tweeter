"use strict";

let ObjectID = require('mongodb').ObjectID
// Simulates the kind of delay we see with network or filesystem operations
// const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
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
      console.log(data);
      db.collection('tweets').updateOne({_id: ObjectID(data.postID)}, {$set: {liked: data.liked}})
      
      callback(null, true);
      // console.log(db.collection('tweets').find({_id:data.postID}))
    }
 
  };
}


 