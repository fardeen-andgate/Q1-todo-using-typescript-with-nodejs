#! /usr/bin/env node
import inquirer from "inquirer";
import { welcome } from "./clidesign/start.js";
welcome();
let todoTask = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TASK",
            message: "What do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo? ",
            default: false
        }
    ]);
    const { TASK, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TASK) {
        todoTask.push(TASK);
    }
    else {
        console.log("Invalid Input");
    }
}
if (todoTask.length > 0) {
    console.log("Your TOdo List:");
    todoTask.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No tasks found");
}
