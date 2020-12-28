const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const generateEmployees = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});

module.exports = generateEmployees;




// use ES6 syntax to return
// generateTeam

// create the employee section
const generateEmployees = array => {
    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Web Team Generator</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
  };



module.exports = page-template.js

module.exports = templateData => {
  // destructure page data by section
  const { Manager, Engineer, Intern, ...Employee } = templateData;
  
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Web Team Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>

  <body>
  <header>
      <div class = "container flex-row justify-space-between align-center py-3">
      <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          <nav class="flex-row">
              <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
                  header.github
                  }">GitHub
              </a>
          </nav>
      </div>
  </header>
  
  <main class="container my-5">
      ${generateAbout(about)}
      ${generateProjects(projects)}
  </main>
  <footer class="container text-center py-3">
  <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
  </footer>
  </body>
  </html>
    
  `;
};