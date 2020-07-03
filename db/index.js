const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findAllEmployees(cb) {
    const query =
      "SELECT Employee.id, Employee.first_name AS `First Name`, Employee.last_name AS `Last Name`, Role.title, Role.salary, concat(Manager.first_name, ' ' , Manager.last_name) as Manager FROM Employee LEFT JOIN Role ON Employee.role_id = Role.id LEFT JOIN Department ON Role.department_id = Department.id LEFT JOIN Employee As Manager ON  Manager.id = Employee.manager_id;";
    this.connection.query(query, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }

  findAllRoles(cb) {
    this.connection.query("SELECT * FROM Role", (err, res) => {
      cb(res);
    });
  }
  updateEmployeRole({ employeeToUpdate, setRole }, cb) {
    this.connection.query(
      "UPDATE Employee SET role_id = ? WHERE id = ?",
      [setRole, employeeToUpdate],
      (err, res) => {
        console.log(res);
      }
    );
  }

  addRole(role, cb) {
    this.connection.query("INSERT INTO Role SET ?", role, (err, res) => {
      if (err) throw err;
      cb("Added Role to the Database!");
    });
  }
  findAllDepartments(cb) {
    this.connection.query("SELECT * FROM Department", (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }
  addDepartment(department, cb) {
    this.connection.query(
      "INSERT INTO Department SET ?",
      department,
      (err, res) => {
        if (err) throw err;
        cb("Added Department!");
      }
    );
  }
}

module.exports = new DB(connection);
