import { useNavigate } from "react-router-dom";
import useAuth from "../hookCustom/useAuth";
import { use } from "react";
import {  ContextData } from '../store/data'

function PrivateHome(){
    const {isLoggin, setIsLoggin} = use(ContextData)
    const isAuthenticated = useAuth();
    const navigate = useNavigate();

    if(isAuthenticated === null){
        return <p>Caricamento in corso</p>
    }

    if(!isAuthenticated){
        navigate("/login")
    }
    console.log('la variabile è ',isLoggin)
    return <h1>Private Home</h1>
}

export default PrivateHome;