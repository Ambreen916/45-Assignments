// 45 Assignments question # 42

let magicians : string [] = ["Jerry Lewis", "Vincent Price", "Woody Allen", "Edward Norton"];

function make_great(magician: string[]){
    let greatMagicians= magician.map(magicians=>`The great ${magicians} `);
    return greatMagicians
}
function show_magicians(magician: string[]){
    magician.forEach(magicians => console.log(magicians)
        

    );
}
let greatMagicians = make_great(magicians);

show_magicians(greatMagicians);




