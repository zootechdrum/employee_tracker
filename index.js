const DB = require("./db");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const cTable = require("console.table");
const { findEmployeeByManager } = require("./db");

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
        "View all Departments",
        "Update Employee Role",
        "View Employees by Manger",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View all employees":
          viewAllEmployees();
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
        case "View all Departments":
          viewAllDepartments();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "View Employees by Manger":
          viewEmployeesByManager();
          break;
        default:
          beginPrompt();
          break;
      }
    });
}

function viewAllEmployees() {
  DB.findAllEmployees(function cb(res) {
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

function viewAllDepartments() {
  DB.findAllDepartments(function (result) {
    if (result) {
      console.table(result);
    }
  });
  beginPrompt();
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
      DB.addDepartment(answer, function (text) {
        console.log(chalk.yellow(text));
        beginPrompt();
      });
    });
}
function updateEmployeeRole() {
  let listOfEmployees = [];
  let listOfRoles = [];

  DB.findAllEmployees(function cb(res) {
    listOfEmployees = res.map((result) => ({
      name: result["First Name"],
      value: result.id,
    }));

    DB.findAllRoles(function cb(res) {
      console.log(res);
      listOfRoles = res.map((result) => ({
        name: result.title,
        value: result.id,
      }));

      inquirer
        .prompt([
          {
            name: "employeeToUpdate",
            type: "rawlist",
            message: "Choose the employee you want to update the role for",
            choices: listOfEmployees,
          },
          {
            name: "setRole",
            type: "rawlist",
            message: "What new role did you want to give employee?",
            choices: listOfRoles,
          },
        ])
        .then(function (answer) {
          console.log(answer);
          DB.updateEmployeRole(answer, function (text) {
            console.log(chalk.yellow(text));
            beginPrompt();
          });
        });
    });
  });
}
function viewEmployeesByManager() {
  let listOfManagers = [];

  DB.findAllManagers(function (managers) {
    listOfManagers = managers.map((manager) => ({
      name: manager.first_name,
      value: manager.id,
    }));

    inquirer
      .prompt([
        {
          name: "managerId",
          type: "list",
          message: "Please choose a manager",
          choices: listOfManagers,
        },
      ])
      .then(function (answer) {
        findEmployeeByManager(answer, function (employee) {
          console.table(employee);
        });
      });
  });
}

startAnimation();
beginPrompt();
