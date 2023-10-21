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
function writeToFile(fileName, data) {
    
    var markdownStr = `# ${data.title}`;
    fs.writeFile(fileName, markdownStr, (err) => err ? console.log(err) : console.log(`Success, see: ${fileName}`));

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(response => {
        console.log(response);
        writeToFile('./assets/output/generated-readme.md', response);
    });

}

// Function call to initialize app
init();
