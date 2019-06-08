var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
for (var playIt in library.playlists) {
    var list = library.playlists[playIt];
    var id = list.id;
    var name = list.name;
    var NoOfTracks = list.tracks.length;

    console.log(`${id}: ${name} - ${NoOfTracks} tracks`);
    }
};



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
for (var playIt in library.tracks) {
    var track = library.tracks[playIt];
    var id = track.id;
    var name = track.name;
    var Artist = track.artist;
    var Album = track.album;

   console.log(`${id}: ${name} by ${Artist} (${Album})`);
    }
};

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
console.log(playlistId + ": " + library.playlists[playlistId].name + " - " +  library.playlists[playlistId].tracks.length + " tracks");

for (var PlaylistSongs of library.playlists[playlistId].tracks)
console.log(`${PlaylistSongs} : ${library.tracks[PlaylistSongs].name} by ${library.tracks[PlaylistSongs].artist} (${library.tracks[PlaylistSongs].album})`);
};

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
// accces playlist object
var list = library.playlists[playlistId].tracks;
var adding = list.push(library.tracks[trackId]);
console.log(list);
// append the track id to playlist.tracks

//might not need to console.log but do it so you can see what its doing...
};


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library

var addTrack = function (name, artist, album) {
var newID = uid();

library.tracks[newID] = {id: newID, name, artist, album};
};



// adds a playlist to the library

var addPlaylist = function (name) {
  var newID = uid();

  console.log (library.playlists[newID] = {id: newID, name: name, tracks: []});
};

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

//var printSearchResults = function(query) {

//};

console.log(" ************ -- Print Playlist --  ************************ ");
printPlaylists();
console.log("  *********************************************************  ");

console.log ("  ************ -- Print Tracks --  *************************  ");
printTracks();
console.log("  *********************************************************  ");

console.log (" ************ -- Print Tracks in a Playlist --  ************  ");
printPlaylist("p01");
console.log("  *********************************************************  ");

console.log("  **********  -- adding a Track to the Playlist  -- *********  ");
addTrackToPlaylist("t01", "p01");
console.log("  *********************************************************  ");

console.log (" ************ -- adding a Track --  ************************ ");
addTrack("Laces Out" , "USS", "Questamation");
console.log("  *********************************************************  ");
printTracks();

console.log (" ************ -- Adding a Playlist --  *********************  ");
addPlaylist("Funk It Up");
printPlaylists();
console.log("  *********************************************************  ");