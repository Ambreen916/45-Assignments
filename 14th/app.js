"use strict";
//45 Assignments # 14 (Guests List)
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
let guest_list = ["Mr. Bilal", "Mr. Umair", "Mr. Zubair"];
exports.guest_list = guest_list;
// To Print guests list
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ` + guest_list[i] + `\n You are cordially invited at dinner tomorrow. \n\n Thank You\n`);
}
