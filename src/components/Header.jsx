import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext, memo } from "react";
import { ContextData } from "../store/data";
import { NavDropdown } from "react-bootstrap";

const Header = memo(() => {
    const { isLoggin } = useContext(ContextData); // Recupera lo stato di autenticazione

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">To do List MERN</Navbar.Brand>

                <NavDropdown
                    title="Menu"
                    id={`offcanvasNavbarDropdown-expand`}
                    align="end"
                    className="d-lg-none"
                  >
                    <NavDropdown.Item as={Link} to="/">Home Pubblica</NavDropdown.Item>
                    {isLoggin && <NavDropdown.Item as={Link} to="/privato">Home Privata</NavDropdown.Item>}
                    <NavDropdown.Item as={Link} to="/liste">Liste</NavDropdown.Item>
                    {!isLoggin && <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>}
                    {isLoggin && <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>}
                    
                  </NavDropdown>

                {/* MENU PER SCHERMI GRANDI */}
                <Nav className="d-none d-lg-flex">
                  <Nav.Link as={Link} to="/">Home Pubblica</Nav.Link>
                  {isLoggin && <Nav.Link as={Link} to="/privato">Home Privata</Nav.Link>}
                  <Nav.Link as={Link} to="/liste">Liste</Nav.Link>
                  {!isLoggin && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                  {isLoggin && <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
                </Nav>
            </Container>
        </Navbar>
    );
});

export default Header;
