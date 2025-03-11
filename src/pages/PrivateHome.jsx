import { useNavigate } from "react-router-dom";
import useAuth from "../hookCustom/useAuth";


function PrivateHome(){
    const isAuthenticated = useAuth();
    const navigate = useNavigate();

    if(isAuthenticated === null){
        return <p>Caricamento in corso</p>
    }

    if(!isAuthenticated){
        navigate("/login")
    }

    return <h1>Private Home</h1>
}

export default PrivateHome;