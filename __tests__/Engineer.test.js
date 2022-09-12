const Engineer = require("../lib/Engineer");

//creates Engineer object
test("Creates a new engineer object", () => {
    const engineer = new Engineer("Dymond", 28, "dymond.hoffman03@gmail.com", "dhoffman03");

    expect(engineer.github).toEqual(expect.any(String));
});

//gets github from getGithub()
test("Should get engineer's github", () => {
    const engineer = new Engineer("Dymond", 28, "dymond.hoffman03@gmail.com", "dhoffman03");
   
    expect(employee.getGithub()).toEqual(expect.any(String));
});

//gets role from getRole()
test("Should get role of engineer", () => {
    const engineer = new Engineer("Dymond", 28, "dymond.hoffman03@gmail.com", "dhoffman03");
    
    expect(employee.getRole()).toEqual("Engineer");
});