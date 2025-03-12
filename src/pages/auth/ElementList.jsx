import styles from './PrivateHome.module.css'

function ElementList({text}){
    return <li className={styles.elementList}>{text}</li>
}

export default ElementList;