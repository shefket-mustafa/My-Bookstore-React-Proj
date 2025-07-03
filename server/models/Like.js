import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  bookId: String,
  _ownerId: String,
}, { timestamps: true });

export default mongoose.model('Like', likeSchema);