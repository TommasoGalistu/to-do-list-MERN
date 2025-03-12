import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import useAuth from "../hookCustom/useAuth";


function Root(){
    useAuth();
    return <>
        <Header />
        <Outlet />
    </>
}

export default Root;