// Import employee constuctor 
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)

        this.officeNum = officeNum;
    }


    // Overwrite employee type to "manager"
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;