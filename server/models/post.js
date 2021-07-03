import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    caption: String,
    selectedFile: String,
    username: String,
    creatorId: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const post = mongoose.model("posts", postSchema);

export default post;
