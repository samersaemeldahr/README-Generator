// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('./utils/generateMarkdown')



// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'greet',
        message: 'Welcome to README generator. please hit ENTER to start.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: github => {
          if (github) {
            return true;
          } else {
            console.log(" >> Please enter your GitHub username <<");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log(" >> Please enter your email address <<");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: title => {
          if (title) {
            return true;
          } else {
            console.log(" >> Please enter a title <<");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
        validate: description => {
          if (description) {
            return true;
          } else {
            console.log(" >> Please enter a description for your project <<");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How would you describe the usage of your application?',
        validate: usage => {
          if (usage) {
            return true;
          } else {
            console.log(" >> Please provide usage infromation <<");
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like to choose?',
        choices: ["GNU Affero General Public License v3.0", "GNU General Public License v3.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "GNU", "The Unlicense", "None"]
      },
      {
        type: 'input',
        name: 'install',  
        message: 'What command would you use to install dependencies?',
        validate: install => {
          if (install) {
            return true;
          } else {
            console.log(" >> Please provide information on installation <<");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command would you use to do tests?',
        validate: test => {
          if (test) {
            return true;
          } else {
            console.log(" >> Please provide information on testing your application <<");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What do you want the user to know about using this repository?',
        validate: usage => {
          if (usage) {
            return true;
          } else {
            console.log(" >> Please provide information on using the repository <<");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What do you want the user to know about contributing to this repository?',
        validate: contribution => {
          if (contribution) {
            return true;
          } else {
            console.log(" >> Please provide information on contributing to this project <<");
            return false;
          }
        }
      },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('test.md', data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    let readmeContent = util(answers)

    writeToFile(readmeContent)
  })
}

module.exports = questions;

// Function call to initialize app
init();
