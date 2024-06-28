import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <Image
            src="/images/mountain.svg"
            alt="logo"
            width={40}
            height={40}
            className="d-inline-block align-top"
          />
          <h3 className="ml-2 text-lAccent  mb-0">
            Hiking<span className="font-weight-bold"> Life</span>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-20">
            <Nav.Link href="#" className="text-light text-xl">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-light text-xl">
              Class
            </Nav.Link>
            <Nav.Link href="#" className="text-light text-xl">
              Promo
            </Nav.Link>
            <Nav.Link href="#" className="text-light text-xl">
              Online Class
            </Nav.Link>
            <Nav.Link href="#" className="text-light text-xl">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
