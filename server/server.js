import './config.js'
    import express from "express";
    import cors from "cors";
    import authRoutes from "../server/routes/AuthRoutes.js";
    import bookRoutes from "../server/routes/BooksRoutes.js";
    import likeRoutes from "../server/routes/likesRoutes.js"



    const app = express();
    const port = process.env.PORT || 3030;

    

    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
      res.json({ message: 'Bookstore API is running!' });
    });

    app.use('/users', authRoutes)
    app.use('/books', bookRoutes)
    app.use('/likes', likeRoutes);

   
        
        app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)});
       

