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

// INSERT ONE BY ONE...
/*
const user1 = new User({
    name: "Adam",
    email: "adam@yahoo.in",
    age: 40
})

user1.save();

const user2 = new User({
    name: "Eve",
    email: "eve@gmail.com",
    age: 36
})

const user3 = new User({
    name: "Shelly",
    email: "shellu@zoho.com",
    age: 26
})

user2
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

user3.save();
*/


// INSERT MANY.
/*
User.insertMany([
    {name: "Tony", email: "tony@email.com", age: 50},
    {name: "Peter", email: "peter@email.com", age: 30},
    {name: "Bruce", email: "bruce@email.com", age: 47}
])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
}); 
*/

// FINDING USER...
/* 
User.find({})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});
 */

/* User.findOne({age: {$gte: 40}})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
}); */