"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
//45 Assignments #34th Favourite Pizzas
let fav_pizza = ["BBQ Pizza", "Creamy Delight Pizza", "Chicken Tikka Pizza", "Malai Boti Pizza"];
for (let i = 0; i < fav_pizza.length; i++) {
    console.log(fav_pizza[i]);
}
for (let i = 0; i < fav_pizza.length; i++) {
    console.log(`i like ${fav_pizza[i]}`);
}
console.log(chalk_1.default.cyanBright("I love Pizza alot!"));
