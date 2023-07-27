import express from "express";
import { getAllThumbnail, getDetailThumbnail, addThumbnail} from "../controller/thumbnail.js";
const thumbnailRouter = express.Router();


thumbnailRouter.get('/', getAllThumbnail);
thumbnailRouter.get('/:id', getDetailThumbnail);

thumbnailRouter.post('/',addThumbnail);

export default thumbnailRouter;