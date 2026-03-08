const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// 1. Database se connect karo
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Harshit@2005'
});

// 2. Faker function
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};

// 3. Data generate karo
let query = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];

for (let i = 0; i < 100; i++) {
    data.push(getRandomUser());
}

// 4. Data insert karo aur connection close karo
try {
    connection.query(
        query,
        [data],
        function(err, result) {
            if (err) throw err;
            console.log(`Success! ${result.affectedRows} dummy users inserted.`);
            connection.end(); // Kaam khatam hone ke baad connection close karna zaroori hai
        }
    );
} catch(err) {
    console.log(err);
    connection.end();
}