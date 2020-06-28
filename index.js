const DB = require("./db");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const cTable = require("console.table");

function startAnimation() {
  console.log(
    chalk.red(
      figlet.textSync("EMPLOYEE\nTRACKER", { horizontalLayout: "fitted" })
    )
  );
}
function beginPrompt() {
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
          findAllEmployee();
          break;
        case "Add Role":
          roleToAdd();
          break;
      }
    });
}

function findAllEmployee() {
  DB.seeAllEmployees(function cb(res) {
    console.table(res);
    beginPrompt();
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
      DB.addRole(answer);
    });
}
startAnimation();
beginPrompt();
