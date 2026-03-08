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
    connection.query(q, (err, result) => {
        if (err) return res.send("Some error in database...");
        let count = result[0]["count(*)"];
        res.render("home.ejs", { count });
    });
});

// SHOW ROUTE
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    connection.query(q, (err, users) => {
        if (err) return res.send("Some error in database...");
        res.render("show.ejs", { users });
    });
});

// EDIT ROUTE
app.get("/user/:id/edit", (req, res) => {
    let q = `SELECT * FROM user WHERE id = ?`;
    let id = req.params.id;
    connection.query(q, [id], (err, result) => {
        if (err) return res.send("Some error in database.");
        let user = result[0];
        if (!user) return res.send("User not found!");
        res.render("edit.ejs", { user });
    });
});

// UPDATE ROUTE
app.patch("/user/:id", (req, res) => {
    let id = req.params.id;
    let { username: newUsername, password: formPass } = req.body;
    let q = `SELECT * FROM user WHERE id = ?`;
    
    connection.query(q, [id], (err, result) => {
        if (err) return res.send("Some error in database.");
        
        let user = result[0];
        if (!user) return res.send("User not found!");
        
        if (formPass != user.password) {
            return res.send("Wrong Password!!!");
        } else {
            let updateQuery = `UPDATE user SET username = ? WHERE id = ?`;
            connection.query(updateQuery, [newUsername, id], (err, result) => {
                if (err) return res.send("Some error in database.");
                res.redirect("/user");
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});