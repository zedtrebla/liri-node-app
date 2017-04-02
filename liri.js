var fs = require("fs");


var Twitter = require('twitter');

client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet); 
  console.log(response); 
});


// lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback)
// search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)
// get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/ 

var spotify = require('spotify');

function Song = (artist, songName, album){
    this.artist = artist;
    this.songName = songName;
    this.album = album;
}
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    counsel.log(Song)
});

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});


var movieName = "";

function Movie = (title, year, rating, country, language, plot, actors) {
    this.title = title;
    this.year = year;
    this.rating = rating;
    this.country = country;
    this.language = language;
    this.plot = plot;
    this.actors = actors;
};
  
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

console.log(movie;
  

