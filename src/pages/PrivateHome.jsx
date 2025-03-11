import { useNavigate } from "react-router-dom";
import useAuth from "../hookCustom/useAuth";
import { use } from "react";
import {  ContextData } from '../store/data'
import styles from './PrivateHome.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

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

    async function addElementList(event){
        event.preventDefault()

        let form = new FormData(event.target);
        let data = Object.fromEntries(form.entries())
        console.log(data)
    }
    console.log('la variabile è ',isLoggin)
    return <div className={styles.cont}>
        <p className={styles.title}>Cosa vuoi aggiungere nella tua lista?</p>

        <Form className="d-flex" onSubmit={addElementList}>
            <Form.Control type="text" placeholder="Scrivi qui..." name='description' required/>
            <Button type="submit">Aggiungi</Button>

        </Form>
        <ul>
            <li className={styles.elementList}>quello che devo fare DESCRIZIONE</li>
            <li className={styles.elementList}>quello che devo fare DESCRIZIONE</li>
            <li className={styles.elementList}>quello che devo fare DESCRIZIONE</li>
        </ul>
    </div>
}

export default PrivateHome;