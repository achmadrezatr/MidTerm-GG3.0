import Product from "../models/product.js";

export const getAllProduct = async (req, res) => {
    const { videoId } = req.params.videoId
    try {
        const getProduct = await Product.find({ videoId });
        res.status(200).json(getProduct);
        console.log(getProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
}