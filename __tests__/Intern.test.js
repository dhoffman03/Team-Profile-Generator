const Intern = require("../lib/Intern");

//creates Intern object
test("Creates a new intern object", () => {
    const intern = new Intern("Dymond", 28, "dymond.hoffman03@gmail.com", "UoM");

    expect(intern.school).toEqual(expect.any(String));
});

//gets school from getSchool
test("Should get school of intern", () => {
    const intern = new Intern("Dymond", 28, "dymond.hoffman03@gmail.com", "UoM");
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//gets role from getRole()
test("Should get role of intern", () => {
    const intern = new Intern("Dymond", 28, "dymond.hoffman03@gmail.com", "UoM");
   
    expect(intern.getRole()).toEqual("Intern");
});
