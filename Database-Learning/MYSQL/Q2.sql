CREATE TABLE student(
	roll_no INT PRIMARY KEY,
    name VARCHAR (30) NOT NULL,
    city VARCHAR(20),
    marks INT DEFAULT 0
);

INSERT INTO student
(roll_no, name, city, marks)
VALUES
(110, "adam", "delhi", 76),
(108, "bob", "mumbai", 65),
(124, "casey", "pune", 94),
(112, "duke", "pune", 80);

SELECT * FROM student;

SELECT * FROM student
WHERE marks > 75;

SELECT DISTINCT city FROM student;

SELECT city
FROM student
GROUP BY city;

SELECT city, max(marks)
FROM student
GROUP BY city;

SELECT avg(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade = "O"
WHERE marks >= 80;

UPDATE student
SET grade = "A"
WHERE marks >= 70 AND marks < 80;

UPDATE student
SET grade = "B"
WHERE marks >= 60 AND marks < 70;