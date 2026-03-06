const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let {User, password} = req.query;
    res.send(`Standard GET response. Welcome ${User}`);
})

app.post("/register", (req, res) => {
    let {User, password} = req.body;
    res.send(`Standard POST response. Welcome ${User}`);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})