import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import postRoutes from "./routes/posts.js";

// App config
const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

// DB config
const CONNECTION_URL =
    "mongodb+srv://seyedmahdii:test1234@cluster0.l1i9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set("useFindAndModify", false);

// Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT : http://localhost:${PORT}`);
});
