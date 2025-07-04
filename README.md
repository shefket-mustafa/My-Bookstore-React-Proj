# 📚 My Bookstore React Project

Welcome to **My Bookstore**, a full-featured web application built with **React**, **JavaScript**, **Express**, and **MongoDB**. Users can browse, post, edit, delete, and search books for sale, with authentication and like functionality built in.

---

## 🛠 Backend Migration Status

✅ The project has been **successfully migrated** from SoftUni's mock backend to a custom **Express.js + MongoDB** backend.  

---

## 🚀 Features

- 🔐 User Authentication (Register, Login, Logout)
- 📚 Full Book CRUD (Create, Read, Update, Delete)
- ❤️ Like System (prevent duplicate likes per user)
- 🔍 Book Search (by title, case-insensitive)
- 🖼️ Responsive UI using a reworked design template
- 🌐 Global State via Context API

---

## 🛠 Technologies Used

- **React 18+**
- **React Router DOM**
- **Context API**
- **JavaScript (ES6+)**
- **Custom CSS + Template Styling**
- **Vite (Client Dev Server)**
- **Express.js (Backend Server)**
- **MongoDB + Mongoose (Database)**
- **JWT (Authentication Tokens)**
- **bcrypt.js (Password Hashing)**
- **localStorage (Frontend State Persistence)**

---

## 📂 Project Structure

```
My-Bookstore-React-Proj/
├── client/         # React frontend
├── server/         # Express + MongoDB Backend
├── README.md       # Project documentation
```

---

## 🌐 Live Demo

Check out Moviefy live here: [my-bookstore-react-proj.vercel.app](https://my-bookstore-react-proj.vercel.app)

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:shefket-mustafa/My-Bookstore-React-Proj.git
cd My-Bookstore-React-Proj
```

### 2. Start the Client

```bash
cd client
npm install
npm run dev
```

Open your **integrated terminal in VS Code**, navigate to the `client` folder, and run the above commands.

The React app should now be running at: `http://localhost:5173`

### 3. Start the Server

```bash
cd server
npm install
node server.js
```

Open another **integrated terminal**, go to the `server` folder, and run the above commands.

The backend should be running at: `http://localhost:3030`

---

## 📌 Notes

- The UI is based on a ready-made HTML/CSS template, heavily reworked with custom styling.
- You need to be logged in to create, edit, delete, or like books.
- You can use the following login credentials for testing:
  - **Email**: admin@abv.bg
  - **Password**: 1234 
- You need to be logged in to create, edit, delete, or like books.
- The backend is custom made with Express + MongoDB

---


