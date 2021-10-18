
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./ut/generateMarkdown')
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        // ask the questions here
        type: 'input',
        Name: 'username',
        Comment: 'WHat is your github username?',
    },
    {
        // ask the questions here
        type: 'input',
        Name: 'GitHubusername',
        checkbox: ['ONE', 'TWO', 'THREE'],
    },
    {
        // ask the questions here
        type: 'input',
        Name: 'GitHubusername',
        checkbox: ['ONE', 'TWO', 'THREE'],
    },
    {
        // ask the questions here
        type: 'input',
        Name: 'username',
        choices: ['GMU', 'AJAX','JAVA'],
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use?',
        choices: ['',]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([questions])
        .then((answers) => {
            console.log(answers);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
} 

// Function call to initialize app
init();