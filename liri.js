require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");

var Twitter = require("twitter");
var client = new Twitter(keys.twitter);

var SpotifyApi = require('node-spotify-api');

var spotify = new SpotifyApi(keys.spotify);

var random = require("./random.txt");
