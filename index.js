// Import generateHTML.js
const generateHTML = require("./src/generateHTML");

// Import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Import modules
const fs = require("fs");
const inquirer = require("inquirer");

// Team array
const teamMembers = []

// Add manager
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'role',
            message: 'Welcome to Team Profile Generator! Are you ready to build your team?',
            default: true,
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the manager.',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            },

        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log("Please enter the manager's ID!");
                    return false;
                } else {
                    return true;

                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Please enter the manager's office number",
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log("Please enter the manager's office number!");
                    return false;
                } else {
                    return true;
                }
            },

        },
    ])
        .then(managerData => {
            const { name, id, email, officeNum } = managerData;
            const manager = new Manager(name, id, email, officeNum);

            teamMembers.push(manager);
            console.log(manager);
        })
};

//const employeeChoice = () => {}


// Add employee
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                    return false;
                }
            },

        },

        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log("Please enter the employee's ID!");
                    return false;
                } else {
                    return true;
                }
            },
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === 'Engineer',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter a github username!");
                    return false;
                }
            },
        },

        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
            when: (input) => input.role === 'Intern',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            },
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        },
    ])

        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === 'Engineer') {
                const employee = new Engineer(name, id, email, github);
                console.log(employee);
                teamMembers.push(employee);


            } else if (role === 'Intern') {
                const employee = new Intern(name, id, email, school);
                console.log(employee);
                teamMembers.push(employee);

            }


            if (confirmAddEmployee) {
                return addEmployee(teamMembers);
            } else {
                return teamMembers;
            }
        })
};

// Generate HTML page using file system
const writeToFile = data => {
    fs.writeFile('README.md', data, (err) =>
        err ? console.log(err) : console.log('Your team profile has been sucessfully added to the index.html!')
    );
}

// Function to initialize app
const init = () => {
    addManager()
        .then(addEmployee)
        .then(teamMembers => {
            return generateHTML(teamMembers);
        })
        .then(pageHTML => {
            return writeToFile();
        })
        // Catch errors
        .catch(err => {
            console.log(err);
        })
}

// Callinitalize function
init();