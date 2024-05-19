"use strict";
// task 40 make object in function
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }
    ;
    return album;
}
;
console.log(make_album("shehzad Roy", "tera chehra haseen"));
console.log(make_album("shehzad Roy", "tera chehra haseen"));
console.log(make_album("shehzad Roy", "tera chehra haseen", 5));
