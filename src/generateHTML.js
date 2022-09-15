// Create Manager card
const generateManager = (manager) => {
    return `
    <div class="m-3 custom-card" style="width: 20rem;">
    <div class="text-center p-3 custom-card-header">
      <h2>${manager.name}</h2>
      <h3>Manager</h3>
    </div>
    <div class="m-4 custom-ul">
      <ul class="list-group list-group-flush">
        <li id="id" class="custom-list custom-border">ID: ${manager.id}</li>
        <li id="email" class="custom-list custom-border">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li id="office" class="custom-list">Office Number: ${manager.officeNum}</li>
      </ul>
    </div>
  </div>
    `;
}


// Create Engineer card
const generateEngineer = (engineer) => {
    return `
    <div class="m-3 custom-card" style="width: 20rem;">
    <div class="text-center p-3 custom-card-header">
      <h2>${engineer.name}</h2>
      <h3>Engineer</h3>
    </div>
    <div class="m-4 custom-ul">
      <ul class="list-group list-group-flush">
        <li id="id" class="custom-list custom-border">ID: ${engineer.id}</li>
        <li id="email" class="custom-list custom-border">Email: mailto:${.email}<a href="">${engineer.email}</a></li>
        <li id="giithub" class="custom-list">Github: <a href="https://github.com/${engineer.github}">GitHub: ${engineer.github}</a></li>
      </ul>
    </div>
  </div>
    `;
}


// Create Intern card
const generateIntern = (intern) => {
    return `
    <div class="m-3 custom-card" style="width: 20rem;">
    <div class="text-center p-3 custom-card-header">
      <h2>${intern.name}</h2>
      <h3>Intern</h3>
    </div>
    <div class="m-4 custom-ul">
      <ul class="list-group list-group-flush">
        <li id="id" class="custom-list custom-border">ID: ${intern.id}</li>
        <li id="email" class="custom-list custom-border">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li id="school" class="custom-list">School: ${intern.school}</li>
      </ul>
    </div>
  </div>
    `;
}


// Push array
generateHTML = (data) => {

}

// GenerateHTML page
const generatePage = (employeeCards) => {
    return `
    <!DOCTYPE html>
<html lang=“en”>

<head>
  <meta charset=“UTF-8>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>


<body>
  <header class="d-flex flex-wrap justify-content-center p-3">
    <h1>Team Profile</h1>
  </header>

  <main>

    <div class="container">
      <div class="d-flex flex-wrap justify-content-center pt-5">
        <---Team Cards-->
        ${employeeCards}
      </div>
    </div>

  </main>

</body>

</html>
    `;
}


// export to index.js
module.exports = generateHTML;