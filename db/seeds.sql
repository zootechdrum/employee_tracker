INSERT INTO Department (department_name) VALUES
('Quality-Assurance'),('transportation');

INSERT INTO Role ( title, salary ) VALUES
("Guitar-Inspector", 8000.00),
("Transportation-Cordinator" , 7000.00);

INSERT INTO Employee ( first_name, last_name, role_id, manager_id  ) VALUES
("Steve", "Cornell", 2, NULL),
("Stan", "Castillo", 1, NULL),
('Cesar', 'Gomez', 1, 2),
('Virginia', 'Lopez', 2, 1),
("Niko" , "Grillo", 1, 2);