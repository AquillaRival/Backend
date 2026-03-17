const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
  .then(() => {
    console.log("connection successfull!!!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatmodel");
}

let chat1 = new Chat({
  from: "Adam",
  to: "Shelly",
  message: "Send me your exam sheets",
  created_at: new Date(),
});

chat1.save().then((res) => {
  console.log(res);
});

app.get("/", (req, res) => {
  res.send("root is working!!!");
});

app.listen(8080, () => {
  console.log(`Server is listening on port 8080...`);
});
