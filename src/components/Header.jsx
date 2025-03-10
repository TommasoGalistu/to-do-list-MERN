import { Link } from "react-router-dom"

function Header(){
    return <header>
        <ul>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/liste' >Liste</Link>
            </li>
        </ul>
    </header>
}

export default Header