// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How would you describe the usage of your application?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like to choose?',
        choices: ["None", "MIT", "Apache", "Artistic", "BSD2", "BSD3", "Creative Commons", "Mozilla Public", "Open Software", "GNU", "Do What The F*ck You Want To Public License"]
      },
      {
        type: 'input',
        name: 'install',
        message: 'What command would you use to install dependencies?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command would you use to do tests?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What do you want the user to know about using this repository?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What do you want the user to know about contributing this repository?',
      },
];

const filename = "test.md";

// TODO: Create a function to write README file
function writeToFile(filename, questions, ) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
