import React from 'react';
import { Container, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';

const HeroSection = () => {
  return (
    <section className="theme-section text-center py-5">
      <Container>
        <img
          src={logo}
          alt="SoftSell Logo"
          style={{ height: '80px', marginBottom: '20px' }}
        />
        <h1 className="display-4">Sell Unused Software Licenses</h1>
        <p className="lead">Turn your unused software into cash in just a few clicks.</p>
        <Button variant="primary" size="lg">Get a Quote</Button>
      </Container>
    </section>
  );
};

export default HeroSection;
