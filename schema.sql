DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;

USE employee_tracker;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(100) NULL
    PRIMARY KEY (id)
)

Create TABLE role (
    id INT NOT NULL,
    title VARCHAR(30)
    salary
    PRIMARY KEY (id)
)