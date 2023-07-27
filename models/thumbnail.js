import mongoose from "mongoose";

const thumbnailSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
}, { collection: 'thumbnail' });

const Thumbnail = mongoose.model('thumbnail', thumbnailSchema);

export default Thumbnail;