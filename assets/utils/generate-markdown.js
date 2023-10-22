// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badgeUrl = ``;
    var newLicenseStr = license.replace(/ /g, '_');
    if(license.toLowerCase() !== "none"){
        badgeUrl = `![](https://img.shields.io/badge/License-${newLicenseStr}-blue)`;
    }
    return badgeUrl;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    // See https://choosealicense.com/licenses/
    let licenseUrl = "";

    switch(license) {
        case "None":
            licenseUrl = "";
            break;
        case "GNU AGPLv3":
            licenseUrl = "https://choosealicense.com/licenses/agpl-3.0/";
            break;
        case "Mozilla Public License 2.0":
            licenseUrl = "https://choosealicense.com/licenses/mpl-2.0/";
            break;
        case "Apache License 2.0":
            licenseUrl = "https://choosealicense.com/licenses/apache-2.0/";
            break;
        case "MIT License":
            licenseUrl = "https://choosealicense.com/licenses/mit/";
            break;
        case "Boost Software License 1.0":
            licenseUrl = "https://choosealicense.com/licenses/bsl-1.0/";
            break;
        case "The Unlicense":
            licenseUrl = "https://choosealicense.com/licenses/unlicense/";
            break;
        default:
            licenseUrl = "";
    }
    return licenseUrl;
}

// Create a function that returns the license section of README
// If there is no license, return a string saying it is not licensed
function renderLicenseSection(licenseName, licenseUrl) {

    let licenseSectionStr = `The content of this application is not licensed.`;
    
    if(licenseName.toLowerCase() !== "none"){
        licenseSectionStr = `The content of this application is licensed under the [${licenseName}](${licenseUrl})`;
    }
    return licenseSectionStr;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${data.badgeUrl}

## Description

${data.description}

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Usage

${data.usage}

## Installation

Execute the following in a bash command-line to install dependencies:
\`\`\`
${data.installcmd}
\`\`\`

## Tests

Execute the following in a bash command-line to run tests:
\`\`\`
${data.testcmd}
\`\`\`

## Contributing

- ${data.contribution}
- If allowed to contribute, please follow the [Contributor Covenant](https://www.contributor-covenant.org/) when contributing


## Questions

- GitHub Profile: [${data.username}](https://github.com/${data.username})
- Please email me at [${data.email}](mailto:${data.email}) with any questions

## License

 ${data.licenseSectionStr}
`;
}

module.exports = {
    generateMarkdown,
    renderLicenseLink,
    renderLicenseBadge,
    renderLicenseSection,
};
