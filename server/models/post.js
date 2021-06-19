import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    caption: String,
    description: String,
    selectedFile: String,
    creator: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const post = mongoose.model("posts", postSchema);

export default post;
