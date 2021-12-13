
const inquirer = require('inquirer');
const fs = require('fs')
// const generateMarkdown = require('./ut/generateMarkdown')
const writeFile = require('./ut/writeFile')
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        // ask the questions here
        type: 'input',
        name: 'title',
        message: 'What is the projects title?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?',
    },
    {
        type: 'input',
        name: 'GitHubusername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is this application for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'None'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    console.log('hello');
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            // var markdown = generateMarkdown(answers)
            // console.log(markdown);
            writeFile(answers)
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