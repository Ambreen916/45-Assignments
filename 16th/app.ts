let guest_list= ["Mr. Bilal", "Mr. Umair", "Mr. Zubair"];
// for(let i=0; i <guest_list.length; i++){
//    console.log(`Dear `+ guest_list[i] + `\n You are cordially invited at dinner tomorrow. \n\n Thank You\n`);
// }

let not_comingPerson= "Mr. Zubair";
let new_guest= "Mr. Zeeshan";
//console.log( not_comingPerson + " will not come on tomorrow dinner.\n\n");
 guest_list[2]= new_guest;
 for(let i=0; i <guest_list.length; i++){
    console.log(`Dear `+ guest_list[i] + `\n You are cordially invited at dinner tomorrow. \n\n Thank You\n`);
 }
 console.log("Hey Guys we found a bigger dinner table so we are adding more guests for tomorrow dinner.\n\n");

guest_list.unshift ("Mr. Azeem");
guest_list.splice(2, 0, "Mr. Shahid");
guest_list.push("Mrs. Iqbal");

for(let i=0; i <guest_list.length; i++){
    console.log(`Dear `+ guest_list[i] + `\n You are cordially invited at dinner tomorrow. \n\n Thank You\n`);
 }