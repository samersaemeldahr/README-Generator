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
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ` ```md
  ![alt text](assets/images/screenshot.png)
  ``` `
  
  
  ## Credits
  ${data.credits}
  
  ## License
  
  ${data.license}
  [https://choosealicense.com/](https://choosealicense.com/)
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/${data.githubUserName}/${data.githubRepoName})
  ![badmath](https://img.shields.io/github/languages/count/nielsenjared/badmath)
  
  ## Features
  
  
  ## Contributing
  
  
  ## Tests
  

`;
}

module.exports = generateMarkdown;
