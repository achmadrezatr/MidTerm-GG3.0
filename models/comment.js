import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, { collection: 'comment', timestamps: true });

const Comment = mongoose.model('comment', commentSchema);

export default Comment;