import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [currentId, setCurrentId] = useState(null);
    const [postsCount, setPostsCount] = useState(0);

    return (
        <AppContext.Provider
            value={{ currentId, setCurrentId, postsCount, setPostsCount }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
