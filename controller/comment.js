import Comment from "../models/comment.js";

export const addComment = async (req, res) => {
    const { username, comment, videoId } = req.body;
    const newComment = new Comment({
        username,
        comment,
        videoId,
    });

    try {
        const addNewComment = await newComment.save()
        res.status(200).json({ message: "success" });
    } catch (error) {
        res.status(400).json({ message: "fail" })
    }
}

export const getComment = async (req, res) => {
    const { videoId } = req.params.videoId
    try {
        const newComment = await Comment.find({ videoId: req.params.videoId });
        res.status(200).json(newComment);
        console.log(newComment);
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
}