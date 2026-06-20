Day 93 – Mini Project: Student Database

Task:
Create DB
Add students
Perform queries (CRUD + joins)

CREATE TABLE student3 (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    course_id INT
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50)
);

INSERT INTO courses VALUES
(101, 'DBMS'),
(102, 'Java'),
(103, 'Python');

INSERT INTO student3 VALUES
(1, 'Shivam', 21, 101),
(2, 'Rahul', 22, 102),
(3, 'Aman', 20, 103);

UPDATE student3
SET age = 23
WHERE student_id = 2;

DELETE FROM student3
WHERE student_id = 3;