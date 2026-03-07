CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;

CREATE TABLE user (
	id INT UNIQUE PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    age INT CONSTRAINT age_check CHECK (age >= 13),
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT DEFAULT 0
);

INSERT INTO user
(id, name, age, email, followers, following)
VALUES
(1, "adam", 14, "adam@yahoo.com", 123, 456),
(2, "bob", 15, "bob123@yahoo.com", 200, 567),
(3, "casey", 16, "casey234@gmail.com", 300, 824),
(4, "donald", 17, "donald@zoho.com", 250, 351);

SELECT * FROM user;

CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);