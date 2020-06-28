const connection = require('./connection');

class DB {
    constructor(connection) {
      this.connection = connection;
    }
    seeAllEmployees(cb){
        var query =  "SELECT Employee.id, Employee.first_name AS `First Name`, Employee.last_name AS `Last Name`, Role.title, Role.salary, concat(Manager.first_name, ' ', Manager.last_name) as Manager FROM Employee LEFT JOIN Role ON Employee.role_id = Role.id LEFT JOIN Department ON Employee.role_id = Department.id LEFT JOIN Employee As Manager ON  Manager.id =  Employee.manager_id;"
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