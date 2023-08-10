import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const lsUser = JSON.parse(localStorage.getItem("user"));
    const [auth, setAuth] = useState(lsUser);
    const navigate = useNavigate();
    const localiza = useLocation();

    // usar um 
    useEffect(() => {
        if (lsUser === null && localiza.pathname !== "/signup") {
            navigate("/");
        } else if (lsUser && localiza.pathname !== "/singup") {
            navigate("/home");
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            auth, setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
};

