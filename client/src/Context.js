import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    let x = "hello",
        m;
    return (
        <AppContext.Provider value={{ x, m }}>{children}</AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
