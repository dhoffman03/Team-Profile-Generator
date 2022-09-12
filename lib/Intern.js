// Import employee constuctor 
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    // Return school from input
    getSchool() {
        return this.school;
    }

    //Overwrite employee type to "intern"
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;