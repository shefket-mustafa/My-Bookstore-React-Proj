import express from "express"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import pool from "../postgres.js";

const authRoutes = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is undefined. Check .env and dotenv.config()");
  }

//Registering a user
authRoutes.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({ message: "Email already in use!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (email, hashed_password) VALUES ($1, $2) RETURNING id, email",
      [email, hashedPassword]
    );

    const user = result.rows[0];

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.status(201).json({
      message: "User registered!",
      accessToken: token,
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
});


//Login
authRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT id, email, hashed_password FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const user = result.rows[0];

    const match = await bcrypt.compare(password, user.hashed_password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.status(200).json({
      message: "Login successful!",
      accessToken: token,
      user: { id: user.id, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});


export default authRoutes;