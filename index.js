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
        message: 'How can the user make Contributions to this app?',
        name: 'contribution'
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
var generateREADME = (data) => {
    return `# ${data.projName}
    ## This project is used for ${data.projUse}
    ## ${data.proj.how}
    ## ${data.projName}
    ## ${data.projName}

` }
// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init();