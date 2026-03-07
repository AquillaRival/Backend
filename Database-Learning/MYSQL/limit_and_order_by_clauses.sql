-- LIMIT CLAUSE
SELECT name, age, email
FROM user
WHERE age > 12
LIMIT 2;

-- ORDER BY CLAUSE
SELECT id, name, age, email
FROM user
ORDER BY id DESC;