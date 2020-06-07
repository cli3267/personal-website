import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => (
  <div style={{ color: 'white', fontSize: '24px' }}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>Christina Li</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav defaultActiveKey="#home">
          <Nav.Link href="#home" to="/">
            Home
          </Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
