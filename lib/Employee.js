// Employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Return name from input
    getName() {
        return this.name
    }

    // Return id from input
    getId() {
        return this.id
    }

    // Return email from input
    getEmail() {
        return this.email
    }

    // Return emplyee type
    getRole() {
        return "Employee"
    }
}

// To be exported
module.exports = Employee;