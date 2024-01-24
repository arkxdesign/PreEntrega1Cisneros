import React from 'react'
import logoRoots from '/logoRoots.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';


const NavBar = () => {
  return (
    <>
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logoRoots} className='logoRoots' alt="logo ROOTS" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">START</Nav.Link>
            <Nav.Link href="#features">ROOTS</Nav.Link>
            <Nav.Link href="#pricing">PRODUCT</Nav.Link>
            <Nav.Link href="#contact">CONTACT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar