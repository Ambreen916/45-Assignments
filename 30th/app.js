import chalk from "chalk";
// 45 Assignments # 30th
//to creat an array for admin and useers
let userNames = ["Admin", "Amber", "Urwah", "Ahmed", "Sadia", "Robort"];
userNames.forEach(userNames => {
    if (userNames == "Admin") {
        //to print a msg for Admin
        console.log(chalk.blue.bgYellow("Hello admin, would you like to see a status report?"));
    }
    else {
        //to print a msg for other users
        console.log(chalk.red.bgBlackBright(`Hello ${userNames}, thank you for logging in again.`));
    }
});
