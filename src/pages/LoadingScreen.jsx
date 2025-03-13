import { useContext } from "react";
import { ContextData } from "../store/data";
import "./LoadingScreen.module.css"; // Importa il CSS per lo stile

const LoadingScreen = () => {
    const { loading } = useContext(ContextData);

    if (!loading) return null; // Se non è in caricamento, non mostra nulla

    return (
        <div className="loading-overlay">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default LoadingScreen;
