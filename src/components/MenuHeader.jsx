import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function MenuHeader(){
    return <>
            <Nav.Link as={Link} to="/">Home P.</Nav.Link>
            <Nav.Link as={Link} to="/liste">Liste</Nav.Link>
            <Nav.Link as={Link} to="/login">login</Nav.Link>
    </>
}

export default MenuHeader;
