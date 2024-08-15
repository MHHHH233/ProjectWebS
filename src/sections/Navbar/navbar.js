import React from 'react';
import png1 from '../herosection/photos/Logo.png'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarA.css'; 
import {motion} from 'framer-motion'
function NavbarA() {
  return (
    <motion.div initial={{opacity:0 ,scale:0.7,y:'-100vh'}} animate={{opacity:1,scale:1,y:'0vh'}} transition={{duration:1,}} >
    <Navbar bg="transparent" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand  id='sa' href="#home"><img width={'50px'} height={'50px'} src={png1} className='me-2'/><i className='text-light display-10 fw-bold '>Shopy<span className='text-danger'>.</span>Right</i> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="m-auto"> 
            <Nav.Link  href="#home" className='me-4'>Home</Nav.Link>
            <Nav.Link  href="#features" className='me-4'>Features</Nav.Link>
            <Nav.Link  href="#pricing" className='me-4'>Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='me-4'>
              <NavDropdown.Item className='customlink' href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item className='customlink'  href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item className='customlink' href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='customlink' href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="navbar-buttons"> 
            <Button  className="me-2 login " >Login</Button>
            <Button variant="light" style={{backgroundColor:'white', fontWeight:'bold'}} >Sign up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar></motion.div>
  );
}

export default NavbarA;
