import { useContext } from "react";
import { ContextData } from "../store/data";

const useFetchWithLoading = () => {
    const { showLoading, hideLoading, setIsLoggin } = useContext(ContextData);

    const fetchData = async (url, options = {}) => {
        
        try {
            showLoading(); 
            const response = await fetch(url, {
                ...options,
                credentials: "include", // Mantiene la sessione
            });

            if (!response.ok) throw new Error("Errore nella richiesta");
            setIsLoggin(true)
            return await response.json();
        } catch (error) {
            setIsLoggin(false)
            console.error("Errore fetch:", error);
            return null;
        }finally {
            setTimeout(() =>{
                hideLoading(); 
            }, 1000)
        }
    };

    return fetchData;
};

export default useFetchWithLoading;