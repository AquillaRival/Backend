SELECT name, age
FROM user
WHERE age + 1 = 18;

SELECT name, age
FROM user
WHERE age > 15 AND followers > 200;

SELECT name, age
FROM user
WHERE age > 15 OR followers > 200; 

SELECT name, age
FROM user
WHERE age BETWEEN 15 AND 17;

SELECT name, age, followers
FROM user
WHERE email in ("adam@yahoo.com", "donald@zoho.com");

SELECT name, age, email
FROM user
WHERE age NOT IN (14,16);

