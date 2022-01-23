// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==='MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else 
  if (license==="MPL 2.0") {
  return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else
  if (license==='Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } 
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license==='no license') {
  return '';
} else {
  return '- [License](#License)'
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==='no license') {
    return '';
  } else {
    return `## License
${license}`
  }
}

// TODO: Create a function to generate markdown for README
generateREADME = (data) => {
  return `
  ${renderLicenseBadge(data.license)}
# ${data.projName}

## Description
This project does ${data.projUse} by ${data.projHow}.  My motivation for this project was to ${data.motivation}.
I wanted to solve the problem of ${data.problem}.  I learned that ${data.learn}. 

# Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [What-I-learned](#What-I-Learned)
- [Screenshot-of-Application](#Screenshot-of-Application)
- [Links](#Links)
- [Credits](#Credits)
${renderLicenseLink(data.license)}


## Installation
In order to install this project you will need to ${data.install}.

## Usage
This Project is used for ${data.projUse}. *elaborate on your project motivation and use here*

## What-I-Learned
This Project works by ${data.projHow}, and I learned that ${data.learn}.  
The ${data.issues} were issues in this project.
*Elaborate what you learned and add coding comments here*

  *insert code snippets here*

## Screenshot of Application
![${data.imageAlt}](${data.imageSrc})

## Links
[${data.linkName}](${data.linkAddress})

## Credits
My gitHub user name is ${data.username}, and you may email me at ${data.email}.
You may contribute to this project by ${data.contribution}.

${renderLicenseSection(data.license)}
`};

module.exports = generateREADME;
