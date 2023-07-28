import express from 'express';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import ThumbnailRouter from './routes/thumbnail.js';
import ProductRouter from './routes/product.js';
import CommentRouter from './routes/comment.js';


dotenv.config();
connectDB();


const app = express();
app.use(bodyParser.json());

app.use('/thumbnail', ThumbnailRouter);
app.use('/product', ProductRouter);
app.use('/comment', CommentRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});


