"use strict";
//45 Assignments # 32nd
//checking unique username.
let current_users = ["Admin", "user1", "user2", "user3", "user4"];
let new_users = ["Admin", "user2", "user5", "user6", "user7"];
new_users.forEach(newuser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newuser.toLowerCase())) {
        console.log(`${newuser} will need to enter a new username.`);
    }
    else {
        console.log(`${new_users} is available.`);
    }
});
