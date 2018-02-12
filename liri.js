// 
require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");

var Twitter = require("twitter");
var client = new Twitter(keys.twitter);

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// var random = require("./random.txt");

var fs = require("fs");

var userInput = process.argv[2];

if (userInput === "my-tweets") {
  client.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=alliasAngela', function(error, tweets, response) {

	if (error) {
		console.log(error);
	}
  if (!error && response.statusCode === 200) {
	  for (i=0; i<tweets.length; i++) {
	    console.log(tweets[i].text);
      }
    }
  });
}


if (userInput === "spotify-this-song") {
  var songTitle = process.argv[3];
  if (songTitle === undefined) {
    songTitle = "Ace of Base The Sign"
  }
  spotify.search({ type: 'track', query: songTitle, limit: 1}, function(error, data, response) {
      if (error) {
        console.log(error);
      }
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Preview link: " + data.tracks.items[0].preview_url);
        console.log("The album is: " + data.tracks.items[0].album.name);
    });
  }

// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }

