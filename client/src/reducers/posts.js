const reducer = (state = [], action) => {
    if (action.type === "READ") {
        return action.payload;
    }
    if (action.type === "CREATE") {
        return [...state, action.payload];
    }
    return state;
    // throw new Error("No matching action type!");
};

export default reducer;
