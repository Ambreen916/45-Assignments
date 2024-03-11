import chalk from "chalk";
// 45 Assignments # 24.	More Conditional Tests: 
//Tests for equality and inequality with strings:
console.log(chalk.blue("\nComparison with string\n"));
console.log("Karachi === Karachi", "Karachi" === "Karachi"); // true
console.log("Karachi !== Karachi", "Karachi" !== "Karachi"); //false
// Tests using the lower case function
let personName = "AMBREEN";
console.log(chalk.blue("\nComparison Using lowerCase\n"));
console.log("personName.toLowerCase === ambreen", personName.toLowerCase() === "ambreen");
console.log("personName.toLowerCase !== ambreen", personName.toLowerCase() !== "ambreen");
//Numerical tests 
let a = 5;
let b = 5;
console.log(chalk.blue("\nEquality & inequality in numbers\n"));
console.log("5 == 5", a == b); //true
console.log("5 != 5", a != b); //false
//Numerical tests 
let x = 4;
let y = 8;
console.log(chalk.blue("\ngreater than and less than\n"));
console.log("4 < 8", x < y); //true
console.log("4 > 8", x > y); //false
//Numerical tests 
console.log(chalk.blue("\ngreater than or equal to\n"));
console.log("5 == 5", a == b); //true
console.log("5 > 5", a > b); //false
//Numerical tests 
console.log(chalk.blue("\nless than or equal to\n"));
console.log("5 < 5", a > b); //false
console.log("5 == 5", a == b); //true
//Tests using "and" and "or" operators
console.log(chalk.blue("\nTest with and & or operators\n"));
console.log("True && False", true && false); //false
console.log("True || False", true || false); //true
//Test whether an item is in a array;
let colors = ["blue", "pink", "white", "purple"];
console.log(chalk.blue("\nTest whether an item is in a array\n"));
console.log(chalk.green(colors.toString()));
console.log("Is pink in colors?");
console.log(colors.includes("pink")); //true
//Test whether an item is in a array;
let cars = ["Honda", "Toyota", "Suzuki", "Dihatsu"];
console.log(chalk.blue("\nTest whether an item is not in a array\n"));
console.log(chalk.green(cars.toString()));
console.log("Is Mitsubishi in cars?");
console.log(cars.includes("Mitsubishi")); //false
