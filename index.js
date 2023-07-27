import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
//import connectDB from './config/db';
import ThumbnailRouter from './routes/thumbnail.js';


dotenv.config();


mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('failed to connect', error)
})

db.once('connected', () => {
    console.info('database connected')
})
const app = express();
app.use(bodyParser.json());

app.use('/thumbnail', ThumbnailRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});


