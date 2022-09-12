// Import employee constuctor 
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Call employee constructor
        super(name, id, email)

        this.github = github;
    }

    // Return github from input
    getGithub() {
        return this.github;
    }

    // Overwrite employee type to "engineer"
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;