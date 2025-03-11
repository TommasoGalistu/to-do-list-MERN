import { useState, useEffect, use } from "react";
import {ContextData} from "../store/data";
const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null = caricamento
    const {isLoggin, setIsLoggin} = use(ContextData)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:3000/user/utente-autenticato", {
                    method: "GET",
                    credentials: "include" // ✅ Invio automatico del cookie HTTPOnly
                });

                if (!response.ok) {
                    throw new Error("Non autenticato");
                }

                const data = await response.json();
                setIsAuthenticated(true); 
                setIsLoggin(true)
            } catch (error) {
                setIsAuthenticated(false); 
                setIsLoggin(false)
            }
        };

        checkAuth();
    }, []);

    return isAuthenticated;
};

export default useAuth;
