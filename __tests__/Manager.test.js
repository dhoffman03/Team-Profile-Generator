const Manager = require("../lib/Manager");

//creates Manager object
test("Creates a new manager object", () => {
    const manager = new Manager("Dymond", 28, "dymond.hoffman03@gmail.com", 7);

    //gets office number from officeNum()
    expect(manager.officeNum()).toEqual(expect.any(Number));
});

//gets role from getRole()
test("Should get role of manager", () => {
    const manager = new Manager("Dymond", 28, "dymond.hoffman03@gmail.com", 7);
    
    expect(manager.getRole()).toEqual("Manager");
});
