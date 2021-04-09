// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}
  
  ## Table of Contents (Optional)
  
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
  [https://choosealicense.com/](https://choosealicense.com/)
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/${data.github}/${data.title})
  ![badmath](https://img.shields.io/github/languages/count/nielsenjared/badmath)
  
  ## Features
  
  
  ## Contributing
  
  
  ## Tests
  

`;
}

module.exports = generateMarkdown;
