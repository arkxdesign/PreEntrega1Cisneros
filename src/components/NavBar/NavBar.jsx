import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';


const NavBar = () => {
  return (
    <>
      <Navbar data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to='/'>
              <Nav.Link href="#home">START</Nav.Link>
            </Link>
            <Nav.Link href="#features">ROOTS</Nav.Link>
            <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to={'categoria/RANGER'}>
                  RANGER
                </NavLink>
              </NavDropdown.Item>                
              <NavDropdown.Item>
                <NavLink to={'categoria/FLOW LINE'}>
                  FLOW LINE
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={'categoria/RIDERX'}>
                  RIDERX
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">CONTACT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar