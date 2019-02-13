require("dotenv").config();

var Spotify = require('node-spotify-api');

var keys = require("./key.js");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var moment = require("moment");

var dotenv = require("dotenv");

var inquirer = require("inquirer");


var fs = require("fs");


// Grab the choice which will always be the third node argument.

var choice = process.argv[2];

var actionName = process.argv.slice(3).join(" ");

console.log(actionName);

choices(choice,actionName);

function choices(choice, actionName)
{
switch (choice) {
    case "concert-this":
        concert(actionName);
        break;

    case "spotify-this-song":
        spotifySong(actionName);
        break;

    case "movie-this":
        movie(actionName);
        break;

    case "do-what-it-says":
        says();
        break;
    default:
        console.log("I don't know what you want moron");
        break;
}
}

function concert(actionName) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + actionName + "/events?app_id=codingbootcamp";
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            console.log("Name : " + response.data[0].venue.name);
            console.log("Location : " + response.data[0].venue.city + "," + response.data[0].venue.region);
            console.log("Date : " + moment(response.data[0].datetime).format("MM/DD/YYYY"))
        }
    );
}

function spotifySong(actionName) {

    if (!actionName) {
        actionName = "The Sign by Ace of Base";
     
    }

    spotify
    .search({ type: 'track', query: actionName, limit:5 })
  .then(function(data) {
    var items = data.tracks.items;
    for (let i = 0; i < items.length; i++ ) {
        artistslist  = items[i].artists
       
        for(var j=0;j<artistslist.length;j++)
        {
            var  artist = items[i].artists[j].name;
           
           
        }
       // var artist = artistarr.slice(0).join(",");
    
     console.log(artist);
      var songName = items[i].name;
      var link = items[i].external_urls.spotify;
      var album = items[i].album.name;

      console.log("- " + (i + 1) + " -");
      console.log(`\tArtist(s): ${artist}`);
      console.log(`\tSong Name: ${songName}`);
      console.log(`\tLink: ${link}`);
      console.log(`\tAlbum: ${album}`);
    }

  })
  .catch(function(err) {
    console.log(err);
  });
}

function movie(actionName) {
    if (!actionName) {
        actionName = "Mr. Nobody";
        console.log("If you haven't watched Mr. Nobody, then you should watch this \n It's on Netflix!");
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + actionName + "&y=&plot=short&&tomatoes=true&apikey=trilogy";
    console.log(queryUrl)
    axios
        .get(queryUrl)
        .then(function (response) {
            console.log("The movie's title is : " + response.data.Title);
            console.log("The movie's year is : " + response.data.Year);
            console.log("The movie's rating is : " + response.data.imdbRating);
            let rtRating = response.data.Ratings
              console.log(rtRating[1].Source);
            for (var i = 0; i < rtRating.length; i++) {
                if (rtRating[i].Source === 'Rotten Tomatoes') {
                    console.log("Rotten Tomatoes Rating of the movie : " + rtRating[i].Value)
                }
            }
            console.log("Country where the movie was produced is : " + response.data.Country);
            console.log("Language of the movie is : " + response.data.Language);
            console.log("Plot of the movie : " + response.data.Plot);
            console.log("Actors in the movie : " + response.data.Actors);
        });
}

function says() {
    fs.readFile("./random.txt", "utf-8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        dataarr = data.split(",");
        choice = dataarr[0];
        console.log(choice);
        var inquirer = require("inquirer");
        inquirer
            .prompt([
                // Here we create a basic text prompt.
                {
                    type: "input",
                    message: "What is the movie name/ Artist name?",
                    name: "artname"
                },
                // Here we create a basic password-protected text prompt.

                // Here we ask the user to confirm.
                {
                    type: "confirm",
                    message: "Are you sure:",
                    name: "confirm",
                    default: true
                }
            ])
            .then(function (inquirerResponse) {
                // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
                if (inquirerResponse.confirm) {
                    console.log(inquirerResponse.artname);
                    actionName = inquirerResponse.artname;
                    choices(choice, actionName);
                }
                else {
                    console.log("come again when you are more sure.\n");
                }
            });
    });
}