import { useContext } from "react";
import { ContextData } from "../store/data";

const useFetchWithLoading = () => {
    // const { showLoading, hideLoading } = useContext(ContextData);

    const fetchData = async (url, options = {}) => {
        // showLoading(); // ✅ Mostra il caricamento

        try {
            const response = await fetch(url, {
                ...options,
                credentials: "include", // Mantiene la sessione
            });

            if (!response.ok) throw new Error("Errore nella richiesta");
            
            return await response.json();
        } catch (error) {
            console.error("Errore fetch:", error);
            return null;
        } //finally {
        //     hideLoading(); // ✅ Nasconde il caricamento
        // }
    };

    return fetchData;
};

export default useFetchWithLoading;