import Thumbnail from "../models/thumbnail.js";

//get semua thumbnail
export const getAllThumbnail = async (req, res) => {
    try {
        const getThumbnail = await Thumbnail.find();
        res.json({
            videoId: thumbnail.videoId,
            url: thumbnail.url
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

//get detail 
export const getDetailThumbnail = async (req, res) => {
    try {
        // menggunakan .select agar hanya menampilkan videoId dan url. tanpa objectId document.
        const getDetail = await Thumbnail.findOne({ videoId: req.params.id });
        res.json(getDetail);
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