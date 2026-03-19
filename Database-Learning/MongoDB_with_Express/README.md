# 💬 Node-Mongo Chat App

A full-stack CRUD (Create, Read, Update, Delete) chat application built to understand the core concepts of routing, database management, and server-side rendering.

This project features a clean, responsive, and aesthetic "AliceBlue" UI, allowing users to create new chat messages, view a feed of all conversations, edit existing messages, and delete them.

## 💻 Tech Stack

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- **Templating Engine:** EJS (Embedded JavaScript)
- **ODM:** Mongoose
- **Middleware:** Method-Override (for PUT and DELETE requests)

## ✨ Features

- **Read:** View a continuous feed of all chat messages with timestamps.
- **Create:** Add new messages via a dedicated, stylized form.
- **Update:** Edit existing messages using a dynamically populated form.
- **Delete:** Remove messages instantly from the database.
- **Aesthetic UI:** Consistent modern styling with custom hover effects, focus states, and custom buttons.

## 🚀 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

2. **Navigate into the directory:**

   ```bash
   cd YOUR_REPO_NAME
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Ensure MongoDB is running** on your local machine (`mongodb://127.0.0.1:27017/chatmodel`).

5. **Start the Express server:**

   ```bash
   node index.js
   ```

   _(Server will start running on port 8080)_

6. **Open your browser** and visit: `http://localhost:8080/chats`

## 🗂️ Folder Structure

```text
📦 Chat-App
 ┣ 📂 models
 ┃ ┗ 📜 chat.js         # Mongoose schema and model
 ┣ 📂 public
 ┃ ┣ 📜 style.css       # Global and Index CSS
 ┃ ┗ 📜 edit.css        # Specific CSS for the Edit form
 ┣ 📂 views
 ┃ ┣ 📜 index.ejs       # Main feed showing all chats
 ┃ ┣ 📜 new.ejs         # Form to create a new chat
 ┃ ┗ 📜 edit.ejs        # Form to edit an existing chat
 ┣ 📜 index.js          # Main Express server and Routes
 ┣ 📜 package.json      # Dependencies
 ┗ 📜 README.md
```

## 🛣️ API Routes

| Method   | Endpoint          | Description                            |
| :------- | :---------------- | :------------------------------------- |
| `GET`    | `/chats`          | Displays all chats (Index Route)       |
| `GET`    | `/chats/new`      | Shows the form to create a new chat    |
| `POST`   | `/chats`          | Saves the new chat to the database     |
| `GET`    | `/chats/:id/edit` | Shows the form to edit a specific chat |
| `PUT`    | `/chats/:id`      | Updates the chat in the database       |
| `DELETE` | `/chats/:id`      | Deletes the chat from the database     |
