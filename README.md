# liri-node-app

The results for each task is in the img folder.
https://github.com/IndraNal/liri-node-app/tree/master/img

movie-this command
-----------------------------------------------------------------------------------------------
node liri.js movie-this '<movie name here>

  
    * This will search the movie API (`"http://www.omdbapi.com/?t=" + actionName + "&y=&plot=short&&tomatoes=true&apikey=trilogy"`) for an movie and render the following information
  

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
       
 If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.

concert-this command
---------------------------------------------------------------------------------------------------------------------------------
node liri.js concert-this <artist/band name here>

   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
  ```
     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")  ```
-------------------------------------------------------------------------------------------------------------------------------------
Spotify-this command
-------------------------------------------------------------------------------------------------------------------------------
node liri.js spotify-this-song '<song name here>

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
   ---------------------------------------------------------------------------------------------------------------------------------
   do-what-it-says command
   ----------------------------------------------------------------------------------------------------------------------------------
   node liri.js do-what-it-says

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.
     
     ---------------------------------------------------------------------------------------------------------------------------------
   
