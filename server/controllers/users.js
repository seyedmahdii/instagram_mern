import mongoose from "mongoose";
import User from "../models/user.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { name, email, username, password, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: `User with email:${email} already exists!`,
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: `Passwords don't match!` });
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
                .status(400)
                .json({ message: `No user with email: ${email}` });
        }

        const isPasswordCorrect = bcrypt.compare(
            password,
            existingUser.password
        );
        if (!isPasswordCorrect) {
            return res.status(400).json(`Incorrect password!`);
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
