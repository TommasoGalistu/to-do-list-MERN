import styles from './PrivateHome.module.css'

function ElementList({task, deleteTask}){
    return <li className={styles.elementList}>{task.description}<i onClick={() => deleteTask(task._id)} className="fa-solid fa-xmark"></i></li>
}

export default ElementList;