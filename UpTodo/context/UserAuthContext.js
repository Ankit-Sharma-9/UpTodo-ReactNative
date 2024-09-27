import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
    const [user, setUser] = useState("null")

    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)