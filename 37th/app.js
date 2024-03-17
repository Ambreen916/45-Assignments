"use strict";
// 45 Assignments # 37th
//Default Values in a function
function make_shirt(size = "large", message = "I love Typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); // Default large size
make_shirt("medium"); //Default message on medium size
make_shirt("small", "I Love Coding"); //costum message on small size
