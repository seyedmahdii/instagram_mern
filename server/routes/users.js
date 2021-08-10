import express from "express";
import {
    register,
    login,
    searchUsers,
    editUserProfile,
    getUserProfile,
    followUser,
} from "../controllers/users.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/search", searchUsers);
router.patch("/:id/edit", editUserProfile);
router.get("/:username", getUserProfile);
router.patch("/:id/follow", auth, followUser);

export default router;
