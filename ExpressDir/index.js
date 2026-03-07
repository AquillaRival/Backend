const express = require('express');
const app = express();

// console.dir(app);

let port = 8080; // 8080

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("Request Recieved!!!");
//     res.send("<h1>This is the response</h1>");
// });

app.get("/", (req, res) => {
    res.send("hello i am root!!!");
})

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`welcome to the page of @${username}`);
})

app.get("/search", (req, res) => {
    let { q, color } = req.query;
    res.send(`Search result for query: ${q} of color ${color}`);
})

// app.get("/help", (req, res) => {
//     res.send("You contacted help path!!!");
// })

// app.get(/.*/, (req, res) => {
//     res.send("This path does not exist!!!")
// })

// app.post("/login", (req, res) => {
//     res.send("Login successful");
// });