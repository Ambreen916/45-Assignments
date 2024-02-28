//45 Assignments # 15 (Change Guests List)
var guest_list = ["Mr. Bilal", "Mr. Umair", "Mr. Zubair"];
//for (var i = 0; i < guest_list.length; i++) {
  //  console.log("Dear " + guest_list[i] + "\n You are cordially invited at dinner tomorrow. \n\n Thank You\n");
//}
var not_comingPerson = "Mr. Zubair";
var new_guest = "Mr. Zeeshan";
console.log(not_comingPerson + " will not come on tomorrow dinner.\n\n");
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear " + guest_list[i] + "\n You are cordially invited at dinner tomorrow. \n\n Thank You\n");
}
