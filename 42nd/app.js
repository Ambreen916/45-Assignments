"use strict";
// 45 Assignments question # 42
let magicians = ["Jerry Lewis", "Vincent Price", "Woody Allen", "Edward Norton"];
function make_great(magician) {
    let greatMagicians = magician.map(magicians => `The great ${magicians} `);
    return greatMagicians;
}
function show_magicians(magician) {
    magician.forEach(magicians => console.log(magicians));
}
let greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
// function show_magicians(magician : string[]){
//     magician.forEach(magician => {
//         console.log(magician)
//     });
// }
// show_magicians(magicians);
