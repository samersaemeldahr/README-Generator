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
        choices: ["GNU Affero General Public License v3.0", "GNU General Public License v3.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "GNU", "The Unlicense", "None"]
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
        message: 'What do you want the user to know about contributing to this repository?',
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
