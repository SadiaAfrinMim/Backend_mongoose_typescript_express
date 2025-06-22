# 📚 Library Management API

A full-featured RESTful API built with **Express**, **TypeScript**, and **MongoDB (Mongoose)** for managing a library system. It allows you to manage books and borrowing records with validation, filtering, and business logic enforcement.

---

## 🚀 Features

- 📘 Create, Read, Update, and Delete books
- 🔍 Filter and sort books by genre, creation date, etc.
- 📦 Borrow books with validation on availability and quantity
- 📊 Borrowed book summary using aggregation pipeline
- ✅ Proper validation with Mongoose schemas
- 🔁 Mongoose Middleware (pre/post)
- ⚙️ Static/Instance methods in Mongoose

---

## 🧱 Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB & Mongoose
- dotenv for environment variables
- Vercel for deployment

---

## 🧪 API Endpoints

### ✅ Book Routes

| Method | Endpoint               | Description             |
|--------|------------------------|-------------------------|
| POST   | `/api/books`           | Create a new book       |
| GET    | `/api/books`           | Get all books with filters |
| GET    | `/api/books/:bookId`   | Get a book by ID        |
| PUT    | `/api/books/:bookId`   | Update book info        |
| DELETE | `/api/books/:bookId`   | Delete a book           |

### ✅ Borrow Routes

| Method | Endpoint     | Description              |
|--------|--------------|--------------------------|
| POST   | `/api/borrow`| Borrow one or more copies of a book |
| GET    | `/api/borrow`| Get borrow summary using aggregation |

---

## git-repositiory: https://github.com/SadiaAfrinMim/Backend_mongoose_typescript_express
## live-deployment:https://librarymanagementapplication.vercel.app/
##video-link:https://drive.google.com/drive/folders/1ibrGRz74A1iBdWV9gGViiEhxcnh68ta3?usp=sharing