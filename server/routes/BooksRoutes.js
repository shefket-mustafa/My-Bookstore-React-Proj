import express from 'express';
import pool from '../postgres.js';

const bookRoutes = express.Router();

bookRoutes.get('/', async (req, res) => {
  try {
    const { title } = req.query;

    const result = await pool.query(
      "SELECT * FROM books"
    );
    let books = result.rows;

    if (title) {
      const searchTerm = title.toLowerCase();
      books = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm)
      );
    }
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch books', err });
  }
});

bookRoutes.get('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const book = await pool.query(
      "SELECT * FROM books WHERE id = $1", [id]
    )
    if (book.rows.length === 0) {
      return res.status(404).json({ message: 'Book not found!' });
    }
    res.json(book.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch book', err });
  }
});

bookRoutes.post('/', async (req, res) => {
  const {title, author, image_url, price} = req.body
  try {
    const book = await pool.query(
      "INSERT INTO books(title, author, image_url, price) VALUES($1,$2,$3,$4) RETURNING *", [title, author, image_url, price]
    )
    res.status(201).json(book.rows[0]);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create book', err });
  }
});

bookRoutes.put('/:id', async (req, res) => {
  const {title, author, image_url, price} = req.body;
  const id = req.params.id;

  try {
    const book = await pool.query(
      "UPDATE books SET title = $1, author = $2, image_url = $3, price = $4 WHERE id =$5 RETURNING *", 
      [title, author, image_url, price, id])

      if(book.rows.length === 0){
        return res.status(404).json({message: "Book not found!"})
      }
    res.json(book.rows[0]);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update book', err });
  }
});

bookRoutes.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query(
      "DELETE FROM books WHERE id = $1", [id]
    )

    if(result.rowCount === 0){
      res.status(404).json({ message: 'Book not found!' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete book', err });
  }
});

export default bookRoutes;
