const Manager = require("../lib/Manager");

//creates Manager object
test("Creates a new manager object", () => {
    const manager = new Manager("Dymond", 28, "dymond.hoffman03@gmail.com", 7);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//gets office number from officeNumber()
test("Should get office number of manager", () => {
    const manager = new Manager("Dymond", 28, "dymond.hoffman03@gmail.com", 7);
    
    expect(employee.officeNumber()).toEqual(expect.any(String));
});

//gets role from getRole()
test("Should get role of manager", () => {
    const manager = new Manager("Dymond", 28, "dymond.hoffman03@gmail.com", 7);
    
    expect(employee.getRole()).toEqual("Manager");
});
