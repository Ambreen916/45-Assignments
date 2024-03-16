"use strict";
//45 Assignments #33rd
//ordinal number
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//we will use forEach loop
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
