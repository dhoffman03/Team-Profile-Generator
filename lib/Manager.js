// Import employee constuctor 
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)

        this.office = office;
    }

    // Return office number from input
    officeNumber() {
        return this.office;
    }

    // Overwrite employee type to "manager"
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;