#! /usr/bin/env node

// OOP Project with TypeScript:
// npm install inquirer:
// npm install chalk:


// A class is a group of objects which have common properties:

import inquirer from "inquirer";
import chalk from "chalk";

// create class:

class Person {
    private _personality: string;
    constructor() {
        this._personality = 'Mystery';
    }

    // user input :
userInput(input: string) {
    
    // if else statement:
    if (input.includes('talk to other about yourself openly')){
        this._personality = 'talk happly';
    }else if (input.includes('keep your word to yourself')) {
        this._personality = "talk rude"
    }

}
// return function:
get personality() {
    return this._personality
}

}

// create objects:
class Main {
    public async main() {
        // awaot called out
        const ans = await inquirer.prompt([
            {
                // object creation:
                type : "list",
                name : "choice",
                message : chalk.yellow("tell your behaviour?"),
                choice : [
                    '1: talk to others about myself.',
                    '2: keep quite and dont ask question',
                ]
            }
        ])
        let myPerson = new Person()

        myPerson.userInput(ans.choice);

        // output response:
        console.log(`You are ${myPerson.personality}`)
    }
}

const myObject = new Main();
myObject.main();

