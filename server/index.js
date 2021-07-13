import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

// App config
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", postRoutes);
app.use("/user", userRoutes);

// DB config
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set("useFindAndModify", false);

// Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT : http://localhost:${PORT}`);
});
