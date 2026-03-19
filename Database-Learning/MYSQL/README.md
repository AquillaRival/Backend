# 🐬 MYSQL — SQL Learning Practice Files

A collection of hands-on SQL practice scripts written while learning **MySQL from scratch**. Each file focuses on a specific concept — from basic table creation to aggregate functions, clauses, and real-world schema design.

> 🎯 *This directory is part of my backend development learning journey.*

## 💻 Tech Stack

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-%23076fad.svg?style=for-the-badge&logo=databricks&logoColor=white)

## 📂 File Breakdown

### 📜 `first.sql` — Getting Started
The very first SQL file. Covers the absolute basics:
- Creating & dropping databases (`CREATE DATABASE`, `DROP DATABASE`)
- Creating tables with basic data types
- `INSERT INTO`, `SELECT *`
- `SHOW DATABASES` & `SHOW TABLES`

---

### 📜 `tablequeries.sql` — Instagram Schema (DDL + DML)
A complete Instagram-like schema with users and posts:
- Full `CREATE TABLE` with constraints: `PRIMARY KEY`, `UNIQUE`, `NOT NULL`, `CHECK`, `DEFAULT`
- `FOREIGN KEY` referencing between `user` and `post` tables
- Bulk `INSERT` with 16 users and 3 posts
- `UPDATE`, `DELETE` with `SQL_SAFE_UPDATES`
- `ALTER TABLE` — `ADD COLUMN`, `DROP COLUMN`, `RENAME`, `CHANGE COLUMN`, `MODIFY COLUMN`
- `DROP TABLE` & `TRUNCATE TABLE`

---

### 📜 `where_clauses.sql` — Filtering Data
Deep dive into the `WHERE` clause:
- Arithmetic in conditions (`age + 1 = 18`)
- `AND`, `OR` operators
- `BETWEEN` for range queries
- `IN` and `NOT IN` for list filtering

---

### 📜 `limit_and_order_by_clauses.sql` — Sorting & Limiting
- `LIMIT` — fetch only top N rows
- `ORDER BY` with `DESC` / `ASC` for sorting results

---

### 📜 `aggregate.sql` — Aggregate Functions
Core SQL aggregate functions practiced on the `user` table:
| Function | Query |
| :--- | :--- |
| `MAX()` | Find the maximum age |
| `MIN()` | Find the minimum age |
| `COUNT()` | Count users with age > 14 |
| `AVG()` | Find average age |
| `SUM()` | Total sum of all followers |

---

### 📜 `groupby_and_having_clause.sql` — Grouping Data
- `GROUP BY` — group users by age and analyze
- `HAVING` — filter groups (e.g., max followers > 200)

---

### 📜 `Q1.sql` — Practice Problem 1 (College → Teacher Table)
Mini project on a `college` database:
- Create a `teacher` table with `id`, `name`, `subject`, `salary`
- Filter by salary, rename columns, update salary with percentage hike
- Add/drop columns using `ALTER TABLE`

---

### 📜 `Q2.sql` — Practice Problem 2 (Student Grades)
Mini project on a `student` table:
- `INSERT` student records with marks
- Use `GROUP BY` with `MAX()` to find city-wise toppers
- Assign grades (`O`, `A`, `B`) using conditional `UPDATE` statements
- `DISTINCT` and `AVG()` practice

---

## 🗃️ Schemas Covered

### Instagram DB (`instagram`)
```sql
CREATE TABLE user (
    id INT UNIQUE PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    age INT CHECK (age >= 13),
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT DEFAULT 0
);

CREATE TABLE post (
    id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);
```

### College DB (`college`)
```sql
CREATE TABLE student (
    roll_no INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    city VARCHAR(20),
    marks INT DEFAULT 0
);

CREATE TABLE teacher (
    id INT PRIMARY KEY,
    name VARCHAR(30),
    subject VARCHAR(30),
    salary INT
);
```

---

## 🗂️ Folder Structure

```text
📦 MYSQL
 ┣ 📜 first.sql                      # Basics — DB creation, INSERT, SELECT
 ┣ 📜 tablequeries.sql               # Instagram schema — DDL + DML
 ┣ 📜 where_clauses.sql              # Filtering with WHERE
 ┣ 📜 limit_and_order_by_clauses.sql # LIMIT & ORDER BY
 ┣ 📜 aggregate.sql                  # MAX, MIN, COUNT, AVG, SUM
 ┣ 📜 groupby_and_having_clause.sql  # GROUP BY & HAVING
 ┣ 📜 Q1.sql                         # Practice — Teacher table
 ┗ 📜 Q2.sql                         # Practice — Student grades
```

---

## 📚 Concepts Covered

| Concept | Files |
| :--- | :--- |
| DDL (CREATE, ALTER, DROP, TRUNCATE) | `first.sql`, `tablequeries.sql`, `Q1.sql` |
| DML (INSERT, UPDATE, DELETE) | `tablequeries.sql`, `Q1.sql`, `Q2.sql` |
| DQL (SELECT, WHERE, ORDER BY, LIMIT) | `where_clauses.sql`, `limit_and_order_by_clauses.sql` |
| Aggregate Functions | `aggregate.sql` |
| GROUP BY & HAVING | `groupby_and_having_clause.sql` |
| Constraints (PK, FK, UNIQUE, CHECK, DEFAULT) | `tablequeries.sql` |
| Foreign Keys & Relations | `tablequeries.sql` |