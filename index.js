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
      choices: [
        "View all employees",
        "View all Roles",
        "Add Role",
        "Add Department",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View all employees":
          findAllEmployee();
          break;
        case "View all Roles":
          findAllRoles();
          break;
        case "Add Role":
          roleToAdd();
          break;
        case "Add Department":
          addDepartment();
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

function findAllRoles() {}

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
      DB.addRole(answer, function (text) {
        console.log(chalk.yellow(text));
        beginPrompt();
      });
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department_name",
        type: "input",
        message: "What is the name of the department you want to add ?",
      },
    ])
    .then(function (answer) {
      DB.addDepartment(answer);
      beginPrompt();
    });
}

startAnimation();
beginPrompt();
