import React from 'react';
import './component.css'; // Import custom CSS
import { Navbar, Nav, Container } from 'react-bootstrap'; // Using react-bootstrap for the Navbar

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="image/logo.png" // Change this path according to your project structure
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: '150px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarToggler" />
        <Navbar.Collapse id="navbarToggler">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#">Used Cars</Nav.Link>
            <Nav.Link href="#">Auctions</Nav.Link>
            <Nav.Link href="#">New Cars</Nav.Link>
            <Nav.Link href="#">Sell Cars</Nav.Link>
            <Nav.Link href="#">Local Dealers</Nav.Link>
            <Nav.Link href="#">Support</Nav.Link>
            <Nav.Item >
              <div className='d-flex align-items-center gap-1'>
                <img className="pl-1" src="image/Resting.png" alt="User Icon" />
                <Nav.Link className='text-decoration-none fw-bolder' href="#">
                  <span className='grayC'>Sign Up</span>
                </Nav.Link>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
