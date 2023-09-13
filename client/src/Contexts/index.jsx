import React, { useState, useContext, createContext } from 'react';
// 1 -> Create a context
const AuthContext = createContext();
// 2 -> Create a provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
// 3 -> Consume the context
export const useAuth = () => useContext(AuthContext);
