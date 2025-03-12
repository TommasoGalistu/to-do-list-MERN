import { useNavigate } from "react-router-dom";
import useAuth from "../../hookCustom/useAuth";
import { useState } from "react";
import {  ContextData } from '../../store/data'
import styles from './PrivateHome.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import ListsGroup from "./ListsGroup";

function PrivateHome(){
    // const [isLoggin, setIsLoggin] = use(ContextData)
    const [isSentCount, setIsSentCount] = useState(0)
    const isAuthenticated = useAuth();
    const navigate = useNavigate();

    if(isAuthenticated === null){
        return <p>Caricamento in corso</p>
    }

    if(!isAuthenticated){
        navigate("/login")
    }

    async function addElementList(event){
        event.preventDefault()

        let form = new FormData(event.target);
        let data = Object.fromEntries(form.entries())
        
        try{
            const response = await fetch('http://localhost:3000/user/add-todo', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(data)
            })

            if(!response.ok){
                throw new Error("Errore nella richiesta")
            }
            const result = await response.json();
            console.log("Elemento inserito in DB ", result)
            setIsSentCount(prevCount => prevCount + 1);
        }catch(error){
            console.log(error.message)
        }
    }
    

    return <div className={styles.cont}>
        <p className={styles.title}>Cosa vuoi aggiungere nella tua lista?</p>

        <Form className="d-flex" onSubmit={addElementList}>
            <Form.Control type="text" placeholder="Scrivi qui..." name='description' required/>
            <Button type="submit">Aggiungi</Button>

        </Form>
        <ListsGroup isReloaded={isSentCount} />
    </div>
}

export default PrivateHome;