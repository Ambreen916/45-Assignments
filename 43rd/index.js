var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 45 Assignments task 43  
var magicians = ["Jerry Lewis", "Vincent Price", "Woody Allen", "Edward Norton"];
function show_magicians(magician) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magician) {
    var great_magicians = [];
    magicians.forEach(function (magician) {
        great_magicians.push("The great " + magician);
    });
    return great_magicians;
}
var great_magicians = make_great(__spreadArray([], magicians, true));
console.log("My Original Array");
show_magicians(magicians);
console.log("My Array's Copy");
console.log(make_great(great_magicians));
