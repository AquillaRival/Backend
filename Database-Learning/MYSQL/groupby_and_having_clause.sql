SELECT age, count(id)
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age; 

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200; 
