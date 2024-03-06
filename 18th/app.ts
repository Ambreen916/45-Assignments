//Store Places name 

let places: string[] =["Makkah", "Madina","Canada","America", "Dubai"]

//to print places in original order
console.log(`\nOriginal Order:\n ` + places);

//to print places in alphabetical ordrer
console.log(`\nAlphabetical Order:\n ` + [...places].sort());

//to print places still in original order
console.log(`\nOriginal Order:\n ` + places);

//to print places in Reverse order
console.log(`\nReverse Order:\n ` + [...places].sort().reverse());

//to print places in original order
console.log(`\nOriginal Order:\n ` + places);

//to print places in Reverse order
console.log(`\nReverse Order:\n ` + [...places].sort().reverse());

//to print places in again Reverse order
console.log(`\nReverse of Reverse Order:\n ` + [...places].sort().reverse().reverse());

