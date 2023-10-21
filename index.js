// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Project Title?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(response => {
        console.log(response);
        var responseStr = JSON.stringify(response);
        fs.writeFile('./assets/output/generated-readme.md', responseStr, (err) => err ? console.log(err) : console.log('Successfuly generated file!'));
    });

}

// Function call to initialize app
init();
