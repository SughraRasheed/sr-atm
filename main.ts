#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("Welcome to SUGHRA RASHEED - ATM")

let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your pin",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code")
}
else {
    console.log("Incorrect pin code, Try Again")
    process.exit()}
    
let operationAns = await inquirer.prompt([{
    name: "operation",
    type: "list",
    message: "Select your operation",
    choices: ["withdraw", "check balance"]
}])
if(operationAns.operation === "withdraw"){
    let amountAnswer = await inquirer.prompt([{
        name: "amount",
        type: "number",
        message: "Enter your amount to withdraw",
    }])
    if(amountAnswer.amount > myBalance){
        console.log("Insufficient balance")
    }
    else{
        myBalance -= amountAnswer.amount;
        console.log("Your remaining new balance is " + myBalance)
}
};
if(operationAns.operation === "check balance"){
console.log("Your current balance is " + myBalance)
}