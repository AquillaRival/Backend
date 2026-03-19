# 🗄️ SQLCLASS — Node.js + MySQL CRUD App

A backend learning project built to understand core concepts of **relational databases**, **SQL queries**, and **server-side rendering** using Node.js and MySQL. This app manages a user database with full **Read & Update** functionality, backed by a MySQL database and seeded with 100 fake users using Faker.js.

> 🎯 *This project is part of my backend development learning journey.*

## 💻 Tech Stack

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

* **Templating Engine:** EJS (Embedded JavaScript)
* **Database Driver:** mysql2
* **Middleware:** Method-Override (for PATCH requests)
* **Data Seeding:** Faker.js + UUID

## ✨ Features

* **Home:** Displays the total count of registered users from the database.
* **Show All Users:** View a list of all users fetched directly from MySQL.
* **Edit User:** Update a user's username after password verification.
* **Password Protection:** Username can only be changed if the correct password is provided.
* **Database Seeding:** Auto-generates 100 fake users using `faker.js` for testing.

## 🗃️ Database Schema

```sql
CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);
```
> Database name: `delta_app` | Table name: `user`

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/SQLCLASS.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd SQLCLASS
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Setup MySQL Database:**
   - Make sure MySQL is running on your local machine.
   - Create the database and table using the schema:
   ```bash
   mysql -u root -p
   ```
   ```sql
   CREATE DATABASE delta_app;
   USE delta_app;
   -- Then run the contents of schema.sql
   ```

5. **Update DB credentials** in `index.js` and `seed.js`:
   ```js
   const connection = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       database: 'delta_app',
       password: 'YOUR_PASSWORD'  // 👈 Change this
   });
   ```

6. **Seed the database** with 100 fake users:
   ```bash
   node seed.js
   ```

7. **Start the server:**
   ```bash
   node index.js
   ```
   *(Server runs on port 8080)*

8. **Open your browser** and visit: `http://localhost:8080`

## 🗂️ Folder Structure

```text
📦 SQLCLASS
 ┣ 📂 views
 ┃ ┣ 📜 home.ejs        # Home page — shows total user count
 ┃ ┣ 📜 show.ejs        # Shows all users from DB
 ┃ ┗ 📜 edit.ejs        # Edit form for updating username
 ┣ 📂 public
 ┃ ┗ 📜 style.css       # Stylesheet
 ┣ 📜 index.js          # Main Express server & all routes
 ┣ 📜 seed.js           # Faker-based DB seeder script
 ┣ 📜 schema.sql        # MySQL table definition
 ┣ 📜 package.json      # Project metadata & dependencies
 ┗ 📜 README.md
```

## 🛣️ API Routes

| Method   | Endpoint         | Description                              |
| :------- | :--------------- | :--------------------------------------- |
| `GET`    | `/`              | Home page — shows total user count       |
| `GET`    | `/user`          | Shows all users from the database        |
| `GET`    | `/user/:id/edit` | Edit form for a specific user            |
| `PATCH`  | `/user/:id`      | Updates username after password check    |

## 📦 Dependencies

| Package           | Purpose                              |
| :---------------- | :----------------------------------- |
| `express`         | Web framework                        |
| `mysql2`          | MySQL database driver                |
| `ejs`             | Templating engine                    |
| `method-override` | Enables PATCH/DELETE via HTML forms  |
| `@faker-js/faker` | Generates fake user data for seeding |
| `uuid`            | Generates unique IDs for users       |