import Express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = Express.Router();

router.get("/", getPosts);
router.post("/", createPost);

export default router;
