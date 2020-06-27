const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');

function startAnimation(){
    console.log(
        chalk.red(
            figlet.textSync('EMPLOYEE\nTRACKER', { horizontalLayout: 'fitted' })
        )
    );
}
 function runLookUp() {
     startAnimation()
      inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View all employees"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;
  
        case "Find all artists who appear more than once":
          multiSearch();
          break;
  
        case "Find data within a specific range":
          rangeSearch();
          break;
  
        case "Search for a specific song":
          songSearch();
          break;
  
        case "Find artists with a top song and top album in the same year":
          songAndAlbumSearch();
          break;
        }
      });
  }
runLookUp();