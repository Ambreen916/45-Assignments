import chalk from "chalk";

//45 Assignments # 26th
 
//creat an alien color # 2

let alien_color = "green";

if (alien_color == "green"){

    console.log(chalk.green("You Just earned 5 Points for shooting alien"));
}else{
   console.log(chalk.yellow("You earned 10 points for shooting alien"));

}

//to creat a 2nd version

alien_color = "yellow";

if (alien_color == "green"){

    console.log(chalk.green("You Just earned 5 Points for shooting alien"));
}else{
   console.log(chalk.yellow("You earned 10 points for shooting alien"));

}
