import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import useAuth from "../hookCustom/useAuth";
import { useEffect, useState } from "react";


function Root(){
    // const isAuthenticated = useAuth()
    // const [isLoggedProps, setIsLoggedProps] = useState(isAuthenticated)
    // useEffect(() =>{
    //     setIsLoggedProps(prevProps => isAuthenticated)
    // }, [isAuthenticated])

    return <>
        <Header  />
        <Outlet />
    </>
}

export default Root;