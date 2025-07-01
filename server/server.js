    import dotenv from "dotenv" 
    import express from "express";
    import cors from "cors";
    import mongoose from "mongoose";
    import authRoutes from "./routes/AuthRoutes.js";
    import bookRoutes from "./routes/BooksRoutes.js";

    dotenv.config();

    const app = express();
    const port = process.env.PORT || 3030;
    console.log(process.env);

    app.use(cors());
    app.use(express.json());

    app.use('/users', authRoutes)
    app.use('/books', bookRoutes)

    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        
        app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
        })
    })
    .catch(err => {

        console.error("❌ MongoDB connection error:", err.message);
    })
    

