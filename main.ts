#! /usr/bin/env node

import inquirer from "inquirer"; 

let myBalance = 10000; 
let myPin = 88444;
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"
        }
    ]  
);

if (pinAnswer.pin === myPin){
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw","check balance","Fast cash"]
            }
        ]
    );
    console.log(operationAns);
    
    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );
    
        if (myBalance >= amountAns.amount)
        {
            myBalance -= amountAns.amount;
            console.log(`your current balance is: ${myBalance}` )
        } else
        {
            console.log("Insufficient Balance!");
        }
        
    }else if (operationAns.operation === "check balance"){
        console.log(`your balance is: ${myBalance}`)
    }else if (operationAns.operation === "Fast cash"){
        let fastCash = await inquirer.prompt(
            [
                {
                    name: "fastcash",
                    message: "please select the amount you want to withdraw",
                    type: "list",
                    choices: ["500","1000","1500","2000","10000","otheramount"]
                }
            ]
        );
    
        if (myBalance >= parseInt(fastCash.fastcash))
        {
            if(fastCash.fastcash==="500"){
                console.log(`you withdraw`,500)
                console.log(`you remaining balnce is :`,myBalance-500)
        
            }else if(fastCash.fastcash==="1000"){
                console.log(`you withdraw`,1000)
                console.log(`you remaining balnce is :`,myBalance-1000)
        
            }else if(fastCash.fastcash==="1500"){
                console.log(`you withdraw`,1500)
                console.log(`you remaining balnce is :`,myBalance-1500)
        
            }else if(fastCash.fastcash==="2000"){
                console.log(`you withdraw`,2000)
                console.log(`you remaining balnce is :`,myBalance-2000)
        
            }else if(fastCash.fastcash==="10000"){
                console.log(`you withdraw`,10000)
                console.log(`you remaining balnce is :`,myBalance-10000)
        
            }else if(fastCash.fastcash==="otheramount"){
                let amountAns = await inquirer.prompt(
                    [
                        {
                            name: "amount",
                            message: "enter your amount",
                            type: "number"
                        }
                    ]
                );
                myBalance -= amountAns.amount;
                console.log("your current balance is: " + myBalance)
        
            }
        } else
        {
            console.log("Insufficient Balance!");
        }
    }
    }
    else {
        console.log("Incorrect pin number");
    }


