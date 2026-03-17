const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

const allChats = [
  {
    from: "Harshit",
    to: "Rahul",
    message: "Pushing the Express routes now.", // 31 chars
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24), // 24 hours ago
  },
  {
    from: "Rahul",
    to: "Harshit",
    message: "Great, I'll test the REST API.", // 30 chars
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 23.5), // 23.5 hours ago
  },
  {
    from: "Harshit",
    to: "Sneha",
    message: "Is the ARP spoofing script ready?", // 33 chars
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
  },
  {
    from: "Sneha",
    to: "Harshit",
    message: "Debugging a Python error.", // 25 chars
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 4.8), // 4.8 hours ago
  },
  {
    from: "System",
    // 'to' field intentionally omitted
    message: "MongoDB server restarting...", // 28 chars
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    from: "Harshit",
    to: "Vikram",
    message: "Can we review the DB schema?", // 28 chars
    created_at: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
  },
  {
    from: "Vikram",
    to: "Harshit",
    message: "Sure, let's check normalization.", // 32 chars
    created_at: new Date(Date.now() - 1000 * 60 * 40), // 40 minutes ago
  },
  {
    from: "Priya",
    to: "Harshit",
    message: "Did you finish the OS assignment?", // 33 chars
    created_at: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
  },
  {
    from: "Harshit",
    to: "Priya",
    message: "Almost, just writing about CPUs.", // 32 chars
    created_at: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
  },
  {
    from: "Harshit",
    to: "Aman",
    message: "React frontend is deployed.", // 27 chars
    created_at: new Date(Date.now() - 1000 * 60 * 2), // 2 minutes ago
  },
];

Chat.insertMany(allChats);
