import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  bookId: String,
  userId: String,
}, { timestamps: true });

export default mongoose.model('Like', likeSchema);