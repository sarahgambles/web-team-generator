// all input and information is gathered here, switcheroos
// gather all the info into an array of objects that will be rendered in page template then output the html file

const inquirer = require('inquirer');
const fs = require('fs')

const render = require('./src/page-template')

const questions = [

    {
        type: 'input',
        name: 'name',
        
    }
];

// function 