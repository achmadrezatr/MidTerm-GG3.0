import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    VideoID: {
        type: String,
        required: true
    },
    ProductID: {
        type: String,
        required: true
    },
    LinkProduct: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
}, { collection: 'product' });

const Product = mongoose.model('product', productSchema);

export default Product;