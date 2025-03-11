import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function MenuHeader({isLoggin}){
    
    return <>
            <Nav.Link as={Link} to="/">Home Pubblica</Nav.Link>
            {isLoggin && <Nav.Link as={Link} to="/privato">Home Privata</Nav.Link>}
            <Nav.Link as={Link} to="/liste">Liste</Nav.Link>
            {!isLoggin && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
            {isLoggin && <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
    </>
}

export default MenuHeader;
