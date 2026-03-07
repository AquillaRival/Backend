const express = require("express"); // Import the express module
const app = express();              // Initialize the express application
const port = 8080;                  // Define the port number for the server
const path = require("path");       // Import 'path' to handle file and directory paths
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

// Middleware to parse incoming request bodies (form data)
// 'extended: true' allows for rich objects and arrays to be encoded
app.use(express.urlencoded({extended: true}));

app.use(methodOverride("_method"));

// Set EJS as the templating engine for rendering HTML
app.set("view engine", "ejs");

// Define the directory where your .ejs template files are located
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, Images, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// --- DATA SOURCE ---

// Dummy data array: Ye aapke posts ko temporary memory mein store karega
let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "_.harshit._",
        content: "I love doorva!"
    },
    {
        id: uuidv4(),
        username: "_.doorva._",
        content: "I love harshit!"
    },
];

// --- ROUTES ---

// 1. Index Route: Saare posts ko dikhane ke liye (Read)
app.get("/posts", (req, res) => {
    // index.ejs render hoga aur 'posts' array template mein pass ho jayega
    res.render("index.ejs", { posts });
});

// 2. New Route: Naya post banane ke liye form render karega
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// 3. Create Route: Form submit hone ke baad data yahan aayega (Create)
app.post("/posts", (req, res) => {
    // Destructuring data from request body (form fields)
    let { username, content } = req.body;
    let id = uuidv4();
    // Naye data ko 'posts' array mein add karna
    posts.push({ id, username, content });
    
    // Redirecting to posts
    res.redirect("/posts");
});

// 4. Show Route: GET route to show details of a single post based on its unique ID (Show)
app.get("/posts/:id", (req, res) => {
    // URL se ID extract karna (e.g., /posts/1234 mein se '1234')
    let { id } = req.params;
    
    // 'posts' array mein se wo post dhoondhna jiski ID match karti ho
    let post = posts.find((p) => id === p.id);
    
    // 'show.ejs' template render karna aur usme specific post ka data bhejna
    res.render("show.ejs", { post });
});

// 5. Edit Route: specific post ko edit karne ke liye form render karta hai
app.get("/posts/:id/edit", (req, res) => {
    // URL parameters se post ki unique ID nikaalna
    let { id } = req.params;
    
    // 'posts' array mein se uss ID wala specific post object dhoondhna
    let post = posts.find((p) => id === p.id);
    
    // 'edit.ejs' file render karna aur usme 'post' ka data pass karna 
    // taaki form ke andar purana data pehle se bhara hua (pre-filled) dikhe
    res.render("edit.ejs", { post });
});

// 6. Patch Route: (Update) Specific post ke content ko update karne ke liye
app.patch("/posts/:id", (req, res) => {
    // URL se post ki unique ID extract karna
    let { id } = req.params;
    
    // Form ya request body se naya content (newContent) nikaalna
    let newContent = req.body.content;
    
    // Array mein se wahi post dhoondhna jiski ID match hoti hai
    let post = posts.find((p) => id === p.id);
    
    // Post ke purane content ko naye content se replace (update) karna
    post.content = newContent;
    
    // Update hone ke baad wapas saare posts dikhane ke liye redirect karna
    res.redirect("/posts");
});

//7. DELETE route to remove a specific post from the array
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    
    // Filter returns a new array without the post that matches the ID
    // We re-assign 'posts' to this new filtered array
    posts = posts.filter((p) => id !== p.id);
    
    // Redirecting back to the index page to see the updated list
    res.redirect("/posts");
});

// Define a basic route for the homepage
app.get("/", (req, res) => {
    res.send("server working well!!!");
});

// Start the server and listen for requests on the specified port
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});