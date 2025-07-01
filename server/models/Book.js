import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: String,
    comment: String,
    imageUrl: String,
    _ownerId: String,
},{timestamps: true})

export default mongoose.model('Book', bookSchema);