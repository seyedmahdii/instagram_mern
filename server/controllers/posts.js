import mongoose from "mongoose";
import Post from "../models/post.js";

export const getPosts = async (req, res) => {
    const { username } = req.params;

    try {
        const posts = await Post.find({
            username: username,
        }).sort({ createdAt: -1 });

        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post({
        ...post,
        creatorId: req.userId,
        createdAt: new Date().toISOString(),
    });

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

    // Not authenticaed user
    if (!req.userId) {
        return res.status(401).json({ message: `Unauthorized action!` });
    }

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json(`No post with id: ${_id}`);
    }

    let post = await Post.findById(_id);

    // id of logged user among users who liked the post
    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        // user likes the post
        post.likes.push(req.userId);
    } else {
        // user dislikes the post
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
};

export const getPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json(`No post with id: ${id}`);
    }

    try {
        const post = await Post.findOne({ _id: id });

        res.status(200).json({ data: post });
    } catch (error) {
        res.status(500).json(error);
    }
};
