const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Harshit@2005'
});

// HOME ROUTE
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
                if (err) throw err;
                let count = result[0]["count(*)"];
                res.render("home.ejs", { count });
            }
        )
    } catch (err) {
        console.log(err);
        res.send("Some error in data base...");
    }
});

// SHOW ROUTE
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("show.ejs", { users });
        })
    } catch (err) {
        res.send("Some error in database...");
        console.log(err);
    }
});

app.get("/user/:id/edit", (req, res) => {
    let q = `SELECT * FROM user WHERE id = ?`;
    let id = req.params.id;
    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        })
    } catch (err) {
        console.log(err);
        res.send("Some error in database.");
    }
})

app.patch("/user/:id", (req, res) => {
    let id = req.params.id;
    let { username: newUsername, password: formPass } = req.body;
    let q = `SELECT * FROM user WHERE id = ?`;
    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("Wrong Password!!!");
            } else {
                let updateQuery = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
                connection.query(updateQuery, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                })
            }
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in database.");
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});