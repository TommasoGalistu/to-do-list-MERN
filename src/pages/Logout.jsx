import { use } from 'react';
import { ContextData} from '../store/data';
import {  useNavigate } from 'react-router-dom';

function Logout(){
    const {isLoggin, setIsLoggin} = use(ContextData)
    const navigate = useNavigate()
    async function logout(dataObj){
        try{
            const response = await fetch('http://localhost:3000/user/logout',{
                method: 'GET',
                credentials: "include"
            })
            const data = await response.json()
            console.log('logout ',data)
            
            setIsLoggin(false)
            navigate('/login')
        }catch(error){
            console.log(error.message)
            setIsLoggin(true)
        }
        
    }
    logout()

    return <h1>logout</h1>
}

export default Logout