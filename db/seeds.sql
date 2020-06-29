INSERT INTO Department (department_name) VALUES
('Quality-Assurance'),('transportation');

INSERT INTO Role ( title, salary,department_id ) VALUES
("Guitar-Inspector", 8000.00, 1),
("Transportation-Coordinator" , 7000.00, 2);

INSERT INTO Employee ( first_name, last_name, role_id, manager_id  ) VALUES
("Steve", "Cornell", 2, NULL),
("Stan", "Castillo", 1, NULL),
('Cesar', 'Gomez', 1, 2),
('Virginia', 'Lopez', 2, 1),
("Niko" , "Grillo", 1, 2);

-- Left join to select all Roles and show department_id
-- SELECT Role.id, Role.title, Role.salary, Department.department_name
-- FROM
-- Role
-- LEFT JOIN Department  ON Role.department_id = Department.id;