import express from "express";
import {
    register,
    login,
    searchUsers,
    editUserProfile,
    getUserProfile,
} from "../controllers/users.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/search", searchUsers);
router.patch("/:id/edit", editUserProfile);
router.get("/:username", getUserProfile);

export default router;
