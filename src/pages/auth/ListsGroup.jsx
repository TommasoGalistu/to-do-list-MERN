import { useEffect, useState } from 'react';
import styles from './PrivateHome.module.css'
import ElementList from './ElementList';

function ListsGroup({isReloaded}){
    const [listElement, setListElement] = useState([])
    useEffect(() =>{
        const fetchList = async () =>{
            try{
                const response = await fetch("http://localhost:3000/list", {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                });

                if(!response.ok){
                    throw new Error("Errore nel caricamento delle liste")
                }
                const data = await response.json();
                setListElement(data)
                console.log('ul lista ricaricata ', data)

            }catch(error){
                console.log(error.message)
            }
        }
        fetchList()
    }, [isReloaded])
    return <ul>
                {listElement.map(element =>{
                    return <ElementList key={element._id} className={styles.elementList} text={element.description} />
                })}
                
            </ul>
}

export default ListsGroup;