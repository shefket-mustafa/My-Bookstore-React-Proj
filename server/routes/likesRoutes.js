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
  
      const ownerIdMatch = where.match(/_ownerId="(.*?)"/);
const query = { bookId };

if (ownerIdMatch) {
  query._ownerId = ownerIdMatch[1];
}

const likes = await Like.find(query);
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
  
      const existing = await Like.findOne({ bookId, _ownerId });
      if (existing) {
        return res.status(409).json({ message: 'User already liked this book' });
      }
  
      const like = await Like.create({ bookId, _ownerId });
      res.status(201).json(like);
    } catch (err) {
      res.status(400).json({ message: 'Failed to create like', err });
    }
  });
  

  export default likeRoutes