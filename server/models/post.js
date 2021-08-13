import mongoose from "mongoose";
const Schema = mongoose.Schema;

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
    comments: {
        type: [
            {
                userId: String,
                username: String,
                userImage: String,
                comment: String,
                createdAt: {
                    type: Date,
                    default: new Date(),
                },
            },
        ],
        default: [],
    },
});

const post = mongoose.model("posts", postSchema);

export default post;
