import express from 'express';
import { addComment, getComment } from '../controller/comment.js';
const commentRouter = express.Router();


commentRouter.post('/', addComment);
commentRouter.get('/:videoId', getComment);


export default commentRouter;