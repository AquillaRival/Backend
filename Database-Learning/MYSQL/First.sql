CREATE DATABASE college;
create database xyz_company;
DROP DATABASE xyz_company;

USE college;

CREATE TABLE student (
	roll_no INT,
    name VARCHAR(30),
    age INT
);

INSERT INTO student
VALUES
(101, "adam", 12),
(102, "bob", 14);

SELECT * FROM student;

SHOW DATABASES;

SHOW TABLES;
