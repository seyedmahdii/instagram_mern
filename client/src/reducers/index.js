import { combineReducers } from "redux";

import posts from "./posts.js";
import auth from "./auth.js";
import users from "./users.js";

export default combineReducers({
    posts: posts,
    auth: auth,
    users,
});
