const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const managerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'managerName',

    },
    {
        type: 'input',
        message: 'What is your id number?',
        name: 'id',

    },

    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',

    },

    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',

    }

]

const teamBuildQuestions = [
    {
        type: 'list',
        message: 'Who do you want to add to your team?',
        name: 'role',
        choices: ['engineer', "intern", "none"]
    }
]

const internQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'internName',

    },
    {
        type: 'input',
        message: 'What is your id number?',
        name: 'id',

    },

    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',

    },

    {
        type: 'input',
        message: 'What is your school?',
        name: 'school',

    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'engineerName',

    },
    {
        type: 'input',
        message: 'What is your id number?',
        name: 'id',

    },

    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',

    },

    {
        type: 'input',
        message: 'What is your github?',
        name: 'github',

    }
]

function buildTeam() {
    inquirer
        .prompt(teamBuildQuestions)
        .then(data => {

            if (data.role === 'intern') {
                createIntern();
            } else if (data.role === "engineer") {
                console.log("engineer hereee")
                createEngineer();
                
            } else {
                console.log("complete")
                createPage();

            }

            //conditional statement depending on what user choice was
        })
}

function createIntern() {
    inquirer
        .prompt(internQuestions)
        .then(data => {


            const createdIntern = new Intern(data.internName, data.id, data.email, data.school)

            teamList.push(createdIntern)

        
            buildTeam();
        })
}

function createEngineer() {
    console.log('inside here')
    inquirer
        .prompt(engineerQuestions)
        .then(data => {


            const createdEngineer = new Engineer(data.engineerName, data.id, data.email, data.github)

            teamList.push(createdEngineer)

            console.log('teamList', teamList)
            
            buildTeam();
        })
}







var teamList = []



function init() {
    inquirer
        .prompt(managerQuestions)
        .then(data => {

            const createdManager = new Manager(data.managerName, data.id, data.email, data.officeNumber)

            teamList.push(createdManager)
            buildTeam();
        })
}

init();
// create the team

function createPage() {

}


const generateTeam = team => {

    //     // create the manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}}</li>
            </ul>
        </div>
    </div>
        `;
    };


    //     // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    //     // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>`
    }
}