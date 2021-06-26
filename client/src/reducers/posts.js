const reducer = (state = [], action) => {
    if (action.type === "READ") {
        return action.payload;
    }
    if (action.type === "CREATE") {
        return [...state, action.payload];
    }
    if (action.type === "UPDATE") {
        return state.map((post) =>
            post._id === action.payload._id ? action.payload : post
        );
    }
    return state;
    // throw new Error("No matching action type!");
};

export default reducer;
