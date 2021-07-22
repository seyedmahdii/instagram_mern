import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    website: { type: String, required: false },
    bio: { type: String, required: false },
    image: { type: String, required: false },
    id: String,
});

const user = mongoose.model("users", userSchema);
export default user;
