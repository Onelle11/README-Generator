// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js')

console.log(' ✨Welcome to README Generator!✨ ')
console.log('> Please answer the following questions <')
// TODO: Create an array of questions for user input
const questions = [

    // Name
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter a title to continue');
                return false;
            }
        }
    },

    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a descripton',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Enter a description for your project');
                return false;
            }
        }
    },

    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'How would you like to install?',
        validate: your_installation => {
            if (your_installation) {
                return true;
            } else {
                console.log('Enter installation steps');
                return false;
            }
        }
    },

    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Usage of project',
        validate: your_usage => {
            if (your_usage) {
                return true;
            } else {
                console.log('Please enter information');
                return false;
            }
        }
    },

    // License
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        choices: ['MPL 2.0', 'GNU', 'MIT', 'None of the above'],
        validate: your_license => {
            if (your_license) {
                return true;
            } else {
                console.log('Select a license');
                return false;
            }
        }
    },

    // Contributions
    {
        type: 'input',
        name: 'contribution',
        message: 'Contributions for the project',
        validate: your_contribution => {
            if (your_contribution) {
                return true;
            } else {
                console.log('Please provide information');
                return false;
            }
        }
    },

    // Test
    {
        type: 'input',
        name: 'test',
        message: 'How do I test this project?',
        validate: your_test => {
            if (your_test) {
                return true;
            } else {
                console.log('How to test this project?');
                return false;
            }
        }
    },

    // GitHub
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username',
        validate: github_input => {
            if (github_input) {
                return true;
            } else {
                console.log('Please enter your github username');
                return false;
            }
        }
    },

    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
        validate: email_input => {
            if (email_input) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

    console.log("You can now preview your README file!");

    });
};

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));

    });
};


// Function call to initialize app
init();
