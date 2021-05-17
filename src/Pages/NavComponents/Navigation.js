
import React from 'react'
import logo from '../../images/logo/SmallLogo.png';
import {Navbar, Nav, } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'




export default function Navigation() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{borderBottom:'.5px solid slategray'}}>
  <LinkContainer to="/home">
  <Navbar.Brand >
    <img src={logo} className="App-logo" alt="logo" /> cryptoLEAD</Navbar.Brand>
    </LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/">
        <Nav.Link></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/home">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
        <Nav.Link>About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/services">
        <Nav.Link>Services</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
        <Nav.Link>Contact</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/network">
      <Nav.Link href="/network">LEAD Network</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
  )
}


