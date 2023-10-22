// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    // ![license_badge](https://img.shields.io/badge/License-MIT-blue)

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
*User Inputs for Testing Script -- Delete at end of project*
${JSON.stringify(data)}

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

- ${data.license}



`;
}

module.exports = {generateMarkdown};
