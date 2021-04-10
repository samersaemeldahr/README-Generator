// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// ["GNU Affero General Public License v3.0", "GNU General Public License v3.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "GNU", "The Unlicense", "None"]

function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (data.license === "GNU Affero General Public License v3.0") {
    let link = `[More information about about the license](https://choosealicense.com/licenses/agpl-3.0/)`;
    return link;
  }
  if (data.license === "GNU General Public License v3.0") {
    let link = `[More information about about the license](https://choosealicense.com/licenses/gpl-3.0/)`;
    return link;
  }
  if (data.license === "GNU Lesser General Public License v3.0") {
    let link = `[More information about about the license](https://choosealicense.com/licenses/lgpl-3.0/)`;
    return link;
  }
  if (data.license === "Mozilla Public License 2.0") {
    let link = `[More information about about the license](https://choosealicense.com/licenses/mpl-2.0/)`;
    return link;
  }
  if (data.license === "Apache License 2.0") {
    let link = `[More information about about the license](https://choosealicense.com/licenses/apache-2.0/)`;
    return link;
  }
  if (data.license === "MIT License") {
    let link = `[More information about about the license](https://choosealicense.com/licenses/mit/)`;
    return link;
  }
  if (data.license === "Boost Software License 1.0") {
    let link = `[More information about about the license](https://choosealicense.com/licenses/bsl-1.0/)`;
    return link;
  }
  if (data.license === "The Unlicense") {
    let link = `[More information about about the license](https://choosealicense.com/licenses/unlicense/)`;
    return link;
  }
  if (data.license === "None") {
    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README



function generateMarkdown(data) {
  return `#**${data.title.toUpperCase()}**

  ## Description 
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  ${data.install}
  
  ## Usage 
  ${data.usage}
  

  
  
  ## Credits

  
  ## License
  
  ${data.license}
  
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/${data.github}/${data.title})
  ![badmath](https://img.shields.io/github/languages/count/nielsenjared/badmath)
  
  ## Features
  
  
  ## Contributing
  
  
  ## Tests

  ## Questions
  Please feel free to reach out with any questions via email at ${data.email} or via GitHub at ${data.github}

`;
}

module.exports = generateMarkdown;
