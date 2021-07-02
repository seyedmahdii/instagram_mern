import mongoose from "mongoose";
import Post from "../models/post.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json(error);
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    let postData = req.body;
    postData = { ...postData, _id };

    // Invalid id
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json("No post with such a id");
    }

    const updatedPost = await Post.findByIdAndUpdate(_id, postData, {
        new: true,
    });
    res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json("No post with such a id");
    }

    await Post.findByIdAndRemove(_id);
    res.json({ message: "Post deleted successfully" });
};

export const likePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(4040).json("No post with such a id");
    }

    const post = Post.findById(_id);

    const updatedPost = await Post.findByIdAndUpdate(
        _id,
        { likeCount: post.likeCount + 1 },
        { new: true }
    );
    res.json(updatedPost);
};
