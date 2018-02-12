// 
require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");

var Twitter = require("twitter");
var client = new Twitter(keys.twitter);

var SpotifyApi = require('node-spotify-api');
var spotify = new SpotifyApi(keys.spotify);

// var random = require("./random.txt");

var fs = require("fs");

var userInput = process.argv;
var command = userInput[2];

if (command === "my-tweets") {
client.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=alliasAngela', function(error, tweets, response) {

	if (error) {
		console.log(error);
	}

	for (i=0; i<tweets.length; i++) {
	console.log(tweets[i].text);
    }

  });

if (command === "spotify-this-song") {

}

}

// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window

//Artist(s)
//The song's name
//A preview link of the song from Spotify
//The album that the song is from
//If no song is provided then your program will default to "The Sign" by Ace of Base.

// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }

