# liri-node-app

**LIRI Node App is similar to SIRI, but it is a text interpretation and recognition interface**

*LIRI does the following...*

* Shows last 20 tweets and the date/time of the tweet :bird:
	* Execute this by typing "node liri.js my-tweets" in the command line 

* Retrieves Spotify information when a song name is typed in :musical_note:
	* Execute this by typing "node liri.js spotify-this-song  song name"

* Retrieves detailed movie information when a movie title is typed :clapper:
	* Execute this by typing "node liri.js movie-this movie title"

* LIRI will 'read' and execute text written in the .txt file :pencil:
	* Execute this by typing "node liri.js do-what-it-says"

- If you want to clone this repo and run it, you will need to create your own .env file for it to work. The .env file contains the Twitter API keys and Spotify API keys.

- A JSON file is provided in the repo, but you will have to install the dependencies (dotenv, node-spotify-api, request & Twitter). For example, using command line type "npm install Twitter".