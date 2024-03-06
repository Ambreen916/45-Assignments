//Store Places name 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Makkah", "Madina", "Canada", "America", "Dubai"];
//to print places in original order
console.log("\nOriginal Order:\n " + places);
//to print places in alphabetical ordrer
console.log("\nAlphabetical Order:\n " + __spreadArray([], places, true).sort());
//to print places still in original order
console.log("\nOriginal Order:\n " + places);
//to print places in Reverse order
console.log("\nReverse Order:\n " + __spreadArray([], places, true).sort().reverse());
//to print places in original order
console.log("\nOriginal Order:\n " + places);
//to print places in Reverse order
console.log("\nReverse Order:\n " + __spreadArray([], places, true).sort().reverse());
//to print places in again Reverse order
console.log("\nReverse of Reverse Order:\n " + __spreadArray([], places, true).sort().reverse().reverse());
