import express from "express";
import { register, login, searchUsers } from "../controllers/users.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/search", searchUsers);

export default router;
