// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require("./assets/utils/generate-markdown.js");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Project Title?",
    },
];

/* 
    List of Questions to add:
    [X] 1. Project Title (name: "title")
    [ ] 2. Description - & bullet list?
    [ ] 3. Installation Instructions - bullet list?
    [ ] 4. Usage Information - bullet list?, Files?, Images(looping)?
    [ ] 5. Contribution Guidelines - default or add other or both
    [ ] 6. Test Instructions - & bullet list?
    [ ] 7. License - choose 1
    [ ] 8. GitHub Username input
    [ ] 9. Contact Email Address  
*/  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    var markdownStr = generateMarkdown(data);
    fs.writeFile(fileName, markdownStr, (err) => err ? console.log(err) : console.log(`Success, see: ${fileName}`));

}

// Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(response => {
        console.log(response);
        writeToFile('./assets/output/generated-readme.md', response);
    });

}

// Function call to initialize app
init();
