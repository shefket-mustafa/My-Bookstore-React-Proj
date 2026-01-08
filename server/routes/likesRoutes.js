import express from "express";
import pool from "../postgres.js";

const likeRoutes = express.Router();

likeRoutes.get("/", async (req, res) => {
  const { bookId, userId } = req.query;

  if (!bookId) {
    return res.status(400).json({ message: "bookId is required" });
  }

  try {
    let result;

    if (userId) {
      result = await pool.query(
        "SELECT * FROM likes WHERE book_id = $1 AND user_id = $2",
        [bookId, userId]
      );
    } else {
      // All likes for a book
      result = await pool.query(
        "SELECT * FROM likes WHERE book_id = $1",
        [bookId]
      );
    }

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch likes", error: err.message });
  }
});


likeRoutes.get("/count/:bookId", async (req, res) => {
  const { bookId } = req.params;

  try {
    const result = await pool.query(
      "SELECT COUNT(*) FROM likes WHERE book_id = $1",
      [bookId]
    );

    res.json({ count: Number(result.rows[0].count) });
  } catch (err) {
    res.status(500).json({ message: "Failed to get likes count", error: err.message });
  }
});


likeRoutes.post("/", async (req, res) => {
  const { bookId, userId } = req.body;

  if (!bookId || !userId) {
    return res.status(400).json({ message: "bookId and userId are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO likes (book_id, user_id) VALUES ($1, $2) RETURNING *",
      [bookId, userId]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    // unique (book_id, user_id) violation
    if (err.code === "23505") {
      return res.status(409).json({ message: "User already liked this book" });
    }

    res.status(500).json({ message: "Failed to create like", error: err.message });
  }
});

export default likeRoutes;
