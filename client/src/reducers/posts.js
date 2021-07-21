import {
    READ,
    CREATE,
    UPDATE,
    DELETE,
    SHOW,
    START_LOADING,
    END_LOADING,
} from "../constants/actionTypes.js";

const reducer = (state = { isLoading: true, posts: [], post: {} }, action) => {
    if (action.type === START_LOADING) {
        return { ...state, isLoading: true };
    }
    if (action.type === END_LOADING) {
        return { ...state, isLoading: false };
    }
    if (action.type === READ) {
        return { ...state, posts: action.payload };
    }
    if (action.type === CREATE) {
        return { ...state, posts: [...state.posts, action.payload] };
    }
    if (action.type === UPDATE) {
        return {
            ...state,
            posts: state.posts.map((post) =>
                post._id === action.payload._id ? action.payload : post
            ),
        };
    }
    if (action.type === DELETE) {
        return {
            ...state,
            posts: state.filter((post) => post._id !== action.payload),
        };
    }
    if (action.type === SHOW) {
        return { ...state, post: action.payload };
    }
    return state;
    // throw new Error("No matching action type!");
};

export default reducer;
