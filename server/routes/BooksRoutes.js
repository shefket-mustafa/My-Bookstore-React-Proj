import express from 'express';
import Book from '../models/Book.js';


const bookRoutes = express.Router();

bookRoutes.get('/', async (req,res) => {
    try {

      const { title } = req.query;

        let books = await Book.find();

        if(title){
          const searchTerm = title.toLowerCase();
          books = books.filter(book => book.title.toLowerCase().includes(searchTerm));
        }
        res.status(200).json(books);

    }catch(err){
        
        res.status(500).json({message: 'Failed to fetch books', err})
    }
})

bookRoutes.get('/:id', async (req,res) => {
    try {
        const book = await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({message: "Book not found!"})
        }
        res.json(book)

    }catch(err){
        
        res.status(500).json({message: 'Failed to fetch book', err})
    }
})

bookRoutes.post('/', async (req, res) => {
    try {
      const book = await Book.create(req.body);
      res.status(201).json(book);
    } catch (err) {
      res.status(400).json({ message: 'Failed to create book',err });
    }
  });

  bookRoutes.put('/:id', async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(book);
    } catch (err) {
      res.status(400).json({ message: 'Failed to update book', err });
    }
  });

  bookRoutes.delete('/:id', async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ message: 'Failed to delete book', err});
    }
  });



export default bookRoutes