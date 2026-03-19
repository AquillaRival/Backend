# 🍃 Mongo — Mongoose & MongoDB Learning Practice

A collection of hands-on practice scripts written while learning **MongoDB** with **Mongoose ODM** in Node.js. Each file explores a different aspect — from defining schemas and models to performing full **CRUD operations** using both `.save()` and built-in Mongoose methods.

> 🎯 *This directory is part of my backend development learning journey.*

## 💻 Tech Stack

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* **ODM:** Mongoose v9
* **Database:** MongoDB (local — `mongodb://127.0.0.1:27017`)

---

## 📂 File Breakdown

### 📜 `index.js` — Full CRUD on User Model (`test` DB)

The main practice file. Connects to the `test` database and defines a `User` schema with `name`, `email`, and `age`.

All operations are written and commented out step-by-step for learning:

| Operation | Method Used |
| :--- | :--- |
| Insert one user | `new User({...}).save()` |
| Insert multiple users | `User.insertMany([...])` |
| Find all users | `User.find({})` |
| Find with condition | `User.findOne({ age: { $gte: 40 } })` |
| Update a user | `User.updateOne(...)` |
| Chained update | `User.findOne(...).updateOne(...)` |
| Delete a user | `User.deleteOne(...)` |

> 💡 Also includes a note to explore the difference between `updateOne` and `findOneAndUpdate`.

---

### 📜 `books.js` — Book Model with Schema Validation (`amazon` DB)

Connects to the `amazon` database and defines a `Book` schema with validation:

```js
const bookSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    author: { type: String },
    price:  { type: Number }
});
```

- Demonstrates `required: true` constraint on `title`
- Creates and saves a single book using `.save()` with `.then().catch()` promise handling

---

## 🗂️ Folder Structure

```text
📦 Mongo
 ┣ 📜 index.js       # User CRUD — full operations practice (test DB)
 ┣ 📜 books.js       # Book schema with validation (amazon DB)
 ┗ 📜 package.json   # Dependencies
```

---

## 🚀 Setup & Usage

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Make sure MongoDB is running locally:**
   ```bash
   mongod
   ```

3. **Run any file:**
   ```bash
   node index.js
   # or
   node books.js
   ```

> ⚠️ To test different operations in `index.js`, **uncomment** the relevant code block and run the file.

---

## 📚 Concepts Covered

| Concept | File |
| :--- | :--- |
| Connecting to MongoDB via Mongoose | `index.js`, `books.js` |
| Defining Schema & Model | `index.js`, `books.js` |
| Schema Validation (`required`) | `books.js` |
| Insert One (`.save()`) | `index.js`, `books.js` |
| Insert Many (`insertMany`) | `index.js` |
| Read / Query (`find`, `findOne`) | `index.js` |
| MongoDB Query Operators (`$gte`) | `index.js` |
| Update (`updateOne`, chained update) | `index.js` |
| Delete (`deleteOne`) | `index.js` |
| Promise handling (`.then().catch()`) | `index.js`, `books.js` |