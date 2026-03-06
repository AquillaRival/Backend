# REST
## Representational State Transfer
REST is an architecural style that defines a set of constraints tobe used for creating web services.

---

## CRUD Operations in REST
**CRUD** is an acronym that stands for **C**reate, **R**ead, **U**pdate, and **D**elete. In a RESTful API, these fundamental database operations are mapped directly to standard HTTP methods.

### 1. Create (POST)
* **Purpose:** To send new data to the server and create a brand new record in the database.
* **HTTP Method:** `POST`
* **Example:** Sending a `POST` request to `/api/users` with user details in the body to register a new account.

### 2. Read (GET)
* **Purpose:** To retrieve or fetch data from the server. This is a "safe" operation, meaning it does not modify the data.
* **HTTP Method:** `GET`
* **Examples:**
  * `GET /api/users` - Fetches a list of all users.
  * `GET /api/users/123` - Fetches the specific details of a user with the ID of 123.

### 3. Update (PUT / PATCH)
* **Purpose:** To modify or update an existing record on the server.
* **HTTP Methods:**
  * `PUT`: Replaces the *entire* resource. You must send the complete object.
  * `PATCH`: Partially updates the resource. You only send the specific fields you want to change.
* **Example:** Sending a `PATCH` request to `/api/users/123` to update only the email address of that specific user.

### 4. Delete (DELETE)
* **Purpose:** To completely remove a record from the database.
* **HTTP Method:** `DELETE`
* **Example:** Sending a `DELETE` request to `/api/users/123` to remove the user account with ID 123.

---

## Quick Reference Summary

| CRUD Operation | REST HTTP Method | Typical Endpoint | Action |
| :--- | :--- | :--- | :--- |
| **C**reate | `POST` | `/users` | Adds a new user |
| **R**ead | `GET` | `/users` or `/users/{id}` | Fetches user(s) |
| **U**pdate | `PUT` or `PATCH` | `/users/{id}` | Modifies an existing user |
| **D**elete | `DELETE` | `/users/{id}` | Removes a user |