// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const data = [
    {
        type: 'input',
        message: 'What is the Project called?',
        name: 'projName',
    },
    {
        type: 'input',
        message: 'What is the Project Used for',
        name: 'projUse',
    },
    // {
    //     type: 'input',
    //     message: 'Write a short bio about yourself',
    //     name: 'bio'
    // },
    // {
    //     type: 'input',
    //     message: 'what is your linkedIn URL?',
    //     name: 'linkedIn',
    // },
    // {
    //     type: 'input',
    //     message: 'what is your gitHub URL?',
    //     name: 'gitHub',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your favorite hobby',
    //     name: 'hobby'
    // },
];

// TODO: Create a function to write README file
inquirer
    .prompt(data)
    .then((response) =>{
    console.log(data)
    fs.writeFile('README.MD', generateREADME(response), (err) =>
    err? console.log(err) : console.log('response written to file') );
})
var generateREADME = (data) => {
    return `# ${data.projName}
    ## This project is used for ${data.projUse}
    ## ${data.projName}
    ## ${data.projName}
    ## ${data.projName}

` }
// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init();