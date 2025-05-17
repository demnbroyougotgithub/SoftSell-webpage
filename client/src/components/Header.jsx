import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="SoftSell"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          SoftSell
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
