import chalk from "chalk";
//45 Assignments # 25th
//creat an alien color
let alien_color = "green";
if (alien_color == "green") {
    console.log(chalk.green("You Just earned 5 Points"));
}
//to creat the version that fails will have no output
alien_color = "red";
if (alien_color == "green") {
    console.log(chalk.green("You Just earned 5 Points"));
}
