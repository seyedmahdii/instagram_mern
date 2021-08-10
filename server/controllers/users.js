import mongoose from "mongoose";
import User from "../models/user.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { name, email, username, password, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json(`Another account is using ${email}.`);
        }

        if (password !== confirmPassword) {
            return res.status(400).json(`Passwords don't match!`);
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({
            name,
            username,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ email, id: result._id }, "testPass", {
            expiresIn: "1h",
        });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res
                .status(404)
                .json(
                    `The username you entered doesn't belong to an account. Please check your username and try again.`
                );
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );
        if (!isPasswordCorrect) {
            return res
                .status(400)
                .json(
                    `Sorry, your password was incorrect. Please double-check your password.`
                );
        }

        const token = jwt.sign({ email, id: existingUser._id }, "testPass", {
            expiresIn: "1h",
        });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const searchUsers = async (req, res) => {
    const { q } = req.query;

    try {
        const title = new RegExp(q);
        const users = await User.find({
            $or: [{ username: title }],
        });
        res.status(200).json({ data: users });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const editUserProfile = async (req, res) => {
    const { id: _id } = req.params;
    const userData = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json(`No user with id: ${_id}`);
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(_id, userData, {
            new: true,
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getUserProfile = async (req, res) => {
    const { username } = req.params;

    try {
        const userProfile = await User.findOne({ username });

        res.status(200).json(userProfile);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const followUser = async (req, res) => {
    const { id: _id } = req.params;

    // Not authenticaed user
    if (!req.userId) {
        return res.status(401).json(`Sing in to follow users`);
    }

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json(`No user with id: ${_id} to follow!`);
    }

    if (req.userId === _id) {
        return res.json(`You can't follow yourself`);
    }

    let toBeFollowedUser = await User.findById(_id);
    let loggedUser = await User.findById(req.userId);

    const index = toBeFollowedUser.followers.findIndex(
        (id) => id === String(req.userId)
    );
    if (index === -1) {
        toBeFollowedUser.followers.push(req.userId);
        loggedUser.followings.push(_id);
    } else {
        toBeFollowedUser.followers = toBeFollowedUser.followers.filter(
            (id) => id !== String(req.userId)
        );
        loggedUser.followings = loggedUser.followings.filter(
            (id) => id !== String(_id)
        );
    }

    const updatedFollowedUser = await User.findByIdAndUpdate(
        _id,
        toBeFollowedUser,
        { new: true }
    );
    const updatedLoggedUser = await User.findByIdAndUpdate(
        req.userId,
        loggedUser,
        {
            new: true,
        }
    );
    res.status(200).json(updatedFollowedUser);
};
