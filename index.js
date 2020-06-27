const DB = require('./db')
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
          "View all employees",
          "View Departments"
        ]
      })
      .then(function(answer) {

        switch (answer.action) {
        case "View all employees":
          console.log(DB.seeAllEmployees());
        }
    });
  }
runLookUp();