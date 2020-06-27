const connection = require('./connection');
const cTable = require('console.table');

class DB {
    constructor(connection) {
      this.connection = connection;
    }
    seeAllEmployees(){
        var query =  "SELECT Employee.first_name, Employee.last_name, Role.title, Role.Salary, Department.department_name FROM Employee LEFT JOIN Role ON Employee.role_id = Role.id LEFT JOIN Department ON Role.id = Department.id;"
        connection.query(query, (err,res) => {
            if (err) throw err;
            console.table(res)
        })
    }
    addRole(role) {
        connection.query(
            "INSERT INTO Role SET ?", role, (err, res) => {
                if(err) throw err;
                console.log("Added Role to the Database!")
            }
        )
    }
}

  module.exports = new DB();