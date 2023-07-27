import express  from "express";
import { getAllProduct } from "../controller/product.js";

const productRouter = express.Router();


productRouter.get('/:videoId',getAllProduct);

export default productRouter;