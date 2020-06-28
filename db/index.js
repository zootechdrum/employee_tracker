const connection = require('./connection');

class DB {
    constructor(connection) {
      this.connection = connection;
    }
    seeAllEmployees(cb){
        var query =  "SELECT Employee.first_name, Employee.last_name, Role.title, Role.Salary, Department.department_name FROM Employee LEFT JOIN Role ON Employee.role_id = Role.id LEFT JOIN Department ON Role.department_id = Department.id;"
        connection.query(query, (err,res) => {
            if (err) throw err;
            cb(res)
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