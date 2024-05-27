// 45 Assignments task 43  
let magicians:string[] = ["Jerry Lewis", "Vincent Price", "Woody Allen", "Edward Norton"];


function show_magicians(magician:string[]){
    magicians.forEach(magician => console.log(magician)
    );
}

function make_great(magician:string[]){
  let great_magicians:string[]= [];
    magicians.forEach(magician=>{
    great_magicians.push("The great " + magician);    
    }
);
  return great_magicians
}
let great_magicians:string[]= make_great([...magicians]);


console.log("My Original Array");
show_magicians(magicians);

console.log("My Array's Copy")
console.log(make_great(great_magicians));

