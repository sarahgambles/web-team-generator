// all input and information is gathered here, switcheroos
// gather all the info into an array of objects that will be rendered in page template then output the html file


// Inquirer and write file require variables
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

// Constructor Classes
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// Create output
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")

// Generate the template
const render = require('./src/page-template.js');

const teamMember = [];
const array = [];


// prompt user for manager questions function
// array of questions to the manager that ends with a menu
const promptManager = () => {
    console.log("Start making your team!");
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
        name: 'officeNumber',
        message: 'Please enter your office phone number.'
    },
])
.then(answers => {
    const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber)
    teamMember.push(manager);
    array.push(manager)

    promptEmployeeInfo()
})
};

const promptEmployeeInfo = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'employees',
            message: 'Would you like to add an employee to your team? If yes, select which employee you would like to add.',
            choices: [ "engineer", "intern", "I don't want to add any more employees" ]
        }
    ])
    .then(choice => {
        switch (choice.employees) {
            case "engineer" : 
            promptEngineer()
            break;

            case "intern" :
                promptIntern()
                break;

            default: 
            buildTeam()
        }
    })
}


const promptEngineer = () => {
    inquirer.prompt ([

    {
        type: 'input',
        name: 'name',
        message: 'Please enter your engineer name'
    },
    {
        type: 'input',
        name: 'ID',
        message: 'Please enter your engineer employee ID number.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'

    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your engineer GitHub URL.'
    },
])
.then(answers => {
    const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github)
    teamMember.push(engineer)
    array.push(answers.engineer)

    promptEmployeeInfo()
})
};

const promptIntern = () => {
    inquirer.prompt ([

    {
        type: 'input',
        name: 'name',
        message: 'Please enter your intern name'
    },
    {
        type: 'input',
        name: 'ID',
        message: 'Please enter your intern employee ID number.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your intern email address.'

    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter your intern school name.'
    },
])
.then(answers => {
    const intern = new Intern(answers.name, answers.ID, answers.email, answers.school)
    teamMember.push(intern)
    array.push(answers.intern)
    promptEmployeeInfo()
})
};

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMember), "utf-8")
}

promptManager();


