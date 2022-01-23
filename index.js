// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown') 

// TODO: Create an array of questions for user input
const data = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Project called?',
        name: 'projName',
    },
    {
        type: 'input',
        message: 'What is the Project Used for?',
        name: 'projUse',
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'projHow'
    },
    {
        type: 'input',
        message: 'what was your motivation for this project?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'what problem does this project solve?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'what did you learn?',
        name: 'learn',
    },
    {
        type: 'input',
        message: 'How do you install this application?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How should the user report issues?',
        name: 'issues',
    },
    {
        type: 'input',
        message: 'What is the alt text of the App Screenshot?',
        name: 'imageAlt',
    },
    {
        type: 'input',
        message: 'What is the source of the ScreenShot?',
        name: 'imageSrc',
    },
    {
        type: 'input',
        message: 'what is the name of the link?',
        name: 'linkName',
    },
    {
        type: 'input',
        message: 'what is the address of the link?',
        name: 'linkAddress',
    },
    {
        type: 'input',
        message: 'How can the user make Contributions to this app?',
        name: 'contribution'
    },
    {
        type: 'list',
        message: 'How can the user make Contributions to this app?',
        name: 'license',
        choices: ['no license', 'MIT', 'ISC', 'Apache 2.0', '2-clause BSD', 'MPL 2.0']
    },
    
];

// TODO: Create a function to write README file
inquirer
    .prompt(data)
    .then((response) =>{
    console.log(data)
    fs.writeFileSync('README.MD', generateREADME(response), (err) => 
    err? console.log(err) : console.log('response written to file') );
})
//make this into a deconstruction of the object?
// var generateREADME = (data) => {
//     return `
// # ${data.projName}

// ## Description
// This project does ${data.projUse} by ${data.projHow}.  My motivation for this project was to ${data.motivation}.
// I wanted to solve the problem of ${data.problem}.  I learned that ${data.learn}. 

// # Table of Contents
// - [Installation](#Installation)
// - [Usage](#Usage)
// - [What-I-learned](#What-I-Learned)
// - [Screenshot-of-Application](#Screenshot-of-Application)
// - [Links](#Links)
// - [Credits](#Credits)
// - [License](#License)

// ## Installation
// In order to install this project you will need to ${data.install}.

// ## Usage
// This Project is used for ${data.projUse}. *elaborate on your project motivation and use here*

// ## What-I-Learned
// This Project works by ${data.projHow}, and I learned that ${data.learn}.  
// The ${data.issues} were issues in this project.
// *Elaborate what you learned and add coding comments here*

//     *insert code snippets here*

// ## Screenshot of Application
// ![${data.imageAlt}](${data.imageSrc})

// ## Links
// [${data.linkName}](${data.linkAddress})

// ## Credits
// My gitHub user name is ${data.username}, and you may email me at ${data.email}.
// You may contribute to this project by ${data.contribution}.

// ## License
// ${data.license}
// `}
// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init();