const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// TOKEN CHECKING MIDDLEWARE FUNCTION
const checktoken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }
  throw new ExpressError(401, "ACCESS DENIED !!!");
};

// API ROUTE
app.get("/api", checktoken, (req, res) => {
  res.send("data");
});

// RANDOM ROUTE
app.get("/random", (req, res) => {
  res.send("This is random route...");
});

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Hi, I am root...");
});

// ERROR ROUTE
app.get("/err", (req, res) => {
  abcd = abcd;
});

// ACTIVITY
app.get("/admin", (req, res) => {
  throw new ExpressError(403, "ACCESS FORBIDDEN");
});

// CUSTOM ERROR HANDELING MIDDLEWARE
app.use((err, req, res, next) => {
  let { status = 500, message = "Internal Error!!!" } = err;
  res.status(status).send(message);
});

// BASIC ERROR HANDELING MIDDLEWARE
// app.use((err, req, res, next) => {
//   console.log("------ ERROR ------");
//   next(err);
// });

// CUSTOM NON ERROR HANDELING MIDDLEWARE
// app.use((req, res) => {
//   res.status(404).send("Page not found!!!");
// });

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
