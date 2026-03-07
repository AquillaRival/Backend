# Quora-Clone REST API

A simple, stateful backend application demonstrating **RESTful API** architecture using Node.js, Express, and EJS. This project implements full CRUD (Create, Read, Update, Delete) functionality for social media-style posts.

---

## Tech Stack
* **Backend:** Node.js, Express.js
* **Frontend/Templating:** EJS (Embedded JavaScript)
* **Styling:** Vanilla CSS
* **Packages:** `uuid` (for unique IDs), `method-override` (for PATCH/DELETE requests)

---

## The Flow of `index.js` (Server Logic)

The `index.js` file is the heart of this application. It executes in a specific top-to-bottom sequence:

1. **Imports (Require Statements):** The file starts by importing necessary modules (`express`, `path`, `uuid`, `method-override`). It creates the `app` instance.
2. **Middleware Configuration:** Before handling any routes, Express runs middleware:
   * `express.urlencoded`: Parses incoming form data so we can use `req.body`.
   * `methodOverride`: Intercepts forms to allow `PATCH` and `DELETE` requests.
   * `express.static`: Grants public access to the `/public` folder for CSS/JS.
   * `app.set`: Configures EJS as the templating engine and points it to the `/views` folder.
3. **Data Source (State):** Initializes a temporary `posts` array in memory with some dummy data. This acts as our mock database.
4. **Routing Logic (The Controller):** Listens for specific URL paths and HTTP methods. This is where the CRUD logic lives (filtering arrays, finding posts, pushing new data).
5. **Server Initialization:** `app.listen(8080)` starts the server, keeping it alive to continuously listen for incoming requests.

## API Endpoints (The CRUD Flow)

| HTTP Method | Route | Description | Action |
| :--- | :--- | :--- | :--- |
| **GET** | `/posts` | Renders `index.ejs` | **READ** all posts |
| **GET** | `/posts/new` | Renders `new.ejs` (Empty Form) | **CREATE** (View) |
| **POST** | `/posts` | Adds new post to array & redirects | **CREATE** (Logic) |
| **GET** | `/posts/:id` | Renders `show.ejs` | **READ** single post |
| **GET** | `/posts/:id/edit`| Renders `edit.ejs` (Pre-filled form)| **UPDATE** (View) |
| **PATCH** | `/posts/:id` | Updates post content & redirects | **UPDATE** (Logic)|
| **DELETE**| `/posts/:id` | Removes post from array & redirects| **DELETE** |

## Core Concepts Implemented

* **`req.body`**: Extracted using the `express.urlencoded` middleware to read parsed data sent from HTML forms.
* **`req.params`**: Used to extract dynamic routing variables from the URL (e.g., extracting the UUID from `/posts/:id`).
* **Method-Override**: Since HTML forms natively only support `GET` and `POST`, we use the `method-override` package (`?_method=PATCH` or `DELETE`) to properly implement RESTful update and delete requests.
* **In-Memory Storage**: Data is temporarily managed via a JavaScript array (`let posts = [...]`). Restarting the server resets the data state.

## Folder Structure
This project follows a standard Express pattern separating logic, views, and static assets:

```text
REST/
├── node_modules/      # Installed npm packages (managed by npm)
├── public/            # Static files served directly to the browser
│   └── style.css      # Custom styling for EJS templates
├── views/             # EJS template files (The UI layer)
│   ├── edit.ejs       # Form to update an existing post
│   ├── index.ejs      # Displays the list of all posts
│   ├── new.ejs        # Form to create a new post
│   └── show.ejs       # Displays a single post in detail
├── index.js           # Main server file containing all routing and CRUD logic
├── package.json       # Project metadata and dependencies list
├── package-lock.json  # Exact dependency tree for consistent installs
└── README.md          # Project documentation