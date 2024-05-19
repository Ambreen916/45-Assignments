// task 40 make object in function

function make_album(artist: string, title: string, tracks?: number){
    let album : {artist:string, title: string, tracks?: number}={

        artist: artist,
        title : title,


    };

if(tracks !== undefined){
    album['tracks'] = tracks
};
return album
};

let album1= make_album("Shehzad Roy", "Tera Chehra Haseen");
console.log(album1);

let album2= make_album("Atif Aslam", "Tere sang Yara");
console.log(album2);

let album3= make_album("Ali Zafar", "Chhanno" , 5);
console.log(album3);