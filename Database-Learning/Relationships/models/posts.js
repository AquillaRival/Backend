const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => console.log("connection successfull")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
}

const UserSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async() => {
    let user = await User.findOne({ username: "rahulkumar" });

    let post2 = new Post({
        content: "Bye Bye World!!!",
        likes: 97,
    })

    post2.user = user;

    await user.save();
    await post2.save();
}

addData();