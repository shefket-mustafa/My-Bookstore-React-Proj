import express from "express";
import Like from "../models/Like.js";

const likeRoutes = express.Router();


likeRoutes.get('/', async (req, res) => {
    try {
      const { where } = req.query;
      const bookIdMatch = where.match(/bookId="(.*?)"/);
  
      if (!bookIdMatch) {
        return res.status(400).json({ message: "Missing or invalid 'where' query" });
      }
  
      const bookId = bookIdMatch[1];
  
      const likes = await Like.find({ bookId });
      res.json(likes);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch likes', err });
    }
  });

  likeRoutes.get('/count/:bookId', async (req, res) => {
    try {
      const count = await Like.countDocuments({ bookId: req.params.bookId });
      res.json({ count });
    } catch (err) {
      res.status(500).json({ message: 'Failed to get likes count', err });
    }
  });

  likeRoutes.post('/', async (req, res) => {
    try {
      const { bookId, _ownerId } = req.body;
  
      if (!bookId || !_ownerId) {
        return res.status(400).json({ message: 'Missing bookId or _ownerId' });
      }
  
      const like = await Like.create({ bookId, _ownerId }); // ✅ store _ownerId
      res.status(201).json(like);
    } catch (err) {
      res.status(400).json({ message: 'Failed to create like', err });
    }
  });

  export default likeRoutes