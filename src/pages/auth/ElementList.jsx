import { useRef, useState } from 'react';
import styles from './PrivateHome.module.css'

function ElementList({task, deleteTask, updateTask, index}){
    const [inFocus, setInFocus] = useState(false)
    const [description, setDescription] = useState(task.description)
    const inputRef = useRef(null)
    function handleClickIcon(){
        setInFocus(prevBlur => !prevBlur)
        if(!inFocus && inputRef.current){
            inputRef.current.focus()
        }
    }
    function handleClickInput(){
        setInFocus(prevBlur => true)
        
    }

    function reStartState(){
        setInFocus(prevBlur => false)
    }

    function changeValue(event){
        setDescription(prevDev => event.target.value)
    }

    

    return <li className={styles.elementList}>
        {<input className='inputList' ref={inputRef} type="text"  
            onChange={changeValue} 
            onClick={handleClickInput}
            value={description} 
            onBlur={() => {
                reStartState()
                updateTask(task._id, description, index)}}
            />}
            <div className={styles.contFont}>
                {!inFocus && <i className="fa-solid fa-pen" onClick={handleClickIcon}></i>}
                {inFocus &&<i className="fa-solid fa-floppy-disk" onClick={handleClickIcon}></i>}
                <i onClick={() => deleteTask(task._id)} className="fa-solid fa-x"></i>
            </div>
        </li>
}

export default ElementList;