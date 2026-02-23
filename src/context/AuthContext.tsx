import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    phone: string;
    login: (phone: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    phone: "",
    login: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        return localStorage.getItem("pmr_logged_in") === "true";
    });
    const [phone, setPhone] = useState<string>(() => {
        return localStorage.getItem("pmr_phone") || "";
    });

    const login = (phoneNumber: string) => {
        setIsLoggedIn(true);
        setPhone(phoneNumber);
        localStorage.setItem("pmr_logged_in", "true");
        localStorage.setItem("pmr_phone", phoneNumber);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setPhone("");
        localStorage.removeItem("pmr_logged_in");
        localStorage.removeItem("pmr_phone");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, phone, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
