import { useEffect, useState } from 'react';
import styles from './PrivateHome.module.css'
import ElementList from './ElementList';
import useFetchWithLoading from '../../utils/fetchRequest';

function ListsGroup({isReloaded}){
    const fetchData = useFetchWithLoading();
    const [listElement, setListElement] = useState([])
    useEffect(() =>{
        async function callDb(){

            const response = await fetchData("http://localhost:3000/list", {
                        method: "GET",
                        headers:{
                            "Content-Type": "application/json"
                        },
                        credentials: "include",
                    });
                    
                if(response){
                    setListElement(response);
                    console.log('ul lista ricaricata ');
                }
        }
        callDb();
        
    }, [isReloaded])

    async function eliminateTask(id){
        
        const response = await fetchData('http://localhost:3000/user/delete', {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({id})
            })

        if(response){
            console.log('delete effettuato ', response.tasks)
            setListElement(response.tasks)
        }else{
            console.log(response.message)
        }
           

    }
    async function updateTask(id, description, index){

        const response = await fetchData('http://localhost:3000/user/update', {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    id: id,
                    description: description
                })
            })
        if(response){
            setListElement(prevTask => response.todos)
        }else{
            console.log(response.message)
        }
    }
    return <ul>
                {listElement.map((element, index) =>{
                    return <ElementList key={element._id} 
                                className={styles.elementList} 
                                task={element}
                                index={index}
                                deleteTask={eliminateTask}
                                updateTask={updateTask}
                                 />
                })}
                
            </ul>
}

export default ListsGroup;