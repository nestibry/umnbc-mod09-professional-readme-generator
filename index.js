// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require("./assets/utils/generate-markdown.js");


// Create an array of questions for user input
// TODO: Finalize License question choices
const questions = [
    
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        default: "nestibry",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        default: "example@gmail.com",
    },
    {
        type: "input",
        name: "title",
        message: "What is the Project Title?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license:",
        choices: [  
            "Microsoft Public License",
            "MIT", 
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "None", 
        ],
    },
    {
        type: "input",
        name: "installcmd",
        message: "What command should be invoked to install dependencies?",
        default: "npm i inquirer@8.2.4",
    },
    {
        type: "input",
        name: "testcmd",
        message: "What command should be invoked to run tests?",
        default: "node index.js",
    },
    {
        type: "input",
        name: "usage",
        message: "Please write a short 'Usage' instruction:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please write a short 'Contributing' instruction:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    var markdownStr = generateMarkdown(data);
    fs.writeFile(fileName, markdownStr, (err) => err ? console.log(err) : console.log(`Success, see: ${fileName}`));

}

// Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(response => {
        writeToFile('./assets/output/generated-readme.md', response);
    });

}

// Function call to initialize app
init();
