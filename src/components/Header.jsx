import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MenuHeader from "./MenuHeader";
import { useState } from "react";
import { use } from "react";
import {  ContextData } from '../store/data'

function Header() {
    const {isLoggin} = use(ContextData)
    
    const [isOpen, setIsOpen] = useState(false);

    function handleClassOpenMenu(){
        setIsOpen(prevBool => !prevBool)
    }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Brand as={Link} to="/">To do List MERN</Navbar.Brand>

        {/* TOGGLE BUTTON PER IL COLLASSO */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClassOpenMenu} />

        {/* MENU COLLASSATO */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-lg-none w-100 text-center">
            <MenuHeader isLoggin={isLoggin} />
          </Nav>
        </Navbar.Collapse>

        {/* MENU FUORI DAL COLLASSO (VISIBILE SOLO SU SCHERMI GRANDI) */}
        <Nav className="d-none d-lg-flex">
            <MenuHeader isLoggin={isLoggin} />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
