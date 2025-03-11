import { useState, useEffect } from "react";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null = caricamento

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
                setIsAuthenticated(true); // ✅ L'utente è autenticato
            } catch (error) {
                setIsAuthenticated(false); // ❌ Non autenticato
            }
        };

        checkAuth();
    }, []);

    return isAuthenticated;
};

export default useAuth;
