import Express from "express";
import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
    getPost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = Express.Router();

router.get("/posts/:username", getPosts);
router.get("/post/:id", getPost);
router.post("/post", auth, createPost);
router.patch("/post/:id", auth, updatePost);
router.delete("/post/:id", auth, deletePost);
router.patch("/post/:id/likePost", auth, likePost);

export default router;
