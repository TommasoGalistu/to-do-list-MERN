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

    async function eliminateTask(id){
        try{
            console.log(id)
            const response = await fetch('http://localhost:3000/user/delete', {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({id})
            })
            const data = await response.json();
            console.log('delete effettuato ',data.tasks)
            setListElement(data.tasks)

        }catch(error){
            console.log(error.message)
        }
    }
    
    return <ul>
                {listElement.map(element =>{
                    return <ElementList key={element._id} className={styles.elementList} task={element} deleteTask={eliminateTask} />
                })}
                
            </ul>
}

export default ListsGroup;