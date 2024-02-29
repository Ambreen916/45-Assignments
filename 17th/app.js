"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guest_list = ["Mr. Bilal", "Mr. Umair", "Mr. Zubair"];
// for(let i=0; i <guest_list.length; i++){
//    console.log(`Dear `+ guest_list[i] + `\n You are cordially invited at dinner tomorrow. \n\n Thank You\n`);
// }
var not_comingPerson = "Mr. Zubair";
var new_guest = "Mr. Zeeshan";
//console.log( not_comingPerson + " will not come on tomorrow dinner.\n\n");
guest_list[2] = new_guest;
//  for(let i=0; i <guest_list.length; i++){
//     console.log(`Dear `+ guest_list[i] + `\n You are cordially invited at dinner tomorrow. \n\n Thank You\n`);
//  }
//console.log("Hey Guys we found a bigger dinner table so we are adding more guests for tomorrow dinner.\n\n");
guest_list.unshift("Mr. Azeem");
guest_list.splice(2, 0, "Mr. Shahid");
guest_list.push("Mrs. Iqbal");
// //for(let i=0; i <guest_list.length; i++){
//     console.log(`Dear `+ guest_list[i] + `\n You are cordially invited at dinner tomorrow. \n\n Thank You\n`);
//  }
console.log("\nIt is to inform you that unfortunatly big dinner table can not be arranged so we invite only two guest.\n ");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry ".concat(remove_guest, " \nYou are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nDear " + guest_list[i] + "\n You are still invited for dinner . \n Thank You\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
