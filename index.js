#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a number
//2) User input for gussing number
//3) Compare user input with computer generated number & show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-10",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulatio! you guessed right number.");
}
else {
    console.log(" You guess wrong number.");
}
