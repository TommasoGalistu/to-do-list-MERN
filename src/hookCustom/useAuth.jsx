import { useState, useEffect, use } from "react";
import {ContextData} from "../store/data";
const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null = caricamento
    const {isLoggin, setIsLoggin} = use(ContextData)

    useEffect (() =>{
        const checkAuth = async () =>{
            try{
              const response = await fetch('http://localhost:3000/check-token', {
                method: "GET",
                credentials: "include"
              })
              
              if(!response.ok){
                throw new Error("Non autenticato");
              }
    
              const data = await response.json()
              setIsLoggin(data.message)
              setIsAuthenticated(true)
              console.log(data.message)
            }catch(error){
              console.log(error.message)
              setIsAuthenticated(false)
            }
        }
        checkAuth();
      },[])

    return isAuthenticated;
};

export default useAuth;
