const Employee = require("../lib/Employee");

//creates Engineer object
test("Creates a new employee object", () => {
    const employee = new Employee("Dymond", 28,"dymond.hoffman03@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets name from getName()
test("Should get name", () => {
    const employee = new Employee("Dymond", 28,"dymond.hoffman03@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));

});

//gets id from getId()
test("Should get id", () => {
    const employee = new Employee("Dymond", 28,"dymond.hoffman03@gmail.com");

    expect(employee.getId()).toEqual(expect.any(String));
});

//gets email from getEmail()
test("Should get email", () => {
    const employee = new Employee("Dymond", 28,"dymond.hoffman03@gmail.com");

    expect(employee.getEmail()).toEqual(expect.any(String));
});

//gets role from getRole()
test("Should get role", () => {
    const employee = new Employee("Dymond", 28,"dymond.hoffman03@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
});

