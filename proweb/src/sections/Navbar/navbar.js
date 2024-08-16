import React from 'react';
import png1 from '../herosection/photos/Logo.png';
import { Navbar, Nav, NavDropdown, Container, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarA.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function NavbarA() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.7, y: '-100vh' }} 
      animate={{ opacity: 1, scale: 1, y: '0vh' }} 
      transition={{ duration: 1 }}
    >
      <Navbar bg="transparent" expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand id="sa" href="#home">
            <img 
              width="50px" 
              height="50px" 
              src={png1} 
              alt="Logo" 
              className="me-2" 
            />
            <i className="text-light display-10 fw-bold">
              Shopy<span className="text-danger">.</span>Right
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="m-auto"> 
              <Nav.Link href="#home" className="me-4">{t('home')}</Nav.Link>
              <Nav.Link href="#features" className="me-4">{t('features')}</Nav.Link>
              <Nav.Link href="#pricing" className="me-4">{t('pricing')}</Nav.Link>
              <NavDropdown title={t('dropdown')} id="basic-nav-dropdown" className="me-4">
                <NavDropdown.Item className="customlink" href="#action/3.1">{t('action')}</NavDropdown.Item>
                <NavDropdown.Item className="customlink" href="#action/3.2">{t('another_action')}</NavDropdown.Item>
                <NavDropdown.Item className="customlink" href="#action/3.3">{t('something')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="customlink" href="#action/3.4">{t('separated_link')}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="navbar-buttons"> 
              <Button variant="light" className="fw-bold" style={{ backgroundColor: 'white' }}>{t('login')}</Button>
              <Button variant="light" className="fw-bold ms-2" style={{ backgroundColor: 'white' }}>{t('signup')}</Button>
              <Dropdown className="ms-2">
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ backgroundColor: 'white' }}>
                  {i18n.language === 'ar' ? 'العربية' : 'English'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange('ar')}>Arabic</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavbarA;
