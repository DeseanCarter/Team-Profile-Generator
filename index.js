// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/manager');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let {questionsManager, questionsEngineer, questionsIntern} = require('./questions')

let employees = [];

function startApp() {
    postHtml();
    createManager();
}

function createManager() {
    inquirer
    .prompt(questionsManager)
    .then((response) => {
        if (response.adding === 'Done'){
            const manager = new Manager(response.name, response.number, response.email, response.office)
            employees.push(manager)
            generateHtml(manager);
            finishHtml()
        }else if(response.adding === 'Engineer'){
            const manager = new Manager(response.name, response.number, response.email, response.office)
            employees.push(manager)
            generateHtml(intern);
            createEngineer()
        }else if(response.adding === 'Intern'){
            const manager = new Manager(response.name, response.number, response.email, response.office)
            employees.push(manager)
            generateHtml(manager);
            createIntern()
        }
    })
}

function createEngineer() {
    inquirer
    .prompt(questionsEngineer)
    .then((response) => {
        if (response.adding === 'Done'){  
            const engineer = new Engineer(response.name, response.number, response.email, response.github)
            employees.push(engineer)
            generateHtml(engineer);//employees?
            finishHtml()
        }else if(response.adding === 'Engineer'){
            const engineer = new Engineer(response.name, response.number, response.email, response.github)
            employees.push(engineer)
            generateHtml(engineer);
            createEngineer()
        }else if(response.adding === 'Intern'){
            const engineer = new Engineer(response.name, response.number, response.email, response.github)
            employees.push(engineer)
            generateHtml(engineer);
            createIntern()
        }
    })
}

function createIntern() {
    inquirer
    .prompt(questionsIntern)
    .then((response) => { 
        if (response.adding === 'Done'){  
            const intern = new Intern(response.name, response.number, response.email, response.school)
            employees.push(intern)
            generateHtml(intern);
            finishHtml()
        }else if(response.adding === 'Engineer'){
            const intern = new Intern(response.name, response.number, response.email, response.school)
            employees.push(intern)
            generateHtml(intern);
            createEngineer()
        }else if(response.adding === 'Intern'){
            const intern = new Intern(response.name, response.number, response.email, response.school)
            employees.push(intern)
            generateHtml(intern);
            createIntern()
        }
    })
}



function postHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Builder</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div class="container">
            <div class="row">`;

    fs.writeFile("./output/teambuild.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Start");
}

function generateHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("Team Member Added");
        fs.appendFile("./output/teambuild.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
                
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/teambuild.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("End");
}

startApp()