CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE teacher (
	id INT,
    name VARCHAR(30),
    subject VARCHAR(30),
    salary INT
); 

ALTER TABLE teacher
MODIFY id INT PRIMARY KEY; 

INSERT INTO teacher
(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM teacher;

SELECT * FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE salary ctc INT;

SET SQL_SAFE_UPDATES = 0;

UPDATE teacher
SET ctc = ctc + ((ctc/100) * 25);

ALTER TABLE teacher
ADD COLUMN city VARCHAR(20) DEFAULT "gurgaon";

ALTER TABLE teacher
DROP COLUMN ctc;