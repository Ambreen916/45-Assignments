//45 Assignments # 15 (Change Guests List)

let guest_list= ["Mr. Bilal", "Mr. Umair", "Mr. Zubair"];

//To add new guest replace Mr. Zubair
let not_comingPerson= "Mr. Zubair";

let new_guest= "Mr. Zeeshan";

// To print message Mr. Zubair not comming
console.log( not_comingPerson + " will not come on tomorrow dinner.\n\n");
 
//To printnew guest replace Mr. Zubair
 guest_list[2]= new_guest;
 for(let i=0; i <guest_list.length; i++){
    console.log(`Dear `+ guest_list[i] + `\n You are cordially invited at dinner tomorrow. \n\n Thank You\n`);
 }
