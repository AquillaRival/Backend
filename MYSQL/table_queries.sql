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

INSERT INTO user
(id, name, age, email, followers, following)
VALUES
(5, "mickey", 18, "mickey@zoho.com", 210, 310),
(6, "goofy", 19, "goofy@gmail.com", 150, 420),
(7, "minnie", 17, "minnie@yahoo.com", 280, 360),
(8, "daisy", 18, "daisy@hotmail.com", 260, 345),
(9, "pluto", 16, "pluto@zoho.com", 190, 290),
(10, "scrooge", 20, "scrooge@mcduck.com", 999, 999),
(11, "huey", 15, "huey@zoho.com", 120, 150),
(12, "dewey", 15, "dewey@zoho.com", 125, 145),
(13, "louie", 15, "louie@zoho.com", 130, 140),
(14, "webby", 16, "webby@gmail.com", 200, 300),
(15, "max", 17, "max.goof@yahoo.com", 240, 320),
(16, "pete", 21, "pete@hotmail.com", 110, 190);

CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO post
(id, content, user_id)
VALUES
(101, "Hello World!", 3),
(102, "Bye Bye", 1),
(103, "Hello Delta!", 3);

SET SQL_SAFE_UPDATES = 0;

UPDATE user
SET FOLLOWERS = 600
WHERE age = 16;

DELETE FROM user
WHERE age = 15;

ALTER TABLE user 
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

ALTER TABLE user 
DROP COLUMN age;

ALTER TABLE user
RENAME TO insta_users;

SELECT * FROM insta_users;

ALTER TABLE insta_users
CHANGE COLUMN followers subs INT DEFAULT 0;

ALTER TABLE insta_users
MODIFY COLUMN subs INT DEFAULT 5;

DROP TABLE post;

TRUNCATE TABLE insta_users;