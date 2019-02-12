require("dotenv").config();

var keys = require("./key.js");

var spotify = new Spotify(keys.spotify)

var axios = require("axios");

// Grab the movieName which will always be the third node argument.
var choice = process.argv[2];
// concert-this




switch (action) {
    case "total":
      total();
      break;
  
    case "deposit":
      deposit();
      break;
  
    case "withdraw":
      withdraw();
      break;
  
    case "lotto":
      lotto();
      break;
    default:
      console.log("I don't know what you want moron");
      break;
  }

// ### What Each Command Should Do

// 1. `node liri.js concert-this <artist/band name here>`

//    * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

//      * Name of the venue

//      * Venue location

//      * Date of the Event (use moment to format this as "MM/DD/YYYY")



// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Release Year: " + response.data.Year);
  }
);

axios
  .get("http://www.omdbapi.com/?t=the+notebook&y=&plot=short&apikey=trilogy")
  .then(function(response) {
    // Then we print out the imdbRating
    console.log("The movie's rating is: " + response.data.imdbRating);
  });

// spotify-this-song




// movie-this



// do-what-it-says
