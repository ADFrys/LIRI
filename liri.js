
// Define variables and required packages

require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");

var Twitter = require("twitter");
var client = new Twitter(keys.twitter);

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var fs = require("fs");

var userInput = process.argv[2];

// Define function for obtaining song information 
var songInformation = function (songTitleInput, songTitle) {
  for (var j = 3; j < songTitleInput.length; j++) {

  if (j > 3 && j < songTitleInput.length) {
    songTitle = songTitle + "+" + songTitleInput[j];
  }
  else {
    songTitle += songTitleInput[j];
  }
}  

if (songTitle === "") {
songTitle = "Ace of Base The Sign";
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

// Define function for obtaining movie information

var movieInformation = function (movieInput, movieTitle) {
  for (var k = 3; k < movieInput.length; k++) {

  if (k > 3 && k < movieInput.length) {
    movieTitle = movieTitle + "+" + movieInput[k];
  }
  else {
    movieTitle += movieInput[k];
  }
}

if (movieTitle === "") {
  movieTitle = "Mr. Nobody";
}
  var movieURL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";
  request(movieURL, function (error, response, body) {
    if (!error && response.statusCode ===200) {
      console.log("The movie title is: " + JSON.parse(body).Title);
      console.log("The year the movie came out is " + JSON.parse(body).Year);
      console.log("The IMDB Rating of the movie is " + JSON.parse(body).imdbRating);
      console.log("The Rotten Tomatoes Rating of the movie is " + JSON.parse(body).Ratings[1].Value);
      console.log("The country/countries where the movie was produced is: " + JSON.parse(body).Country);
      console.log("The language(s) of the movie is/are: " + JSON.parse(body).Language);
      console.log("The plot is: " + JSON.parse(body).Plot);
      console.log("The actors are: " + JSON.parse(body).Actors);
    }
    return error;
  });
}

//Define function for tweets

var obtainTweets = function () {
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

// If-statement logic for LIRI text commands

if (userInput === "my-tweets") {
	obtainTweets();

}

if (userInput === "spotify-this-song") {
  var songTitleInput = process.argv;
  var songTitle = "";
  songInformation(songTitleInput, songTitle);
  }


if (userInput === "movie-this") {
  var movieInput = process.argv;
  var movieTitle = "";
  movieInformation(movieInput, movieTitle);
}

// Do what it says logic

if (userInput === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  var dataArray = data.split(",");

  if (dataArray[0] === "spotify-this-song") {
    var songTitleInput = dataArray[1];
    var songTitle = "";
    songInformation(songTitleInput, songTitle);
    }

  if (dataArray[0] === "movie-this") {
  	var movieInput = dataArray[1];
  	var movieTitle = "";
    movieInformation(movieInput, movieTitle);
    }

  if (dataArray[0] ==="my-tweets") {
    obtainTweets();
    }
  });
};