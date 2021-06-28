import Express from "express";
import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
} from "../controllers/posts.js";

const router = Express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
