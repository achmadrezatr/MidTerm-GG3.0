import Thumbnail from "../models/thumbnail.js";

//get semua thumbnail
export const getAllThumbnail = async (req, res) => {
    try {
        //.select karena hanya ingin mengambil videoId dan url. tbh im just tryin but it works xD
        const getThumbnail = await Thumbnail.find().select('-_id , videoId url');
        res.status(200).json(getThumbnail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

//get detail 
export const getDetailThumbnail = async (req, res) => {
    try {
        const { videoId, url } = await Thumbnail.findOne({ videoId: req.params.id });
        res.json({
            videoId,
            url,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addThumbnail = async (req, res) => {
    const { videoId, url } = req.body
    const newThumbnail = new Thumbnail({
        videoId,
        url,
    });

    try {
        const addedThumbnail = await newThumbnail.save();
        res.status(200).json(addedThumbnail);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}