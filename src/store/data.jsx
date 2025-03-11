import { createContext, useState } from "react";

export const ContextData = createContext(); 

export const ContextProvider = ({ children }) => {
    const [isLoggin, setIsLoggin] = useState(false); 

    return (
        <ContextData.Provider value={{ isLoggin, setIsLoggin }}>
            {children}
        </ContextData.Provider>
    );
};
