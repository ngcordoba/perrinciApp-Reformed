import React, { createContext, useContext, useState } from 'react';

const WalkerContext = createContext();

export const WalkerProvider = ({ children }) => {
    const [walker, setWalker] = useState(null);

    return (
        <WalkerContext.Provider value={{ walker, setWalker }}>
            {children}
        </WalkerContext.Provider>
    );
};

export const useWalker = () => {
    const context = useContext(WalkerContext);
    if (!context) {
        throw new Error('useWalker must be used within a WalkerProvider');
    }
    return context;
};