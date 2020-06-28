const DB = require("./db");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const cTable = require('console.table');

function startAnimation() {
  console.log(
    chalk.red(
      figlet.textSync("EMPLOYEE\nTRACKER", { horizontalLayout: "fitted" })
    )
  );
}
function runLookUp() {
  startAnimation();
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: ["View all employees", "Add Role"],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View all employees":
          DB.seeAllEmployees(function cb(res){
            console.table(res);
            runLookUp()
          })
          break;

        case "Add Role":
          roleToAdd();
      }
    });
}

function roleToAdd() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What role would you like to add?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the average salary for Role?",
      },
    ])
    .then(function (answer) {
      DB.addRole(answer)
    });
}
runLookUp();
