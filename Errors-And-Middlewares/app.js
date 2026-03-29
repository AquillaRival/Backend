const express = require("express");
const app = express();

// app.use("/random", (req, res, next) => {
//   console.log("Hi, I am middleware.");
//   //   res.send("Middleware Finished");
//   next();
// });

// const checkToken = (req, res, next) => {
//   let { token } = req.query;
//   if (token === "giveaccess") {
//     next();
//   }
//   throw new Error("Access Denied");
// };

// app.get("/api", checkToken, (req, res) => {
//   res.send("Data");
// });

// app.get("/random", (req, res) => {
//   res.send("This is random route...");
// });

// app.get("/", (req, res) => {
//   res.send("Hi, I am root...");
// });

// app.use((req, res) => {
//   res.send("Page not found!!!");
// });

// app.listen(8080, () => {
//   console.log("Listening on port 8080");
// });

// app.get("/err", (req, res) => {
//   abcd = abcd;
// });

// Error Handeling Middlewares...

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.use((err, req, res, next) => {
  console.log("--------ERROR---------");
  next(err);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
