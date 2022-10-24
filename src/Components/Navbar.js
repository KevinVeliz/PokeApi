import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import '../Styles/Navbar.css'

export const NavbarGeneral = () => {
  return (
    <Navbar expand="lg"  className='colornavbar' variant="light">
      <Container style={{color:"white"}}>
        <Navbar.Brand href="/">
          <Image style={{ width: "10rem", height: "3.5rem" }} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className="justify-content-end" id="responsive-navbar-nav">
          <Nav >
            <Nav.Link href="/favorites" style={{color:"white"}}>Pokemon Favorites</Nav.Link>
            <Nav.Link href="/about" style={{color:"white"}}>About Me</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
