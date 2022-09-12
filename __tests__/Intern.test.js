const Intern = require("../lib/Intern");

//creates Intern object
test("Creates a new intern object", () => {
    const intern = new Intern("Dymond", 28, "dymond.hoffman03@gmail.com", "UoM");

    expect(intern.getSchool).toEqual(expect.any(String));
});

//gets school from getSchool
test("Should get school of intern", () => {
    const intern = new Intern("Dymond", 28, "dymond.hoffman03@gmail.com", "UoM");
    
    expect(employee.getSchool()).toEqual(expect.any(String));
});

//gets role from getRole()
test("Should get role of intern", () => {
    const intern = new Intern("Dymond", 28, "dymond.hoffman03@gmail.com", "UoM");
   
    expect(employee.getRole()).toEqual("Intern");
});
