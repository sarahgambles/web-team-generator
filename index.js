// all input and information is gathered here, switcheroos
// gather all the info into an array of objects that will be rendered in page template then output the html file


// Inquirer and write file require variables
const inquirer = require('inquirer');
const fs = require('fs')

// Constructor Classes
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// Generate the template
const generatePage = require('./src/page-template')

// prompt user for manager questions function
// array of questions to the manager that ends with a menu
const promptManager = () => {
    inquirer.prompt ([

    {
        type: 'confirm',
        name: 'manager',
        message: 'Are you the manager?',
        default: true
    },

    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name'
    },
    {
        type: 'input',
        name: 'ID',
        message: 'Please enter your employee ID number.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'

    },
    {
        type: 'input',
        name: 'office number',
        message: 'Please enter your office phone number.'
    },
]);
};

const promptEmployeeInfo = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'employees',
            message: 'Would you like to add an employee to your team? If yes, select which employee you would like to add.',
            choices: [ engineer, intern, employee ]
        }
    ])
}


const promptEngineer = () => {

    console.log(`
    
    =================
    Add Employee Info
    =================
    `),
    {
        if (engineer) {
            type: 'input',
            name: 'name',
            message: 'Please enter the GitHub Username for your engineer.'
        }
    }
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of your employee'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide the employee ID number for your employee.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide the email address for your employee.'
        },
        {
            if {

            }
        }

    ])
}



// call promptManager method
// promptManager()
// .then(promptTeamAnswers)
// .then( => {
//     return generatePage();
// })
// array of objects with the manager's info, engineer's, intern's


// .then for engineer info
// .then (information => {
//     switch (information) {
//         case 'Engineer':
//     }
// })
 
// Write to file functions
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }

// function init() {
//     inquirer.prompt(questions).then(response => {
//         writeToFile("page-template", page-template(response));
//     })
// }

// init();
// create a function for each individual role using a .then

// use a switch case to add engineer, etc
