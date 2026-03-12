const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("Connection successfull!!!");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User",userSchema);
// const Employee = mongoose.model("Employee",userSchema);

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 40
// })

// const user2 = new User({
//     name: "Eve",
//     email: "eve@gmail.com",
//     age: 36
// })

const user3 = new User({
    name: "Shelly",
    email: "shellu@zoho.com",
    age: 26
})

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

user3.save();