DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;

USE employee_tracker;

CREATE TABLE Department (
    id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(100) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DEC(10,2),
    department_id int,
	PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES Department(id)
);

CREATE TABLE Employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN key (role_id) REFERENCES Role(id),
    FOREIGN Key (manager_id) REFERENCES Employee(id)
)


