let questionsManager = [
    {
      type: 'input',
      name: 'name',
      message: `What is your manager's name?`,
    },
    {
      type: 'input',
      name: 'number',
      message: 'What is your employee ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },  
    {
      type: 'input',
      name: 'office',
      message: 'What is your office number?',
    },
    {
        type: 'list',
        choices:[
            'Intern',
            'Engineer',
            'Done'
        ],
      name: 'adding',
      message: 'Would you like to add a team member?',
    },
]
/////////////////////////////////////////////////////////////////////
let questionsEngineer = [
    {
      type: 'input',
      name: 'name',
      message: `What is your engineer's name?`,
    },
    {
      type: 'input',
      name: 'number',
      message: `What is your engineer's ID number?`,
    },
    {
      type: 'input',
      name: 'email',
      message: `What is your engineer's email address?`,
    },  
    {
      type: 'input',
      name: 'github',
      message: `What is your engineer's github number?`,
    },
    {
        type: 'list',
        choices:[
            'Engineer',
            'Intern',
            'Done'
        ],
      name: 'adding',
      message: 'Would you like to add a team member?',
    },
]
///////////////////////////////////////////////////////////////////
let questionsIntern = [
    {
      type: 'input',
      name: 'name',
      message: `What is your intern's name?`,
    },
    {
      type: 'input',
      name: 'number',
      message: `What is your interns's ID number?`,
    },
    {
      type: 'input',
      name: 'email',
      message: `What is your intern's email address?`,
    },  
    {
      type: 'input',
      name: 'school',
      message: `What is your intern's school name?`,
    },
    {
        type: 'list',
        choices:[
            'Intern',
            'Engineer',
            'Done'
        ],
      name: 'adding',
      message: 'Would you like to add a team member?',
    },
]

module.exports = {questionsManager, questionsEngineer, questionsIntern}

