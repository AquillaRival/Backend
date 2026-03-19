# 🗃️ Database_Learning — Complete Database Learning Journey

A structured collection of hands-on practice projects and scripts covering both **SQL (MySQL)** and **NoSQL (MongoDB)** databases from scratch. This repository documents my complete backend database learning path — from writing raw SQL queries to building full-stack CRUD applications using Mongoose and Express.

> 🎯 *Every folder here represents a milestone in my backend development learning journey.*

---

## 💻 Tech Stack

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

---

## 📂 Directory Overview

### 📁 [`MYSQL`](./MYSQL) — SQL Fundamentals
> *Pure SQL practice — learning relational databases from the ground up.*

A collection of `.sql` script files covering every core MySQL concept, organized file-by-file:

| File | Concepts Covered |
| :--- | :--- |
| `first.sql` | CREATE/DROP DATABASE, basic tables, INSERT, SELECT |
| `tablequeries.sql` | Full Instagram schema — DDL, DML, constraints, FK |
| `where_clauses.sql` | WHERE, AND/OR, BETWEEN, IN, NOT IN |
| `limit_and_order_by_clauses.sql` | LIMIT, ORDER BY ASC/DESC |
| `aggregate.sql` | MAX, MIN, COUNT, AVG, SUM |
| `groupby_and_having_clause.sql` | GROUP BY, HAVING |
| `Q1.sql` | Practice — Teacher table with ALTER & UPDATE |
| `Q2.sql` | Practice — Student grades with conditional UPDATE |

---

### 📁 [`Mongo`](./Mongo) — MongoDB & Mongoose Basics
> *Introduction to NoSQL — schemas, models, and CRUD with Mongoose ODM.*

Node.js scripts that connect to a local MongoDB instance and practice all CRUD operations:

| File | Concepts Covered |
| :--- | :--- |
| `index.js` | Full CRUD — insertOne, insertMany, find, updateOne, deleteOne |
| `books.js` | Schema validation (`required`), `.save()`, promise handling |

---

### 📁 [`SQLCLASS`](./SQLCLASS) — Node.js + MySQL Full-Stack App
> *Connecting SQL to the web — building a real Express app on top of MySQL.*

A complete Express.js web application that performs CRUD on a MySQL `user` table, with EJS templating and password-protected updates:

| Feature | Detail |
| :--- | :--- |
| View all users | `GET /user` — fetches from MySQL |
| Edit username | `PATCH /user/:id` — with password verification |
| Home stats | `GET /` — shows total user count |
| DB Seeding | `seed.js` — inserts 100 fake users via Faker.js |

---

### 📁 [`Node-Mongo Chat App`](./Node-Mongo-Chat-App) — MongoDB Full-Stack CRUD App
> *Putting it all together — a complete full-stack app with MongoDB.*

A fully functional chat application with all 4 CRUD operations, built with Express, MongoDB, and EJS:

| Feature | Detail |
| :--- | :--- |
| View all chats | `GET /chats` — renders full chat feed |
| Create new chat | `POST /chats` — saves to MongoDB |
| Edit a chat | `PUT /chats/:id` — updates message |
| Delete a chat | `DELETE /chats/:id` — removes from DB |

---

## 🗂️ Folder Structure

```text
📦 Database_Learning
 ┣ 📂 MYSQL                        # Raw SQL scripts — MySQL fundamentals
 ┃ ┣ 📜 first.sql
 ┃ ┣ 📜 tablequeries.sql
 ┃ ┣ 📜 where_clauses.sql
 ┃ ┣ 📜 limit_and_order_by_clauses.sql
 ┃ ┣ 📜 aggregate.sql
 ┃ ┣ 📜 groupby_and_having_clause.sql
 ┃ ┣ 📜 Q1.sql
 ┃ ┗ 📜 Q2.sql
 ┃
 ┣ 📂 Mongo                        # Mongoose + MongoDB CRUD scripts
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 books.js
 ┃ ┗ 📜 package.json
 ┃
 ┣ 📂 SQLCLASS                     # Express + MySQL full-stack app
 ┃ ┣ 📂 views
 ┃ ┣ 📂 public
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 seed.js
 ┃ ┣ 📜 schema.sql
 ┃ ┗ 📜 package.json
 ┃
 ┣ 📂 Node-Mongo Chat App          # Express + MongoDB full-stack chat app
 ┃ ┣ 📂 models
 ┃ ┣ 📂 views
 ┃ ┣ 📂 public
 ┃ ┣ 📜 index.js
 ┃ ┗ 📜 package.json
 ┃
 ┗ 📜 README.md
```

---

## 🧭 Learning Path

```
SQL Basics (MYSQL)
      ↓
NoSQL Basics (Mongo)
      ↓
SQL + Express Web App (SQLCLASS)
      ↓
MongoDB + Express Full-Stack App (Node-Mongo Chat App)
```

---

## 📚 All Concepts Covered

| Category | Concepts |
| :--- | :--- |
| **SQL DDL** | CREATE, ALTER, DROP, TRUNCATE |
| **SQL DML** | INSERT, UPDATE, DELETE |
| **SQL DQL** | SELECT, WHERE, ORDER BY, LIMIT, DISTINCT |
| **SQL Clauses** | GROUP BY, HAVING, BETWEEN, IN, NOT IN |
| **SQL Functions** | MAX, MIN, AVG, COUNT, SUM |
| **SQL Constraints** | PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT |
| **MongoDB** | connect, Schema, Model, insertOne, insertMany, find, updateOne, deleteOne |
| **Mongoose** | Schema validation, ODM methods, promise handling |
| **Express.js** | REST routes, middleware, method-override, EJS templating |
| **Full-Stack** | MySQL + Express app, MongoDB + Express CRUD app |
| **Dev Tools** | Faker.js for DB seeding, UUID generation |